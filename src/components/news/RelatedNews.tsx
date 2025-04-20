
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { NewsItem } from '@/services/newsService';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface RelatedNewsProps {
  relatedNews: NewsItem[];
  formatDate: (dateString: string) => string;
}

const RelatedNews = ({ relatedNews, formatDate }: RelatedNewsProps) => {
  const { theme } = useTheme();
  
  if (relatedNews.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-display font-bold mb-12 text-center ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
          Похожие новости
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full relative">
            <CarouselContent className="-ml-4">
              {relatedNews.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} h-full flex flex-col`}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${theme === 'dark' ? 'bg-primary/20 text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                          {item.category}
                        </span>
                        <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {formatDate(item.date)}
                        </span>
                      </div>
                      
                      <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} group-hover:text-primary transition-colors`}>
                        {item.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {item.summary}
                      </p>
                      
                      <Link 
                        to={`/news/${item.id}`}
                        className="text-primary font-medium flex items-center gap-1 hover:underline mt-auto"
                      >
                        Читать
                        <ArrowLeft size={16} className="rotate-180" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 lg:-left-12" />
            <CarouselNext className="absolute -right-4 lg:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RelatedNews;
