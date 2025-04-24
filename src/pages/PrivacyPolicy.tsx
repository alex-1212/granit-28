
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';

const PrivacyPolicy = () => {
  useAnimateOnScroll();
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = t('privacy.title') + ' — ООО «Гранит»';
  }, [t]);

  return (
    <div className="w-full">
      <Helmet>
        <title>{t('privacy.title')} — ООО «Гранит»</title>
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              {t('privacy.title')}
            </h1>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose dark:prose-invert prose-headings:font-display prose-img:rounded-xl prose-img:mx-auto max-w-none">
            <p>{t('privacy.content')}</p>

            <div className="my-8 p-6 border border-border rounded-xl bg-card/50">
              <p className="italic">
                {t('privacy.content')}
              </p>
            </div>
            
            <div className="my-8">
              <p>{t('privacy.content')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
