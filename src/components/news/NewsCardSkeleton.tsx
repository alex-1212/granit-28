
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const NewsCardSkeleton = () => {
  return (
    <div className="glass-card-solid rounded-xl overflow-hidden animate-on-scroll">
      <Skeleton className="aspect-video w-full" />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-24 rounded-full" />
        </div>
        <Skeleton className="h-7 w-full mb-3" />
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-3/4 mb-4" />
        <Skeleton className="h-5 w-32" />
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
