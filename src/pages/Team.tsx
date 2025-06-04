
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { GraduationCap, Users, School, UserCheck } from 'lucide-react';
import { TeamMeta } from '@/components/meta/TeamMeta';

const Team = () => {
  useAnimateOnScroll();
  
  useEffect(() => {
    document.title = 'Команда — ООО «Гранит»';
  }, []);

  return (
    <div className="w-full">
      <TeamMeta />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Наша команда
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in animate-delay-100">
              Профессионалы с многолетним опытом в сфере буровзрывных работ, объединенные общей целью — развитием горнодобывающей промышленности Дальнего Востока.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Culture */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-title mb-6">Корпоративная культура</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              В ООО «Гранит» мы ценим профессионализм, инициативность и стремление к развитию. Наша команда — это основа успеха компании.
            </p>
          </div>
          
          {/* Development Programs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 text-center animate-on-scroll">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Программы повышения квалификации</h3>
              <p className="text-muted-foreground">
                Регулярное обучение современным технологиям и методам в области буровзрывных работ.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center animate-on-scroll">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Наставничество</h3>
              <p className="text-muted-foreground">
                Система наставничества для новых сотрудников и передача опыта между поколениями специалистов.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center animate-on-scroll">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <School className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Сотрудничество с учебными заведениями</h3>
              <p className="text-muted-foreground">
                Партнерство с ведущими техническими университетами для подготовки кадров.
              </p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center animate-on-scroll">
            <h2 className="section-title mb-6">Присоединяйтесь к нашей команде</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Мы всегда рады видеть в нашей команде амбициозных и талантливых специалистов, готовых внести свой вклад в развитие компании.
            </p>
            
            <Link to="/careers" className="btn-primary flex items-center gap-2 mx-auto w-fit">
              <UserCheck size={18} />
              Смотреть вакансии
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
