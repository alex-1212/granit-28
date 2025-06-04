
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const NewsMeta = () => {
  return (
    <Helmet>
      <title>Новости ООО «Гранит» — Актуальная информация о проектах и достижениях</title>
      <meta name="description" content="Последние новости ООО «Гранит»: проекты, технологии, события в сфере буровзрывных работ и производства ЭВВ на Дальнем Востоке." />
      <meta name="keywords" content="новости Гранит, буровзрывные работы новости, ЭВВ производство новости, горнодобыча Дальний Восток, проекты Гранит" />
      <link rel="canonical" href="https://granit-svg.ru/news" />
      <meta property="og:title" content="Новости ООО «Гранит» — Буровзрывные работы" />
      <meta property="og:description" content="Актуальная информация о проектах, технологиях и достижениях компании в сфере буровзрывных работ." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://granit-svg.ru/news" />
      <meta property="og:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
      <meta property="og:site_name" content="ООО «Гранит»" />
      <meta property="og:locale" content="ru_RU" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Новости ООО «Гранит»" />
      <meta name="twitter:description" content="Последние новости о проектах и достижениях в сфере буровзрывных работ." />
      <meta name="twitter:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Новости ООО «Гранит»",
          "description": "Актуальная информация о проектах, технологиях и достижениях компании",
          "url": "https://granit-svg.ru/news",
          "mainEntity": {
            "@type": "ItemList",
            "name": "Список новостей",
            "description": "Новости компании ООО «Гранит»"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://granit-svg.ru"
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": "Новости",
                "item": "https://granit-svg.ru/news"
              }
            ]
          },
          "publisher": {
            "@type": "Organization",
            "name": "ООО «Гранит»",
            "logo": {
              "@type": "ImageObject",
              "url": "https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png"
            }
          }
        }
      `}</script>
    </Helmet>
  );
};
