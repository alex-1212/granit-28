
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { getNewsById } from '@/services/newsService';
import { News } from '@/models/News';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Animation on scroll
  useAnimateOnScroll();
  
  useEffect(() => {
    if (id) {
      const newsItem = getNewsById(parseInt(id, 10));
      if (newsItem) {
        setNews(newsItem);
      } else {
        navigate('/news');
      }
    }
    setLoading(false);
  }, [id, navigate]);
  
  if (loading) {
    return <div className="container mx-auto px-4 py-16 text-center">Загрузка...</div>;
  }
  
  if (!news) {
    return <div className="container mx-auto px-4 py-16 text-center">Новость не найдена</div>;
  }
  
  return (
    <>
      <Helmet>
        <title>{news.metaTitle || `${news.title} | ООО «Гранит»`}</title>
        <meta name="description" content={news.metaDescription || news.summary} />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/news">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Вернуться к другим новостям
          </Button>
        </Link>
        
        <div className="bg-card border rounded-lg overflow-hidden shadow-md">
          <div className="relative h-96 w-full">
            <img 
              src={news.imageUrl} 
              alt={news.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6">
            <div className="animate-on-scroll">
              <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
              <p className="text-muted-foreground mb-4">{news.date}</p>
            </div>
            
            <div className="prose max-w-none animate-on-scroll">
              <p className="font-semibold text-lg mb-4">{news.summary}</p>
              <div>
                {news.fullText.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
