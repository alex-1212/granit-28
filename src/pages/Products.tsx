
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
import { useLanguage } from '@/i18n/LanguageContext';
import { Seo, breadcrumbSchema } from '@/components/common/Seo';

const Products = () => {
  useAnimateOnScroll();
  const { lang, t } = useLanguage();
  
  return (
    <div className="w-full">
      <Seo
        path="/products"
        title={
          lang === 'zh'
            ? t('products.meta.title')
            : 'Продукция и услуги — ЭВВ, СЗМ, ПСЗУ и буровзрывные работы'
        }
        description={
          lang === 'zh'
            ? t('products.meta.description')
            : 'Продукция ООО «Гранит»: эмульсионные взрывчатые вещества (ЭВВ), смесительно-зарядные машины (СЗМ), ПСЗУ, системы инициирования и вспомогательная техника. Услуги БВР для горнодобывающей промышленности.'
        }
        keywords="ЭВВ купить, эмульсионные взрывчатые вещества, СЗМ, ПСЗУ, системы инициирования, продукция для горных работ, БВР услуги"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Главная', path: '/' },
            { name: 'Продукция', path: '/products' },
          ]),
        ]}
      />
      
      {/* Hero Section */}
      <ProductsHero />
      
      {/* ЭВВ Production */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <EvvSection />
          
          {/* Equipment */}
          <SzmSection />
          
          {/*  Завод */}
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
