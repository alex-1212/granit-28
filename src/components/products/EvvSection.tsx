
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BarChart, FileText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const EvvSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="animate-on-scroll">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
          {t('products.evv.badge')}
        </span>
        
        <h2 className="section-title mb-6">
          {t('products.evv.title')}
        </h2>
        
        <p className="text-lg mb-6">
          {t('products.evv.description')}
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <div className="mt-1 text-primary">
              <Shield size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{t('products.evv.safety.title')}</h3>
              <p className="text-muted-foreground">{t('products.evv.safety.description')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-primary">
              <BarChart size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{t('products.evv.efficiency.title')}</h3>
              <p className="text-muted-foreground">{t('products.evv.efficiency.description')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-primary">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{t('products.evv.eco.title')}</h3>
              <p className="text-muted-foreground">{t('products.evv.eco.description')}</p>
            </div>
          </div>
        </div>
        
        <Link to="/gallery" className="btn-primary inline-flex items-center gap-2">
          {t('gallery.title')}
          <ArrowRight size={18} />
        </Link>
      </div>
      
      <div className="relative animate-on-scroll">
        <div className="glass-card rounded-2xl overflow-hidden aspect-video">
          <img src="https://granit-svg.ru/img-granit/products1.webp" alt={t('products.evv.title')} className="object-cover w-full h-full" />
        </div>
        <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
          <p className="font-semibold">{t('products.evv.capacity.value')}</p>
          <p className="text-sm text-inherit">{t('products.evv.capacity.description')}</p>
        </div>
      </div>
    </div>
  );
};
