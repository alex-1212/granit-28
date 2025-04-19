
import { ru } from './ru';
import { en } from './en';
import { zh } from './zh';

export type Language = 'ru' | 'en' | 'zh';

export const translations = {
  ru,
  en,
  zh
};

export type TranslationKeys = typeof ru;
