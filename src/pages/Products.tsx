
import React, { useEffect } from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { ProductsHero } from '@/components/products/Hero';
import { EvvSection } from '@/components/products/EvvSection';
import { SzmSection } from '@/components/products/SzmSection';
import { InitiationSystemsSection } from '@/components/products/InitiationSystemsSection';
import { ServicesSection } from '@/components/products/ServicesSection';
import { AuxiliaryEquipmentSection } from '@/components/products/AuxiliaryEquipmentSection';
import { InnovationSection } from '@/components/products/InnovationSection';
import { CTASection } from '@/components/products/CTASection';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';

const Products = () => {
  useAnimateOnScroll();
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = t('products.title') + ' — ООО «Гранит»';
  }, [t]);
  
  return (
    <div className="w-full">
      <Helmet>
        <title>{t('products.title')} — ООО «Гранит»</title>
        <meta name="description" content={t('products.subtitle')} />
      </Helmet>
      
      {/* Hero Section */}
      <ProductsHero />
      
      {/* ЭВВ Production */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <EvvSection />
          
          {/* Equipment */}
          <SzmSection />
          
          {/* Системы инициирования */}
          <InitiationSystemsSection />
          
          {/* Услуги компании */}
          <ServicesSection />
        </div>
      </section>
      
      {/* CTA */}
      <CTASection />
      
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Auxiliary Equipment */}
          <AuxiliaryEquipmentSection />
        </div>
      </section>
      
      {/* Technologies and Innovations */}
      <InnovationSection />
    </div>
  );
};

export default Products;
