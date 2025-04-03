
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Leaf } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const InitiationSystemsSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="animate-on-scroll">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
          {t('products.initiation.badge')}
        </span>
        
        <h2 className="section-title mb-6">
          {t('products.initiation.title')}
        </h2>
        
        <p className="text-lg mb-6">
          {t('products.initiation.description')}
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <div className="mt-1 text-primary">
              <Clock size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{t('products.initiation.timing.title')}</h3>
              <p className="text-muted-foreground">{t('products.initiation.timing.description')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-primary">
              <Shield size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{t('products.initiation.safety.title')}</h3>
              <p className="text-muted-foreground">{t('products.initiation.safety.description')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-primary">
              <Leaf size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{t('products.initiation.eco.title')}</h3>
              <p className="text-muted-foreground">{t('products.initiation.eco.description')}</p>
            </div>
          </div>
        </div>
        
        <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
          {t('products.initiation.contact')}
          <ArrowRight size={18} />
        </Link>
      </div>
      
      <div className="relative animate-on-scroll">
        <div className="glass-card rounded-2xl overflow-hidden aspect-video">
          <img src="https://granit-svg.ru/img-granit/system-ii.webp" alt={t('products.initiation.title')} className="object-cover w-full h-full" />
        </div>
        <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
          <p className="font-semibold">{t('products.initiation.precision.title')}</p>
          <p className="text-sm text-inherit">{t('products.initiation.precision.description')}</p>
        </div>
      </div>
    </div>
  );
};
