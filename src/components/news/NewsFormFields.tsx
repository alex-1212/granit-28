
import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ImageUploadField from './ImageUploadField';

interface NewsFormFieldsProps {
  title: string;
  setTitle: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
  shortDescription: string;
  setShortDescription: (value: string) => void;
  fullText: string;
  setFullText: (value: string) => void;
  previewSrc: string;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewsFormFields: React.FC<NewsFormFieldsProps> = ({
  title,
  setTitle,
  date,
  setDate,
  shortDescription,
  setShortDescription,
  fullText,
  setFullText,
  previewSrc,
  onImageChange
}) => {
  return (
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

      <ImageUploadField 
        previewSrc={previewSrc} 
        onImageChange={onImageChange} 
      />
    </CardContent>
  );
};

export default NewsFormFields;
