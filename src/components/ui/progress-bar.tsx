
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const ProgressBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // При изменении маршрута запускаем анимацию загрузки
    setIsLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        // Быстро доходим до 80%, затем медленнее
        const newProgress = oldProgress + (oldProgress < 80 ? 10 : 2);
        return newProgress > 98 ? 98 : newProgress;
      });
    }, 100);

    // Имитация окончания загрузки страницы
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 200); // Небольшая задержка перед скрытием
    }, 800); // Минимальное время отображения - 800ms для соответствия другим анимациям

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [location]);

  if (!isLoading && progress === 0) return null;

  return (
    <div 
      className={`fixed top-0 left-0 right-0 h-1 bg-primary z-[9999] transition-all duration-300 ${
        progress === 100 ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ width: `${progress}%` }}
    />
  );
};
