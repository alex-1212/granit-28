
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Settings, Factory } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const SzmSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="order-2 lg:order-1 relative animate-on-scroll">
        <div className="glass-card rounded-2xl overflow-hidden aspect-video">
          <img src="https://granit-svg.ru/img-granit/galery-1.webp" alt={t('products.equipment.title')} className="object-cover w-full h-full" />
        </div>
        <div className="absolute -bottom-6 -left-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
          <p className="font-semibold">{t('products.equipment.mobility.title')}</p>
          <p className="text-sm text-inherit">{t('products.equipment.mobility.description')}</p>
        </div>
      </div>
      
      <div className="order-1 lg:order-2 animate-on-scroll">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
          {t('products.equipment.badge')}
        </span>
        
        <h2 className="section-title mb-6">
          {t('products.equipment.title')}
        </h2>
        
        <p className="text-lg mb-6">
          {t('products.equipment.description')}
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <div className="mt-1 text-primary">
              <Truck size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{t('products.equipment.features.mobility.title')}</h3>
              <p className="text-muted-foreground">{t('products.equipment.features.mobility.description')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-primary">
              <Settings size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{t('products.equipment.features.flexibility.title')}</h3>
              <p className="text-muted-foreground">{t('products.equipment.features.flexibility.description')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-primary">
              <Factory size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{t('products.equipment.features.autonomy.title')}</h3>
              <p className="text-muted-foreground">{t('products.equipment.features.autonomy.description')}</p>
            </div>
          </div>
        </div>
        
        <Link to="/gallery" className="btn-primary inline-flex items-center gap-2">
          {t('products.equipment.viewGallery')}
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

