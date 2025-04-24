
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLanguage, TranslationKeys, translations } from '@/translations';

interface LanguageContextProps {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: <K extends string>(
    key: K
  ) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Получаем язык из localStorage или используем русский по умолчанию
const getInitialLanguage = (): SupportedLanguage => {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('language') as SupportedLanguage;
    if (savedLanguage && ['ru', 'en', 'zh'].includes(savedLanguage)) {
      return savedLanguage;
    }
  }
  return 'ru';
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(getInitialLanguage);

  // Функция для установки языка и сохранения в localStorage
  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Функция для получения перевода по ключу
  const t = <K extends string>(key: K): string => {
    // Разбиваем ключ на части для доступа к вложенным объектам
    const keys = String(key).split('.');
    let result: any = translations[language];
    
    for (const k of keys) {
      if (result && k in result) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key} in language ${language}`);
        // Попробуем найти ключ в русском языке как запасной вариант
        if (language !== 'ru') {
          let fallback: any = translations['ru'];
          for (const fk of keys) {
            if (fallback && fk in fallback) {
              fallback = fallback[fk];
            } else {
              return key; // Возвращаем сам ключ, если перевод не найден
            }
          }
          return fallback;
        }
        return key; // Возвращаем сам ключ, если перевод не найден
      }
    }
    
    return result;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Хук для использования языкового контекста
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
