
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/i18n/LanguageContext';

export const ContactMeta = () => {
  const { lang } = useLanguage();
  return (
    <Helmet>
      {lang === 'zh' ? (
        <>
          <title>«Гранит»有限责任公司联系方式 — 远东地区钻孔爆破工程</title>
          <meta name="description" content="联系«Гранит»有限责任公司，获取钻孔爆破工程咨询服务。办事处位于哈巴罗夫斯克（伯力），拥有自有乳化炸药生产基地。电话：+7 914-541-85-70" />
          <meta name="keywords" content="钻孔爆破工程 联系方式, «Гранит»有限责任公司 电话, 订购爆破工程, 远东地区乳化炸药生产, 联系«Гранит»有限责任公司" />
          <link rel="canonical" href="https://granit-svg.ru/contact" />
          <meta property="og:title" content="«Гранит»有限责任公司联系方式 — 钻孔爆破工程" />
          <meta property="og:description" content="联系«Гранит»有限责任公司，获取钻孔爆破工程咨询服务。办事处位于哈巴罗夫斯克（伯力），拥有自有乳化炸药生产基地。" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://granit-svg.ru/contact" />
          <meta property="og:image" content="https://granit-svg.ru/uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
          <meta property="og:site_name" content="«Гранит»有限责任公司" />
          <meta property="og:locale" content="zh_CN" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="«Гранит»有限责任公司联系方式 — 钻孔爆破工程" />
          <meta name="twitter:description" content="联系«Гранит»有限责任公司，获取钻孔爆破工程咨询服务。办事处位于哈巴罗夫斯克（伯力）。" />
          <meta name="twitter:image" content="https://granit-svg.ru/uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
        </>
      ) : (
        <>
          <title>Контакты ООО «Гранит» — Буровзрывные работы на Дальнем Востоке</title>
          <meta name="description" content="Свяжитесь с ООО «Гранит» для консультации по буровзрывным работам. Офис в Хабаровске, собственное производство ЭВВ. Телефон: +7 914-541-85-70" />
          <meta name="keywords" content="буровзрывные работы контакты, ООО Гранит телефон, заказать взрывные работы, производство ЭВВ Дальний Восток, связаться с ООО Гранит" />
          <link rel="canonical" href="https://granit-svg.ru/contact" />
          <meta property="og:title" content="Контакты ООО «Гранит» — Буровзрывные работы" />
          <meta property="og:description" content="Свяжитесь с ООО «Гранит» для консультации по буровзрывным работам. Офис в Хабаровске, собственное производство ЭВВ." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://granit-svg.ru/contact" />
          <meta property="og:image" content="https://granit-svg.ru/uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
          <meta property="og:site_name" content="ООО «Гранит»" />
          <meta property="og:locale" content="ru_RU" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Контакты ООО «Гранит» — Буровзрывные работы" />
          <meta name="twitter:description" content="Свяжитесь с ООО «Гранит» для консультации по буровзрывным работам. Офис в Хабаровске." />
          <meta name="twitter:image" content="https://granit-svg.ru/uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
        </>
      )}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ООО «Гранит»",
          "url": "https://granit-svg.ru",
          "logo": "https://granit-svg.ru/uploads/88fff896-717b-4e5d-89b9-497557d68736.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+7 914-541-85-70",
            "contactType": "customer service",
            "areaServed": "RU",
            "availableLanguage": "Russian"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Строительная, д. 28",
            "addressLocality": "Хабаровск",
            "postalCode": "680001",
            "addressCountry": "RU"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "48.4647",
            "longitude": "135.0598"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        }
      `}</script>
    </Helmet>
  );
};
