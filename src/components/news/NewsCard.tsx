
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { NewsItem } from '@/services/newsService';

interface NewsCardProps {
  newsItem: NewsItem;
  formatDate: (dateString: string) => string;
}

const NewsCard = ({ newsItem, formatDate }: NewsCardProps) => {
  return (
    <div 
      className="glass-card-solid rounded-xl overflow-hidden transition-all duration-300 hover:shadow-subtle group animate-on-scroll h-full flex flex-col"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground rounded-full">
            {newsItem.category}
          </span>
          <span className="text-xs text-muted-foreground">
            {formatDate(newsItem.date)}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {newsItem.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 flex-grow">
          {newsItem.summary}
        </p>
        
        <Link 
          to={`/news/${newsItem.id}`}
          className="text-primary font-medium flex items-center gap-1 hover:underline mt-auto"
        >
          Читать далее
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
