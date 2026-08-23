
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { NewsItem } from '@/services/newsService';
import { CarouselItem } from "@/components/ui/carousel";
import { useLanguage } from '@/i18n/LanguageContext';

interface NewsCarouselCardProps {
  item: NewsItem;
  formatDate: (dateString: string) => string;
  calculateReadingTime: (content: string) => number;
}

const NewsCarouselCard = ({ item, formatDate, calculateReadingTime }: NewsCarouselCardProps) => {
  const { t } = useLanguage();
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    if (!target.src.includes('placeholder')) {
      target.src = '/placeholder.svg';
    }
  };

  return (
    <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
      <div className="glass-card-solid rounded-xl overflow-hidden transition-all duration-300 hover:shadow-subtle group h-full flex flex-col">
        <div className="aspect-video overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={handleImageError}
          />
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground rounded-full">
              {item.category}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground flex items-center">
                <Calendar size={12} className="mr-1" />
                {formatDate(item.date)}
              </span>
              <span className="text-xs text-muted-foreground flex items-center">
                <Clock size={12} className="mr-1" />
                {calculateReadingTime(item.content)} {t('news.ui.minRead')}
              </span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 flex-grow">
            {item.summary}
          </p>
          
          <Link 
            to={`/news/${item.slug}`} 
            className="inline-flex items-center self-start text-xs md:text-sm font-medium text-primary dark:text-white border border-primary dark:border-white rounded-md px-2 md:px-3 py-0.5 md:py-1 hover:bg-primary/10 dark:hover:bg-white/10 transition-all duration-300 group"
          >
            {t('news.ui.card.readMore')}
            <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </CarouselItem>
  );
};

export default NewsCarouselCard;
