
import React, { useState } from 'react';
import { Languages, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { SupportedLanguage, supportedLanguages, getLanguageFlag } from '@/translations';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: SupportedLanguage) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1 px-2 hover:bg-primary/10"
        >
          <Languages size={18} className="mr-1" />
          <span className="flex items-center">
            {getLanguageFlag(language)} <span className="ml-1 text-xs font-bold">{language.toUpperCase()}</span>
          </span>
          <ChevronDown size={14} className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={5} className="w-[150px]">
        {supportedLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            className={`flex items-center gap-2 cursor-pointer ${language === lang ? 'bg-primary/10 font-medium' : ''}`}
            onClick={() => handleLanguageChange(lang)}
          >
            <span className="text-lg">{getLanguageFlag(lang)}</span>
            <span>{lang.toUpperCase()}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
