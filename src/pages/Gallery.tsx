import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { useLanguage } from '@/context/LanguageContext';

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

const Gallery = () => {
  useAnimateOnScroll();
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  const galleryImages: ImageItem[] = [
    { id: 1, src: 'https://granit-svg.ru/img-granit/galery-1.webp', alt: 'Смесительно-зарядная машина МЗУ-14-НПБ с возможностью заряжания скважин смесевыми эмульсионными и гранулированными ВВ в количестве 14 тонн' },
    { id: 2, src: 'https://granit-svg.ru/img-granit/galery-2.webp', alt: 'Смесительно-зарядная машина МЗУ-14-НПБ с возможностью заряжания скважин смесевыми эмульсионными и гранулированными ВВ в количестве 14 тонн' },
    { id: 3, src: 'https://granit-svg.ru/img-granit/galery-3.webp', alt: 'Смесительно-зарядная машина МЗУ-14-НПБ с возможностью заряжания скважин смесевыми эмульсионными и гранулированными ВВ в количестве 14 тонн' },
    { id: 4, src: 'https://granit-svg.ru/img-granit/galery-4.jpg', alt: 'Смесительно-зарядная машина МЗУ-14-НПБ с возможностью заряжания скважин смесевыми эмульсионными и гранулированными ВВ в количестве 14 тонн' },
    { id: 5, src: 'https://granit-svg.ru/assets/images/22f85f65d02d0c86c3db4ccf3ba42899.jpg', alt: 'Взрывные работы' },
    { id: 6, src: 'https://granit-svg.ru/assets/images/22f85f65d02d0c86c3db4ccf3ba42899.jpg', alt: 'Заводская линия в Якутии' },
    { id: 7, src: 'https://granit-svg.ru/assets/images/22f85f65d02d0c86c3db4ccf3ba42899.jpg', alt: 'Работа на БАМ-2' },
    { id: 8, src: 'https://granit-svg.ru/assets/images/22f85f65d02d0c86c3db4ccf3ba42899.jpg', alt: 'Техника компании' },
    { id: 9, src: 'https://granit-svg.ru/assets/images/22f85f65d02d0c86c3db4ccf3ba42899.jpg', alt: 'Производство патронов ЭВВ' },
    { id: 10, src: 'https://granit-svg.ru/assets/images/22f85f65d02d0c86c3db4ccf3ba42899.jpg', alt: 'Команда на объекте' },
  ];
  
  useEffect(() => {
    document.title = `${t('gallery.title')} — ООО «Гранит»`;
  }, [t]);
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setSelectedImage(null);
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
  }, [selectedImage]);
  
  const openModal = (image: ImageItem) => {
    const index = galleryImages.findIndex(img => img.id === image.id);
    setCurrentIndex(index);
    setSelectedImage(image);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  const handleNextImage = () => {
    if (currentIndex < galleryImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(galleryImages[currentIndex + 1]);
    } else {
      setCurrentIndex(0);
      setSelectedImage(galleryImages[0]);
    }
  };
  
  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(galleryImages[currentIndex - 1]);
    } else {
      setCurrentIndex(galleryImages.length - 1);
      setSelectedImage(galleryImages[galleryImages.length - 1]);
    }
  };

  return (
    <div className="w-full">
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              {t('gallery.title')}
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
              {t('gallery.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="animate-on-scroll group cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="glass-card-solid rounded-xl overflow-hidden">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4 py-8 backdrop-blur-sm">
          <div 
            ref={modalRef}
            className="relative bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in"
          >
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={closeModal}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label={t('gallery.close')}
              >
                <X size={20} />
              </button>
            </div>
            
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
              aria-label={t('gallery.prev')}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
              aria-label={t('gallery.next')}
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="flex items-center justify-center p-4 h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
            
            <div className="p-4 border-t border-border">
              <p className="text-foreground">{selectedImage.alt}</p>
              <p className="text-muted-foreground text-sm mt-1">
                {t('gallery.image')} {currentIndex + 1} {t('gallery.of')} {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
