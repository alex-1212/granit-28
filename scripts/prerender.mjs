/**
 * Пререндеринг SPA в статический HTML для поисковых систем.
 *
 * 1. Поднимает локальный статический сервер на dist/
 * 2. Получает список slug'ов новостей из Supabase (для /news/:slug)
 * 3. Рендерит каждый маршрут через headless Chrome и сохраняет HTML:
 *    /about -> dist/about/index.html
 * 4. Копирует index.html -> 404.html (SPA-fallback на GitHub Pages)
 * 5. Генерирует актуальный sitemap.xml (включая новости)
 */
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const PORT = process.env.PRERENDER_PORT || 4173;
const SITE_URL = 'https://granit-svg.ru';

// Ключ из src/integrations/supabase/client.ts (публичный anon-ключ)
const SUPABASE_URL = 'https://fwlozixvgrzfzdbojjxf.supabase.co';
const SUPABASE_ANON_KEY =
  process.env.SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3bG96aXh2Z3J6ZnpkYm9qanhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5ODczNjMsImV4cCI6MjA1ODU2MzM2M30.hnphrHeKlxJ1VZ637mu4kNRnZnwBtodB0wplRP2oMfk';

const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/products', priority: '0.9', changefreq: 'weekly' },
  { path: '/evv', priority: '0.8', changefreq: 'monthly' },
  { path: '/szm', priority: '0.8', changefreq: 'monthly' },
  { path: '/factory', priority: '0.8', changefreq: 'monthly' },
  { path: '/news', priority: '0.8', changefreq: 'daily' },
  { path: '/gallery', priority: '0.7', changefreq: 'weekly' },
  { path: '/licenses', priority: '0.7', changefreq: 'monthly' },
  { path: '/team', priority: '0.6', changefreq: 'monthly' },
  { path: '/careers', priority: '0.7', changefreq: 'weekly' },
  { path: '/faq', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

async function fetchNewsSlugs() {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/news?select=slug,date&order=date.desc`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const items = data
      .filter((n) => n.slug)
      .map((n) => ({ slug: n.slug, date: n.date }));
    console.log(`[prerender] Новостей из Supabase: ${items.length}`);
    return items;
  } catch (err) {
    console.warn(
      `[prerender] Не удалось получить новости (${err.message}). Пререндерим только статические маршруты.`
    );
    return [];
  }
}

async function startServer(templateHtml) {
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
      let filePath = decodeURIComponent(url.pathname);
      if (filePath.endsWith('/')) filePath += 'index.html';

      // Навигация страницы — всегда отдаём чистый шаблон Vite,
      // чтобы каждый маршрут рендерился с нуля, а не из старого артефакта.
      const accept = req.headers.accept || '';
      const ext = path.extname(filePath);
      if (!ext && accept.includes('text/html')) {
        res.writeHead(200, { 'Content-Type': MIME['.html'] });
        res.end(templateHtml);
        return;
      }

      // Статика: файл как есть, затем .html и index.html внутри каталога.
      const candidates = [
        path.join(DIST, filePath),
        path.join(DIST, `${filePath}.html`),
        path.join(DIST, filePath, 'index.html'),
      ];
      for (const candidate of candidates) {
        if (existsSync(candidate)) {
          const body = await readFile(candidate);
          res.writeHead(200, {
            'Content-Type':
              MIME[path.extname(candidate).toLowerCase()] || 'application/octet-stream',
          });
          res.end(body);
          return;
        }
      }
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });

  return new Promise((resolve) => server.listen(PORT, '127.0.0.1', () => resolve(server)));
}

async function renderRoute(browser, route) {
  const page = await browser.newPage();
  try {
    await page.goto(`${`http://127.0.0.1:${PORT}`}${route}`, {
      waitUntil: 'networkidle2',
      timeout: 60000,
    });
    // Даём React Router, данным из Supabase и шрифтам догрузиться
    await page.waitForFunction(
      () => document.getElementById('root')?.children.length > 0,
      { timeout: 15000 }
    );
    await new Promise((r) => setTimeout(r, 1200));

    await page.evaluate(() => {
      window.scrollTo(0, 0);
      // Статические теги из index.html дублируются с тегами react-helmet-async.
      // Оставляем последние (их добавил Helmet для текущего маршрута).
      const keepLast = (nodes) =>
        nodes.slice(0, -1).forEach((n) => n.remove());
      keepLast([...document.querySelectorAll('link[rel="canonical"]')]);
      const groups = {};
      document.querySelectorAll('head meta').forEach((m) => {
        const key = m.getAttribute('name') || m.getAttribute('property');
        if (!key) return;
        (groups[key] ||= []).push(m);
      });
      Object.values(groups).forEach(keepLast);
    });

    const html = await page.evaluate(() => {
      return `<!doctype html>\n${document.documentElement.outerHTML}`;
    });

    const target = route === '/' ? '' : route;
    const outDir = path.join(DIST, target.replace(/^\//, ''));
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, 'index.html'), html);
    console.log(`[prerender] OK ${route}`);
  } finally {
    await page.close();
  }
}

function buildSitemap(newsItems) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = STATIC_ROUTES.map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  );

  for (const item of newsItems) {
    urls.push(`  <url>
    <loc>${SITE_URL}/news/${item.slug}</loc>
    <lastmod>${String(item.date).slice(0, 10) || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
}

async function main() {
  if (!existsSync(DIST)) {
    console.error('[prerender] dist/ не найден — сначала выполните `vite build`.');
    process.exit(1);
  }

  const newsItems = await fetchNewsSlugs();
  const routes = [
    ...STATIC_ROUTES.map((r) => r.path),
    ...newsItems.map((n) => `/news/${n.slug}`),
  ];

  // Чистый шаблон Vite — до того как пререндер перезапишет index.html
  const templateHtml = await readFile(path.join(DIST, 'index.html'), 'utf8');
  const server = await startServer(templateHtml);

  let browser;
  let ok = 0;
  try {
    const mod = await import('puppeteer');
    const puppeteer = mod.default ?? mod;
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    for (const route of routes) {
      try {
        await renderRoute(browser, route);
        ok += 1;
      } catch (err) {
        console.warn(`[prerender] FAIL ${route}: ${err.message}`);
      }
    }
  } finally {
    if (browser) await browser.close();
    server.close();
  }

  // SPA-fallback для GitHub Pages: неизвестные маршруты отдают 404.html,
  // внутри которого работает клиентский роутер (показывает NotFound).
  await copyFile(path.join(DIST, 'index.html'), path.join(DIST, '404.html'));

  // Свежий sitemap со всеми страницами, включая новости
  await writeFile(path.join(DIST, 'sitemap.xml'), buildSitemap(newsItems), 'utf8');

  console.log(`[prerender] Готово: ${ok}/${routes.length} страниц.`);
  if (ok < routes.length) process.exitCode = 1;
}

main().catch((err) => {
  console.error('[prerender] Фатальная ошибка:', err);
  process.exit(1);
});
