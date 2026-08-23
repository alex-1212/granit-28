
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useIsMobile } from '@/hooks/use-mobile';

const NewsCardSkeleton = () => {
  const isMobile = useIsMobile();

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden aspect-video">
        <Skeleton className="w-full h-full" />
        <div className="absolute top-2 md:top-3 right-2 md:right-3">
          <Skeleton className="h-5 w-16 md:w-20 rounded-md" />
        </div>
      </div>
      
      <CardContent className="flex-grow p-3 md:p-5">
        <Skeleton className="h-5 md:h-6 w-full mb-2 md:mb-3" />
        <Skeleton className="h-5 md:h-6 w-3/4 mb-4" />
        <Skeleton className="h-4 md:h-5 w-full mb-2" />
        <Skeleton className="h-4 md:h-5 w-5/6" />
      </CardContent>
      
      <CardFooter className="px-3 md:px-5 pb-3 md:pb-5 pt-0 flex items-center justify-between">
        <Skeleton className="h-4 w-20 md:w-24" />
        <Skeleton className="h-6 w-16 md:w-24 rounded-md" />
      </CardFooter>
    </Card>
  );
};

export default NewsCardSkeleton;
