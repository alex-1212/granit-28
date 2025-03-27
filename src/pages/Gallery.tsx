
import React, { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: ImageItem[] = [
  { id: 1, src: '/images/gallery/gallery-1.jpg', alt: 'Буровые работы в горах' },
  { id: 2, src: '/images/gallery/gallery-2.jpg', alt: 'Производственная линия ЭВВ' },
  { id: 3, src: '/images/gallery/gallery-3.jpg', alt: 'Специалисты на объекте' },
  { id: 4, src: '/images/gallery/gallery-4.jpg', alt: 'Бурение скважин' },
  { id: 5, src: '/images/gallery/gallery-5.jpg', alt: 'Взрывные работы' },
  { id: 6, src: '/images/gallery/gallery-6.jpg', alt: 'Заводская линия в Якутии' },
  { id: 7, src: '/images/gallery/gallery-7.jpg', alt: 'Работа на БАМ-2' },
  { id: 8, src: '/images/gallery/gallery-8.jpg', alt: 'Техника компании' },
  { id: 9, src: '/images/gallery/gallery-9.jpg', alt: 'Производство патронов ЭВВ' },
  { id: 10, src: '/images/gallery/gallery-10.jpg', alt: 'Команда на объекте' },
];

const Gallery = () => {
  useAnimateOnScroll();
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    document.title = 'Галерея — ООО «Гранит»';
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
