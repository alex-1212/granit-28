
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Check, X, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/i18n/LanguageContext';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface FileUploaderProps {
  onFileUploaded: (url: string) => void;
  currentImage?: string;
}

export function FileUploader({ onFileUploaded, currentImage }: FileUploaderProps) {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 МБ
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
  const FILE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

  const validateFile = (selectedFile: File): boolean => {
    setError(null);
    
    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setError(t('news.ui.upload.badFormat').replace('{formats}', FILE_EXTENSIONS.join(', ')));
      return false;
    }
    
    if (selectedFile.size > MAX_FILE_SIZE) {
      setError(t('news.ui.upload.tooLarge'));
      return false;
    }
    
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    
    if (!selectedFile) return;
    
    if (validateFile(selectedFile)) {
      setFile(selectedFile);
      
      // Создание превью
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const selectedFile = e.dataTransfer.files?.[0];
    
    if (!selectedFile) return;
    
    if (validateFile(selectedFile)) {
      setFile(selectedFile);
      
      // Создание превью
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const uploadFile = async () => {
    if (!file) return;
    
    setUploading(true);
    setProgress(0);
    setConnectionError(false);
    
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;
      
      // Имитация прогресса загрузки
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 300);
      
      // Загрузка файла в Supabase Storage
      const { data, error: uploadError } = await supabase.storage
        .from('news_images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
          contentType: file.type
        });
      
      clearInterval(progressInterval);
      
      if (uploadError) {
        if (uploadError.message.includes('fetch')) {
          setConnectionError(true);
          throw new Error(t('news.ui.upload.connectionErrorThrow'));
        }
        throw uploadError;
      }
      
      // Получение публичного URL
      const { data: { publicUrl } } = supabase.storage
        .from('news_images')
        .getPublicUrl(filePath);
      
      onFileUploaded(publicUrl);
      setProgress(100);
      
      toast({
        title: t('news.ui.upload.successTitle'),
        description: t('news.ui.upload.successDesc'),
      });
    } catch (error: any) {
      console.error('Error uploading file:', error);
      setError(error.message || t('news.ui.upload.errorFallback'));
      toast({
        variant: "destructive",
        title: t('news.ui.upload.errorTitle'),
        description: error.message || t('news.ui.upload.errorOccurred'),
      });
    } finally {
      setUploading(false);
    }
  };

  const clearFile = () => {
    setFile(null);
    setPreview(null);
    setConnectionError(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const openFileSelector = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="space-y-4">
      <Label htmlFor="image">{t('news.ui.form.imageLabel')}</Label>
      
      {connectionError && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {t('news.ui.upload.connectionAlert')}
          </AlertDescription>
        </Alert>
      )}
      
      <div className="grid gap-4">
        {preview && (
          <Card>
            <CardContent className="p-4">
              <div className="aspect-video relative rounded-md overflow-hidden">
                <img 
                  src={preview} 
                  alt={t('news.ui.upload.previewAlt')} 
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
          <div 
            className={`border border-dashed ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-300 dark:border-gray-700'} rounded-md p-6 text-center cursor-pointer`}
            onClick={openFileSelector}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDragEnter={handleDragOver}
          >
            <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">
              {t('news.ui.upload.dropzone')}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {t('news.ui.upload.formats')}
            </p>
          </div>
        )}
        
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
        
        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
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
            onClick={openFileSelector}
            disabled={uploading}
            className="w-full"
          >
            {t('news.ui.upload.chooseFile')}
          </Button>
          
          {file && !uploading && (
            <Button
              type="button"
              onClick={uploadFile}
              className="w-full"
            >
              {t('news.ui.upload.upload')}
            </Button>
          )}
        </div>
        
        {uploading && (
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-center text-muted-foreground">
              {t('news.ui.upload.uploading')} {progress}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
