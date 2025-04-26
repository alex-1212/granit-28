import React from 'react';
import { 
  Pickaxe, Factory, Target, Settings, FileText, Bomb, 
  Layers, Package, Bulb, Rocket 
} from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: <Factory size={28} />,
      title: 'Собственное производство',
      description: 'Производим эмульсионные взрывчатые вещества на собственных заводах в Забайкалье и Хабаровске.',
    },
    {
      icon: <Rocket size={28} />,
      title: 'Передовая техника',
      description: 'Современное оборудование для эффективного выполнения буровзрывных работ.',
    },
    {
      icon: <Bulb size={28} />,
      title: 'Инновационные решения',
      description: 'Постоянно разрабатываем и внедряем новые технологии в производство.',
    },
    {
      icon: <Layers size={28} />,
      title: 'Комплексный подход',
      description: 'Полный цикл услуг от проектирования до реализации буровзрывных работ.',
    },
    {
      icon: <Target size={28} />,
      title: 'Специальные взрывные работы',
      description: 'Выполняем специальные взрывные работы повышенной сложности в труднодоступных районах.',
    },
    {
      icon: <Settings size={28} />,
      title: 'Механический демонтаж',
      description: 'Осуществляем работы по механическому демонтажу объектов с соблюдением всех требований безопасности.',
    },
    {
      icon: <FileText size={28} />,
      title: 'Маркшейдерские работы',
      description: 'Проводим профессиональные маркшейдерские работы для обеспечения точности выполнения проектов.',
    },
  ];

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
        {services.map((service, index) => (
          <div key={index} className="glass-card p-6 rounded-xl animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: `${index * 50}ms` }}>
            <div className="mb-4 text-primary">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-muted-foreground mb-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
