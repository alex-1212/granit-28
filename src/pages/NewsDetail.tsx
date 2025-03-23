
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { newsData } from '@/data/news';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { Button } from '@/components/ui/button';

const NewsDetail = () => {
  useAnimateOnScroll();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the current news item
  const newsItem = newsData.find(item => item.id === id);
  
  useEffect(() => {
    // Redirect if news not found
    if (!newsItem) {
      navigate('/news', { replace: true });
      return;
    }
    
    // Set page title and meta description
    document.title = `${newsItem.title} — ООО «Гранит»`;
    
    // Create meta description tag if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    // Set the content attribute
    metaDescription.setAttribute('content', newsItem.summary);
    
    // Cleanup on unmount
    return () => {
      document.title = 'ООО «Гранит»';
      if (metaDescription) {
        metaDescription.setAttribute('content', '');
      }
    };
  }, [newsItem, id, navigate]);
  
  // If news not found and navigation is pending
  if (!newsItem) {
    return null;
  }
  
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
      <section className="pt-16 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link 
              to="/news" 
              className="inline-flex items-center gap-2 text-primary font-medium mb-8 hover:underline animate-fade-in"
            >
              <ArrowLeft size={18} />
              Вернуться к новостям
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-in animate-delay-100">
              {newsItem.title}
            </h1>
            
            <div className="flex items-center gap-1.5 mb-4 animate-fade-in animate-delay-200">
              <Calendar size={18} className="text-primary" />
              <span>{formatDate(newsItem.date)}</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* News Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl overflow-hidden mb-10 animate-on-scroll">
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full h-auto"
              />
            </div>
            
            <div 
              className="prose prose-lg max-w-none dark:prose-invert animate-on-scroll"
              dangerouslySetInnerHTML={{ __html: newsItem.content }}
            />
            
            <div className="mt-12 animate-on-scroll">
              <Button
                variant="outline"
                onClick={() => navigate('/news')}
                className="flex items-center gap-1"
              >
                <ArrowLeft size={18} />
                Вернуться к новостям
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
