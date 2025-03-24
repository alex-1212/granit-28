
import React, { useState, useEffect } from 'react';
import { NewsItem } from '@/data/news';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { addNews, updateNews } from '@/services/newsService';
import { uploadImage, getDefaultImage, isDataUrl } from '@/utils/imageUpload';
import { useToast } from '@/hooks/use-toast';
import { X } from 'lucide-react';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
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

      const newsData = {
        title,
        date,
        shortDescription,
        fullText,
        image: imagePath,
      };

      console.log("Saving news with image:", imagePath.substring(0, 50) + "...");

      if (newsItem) {
        // Update existing news
        const updated = updateNews(newsItem.id, newsData);
        if (updated) {
          toast({
            title: "Новость обновлена",
            description: "Новость была успешно обновлена",
          });
        }
      } else {
        // Add new news
        const added = addNews(newsData);
        if (added) {
          toast({
            title: "Новость добавлена",
            description: "Новость была успешно добавлена",
          });
        }
      }

      onSubmit();
    } catch (error) {
      console.error("Error saving news:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить новость",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{newsItem ? 'Редактировать новость' : 'Добавить новость'}</CardTitle>
          <Button variant="ghost" size="icon" onClick={onCancel}>
            <X />
          </Button>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Заголовок</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Дата</Label>
                <Input
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="shortDescription">Краткое описание</Label>
              <Textarea
                id="shortDescription"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                required
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullText">Полный текст</Label>
              <Textarea
                id="fullText"
                value={fullText}
                onChange={(e) => setFullText(e.target.value)}
                required
                rows={8}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Изображение</Label>
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Рекомендуемый размер: 800x600px
                  </p>
                </div>
                <div className="w-32 h-24 border rounded overflow-hidden">
                  <img
                    src={previewSrc}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = getDefaultImage();
                    }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={onCancel}>
              Отмена
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? 'Сохранение...'
                : newsItem
                ? 'Сохранить изменения'
                : 'Добавить новость'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default NewsForm;
