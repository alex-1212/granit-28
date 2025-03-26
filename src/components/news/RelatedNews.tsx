
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { NewsItem } from '@/services/newsService';

interface RelatedNewsProps {
  relatedNews: NewsItem[];
  formatDate: (dateString: string) => string;
}

const RelatedNews = ({ relatedNews, formatDate }: RelatedNewsProps) => {
  if (relatedNews.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-primary/5 dark:bg-primary/10">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12 animate-on-scroll">
          Похожие новости
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {relatedNews.map((item) => (
            <div 
              key={item.id} 
              className="glass-card-solid rounded-xl overflow-hidden transition-all duration-300 hover:shadow-subtle group animate-on-scroll"
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
                  <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(item.date)}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
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
