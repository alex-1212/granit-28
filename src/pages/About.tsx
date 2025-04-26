
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, UserPlus } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/container';
import PartnersSection from '@/components/about/PartnersSection';
import AdvantagesSection from '@/components/about/AdvantagesSection';
import ProductionFacilitiesSection from '@/components/about/ProductionFacilitiesSection';
import InnovationSection from '@/components/about/InnovationSection';
import EnvironmentalSection from '@/components/about/EnvironmentalSection';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  useAnimateOnScroll();
  const { t, language } = useLanguage();
  
  return (
    <div className="w-full">
      <Helmet>
        <title>{t('about.title')} — ООО «Гранит»</title>
        <meta name="description" content={t('about.subtitle')} />
        <meta name="language" content={language} />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              {t('about.title')}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in animate-delay-100">
              {t('about.subtitle')}
            </p>
          </div>
          
          <AdvantagesSection />
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="section-title mb-6 animate-on-scroll">
                {t('about.history.title')}
              </h2>
              
              <p className="text-lg mb-6 animate-on-scroll">
                {t('about.history.text1')}
              </p>
              
              <p className="text-muted-foreground mb-6 animate-on-scroll">
                {t('about.history.text2')}
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 animate-on-scroll">
                <Link to="/team" className="btn-primary flex items-center gap-2">
                  Наша команда
                  <UserPlus size={18} />
                </Link>
                
                <Link to="/careers" className="btn-outline">
                  Вакансии
                </Link>
              </div>
            </div>
            
            <div className="relative animate-on-scroll">
              <div className="glass-card rounded-2xl overflow-hidden aspect-[4/3]">
                <img 
                  alt="Производственный комплекс ООО Гранит" 
                  className="object-cover w-full h-full" 
                  src="/lovable-uploads/d2ed5b10-bfa4-4f48-a866-add9b1779f45.jpg" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
                <p className="font-semibold">Собственное производство</p>
                <p className="text-sm text-inherit">Контроль качества на всех этапах</p>
              </div>
            </div>
          </div>
          
          {/* Production Facilities */}
          <ProductionFacilitiesSection />
          
          {/* Innovation and Technology */}
          <InnovationSection />
          
          {/* Environmental Responsibility */}
          <EnvironmentalSection />
          
          {/* Partners Section */}
          <PartnersSection />
          
          {/* Development Strategy */}
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title mb-6">
              {t('about.strategy.title')}
            </h2>
            
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              {t('about.strategy.text')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
              <Link to="/contact" className="btn-primary">
                <Mail size={18} />
                {t('about.strategy.contactButton')}
              </Link>
              
              <Link to="/careers" className="btn-outline">
                <UserPlus size={18} />
                {t('about.strategy.joinButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
