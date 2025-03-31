
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NewsCarousel from '@/components/home/NewsCarousel';

const NewsSection: React.FC = () => {
  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="section-title mb-2 animate-on-scroll">Последние новости</h2>
            <p className="text-muted-foreground animate-on-scroll">Актуальная информация о наших проектах и достижениях</p>
          </div>
          
          <Link 
            to="/news" 
            className="btn-outline flex items-center gap-2 animate-on-scroll"
          >
            Все новости
            <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="animate-on-scroll">
          <NewsCarousel />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
