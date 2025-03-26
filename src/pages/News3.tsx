
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllNews, NewsItem } from '@/services/newsService';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const News3 = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Новости3 — ООО «Гранит»';
    
    const fetchNews = async () => {
      try {
        setLoading(true);
        const newsData = await getAllNews();
        console.log('Fetched news for News3:', newsData.length);
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news for News3:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return format(date, 'd MMMM yyyy', { locale: ru });
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 p-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-slate-800">Новости3</h1>
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-slate-800">Новости3</h1>
      
      {news && news.length > 0 ? (
        <div className="max-w-5xl mx-auto">
          {news.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md mb-8 overflow-hidden transform transition-transform hover:scale-[1.01]"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {formatDate(item.date)}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 text-gray-800">
                    {item.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {item.summary}
                  </p>
                  
                  <Link 
                    to={`/news/${item.id}`}
                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Читать далее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">Новости не найдены</p>
        </div>
      )}
    </div>
  );
};

export default News3;
