
import React, { useEffect, useState } from 'react';
import { NewsItem } from '@/services/newsService';
import NewsCard from './NewsCard';
import NewsCardSkeleton from './NewsCardSkeleton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface NewsGridProps {
  isLoading: boolean;
  news: NewsItem[];
  filter: string;
  formatDate: (dateString: string) => string;
}

const NewsGrid = ({ isLoading, news, filter, formatDate }: NewsGridProps) => {
  // Расчет количества новостей в одном ряду в зависимости от размера экрана
  // Мобильный: 1 новость в ряду, планшет: 2, десктоп: 3
  const itemsPerRow = 3; // Максимальное количество элементов в ряду (на десктопе)
  const initialRows = 2; // Начальное количество строк
  const rowsToLoad = 2; // Количество строк для загрузки при нажатии кнопки
  
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
  }, [isLoading, news, filter, visibleRows, visibleItems]);

  // Сброс видимых строк при изменении фильтра
  useEffect(() => {
    setVisibleRows(initialRows);
  }, [filter]);

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

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(itemsPerRow * initialRows).fill(0).map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">
          Новостей в категории "{filter}" пока нет
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleNews.map((newsItem) => (
          <div key={newsItem.id} className="h-full">
            <NewsCard 
              newsItem={newsItem}
              formatDate={formatDate}
            />
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        {hasMoreNews ? (
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary dark:border-white text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10"
            onClick={handleLoadMore}
          >
            Показать еще
          </Button>
        ) : (
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="border-primary dark:border-white text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10"
            onClick={handleScrollToTop}
          >
            <Link to="/news">
              К другим новостям
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default NewsGrid;
