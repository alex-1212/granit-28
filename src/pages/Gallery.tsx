import React, { useEffect } from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryModal from '@/components/gallery/GalleryModal';
import { galleryImages } from '@/components/gallery/galleryData';
import { useGallery } from '@/components/gallery/useGallery';
import { Seo, breadcrumbSchema } from '@/components/common/Seo';

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

  return (
    <div className="w-full">
      <Seo
        path="/gallery"
        title="Фотогалерея — буровзрывные работы и производство ЭВВ"
        description="Фото объектов ООО «Гранит»: буровзрывные работы на месторождениях Дальнего Востока и Якутии, завод по производству ЭВВ, техника СЗМ и ПСЗУ в работе."
        keywords="фото буровзрывные работы, галерея БВР, взрывные работы фото, завод ЭВВ"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Главная', path: '/' },
            { name: 'Галерея', path: '/gallery' },
          ]),
        ]}
      />
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
