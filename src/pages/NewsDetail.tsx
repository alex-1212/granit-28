
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Edit, Tag, Trash } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { getNewsById, getRelatedNews, NewsItem } from '@/services/newsService';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { NewsEditor } from '@/components/news/NewsEditor';
import { DeleteNewsDialog } from '@/components/news/DeleteNewsDialog';

const NewsDetail = () => {
  useAnimateOnScroll();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  useEffect(() => {
    const fetchNewsDetails = async () => {
      if (!id) {
        console.error("No ID parameter found in URL");
        navigate('/news', { replace: true });
        return;
      }
      
      setIsLoading(true);
      
      try {
        console.log("Fetching news with ID:", id);
        const newsItem = await getNewsById(id);
        console.log("Fetched news item:", newsItem);
        
        if (newsItem) {
          setNews(newsItem);
          document.title = `${newsItem.title} — ООО «Гранит»`;
          
          const related = await getRelatedNews(newsItem.category, id, 3);
          setRelatedNews(related);
        } else {
          console.error("News item not found with ID:", id);
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
  
  const handleEditSuccess = () => {
    if (id) {
      getNewsById(id).then(updatedNews => {
        if (updatedNews) {
          setNews(updatedNews);
          document.title = `${updatedNews.title} — ООО «Гранит»`;
        }
      });
    }
  };
  
  const handleDeleteSuccess = () => {
    navigate('/news', { replace: true });
  };
  
  if (isLoading) {
    return (
      <div>
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
      {user && news && (
        <>
          <NewsEditor 
            isOpen={isEditDialogOpen}
            onClose={() => setIsEditDialogOpen(false)}
            onSuccess={handleEditSuccess}
            initialData={news}
          />
          
          <DeleteNewsDialog 
            isOpen={isDeleteDialogOpen}
            onClose={() => setIsDeleteDialogOpen(false)}
            onSuccess={handleDeleteSuccess}
            newsId={news.id}
            newsTitle={news.title}
          />
        </>
      )}
      
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-start mb-8">
              <Link 
                to="/news" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline animate-fade-in"
              >
                <ArrowLeft size={18} />
                Вернуться к новостям
              </Link>
              
              {user && (
                <div className="flex items-center gap-2 animate-fade-in">
                  <Button 
                    onClick={() => setIsEditDialogOpen(true)} 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Edit size={16} />
                    Редактировать
                  </Button>
                  
                  <Button 
                    onClick={() => setIsDeleteDialogOpen(true)} 
                    variant="destructive" 
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Trash size={16} />
                    Удалить
                  </Button>
                </div>
              )}
            </div>
            
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
