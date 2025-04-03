
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NewsCarousel from '@/components/home/NewsCarousel';
import { useLanguage } from '@/context/LanguageContext';

const NewsSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="section-title mb-2 animate-on-scroll">{t('news.title')}</h2>
            <p className="text-muted-foreground animate-on-scroll">{t('news.latestNews')}</p>
          </div>
          
          <Link 
            to="/news" 
            className="btn-outline flex items-center gap-2 animate-on-scroll"
          >
            {t('buttons.viewAll')}
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

