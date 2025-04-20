
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Edit, Tag, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NewsItem } from '@/services/newsService';
import { calculateReadingTime } from '@/components/home/utils/newsUtils';

interface NewsDetailHeroProps {
  news: NewsItem;
  formatDate: (dateString: string) => string;
  user: any;
  onEdit: () => void;
  onDelete: () => void;
}

const NewsDetailHero = ({ news, formatDate, user, onEdit, onDelete }: NewsDetailHeroProps) => {
  const readingTime = calculateReadingTime(news.content);

  return (
    <section className="pt-16 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-start mb-8">
            <Link 
              to="/news" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline animate-fade-in"
              aria-label="Вернуться к списку новостей"
            >
              <ArrowLeft size={18} />
              Вернуться к новостям
            </Link>
            
            {user && (
              <div className="flex items-center gap-2 animate-fade-in">
                <Button 
                  onClick={onEdit} 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1"
                  aria-label="Редактировать новость"
                >
                  <Edit size={16} />
                  Редактировать
                </Button>
                
                <Button 
                  onClick={onDelete} 
                  variant="destructive" 
                  size="sm"
                  className="flex items-center gap-1"
                  aria-label="Удалить новость"
                >
                  <Trash size={16} />
                  Удалить
                </Button>
              </div>
            )}
          </div>
          
          <header>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-in animate-delay-100">
              {news.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in animate-delay-200">
              <div className="flex items-center gap-1.5">
                <Calendar size={18} className="text-primary" />
                <time dateTime={news.date}>{formatDate(news.date)}</time>
              </div>
              
              <div className="flex items-center gap-1.5">
                <Tag size={18} className="text-primary" />
                <span>{news.category}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock size={18} className="text-primary" />
                <span>{readingTime} мин. чтения</span>
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};

export default NewsDetailHero;
