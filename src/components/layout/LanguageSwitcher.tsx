
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Flag } from 'lucide-react';

const languageFlags = {
  'ru': (
    <span className="flex items-center">
      <span className="mr-2 inline-block w-4 h-3 bg-gradient-to-b from-white via-blue-500 to-red-500 rounded-sm"></span>
      Русский
    </span>
  ),
  'en': (
    <span className="flex items-center">
      <span className="mr-2 inline-block w-4 h-3 bg-gradient-to-b from-blue-700 via-white to-red-700 rounded-sm"></span>
      English
    </span>
  ),
  'zh': (
    <span className="flex items-center">
      <span className="mr-2 inline-block w-4 h-3 bg-red-600 relative">
        <span className="absolute top-0 left-0 w-2 h-1.5 flex items-center justify-center">
          <span className="text-yellow-400 text-[8px]">★</span>
        </span>
        <span className="absolute top-0.5 left-1.5 w-1 h-1 flex items-center justify-center">
          <span className="text-yellow-400 text-[4px]">★</span>
        </span>
      </span>
      中文
    </span>
  )
};

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Flag size={16} className="opacity-70" />
          {languageFlags[language]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background">
        <DropdownMenuItem onClick={() => setLanguage('ru')}>
          {languageFlags['ru']}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          {languageFlags['en']}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('zh')}>
          {languageFlags['zh']}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
