
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
      className="p-2 rounded-lg bg-secondary/80 dark:bg-secondary/30 hover:bg-muted dark:hover:bg-muted transition-all duration-300"
    >
      {theme === 'light' ? (
        <Moon size={18} className="text-foreground" />
      ) : (
        <Sun size={18} className="text-foreground" />
      )}
    </button>
  );
};
