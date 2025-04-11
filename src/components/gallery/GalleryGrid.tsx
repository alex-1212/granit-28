
import React from 'react';
import { Search } from 'lucide-react';
import { ImageItem } from './galleryData';

interface GalleryGridProps {
  images: ImageItem[];
  onImageClick: (image: ImageItem) => void;
}

const GalleryGrid = ({ images, onImageClick }: GalleryGridProps) => {
  return (
    <section className="py-16 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="animate-on-scroll group cursor-pointer"
              onClick={() => onImageClick(image)}
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
  );
};

export default GalleryGrid;
