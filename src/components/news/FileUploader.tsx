
import React, { useState } from 'react';
import { Upload, XCircle, CheckCircle2, Image } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface FileUploaderProps {
  onFileUpload: (url: string) => void;
  currentImage?: string;
}

export function FileUploader({ onFileUpload, currentImage }: FileUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(currentImage || null);
  const { toast } = useToast();
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    // Проверяем наличие файла
    if (!file) return;
    
    // Проверяем размер файла (до 10 МБ)
    const maxSize = 10 * 1024 * 1024; // 10 МБ в байтах
    if (file.size > maxSize) {
      setUploadError('Файл слишком большой. Максимальный размер: 10 МБ');
      toast({
        variant: 'destructive',
        title: 'Ошибка загрузки',
        description: 'Файл слишком большой. Максимальный размер: 10 МБ',
      });
      return;
    }
    
    // Проверяем тип файла
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setUploadError('Неподдерживаемый формат файла. Разрешены только .jpg, .jpeg, .png, .webp');
      toast({
        variant: 'destructive',
        title: 'Ошибка загрузки',
        description: 'Неподдерживаемый формат файла. Разрешены только .jpg, .jpeg, .png, .webp',
      });
      return;
    }
    
    setIsUploading(true);
    setUploadError(null);
    setUploadProgress(0);
    
    try {
      // Генерируем уникальное имя файла с временной меткой и оригинальным расширением
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
      const filePath = `${fileName}`;
      
      // Загружаем файл в Supabase Storage
      const { error: uploadError, data } = await supabase.storage
        .from('news_images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
          onUploadProgress: (progress) => {
            setUploadProgress(Math.round((progress.loaded / progress.total) * 100));
          },
        });
      
      if (uploadError) {
        throw new Error(uploadError.message);
      }
      
      // Получаем публичный URL для загруженного файла
      const { data: { publicUrl } } = supabase.storage
        .from('news_images')
        .getPublicUrl(filePath);
      
      setUploadedImage(publicUrl);
      onFileUpload(publicUrl);
      
      toast({
        title: 'Файл загружен',
        description: 'Изображение успешно загружено',
      });
    } catch (error) {
      console.error('Ошибка загрузки файла:', error);
      setUploadError(error instanceof Error ? error.message : 'Произошла ошибка при загрузке файла');
      toast({
        variant: 'destructive',
        title: 'Ошибка загрузки',
        description: error instanceof Error ? error.message : 'Произошла ошибка при загрузке файла',
      });
    } finally {
      setIsUploading(false);
    }
  };
  
  const handleRemoveImage = () => {
    setUploadedImage(null);
    onFileUpload('');
  };
  
  return (
    <div className="space-y-2">
      <Label htmlFor="image-upload">Изображение</Label>
      
      {!uploadedImage ? (
        <div className="border-2 border-dashed border-input rounded-md p-6 flex flex-col items-center justify-center gap-2">
          <div className="text-muted-foreground text-center">
            <Image className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm">Поддерживаемые форматы: JPG, JPEG, PNG, WEBP</p>
            <p className="text-xs">Максимальный размер: 10 МБ</p>
          </div>
          
          <label className="btn-primary text-sm flex items-center gap-1 mt-2 cursor-pointer">
            <Upload size={16} />
            Загрузить изображение
            <Input 
              id="image-upload"
              type="file" 
              accept=".jpg,.jpeg,.png,.webp" 
              onChange={handleFileChange} 
              className="hidden"
              disabled={isUploading}
            />
          </label>
          
          {uploadError && (
            <p className="text-destructive text-sm mt-2">{uploadError}</p>
          )}
        </div>
      ) : (
        <div className="relative border rounded-md overflow-hidden">
          <img 
            src={uploadedImage} 
            alt="Загруженное изображение" 
            className="w-full h-48 object-cover"
          />
          
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              type="button"
              onClick={handleRemoveImage}
              className="bg-destructive text-destructive-foreground p-1 rounded-full hover:opacity-90 transition-opacity"
              title="Удалить изображение"
            >
              <XCircle size={20} />
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-2">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Изображение загружено</span>
            </div>
          </div>
        </div>
      )}
      
      {isUploading && (
        <div className="mt-2">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-xs text-center mt-1">{uploadProgress}%</p>
        </div>
      )}
    </div>
  );
}
