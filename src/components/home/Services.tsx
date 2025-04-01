
import React from 'react';
import { 
  Shield, Truck, Factory, FileText, Users, Settings, 
  Drill, Hammer, Wrench, Pickaxe, Shovel, Construction,
  Building, Compass, Mountain, Package, Map, Earth, Landmark, Target
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="glass-card-primary rounded-xl p-6 animate-on-scroll"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Pickaxe size={24} />,
      title: 'Буровые работы',
      description: 'Производим буровые работы с использованием современного оборудования в любых климатических условиях.',
    },
    {
      icon: <Factory size={24} />,
      title: 'Взрывные работы',
      description: 'Выполняем взрывные работы с применением ЭВВ собственного производства на различных объектах.',
    },
    {
      icon: <Target size={24} />,
      title: 'Специальные взрывные работы',
      description: 'Выполняем специальные взрывные работы повышенной сложности в труднодоступных районах.',
    },
    {
      icon: <Settings size={24} />,
      title: 'Механический демонтаж',
      description: 'Осуществляем работы по механическому демонтажу объектов с соблюдением всех требований безопасности.',
    },
    {
      icon: <FileText size={24} />,
      title: 'Маркшейдерские работы',
      description: 'Проводим профессиональные маркшейдерские работы для обеспечения точности выполнения проектов.',
    },
    {
      icon: <Factory size={24} />,
      title: 'Производство ЭВВ',
      description: 'Производим эмульсионные взрывчатые вещества на собственных заводах в Забайкалье и Хабаровске.',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/30 dark:to-primary/5 -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">Наши услуги</h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            Мы предлагаем полный спектр услуг в сфере буровзрывных работ, от разработки проекта до его реализации в самых сложных климатических условиях.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
