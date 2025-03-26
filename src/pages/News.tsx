
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, Plus } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { getAllNews, NewsItem } from '@/services/newsService';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { NewsEditor } from '@/components/news/NewsEditor';

type Category = 'Все' | 'Проекты' | 'Технологии' | 'События';

const News = () => {
  useAnimateOnScroll();
  const [filter, setFilter] = useState<Category>('Все');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  
  // State for create news dialog
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  
  useEffect(() => {
    document.title = 'Новости — ООО «Гранит»';
    
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const data = await getAllNews();
        setNews(data);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchNews();
  }, []);
  
  useEffect(() => {
    if (filter === 'Все') {
      setFilteredNews(news);
    } else {
      setFilteredNews(news.filter(item => item.category === filter));
    }
  }, [filter, news]);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };
  
  const handleCreateSuccess = () => {
    // Reload news after successful creation
    getAllNews().then(data => {
      setNews(data);
    });
  };

  return (
    <div>
      {/* Create News Dialog - Only for authenticated users */}
      {user && (
        <NewsEditor
          isOpen={isCreateDialogOpen}
          onClose={() => setIsCreateDialogOpen(false)}
          onSuccess={handleCreateSuccess}
        />
      )}
      
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
      
      {/* News Filter and Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters and Admin Controls */}
          <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-on-scroll">
            <h2 className="text-2xl font-semibold">Все публикации</h2>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Add News Button - Only visible to authenticated users */}
              {user && (
                <Button 
                  onClick={() => setIsCreateDialogOpen(true)}
                  className="flex items-center gap-1.5"
                >
                  <Plus size={18} />
                  Добавить новость
                </Button>
              )}
              
              <div className="flex items-center">
                <Filter size={20} className="mr-2 text-primary" />
                <div className="flex flex-wrap gap-2">
                  {(['Все', 'Проекты', 'Технологии', 'События'] as Category[]).map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                        filter === category
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary/80 hover:bg-secondary text-foreground'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Skeleton loaders while data is loading
              Array(6).fill(0).map((_, index) => (
                <div key={index} className="glass-card-solid rounded-xl overflow-hidden animate-on-scroll">
                  <Skeleton className="aspect-video w-full" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Skeleton className="h-5 w-20 rounded-full" />
                      <Skeleton className="h-5 w-24 rounded-full" />
                    </div>
                    <Skeleton className="h-7 w-full mb-3" />
                    <Skeleton className="h-5 w-full mb-2" />
                    <Skeleton className="h-5 w-3/4 mb-4" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                </div>
              ))
            ) : (
              filteredNews.map((news) => (
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
                      <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground rounded-full">
                        {news.category}
                      </span>
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
              ))
            )}
          </div>
          
          {!isLoading && filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Новостей в категории "{filter}" пока нет
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
