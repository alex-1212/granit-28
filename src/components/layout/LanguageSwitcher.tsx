
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
        <span className="mr-2 w-5 h-3 rounded-sm bg-gradient-to-r from-white via-blue-500 to-red-500"></span>
        Русский
      </span>
    )
  },
  'en': {
    label: 'English',
    icon: () => (
      <span className="flex items-center">
        <span className="mr-2 w-5 h-3 rounded-sm bg-gradient-to-r from-red-600 via-white to-blue-600"></span>
        English
      </span>
    )
  },
  'zh': {
    label: '中文',
    icon: () => (
      <span className="flex items-center">
        <span className="mr-2 w-5 h-3 bg-red-600 relative">
          <span className="absolute top-0 left-0 text-yellow-300 text-[0.5rem]">★</span>
          <span className="absolute bottom-0 right-0 text-yellow-300 text-[0.5rem]">★</span>
        </span>
        中文
      </span>
    )
  }
};

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2 px-3 bg-secondary/30 hover:bg-secondary/50 transition-colors"
        >
          <Languages size={16} className="opacity-70" />
          <span className="text-sm font-medium">
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
