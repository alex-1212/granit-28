
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { Shield, BarChart, FileText, Image, Layers, CheckCircle, Mail, Send } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Evv = () => {
  useAnimateOnScroll();

  return (
    <div className="w-full">
      <Helmet>
        <title>Эмульсионно-взрывчатые вещества (ЭВВ) — ООО «Гранит»</title>
        <meta name="description" content="Производство и поставка эмульсионных взрывчатых веществ высокого качества под маркой ГРАНИТ для горнодобывающей промышленности. Инновационные взрывчатые материалы с высоким КПД и минимальным воздействием на окружающую среду." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/products">Продукты и услуги</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Эмульсионно-взрывчатые вещества (ЭВВ)</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Эмульсионно-взрывчатые вещества (ЭВВ)
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
              Инновационные решения для горнодобывающей промышленности
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-on-scroll">
              <p className="text-lg mb-6">
                Компания ООО «Гранит» специализируется на разработке, производстве и поставке высококачественных 
                эмульсионных взрывчатых веществ (ЭВВ), которые зарекомендовали себя как надежное и эффективное 
                решение для горнодобывающей промышленности. Наши продукты под маркой «ГРАНИТ» соответствуют 
                самым строгим стандартам качества и безопасности, обеспечивая максимальную производительность 
                при минимальном воздействии на окружающую среду.
              </p>
            </div>

            <div className="relative animate-on-scroll">
              <div className="glass-card rounded-2xl overflow-hidden aspect-video">
                <img src="https://granit-svg.ru/img-granit/products1.webp" alt="ЭВВ Гранит" className="object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
                <p className="font-semibold">ЭВВ «ГРАНИТ»</p>
                <p className="text-sm text-inherit">Инновационные решения</p>
              </div>
            </div>
          </div>

          {/* Наши разработки */}
          <div className="mb-20 animate-on-scroll">
            <h2 className="section-title mb-6">Наши разработки</h2>
            <p className="mb-6">
              Специалисты ООО «Гранит» создали собственные технические условия (ТУ) на эмульсионные взрывчатые вещества,
              эмульсионные матрицы и газогенерирующие добавки, которые обеспечивают уникальные потребительские свойства.
            </p>

            <h3 className="text-xl font-semibold mb-4">Линейка продукции:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="glass-card-solid p-5 rounded-lg">
                <p className="font-semibold mb-2">1. Промышленное взрывчатое вещество первого класса «ГРАНИТ»</p>
                <p className="text-sm">ТУ 20.51.11-003-39269764-2021</p>
                <p className="text-sm">Разрешение на постоянное применение №РВВ-0931 от 17.03.2023 г.</p>
              </div>

              <div className="glass-card-solid p-5 rounded-lg">
                <p className="font-semibold mb-2">2. Вещества взрывчатые промышленные «Гранит ПХ»</p>
                <p className="text-sm">ТУ 20.51.11-005-39269764-2021</p>
                <p className="text-sm">Разрешение на постоянное применение №РВВ-0950 от 31.08.2023 г.</p>
              </div>

              <div className="glass-card-solid p-5 rounded-lg">
                <p className="font-semibold mb-2">3. Эмульсионная матрица «ГРАНИТ»</p>
                <p className="text-sm">ТУ 20.15.20-002-39269764-2021</p>
              </div>

              <div className="glass-card-solid p-5 rounded-lg">
                <p className="font-semibold mb-2">4. Газогенерирующая добавка «ГРАНИТ»</p>
                <p className="text-sm">ТУ 20.15.60-004-39269764-2021</p>
              </div>

              <div className="glass-card-solid p-5 rounded-lg">
                <p className="font-semibold mb-2">5. Эмульсионная матрица «ГРАНИТ П»</p>
                <p className="text-sm">ТУ 20.15.20-006-39269764-2021</p>
              </div>

              <div className="glass-card-solid p-5 rounded-lg">
                <p className="font-semibold mb-2">6. ЭВВ «ГРАНИТ-ПД»</p>
                <p className="text-sm">ТУ 20.51.11-011-39269764-2023</p>
                <p className="text-sm">(проводятся приемочные испытания)</p>
              </div>
            </div>
          </div>

          {/* Преимущества использования */}
          <div className="mb-20 animate-on-scroll">
            <h2 className="section-title mb-6">Преимущества использования ЭВВ «ГРАНИТ»</h2>
            <p className="mb-6">
              Наши эмульсионные взрывчатые вещества имеют ряд неоспоримых преимуществ перед другими типами взрывчатых материалов:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">1. Пластичность</h3>
                  <p className="text-muted-foreground">
                    ЭВВ — это пластичное взрывчатое вещество, что полностью исключает пыление при заряжании скважин.
                    Это делает процесс работы более безопасным и комфортным.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">2. Высокий КПД</h3>
                  <p className="text-muted-foreground">
                    Благодаря уникальным физико-химическим характеристикам, наши ЭВВ обеспечивают максимальный 
                    коэффициент полезного действия при взрыве, что повышает эффективность горных работ.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">3. Низкое содержание ядовитых газов</h3>
                  <p className="text-muted-foreground">
                    При использовании ЭВВ образуется значительно меньше токсичных продуктов взрыва, что снижает 
                    негативное воздействие на атмосферу и здоровье персонала.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">4. Экологическая безопасность</h3>
                  <p className="text-muted-foreground">
                    Производство и применение эмульсионных ВВ оказывают минимальное воздействие на окружающую среду, 
                    включая атмосферу и грунтовые воды. Это особенно важно для современной экологически ориентированной промышленности.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Области применения */}
          <div className="mb-20 animate-on-scroll">
            <h2 className="section-title mb-6">Области применения</h2>
            <p className="mb-6">
              ЭВВ под маркой «ГРАНИТ» успешно применяются в следующих сферах:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card-solid p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <Image className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Открытые горные работы</h3>
              </div>

              <div className="glass-card-solid p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Подземные горные выработки</h3>
              </div>

              <div className="glass-card-solid p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Нефтегазовая отрасль</h3>
              </div>
            </div>
          </div>

          {/* Почему выбирают нас */}
          <div className="mb-20 animate-on-scroll">
            <h2 className="section-title mb-6">Почему выбирают нас?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Инновационные технологии</h3>
                  <p className="text-muted-foreground">
                    Мы постоянно совершенствуем составы и методы производства, чтобы предлагать клиентам самые передовые решения.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Индивидуальный подход</h3>
                  <p className="text-muted-foreground">
                    Учитываем особенности вашего проекта и предоставляем оптимальные решения.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Безопасность</h3>
                  <p className="text-muted-foreground">
                    Все наши продукты проходят строгий контроль качества и имеют необходимые сертификаты.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Экологичность</h3>
                  <p className="text-muted-foreground">
                    Мы заботимся о сохранении природы и минимизации воздействия на окружающую среду.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Сотрудничество - изменено на стиль как в CTASection */}
          <section className="py-12 bg-primary/5 dark:bg-primary/10 relative overflow-hidden rounded-2xl mb-10">
            <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-[0.07] bg-repeat bg-[length:30px_30px]"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="section-title mb-6 animate-on-scroll">
                  Сотрудничество с ООО «Гранит»
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 animate-on-scroll">
                  ООО «Гранит» готово предложить вам индивидуальные решения для ваших задач. Мы гарантируем высокое
                  качество продукции, оперативную доставку и профессиональную поддержку на всех этапах сотрудничества.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
                  <Link to="/contact" className="inline-flex btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    <Send size={18} />
                    Связаться с нами
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Evv;
