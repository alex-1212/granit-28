
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { getDefaultImage } from '@/utils/imageUpload';

interface ImageUploadFieldProps {
  previewSrc: string;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploadField: React.FC<ImageUploadFieldProps> = ({ 
  previewSrc, 
  onImageChange 
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="image">Изображение</Label>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={onImageChange}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Рекомендуемый размер: 800x600px
          </p>
        </div>
        <div className="w-32 h-24 border rounded overflow-hidden">
          <img
            src={previewSrc}
            alt="Preview"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = getDefaultImage();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageUploadField;
