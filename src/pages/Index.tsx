
import React, { useEffect } from 'react';
import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import AboutSection from '@/components/home/AboutSection';
import CTASection from '@/components/home/CTASection';
import NewsSection from '@/components/home/NewsSection';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';

const Index = () => {
  useAnimateOnScroll();
  
  useEffect(() => {
    document.title = 'ООО «Гранит» — Буровзрывные работы на Дальнем Востоке';
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <AboutSection />
      <CTASection />
      <NewsSection />
    </div>
  );
};

export default Index;
