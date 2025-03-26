
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { NewsItem, getAllNews } from '@/services/newsService';
import NewsHero from '@/components/news/NewsHero';
import NewsFilters from '@/components/news/NewsFilters';
import NewsGrid from '@/components/news/NewsGrid';

const News3 = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("Все");

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const fetchedNews = await getAllNews();
      setNews(fetchedNews);
      setIsLoading(false);
      console.log("Fetched news for News3:", fetchedNews.length);
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'd MMMM yyyy', { locale: ru });
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  };

  const filteredNews = filter === "Все" 
    ? news 
    : news.filter(item => item.category === filter);

  return (
    <div className="container mx-auto px-4 py-12">
      <NewsHero 
        title="Новости3" 
        subtitle="Последние события и новости нашей компании" 
      />
      
      <div className="mt-8 mb-12">
        <NewsFilters 
          currentFilter={filter} 
          onFilterChange={setFilter} 
          onCreateNews={() => {}} 
        />
      </div>
      
      <NewsGrid 
        isLoading={isLoading}
        news={filteredNews}
        filter={filter}
        formatDate={formatDate}
      />
    </div>
  );
};

export default News3;
