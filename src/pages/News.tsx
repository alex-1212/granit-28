
import React, { useEffect, useState } from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { getAllNews, NewsItem } from '@/services/newsService';
import { useAuth } from '@/context/AuthContext';
import { NewsEditor } from '@/components/news/NewsEditor';

// Import refactored components
import NewsHero from '@/components/news/NewsHero';
import NewsFilters from '@/components/news/NewsFilters';
import NewsGrid from '@/components/news/NewsGrid';

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
        console.log("Fetched news data:", data); // For debugging
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
      <NewsHero />
      
      {/* News Filter and Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters and Admin Controls */}
          <NewsFilters 
            filter={filter} 
            setFilter={setFilter}
            onCreateNews={() => setIsCreateDialogOpen(true)}
          />
          
          {/* News Grid */}
          <NewsGrid 
            isLoading={isLoading}
            news={filteredNews}
            filter={filter}
            formatDate={formatDate}
          />
        </div>
      </section>
    </div>
  );
};

export default News;
