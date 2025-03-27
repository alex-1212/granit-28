import React, { useEffect, useState } from 'react';
import { NewsItem } from '@/services/newsService';
import NewsCard from './NewsCard';
import NewsCardSkeleton from './NewsCardSkeleton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton';
import { useDelayedLoading } from '@/hooks/use-delayed-loading';

interface NewsGridProps {
  isLoading: boolean;
  news: NewsItem[];
  filter: string;
  formatDate: (dateString: string) => string;
}

const NewsGrid = ({ isLoading, news, filter, formatDate }: NewsGridProps) => {
  const isMobile = useIsMobile();
  
  // Use delayed loading with 500ms minimum duration
  const delayedLoading = useDelayedLoading(isLoading, 500);
  
  // Адаптивные настройки для разных размеров экрана
  const itemsPerRow = isMobile ? 1 : 3; // Мобильный: 1, десктоп: 3
  const initialRows = isMobile ? 3 : 2; // Больше начальных строк на мобильных
  const rowsToLoad = isMobile ? 3 : 2; // Загружать больше строк на мобильных
  
  // Состояние для отслеживания количества отображаемых строк
  const [visibleRows, setVisibleRows] = useState(initialRows);
  
  // Общее количество видимых элементов
  const visibleItems = visibleRows * itemsPerRow;
  
  // Видимые новости
  const visibleNews = news.slice(0, visibleItems);
  
  // Проверка, есть ли еще новости для отображения
  const hasMoreNews = news.length > visibleItems;

  useEffect(() => {
    // Логирование для отладки
    console.log('NewsGrid rendered with:');
    console.log('isLoading:', isLoading);
    console.log('news items count:', news.length);
    console.log('filter:', filter);
    console.log('visible rows:', visibleRows);
    console.log('visible items:', visibleItems);
    console.log('is mobile:', isMobile);
  }, [isLoading, news, filter, visibleRows, visibleItems, isMobile]);

  // Сброс видимых строк при изменении фильтра
  useEffect(() => {
    setVisibleRows(initialRows);
  }, [filter, initialRows]);

  // Обработчик нажатия на кнопку "Показать еще"
  const handleLoadMore = () => {
    setVisibleRows(prev => prev + rowsToLoad);
  };
  
  // Обработчик для прокрутки страницы наверх
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (delayedLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {Array(itemsPerRow * initialRows).fill(0).map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="text-center py-8 md:py-12">
        <p className="text-base md:text-lg text-muted-foreground">
          Новостей в категории "{filter}" пока нет
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {visibleNews.map((newsItem) => (
          <div key={newsItem.id} className="h-full">
            <NewsCard 
              newsItem={newsItem}
              formatDate={formatDate}
            />
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8 md:mt-12">
        {hasMoreNews ? (
          <Button 
            variant="outline" 
            size={isMobile ? "default" : "lg"} 
            className="border-primary dark:border-white text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10"
            onClick={handleLoadMore}
          >
            Показать еще
          </Button>
        ) : (
          <Button 
            asChild
            variant="outline" 
            size={isMobile ? "default" : "lg"} 
            className="border-primary dark:border-white text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10"
            onClick={handleScrollToTop}
          >
            <Link to="/news">
              К другим новостям
            </Link>
          </Button>
        )}
      </div>
      
      {/* Кнопка прокрутки наверх */}
      <ScrollToTopButton />
    </>
  );
};

export default NewsGrid;
