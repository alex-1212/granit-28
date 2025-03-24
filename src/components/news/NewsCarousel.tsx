
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { NewsCard } from './NewsCard';
import { News } from '@/models/News';

interface NewsCarouselProps {
  news: News[];
}

export const NewsCarousel: React.FC<NewsCarouselProps> = ({ news }) => {
  return (
    <div className="w-full py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent>
          {news.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
              <NewsCard news={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 top-1/2 -translate-y-1/2" />
        <CarouselNext className="right-0 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};
