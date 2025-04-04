
import React from 'react';
import { Link } from 'react-router-dom';
import { Send, FileText } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-20 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-[0.07] bg-repeat bg-[length:30px_30px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6 animate-on-scroll">
            Готовы к сотрудничеству?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
            Наши специалисты готовы ответить на все ваши вопросы и предложить оптимальное решение для вашего проекта
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
            <Link to="/contact" className="btn-primary inline-flex shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <Send size={18} />
              Связаться с нами
            </Link>
            
            <Link to="/licenses" className="btn-outline inline-flex shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <FileText size={18} />
              Наши лицензии
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
