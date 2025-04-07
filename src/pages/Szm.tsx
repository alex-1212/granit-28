import React, { useEffect } from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Send, FileText, Truck, Settings, Factory, Shield, BarChart, Image, Layers } from 'lucide-react';
import { CTASection } from '@/components/products/CTASection';
const Szm = () => {
  useAnimateOnScroll();
  return <div className="w-full">
      <Helmet>
        <title>Смесительно-зарядные машины (СЗМ) и ПСЗУ — ООО «Гранит»</title>
        <meta name="description" content="Современные смесительно-зарядные машины (СЗМ) от НИПИГОРМАШ и передвижные смесительно-зарядные установки (ПСЗУ) собственной разработки для буровзрывных работ." />
      </Helmet>
      
      {/* Заголовок страницы */}
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Смесительно-зарядные машины (СЗМ) и ПСЗУ
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">Высокотехнологичное оборудование для ваших взрывных работ. Мобильность и надёжность в каждой экспедиции.</p>
          </div>
        </div>
      </section>
      
      {/* Основное содержание */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="prose dark:prose-invert max-w-none mb-16 animate-on-scroll">
            <p className="text-lg mb-8">ООО «Гранит» предлагает современные решения для буровзрывных работ (БВР) с использованием передовых технологий. В нашем распоряжении находятся смесительно-зарядные машины (СЗМ) и передвижные смесительно-зарядные установки (ПСЗУ) собственной разработки. Эти машины обеспечивают безопасность, высокую производительность и универсальность применения в любых условиях.</p>
            
            <hr className="my-12" />
            
            {/* Блок ПСЗУ */}
            <h2 className="section-title mb-8">Передвижные Смесительно-Зарядные Установки (ПСЗУ)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative animate-on-scroll">
                <div className="glass-card rounded-2xl overflow-hidden aspect-video">
                  <img src="https://granit-svg.ru/img-granit/galery-1.webp" alt="ПСЗУ" className="object-cover w-full h-full" />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
                  <p className="font-semibold">ПСЗУ</p>
                  <p className="text-sm text-inherit">Где другие останавливаются, наши установки только начинают</p>
                </div>
              </div>
              
              <div className="animate-on-scroll">
                <p className="text-lg mb-6">
                  Наши ПСЗУ — это мобильное решение для удалённых объектов.
                </p>
                
                <ul className="space-y-4 mb-8 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>В настоящее время в нашей компании задействовано шесть ПСЗУ, которые работают на полную мощность. Спрос на такую технику чрезвычайно высок.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Регионы работы: Амурская область, Камчатка, Приморье и другие регионы Дальнего Востока. Благодаря мобильности установок, они могут быть оперативно переброшены в любой регион России.</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4">Преимущества ПСЗУ:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
                  animationDelay: '0ms'
                }}>
                    <p className="font-semibold mb-2">Полная автономность работы</p>
                  </div>

                  <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
                  animationDelay: '50ms'
                }}>
                    <p className="font-semibold mb-2">Быстрая доставка и развертывание</p>
                  </div>

                  <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
                  animationDelay: '100ms'
                }}>
                    <p className="font-semibold mb-2">Эффективность в сложных условиях</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Блок производство СЗМ */}
            <h2 className="section-title mb-8">Производство Собственных Смесительно-Зарядных Машин (СЗМ)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1 animate-on-scroll">
                <p className="text-lg mb-6">
                  ООО «Гранит» запустило уникальный проект по производству собственных СЗМ, чтобы предложить рынку качественную и доступную альтернативу импортным аналогам.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Особенности проекта:</h3>
                <ul className="space-y-4 mb-8 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Производство осуществляется на машиностроительном заводе «Звезда» в Свердловской области, специализирующемся на выпуске горной техники.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Проект полностью разработан нашими специалистами, прошел апробацию и доказал свою техническую эффективность.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Мы планируем не только использовать эти машины для внутренних нужд, но и предлагать их сторонним заказчикам.</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4">Преимущества наших СЗМ:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
                  animationDelay: '0ms'
                }}>
                    <p className="font-semibold mb-2">Доступная цена</p>
                    
                  </div>

                  <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
                  animationDelay: '50ms'
                }}>
                    <p className="font-semibold mb-2">Короткие сроки поставки</p>
                    <p className="text-sm">Быстрое выполнение заказов</p>
                  </div>

                  <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
                  animationDelay: '100ms'
                }}>
                    <p className="font-semibold mb-2">Высокое качество</p>
                    <p className="text-sm">Соответствие стандартам безопасности</p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative animate-on-scroll">
                <div className="glass-card rounded-2xl overflow-hidden aspect-video">
                  <img src="https://granit-svg.ru/img-granit/products1.webp" alt="Производство СЗМ" className="object-cover w-full h-full" />
                </div>
                <div className="absolute -top-6 -left-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
                  <p className="font-semibold">СЗМ</p>
                  <p className="text-sm text-inherit">Безопасность, скорость, результат – всё в одной машине!</p>
                </div>
              </div>
            </div>
            
            {/* Блок преимуществ */}
            <h2 className="section-title mb-8">Преимущества нашей техники</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="glass-card p-6 rounded-xl animate-on-scroll">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Абсолютная безопасность</h3>
                </div>
                <p className="text-muted-foreground">Компоненты превращаются в готовое взрывчатое вещество (ВВ) непосредственно в процессе заряжания скважины, минимизируя риски при транспортировке и хранении.</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-on-scroll">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Универсальность применения</h3>
                </div>
                <p className="text-muted-foreground">Машины способны работать как с сухими, так и с обводнёнными скважинами, включая метод «под столб воды». Это особенно важно для открытых горных разработок.</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-on-scroll">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <BarChart className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Высокая производительность</h3>
                </div>
                <p className="text-muted-foreground">Например, модель СЗМ-16 обладает грузоподъёмностью до 16 тонн и производительностью заряжания до 300 кг/мин, что позволяет быстро выполнять масштабные задачи.</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-on-scroll">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Factory className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Автоматизация процессов</h3>
                </div>
                <p className="text-muted-foreground">Современные системы управления минимизируют ручной труд, повышая точность дозировки и скорость выполнения работ.</p>
              </div>
            </div>
            
            {/* Области применения - скопировано со страницы EVV */}
            <h2 className="section-title mb-8">Области применения</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="glass-card p-6 rounded-xl animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
              animationDelay: '0ms'
            }}>
                <div className="mb-4 text-primary">
                  <Image className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Открытые горные работы</h3>
                <p className="text-muted-foreground mb-4">
                  Оптимальное решение для масштабных карьерных разработок с возможностью мобильного перемещения между участками.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
              animationDelay: '100ms'
            }}>
                <div className="mb-4 text-primary">
                  <Layers className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Подземные горные выработки</h3>
                <p className="text-muted-foreground mb-4">
                  Специализированные решения для безопасного ведения взрывных работ в условиях ограниченного пространства.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
              animationDelay: '200ms'
            }}>
                <div className="mb-4 text-primary">
                  <BarChart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Гражданское строительство</h3>
                <p className="text-muted-foreground mb-4">
                  Эффективное проведение взрывных работ при строительстве дорог, туннелей и других инфраструктурных объектов.
                </p>
              </div>
            </div>
            
            <p className="text-lg mb-6">Наши машины используются для приготовления промышленных эмульсионных взрывчатых веществ (ВВ) и гранулитов непосредственно на объекте.</p>
            
            <ul className="space-y-4 mb-8 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>Преимущество:</strong> Готовые составы всегда свежие и стабильные, что гарантирует максимальную эффективность взрыва.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>Результат:</strong> Сокращение времени и затрат на подготовку, повышение качества буровзрывных работ.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Секция сотрудничества */}
      <section className="py-20 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-[0.07] bg-repeat bg-[length:30px_30px]"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6 animate-on-scroll">
              Сотрудничество с ООО «Гранит»
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
              ООО «Гранит» готово предложить вам индивидуальные решения для ваших задач. Мы гарантируем высокое качество продукции, оперативную доставку и профессиональную поддержку на всех этапах сотрудничества.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
              <Link to="/contact" className="inline-flex btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <Send size={18} />
                Связаться с нами
              </Link>
              
              <Link to="/licenses" className="inline-flex btn-outline shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <FileText size={18} />
                Наши лицензии
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Szm;