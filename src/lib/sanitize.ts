import DOMPurify from 'dompurify';

/**
 * Разрешённые теги контента новостей (редактор вставляет обычную типографику).
 * Всё остальное (script, style, iframe, form и т.д.) DOMPurify вырежет.
 */
const ALLOWED_TAGS = [
  'p', 'br', 'hr',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li',
  'strong', 'b', 'em', 'i', 'u', 's', 'sub', 'sup',
  'blockquote', 'pre', 'code',
  'a', 'img', 'figure', 'figcaption',
  'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'span', 'div',
];

const ALLOWED_ATTR = [
  'href', 'target', 'rel', 'title',
  'src', 'alt', 'width', 'height', 'loading',
  'class',
];

/**
 * Санитизация HTML-контента новостей перед вставкой в DOM.
 * Защита от stored XSS: контент приходит из Supabase и может быть
 * создан любым авторизованным пользователем.
 */
export const sanitizeNewsHtml = (dirty: string): string =>
  DOMPurify.sanitize(dirty ?? '', {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    // Ссылки — только безопасные протоколы, внешние открываем с rel="noopener"
    ALLOWED_URI_REGEXP: /^(?:https?:|mailto:|tel:|\/)/i,
  });
