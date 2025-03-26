
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { NewsItem } from '@/types/news';
import { createNews, updateNews } from '@/services/news/newsCrud';
import { isUserAuthenticated } from '@/integrations/supabase/client';

export const useNewsForm = (initialNews?: NewsItem) => {
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem>(
    initialNews || {
      id: '',
      title: '',
      content: '',
      image: '',
      author: '',
      publishDate: new Date().toISOString(),
      featured: false,
      tags: []
    }
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Check if user is authorized to manage news
    const checkAuth = async () => {
      const isAuth = await isUserAuthenticated();
      setAuthorized(isAuth);
      
      if (!isAuth) {
        toast.error('You must be logged in to manage news');
        navigate('/news');
      }
    };
    
    checkAuth();
  }, [navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNews(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNews(prev => ({ ...prev, [name]: checked }));
  };

  const handleTagsChange = (tags: string[]) => {
    setNews(prev => ({ ...prev, tags }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      if (news.id) {
        await updateNews(news);
        toast.success('News updated successfully');
      } else {
        await createNews(news);
        toast.success('News created successfully');
      }
      
      navigate('/news');
    } catch (error) {
      console.error('Error submitting news:', error);
      toast.error('Failed to save news item');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    news,
    isSubmitting,
    authorized,
    handleChange,
    handleCheckboxChange,
    handleTagsChange,
    handleSubmit
  };
};
