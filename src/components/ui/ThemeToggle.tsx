
import React from 'react';
import { useLanguage, Language } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ThemeToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  
  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'ru', name: t('language.ru'), flag: '🇷🇺' },
    { code: 'en', name: t('language.en'), flag: '🇬🇧' },
    { code: 'zh', name: t('language.zh'), flag: '🇨🇳' },
  ];
  
  // Найти текущий язык для отображения флага
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label={t('language')}
          className="p-2 rounded-lg bg-secondary/80 dark:bg-secondary/30 hover:bg-muted dark:hover:bg-muted transition-all duration-300 flex items-center gap-2"
        >
          <span className="text-lg mr-1">{currentLanguage.flag}</span>
          <span className="hidden sm:inline-block">{language.toUpperCase()}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-primary/10 text-primary" : ""}
          >
            <span className="text-lg mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
