
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const ProductsMeta = () => {
  return (
    <Helmet>
      <title>Продукты и услуги — ООО «Гранит» | Буровзрывные работы, производство ЭВВ</title>
      <meta name="description" content="Комплексные решения для буровзрывных работ от ООО «Гранит». Производство эмульсионных взрывчатых веществ (ЭВВ), смесительно-зарядные машины, системы инициирования. Полный спектр услуг в горнодобывающей промышленности." />
      <meta name="keywords" content="ЭВВ производство, смесительно-зарядные машины, буровзрывные работы услуги, системы инициирования, горнодобыча оборудование, взрывчатые вещества Дальний Восток" />
      <link rel="canonical" href="https://granit-svg.ru/products" />
      <meta property="og:title" content="Продукты и услуги — ООО «Гранит» | Буровзрывные работы" />
      <meta property="og:description" content="Комплексные решения для буровзрывных работ. Производство ЭВВ, смесительно-зарядные машины, системы инициирования." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://granit-svg.ru/products" />
      <meta property="og:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
      <meta property="og:site_name" content="ООО «Гранит»" />
      <meta property="og:locale" content="ru_RU" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Продукты и услуги — ООО «Гранит»" />
      <meta name="twitter:description" content="Комплексные решения для буровзрывных работ. Производство ЭВВ и горнодобывающее оборудование." />
      <meta name="twitter:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ООО «Гранит»",
          "url": "https://granit-svg.ru",
          "logo": "https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png",
          "description": "Производство ЭВВ и комплексные решения для буровзрывных работ",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Продукты и услуги ООО «Гранит»",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Производство эмульсионных взрывчатых веществ (ЭВВ)",
                  "description": "Собственное производство качественных ЭВВ для горнодобывающей промышленности"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Смесительно-зарядные машины",
                  "description": "Современное оборудование для приготовления и доставки взрывчатых веществ"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Буровзрывные работы",
                  "description": "Полный комплекс буровзрывных работ в горнодобывающей промышленности"
                }
              }
            ]
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+7-4212-40-89-19",
            "contactType": "customer service",
            "areaServed": "RU",
            "availableLanguage": "Russian"
          }
        }
      `}</script>
    </Helmet>
  );
};
