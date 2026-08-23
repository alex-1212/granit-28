
import React from 'react';
import { 
  Pickaxe, Factory, Target, Settings, FileText, Bomb
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const ServicesSection = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: <Pickaxe size={28} />,
      title: t('products.ui.services.0.title'),
      description: t('products.ui.services.0.description'),
    },
    {
      icon: <Bomb size={28} />,
      title: t('products.ui.services.1.title'),
      description: t('products.ui.services.1.description'),
    },
    {
      icon: <Target size={28} />,
      title: t('products.ui.services.2.title'),
      description: t('products.ui.services.2.description'),
    },
    {
      icon: <Settings size={28} />,
      title: t('products.ui.services.3.title'),
      description: t('products.ui.services.3.description'),
    },
    {
      icon: <FileText size={28} />,
      title: t('products.ui.services.4.title'),
      description: t('products.ui.services.4.description'),
    },
    {
      icon: <Factory size={28} />,
      title: t('products.ui.services.5.title'),
      description: t('products.ui.services.5.description'),
    },
  ];

  return (
    <div className="mb-20 animate-on-scroll">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
          {t('products.ui.services.badge')}
        </span>
        
        <h2 className="section-title mb-6">
          {t('products.ui.services.title')}
        </h2>
        
        <p className="text-lg mx-auto max-w-3xl">
          {t('products.ui.services.subtitle')}
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
