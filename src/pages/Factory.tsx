import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { ArrowRight, RecycleIcon, Truck, Factory as FactoryIcon, Package, ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { CTASection } from '@/components/products/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const Factory = () => {
  useAnimateOnScroll();
  return <div className="w-full">
      <Helmet>
        <title>Завод по производству ВВ и линия патронирования — ООО «Гранит»</title>
        <meta name="description" content="ООО «Гранит» — ведущий производитель взрывчатых материалов полного цикла. Наше предприятие объединяет высокотехнологичный завод по выпуску компонентов эмульсионных взрывчатых веществ (ЭВВ) и мобильную линию патронирования." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Завод по производству ВВ и линия патронирования
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">Полный технологический цикл от производства компонентов до готовых эмульсионных боевиков.</p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-on-scroll">
              <p className="text-lg mb-8">
                ООО «Гранит» — ведущий производитель взрывчатых материалов полного цикла. Наше предприятие объединяет высокотехнологичный завод по выпуску компонентов эмульсионных взрывчатых веществ (ЭВВ) и мобильную линию патронирования, что позволяет предлагать клиентам комплексные решения «под ключ».
              </p>
            </div>
            
            <div className="relative animate-on-scroll">
              <div className="glass-card rounded-2xl overflow-hidden aspect-video">
                <img alt="Завод по производству ВВ" className="object-cover w-full h-full" src="/lovable-uploads/cfa9afc0-31d9-4b6a-804f-fb3c470c17ac.jpg" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
                <p className="font-semibold">ООО «Гранит»</p>
                <p className="text-sm text-inherit">передовые технологии и экологичность производства</p>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="section-title mb-10">Производственные мощности: от компонентов до готовой продукции</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-primary/5 border-primary/10 animate-on-scroll">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mb-4">
                    <FactoryIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Завод по производству ЭВВ</h3>
                  <p className="mb-4">Мы выпускаем компоненты эмульсионных взрывчатых веществ (ЭВВ), обеспечивая полный цикл производства:</p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <RecycleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Собственная переработка отходов:</strong> полиэтиленовый рукав для патронирования изготавливается из вторичного сырья, что снижает себестоимость и минимизирует экологический след.</span>
                    </li>
                    <li className="flex gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Контроль качества:</strong> все этапы — от смешивания компонентов до упаковки — проходят строгую проверку.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/5 border-primary/10 animate-on-scroll" style={{
              animationDelay: "200ms"
            }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mb-4">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Мобильная линия патронирования ММП-1000</h3>
                  <p className="mb-4">Линия предназначена для:</p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Приёма, подготовки и смешивания компонентов ЭВВ.</span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Патронирования в полимерную оболочку (диаметры 32 мм и 60 мм).</span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Работы в удалённых регионах благодаря мобильности модуля.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mb-20 animate-on-scroll">
            <h2 className="section-title mb-10">Инфраструктура и логистика: скорость и безопасность</h2>
            
            <p className="text-lg mb-6">Стратегически расположенные склады:</p>
            
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Забайкальский склад с железнодорожным тупиком
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Вместимость — до 500 тонн ВМ.</span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Интеграция с Транссибирской магистралью для быстрой доставки.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Советская Гавань (Хабаровский край)
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Расположение в портовой зоне обеспечивает морские перевозки.</span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Новая линия патронирования запущена в 2024 году.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Камчатский склад
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Асфальтированный подъезд, удалённость от жилых зон.</span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Всего 70 км до морского порта — идеально для экспорта.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="bg-primary/5 p-6 rounded-lg mb-8 animate-on-scroll">
              <h3 className="font-semibold mb-4 text-xl">Преимущества расположения:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Заводы и склады находятся в непосредственной близости, что исключает простои и снижает риски.</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Собственная логистическая сеть позволяет оперативно доставлять продукцию в любую точку РФ и за рубеж.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-20 animate-on-scroll">
            <h2 className="section-title mb-6">Экологическая ответственность</h2>
            
            <p className="text-lg mb-6">Мы внедряем принципы устойчивого развития:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-lg flex items-start gap-4">
                <RecycleIcon className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Переработка отходов</h3>
                  <p className="text-zinc-200">Перерабатываем производственные отходы в сырьё для полиэтиленовых рукавов.</p>
                </div>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg flex items-start gap-4">
                <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Безопасность превыше всего</h3>
                  <p className="text-zinc-200">Соблюдаем строгие стандарты безопасности при хранении и транспортировке ВМ.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="section-title mb-10">Почему клиенты выбирают ООО «Гранит»?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="bg-primary/5 border-primary/10 animate-on-scroll">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Полный цикл под ключ</h3>
                  <p className="text-muted-foreground">От производства компонентов до готовых эмульсионных боевиков.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/5 border-primary/10 animate-on-scroll" style={{
              animationDelay: "100ms"
            }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Гибкость</h3>
                  <p className="text-muted-foreground">Мобильная линия ММП-1000 работает даже в труднодоступных регионах.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/5 border-primary/10 animate-on-scroll" style={{
              animationDelay: "200ms"
            }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Снижение издержек</h3>
                  <p className="text-muted-foreground">Использование вторсырья и оптимизация логистики.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/5 border-primary/10 animate-on-scroll" style={{
              animationDelay: "300ms"
            }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Надёжность</h3>
                  <p className="text-muted-foreground">Склады в ключевых транспортных узлах (ж/д, море, автотрассы).</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Collaboration Section */}
      <section className="py-20 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-[0.07] bg-repeat bg-[length:30px_30px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6 animate-on-scroll">
              Сотрудничество с ООО «Гранит»
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
              Наши специалисты готовы обеспечить полный комплекс услуг по производству и поставке взрывчатых материалов для вашего предприятия
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
              <Link to="/contact" className="inline-flex btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Связаться с нами
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Factory;