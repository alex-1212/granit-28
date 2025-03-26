
import React from 'react';
import { NewsItem } from '@/services/newsService';
import NewsCard from './NewsCard';
import NewsCardSkeleton from './NewsCardSkeleton';
import { Link, useLocation } from 'react-router-dom';

interface NewsGridProps {
  isLoading: boolean;
  news: NewsItem[];
  filter: string;
  formatDate: (dateString: string) => string;
}

const NewsGrid = ({ isLoading, news, filter, formatDate }: NewsGridProps) => {
  const location = useLocation();
  const isNews3Page = location.pathname === '/news3';

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

  // Simple list style for News3 page
  if (isNews3Page) {
    return (
      <div className="space-y-6">
        {news.map((newsItem) => (
          <Link 
            to={`/news/${newsItem.id}`} 
            key={newsItem.id}
            className="block border border-border rounded-lg hover:bg-muted/30 transition-colors"
          >
            <div className="flex flex-col md:flex-row p-4 gap-4">
              <div className="w-full md:w-1/4 shrink-0">
                <img 
                  src={newsItem.image} 
                  alt={newsItem.title} 
                  className="w-full h-48 md:h-full rounded-md object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block px-2 py-1 bg-accent/20 text-accent-foreground text-xs rounded-full font-medium">
                    {newsItem.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {formatDate(newsItem.date)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-2">{newsItem.title}</h3>
                <p className="text-muted-foreground line-clamp-3">{newsItem.summary}</p>
                <div className="mt-4">
                  <span className="text-primary font-medium">Читать далее →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  // Original grid style for other pages
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
