
import { useState } from 'react';
import { ImageItem } from './galleryData';

export const useGallery = (images: ImageItem[]) => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const openModal = (image: ImageItem) => {
    const index = images.findIndex(img => img.id === image.id);
    setCurrentIndex(index);
    setSelectedImage(image);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  const handleNextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(images[currentIndex + 1]);
    } else {
      // Зацикливаем галерею
      setCurrentIndex(0);
      setSelectedImage(images[0]);
    }
  };
  
  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(images[currentIndex - 1]);
    } else {
      // Зацикливаем галерею
      setCurrentIndex(images.length - 1);
      setSelectedImage(images[images.length - 1]);
    }
  };

  return {
    selectedImage,
    currentIndex,
    openModal,
    closeModal,
    handleNextImage,
    handlePrevImage
  };
};
