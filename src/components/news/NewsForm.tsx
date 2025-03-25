
import React, { useState, useEffect } from 'react';
import { NewsItem } from '@/data/news';
import { Card } from '@/components/ui/card';
import { addNews, updateNews } from '@/services/newsService';
import { uploadImage, getDefaultImage } from '@/utils/imageUpload';
import { useToast } from '@/hooks/use-toast';
import NewsFormHeader from './NewsFormHeader';
import NewsFormFields from './NewsFormFields';
import NewsFormActions from './NewsFormActions';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';

interface NewsFormProps {
  newsItem: NewsItem | null;
  onSubmit: () => void;
  onCancel: () => void;
}

const NewsForm: React.FC<NewsFormProps> = ({ newsItem, onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [fullText, setFullText] = useState('');
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewSrc, setPreviewSrc] = useState('');
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (newsItem) {
      setTitle(newsItem.title);
      setDate(newsItem.date);
      setShortDescription(newsItem.shortDescription);
      setFullText(newsItem.fullText);
      setImage(newsItem.image);
      setPreviewSrc(newsItem.image);
    } else {
      // Default date to current month
      const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ];
      const now = new Date();
      setDate(`${months[now.getMonth()]} ${now.getFullYear()}`);
      const defaultImage = getDefaultImage();
      setImage(defaultImage);
      setPreviewSrc(defaultImage);
    }
  }, [newsItem]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      
      // Create a preview
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setPreviewSrc(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Check authentication status at the beginning
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      console.log("Auth session check:", data);
    };
    
    checkAuth();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Log authentication state
    console.log("Is authenticated:", isAuthenticated);
    const { data: sessionData } = await supabase.auth.getSession();
    console.log("Session data:", sessionData);

    if (!isAuthenticated) {
      toast({
        title: "Ошибка аутентификации",
        description: "Вы должны быть авторизованы для выполнения этого действия",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      if (!title || !date || !shortDescription || !fullText) {
        toast({
          title: "Ошибка валидации",
          description: "Пожалуйста, заполните все обязательные поля",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      let imagePath = image;

      // If there's a new image file, upload it
      if (imageFile) {
        try {
          imagePath = await uploadImage(imageFile);
          console.log("Image uploaded successfully:", imagePath.substring(0, 50) + "...");
        } catch (error) {
          console.error("Error uploading image:", error);
          toast({
            title: "Ошибка загрузки изображения",
            description: "Не удалось загрузить изображение, используется изображение по умолчанию",
            variant: "destructive",
          });
          imagePath = getDefaultImage();
        }
      }
      
      // If no image is set, use default
      if (!imagePath) {
        imagePath = getDefaultImage();
      }

      const newsData = {
        title,
        date,
        shortDescription,
        fullText,
        image: imagePath,
      };

      console.log("Saving news with image:", imagePath.substring(0, 50) + "...");

      let result;
      if (newsItem) {
        // Update existing news
        result = await updateNews(newsItem.id, newsData);
        if (result) {
          toast({
            title: "Новость обновлена",
            description: "Новость была успешно обновлена",
          });
        }
      } else {
        // Add new news
        result = await addNews(newsData);
        if (result) {
          toast({
            title: "Новость добавлена",
            description: "Новость была успешно добавлена",
          });
        }
      }

      if (!result) {
        throw new Error("Failed to save news");
      }

      onSubmit();
    } catch (error) {
      console.error("Error saving news:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить новость. Проверьте консоль для деталей.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <NewsFormHeader 
          isEditing={!!newsItem} 
          onCancel={onCancel} 
        />
        <form onSubmit={handleSubmit}>
          <NewsFormFields
            title={title}
            setTitle={setTitle}
            date={date}
            setDate={setDate}
            shortDescription={shortDescription}
            setShortDescription={setShortDescription}
            fullText={fullText}
            setFullText={setFullText}
            previewSrc={previewSrc}
            onImageChange={handleImageChange}
          />
          <NewsFormActions
            isSubmitting={isSubmitting}
            isEditing={!!newsItem}
            onCancel={onCancel}
          />
        </form>
      </Card>
    </div>
  );
};

export default NewsForm;
