import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { faqData } from '@/data/faq';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { useLanguage } from '@/i18n/LanguageContext';
import { Seo, breadcrumbSchema } from '@/components/common/Seo';
const FAQ = () => {
  useAnimateOnScroll();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <div className="w-full">
      <Seo
        path="/faq"
        title="Частые вопросы о буровзрывных работах и ЭВВ"
        description="Ответы на частые вопросы: вахтовый метод работы, техника для условий Крайнего Севера, безопасность взрывных работ, производство ЭВВ и карьера в ООО «Гранит»."
        keywords="вопросы буровзрывные работы, как работает вахта, безопасность взрывных работ, ЭВВ вопросы"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Главная', path: '/' },
            { name: 'Вопросы и ответы', path: '/faq' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map((item, index) => ({
              '@type': 'Question',
              name: t(`faq.item.${index}.question`),
              acceptedAnswer: {
                '@type': 'Answer',
                text: t(`faq.item.${index}.answer`),
              },
            })),
          },
        ]}
      />
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              {t('faq.hero.title')}
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">{t('faq.hero.subtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* FAQ Accordion */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqData.map((item, index) => <div key={index} className="rounded-xl glass-card-solid animate-on-scroll">
                  <button onClick={() => toggleAccordion(index)} className="w-full text-left px-6 py-5 flex justify-between items-center" aria-expanded={openIndex === index} aria-controls={`faq-content-${index}`}>
                    <h3 className="text-lg font-semibold">{t(`faq.item.${index}.question`)}</h3>
                    <ChevronDown className={`h-5 w-5 text-primary transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`} />
                  </button>
                  
                  <div id={`faq-content-${index}`} className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-5 text-muted-foreground">
                      <div className="pt-1 border-t border-border"></div>
                      <p className="pt-4">{t(`faq.item.${index}.answer`)}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Info */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6 animate-on-scroll">
              {t('faq.contact.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
              {t('faq.contact.description')}
            </p>
            
            <a href="/contact" className="btn-primary inline-flex shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <MessageCircle size={18} />
              {t('faq.contact.cta')}
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default FAQ;