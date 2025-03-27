
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { createNews, updateNews, NewsItem } from '@/services/newsService';
import { useToast } from '@/hooks/use-toast';
import { generateSlug } from '@/lib/slugify';

interface NewsEditorProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  initialData?: NewsItem;
}

const categoryOptions = ['Проекты', 'Технологии', 'События'];

export function NewsEditor({ isOpen, onClose, onSuccess, initialData }: NewsEditorProps) {
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

  const handleCategoryChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
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

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Редактирование новости' : 'Создание новости'}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Заголовок</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="slug">URL (slug)</Label>
              <Input
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="Генерируется автоматически"
              />
              <p className="text-xs text-muted-foreground">
                Уникальный идентификатор для URL. Генерируется автоматически из заголовка.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="summary">Краткое описание</Label>
              <Textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                required
                rows={2}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">Полное содержание</Label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={10}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">URL изображения</Label>
              <Input
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Категория</Label>
              <Select 
                value={formData.category} 
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <DialogFooter className="pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={isLoading}
            >
              Отмена
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Сохранение...' : isEditing ? 'Обновить' : 'Создать'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
