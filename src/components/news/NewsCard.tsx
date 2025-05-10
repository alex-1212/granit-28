
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { NewsItem } from '@/services/newsService';
import { useIsMobile } from '@/hooks/use-mobile';

interface NewsCardProps {
  newsItem: NewsItem;
  formatDate: (dateString: string) => string;
}

const NewsCard = ({ newsItem, formatDate }: NewsCardProps) => {
  const isMobile = useIsMobile();

  const calculateReadingTime = (content: string): number => {
    const wordsPerMinute = 100;
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
  };

  const readingTime = calculateReadingTime(newsItem.content);

  return (
    <Card className="h-full flex flex-col overflow-hidden news-card hover:shadow-lg transition-all duration-300 group">
      <div className="relative overflow-hidden aspect-video">
        <Link to={`/news/${newsItem.slug}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-transparent to-blue-600/80 mix-blend-multiply z-10 
          after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-blue-500/30 after:to-blue-700/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-700/30 z-10"></div>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(59,130,246,0.1)_10px,rgba(59,130,246,0.1)_20px)] z-10"></div>
          <img 
            src={newsItem.image} 
            alt={newsItem.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-2 md:top-3 right-2 md:right-3 z-20">
            <Badge 
              className="font-medium text-xs md:text-sm border border-primary/20 dark:border-white/20 bg-white/70 dark:bg-black/50 text-primary dark:text-white backdrop-blur-sm rounded-md px-2 md:px-3 py-0.5 md:py-1"
            >
              {newsItem.category}
            </Badge>
          </div>
        </Link>
      </div>
      
      <CardContent className="flex-grow p-3 md:p-5">
        <Link to={`/news/${newsItem.slug}`} className="block">
          <h3 className="text-lg md:text-xl font-display font-bold mb-1 md:mb-2 line-clamp-2 group-hover:text-primary dark:group-hover:text-white transition-colors">
            {newsItem.title}
          </h3>
        </Link>
        <p className="text-sm md:text-base text-muted-foreground line-clamp-2">{newsItem.summary}</p>
      </CardContent>
      
      <CardFooter className="px-3 md:px-5 pb-3 md:pb-5 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar size={isMobile ? 12 : 14} className="mr-1" />
            <span>{formatDate(newsItem.date)}</span>
          </div>
          <div className="flex items-center">
            <Clock size={isMobile ? 12 : 14} className="mr-1" />
            <span>{readingTime} мин</span>
          </div>
        </div>
        
        <Link 
          to={`/news/${newsItem.slug}`} 
          className="text-xs md:text-sm font-medium text-primary dark:text-white flex items-center border border-primary dark:border-white rounded-md px-2 md:px-3 py-0.5 md:py-1 hover:bg-primary/10 dark:hover:bg-white/10 transition-all duration-300 group"
        >
          {isMobile ? "Далее" : "Подробнее"} 
          <ArrowRight size={isMobile ? 12 : 14} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
