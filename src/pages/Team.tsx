
import React, { useEffect } from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { teamData } from '@/data/team';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';

const Team = () => {
  useAnimateOnScroll();
  
  useEffect(() => {
    document.title = 'Команда — ООО «Гранит»';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Наша команда
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
              Человек — ключевой ресурс развития. В ООО «Гранит» мы уверены: профессионализм и преданность сотрудников — основа нашего успеха.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg animate-on-scroll">
              Каждый член команды — эксперт в своей области, а их опыт и навыки позволяют компании удерживать лидерство в сложных условиях Дальнего Востока. Инвестиции в кадры, социальную защиту и корпоративные ценности — залог долгосрочного роста и стабильности.
            </p>
          </div>
          
          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamData.map((member, index) => (
              <div 
                key={member.id} 
                className="glass-card-solid rounded-xl overflow-hidden animate-on-scroll"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex gap-2">
                    <button 
                      className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                      aria-label={`Написать ${member.name}`}
                    >
                      <Mail size={16} />
                    </button>
                    
                    <button 
                      className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                      aria-label={`LinkedIn ${member.name}`}
                    >
                      <Linkedin size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12 animate-on-scroll">
            Профессионализм и опыт
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-4">Стаж и экспертиза</h3>
              <p className="text-muted-foreground">
                Ключевые специалисты имеют стаж от 10 лет в буровзрывных работах, геологоразведке и управлении техникой в экстремальных климатических условиях. Опыт работы в Забайкалье, Якутии, на Камчатке и других регионах с суровыми погодными условиями.
              </p>
            </div>
            
            <div className="glass-card p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-4">Работа с молодыми кадрами</h3>
              <p className="text-muted-foreground">
                Компания сотрудничает с вузами и колледжами, предоставляя студентам практику на производственных участках. Это позволяет будущим специалистам получить навыки в реальных проектах, таких как строительство БАМ-2 и газопровода «Сила Сибири-2».
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12 animate-on-scroll">
            Обучение и развитие
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="glass-card rounded-xl overflow-hidden">
                <img
                  src="/images/training.jpg"
                  alt="Обучение и развитие сотрудников"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6 animate-on-scroll">
              <div>
                <h3 className="text-xl font-semibold mb-3">Программы повышения квалификации</h3>
                <p className="text-muted-foreground">
                  Обучение работе с современным оборудованием, включая российские аналоги контроллеров «Овен» и уровнемеров «Титан». Регулярные тренинги по технике безопасности и новым технологиям бурения.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Наставничество</h3>
                <p className="text-muted-foreground">
                  Молодые сотрудники работают под руководством опытных наставников, что гарантирует преемственность знаний и снижает риски ошибок на объектах. Большое значение отводится обучению, стажировке и работе со студентами.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Сотрудничество с учебными заведениями</h3>
                <p className="text-muted-foreground">
                  Компания на постоянной основе сотрудничает с профильными высшими и средне-профессиональными учебными заведениями. В рамках этого сотрудничества студентам предоставляется возможность пройти производственную и преддипломную практику на производственных участках.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6 animate-on-scroll">
              Присоединяйтесь к нашей команде
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
              Мы всегда в поиске талантливых и преданных своему делу специалистов. Ознакомьтесь с текущими вакансиями и станьте частью нашей команды профессионалов.
            </p>
            
            <a 
              href="/careers" 
              className="btn-primary inline-block animate-on-scroll"
            >
              Смотреть вакансии
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
