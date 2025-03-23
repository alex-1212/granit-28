
import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";

interface ImageUploaderProps {
  initialImage?: string;
  onImageChange: (base64: string) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ initialImage, onImageChange }) => {
  const [preview, setPreview] = useState<string | undefined>(initialImage);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error('Файл слишком большой. Максимальный размер 2МБ');
      return;
    }
    
    // Check file type
    if (!file.type.startsWith('image/')) {
      toast.error('Пожалуйста, загружайте только изображения');
      return;
    }
    
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setPreview(base64String);
      onImageChange(base64String);
    };
    reader.onerror = () => {
      toast.error('Ошибка чтения файла');
    };
    reader.readAsDataURL(file);
  };
  
  const removeImage = () => {
    setPreview(undefined);
    onImageChange('');
  };
  
  return (
    <div className="space-y-4">
      {preview ? (
        <div className="relative">
          <img 
            src={preview} 
            alt="Preview" 
            className="max-h-64 w-full object-contain border rounded-md"
          />
          <Button
            variant="destructive"
            size="icon"
            onClick={removeImage}
            className="absolute top-2 right-2"
            type="button"
          >
            <X size={16} />
          </Button>
        </div>
      ) : (
        <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-md p-8 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Нажмите, чтобы выбрать изображение
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            PNG, JPG, GIF до 2MB
          </p>
        </div>
      )}
      
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
      
      <label htmlFor="image-upload">
        <Button
          variant="outline"
          className="w-full"
          type="button"
          onClick={() => document.getElementById('image-upload')?.click()}
        >
          <Upload size={16} className="mr-2" />
          {preview ? 'Изменить изображение' : 'Загрузить изображение'}
        </Button>
      </label>
    </div>
  );
};
