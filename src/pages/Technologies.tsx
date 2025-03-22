
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Factory, Settings, BarChart, Shield, FileText } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';

const Technologies = () => {
  useAnimateOnScroll();
  
  useEffect(() => {
    document.title = 'Техника и технологии — ООО «Гранит»';
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
              Техника и технологии
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
              Современное оборудование и инновационные технологии для качественного выполнения буровзрывных работ
            </p>
          </div>
        </div>
      </section>
      
      {/* ЭВВ Production */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-on-scroll">
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
                Собственное производство
              </span>
              
              <h2 className="section-title mb-6">
                Эмульсионные взрывчатые вещества (ЭВВ)
              </h2>
              
              <p className="text-lg mb-6">
                ООО «Гранит» производит высококачественные эмульсионные взрывчатые вещества на собственных заводах в Забайкалье и Хабаровске, а также на линии в Якутии.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Безопасность</h3>
                    <p className="text-muted-foreground">ЭВВ обладают высокой степенью безопасности при транспортировке и хранении.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <BarChart size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Высокая эффективность</h3>
                    <p className="text-muted-foreground">Обеспечивают оптимальные параметры взрыва и дробления породы.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Экологичность</h3>
                    <p className="text-muted-foreground">Минимальное количество токсичных газов при детонации.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/gallery" className="btn-primary inline-flex items-center gap-2">
                Смотреть галерею
                <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="relative animate-on-scroll">
              <div className="glass-card rounded-2xl overflow-hidden aspect-video">
                <img
                  src="/images/evv-production.jpg"
                  alt="Производство ЭВВ"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
                <p className="font-semibold">30 тыс. тонн/год</p>
                <p className="text-sm text-muted-foreground">мощность производства в Забайкалье</p>
              </div>
            </div>
          </div>
          
          {/* Equipment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 relative animate-on-scroll">
              <div className="glass-card rounded-2xl overflow-hidden aspect-video">
                <img
                  src="/images/equipment.jpg"
                  alt="Смесительно-зарядные машины"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
                <p className="font-semibold">Высокая мобильность</p>
                <p className="text-sm text-muted-foreground">работа в любых климатических условиях</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-on-scroll">
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
                Передовая техника
              </span>
              
              <h2 className="section-title mb-6">
                Смесительно-зарядные машины
              </h2>
              
              <p className="text-lg mb-6">
                В нашем распоряжении современные смесительно-зарядные машины (СЗМ) от НИПИГОРМАШ и мобильные установки ПСЗУ для удалённых объектов.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <Truck size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Мобильность</h3>
                    <p className="text-muted-foreground">Возможность производить ЭВВ непосредственно на месте проведения работ.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <Settings size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Гибкость настройки</h3>
                    <p className="text-muted-foreground">Точная настройка состава ЭВВ под конкретные геологические условия.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <Factory size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Автономность</h3>
                    <p className="text-muted-foreground">Полная независимость от внешней инфраструктуры при работе на удаленных объектах.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/gallery" className="btn-primary inline-flex items-center gap-2">
                Смотреть галерею
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          {/* Auxiliary Equipment */}
          <h2 className="section-title text-center mb-12 animate-on-scroll">Вспомогательная техника</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-on-scroll">
            <div className="glass-card-primary rounded-xl overflow-hidden">
              <div className="aspect-video">
                <img
                  src="/images/bulldozer.jpg"
                  alt="Бульдозеры SHANTUI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Бульдозеры SHANTUI</h3>
                <p className="text-muted-foreground mb-4">
                  Мощные бульдозеры с двигателем Cummins (360 л.с.) для работы в сложных условиях и подготовки площадок для буровых работ.
                </p>
              </div>
            </div>
            
            <div className="glass-card-primary rounded-xl overflow-hidden">
              <div className="aspect-video">
                <img
                  src="/images/vezdehod.jpg"
                  alt="Вездеходы ТРЭКОЛ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Вездеходы ТРЭКОЛ</h3>
                <p className="text-muted-foreground mb-4">
                  Вездеходы ТРЭКОЛ 39294 с бескамерными шинами для работы в среднегорье и транспортировки персонала в труднодоступные районы.
                </p>
              </div>
            </div>
            
            <div className="glass-card-primary rounded-xl overflow-hidden">
              <div className="aspect-video">
                <img
                  src="/images/trucks.jpg"
                  alt="Грузовые автомобили"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Грузовые автомобили</h3>
                <p className="text-muted-foreground mb-4">
                  Грузовые автомобили повышенной проходимости УРАЛ, ГАЗ, КАМАЗ для доставки оборудования, материалов и персонала на объекты.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies and Innovations */}
      <section className="py-20 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-[0.07] bg-repeat bg-[length:30px_30px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title mb-6 animate-on-scroll">
              Инновации и технологии
            </h2>
            
            <p className="text-lg animate-on-scroll">
              Мы постоянно внедряем новые технологии и инновационные решения для повышения эффективности и безопасности буровзрывных работ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Цифровые технологии</h3>
              <p className="text-muted-foreground mb-6">
                Внедрение систем 3D-моделирования для проектирования взрывных работ и контроля их результатов. Использование современного программного обеспечения для расчета параметров взрыва с учетом геологических особенностей участка.
              </p>
              <img
                src="/images/digital-tech.jpg"
                alt="Цифровые технологии"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Экологичные решения</h3>
              <p className="text-muted-foreground mb-6">
                Разработка и применение технологий, минимизирующих воздействие на окружающую среду. Внедрение замкнутых циклов производства и переработка отходов для повторного использования.
              </p>
              <img
                src="/images/eco-solutions.jpg"
                alt="Экологичные решения"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="mt-16 text-center animate-on-scroll">
            <Link to="/gallery" className="btn-primary inline-flex items-center gap-2">
              Смотреть галерею технологий
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6 animate-on-scroll">
              Готовы к сотрудничеству?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
              Наши специалисты готовы ответить на все ваши вопросы и предложить оптимальное решение для вашего проекта
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
              <Link to="/contact" className="btn-primary">
                Связаться с нами
              </Link>
              
              <Link to="/licenses" className="btn-outline">
                Наши лицензии
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
