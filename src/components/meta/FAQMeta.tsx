
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const FAQMeta = () => {
  return (
    <Helmet>
      <title>Часто задаваемые вопросы — ООО «Гранит»</title>
      <meta name="description" content="Ответы на часто задаваемые вопросы о буровзрывных работах, производстве ЭВВ и услугах компании ООО «Гранит». Получите всю необходимую информацию." />
      <meta name="keywords" content="вопросы ответы Гранит, FAQ буровзрывные работы, ЭВВ вопросы, горнодобыча FAQ, взрывчатые вещества вопросы" />
      <link rel="canonical" href="https://granit-svg.ru/faq" />
      <meta property="og:title" content="Часто задаваемые вопросы — ООО «Гранит»" />
      <meta property="og:description" content="Ответы на вопросы о буровзрывных работах, производстве ЭВВ и услугах компании." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://granit-svg.ru/faq" />
      <meta property="og:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
      <meta property="og:site_name" content="ООО «Гранит»" />
      <meta property="og:locale" content="ru_RU" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="FAQ — ООО «Гранит»" />
      <meta name="twitter:description" content="Часто задаваемые вопросы о буровзрывных работах и производстве ЭВВ." />
      <meta name="twitter:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "name": "Часто задаваемые вопросы — ООО «Гранит»",
          "description": "Ответы на вопросы о буровзрывных работах и производстве ЭВВ",
          "url": "https://granit-svg.ru/faq",
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
                "name": "FAQ",
                "item": "https://granit-svg.ru/faq"
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
