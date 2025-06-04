
import React, { useEffect } from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryModal from '@/components/gallery/GalleryModal';
import { galleryImages } from '@/components/gallery/galleryData';
import { useGallery } from '@/components/gallery/useGallery';
import { GalleryMeta } from '@/components/meta/GalleryMeta';

const Gallery = () => {
  useAnimateOnScroll();
  
  const { 
    selectedImage, 
    currentIndex, 
    openModal, 
    closeModal, 
    handleNextImage, 
    handlePrevImage 
  } = useGallery(galleryImages);
  
  useEffect(() => {
    document.title = 'Галерея — ООО «Гранит»';
  }, []);

  return (
    <div className="w-full">
      <GalleryMeta />
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
