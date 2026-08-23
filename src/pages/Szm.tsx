import React from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Send, FileText, Truck, Settings, Factory, Shield, BarChart, Image, Layers } from 'lucide-react';
import { CTASection } from '@/components/products/CTASection';
import { useLanguage } from '@/i18n/LanguageContext';
import { Seo, breadcrumbSchema } from '@/components/common/Seo';
const Szm = () => {
  useAnimateOnScroll();
  const { lang, t } = useLanguage();
  return <div className="w-full">
      <Seo
        path="/szm"
        title={
          lang === 'zh'
            ? '混装车（СЗМ）与移动式混装装置（ПСЗУ）— «ГРАНИТ»有限责任公司'
            : 'Смесительно-зарядные машины (СЗМ) и установки ПСЗУ — ООО «Гранит»'
        }
        description={
          lang === 'zh'
            ? '«ГРАНИТ»有限责任公司提供НИПИГОРМАШ生产的现代混装车（СЗМ）以及自主研发的移动式混装装置（ПСЗУ），专为钻孔爆破工程服务。'
            : 'Смесительно-зарядные машины (СЗМ) НИПИГОРМАШ и передвижные смесительно-зарядные установки (ПСЗУ) собственной разработки для буровзрывных работ в полевых условиях. Производительность до 300 кг/мин.'
        }
        keywords="СЗМ, ПСЗУ, смесительно-зарядная машина, передвижная зарядная установка, техника для БВР, зарядка скважин"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Главная', path: '/' },
            { name: 'СЗМ и ПСЗУ', path: '/szm' },
          ]),
        ]}
      />
      
      {/* Заголовок страницы */}
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              {t('szm.hero.title')}
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">{t('szm.hero.subtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* Основное содержание */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="prose dark:prose-invert max-w-none mb-16">
            <p className="text-lg mb-8">{t('szm.p1')}</p>
            
            <hr className="my-12" />
            
            {/* Блок ПСЗУ */}
            <h2 className="section-title mb-8">{t('szm.pszu.title')}</h2>
            <p className="mb-6">
              {t('szm.pszu.description')}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative animate-on-scroll">
                <div className="glass-card rounded-2xl overflow-hidden aspect-video">
                  <img alt={t('szm.pszu.image.alt')} className="object-cover w-full h-full" src="/uploads/8a2b4bbe-529e-4437-a65e-24ad51828cb3.webp" />
                </div>
                <div className="absolute -bottom-6 -left-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
                  <p className="font-semibold">{t('szm.pszu.image.caption.title')}</p>
                  <p className="text-sm text-inherit">{t('szm.pszu.image.caption.text')}</p>
                </div>
              </div>
              
              <div className="animate-on-scroll">
                <p className="text-lg mb-6">
                  {t('szm.pszu.mobileNote')}
                </p>
                
                <ul className="space-y-4 mb-8 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{t('szm.pszu.list.item1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{t('szm.pszu.list.item2')}</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4">{t('szm.pszu.advantages.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
                  animationDelay: '0ms'
                }}>
                    <p className="font-semibold mb-2">{t('szm.pszu.advantages.item1')}</p>
                  </div>

                  <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
                  animationDelay: '50ms'
                }}>
                    <p className="font-semibold mb-2">{t('szm.pszu.advantages.item2')}</p>
                  </div>

                  <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
                  animationDelay: '100ms'
                }}>
                    <p className="font-semibold mb-2">{t('szm.pszu.advantages.item3')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Блок производство СЗМ */}
            <h2 className="section-title mb-8">{t('szm.production.title')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1 animate-on-scroll">
                <p className="text-lg mb-6">
                  {t('szm.production.p1')}
                </p>
                
                <h3 className="text-xl font-semibold mb-4">{t('szm.production.features.title')}</h3>
                <ul className="space-y-4 mb-8 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{t('szm.production.features.item1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{t('szm.production.features.item2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{t('szm.production.features.item3')}</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4">{t('szm.production.advantages.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
                  animationDelay: '0ms'
                }}>
                    <p className="font-semibold mb-2">{t('szm.production.advantages.item1')}</p>
                    
                  </div>

                  <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
                  animationDelay: '50ms'
                }}>
                    <p className="font-semibold mb-2">{t('szm.production.advantages.item2')}</p>
                    
                  </div>

                  <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
                  animationDelay: '100ms'
                }}>
                    <p className="font-semibold mb-2">{t('szm.production.advantages.item3')}</p>
                    
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative animate-on-scroll">
                <div className="glass-card rounded-2xl overflow-hidden aspect-video">
                  <img alt={t('szm.production.image.alt')} className="object-cover w-full h-full" src="/uploads/f3e9183a-c245-4956-806c-fed7d5c08ecf.webp" />
                </div>
                <div className="absolute -top-6 -left-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
                  <p className="font-semibold">{t('szm.production.image.caption.title')}</p>
                  <p className="text-sm text-inherit">{t('szm.production.image.caption.text')}</p>
                </div>
              </div>
            </div>
            
            {/* Блок преимуществ */}
            <h2 className="section-title mb-8">{t('szm.techAdvantages.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="glass-card p-6 rounded-xl animate-on-scroll">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t('szm.techAdvantages.safety.title')}</h3>
                </div>
                <p className="text-muted-foreground">{t('szm.techAdvantages.safety.description')}</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-on-scroll">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t('szm.techAdvantages.versatility.title')}</h3>
                </div>
                <p className="text-muted-foreground">{t('szm.techAdvantages.versatility.description')}</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-on-scroll">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <BarChart className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t('szm.techAdvantages.productivity.title')}</h3>
                </div>
                <p className="text-muted-foreground">{t('szm.techAdvantages.productivity.description')}</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-on-scroll">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Factory className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t('szm.techAdvantages.automation.title')}</h3>
                </div>
                <p className="text-muted-foreground">{t('szm.techAdvantages.automation.description')}</p>
              </div>
            </div>
            
            {/* Области применения - копируем с EVV */}
            <h2 className="section-title mb-8">{t('szm.applications.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-xl animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
              animationDelay: '0ms'
            }}>
                <div className="mb-4 text-primary">
                  <Image className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('szm.applications.openpit.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('szm.applications.openpit.description')}
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
              animationDelay: '100ms'
            }}>
                <div className="mb-4 text-primary">
                  <Layers className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('szm.applications.underground.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('szm.applications.underground.description')}
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
              animationDelay: '200ms'
            }}>
                <div className="mb-4 text-primary">
                  <BarChart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('szm.applications.civil.title')}</h3>
                <p className="text-muted-foreground mb-4">{t('szm.applications.civil.description')}</p>
              </div>
            </div>
            
            <p className="text-lg mb-6 mt-8">{t('szm.usage.p1')}</p>
            
            <ul className="space-y-4 mb-8 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>{t('szm.usage.advantage.label')}</strong> {t('szm.usage.advantage.text')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span><strong>{t('szm.usage.result.label')}</strong> {t('szm.usage.result.text')}</span>
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
              {t('szm.cooperation.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
              {t('szm.cooperation.description')}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
              <Link to="/contact" className="inline-flex btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <Send size={18} />
                {t('szm.cooperation.contact')}
              </Link>
              
              <Link to="/licenses" className="inline-flex btn-outline shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <FileText size={18} />
                {t('szm.cooperation.licenses')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Szm;
