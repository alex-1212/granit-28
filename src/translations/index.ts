
import { ruTranslations } from './ru';
import { enTranslations } from './en';
import { zhTranslations } from './zh';

// Определяем тип для всех переводов, используя русский как основу
export type TranslationKeys = typeof ruTranslations;

// Проверяем, что все языки имеют одинаковую структуру ключей
type TranslationsCheck = {
  ru: TranslationKeys;
  en: TranslationKeys;
  zh: TranslationKeys;
};

// Объединяем все переводы в один объект
export const translations: TranslationsCheck = {
  ru: ruTranslations,
  en: enTranslations,
  zh: zhTranslations
};

// Типы для поддерживаемых языков
export type SupportedLanguage = keyof typeof translations;
export const supportedLanguages: SupportedLanguage[] = ['ru', 'en', 'zh'];

// Функция для получения названия языка
export const getLanguageName = (code: SupportedLanguage): string => {
  const names: Record<SupportedLanguage, string> = {
    ru: 'Русский',
    en: 'English',
    zh: '中文'
  };
  return names[code];
};

// Функция для получения emoji флага языка
export const getLanguageFlag = (code: SupportedLanguage): string => {
  const flags: Record<SupportedLanguage, string> = {
    ru: '🇷🇺',
    en: '🇬🇧',
    zh: '🇨🇳'
  };
  return flags[code];
};
