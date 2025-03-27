
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { NewsItem } from '@/services/newsService';

interface RelatedNewsProps {
  relatedNews: NewsItem[];
  formatDate: (dateString: string) => string;
}

const RelatedNews = ({ relatedNews, formatDate }: RelatedNewsProps) => {
  const { theme } = useTheme();
  
  if (relatedNews.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-display font-bold mb-12 text-center ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
          Похожие новости
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {relatedNews.map((item) => (
            <div 
              key={item.id} 
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${theme === 'dark' ? 'bg-primary/20 text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                    {item.category}
                  </span>
                  <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {formatDate(item.date)}
                  </span>
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} group-hover:text-primary transition-colors`}>
                  {item.title}
                </h3>
                
                <Link 
                  to={`/news/${item.id}`}
                  className="text-primary font-medium flex items-center gap-1 hover:underline"
                >
                  Читать
                  <ArrowLeft size={16} className="rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedNews;
