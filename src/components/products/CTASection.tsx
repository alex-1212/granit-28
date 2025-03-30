
import React from 'react';
import { Link } from 'react-router-dom';

export const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6 animate-on-scroll">
            Готовы к сотрудничеству?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
            Наши специалисты готовы ответить на все ваши вопросы и предложить оптимальное решение для вашего проекта
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
            <Link to="/contact" className="btn-primary">
              Связаться с нами
            </Link>
            
            <Link to="/licenses" className="btn-outline">
              Наши лицензии
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
