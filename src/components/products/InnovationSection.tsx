
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Image } from 'lucide-react';

export const InnovationSection = () => {
  return (
    <section className="py-20 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-[0.07] bg-repeat bg-[length:30px_30px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title mb-6 animate-on-scroll">
            Инновации и технологии
          </h2>
          
          <p className="text-lg animate-on-scroll">
            Мы постоянно внедряем новые технологии и инновационные решения для повышения эффективности и безопасности буровзрывных работ
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Цифровые технологии</h3>
            <p className="text-muted-foreground">
              Внедрение систем 3D-моделирования для проектирования взрывных работ и контроля их результатов. Использование современного программного обеспечения для расчета параметров взрыва с учетом геологических особенностей участка.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Экологичные решения</h3>
            <p className="text-muted-foreground">
              Разработка и применение технологий, минимизирующих воздействие на окружающую среду. Внедрение замкнутых циклов производства и переработка отходов для повторного использования.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <Link to="/gallery" className="btn-primary inline-flex shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <Image size={18} />
            Смотреть галерею технологий
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
