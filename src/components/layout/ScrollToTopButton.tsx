
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface ScrollToTopButtonProps {
  showOffset?: number;
  className?: string;
}

export const ScrollToTopButton = ({
  showOffset = 300,
  className
}: ScrollToTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Отслеживание прокрутки страницы и расчет прогресса
  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Показываем кнопку только после определенной прокрутки
      if (scrollTop > showOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Вычисляем процент прокрутки
      const scrollPercent = scrollTop / (documentHeight - windowHeight) * 100;
      setScrollProgress(Math.min(Math.round(scrollPercent), 100));
    };

    window.addEventListener('scroll', calculateScrollProgress);
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, [showOffset]);

  // Прокрутка наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={cn(
        'fixed bottom-6 right-6 z-50 h-10 w-10 transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none',
        className
      )}
    >
      {/* Круговой прогресс-бар */}
      <div className="absolute inset-0">
        <svg className="w-full h-full -rotate-90">
          <circle 
            className="text-muted stroke-current" 
            strokeWidth="2" 
            stroke="currentColor" 
            fill="transparent" 
            r="18" 
            cx="20" 
            cy="20"
          />
          <circle 
            className="text-primary stroke-current" 
            strokeWidth="2" 
            strokeDasharray={113} 
            strokeDashoffset={113 - 113 * scrollProgress / 100} 
            strokeLinecap="round" 
            stroke="currentColor" 
            fill="transparent" 
            r="18" 
            cx="20" 
            cy="20"
          />
        </svg>
      </div>
      
      {/* Кнопка */}
      <Button 
        variant="outline" 
        size="icon" 
        onClick={scrollToTop} 
        aria-label="Прокрутить наверх" 
        className="relative w-full h-full rounded-full shadow-md hover:shadow-lg border-none transition-all duration-300 bg-white dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary"
      >
        <ArrowUp size={20} className="text-primary hover:text-white transition-colors duration-300" />
      </Button>
    </div>
  );
};
