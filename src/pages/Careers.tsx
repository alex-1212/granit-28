
import React, { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Calendar, GraduationCap, DollarSign } from 'lucide-react';
import { vacanciesData } from '@/data/vacancies';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';

const Careers = () => {
  useAnimateOnScroll();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  useEffect(() => {
    document.title = 'Вакансии — ООО «Гранит»';
  }, []);
  
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Вакансии
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
              Присоединяйтесь к команде профессионалов и развивайтесь вместе с нами
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title mb-6 animate-on-scroll">
              Работа в ООО «Гранит»
            </h2>
            
            <p className="text-lg animate-on-scroll">
              Мы предлагаем интересные задачи, конкурентную заработную плату и возможности для профессионального роста. Наши сотрудники работают на уникальных проектах в разных регионах Дальнего Востока, получая бесценный опыт и развивая свои навыки.
            </p>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card-primary rounded-xl p-6 text-center animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Конкурентная оплата</h3>
              <p className="text-muted-foreground">
                «Белая» заработная плата, соответствующая уровню квалификации и опыту работы
              </p>
            </div>
            
            <div className="glass-card-primary rounded-xl p-6 text-center animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Социальные гарантии</h3>
              <p className="text-muted-foreground">
                Полный социальный пакет, компенсация проезда, медкомиссии и санаторно-курортное лечение
              </p>
            </div>
            
            <div className="glass-card-primary rounded-xl p-6 text-center animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Профессиональный рост</h3>
              <p className="text-muted-foreground">
                Программы обучения, повышения квалификации и возможности для карьерного роста
              </p>
            </div>
          </div>
          
          {/* Vacancies */}
          <h2 className="section-title text-center mb-8 animate-on-scroll">
            Открытые вакансии
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
                      <h3 className="text-xl font-semibold">{vacancy.title}</h3>
                      <div className="text-lg text-primary font-medium mt-1">{vacancy.salary}</div>
                    </div>
                    
                    <button
                      onClick={() => toggleExpand(vacancy.id)}
                      className="btn-primary text-sm py-1.5"
                    >
                      {expandedId === vacancy.id ? 'Свернуть' : 'Подробнее'}
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar size={16} className="text-primary" />
                      <span>{vacancy.schedule}</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <GraduationCap size={16} className="text-primary" />
                      <span>{vacancy.education}</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin size={16} className="text-primary" />
                      <span>{vacancy.location}</span>
                    </div>
                  </div>
                  
                  {expandedId === vacancy.id && (
                    <div className="mt-6 space-y-6 animate-fade-in">
                      <div>
                        <h4 className="font-semibold mb-2">Требования:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {vacancy.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Обязанности:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {vacancy.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Условия:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {vacancy.conditions.map((cond, index) => (
                            <li key={index}>{cond}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4">
                        <a 
                          href="/contact" 
                          className="btn-primary inline-flex items-center gap-2"
                        >
                          Откликнуться на вакансию
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
              Не нашли подходящую вакансию?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
              Отправьте нам свое резюме, и мы свяжемся с вами, когда появится подходящая позиция
            </p>
            
            <a 
              href="/contact" 
              className="btn-primary inline-block animate-on-scroll"
            >
              Отправить резюме
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
