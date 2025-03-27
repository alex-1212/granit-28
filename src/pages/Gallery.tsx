
import React, { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import GalleryImageSkeleton from '@/components/gallery/GalleryImageSkeleton';
import { Skeleton } from "@/components/ui/skeleton";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

// Новые изображения с Unsplash
const galleryImages: ImageItem[] = [
  { id: 1, src: 'https://source.unsplash.com/random/800x800?mining,1', alt: 'Буровые работы в горах' },
  { id: 2, src: 'https://source.unsplash.com/random/800x800?industry,2', alt: 'Производственная линия' },
  { id: 3, src: 'https://source.unsplash.com/random/800x800?construction,3', alt: 'Специалисты на объекте' },
  { id: 4, src: 'https://source.unsplash.com/random/800x800?drilling,4', alt: 'Бурение скважин' },
  { id: 5, src: 'https://source.unsplash.com/random/800x800?explosion,5', alt: 'Взрывные работы' },
  { id: 6, src: 'https://source.unsplash.com/random/800x800?factory,6', alt: 'Заводская линия' },
  { id: 7, src: 'https://source.unsplash.com/random/800x800?railroad,7', alt: 'Работа на железной дороге' },
  { id: 8, src: 'https://source.unsplash.com/random/800x800?machinery,8', alt: 'Техника компании' },
  { id: 9, src: 'https://source.unsplash.com/random/800x800?industrial,9', alt: 'Производство' },
  { id: 10, src: 'https://source.unsplash.com/random/800x800?team,10', alt: 'Команда на объекте' },
  { id: 11, src: 'https://source.unsplash.com/random/800x800?construction,11', alt: 'Строительные работы' },
  { id: 12, src: 'https://source.unsplash.com/random/800x800?engineering,12', alt: 'Инженерные решения' },
];

const Gallery = () => {
  useAnimateOnScroll();
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    document.title = 'Галерея — ООО «Гранит»';
    
    // Имитация загрузки изображений
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
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
  
  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => ({ ...prev, [imageId]: true }));
  };
  
  const openModal = (image: ImageItem) => {
    setSelectedImage(image);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Галерея
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
              Фотографии наших объектов, техники и производственных мощностей
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading ? (
              // Показываем скелетоны во время загрузки
              Array(12).fill(0).map((_, index) => (
                <div key={`skeleton-${index}`} className="animate-on-scroll">
                  <GalleryImageSkeleton />
                </div>
              ))
            ) : (
              // Показываем изображения после загрузки
              galleryImages.map((image) => (
                <div 
                  key={image.id} 
                  className="animate-on-scroll group cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <div className="glass-card-solid rounded-xl overflow-hidden">
                    <div className="aspect-square overflow-hidden relative">
                      {!loadedImages[image.id] && <Skeleton className="absolute inset-0" />}
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${loadedImages[image.id] ? 'opacity-100' : 'opacity-0'}`}
                        loading="lazy"
                        onLoad={() => handleImageLoad(image.id)}
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      
      {/* Image Modal */}
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
                aria-label="Закрыть"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex items-center justify-center p-4 h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
            
            <div className="p-4 border-t border-border">
              <p className="text-foreground">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
