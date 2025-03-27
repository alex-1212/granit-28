
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categoryOptions } from './NewsEditorSchema';

interface NewsFormFieldsProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleCategoryChange: (value: string) => void;
}

export function NewsFormFields({ formData, handleChange, handleCategoryChange }: NewsFormFieldsProps) {
  return (
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
  );
}
