
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const ProductsHero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="pt-16 pb-20 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            {t('products.title')}
          </h1>
          
          <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
            {t('products.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};
