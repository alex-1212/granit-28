
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-primary/5 dark:bg-primary/10 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-[0.07] bg-repeat bg-[length:30px_30px]"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title mb-6 animate-on-scroll">
            Готовы обсудить ваш проект?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
            Мы предлагаем комплексные решения для горнодобывающей отрасли, от проектирования до реализации буровзрывных работ в самых сложных условиях.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
            <Link to="/contact" className="btn-primary">
              Оставить заявку
            </Link>
            
            <Link to="/technologies" className="btn-outline">
              Наши технологии
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
