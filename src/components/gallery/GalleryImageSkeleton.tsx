
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const GalleryImageSkeleton = () => {
  return (
    <div className="glass-card-solid rounded-xl overflow-hidden">
      <div className="aspect-square overflow-hidden relative">
        <Skeleton className="w-full h-full" />
      </div>
    </div>
  );
};

export default GalleryImageSkeleton;
