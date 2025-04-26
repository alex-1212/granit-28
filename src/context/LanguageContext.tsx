
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Language, translations, TranslationPath, PathValue } from '@/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <P extends TranslationPath>(path: P) => PathValue<typeof translations['ru'], P>;
  availableLanguages: { code: Language; name: string; flag: string }[];
};

const defaultLanguage: Language = 'ru';

export const availableLanguages = [
  { code: 'ru' as const, name: 'Русский', flag: '🇷🇺' },
  { code: 'en' as const, name: 'English', flag: '🇬🇧' },
  { code: 'zh' as const, name: 'Китайский', flag: '🇨🇳' },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  
  // Инициализация языка из localStorage или браузера
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage && Object.keys(translations).includes(storedLanguage)) {
      setLanguageState(storedLanguage);
    } else {
      // Если нет сохраненного языка, проверяем язык браузера
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en' || browserLang === 'zh') {
        setLanguageState(browserLang as Language);
      }
    }
  }, []);
  
  // Функция для установки языка с сохранением в localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };
  
  // Функция для получения перевода по ключу с поддержкой вложенных путей
  const t = <P extends TranslationPath>(path: P): PathValue<typeof translations['ru'], P> => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current === undefined || current[key] === undefined) {
        console.warn(`Translation key "${path}" missing for language "${language}"`);
        // Возвращаем значение из русского языка, если перевод отсутствует
        let fallback: any = translations['ru'];
        for (const fbKey of keys) {
          if (fallback === undefined || fallback[fbKey] === undefined) {
            return path as any; // Возвращаем сам ключ, если нет даже русской версии
          }
          fallback = fallback[fbKey];
        }
        return fallback as any;
      }
      current = current[key];
    }
    
    return current as any;
  };
  
  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t,
      availableLanguages
    }}>
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
