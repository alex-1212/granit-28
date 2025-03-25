
import React, { useState, useEffect } from 'react';
import { NewsItem } from '@/data/news';
import { Card } from '@/components/ui/card';
import { addNews, updateNews } from '@/services/newsService';
import { getDefaultImage } from '@/utils/imageUpload';
import { useToast } from '@/hooks/use-toast';
import NewsFormHeader from './NewsFormHeader';
import NewsFormFields from './NewsFormFields';
import NewsFormActions from './NewsFormActions';
import { useNewsForm } from './hooks/useNewsForm';

interface NewsFormProps {
  newsItem: NewsItem | null;
  onSubmit: () => void;
  onCancel: () => void;
}

const NewsForm: React.FC<NewsFormProps> = ({ newsItem, onSubmit, onCancel }) => {
  const {
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
  } = useNewsForm(newsItem, onSubmit);

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
