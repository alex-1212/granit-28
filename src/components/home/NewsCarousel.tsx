
import React, { useEffect, useState } from 'react';
import { NewsItem, getAllNews } from '@/services/newsService';
import NewsCardSkeleton from '@/components/news/NewsCardSkeleton';
import { useDelayedLoading } from '@/hooks/use-delayed-loading';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NewsCarouselCard from './NewsCarouselCard';
import { calculateReadingTime, formatDate } from './utils/newsUtils';

interface NewsCarouselProps {
  formatDate?: (dateString: string) => string;
}

const NewsCarousel = ({ formatDate: customFormatDate }: NewsCarouselProps) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const isLoading = useDelayedLoading(isInitialLoading);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsInitialLoading(true);
        const data = await getAllNews();
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

  const formatDateFn = customFormatDate || formatDate;

  return (
    <Carousel className="w-full relative">
      <CarouselContent className="-ml-4">
        {news.map((item) => (
          <NewsCarouselCard
            key={item.id}
            item={item}
            formatDate={formatDateFn}
            calculateReadingTime={calculateReadingTime}
          />
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-4 lg:-left-12" />
      <CarouselNext className="absolute -right-4 lg:-right-12" />
    </Carousel>
  );
};

export default NewsCarousel;
