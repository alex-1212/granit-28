
import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { galleryImages } from './galleryData';

interface GalleryModalProps {
  selectedImage: typeof galleryImages[0] | null;
  currentIndex: number;
  totalImages: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  selectedImage,
  currentIndex,
  totalImages,
  onClose,
  onNext,
  onPrev
}) => {
  const { t } = useLanguage();
  
  if (!selectedImage) {
    return null;
  }

  return (
    <Dialog open={!!selectedImage} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-5xl p-0 bg-background/95 backdrop-blur-sm">
        <div className="relative h-[80vh] w-full flex flex-col">
          {/* Close button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-2 z-10 bg-background/80 hover:bg-background/90"
            onClick={onClose}
            aria-label={t('gallery.closeGallery')}
          >
            <X size={18} />
          </Button>
          
          {/* Image container */}
          <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
            <img 
              src={selectedImage.src} 
              alt={`${t('gallery.imageOf')} ${selectedImage.alt || ''}`} 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          
          {/* Caption and navigation */}
          <div className="p-4 border-t bg-background">
            <div className="flex justify-between items-center">
              <div>
                {selectedImage.alt && (
                  <h3 className="font-semibold text-lg">{selectedImage.alt}</h3>
                )}
                {/* Удаляем описание, которого нет в типе ImageItem */}
              </div>
              
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground mr-2">
                  {t('gallery.imageCounter')
                    .replace('{current}', (currentIndex + 1).toString())
                    .replace('{total}', totalImages.toString())}
                </p>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={onPrev}
                  aria-label={t('gallery.prevImage')}
                >
                  <ArrowLeft size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={onNext}
                  aria-label={t('gallery.nextImage')}
                >
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
