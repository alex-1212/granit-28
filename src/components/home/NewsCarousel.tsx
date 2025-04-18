
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { NewsItem, getAllNews } from '@/services/newsService';
import NewsCardSkeleton from '@/components/news/NewsCardSkeleton';
import { useDelayedLoading } from '@/hooks/use-delayed-loading';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface NewsCarouselProps {
  formatDate?: (dateString: string) => string;
}

const NewsCarousel = ({ formatDate }: NewsCarouselProps) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const isLoading = useDelayedLoading(isInitialLoading);

  // Функция для расчёта примерного времени чтения (100 слов в минуту)
  const calculateReadingTime = (content: string): number => {
    const wordsPerMinute = 100; // Среднее количество слов в минуту
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / wordsPerMinute)); // Минимум 1 минута
  };

  const formatDateFn = formatDate || defaultFormatDate;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsInitialLoading(true);
        const data = await getAllNews();
        // Take only the latest 6 news items
        setNews(data.slice(0, 6));
      } catch (error) {
        console.error('Failed to fetch news for carousel:', error);
      } finally {
        setIsInitialLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return (
      <Carousel className="w-full relative">
        <CarouselContent className="-ml-4">
          {Array(3).fill(0).map((_, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <NewsCardSkeleton />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-4 lg:-left-12" />
        <CarouselNext className="absolute -right-4 lg:-right-12" />
      </Carousel>
    );
  }

  if (news.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">
          Новости пока отсутствуют
        </p>
      </div>
    );
  }

  return (
    <Carousel className="w-full relative">
      <CarouselContent className="-ml-4">
        {news.map((item) => (
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
                      {formatDateFn(item.date)}
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
                  className="text-primary font-medium flex items-center gap-1 hover:underline mt-auto dark:text-white dark:hover:text-white/90"
                >
                  Читать далее
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-4 lg:-left-12" />
      <CarouselNext className="absolute -right-4 lg:-right-12" />
    </Carousel>
  );
};

export default NewsCarousel;
