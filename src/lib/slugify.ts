
/**
 * Функция транслитерации кириллического текста в латиницу для генерации URL-friendly slug'ов
 */
export function transliterate(str: string): string {
  const rusToLat = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
    'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts',
    'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu',
    'я': 'ya', ' ': '-', '_': '-', '«': '', '»': '', '—': '-'
  };

  return str.toLowerCase().split('').map((char) => 
    rusToLat[char as keyof typeof rusToLat] || char
  ).join('').replace(/[^\w\-]+/g, '');
}

/**
 * Функция для генерации slug из заголовка новости
 */
export function generateSlug(title: string): string {
  return transliterate(title)
    .replace(/[^\w\-]+/g, '') // Удаляем все символы, кроме букв, цифр и дефисов
    .replace(/\-{2,}/g, '-') // Заменяем повторяющиеся дефисы на один
    .replace(/^\-+|\-+$/g, ''); // Удаляем дефисы в начале и конце строки
}
