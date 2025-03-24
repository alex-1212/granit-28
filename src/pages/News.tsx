
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NewsCarousel } from '@/components/news/NewsCarousel';
import { getAllNews } from '@/services/newsService';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';

const News: React.FC = () => {
  const news = getAllNews();
  
  // Animation on scroll
  useAnimateOnScroll();
  
  return (
    <>
      <Helmet>
        <title>Новости компании | ООО «Гранит»</title>
        <meta name="description" content="Актуальные новости и события компании ООО «Гранит»" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 animate-on-scroll">
          <h1 className="text-4xl font-bold mb-4">Новости компании</h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <NewsCarousel news={news} />
      </div>
    </>
  );
};

export default News;
