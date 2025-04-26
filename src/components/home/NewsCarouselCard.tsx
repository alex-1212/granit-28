
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { NewsItem } from '@/services/newsService';
import { CarouselItem } from "@/components/ui/carousel";

interface NewsCarouselCardProps {
  item: NewsItem;
  formatDate: (dateString: string) => string;
  calculateReadingTime: (content: string) => number;
}

const NewsCarouselCard = ({ item, formatDate, calculateReadingTime }: NewsCarouselCardProps) => {
  return (
    <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
      <div className="glass-card-solid rounded-xl overflow-hidden transition-all duration-300 hover:shadow-subtle group h-full flex flex-col">
        <div className="aspect-video overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
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
              {item.category}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground flex items-center">
                <Calendar size={12} className="mr-1" />
                {formatDate(item.date)}
              </span>
              <span className="text-xs text-muted-foreground flex items-center">
                <Clock size={12} className="mr-1" />
                {calculateReadingTime(item.content)} мин
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
            className="text-primary font-medium flex items-center gap-1 hover:underline mt-auto dark:text-white dark:hover:text-white/90 group"
          >
            Читать далее
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </CarouselItem>
  );
};

export default NewsCarouselCard;
