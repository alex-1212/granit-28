import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { ArrowRight, RecycleIcon, Truck, Factory as FactoryIcon, Package, ShieldCheck } from 'lucide-react';
import { CTASection } from '@/components/products/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import { Seo, breadcrumbSchema } from '@/components/common/Seo';
const Factory = () => {
  useAnimateOnScroll();
  const { lang, t } = useLanguage();
  return <div className="w-full">
      <Seo
        path="/factory"
        title={
          lang === 'zh'
            ? '炸药生产工厂与卷装机生产线 — «ГРАНИТ»有限责任公司'
            : 'Завод по производству ЭВВ и линия патронирования — ООО «Гранит»'
        }
        description={
          lang === 'zh'
            ? '«ГРАНИТ»有限责任公司是全流程爆炸材料领域的领先制造商。我们的企业集高科技乳化炸药（ЭВВ）组分生产工厂与移动式卷装机生产线于一体。'
            : 'Завод ООО «Гранит» — производство взрывчатых материалов полного цикла: выпуск компонентов эмульсионных ВВ и мобильная линия патронирования. Собственное производство в Якутии.'
        }
        keywords="завод взрывчатых веществ, производство ЭВВ, линия патронирования, эмульсионная матрица, взрывчатые материалы Якутия"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Главная', path: '/' },
            { name: 'Завод', path: '/factory' },
          ]),
        ]}
      />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              {t('factory.h1')}
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">{t('factory.p1')}</p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-on-scroll">
              <p className="text-lg mb-8">
                {t('factory.p2')}
              </p>
            </div>
            
            <div className="relative animate-on-scroll">
              <div className="glass-card rounded-2xl overflow-hidden aspect-video">
                <img alt={t('factory.image.alt')} className="object-cover w-full h-full" src="/uploads/efa32f80-5cad-436f-b210-450577a74ba4.webp" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
                <p className="font-semibold">{t('factory.image.caption.title')}</p>
                <p className="text-sm text-inherit">{t('factory.image.caption.text')}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="section-title mb-10">{t('factory.capacity.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-primary/5 border-primary/10 animate-on-scroll">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mb-4">
                    <FactoryIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{t('factory.capacity.plant.title')}</h3>
                  <p className="mb-4">{t('factory.capacity.plant.p1')}</p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <RecycleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>{t('factory.capacity.plant.waste.label')}</strong> {t('factory.capacity.plant.waste.text')}</span>
                    </li>
                    <li className="flex gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>{t('factory.capacity.plant.quality.label')}</strong> {t('factory.capacity.plant.quality.text')}</span>
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
                  <h3 className="text-xl font-semibold mb-4">{t('factory.capacity.line.title')}</h3>
                  <p className="mb-4">{t('factory.capacity.line.p1')}</p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t('factory.capacity.line.item1')}</span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t('factory.capacity.line.item2')}</span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t('factory.capacity.line.item3')}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mb-20 animate-on-scroll">
            <h2 className="section-title mb-10">{t('factory.logistics.title')}</h2>
            
            <p className="text-lg mb-6">{t('factory.logistics.warehouses.p1')}</p>
            
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {t('factory.logistics.zabaikal.title')}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t('factory.logistics.zabaikal.item1')}</span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t('factory.logistics.zabaikal.item2')}</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {t('factory.logistics.sovgavan.title')}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t('factory.logistics.sovgavan.item1')}</span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t('factory.logistics.sovgavan.item2')}</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {t('factory.logistics.kamchatka.title')}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t('factory.logistics.kamchatka.item1')}</span>
                    </li>
                    <li className="flex gap-2">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t('factory.logistics.kamchatka.item2')}</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="bg-primary/5 p-6 rounded-lg mb-8 animate-on-scroll">
              <h3 className="font-semibold mb-4 text-xl">{t('factory.logistics.advantages.title')}</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{t('factory.logistics.advantages.item1')}</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{t('factory.logistics.advantages.item2')}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-20 animate-on-scroll">
            <h2 className="section-title mb-6">{t('factory.ecology.title')}</h2>
            
            <p className="text-lg mb-6">{t('factory.ecology.p1')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-lg flex items-start gap-4">
                <RecycleIcon className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{t('factory.ecology.recycle.title')}</h3>
                  <p className="text-muted-foreground">{t('factory.ecology.recycle.description')}</p>
                </div>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg flex items-start gap-4">
                <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{t('factory.ecology.safety.title')}</h3>
                  <p className="text-muted-foreground">{t('factory.ecology.safety.description')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="section-title mb-10">{t('factory.why.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="bg-primary/5 border-primary/10 animate-on-scroll">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold">{t('factory.why.turnkey.title')}</h3>
                  <p className="text-muted-foreground">{t('factory.why.turnkey.description')}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/5 border-primary/10 animate-on-scroll" style={{
              animationDelay: "100ms"
            }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-xl">{t('factory.why.flexibility.title')}</h3>
                  <p className="text-muted-foreground">{t('factory.why.flexibility.description')}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/5 border-primary/10 animate-on-scroll" style={{
              animationDelay: "200ms"
            }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-xl">{t('factory.why.costs.title')}</h3>
                  <p className="text-muted-foreground">{t('factory.why.costs.description')}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/5 border-primary/10 animate-on-scroll" style={{
              animationDelay: "300ms"
            }}>
                <CardContent className="p-6">
                  <h3 className="mb-3 font-semibold text-xl">{t('factory.why.reliability.title')}</h3>
                  <p className="text-muted-foreground">{t('factory.why.reliability.description')}</p>
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
              {t('factory.cooperation.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
              {t('factory.cooperation.description')}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
              <Link to="/contact" className="inline-flex btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                {t('factory.cooperation.contact')}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Factory;
