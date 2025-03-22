
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { newsData } from '@/data/news';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';

const News = () => {
  useAnimateOnScroll();
  
  useEffect(() => {
    document.title = 'Новости — ООО «Гранит»';
  }, []);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
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
      
      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-12 animate-on-scroll">Все публикации</h2>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <div 
                key={news.id} 
                className="glass-card-solid rounded-xl overflow-hidden transition-all duration-300 hover:shadow-subtle group animate-on-scroll"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-muted-foreground">
                      {formatDate(news.date)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {news.summary}
                  </p>
                  
                  <Link 
                    to={`/news/${news.id}`}
                    className="text-primary font-medium flex items-center gap-1 hover:underline"
                  >
                    Читать далее
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
