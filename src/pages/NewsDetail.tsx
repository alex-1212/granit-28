
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { getNewsById, getRelatedNews, NewsItem } from '@/services/newsService';
import { Skeleton } from '@/components/ui/skeleton';

const NewsDetail = () => {
  useAnimateOnScroll();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchNewsDetails = async () => {
      if (!id) return;
      
      setIsLoading(true);
      
      try {
        const newsItem = await getNewsById(id);
        
        if (newsItem) {
          setNews(newsItem);
          document.title = `${newsItem.title} — ООО «Гранит»`;
          
          // Get related news (same category, excluding current)
          const related = await getRelatedNews(newsItem.category, id, 3);
          setRelatedNews(related);
        } else {
          navigate('/news', { replace: true });
        }
      } catch (error) {
        console.error('Error fetching news details:', error);
        navigate('/news', { replace: true });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchNewsDetails();
  }, [id, navigate]);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };
  
  if (isLoading) {
    return (
      <div>
        {/* Hero Skeleton */}
        <section className="pt-16 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-8">
                <Skeleton className="w-32 h-6" />
              </div>
              
              <Skeleton className="h-10 w-full mb-6" />
              
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Skeleton className="w-36 h-6" />
                <Skeleton className="w-24 h-6" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Skeleton */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Skeleton className="w-full aspect-video rounded-xl mb-10" />
              
              <div className="space-y-4">
                <Skeleton className="w-full h-6" />
                <Skeleton className="w-full h-6" />
                <Skeleton className="w-3/4 h-6" />
                <Skeleton className="w-full h-6" />
                <Skeleton className="w-5/6 h-6" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!news) {
    return null;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden">
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
              {news.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in animate-delay-200">
              <div className="flex items-center gap-1.5">
                <Calendar size={18} className="text-primary" />
                <span>{formatDate(news.date)}</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <Tag size={18} className="text-primary" />
                <span>{news.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* News Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-xl overflow-hidden mb-10 animate-on-scroll">
              <img
                src={news.image}
                alt={news.title}
                className="w-full aspect-video object-cover"
              />
            </div>
            
            <div 
              className="prose prose-lg max-w-none dark:prose-invert animate-on-scroll"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>
        </div>
      </section>
      
      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="py-16 bg-primary/5 dark:bg-primary/10">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12 animate-on-scroll">
              Похожие новости
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedNews.map((item) => (
                <div 
                  key={item.id} 
                  className="glass-card-solid rounded-xl overflow-hidden transition-all duration-300 hover:shadow-subtle group animate-on-scroll"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <Link 
                      to={`/news/${item.id}`}
                      className="text-primary font-medium flex items-center gap-1 hover:underline"
                    >
                      Читать
                      <ArrowLeft size={16} className="rotate-180" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default NewsDetail;
