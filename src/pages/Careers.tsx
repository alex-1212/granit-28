import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar, GraduationCap, DollarSign, Send, ChevronRight, UserCheck } from 'lucide-react';
import { vacanciesData } from '@/data/vacancies';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { useLanguage } from '@/i18n/LanguageContext';
import { Seo, breadcrumbSchema } from '@/components/common/Seo';

const Careers = () => {
  useAnimateOnScroll();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { t } = useLanguage();
  
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      <Seo
        path="/careers"
        title="Вакансии — работа вахтой на буровзрывных работах"
        description={`Вакансии ООО «Гранит»: ${vacanciesData.map(v => v.title).join(', ')}. Вахта на Дальнем Востоке и Крайнем Севере, официальное оформление по ТК РФ, проезд и проживание за счёт компании.`}
        keywords="вакансии буровзрывные работы, работа вахтой взрывник, машинист буровой установки вакансия, работа Якутия вахта, Дальний Восток работа"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Главная', path: '/' },
            { name: 'Вакансии', path: '/careers' },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              {t('careers.hero.title')}
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
              {t('careers.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title mb-6 animate-on-scroll">
              {t('careers.intro.title')}
            </h2>
            
            <p className="text-lg animate-on-scroll">
              {t('careers.intro.description')}
            </p>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card-primary rounded-xl p-6 text-center animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('careers.benefits.salary.title')}</h3>
              <p className="text-muted-foreground">
                {t('careers.benefits.salary.description')}
              </p>
            </div>
            
            <div className="glass-card-primary rounded-xl p-6 text-center animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('careers.benefits.social.title')}</h3>
              <p className="text-muted-foreground">
                {t('careers.benefits.social.description')}
              </p>
            </div>
            
            <div className="glass-card-primary rounded-xl p-6 text-center animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('careers.benefits.growth.title')}</h3>
              <p className="text-muted-foreground">
                {t('careers.benefits.growth.description')}
              </p>
            </div>
          </div>
          
          {/* Vacancies */}
          <h2 className="section-title text-center mb-8 animate-on-scroll">
            {t('careers.vacancies.title')}
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {vacanciesData.map((vacancy) => (
              <div 
                key={vacancy.id} 
                className="glass-card-solid rounded-xl overflow-hidden animate-on-scroll"
              >
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{t(`careers.vacancy.${vacancy.id}.title`)}</h3>
                      <div className="text-lg text-primary font-medium mt-1">{t(`careers.vacancy.${vacancy.id}.salary`)}</div>
                    </div>
                    
                    <button
                      onClick={() => toggleExpand(vacancy.id)}
                      className="btn-primary text-sm py-1.5 flex items-center gap-2"
                    >
                      {expandedId === vacancy.id ? t('careers.action.collapse') : t('careers.action.details')}
                      <ChevronRight size={16} />
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar size={16} className="text-primary" />
                      <span>{t(`careers.vacancy.${vacancy.id}.schedule`)}</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <GraduationCap size={16} className="text-primary" />
                      <span>{t(`careers.vacancy.${vacancy.id}.education`)}</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin size={16} className="text-primary" />
                      <span>{t(`careers.vacancy.${vacancy.id}.location`)}</span>
                    </div>
                  </div>
                  
                  {expandedId === vacancy.id && (
                    <div className="mt-6 space-y-6 animate-fade-in">
                      <div>
                        <h4 className="font-semibold mb-2">{t('careers.sections.requirements')}</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {vacancy.requirements.map((_req, index) => (
                            <li key={index}>{t(`careers.vacancy.${vacancy.id}.requirement.${index}`)}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">{t('careers.sections.responsibilities')}</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {vacancy.responsibilities.map((_resp, index) => (
                            <li key={index}>{t(`careers.vacancy.${vacancy.id}.responsibility.${index}`)}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">{t('careers.sections.conditions')}</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {vacancy.conditions.map((_cond, index) => (
                            <li key={index}>{t(`careers.vacancy.${vacancy.id}.condition.${index}`)}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4">
                        <a 
                          href="/contact" 
                          className="btn-primary inline-flex items-center gap-2"
                        >
                          {t('careers.apply.cta')}
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Send Resume */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6 animate-on-scroll">
              {t('careers.resume.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
              {t('careers.resume.description')}
            </p>
            
            <a 
              href="/contact" 
              className="btn-primary inline-flex items-center gap-2 animate-on-scroll"
            >
              {t('careers.resume.cta')}
              <Send size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
