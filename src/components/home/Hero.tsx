
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden w-full">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-[0.15] dark:opacity-[0.07] bg-repeat bg-[length:100px_100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6 animate-fade-in">
              {t('hero.badge')}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in animate-delay-100">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg animate-fade-in animate-delay-200">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                {t('hero.contact')}
                <ChevronRight size={18} className="mt-0.5" />
              </Link>
              
              <Link to="/about" className="btn-outline">
                {t('hero.about')}
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
              <div className="relative glass-card rounded-2xl overflow-hidden aspect-[4/3] animate-float">
                <img src="https://granit-svg.ru/img-granit/hero1.webp" alt="Буровзрывные работы ООО Гранит" className="object-cover w-full h-full" loading="eager" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass-card-accent rounded-xl p-4 max-w-[200px] animate-fade-in animate-delay-400">
                <p className="font-semibold mb-1">{t('hero.experience')}</p>
                <p className="text-sm text-inherit">{t('hero.experienceDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
