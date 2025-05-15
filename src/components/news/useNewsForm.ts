
import { useState } from 'react';
import { NewsItem } from '@/services/newsService';
import { generateSlug } from '@/lib/slugify';
import { createNews, updateNews } from '@/services/newsService';
import { useToast } from '@/hooks/use-toast';
import { categoryOptions } from './NewsEditorSchema';

export function useNewsForm(initialData: NewsItem | undefined, onSuccess: () => void, onClose: () => void) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Omit<NewsItem, 'id'>>({
    title: initialData?.title || '',
    summary: initialData?.summary || '',
    content: initialData?.content || '',
    image: initialData?.image || '',
    category: initialData?.category || categoryOptions[0],
    date: initialData?.date || new Date().toISOString(),
    slug: initialData?.slug || ''
  });

  const isEditing = !!initialData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Auto-generate slug when title changes
    if (name === 'title') {
      setFormData(prev => ({ 
        ...prev, 
        [name]: value,
        slug: generateSlug(value)
      }));
    }
  };

  const handleContentChange = (content: string) => {
    setFormData(prev => ({ ...prev, content }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };
  
  const handleDateChange = (date: Date) => {
    setFormData(prev => ({ ...prev, date: date.toISOString() }));
  };
  
  const handleFileUpload = (url: string) => {
    setFormData(prev => ({ ...prev, image: url }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      let result;
      
      if (isEditing && initialData) {
        result = await updateNews(initialData.id, formData);
      } else {
        // Ensure slug is set
        const newsDataWithSlug = {
          ...formData,
          slug: formData.slug || generateSlug(formData.title)
        };
        result = await createNews(newsDataWithSlug);
      }
      
      if (result.success) {
        toast({
          title: isEditing ? 'Новость обновлена' : 'Новость создана',
          description: isEditing 
            ? 'Новость успешно обновлена' 
            : 'Новость успешно добавлена',
        });
        onSuccess();
        onClose();
      } else {
        toast({
          variant: 'destructive',
          title: 'Ошибка',
          description: result.error || 'Произошла ошибка при сохранении новости',
        });
      }
    } catch (error) {
      console.error('Error saving news:', error);
      toast({
        variant: 'destructive',
        title: 'Ошибка',
        description: 'Произошла неизвестная ошибка',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    isEditing,
    handleChange,
    handleContentChange,
    handleCategoryChange,
    handleDateChange,
    handleFileUpload,
    handleSubmit
  };
}
