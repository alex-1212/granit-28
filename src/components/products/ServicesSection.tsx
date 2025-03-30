
import React from 'react';
import { Drill, Bomb, Target, Ruler, Hammer, Lightbulb } from 'lucide-react';

export const ServicesSection = () => {
  return (
    <div className="mb-20 animate-on-scroll">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
          Комплексный подход
        </span>
        
        <h2 className="section-title mb-6">
          Услуги компании
        </h2>
        
        <p className="text-lg mx-auto max-w-3xl">
          Предоставляем полный спектр услуг в области буровзрывных работ, от проектирования до реализации проектов любой сложности
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-xl animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="mb-4 text-primary">
            <Drill size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Буровые работы</h3>
          <p className="text-muted-foreground mb-4">
            Производим буровые работы с использованием современного оборудования в любых климатических условиях.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl animate-on-scroll animate-delay-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="mb-4 text-primary">
            <Bomb size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Взрывные работы</h3>
          <p className="text-muted-foreground mb-4">
            Выполняем взрывные работы с применением ЭВВ собственного производства на различных объектах.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl animate-on-scroll animate-delay-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="mb-4 text-primary">
            <Target size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Специальные взрывные работы</h3>
          <p className="text-muted-foreground mb-4">
            Выполняем специальные взрывные работы повышенной сложности в труднодоступных районах.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl animate-on-scroll animate-delay-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="mb-4 text-primary">
            <Ruler size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Маркшейдерские работы</h3>
          <p className="text-muted-foreground mb-4">
            Проводим профессиональные маркшейдерские работы для обеспечения точности выполнения проектов.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl animate-on-scroll animate-delay-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="mb-4 text-primary">
            <Hammer size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Механический демонтаж</h3>
          <p className="text-muted-foreground mb-4">
            Осуществляем работы по механическому демонтажу объектов с соблюдением всех требований безопасности.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl animate-on-scroll animate-delay-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="mb-4 text-primary">
            <Lightbulb size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Инженерно-технический консалтинг</h3>
          <p className="text-muted-foreground mb-4">
            Профессиональные решения для оптимизации буровзрывных, маркшейдерских и производственных процессов.
          </p>
        </div>
      </div>
    </div>
  );
};
