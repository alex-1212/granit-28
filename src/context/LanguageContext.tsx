
import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '@/translations';

export type Language = 'ru' | 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  // Получение языка из localStorage при загрузке
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null;
    
    if (storedLanguage && ['ru', 'en', 'zh'].includes(storedLanguage)) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Сохранение выбранного языка в localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Функция перевода текста
  const t = (key: string, defaultValue?: string): string => {
    // Разбиваем ключ на части для доступа к вложенным объектам
    const keys = key.split('.');
    
    try {
      // @ts-ignore
      let result = translations[language];
      
      // Перебираем части ключа для доступа к вложенным объектам
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          // @ts-ignore
          result = result[k];
        } else {
          // Если ключ не найден, возвращаем значение по умолчанию или сам ключ
          return defaultValue || key;
        }
      }
      
      // Если результат - строка, возвращаем её, иначе возвращаем значение по умолчанию или ключ
      return typeof result === 'string' ? result : (defaultValue || key);
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return defaultValue || key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};
