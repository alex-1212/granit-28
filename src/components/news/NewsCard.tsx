
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { News } from '@/models/News';

interface NewsCardProps {
  news: News;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Card className="w-full h-full flex flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={news.imageUrl} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <h3 className="text-xl font-bold">{news.title}</h3>
        <p className="text-sm text-muted-foreground">{news.date}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="line-clamp-3">{news.summary}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/news/${news.id}`} className="w-full">
          <Button variant="default" className="w-full">
            Читать далее
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
