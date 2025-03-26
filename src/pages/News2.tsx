
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { getAllNews, NewsItem } from '@/services/newsService';
import NewsCard from '@/components/news/NewsCard';

const News2 = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const newsData = await getAllNews();
        console.log('Fetched news for carousel:', newsData.length);
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news for carousel:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return format(date, 'd MMMM yyyy', { locale: ru });
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Новости</h1>
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Новости</h1>
      
      {news && news.length > 0 ? (
        <div className="relative py-8">
          <Carousel className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {news.map((newsItem) => (
                <CarouselItem key={newsItem.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="h-full">
                    <NewsCard newsItem={newsItem} formatDate={formatDate} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:-left-12" />
            <CarouselNext className="right-2 lg:-right-12" />
          </Carousel>
        </div>
      ) : (
        <div className="text-center py-12">
          <p>Новости не найдены</p>
        </div>
      )}
    </div>
  );
};

export default News2;
