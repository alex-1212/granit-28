
import React, { useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageItem } from './galleryData';
import { useLanguage } from '@/i18n/LanguageContext';

interface GalleryModalProps {
  selectedImage: ImageItem | null;
  currentIndex: number;
  totalImages: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const GalleryModal = ({ 
  selectedImage, 
  currentIndex, 
  totalImages, 
  onClose, 
  onNext, 
  onPrev 
}: GalleryModalProps) => {
  const { t } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedImage, onClose, onNext, onPrev]);

  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4 py-8 backdrop-blur-sm">
      <div 
        ref={modalRef}
        className="relative bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in flex flex-col"
      >
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label={t('gallery.ui.modal.close')}
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Кнопка навигации влево */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
          aria-label={t('gallery.ui.modal.prev')}
        >
          <ChevronLeft size={24} />
        </button>
        
        {/* Кнопка навигации вправо */}
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
          aria-label={t('gallery.ui.modal.next')}
        >
          <ChevronRight size={24} />
        </button>
        
        <div className="flex items-center justify-center p-4 min-h-0 flex-1">
          <img
            src={selectedImage.src}
            alt={t(`gallery.ui.image.${selectedImage.id}.alt`)}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>
        
        <div className="p-4 border-t border-border shrink-0 max-h-[25vh] overflow-y-auto">
          <p className="text-foreground break-words leading-relaxed">{t(`gallery.ui.image.${selectedImage.id}.alt`)}</p>
          <p className="text-muted-foreground text-sm mt-1">
            {t('gallery.ui.modal.counter').replace('{current}', String(currentIndex + 1)).replace('{total}', String(totalImages))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
