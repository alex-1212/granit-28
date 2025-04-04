import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Building, Calendar, Factory, Mail, ShieldCheck, Users, UserPlus } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { Helmet } from 'react-helmet-async';
const About = () => {
  useAnimateOnScroll();
  const advantages = [{
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: '10+ лет',
    description: 'успешной практики в сфере буровзрывных работ'
  }, {
    icon: <Factory className="h-6 w-6 text-primary" />,
    title: '3 завода',
    description: 'в Забайкалье, Хабаровске и Якутии'
  }, {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: '150+ специалистов',
    description: 'высококвалифицированных сотрудников'
  }, {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: 'Безопасность',
    description: 'соответствие всем нормам и стандартам'
  }];
  return <div className="w-full">
      <Helmet>
        <title>О компании — ООО «Гранит»</title>
        <meta name="description" content="ООО «Гранит» — динамично развивающаяся компания с 10-летней историей в сфере буровзрывных работ. Собственное производство ЭВВ и уникальный опыт работы." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              О компании
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in animate-delay-100">Компания ООО «Гранит» зарекомендовала себя как стабильный и ответственный участник рынка буровзрывных работ. За годы активной деятельности она стала ключевым партнером для ряда компаний горнодобывающего сектора Дальнего Востока и Якутии, предлагая современные технологии и безупречный подход к выполнению задач.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
            {advantages.map((item, index) => <div key={index} className="glass-card rounded-xl p-6 text-center animate-fade-in" style={{
            animationDelay: `${(index + 2) * 100}ms`
          }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 mb-4">
                  {item.icon}
                </div>
                <h3 className="about-advantage-title mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="section-title mb-6 animate-on-scroll">
                Более 10 лет успешной практики в буровзрывных работах
              </h2>
              
              <p className="text-lg mb-6 animate-on-scroll">
                ООО «Гранит» — динамично развивающаяся компания, специализирующаяся на оказании услуг в сфере горнодобывающей промышленности. За десятилетнюю историю мы накопили уникальный опыт в реализации сложных проектов, разработке собственных технологий и производстве эмульсионных взрывчатых веществ (ЭВВ), что позволяет нам быть независимыми от внешних поставщиков.
              </p>
              
              <p className="text-muted-foreground mb-6 animate-on-scroll">
                Наша цель — стать лидером в производстве ЭВВ на Дальнем Востоке, минимизируя зависимость от импорта и предлагая клиентам комплексные решения «под ключ». ООО «Гранит» — это синтез опыта, инноваций и ответственности за результат.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 animate-on-scroll">
                <Link to="/team" className="btn-primary flex items-center gap-2">
                  Наша команда
                  <Users size={18} />
                </Link>
                
                <Link to="/careers" className="btn-outline">
                  Вакансии
                </Link>
              </div>
            </div>
            
            <div className="relative animate-on-scroll">
              <div className="glass-card rounded-2xl overflow-hidden aspect-[4/3]">
                <img src="https://granit-svg.ru/img-granit/about1.webp" alt="Производственный комплекс ООО Гранит" className="object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
                <p className="font-semibold">Собственное производство</p>
                <p className="text-sm text-inherit">Контроль качества на всех этапах</p>
              </div>
            </div>
          </div>
          
          {/* Production Facilities */}
          <h2 className="section-title text-center mb-12 animate-on-scroll">Производственные мощности</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
            <div className="glass-card-primary rounded-xl p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-3">Завод в Забайкалье</h3>
              <p className="text-muted-foreground mb-4">
                С 2024 года запущено производство компонентов ЭВВ мощностью 30 тыс. тонн/год, включая «холодную» эмульсию для экстремальных условий.
              </p>
            </div>
            
            <div className="glass-card-primary rounded-xl p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-3">Линия в Якутии</h3>
              <p className="text-muted-foreground mb-4">
                Выпуск эмульсионных патронов для заказчиков Дальнего Востока. Стратегическое расположение для минимизации логистических затрат.
              </p>
            </div>
            
            <div className="glass-card-primary rounded-xl p-6 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-3">Производство в Хабаровске</h3>
              <p className="text-muted-foreground mb-4">
                Патроны, сенсибилизированные микросферами (диаметры 32–90 мм), для автономного применения на удаленных объектах.
              </p>
            </div>
          </div>
          
          {/* Innovation and Technology */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <img src="https://granit-svg.ru/img-granit/szm1.webp" alt="Инновации и технологии" className="w-full rounded-2xl glass-card overflow-hidden" />
            </div>
            
            <div className="order-1 lg:order-2 animate-on-scroll">
              <h2 className="section-title mb-6">
                Инновации и технологии
              </h2>
              
              <div className="space-y-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 my-[8px] text-zinc-100">
                      Мобильные установки
                    </h3>
                    <p className="text-muted-foreground">
                      Внедрение мобильных смесительно-зарядных установок (ПСЗУ) для работы в удалённых районах, включая строительство БАМ-2 и газопровод Сила Сибири-2.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 my-[8px] text-zinc-100">
                      Российское оборудование
                    </h3>
                    <p className="text-muted-foreground">
                      Переход на российское оборудование: контроллеры «Овен», уровнемеры «Титан», расходомеры «Эмисс» обеспечивают независимость от импортных поставок.
                    </p>
                  </div>
                </div>
              </div>
              
              <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                Все технологии
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          {/* Environmental Responsibility */}
          <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 md:p-12 mb-20 animate-on-scroll">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title mb-6">
                Экологическая ответственность
              </h2>
              
              <p className="text-lg mb-8">
                Мы внедряем замкнутые циклы производства, минимизируя воздействие на окружающую среду и повышая эффективность использования ресурсов.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-glass dark:shadow-glass-dark border border-white/20 dark:border-white/10 rounded-xl p-6 text-left">
                  <h3 className="text-xl font-semibold mb-4">Переработка мешкотары</h3>
                  <p className="text-muted-foreground">
                    Переработка мешкотары в полиэтиленовые рукава для зарядки скважин и бытовые нужды, снижающая отходы и повторно использующая материалы.
                  </p>
                </div>
                
                <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-glass dark:shadow-glass-dark border border-white/20 dark:border-white/10 rounded-xl p-6 text-left">
                  <h3 className="text-xl font-semibold mb-4">Безопасное хранение</h3>
                  <p className="text-muted-foreground">
                    Собственные склады в Забайкалье, Хабаровске и на Камчатке для безопасного хранения продукции с соблюдением всех экологических норм.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team */}
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title mb-6">
              Стратегия развития
            </h2>
            
            <p className="text-lg mb-8 max-w-3xl mx-auto">
Наша цель — стать лидером в производстве ЭВВ на Дальнем Востоке, минимизируя зависимость от импорта и предлагая клиентам комплексные решения «под ключ».
            </p>
          <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
              <Link to="/contact" className="btn-primary">
                <Mail size={18} />
                Связаться с нами
              </Link>
              
              <Link to="/careers" className="btn-outline">
                <UserPlus size={18} />
                Присоединиться к команде
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;