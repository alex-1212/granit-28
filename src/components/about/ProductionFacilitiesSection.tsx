
import React from 'react';
import { Factory } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ProductionFacilitiesSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mb-20">
      <h2 className="section-title text-center mb-12 animate-on-scroll">
        {t('about.facilities.title')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="glass-card-primary rounded-xl p-6 animate-on-scroll">
          <div className="flex items-center justify-center mb-4">
            <Factory className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center">{t('about.facilities.zabaykalye.title')}</h3>
          <p className="text-muted-foreground mb-4">
            {t('about.facilities.zabaykalye.text')}
          </p>
        </div>
        
        <div className="glass-card-primary rounded-xl p-6 animate-on-scroll">
          <div className="flex items-center justify-center mb-4">
            <Factory className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center">{t('about.facilities.yakutia.title')}</h3>
          <p className="text-muted-foreground mb-4">
            {t('about.facilities.yakutia.text')}
          </p>
        </div>
        
        <div className="glass-card-primary rounded-xl p-6 animate-on-scroll">
          <div className="flex items-center justify-center mb-4">
            <Factory className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center">{t('about.facilities.khabarovsk.title')}</h3>
          <p className="text-muted-foreground mb-4">
            {t('about.facilities.khabarovsk.text')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductionFacilitiesSection;
