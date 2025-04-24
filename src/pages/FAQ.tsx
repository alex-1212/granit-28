
import React, { useEffect } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { useLanguage } from '@/context/LanguageContext';
import { useFaqData } from '@/data/faq';

const FAQ = () => {
  useAnimateOnScroll();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const { t } = useLanguage();
  const faqData = useFaqData();
  
  useEffect(() => {
    document.title = 'Часто задаваемые вопросы — ООО «Гранит»';
  }, []);
  
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              {t('faq.title')}
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
              {t('faq.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Accordion */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div 
                  key={index} 
                  className="rounded-xl glass-card-solid animate-on-scroll"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <h3 className="text-lg font-semibold">{item.questionKey}</h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-primary transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <div 
                    id={`faq-content-${index}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5 text-muted-foreground">
                      <div className="pt-1 border-t border-border"></div>
                      <p className="pt-4">{item.answerKey}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Info */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6 animate-on-scroll">
              {t('faq.notFound')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
              {t('faq.contactUs')}
            </p>
            
            <a 
              href="/contact" 
              className="btn-primary inline-flex shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle size={18} />
              {t('faq.contactButton')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
