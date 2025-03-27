
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
      className="p-2 rounded-lg bg-secondary/80 dark:bg-secondary/30 hover:bg-muted dark:hover:bg-muted transition-all duration-300 relative overflow-hidden"
    >
      <div className="relative z-10">
        {theme === 'light' ? (
          <Moon size={18} className="text-foreground transform transition-transform duration-300" />
        ) : (
          <Sun size={18} className="text-foreground transform transition-transform duration-300" />
        )}
      </div>
      <div 
        className={`absolute inset-0 transition-transform duration-500 ${
          theme === 'light' 
            ? '-translate-x-full bg-primary/10' 
            : 'translate-x-0 bg-primary/20'
        }`}
      />
    </button>
  );
};
