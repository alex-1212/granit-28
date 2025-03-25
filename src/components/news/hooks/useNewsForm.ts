
import { useState, useEffect } from 'react';
import { NewsItem } from '@/data/news';
import { addNews, updateNews } from '@/services/newsService';
import { uploadImage, getDefaultImage } from '@/utils/imageUpload';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import { isUserAuthenticated } from '@/integrations/supabase/client';

export const useNewsForm = (newsItem: NewsItem | null, onFormSubmit: () => void) => {
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

  // Initialize form data
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

  // Handle image change
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

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await isUserAuthenticated();
      console.log("Manual auth check in NewsForm:", isAuth);
      console.log("Manual auth localStorage:", localStorage.getItem('manual_auth'));
      console.log("Auth context isAuthenticated:", isAuthenticated);
    };
    
    checkAuth();
  }, [isAuthenticated]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Проверка авторизации
      const isAuth = await isUserAuthenticated();
      console.log("Auth check before saving:", isAuth);
      console.log("Manual auth in localStorage:", localStorage.getItem('manual_auth'));
      
      if (!isAuth && !isAuthenticated) {
        toast({
          title: "Ошибка аутентификации",
          description: "Вы должны быть авторизованы для выполнения этого действия",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

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

      onFormSubmit();
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

  return {
    title, setTitle,
    date, setDate,
    shortDescription, setShortDescription,
    fullText, setFullText,
    previewSrc, setPreviewSrc,
    image, setImage,
    imageFile, setImageFile,
    isSubmitting, setIsSubmitting,
    handleSubmit,
    handleImageChange
  };
};
