
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { getNewsById, getRelatedNews, NewsItem } from '@/services/newsService';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';
import { NewsEditor } from '@/components/news/NewsEditor';
import { DeleteNewsDialog } from '@/components/news/DeleteNewsDialog';
import NewsDetailHero from '@/components/news/NewsDetailHero';
import NewsDetailContent from '@/components/news/NewsDetailContent';
import RelatedNews from '@/components/news/RelatedNews';
import NewsDetailSkeleton from '@/components/news/NewsDetailSkeleton';

const NewsDetail = () => {
  useAnimateOnScroll();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const { theme } = useTheme();
  
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  useEffect(() => {
    const fetchNewsDetails = async () => {
      if (!slug) {
        console.error("No slug parameter found in URL");
        navigate('/news', { replace: true });
        return;
      }
      
      setIsLoading(true);
      
      try {
        console.log("Fetching news with slug:", slug);
        const newsItem = await getNewsById(slug);
        console.log("Fetched news item:", newsItem);
        
        if (newsItem) {
          setNews(newsItem);
          document.title = `${newsItem.title} — ООО «Гранит»`;
          
          // Remove the limit to get all related news items from the same category
          const related = await getRelatedNews(newsItem.category, newsItem.id);
          setRelatedNews(related);
        } else {
          console.error("News item not found with slug:", slug);
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
  }, [slug, navigate]);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };
  
  const handleEditSuccess = () => {
    if (slug) {
      getNewsById(slug).then(updatedNews => {
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
    return <NewsDetailSkeleton />;
  }

  if (!news) {
    return null;
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
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
      
      <NewsDetailHero 
        news={news}
        formatDate={formatDate}
        user={user}
        onEdit={() => setIsEditDialogOpen(true)}
        onDelete={() => setIsDeleteDialogOpen(true)}
      />
      
      <NewsDetailContent news={news} />
      
      <RelatedNews relatedNews={relatedNews} formatDate={formatDate} />
    </div>
  );
};

export default NewsDetail;
