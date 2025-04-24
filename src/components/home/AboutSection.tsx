
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Map, Truck, Scroll, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  
  return <section className="py-20 overflow-hidden relative w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6 animate-on-scroll">
              {t('about.tagline')}
            </span>
            
            <h2 className="section-title mb-6 animate-on-scroll">
              {t('about.title')}
            </h2>
            
            <p className="text-muted-foreground mb-6 animate-on-scroll">
              {t('about.description')}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-zinc-100 my-[8px] py-0 mx-0 px-0 text-lg">{t('about.independence.title')}</h3>
                  <p className="text-muted-foreground">{t('about.independence.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Map className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 my-[8px] text-zinc-100 text-lg">{t('about.hardConditions.title')}</h3>
                  <p className="text-muted-foreground">{t('about.hardConditions.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 my-[8px] text-zinc-100 text-lg">{t('about.production.title')}</h3>
                  <p className="text-muted-foreground">{t('about.production.description')}</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="inline-flex btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <Info size={18} />
              {t('about.moreButton')}
              <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-2xl animate-on-scroll"></div>
            <div className="glass-card rounded-2xl overflow-hidden aspect-video relative animate-on-scroll">
              <img alt="О компании ООО Гранит" className="object-cover w-full h-full" src="/lovable-uploads/8cd4e9b3-ca81-4bad-9d50-3f4e61f8515b.jpg" />
            </div>
            
            <div className="absolute -bottom-8 -left-8 glass-card-accent rounded-xl p-4 max-w-[250px] animate-on-scroll">
              <div className="flex items-center gap-3 mb-2">
                <Scroll className="text-primary" size={40} />
                <h4 className="font-semibold">{t('about.licenses.title')}</h4>
              </div>
              <p className="text-sm text-inherit">{t('about.licenses.description')}</p>
              <Link to="/licenses" className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1 hover:underline">
                {t('about.licenses.link')}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default AboutSection;
