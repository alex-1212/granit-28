
import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '@/translations';

export type Language = 'ru' | 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ru');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null;
    if (storedLanguage && ['ru', 'en', 'zh'].includes(storedLanguage)) {
      setLanguageState(storedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
    
    // Добавляем атрибут lang для доступности
    document.documentElement.lang = newLanguage;
  };

  // Функция для получения перевода по ключу с поддержкой вложенных ключей
  const t = (key: string): string => {
    // Разделяем ключ на сегменты (для вложенных объектов)
    const segments = key.split('.');
    
    // Начинаем с корня перевода для текущего языка
    let translation: any = translations[language];
    
    // Если перевода для текущего языка нет, используем русский
    if (!translation) {
      translation = translations['ru'];
    }
    
    // Пройдемся по всем сегментам ключа
    for (const segment of segments) {
      if (translation && typeof translation === 'object' && segment in translation) {
        translation = translation[segment];
      } else {
        // Если перевод не найден, возвращаем ключ или ищем в русском языке
        return translations['ru']?.[key] || key;
      }
    }
    
    return typeof translation === 'string' ? translation : key;
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
