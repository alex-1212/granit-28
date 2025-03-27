
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
          
          // Получение связанных новостей
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
      <Helmet>
        <title>{`${news.title} — ООО «Гранит» | Новости`}</title>
        <meta name="description" content={news.summary} />
        <link rel="canonical" href={`https://granite-corp.ru/news/${news.slug}`} />
        <meta property="og:title" content={`${news.title} — ООО «Гранит»`} />
        <meta property="og:description" content={news.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={news.image} />
        <meta property="og:url" content={`https://granite-corp.ru/news/${news.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${news.title} — ООО «Гранит»`} />
        <meta name="twitter:description" content={news.summary} />
        <meta name="twitter:image" content={news.image} />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "${news.title}",
            "image": "${news.image}",
            "datePublished": "${news.date}",
            "dateModified": "${news.date}",
            "description": "${news.summary}",
            "author": {
              "@type": "Organization",
              "name": "ООО «Гранит»"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ООО «Гранит»",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://granite-corp.ru/news/${news.slug}"
            }
          }
        `}</script>
      </Helmet>
      
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
