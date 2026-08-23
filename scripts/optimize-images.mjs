/**
 * Оптимизация изображений: конвертация используемых PNG/JPG в WebP.
 *
 * - Обрабатываются только файлы, на которые есть ссылки в src/ и index.html
 * - q=80, длинная сторона ограничена 1920px
 * - Ссылки в коде переписываются на .webp, оригиналы удаляются
 * - Логотип/OG-картинка (og:image для соцсетей) остаются PNG
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, unlinkSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const PUBLIC = path.join(ROOT, 'public');
const KEEP_AS_IS = new Set([
  '88fff896-717b-4e5d-89b9-497557d68736.png', // логотип + og:image — нужен PNG
]);

const walk = d =>
  readdirSync(d, { withFileTypes: true }).flatMap(e =>
    e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]
  );

// 1. Какие картинки реально используются в коде
let code = '';
for (const f of [...walk(path.join(ROOT, 'src')), path.join(ROOT, 'index.html')]) {
  if (!/\.(tsx|ts|css|html)$/.test(f)) continue;
  code += readFileSync(f, 'utf8');
}

const used = new Set();
for (const m of code.matchAll(/\/(?:uploads|images)\/([A-Za-z0-9._-]+\.(?:png|jpe?g))/gi)) {
  used.add(m[1]);
}
console.log(`Используемых растровых картинок: ${used.size}`);

// 2. Конвертация
const sharp = (await import('sharp')).default;
const renamed = []; // [oldName, newName]
let savedBytes = 0;

for (const dir of ['uploads', 'images']) {
  for (const name of used) {
    const srcPath = path.join(PUBLIC, dir, name);
    if (!existsSync(srcPath) || KEEP_AS_IS.has(name)) continue;
    const ext = path.extname(name).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const webpName = name.slice(0, -ext.length) + '.webp';
    const outPath = path.join(PUBLIC, dir, webpName);
    if (existsSync(outPath)) continue; // уже сконвертирован

    const before = statSync(srcPath).size;
    await sharp(srcPath)
      .rotate()
      .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath);
    const after = statSync(outPath).size;

    if (after < before) {
      savedBytes += before - after;
      renamed.push([`${dir}/${name}`, `${dir}/${webpName}`]);
    } else {
      // WebP не дал выигрыша — оставляем оригинал
      savedBytes -= after;
      console.log(`  без выигрыша, пропущен: ${name}`);
    }
  }
}

// 3. Переписываем ссылки в коде
for (const [oldRel, newRel] of renamed) {
  code = code.split(oldRel).join(newRel);
}
const filesToPatch = [
  ...walk(path.join(ROOT, 'src')).filter(f => /\.(tsx|ts|css)$/.test(f)),
  path.join(ROOT, 'index.html'),
];
for (const f of filesToPatch) {
  let content = readFileSync(f, 'utf8');
  let patched = content;
  for (const [oldRel, newRel] of renamed) patched = patched.split(oldRel).join(newRel);
  if (patched !== content) writeFileSync(f, patched);
}

// 4. Удаляем оригиналы (заменены WebP)
for (const [oldRel] of renamed) {
  try {
    unlinkSync(path.join(PUBLIC, oldRel));
  } catch {
    console.warn(`  не удалось удалить: ${oldRel}`);
  }
}

console.log(`\nКонвертировано: ${renamed.length}, экономия: ${(savedBytes / 1024 / 1024).toFixed(2)} МБ`);
