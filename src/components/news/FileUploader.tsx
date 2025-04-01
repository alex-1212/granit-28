
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Check, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface FileUploaderProps {
  onFileUploaded: (url: string) => void;
  currentImage?: string;
}

export function FileUploader({ onFileUploaded, currentImage }: FileUploaderProps) {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 МБ
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
  const FILE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setError(null);
    
    if (!selectedFile) return;
    
    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setError(`Неподдерживаемый формат файла. Допустимые форматы: ${FILE_EXTENSIONS.join(', ')}`);
      return;
    }
    
    if (selectedFile.size > MAX_FILE_SIZE) {
      setError(`Размер файла превышает 10 МБ`);
      return;
    }
    
    setFile(selectedFile);
    
    // Создание превью
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const uploadFile = async () => {
    if (!file) return;
    
    setUploading(true);
    setProgress(0);
    
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;
      
      // Загрузка файла в Supabase Storage
      const { data, error: uploadError } = await supabase.storage
        .from('news_images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });
      
      if (uploadError) {
        throw uploadError;
      }
      
      // Получение публичного URL
      const { data: { publicUrl } } = supabase.storage
        .from('news_images')
        .getPublicUrl(filePath);
      
      onFileUploaded(publicUrl);
      setProgress(100);
      
      toast({
        title: "Изображение загружено",
        description: "Файл успешно загружен",
      });
    } catch (error: any) {
      console.error('Error uploading file:', error);
      setError(error.message || 'Ошибка при загрузке файла');
      toast({
        variant: "destructive",
        title: "Ошибка загрузки",
        description: error.message || 'Произошла ошибка при загрузке файла',
      });
    } finally {
      setUploading(false);
    }
  };

  const clearFile = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="space-y-4">
      <Label htmlFor="image">Изображение</Label>
      
      <div className="grid gap-4">
        {preview && (
          <Card>
            <CardContent className="p-4">
              <div className="aspect-video relative rounded-md overflow-hidden">
                <img 
                  src={preview} 
                  alt="Предпросмотр" 
                  className="object-cover w-full h-full"
                />
                <Button 
                  size="icon"
                  variant="destructive"
                  className="absolute top-2 right-2"
                  onClick={clearFile}
                >
                  <X size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        {!preview && (
          <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-md p-6 text-center">
            <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">
              Перетащите изображение сюда или нажмите для выбора файла
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Поддерживаются форматы: JPG, PNG, WEBP (максимум 10 МБ)
            </p>
          </div>
        )}
        
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
        
        <div className="flex items-center gap-2">
          <input
            id="image-upload"
            type="file"
            accept=".jpg,.jpeg,.png,.webp"
            onChange={handleFileChange}
            className="hidden"
            disabled={uploading}
          />
          
          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById('image-upload')?.click()}
            disabled={uploading}
            className="w-full"
          >
            Выбрать файл
          </Button>
          
          {file && !uploading && (
            <Button
              type="button"
              onClick={uploadFile}
              className="w-full"
            >
              Загрузить
            </Button>
          )}
        </div>
        
        {uploading && (
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-center text-muted-foreground">
              Загрузка... {progress}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
