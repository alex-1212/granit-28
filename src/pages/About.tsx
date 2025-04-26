
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

const About = () => {
  useAnimateOnScroll();
  
  return (
    <div className="w-full">
      <Helmet>
        <title>О компании — ООО «Гранит»</title>
        <meta name="description" content="ООО «Гранит» — динамично развивающаяся компания с 10-летней историей в сфере буровзрывных работ. Собственное производство ЭВВ и уникальный опыт работы." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              О компании
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in animate-delay-100">
              Компания ООО «Гранит» зарекомендовала себя как стабильный и ответственный участник рынка буровзрывных работ. За годы активной деятельности мы стали ключевым партнером для ряда компаний горнодобывающего сектора Дальнего Востока и Якутии, предлагая современные технологии и безупречный подход к выполнению задач.
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
                Более 10 лет успешной практики в буровзрывных работах
              </h2>
              
              <p className="text-lg mb-6 animate-on-scroll">
                ООО «Гранит» — динамично развивающаяся компания, специализирующаяся на оказании услуг в сфере горнодобывающей промышленности. За десятилетнюю историю мы накопили уникальный опыт в реализации сложных проектов, разработке собственных технологий и производстве эмульсионных взрывчатых веществ (ЭВВ), что позволяет нам быть независимыми от внешних поставщиков.
              </p>
              
              <p className="text-muted-foreground mb-6 animate-on-scroll">
                Наша цель — стать лидером в производстве ЭВВ на Дальнем Востоке, минимизируя зависимость от импорта и предлагая клиентам комплексные решения «под ключ». ООО «Гранит» — это синтез опыта, инноваций и ответственности за результат.
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
              Стратегия развития
            </h2>
            
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Наша цель — стать лидером в производстве ЭВВ на Дальнем Востоке, минимизируя зависимость от импорта и предлагая клиентам комплексные решения «под ключ».
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
              <Link to="/contact" className="btn-primary">
                <Mail size={18} />
                Связаться с нами
              </Link>
              
              <Link to="/careers" className="btn-outline">
                <UserPlus size={18} />
                Присоединиться к команде
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
