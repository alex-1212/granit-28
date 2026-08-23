
import React from 'react';
import { Building, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const InnovationSection = () => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="order-2 lg:order-1 animate-on-scroll">
        <img 
          alt={t('about.innovation.image.alt')} 
          className="w-full rounded-2xl glass-card overflow-hidden" 
          src="/uploads/d12d2cee-c48a-46f8-bda1-e1176d299cdd.webp" 
        />
      </div>
      
      <div className="order-1 lg:order-2 animate-on-scroll">
        <h2 className="section-title mb-6">
          {t('about.innovation.title')}
        </h2>
        
        <div className="space-y-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
              <Building className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 my-[8px] text-zinc-100">
                {t('about.innovation.mobile.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('about.innovation.mobile.desc')}
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 my-[8px] text-zinc-100">
                {t('about.innovation.russian.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('about.innovation.russian.desc')}
              </p>
            </div>
          </div>
        </div>
        
        <Link to="/products" className="btn-primary inline-flex items-center gap-2">
          {t('about.innovation.cta')}
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default InnovationSection;
