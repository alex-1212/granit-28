
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
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
          <div className="absolute top-3 right-3">
            <Badge 
              className="font-medium border border-primary/20 dark:border-white/20 bg-white/70 dark:bg-black/50 text-primary dark:text-white backdrop-blur-sm rounded-md px-3 py-1"
            >
              {newsItem.category}
            </Badge>
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
          className="text-sm font-medium text-primary dark:text-white flex items-center border border-primary dark:border-white rounded-md px-3 py-1 hover:bg-primary/10 dark:hover:bg-white/10 transition-colors"
        >
          Подробнее <ArrowRight size={14} className="ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
