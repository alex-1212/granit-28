
import React, { useEffect } from 'react';
import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import AboutSection from '@/components/home/AboutSection';
import CTASection from '@/components/home/CTASection';
import NewsSection from '@/components/home/NewsSection';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  useAnimateOnScroll();
  
  return (
    <div className="w-full">
      <Helmet>
        <title>ООО «Гранит» — Буровзрывные работы на Дальнем Востоке</title>
        <meta name="description" content="ООО «Гранит» — динамично развивающаяся компания, специализирующаяся в сфере буровзрывных работ на Дальнем Востоке. Собственное производство ЭВВ." />
      </Helmet>
      <Hero />
      <Services />
      <AboutSection />
      <CTASection />
      <NewsSection />
    </div>
  );
};

export default Index;
