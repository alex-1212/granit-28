import React from 'react';
import { Link } from 'react-router-dom';
import { Info, Users, Award, Rocket } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-on-scroll">
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
              Опыт и профессионализм
            </span>
            
            <h2 className="section-title mb-6">
              Глубокая компетенция в сфере буровзрывных технологий и производства взрывчатых веществ
            </h2>
            
            <p className="text-lg mb-8">
              ООО «Гранит» — динамично развивающаяся компания по производству буровзрывных работ, выполняющая полный цикл услуг на объектах Дальневосточного федерального округа с 2013 года.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 my-[8px] text-zinc-100 text-lg">Команда профессионалов</h3>
                  <p className="text-muted-foreground">Высококвалифицированные специалисты с многолетним опытом работы.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 my-[8px] text-zinc-100 text-lg">Современные технологии</h3>
                  <p className="text-muted-foreground">Использование передовых технологий и оборудования для достижения оптимальных результатов.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 my-[8px] text-zinc-100 text-lg">Индивидуальный подход</h3>
                  <p className="text-muted-foreground">Разработка решений, учитывающих особенности каждого проекта.</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="inline-flex btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <Info size={18} />
              Подробнее о компании
            </Link>
          </div>
          
          <div className="relative animate-on-scroll">
            <div className="glass-card rounded-2xl overflow-hidden aspect-video">
              <img src="https://granit-svg.ru/img-granit/about1.webp" alt="О компании ООО Гранит" className="object-cover w-full h-full" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
              <h4 className="about-advantage-title">Собственное производство ЭВВ</h4>
              <p className="text-sm text-inherit">Гарантия качества и контроль на каждом этапе</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card-primary rounded-xl p-6 text-center animate-on-scroll">
            <h3 className="text-3xl font-semibold mb-2">10+</h3>
            <p className="text-muted-foreground">лет успешной работы</p>
          </div>
          
          <div className="glass-card-primary rounded-xl p-6 text-center animate-on-scroll animate-delay-100">
            <h3 className="text-3xl font-semibold mb-2">50+</h3>
            <p className="text-muted-foreground">реализованных проектов</p>
          </div>
          
          <div className="glass-card-primary rounded-xl p-6 text-center animate-on-scroll animate-delay-200">
            <h3 className="text-3xl font-semibold mb-2">3</h3>
            <p className="text-muted-foreground">производственные площадки</p>
          </div>
          
          <div className="glass-card-primary rounded-xl p-6 text-center animate-on-scroll animate-delay-300">
            <h3 className="text-3xl font-semibold mb-2">300+</h3>
            <p className="text-muted-foreground">сотрудников в штате</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
