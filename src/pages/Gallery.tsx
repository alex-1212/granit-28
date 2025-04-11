
import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: ImageItem[] = [
  { id: 1, src: '/lovable-uploads/09eb20c4-82ab-42ad-90b0-45341be3b0da.png', alt: 'Смесительно-зарядная машина МЗУ-14-НПБ с возможностью заряжания скважин смесевыми эмульсионными и гранулированными ВВ в количестве 14 тонн' },
  { id: 2, src: '/lovable-uploads/1e9cfe7b-6b5c-467a-afd2-38e25a0865f7.png', alt: 'Смесительно-зарядная машина МЗУ-14-НПБ с возможностью заряжания скважин смесевыми эмульсионными и гранулированными ВВ в количестве 14 тонн' },
  { id: 3, src: '/lovable-uploads/15204397-b709-4394-ad8c-9ecb0fc70732.png', alt: 'Смесительно-зарядная машина МЗУ-14-НПБ с возможностью заряжания скважин смесевыми эмульсионными и гранулированными ВВ в количестве 14 тонн' },
  { id: 4, src: '/lovable-uploads/04e619ae-ac56-477d-8f61-36df78335511.png', alt: 'Смесительно-зарядная машина МЗУ-14-НПБ с возможностью заряжания скважин смесевыми эмульсионными и гранулированными ВВ в количестве 14 тонн' },
  { id: 5, src: '/lovable-uploads/333b542e-208e-494e-b29c-4ed383ca364b.png', alt: 'Буровая установка с гусеничным ходом, оснащенный специальным оборудованием для горных работ.' },
  { id: 6, src: '/lovable-uploads/552e6efa-bb5d-4c80-b52b-af9f284d6991.png', alt: 'Буровая установка Kaishan с буровым оборудованием "Алмазгеобур", готовая к проведению геологических исследований.' },
  { id: 7, src: '/lovable-uploads/23b30a52-46f7-4d76-9ca5-514614e525c7.png', alt: 'Буровая установка Epiroc работает на открытой местности в условиях зимы.' },
  { id: 8, src: '/lovable-uploads/9ea629f2-5469-476f-a238-5e0583f5c8a7.png', alt: 'Буровая установка Epiroc с высоким буровым столбом, предназначенная для горных или строительных работ.' },
  { id: 9, src: '/lovable-uploads/aedd666d-878b-495e-b9e9-e70a80c134aa.png', alt: 'Буровая установка с гусеничным ходом движется по дороге в зимних условиях, оснащенный дополнительным оборудованием для работы в сложных погодных условиях.' },
];

const Gallery = () => {
  useAnimateOnScroll();
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    document.title = 'Галерея — ООО «Гранит»';
  }, []);
  
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
      // Зацикливаем галерею
      setCurrentIndex(0);
      setSelectedImage(galleryImages[0]);
    }
  };
  
  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(galleryImages[currentIndex - 1]);
    } else {
      // Зацикливаем галерею
      setCurrentIndex(galleryImages.length - 1);
      setSelectedImage(galleryImages[galleryImages.length - 1]);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
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
                    {/* Иконка лупы при наведении */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center">
                        <Search size={24} className="text-white" />
                      </div>
                    </div>
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
            
            {/* Кнопка навигации влево */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
              aria-label="Предыдущее изображение"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Кнопка навигации вправо */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
              aria-label="Следующее изображение"
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
                Изображение {currentIndex + 1} из {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
