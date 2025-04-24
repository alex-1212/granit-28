
import React from 'react';
import { 
  Pickaxe, Factory, Target, Settings, FileText, Bomb
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const ServicesSection = () => {
  const { t } = useLanguage();
  
  const icons = [
    <Pickaxe size={28} />,
    <Bomb size={28} />,
    <Target size={28} />,
    <Settings size={28} />,
    <FileText size={28} />,
    <Factory size={28} />
  ];
  
  const serviceItems = t('services.items');
  
  return (
    <div className="mb-20 animate-on-scroll">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
          {t('products.servicesSection.tagline')}
        </span>
        
        <h2 className="section-title mb-6">
          {t('products.servicesSection.title')}
        </h2>
        
        <p className="text-lg mx-auto max-w-3xl">
          {t('products.servicesSection.description')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(serviceItems) && serviceItems.map((service, index) => (
          <div key={index} className="glass-card p-6 rounded-xl animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: `${index * 50}ms` }}>
            <div className="mb-4 text-primary">
              {icons[index]}
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
