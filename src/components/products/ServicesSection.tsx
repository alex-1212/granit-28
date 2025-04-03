
import React from 'react';
import { 
  Pickaxe, Factory, Target, Settings, FileText, Bomb
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Pickaxe size={28} />,
      title: t('services.drilling.title'),
      description: t('services.drilling.description'),
    },
    {
      icon: <Bomb size={28} />,
      title: t('services.blasting.title'),
      description: t('services.blasting.description'),
    },
    {
      icon: <Target size={28} />,
      title: t('services.special.title'),
      description: t('services.special.description'),
    },
    {
      icon: <Settings size={28} />,
      title: t('services.mechanical.title'),
      description: t('services.mechanical.description'),
    },
    {
      icon: <FileText size={28} />,
      title: t('services.surveying.title'),
      description: t('services.surveying.description'),
    },
    {
      icon: <Factory size={28} />,
      title: t('services.production.title'),
      description: t('services.production.description'),
    },
  ];

  return (
    <div className="mb-20 animate-on-scroll">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
          {t('products.services.badge')}
        </span>
        
        <h2 className="section-title mb-6">
          {t('products.services.title')}
        </h2>
        
        <p className="text-lg mx-auto max-w-3xl">
          {t('products.services.description')}
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

