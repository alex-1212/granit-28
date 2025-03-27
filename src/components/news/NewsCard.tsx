
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import { NewsItem } from '@/services/newsService';

interface NewsCardProps {
  newsItem: NewsItem;
  formatDate: (dateString: string) => string;
}

const NewsCard = ({ newsItem, formatDate }: NewsCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden news-card hover:shadow-lg transition-all duration-300 group">
      <div className="relative overflow-hidden aspect-video">
        <Link to={`/news/${newsItem.slug}`}>
          <img 
            src={newsItem.image} 
            alt={newsItem.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-primary px-3 py-1 text-xs text-white rounded-full">
            {newsItem.category}
          </div>
        </Link>
      </div>
      
      <CardContent className="flex-grow p-5">
        <Link to={`/news/${newsItem.slug}`} className="block">
          <h3 className="text-xl font-display font-bold mb-2 line-clamp-2 group-hover:text-primary dark:group-hover:text-white transition-colors">
            {newsItem.title}
          </h3>
        </Link>
        <p className="text-muted-foreground line-clamp-2">{newsItem.summary}</p>
      </CardContent>
      
      <CardFooter className="px-5 pb-5 pt-0 flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar size={14} className="mr-1" />
          <span>{formatDate(newsItem.date)}</span>
        </div>
        
        <Link 
          to={`/news/${newsItem.slug}`} 
          className="text-sm font-medium text-primary dark:text-white flex items-center"
        >
          Подробнее <ArrowRight size={14} className="ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
