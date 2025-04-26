
import React, { useState } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/translations';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LanguageSelector = () => {
  const { language, setLanguage, availableLanguages } = useLanguage();
  const [open, setOpen] = useState(false);
  
  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setOpen(false);
  };
  
  // Найти текущий язык по коду
  const currentLanguage = availableLanguages.find(lang => lang.code === language);
  
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-accent focus:outline-none">
        <Globe size={16} className="text-primary" />
        <span className="mx-1 text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" sideOffset={8} className="w-44">
        {availableLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleSelect(lang.code)}
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
            {language === lang.code && (
              <Check size={16} className="ml-auto text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
