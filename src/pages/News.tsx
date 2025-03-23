
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { newsData } from '@/data/news';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useAnimateOnScroll } from '@/hooks/useImageLoader';

const News = () => {
  useAnimateOnScroll();

  useEffect(() => {
    document.title = 'Новости — ООО «Гранит»';
  }, []);

  // Sort news by date (newest first)
  const sortedNews = [...newsData].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Новости компании
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
              Актуальная информация о наших проектах, достижениях и технологиях
            </p>
          </div>
        </div>
      </section>
      
      {/* News Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-12 animate-on-scroll">Последние новости</h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto animate-on-scroll max-w-7xl"
          >
            <CarouselContent className="-ml-4">
              {sortedNews.map((news) => (
                <CarouselItem key={news.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <Card className="h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    <CardHeader>
                      <div className="text-sm text-muted-foreground mb-2">
                        {formatDate(news.date)}
                      </div>
                      <CardTitle className="line-clamp-2">{news.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {news.summary}
                      </p>
                    </CardContent>
                    
                    <CardFooter>
                      <Link to={`/news/${news.id}`}>
                        <Button variant="ghost" className="p-0 flex items-center gap-1 text-primary hover:text-primary/80">
                          Читать далее <ArrowRight size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 lg:-left-12 bg-background/80 backdrop-blur-sm" />
            <CarouselNext className="right-1 lg:-right-12 bg-background/80 backdrop-blur-sm" />
          </Carousel>
          
          <div className="mt-16 text-center animate-on-scroll">
            <p className="text-lg mb-6">
              Узнайте больше о последних достижениях и проектах нашей компании
            </p>
            <Link to="/news">
              <Button size="lg" className="font-medium">
                Все новости
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
