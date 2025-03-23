
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { NewsItem } from '@/data/news';
import { ImageUploader } from './ImageUploader';

// Define form schema
const formSchema = z.object({
  title: z.string().min(3, 'Заголовок должен содержать не менее 3 символов'),
  date: z.date({
    required_error: 'Выберите дату публикации',
  }),
  summary: z.string().min(10, 'Краткое описание должно содержать не менее 10 символов'),
  content: z.string().min(50, 'Полный текст должен содержать не менее 50 символов'),
  image: z.string().min(1, 'Загрузите изображение'),
  category: z.string().min(1, 'Укажите категорию')
});

type FormData = z.infer<typeof formSchema>;

interface NewsFormProps {
  initialData?: NewsItem;
  onSubmit: (data: Omit<NewsItem, 'id'>) => void;
  isSubmitting?: boolean;
}

export const NewsForm: React.FC<NewsFormProps> = ({
  initialData,
  onSubmit,
  isSubmitting = false
}) => {
  // Initialize form with initial data if available
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData ? {
      title: initialData.title,
      date: new Date(initialData.date),
      summary: initialData.summary,
      content: initialData.content,
      image: initialData.image,
      category: initialData.category
    } : {
      title: '',
      date: new Date(),
      summary: '',
      content: '',
      image: '',
      category: 'Производство'
    }
  });
  
  const handleSubmit = (data: FormData) => {
    onSubmit({
      title: data.title,
      date: format(data.date, 'yyyy-MM-dd'),
      summary: data.summary,
      content: data.content,
      image: data.image,
      category: data.category
    });
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Заголовок</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите заголовок новости" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Дата публикации</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, 'dd MMMM yyyy', { locale: ru })
                          ) : (
                            <span>Выберите дату</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('2000-01-01')
                        }
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Категория</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите категорию" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Краткое описание</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Введите краткое описание" 
                      className="min-h-[80px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Изображение</FormLabel>
                  <FormControl>
                    <ImageUploader 
                      initialImage={field.value}
                      onImageChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Полный текст</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Введите полный текст новости" 
                      className="min-h-[200px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div className="flex justify-end gap-2 pt-4">
          <Button type="submit" disabled={isSubmitting}>
            {initialData ? 'Сохранить изменения' : 'Добавить новость'}
          </Button>
        </div>
      </form>
    </Form>
  );
};
