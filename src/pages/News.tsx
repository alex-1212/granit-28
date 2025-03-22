
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { newsData } from '@/data/news';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

const ITEMS_PER_PAGE = 9;

const News = () => {
  useAnimateOnScroll();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [paginatedNews, setPaginatedNews] = useState<typeof newsData>([]);
  
  useEffect(() => {
    document.title = 'Новости — ООО «Гранит»';
    
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  
  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setPaginatedNews(newsData.slice(startIndex, endIndex));
    
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  }, [currentPage]);
  
  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Новости компании
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
              Актуальная информация о наших проектах, достижениях и технологиях
            </p>
          </div>
        </div>
      </section>
      
      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-12 animate-on-scroll">Все публикации</h2>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="animate-on-scroll">
                  <Skeleton className="h-48 w-full mb-4" />
                  <Skeleton className="h-6 w-1/4 mb-2" />
                  <Skeleton className="h-8 w-3/4 mb-4" />
                  <Skeleton className="h-24 w-full mb-4" />
                  <Skeleton className="h-6 w-1/3" />
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedNews.map((news) => (
                  <Card 
                    key={news.id} 
                    className="overflow-hidden transition-all duration-300 hover:shadow-md group animate-on-scroll"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    <CardHeader className="p-6 pb-2">
                      <CardDescription>
                        {formatDate(news.date)}
                      </CardDescription>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {news.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-6 pt-2">
                      <p className="text-muted-foreground">
                        {news.summary}
                      </p>
                    </CardContent>
                    
                    <CardFooter className="p-6 pt-0">
                      <Link 
                        to={`/news/${news.id}`}
                        className="text-primary font-medium flex items-center gap-1 hover:underline"
                      >
                        Читать далее
                        <ArrowRight size={16} />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-12">
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        />
                      </PaginationItem>
                    )}
                    
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink
                          isActive={currentPage === index + 1}
                          onClick={() => setCurrentPage(index + 1)}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
