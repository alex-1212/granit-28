
import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export const InnovationSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-[0.07] bg-repeat bg-[length:30px_30px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title mb-6 animate-on-scroll">
            {t('products.ui.innovation.title')}
          </h2>
          
          <p className="text-lg animate-on-scroll">
            {t('products.ui.innovation.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">{t('products.ui.innovation.digital.title')}</h3>
            <p className="text-muted-foreground">
              {t('products.ui.innovation.digital.description')}
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">{t('products.ui.innovation.eco.title')}</h3>
            <p className="text-muted-foreground">
              {t('products.ui.innovation.eco.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
