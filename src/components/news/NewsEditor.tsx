
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { NewsItem } from '@/services/newsService';
import { NewsFormFields } from './NewsFormFields';
import { useNewsForm } from './useNewsForm';

interface NewsEditorProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  initialData?: NewsItem;
}

export function NewsEditor({ isOpen, onClose, onSuccess, initialData }: NewsEditorProps) {
  const {
    formData,
    isLoading,
    isEditing,
    handleChange,
    handleCategoryChange,
    handleSubmit
  } = useNewsForm(initialData, onSuccess, onClose);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Редактирование новости' : 'Создание новости'}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <NewsFormFields 
            formData={formData} 
            handleChange={handleChange} 
            handleCategoryChange={handleCategoryChange} 
          />
          
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
