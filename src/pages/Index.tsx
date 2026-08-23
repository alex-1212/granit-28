
import React, { useEffect } from 'react';
import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import AboutSection from '@/components/home/AboutSection';
import CTASection from '@/components/home/CTASection';
import NewsSection from '@/components/home/NewsSection';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { useLanguage } from '@/i18n/LanguageContext';
import {
  Seo,
  organizationSchema,
  websiteSchema,
} from '@/components/common/Seo';

const Index = () => {
  useAnimateOnScroll();
  const { lang } = useLanguage();

  const meta =
    lang === 'zh'
      ? {
          title: '«ГРАНИТ»有限责任公司 — 远东地区钻孔爆破工程',
          description:
            '«ГРАНИТ»有限责任公司 — 一家专注于远东地区钻孔爆破工程的快速发展企业。拥有自有乳化炸药生产基地。',
        }
      : {
          title:
            'Буровзрывные работы на Дальнем Востоке — ООО «Гранит» | ЭВВ от производителя',
          description:
            'ООО «Гранит»: буровзрывные работы (БВР) на Дальнем Востоке, в Якутии и на Камчатке. Собственное производство эмульсионных взрывчатых веществ (ЭВВ), СЗМ и ПСЗУ. Лицензии, опыт 10 лет. ☎ +7 914-541-85-70',
        };

  return (
    <div className="w-full overflow-x-hidden">
      <Seo
        path="/"
        title={meta.title}
        description={meta.description}
        keywords="буровзрывные работы, БВР, эмульсионные взрывчатые вещества, ЭВВ, производство ЭВВ, Дальний Восток, Якутия, Камчатка, Хабаровск, взрывчатые материалы, смесительно-зарядные машины"
        jsonLd={[organizationSchema, websiteSchema]}
      />
      <Hero />
      <Services />
      <AboutSection />
      <CTASection />
      <NewsSection />
    </div>
  );
};

export default Index;
