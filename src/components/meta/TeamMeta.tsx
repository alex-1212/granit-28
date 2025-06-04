
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const TeamMeta = () => {
  return (
    <Helmet>
      <title>Команда ООО «Гранит» — Эксперты буровзрывных работ</title>
      <meta name="description" content="Познакомьтесь с командой профессионалов ООО «Гранит». Опытные специалисты в области буровзрывных работ, программы обучения и развития персонала." />
      <meta name="keywords" content="команда Гранит, специалисты буровзрывных работ, эксперты ЭВВ, карьера в горнодобыче, обучение персонала" />
      <link rel="canonical" href="https://granit-svg.ru/team" />
      <meta property="og:title" content="Команда ООО «Гранит» — Эксперты буровзрывных работ" />
      <meta property="og:description" content="Команда профессионалов в области буровзрывных работ. Программы обучения и развития персонала." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://granit-svg.ru/team" />
      <meta property="og:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
      <meta property="og:site_name" content="ООО «Гранит»" />
      <meta property="og:locale" content="ru_RU" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Команда ООО «Гранит»" />
      <meta name="twitter:description" content="Команда профессионалов в области буровзрывных работ и производства ЭВВ." />
      <meta name="twitter:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ООО «Гранит»",
          "url": "https://granit-svg.ru",
          "logo": "https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png",
          "employee": [
            {
              "@type": "Person",
              "name": "Иванов Алексей Петрович",
              "jobTitle": "Генеральный директор",
              "worksFor": {
                "@type": "Organization",
                "name": "ООО «Гранит»"
              }
            },
            {
              "@type": "Person", 
              "name": "Петрова Елена Сергеевна",
              "jobTitle": "Технический директор",
              "worksFor": {
                "@type": "Organization",
                "name": "ООО «Гранит»"
              }
            },
            {
              "@type": "Person",
              "name": "Смирнов Виталий Александрович", 
              "jobTitle": "Руководитель производства",
              "worksFor": {
                "@type": "Organization",
                "name": "ООО «Гранит»"
              }
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Программы развития персонала",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "EducationalOccupationalProgram",
                  "name": "Программы повышения квалификации",
                  "description": "Обучение современным технологиям и методам в области буровзрывных работ"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "EducationalOccupationalProgram",
                  "name": "Наставничество",
                  "description": "Система наставничества для новых сотрудников"
                }
              }
            ]
          }
        }
      `}</script>
    </Helmet>
  );
};
