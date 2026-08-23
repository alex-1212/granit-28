
import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const LicensesHero = () => {
  const { t } = useLanguage();
  return (
    <section className="pt-16 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
            {t('licenses.ui.hero.title')}
          </h1>
          
          <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
            {t('licenses.ui.hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LicensesHero;
