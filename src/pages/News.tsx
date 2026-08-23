
import React, { useEffect, useMemo, useState } from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { getAllNews, NewsItem } from '@/services/newsService';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/i18n/LanguageContext';
import { NewsEditor } from '@/components/news/NewsEditor';
import { Seo } from '@/components/common/Seo';

// Import refactored components
import NewsHero from '@/components/news/NewsHero';
import NewsFilters from '@/components/news/NewsFilters';
import NewsGrid from '@/components/news/NewsGrid';

type Category = 'Все' | 'Проекты' | 'Технологии' | 'События';

const News = () => {
  useAnimateOnScroll();
  const [filter, setFilter] = useState<Category>('Все');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const { lang } = useLanguage();
  
  // State for create news dialog
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  
  // Новости загружаются один раз при монтировании
  useEffect(() => {
    let cancelled = false;

    getAllNews()
      .then(data => {
        if (!cancelled) setNews(data);
      })
      .catch(error => console.error('Failed to fetch news:', error))
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);
  
  // Фильтрация локальная — без повторных запросов к Supabase
  const filteredNews = useMemo(
    () => (filter === 'Все' ? news : news.filter(item => item.category === filter)),
    [news, filter]
  );
  
  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'ru-RU', options);
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  };
  
  const handleCreateSuccess = () => {
    // Reload news after successful creation
    getAllNews().then(data => {
      setNews(data);
    });
  };

  return (
    <div className="w-full bg-background">
      <Seo
        path="/news"
        title={lang === 'zh' ? '公司新闻 — «ГРАНИТ»有限责任公司' : 'Новости компании — проекты и технологии БВР'}
        description={
          lang === 'zh'
            ? '«ГРАНИТ»有限责任公司的项目、成就与技术方面的最新信息。远东地区钻孔爆破工程领域的最新动态。'
            : 'Новости ООО «Гранит»: буровзрывные работы на Дальнем Востоке, проекты БАМ-2, производство ЭВВ, новая техника и технологии взрывных работ.'
        }
      />
      
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
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
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
