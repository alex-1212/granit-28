
import React, { useEffect } from 'react';
import { NewsItem } from '@/services/newsService';
import NewsCard from './NewsCard';
import NewsCardSkeleton from './NewsCardSkeleton';

interface NewsGridProps {
  isLoading: boolean;
  news: NewsItem[];
  filter: string;
  formatDate: (dateString: string) => string;
}

const NewsGrid = ({ isLoading, news, filter, formatDate }: NewsGridProps) => {
  useEffect(() => {
    // Логирование для отладки
    console.log('NewsGrid rendered with:');
    console.log('isLoading:', isLoading);
    console.log('news items count:', news.length);
    console.log('filter:', filter);
  }, [isLoading, news, filter]);

  // Render the skeleton loaders when content is loading
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6).fill(0).map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Show a message if no news items are found for the selected filter
  if (news.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">
          Новостей в категории "{filter}" пока нет
        </p>
      </div>
    );
  }

  // Render the actual news grid once data is loaded
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((newsItem) => (
        <div key={newsItem.id} className="h-full">
          <NewsCard 
            newsItem={newsItem}
            formatDate={formatDate}
          />
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
