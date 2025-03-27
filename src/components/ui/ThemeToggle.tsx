
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
      className="p-2 rounded-lg bg-secondary/80 dark:bg-secondary/30 hover:bg-muted dark:hover:bg-muted transition-all duration-300 relative overflow-hidden"
    >
      <Sun 
        size={18} 
        className={cn(
          "text-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
          theme === 'dark' ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
        )} 
      />
      <Moon 
        size={18} 
        className={cn(
          "text-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
          theme === 'light' ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
        )} 
      />
      <span className="opacity-0">
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </span>
    </button>
  );
};
