
import React, { useEffect, useState } from 'react';
import { getNewsById, getAllNews, NewsItem } from '@/services/newsService';
import { useTheme } from '@/context/ThemeContext';

const News2 = () => {
  const [news, setNews] = useState<NewsItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();
  
  useEffect(() => {
    document.title = 'Новости2 — ООО «Гранит»';
    
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        // First get all news to find the one about Zabaykalye factory
        const allNews = await getAllNews();
        
        // Find the news item with title about factory in Zabaykalye
        const zabaykalyeNews = allNews.find(item => 
          item.title.includes('Запуск завода в Забайкалье')
        );
        
        if (zabaykalyeNews) {
          // Now fetch the complete news item by its UUID
          const newsItem = await getNewsById(zabaykalyeNews.id);
          if (newsItem) {
            setNews(newsItem);
          }
        }
      } catch (error) {
        console.error('Error fetching news:', error);
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
        <div className="max-w-3xl mx-auto">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-8 animate-pulse"></div>
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded mb-8 animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!news) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Новость не найдена</h1>
          <p>Запрашиваемая новость не существует или была удалена.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className={`rounded-lg overflow-hidden shadow-lg mb-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <img 
              src={news.image} 
              alt={news.title} 
              className="w-full h-64 object-cover"
            />
            
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {formatDate(news.date)}
              </p>
              
              <div className="mb-4">
                <p className="text-lg font-semibold mb-4">{news.summary}</p>
              </div>
              
              <div 
                className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News2;
