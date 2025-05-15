
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
    handleContentChange,
    handleCategoryChange,
    handleDateChange,
    handleFileUpload,
    handleSubmit
  } = useNewsForm(initialData, onSuccess, onClose);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl max-w-[95%] w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">
            {isEditing ? 'Редактирование новости' : 'Создание новости'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <NewsFormFields 
            formData={formData} 
            handleChange={handleChange} 
            handleContentChange={handleContentChange}
            handleCategoryChange={handleCategoryChange}
            handleDateChange={handleDateChange}
            handleFileUpload={handleFileUpload}
          />
          
          <DialogFooter className="pt-4 flex flex-col sm:flex-row gap-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={isLoading}
              className="w-full sm:w-auto"
            >
              Отмена
            </Button>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full sm:w-auto"
            >
              {isLoading ? 'Сохранение...' : isEditing ? 'Обновить' : 'Создать'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
