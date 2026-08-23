import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
export const AuxiliaryEquipmentSection = () => {
  const { t } = useLanguage();
  return <>
      <h2 className="section-title text-center mb-12 animate-on-scroll">{t('products.ui.auxiliary.title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-on-scroll">
        <div className="glass-card-primary rounded-xl overflow-hidden">
          <div className="aspect-video">
            <img alt={t('products.ui.auxiliary.0.alt')} className="w-full h-full object-cover" src="/uploads/90b41c23-4965-441c-92b6-448becb44e33.webp" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">{t('products.ui.auxiliary.0.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('products.ui.auxiliary.0.description')}
            </p>
          </div>
        </div>
        
        <div className="glass-card-primary rounded-xl overflow-hidden">
          <div className="aspect-video">
            <img alt={t('products.ui.auxiliary.1.alt')} className="w-full h-full object-cover" src="/uploads/e7376bee-7c09-4f62-baf8-45259490f129.webp" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">{t('products.ui.auxiliary.1.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('products.ui.auxiliary.1.description')}
            </p>
          </div>
        </div>
        
        <div className="glass-card-primary rounded-xl overflow-hidden">
          <div className="aspect-video">
            <img alt={t('products.ui.auxiliary.2.alt')} className="w-full h-full object-cover" src="/uploads/3869e03e-57a2-4803-b61d-6e8aa01c0c33.webp" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">{t('products.ui.auxiliary.2.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('products.ui.auxiliary.2.description')}
            </p>
          </div>
        </div>
      </div>
    </>;
};