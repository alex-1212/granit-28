
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const InnovationSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-[0.07] bg-repeat bg-[length:30px_30px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title mb-6 animate-on-scroll">
            {t('products.innovation.title')}
          </h2>
          
          <p className="text-lg animate-on-scroll">
            {t('products.innovation.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">{t('products.innovation.digitalTitle')}</h3>
            <p className="text-muted-foreground">
              {t('products.innovation.digitalDescription')}
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">{t('products.innovation.ecoTitle')}</h3>
            <p className="text-muted-foreground">
              {t('products.innovation.ecoDescription')}
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <Link to="/gallery" className="btn-primary inline-flex items-center gap-2">
            {t('products.innovation.viewGallery')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
