
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

const languageFlags = {
  'ru': {
    label: 'Русский',
    icon: () => (
      <span className="flex items-center">
        <span className="mr-2 text-lg">🇷🇺</span>
        Русский
      </span>
    )
  },
  'en': {
    label: 'English',
    icon: () => (
      <span className="flex items-center">
        <span className="mr-2 text-lg">🇺🇸</span>
        English
      </span>
    )
  },
  'zh': {
    label: '中文',
    icon: () => (
      <span className="flex items-center">
        <span className="mr-2 text-lg">🇨🇳</span>
        中文
      </span>
    )
  }
};

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2 px-3 bg-secondary/30 hover:bg-secondary/50 transition-colors"
        >
          <Languages size={16} className="opacity-70" />
          <span className="text-sm font-medium flex items-center">
            <span className="mr-2 text-lg">{language === 'ru' ? '🇷🇺' : language === 'en' ? '🇺🇸' : '🇨🇳'}</span>
            {languageFlags[language].label}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background w-40">
        {Object.keys(languageFlags).map((lang) => (
          <DropdownMenuItem 
            key={lang} 
            onClick={() => setLanguage(lang as 'ru' | 'en' | 'zh')} 
            className="cursor-pointer hover:bg-secondary/30 transition-colors"
          >
            {languageFlags[lang].icon()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

