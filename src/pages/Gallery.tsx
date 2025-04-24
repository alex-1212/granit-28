
import React, { useEffect } from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryModal from '@/components/gallery/GalleryModal';
import { galleryImages } from '@/components/gallery/galleryData';
import { useGallery } from '@/components/gallery/useGallery';
import { useLanguage } from '@/context/LanguageContext';

const Gallery = () => {
  useAnimateOnScroll();
  const { t } = useLanguage();
  
  const { 
    selectedImage, 
    currentIndex, 
    openModal, 
    closeModal, 
    handleNextImage, 
    handlePrevImage 
  } = useGallery(galleryImages);
  
  useEffect(() => {
    document.title = t('gallery.title') + ' — ООО «Гранит»';
  }, [t]);

  return (
    <div className="w-full">
      <GalleryHero />
      <GalleryGrid images={galleryImages} onImageClick={openModal} />
      <GalleryModal 
        selectedImage={selectedImage} 
        currentIndex={currentIndex}
        totalImages={galleryImages.length}
        onClose={closeModal}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
};

export default Gallery;
