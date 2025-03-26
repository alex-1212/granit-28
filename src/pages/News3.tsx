
import React, { useEffect, useState } from 'react';
import { getAllNews, NewsItem } from '@/services/newsService';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

const News3 = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'Новости3 — ООО «Гранит»';
    
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const data = await getAllNews();
        setNews(data);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Новости3</h1>
        <div className="space-y-6">
          {Array(5).fill(0).map((_, index) => (
            <div key={index} className="flex flex-col">
              <Skeleton className="h-6 w-1/3 mb-2" />
              <Skeleton className="h-4 w-1/4 mb-4" />
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Новости3</h1>
      
      <div className="space-y-8">
        {news.map((item) => (
          <div 
            key={item.id}
            className="news-item border-l-4 border-primary pl-4 hover:bg-background"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <div className="flex gap-3 text-sm text-muted-foreground mb-3">
              <span>{formatDate(item.date)}</span>
              <span>•</span>
              <span className="bg-primary/10 px-2 py-0.5 rounded-full text-primary">
                {item.category}
              </span>
            </div>
            <p className="mb-3">{item.summary}</p>
            <Link 
              to={`/news/${item.id}`}
              className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Читать далее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News3;
