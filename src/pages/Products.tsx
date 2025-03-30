
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

const Products = () => {
  useAnimateOnScroll();
  
  useEffect(() => {
    document.title = 'Продукты и услуги — ООО «Гранит»';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <ProductsHero />
      
      {/* ЭВВ Production */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
      
      <section className="py-20">
        <div className="container mx-auto px-4">
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
