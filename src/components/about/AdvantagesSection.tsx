
import React from 'react';
import { Calendar, Factory, Users, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const AdvantagesSection = () => {
  const { t } = useLanguage();
  
  const advantages = [{
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: t('about.advantages.experience'),
    description: t('about.advantages.experienceText')
  }, {
    icon: <Factory className="h-6 w-6 text-primary" />,
    title: t('about.advantages.factories'),
    description: t('about.advantages.factoriesText')
  }, {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: t('about.advantages.specialists'),
    description: t('about.advantages.specialistsText')
  }, {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: t('about.advantages.safety'),
    description: t('about.advantages.safetyText')
  }];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
      {advantages.map((item, index) => (
        <div 
          key={index} 
          className="glass-card rounded-xl p-6 text-center animate-fade-in" 
          style={{ animationDelay: `${(index + 2) * 100}ms` }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 mb-4">
            {item.icon}
          </div>
          <h3 className="about-advantage-title mb-2">{item.title}</h3>
          <p className="text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AdvantagesSection;
