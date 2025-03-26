
import React from 'react';
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
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6).fill(0).map((_, index) => (
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((newsItem) => (
        <NewsCard 
          key={newsItem.id} 
          newsItem={newsItem}
          formatDate={formatDate}
        />
      ))}
    </div>
  );
};

export default NewsGrid;
