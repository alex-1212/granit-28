
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Calendar, Share2, ArrowLeft, PenSquare, Trash2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const NewsDetailSkeleton = () => {
  const isMobile = useIsMobile();
  
  return (
    <div>
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto animate-pulse">
            <div className="mb-6 flex items-center">
              <ArrowLeft size={isMobile ? 16 : 20} className="text-primary dark:text-white mr-2" />
              <Skeleton className="h-4 md:h-5 w-24 md:w-32" />
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-white border-primary/20 dark:border-white/20">
                <Skeleton className="h-4 w-16" />
              </Badge>
            </div>
            
            <Skeleton className="h-8 md:h-10 w-full mb-4" />
            <Skeleton className="h-8 md:h-10 w-4/5 mb-6" />
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center text-muted-foreground">
                <Calendar size={isMobile ? 14 : 16} className="mr-1.5" />
                <Skeleton className="h-4 w-36" />
              </div>
              
              <div className="flex items-center gap-2">
                <Share2 size={isMobile ? 14 : 16} />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-xl mb-8 md:mb-10 shadow-md aspect-video">
              <Skeleton className="w-full h-full" />
            </div>
            
            <div className="space-y-4 animate-pulse">
              <Skeleton className="h-5 md:h-6 w-full" />
              <Skeleton className="h-5 md:h-6 w-full" />
              <Skeleton className="h-5 md:h-6 w-3/4" />
              <Skeleton className="h-5 md:h-6 w-full" />
              <Skeleton className="h-5 md:h-6 w-5/6" />
              <Skeleton className="h-5 md:h-6 w-full" />
              <Skeleton className="h-5 md:h-6 w-4/5" />
              <Skeleton className="h-5 md:h-6 w-full" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8 md:mb-12">
            <Skeleton className="h-7 md:h-8 w-64 md:w-72 mb-3" />
            <Skeleton className="h-5 md:h-6 w-80 md:w-96" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <Skeleton className="w-full h-full" />
                  <div className="absolute top-2 md:top-3 right-2 md:right-3">
                    <Skeleton className="h-5 w-16 md:w-20 rounded-md" />
                  </div>
                </div>
                
                <CardContent className="flex-grow p-3 md:p-5">
                  <Skeleton className="h-5 md:h-6 w-full mb-2 md:mb-3" />
                  <Skeleton className="h-4 md:h-5 w-full mb-2" />
                  <Skeleton className="h-4 md:h-5 w-5/6" />
                </CardContent>
                
                <CardFooter className="px-3 md:px-5 pb-3 md:pb-5 pt-0 flex items-center justify-between">
                  <Skeleton className="h-4 w-20 md:w-24" />
                  <Skeleton className="h-6 w-16 md:w-24 rounded-md" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetailSkeleton;
