import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { Shield, BarChart, FileText, Image, Layers, CheckCircle, Mail, Send } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Seo, breadcrumbSchema } from '@/components/common/Seo';
const Evv = () => {
  useAnimateOnScroll();
  const { lang, t } = useLanguage();
  return <div className="w-full">
      <Seo
        path="/evv"
        title={
          lang === 'zh'
            ? t('evv.meta.title')
            : 'Эмульсионные взрывчатые вещества (ЭВВ) — производство от ООО «Гранит»'
        }
        description={
          lang === 'zh'
            ? t('evv.meta.description')
            : 'Производство и поставка эмульсионных взрывчатых веществ (ЭВВ) под маркой «ГРАНИТ»: гранулит, эмульсолиты, матрица ЭВВ для открытых и подземных горных работ. Собственные ТУ, экологичность, высокое КПД взрыва.'
        }
        keywords="ЭВВ, эмульсионные взрывчатые вещества купить, эмульсия взрывчатка, гранулит, взрывчатые материалы для горных работ, матрица ЭВВ"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Главная', path: '/' },
            { name: 'ЭВВ', path: '/evv' },
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
              {t('evv.hero.h1')}
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">{t('evv.hero.p')}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-on-scroll">
              <p className="text-lg mb-6">{t('evv.intro.p1')}</p>
            </div>

            <div className="relative animate-on-scroll">
              <div className="glass-card rounded-2xl overflow-hidden aspect-video">
                <img alt={t('evv.image.alt')} className="object-cover w-full h-full" src="/uploads/fcf0f4ec-15e8-4d96-bca9-0744e6914835.webp" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
                <p className="font-semibold">{t('evv.intro.card.title')}</p>
                <p className="text-sm text-inherit">{t('evv.intro.card.subtitle')}</p>
              </div>
            </div>
          </div>

          {/* Наши разработки - изменена сетка на 3x3 и добавлена анимация */}
          <div className="mb-20 animate-on-scroll">
            <h2 className="section-title mb-6">{t('evv.developments.h2')}</h2>
            <p className="mb-6">
              {t('evv.developments.p1')}
            </p>

            <h3 className="text-xl font-semibold mb-4">{t('evv.developments.lineTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
              animationDelay: '0ms'
            }}>
                <p className="font-semibold mb-2">{t('evv.products.c1.title')}</p>
                <p className="text-sm">{t('evv.products.c1.tu')}</p>
                <p className="text-sm">{t('evv.products.c1.permit')}</p>
              </div>

              <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
              animationDelay: '50ms'
            }}>
                <p className="font-semibold mb-2">{t('evv.products.c2.title')}</p>
                <p className="text-sm">{t('evv.products.c2.tu')}</p>
                <p className="text-sm">{t('evv.products.c2.permit')}</p>
              </div>

              <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
              animationDelay: '100ms'
            }}>
                <p className="font-semibold mb-2">{t('evv.products.c3.title')}</p>
                <p className="text-sm">{t('evv.products.c3.tu')}</p>
                <p className="text-sm">{t('evv.products.c3.note')}</p>
              </div>

              <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
              animationDelay: '150ms'
            }}>
                <p className="font-semibold mb-2">{t('evv.products.c4.title')}</p>
                <p className="text-sm">{t('evv.products.c4.tu')}</p>
              </div>

              <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
              animationDelay: '200ms'
            }}>
                <p className="font-semibold mb-2">{t('evv.products.c5.title')}</p>
                <p className="text-sm">{t('evv.products.c5.tu')}</p>
              </div>

              
            </div>
          </div>

          {/* Преимущества использования */}
          <div className="mb-20 animate-on-scroll">
            <h2 className="section-title mb-6">{t('evv.advantages.h2')}</h2>
            <p className="mb-6">
              {t('evv.advantages.p1')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t('evv.advantages.i1.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('evv.advantages.i1.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t('evv.advantages.i2.title')}</h3>
                  <p className="text-muted-foreground">{t('evv.advantages.i2.description')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t('evv.advantages.i3.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('evv.advantages.i3.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t('evv.advantages.i4.title')}</h3>
                  <p className="text-muted-foreground">{t('evv.advantages.i4.description')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Области применения - изменено на формат как в услугах компании */}
          <div className="mb-20 animate-on-scroll">
            <h2 className="section-title mb-6">{t('evv.applications.h2')}</h2>
            <p className="mb-6">
              {t('evv.applications.p1')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-xl animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
              animationDelay: '0ms'
            }}>
                <div className="mb-4 text-primary">
                  <Image className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('evv.applications.i1.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('evv.applications.i1.description')}
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
              animationDelay: '100ms'
            }}>
                <div className="mb-4 text-primary">
                  <Layers className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('evv.applications.i2.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('evv.applications.i2.description')}
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{
              animationDelay: '200ms'
            }}>
                <div className="mb-4 text-primary">
                  <BarChart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('evv.applications.i3.title')}</h3>
                <p className="text-muted-foreground mb-4">{t('evv.applications.i3.description')}</p>
              </div>
            </div>
          </div>

          {/* Почему выбирают нас */}
          <div className="mb-20 animate-on-scroll">
            <h2 className="section-title mb-6">{t('evv.why.h2')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t('evv.why.i1.title')}</h3>
                  <p className="text-muted-foreground">{t('evv.why.i1.description')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t('evv.why.i2.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('evv.why.i2.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t('evv.why.i3.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('evv.why.i3.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t('evv.why.i4.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('evv.why.i4.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Сотрудничество - стилизовано как секция "Готовы обсудить ваш проект?" */}
          <section className="py-12 bg-primary/5 dark:bg-primary/10 relative overflow-hidden rounded-2xl mb-10">
            <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-[0.07] bg-repeat bg-[length:30px_30px]"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="section-title mb-6 animate-on-scroll">
                  {t('evv.cooperation.h2')}
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
                  {t('evv.cooperation.p1')}
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
                  <Link to="/contact" className="inline-flex btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    <Send size={18} />
                    {t('evv.cooperation.cta')}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>;
};
export default Evv;
