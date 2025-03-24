
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { getAllNews } from '@/services/newsService';
import { NewsItem } from '@/data/news';
import { getDefaultImage } from '@/utils/imageUpload';

const News: React.FC = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  useAnimateOnScroll();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedNews = await getAllNews();
        setNews(fetchedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Новости компании | ООО «Гранит»</title>
        <meta name="description" content="Актуальные новости компании ООО «Гранит»: инновации, проекты, достижения и события." />
      </Helmet>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-on-scroll">
        Новости компании
      </h1>
      
      {loading ? (
        <div className="text-center py-12">
          <p>Загрузка новостей...</p>
        </div>
      ) : news.length > 0 ? (
        <div className="mb-12 animate-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {news.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
                  <NewsCard item={item} onReadMore={() => navigate(`/news/${item.id}`)} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      ) : (
        <div className="text-center py-12">
          <p>Нет доступных новостей</p>
        </div>
      )}
    </div>
  );
};

interface NewsCardProps {
  item: NewsItem;
  onReadMore: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ item, onReadMore }) => {
  return (
    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = getDefaultImage();
          }}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
        <CardDescription className="text-sm">{item.date}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm line-clamp-3">{item.shortDescription}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" onClick={onReadMore}>
          Читать далее
        </Button>
      </CardFooter>
    </Card>
  );
};

export default News;
