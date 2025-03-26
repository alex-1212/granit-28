
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const NewsDetailSkeleton = () => {
  return (
    <div>
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-8">
              <Skeleton className="w-32 h-6" />
            </div>
            
            <Skeleton className="h-10 w-full mb-6" />
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Skeleton className="w-36 h-6" />
              <Skeleton className="w-24 h-6" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="w-full aspect-video rounded-xl mb-10" />
            
            <div className="space-y-4">
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-3/4 h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-5/6 h-6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetailSkeleton;
