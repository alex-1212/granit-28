
import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { GalleryImage } from './galleryData';
import { useLanguage } from '@/context/LanguageContext';

interface GalleryModalProps {
  selectedImage: GalleryImage | null;
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

  // Блокируем прокрутку при открытом модальном окне
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);
  
  // Добавляем обработчики клавиатуры
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, onNext, onPrev, onClose]);

  if (!selectedImage) return null;

  const imageCounter = t('gallery.imageCounter')
    .replace('{current}', (currentIndex + 1).toString())
    .replace('{total}', totalImages.toString());

  return (
    <Dialog open={!!selectedImage} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="w-full max-w-6xl p-0 bg-black/95 border-zinc-800" 
        onInteractOutside={onClose}
      >
        <div className="relative flex flex-col h-[85vh] md:h-[90vh]">
          {/* Верхняя панель с кнопкой закрытия */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 z-20 bg-black/50">
            <div className="text-white/90 text-sm">
              {imageCounter}
            </div>
            <DialogClose asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white/90 hover:bg-white/20 rounded-full"
                onClick={onClose}
                aria-label={t('gallery.closeGallery')}
              >
                <X size={24} />
              </Button>
            </DialogClose>
          </div>
          
          {/* Контейнер с изображением */}
          <div className="flex-1 flex items-center justify-center overflow-hidden p-4 pt-16">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          
          {/* Подпись к изображению */}
          {selectedImage.description && (
            <div className="p-4 bg-black/50 text-white/90 text-center">
              <p>{selectedImage.description}</p>
            </div>
          )}
          
          {/* Кнопки навигации */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/90 hover:bg-white/20 rounded-full"
            onClick={onPrev}
            aria-label={t('gallery.prevImage')}
          >
            <ChevronLeft size={36} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/90 hover:bg-white/20 rounded-full"
            onClick={onNext}
            aria-label={t('gallery.nextImage')}
          >
            <ChevronRight size={36} />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
