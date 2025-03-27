
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft } from 'lucide-react';

const NewsDetailSkeleton = () => {
  return (
    <div>
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-start mb-8">
              <div className="inline-flex items-center gap-2 text-primary font-medium">
                <ArrowLeft size={18} />
                <Skeleton className="w-36 h-6" />
              </div>
            </div>
            
            <header>
              <Skeleton className="h-10 w-full mb-6" />
              
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Skeleton className="w-36 h-6" />
                <Skeleton className="w-24 h-6" />
              </div>
            </header>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg mb-8 bg-white dark:bg-gray-800">
              <Skeleton className="w-full aspect-video" />
              
              <div className="p-6">
                <Skeleton className="h-6 w-full mb-4" />
                
                <div className="space-y-4 mb-6">
                  <Skeleton className="w-full h-5" />
                  <Skeleton className="w-full h-5" />
                  <Skeleton className="w-3/4 h-5" />
                  <Skeleton className="w-full h-5" />
                  <Skeleton className="w-5/6 h-5" />
                </div>
                
                <div className="pt-4 border-t">
                  <Skeleton className="w-64 h-8" />
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <Skeleton className="h-8 w-64 mb-8" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Skeleton className="h-[300px] rounded-xl" />
                <Skeleton className="h-[300px] rounded-xl hidden md:block" />
                <Skeleton className="h-[300px] rounded-xl hidden lg:block" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetailSkeleton;
