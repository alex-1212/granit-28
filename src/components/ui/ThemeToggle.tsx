
import React from 'react';
import { useLanguage, Language } from '@/context/LanguageContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Flag as FlagIcon } from 'country-flag-icons/react/3x2';

const languages: Record<Language, { name: string, code: string, flag: string }> = {
  ru: { name: 'Русский', code: 'RU', flag: 'RU' },
  en: { name: 'English', code: 'GB', flag: 'GB' },
  zh: { name: '中文', code: 'CN', flag: 'CN' }
};

export const ThemeToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label={t('header.changeLanguage')}
          className="p-2 rounded-lg bg-secondary/80 dark:bg-secondary/30 hover:bg-muted dark:hover:bg-muted transition-all duration-300 flex items-center gap-2"
        >
          <FlagIcon 
            title={languages[language].name} 
            className="w-5 h-5 rounded-sm" 
            code={languages[language].flag} 
          />
          <span className="text-xs font-medium hidden sm:inline-block">{languages[language].code}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <DropdownMenuItem
            key={code}
            className={`flex items-center gap-2 cursor-pointer ${
              language === code ? 'bg-primary/10 dark:bg-primary/20' : ''
            }`}
            onClick={() => setLanguage(code as Language)}
          >
            <FlagIcon 
              title={name} 
              className="w-5 h-5 rounded-sm" 
              code={flag} 
            />
            <span>{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
