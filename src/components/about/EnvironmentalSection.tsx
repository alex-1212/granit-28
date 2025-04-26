
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const EnvironmentalSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 md:p-12 mb-20 animate-on-scroll">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title mb-6">
          {t('about.environmental.title')}
        </h2>
        
        <p className="text-lg mb-8">
          {t('about.environmental.text')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-glass dark:shadow-glass-dark border border-white/20 dark:border-white/10 rounded-xl p-6 text-left">
            <h3 className="text-xl font-semibold mb-4">{t('about.environmental.recycling')}</h3>
            <p className="text-muted-foreground">
              {t('about.environmental.recyclingText')}
            </p>
          </div>
          
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-glass dark:shadow-glass-dark border border-white/20 dark:border-white/10 rounded-xl p-6 text-left">
            <h3 className="text-xl font-semibold mb-4">{t('about.environmental.storage')}</h3>
            <p className="text-muted-foreground">
              {t('about.environmental.storageText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalSection;
