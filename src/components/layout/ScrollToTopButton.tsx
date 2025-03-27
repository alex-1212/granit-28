
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

  // Отслеживание прокрутки страницы
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > showOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showOffset]);

  // Прокрутка наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        'fixed bottom-6 right-6 z-50 rounded-full shadow-md hover:shadow-lg bg-primary/90 hover:bg-primary border-none text-white transition-all duration-300 transform',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none',
        className
      )}
      onClick={scrollToTop}
      aria-label="Прокрутить наверх"
    >
      <ArrowUp size={20} />
    </Button>
  );
};
