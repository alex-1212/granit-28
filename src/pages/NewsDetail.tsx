
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getNewsById } from '@/services/newsService';
import { NewsItem } from '@/data/news';
import { ArrowLeft } from 'lucide-react';
import { getDefaultImage } from '@/utils/imageUpload';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchNewsItem = async () => {
      if (id) {
        try {
          const newsId = parseInt(id, 10);
          const fetchedNews = await getNewsById(newsId);
          if (fetchedNews) {
            setNewsItem(fetchedNews);
          }
        } catch (error) {
          console.error("Error fetching news item:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchNewsItem();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto p-8 text-center">Загрузка...</div>;
  }

  if (!newsItem) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Новость не найдена</h1>
        <Button onClick={() => navigate('/news')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Вернуться к новостям
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Helmet>
        <title>{newsItem.title} | ООО «Гранит»</title>
        <meta name="description" content={newsItem.shortDescription} />
      </Helmet>

      <Button
        variant="outline"
        className="mb-6"
        onClick={() => navigate('/news')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Вернуться к другим новостям
      </Button>

      <div className="bg-white dark:bg-background rounded-lg overflow-hidden shadow-md">
        <div className="h-64 md:h-96 overflow-hidden">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = getDefaultImage();
            }}
          />
        </div>

        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{newsItem.title}</h1>
          <p className="text-muted-foreground mb-4">{newsItem.date}</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="font-medium text-lg mb-6">{newsItem.shortDescription}</p>
            <div className="space-y-4 whitespace-pre-line">
              {newsItem.fullText.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
