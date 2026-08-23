import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Settings, Factory } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
export const SzmSection = () => {
  const { t } = useLanguage();
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="order-2 lg:order-1 relative animate-on-scroll">
        <div className="glass-card rounded-2xl overflow-hidden aspect-video">
          <img alt={t('products.ui.szm.imageAlt')} className="object-cover w-full h-full" src="/uploads/89db01c8-0a1a-4c5e-91d2-be05be3df1f7.webp" />
        </div>
        <div className="absolute -bottom-6 -left-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
          <p className="font-semibold">{t('products.ui.szm.capacity.value')}</p>
          <p className="text-sm text-inherit">{t('products.ui.szm.capacity.text')}</p>
        </div>
      </div>
      
      <div className="order-1 lg:order-2 animate-on-scroll">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
          {t('products.ui.szm.badge')}
        </span>
        
        <h2 className="section-title mb-6">
          {t('products.ui.szm.title')}
        </h2>
        
        <p className="text-lg mb-6">{t('products.ui.szm.description')}</p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Truck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 my-[8px] text-zinc-100 text-lg">{t('products.ui.szm.mobility.title')}</h3>
              <p className="text-muted-foreground">{t('products.ui.szm.mobility.description')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 my-[8px] text-zinc-100 text-lg">{t('products.ui.szm.flexibility.title')}</h3>
              <p className="text-muted-foreground">{t('products.ui.szm.flexibility.description')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Factory className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 my-[8px] text-zinc-100 text-lg">{t('products.ui.szm.autonomy.title')}</h3>
              <p className="text-muted-foreground">{t('products.ui.szm.autonomy.description')}</p>
            </div>
          </div>
        </div>
        
        <Link to="/szm" className="inline-flex btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          <ArrowRight size={18} />
          {t('products.ui.more')}
        </Link>
      </div>
    </div>;
};