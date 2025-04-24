
import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CTASection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-primary/5 dark:bg-primary/10 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-[0.07] bg-repeat bg-[length:30px_30px]"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title mb-6 animate-on-scroll">
            {t('cta.title')}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
            <Link to="/contact" className="btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <Send size={18} />
              {t('cta.contactButton')}
            </Link>
            
            <Link to="/products" className="btn-outline shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <Rocket size={18} />
              {t('cta.productsButton')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
