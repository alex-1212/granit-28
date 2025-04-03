
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const AuxiliaryEquipmentSection = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <h2 className="section-title text-center mb-12 animate-on-scroll">{t('products.auxiliary.title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-on-scroll">
        <div className="glass-card-primary rounded-xl overflow-hidden">
          <div className="aspect-video">
            <img
              src="https://granit-svg.ru/img-granit/shantui.webp"
              alt={t('products.auxiliary.bulldozers.title')}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">{t('products.auxiliary.bulldozers.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('products.auxiliary.bulldozers.description')}
            </p>
          </div>
        </div>
        
        <div className="glass-card-primary rounded-xl overflow-hidden">
          <div className="aspect-video">
            <img
              src="https://granit-svg.ru/img-granit/vezdehod.webp"
              alt={t('products.auxiliary.allTerrainVehicles.title')}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">{t('products.auxiliary.allTerrainVehicles.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('products.auxiliary.allTerrainVehicles.description')}
            </p>
          </div>
        </div>
        
        <div className="glass-card-primary rounded-xl overflow-hidden">
          <div className="aspect-video">
            <img
              src="https://granit-svg.ru/img-granit/tral.webp"
              alt={t('products.auxiliary.trucks.title')}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">{t('products.auxiliary.trucks.title')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('products.auxiliary.trucks.description')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
