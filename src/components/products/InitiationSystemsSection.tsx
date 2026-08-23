import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Building, Leaf, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
export const InitiationSystemsSection = () => {
  const { t } = useLanguage();
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="animate-on-scroll">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">{t('products.ui.initiation.badge')}</span>
        
        <h2 className="section-title mb-6">{t('products.ui.initiation.title')}</h2>
        
        <p className="text-lg mb-6">{t('products.ui.initiation.description')}</p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Factory className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 my-[8px] text-zinc-100 text-lg">{t('products.ui.initiation.cycle.title')}</h3>
              <p className="text-muted-foreground">{t('products.ui.initiation.cycle.description')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Building className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 my-[8px] text-zinc-100 text-lg">{t('products.ui.initiation.logistics.title')}</h3>
              <p className="text-muted-foreground">{t('products.ui.initiation.logistics.description')}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Leaf className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 my-[8px] text-zinc-100 text-lg">{t('products.ui.initiation.ecology.title')}</h3>
              <p className="text-muted-foreground">{t('products.ui.initiation.ecology.description')}</p>
            </div>
          </div>
        </div>
        
        <Link to="/factory" className="inline-flex btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          {t('products.ui.more')}
          <ArrowRight size={18} />
        </Link>
      </div>
      
      <div className="relative animate-on-scroll">
        <div className="glass-card rounded-2xl overflow-hidden aspect-video">
          <img alt={t('products.ui.initiation.imageAlt')} className="object-cover w-full h-full" src="/uploads/074bedd1-f77a-4482-be5f-18f099487be5.webp" />
        </div>
        <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
          <p className="font-semibold">{t('products.ui.initiation.caption.value')}</p>
          <p className="text-sm text-inherit">{t('products.ui.initiation.caption.text')}</p>
        </div>
      </div>
    </div>;
};