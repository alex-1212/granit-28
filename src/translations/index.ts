
import { ruTranslations } from './ru';
import { enTranslations } from './en';
import { zhTranslations } from './zh';

export type Language = 'ru' | 'en' | 'zh';

export type TranslationKeys = keyof typeof ruTranslations;

export const translations = {
  ru: ruTranslations,
  en: enTranslations,
  zh: zhTranslations
};

// Тип для проверки вложенных ключей перевода
export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

// Тип для получения значения по вложенному ключу
export type PathValue<T, P extends string> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? PathValue<T[Key], Rest>
    : never
  : P extends keyof T
    ? T[P]
    : never;

export type TranslationPath = NestedKeyOf<typeof ruTranslations>;
