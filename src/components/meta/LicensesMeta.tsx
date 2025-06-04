
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const LicensesMeta = () => {
  return (
    <Helmet>
      <title>Лицензии и сертификаты ООО «Гранит» — Официальные разрешения</title>
      <meta name="description" content="Лицензии и сертификаты ООО «Гранит»: разрешения на производство ЭВВ, буровзрывные работы, сертификаты соответствия и документы на право деятельности." />
      <meta name="keywords" content="лицензии Гранит, сертификаты ЭВВ, разрешения буровзрывные работы, лицензия производство взрывчатых веществ" />
      <link rel="canonical" href="https://granit-svg.ru/licenses" />
      <meta property="og:title" content="Лицензии и сертификаты ООО «Гранит»" />
      <meta property="og:description" content="Официальные лицензии и сертификаты компании на производство ЭВВ и буровзрывные работы." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://granit-svg.ru/licenses" />
      <meta property="og:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
      <meta property="og:site_name" content="ООО «Гранит»" />
      <meta property="og:locale" content="ru_RU" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Лицензии и сертификаты ООО «Гранит»" />
      <meta name="twitter:description" content="Официальные разрешения и сертификаты на производство ЭВВ и буровзрывные работы." />
      <meta name="twitter:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Лицензии и сертификаты ООО «Гранит»",
          "description": "Официальные лицензии и сертификаты компании",
          "url": "https://granit-svg.ru/licenses",
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
                "name": "Лицензии",
                "item": "https://granit-svg.ru/licenses"
              }
            ]
          },
          "mainEntity": {
            "@type": "ItemList",
            "name": "Лицензии и сертификаты",
            "description": "Документы, подтверждающие право на осуществление деятельности"
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
