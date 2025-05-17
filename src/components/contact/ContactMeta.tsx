
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const ContactMeta = () => {
  return (
    <Helmet>
      <title>Контакты ООО «Гранит» — Буровзрывные работы на Дальнем Востоке</title>
      <meta name="description" content="Свяжитесь с ООО «Гранит» для консультации по буровзрывным работам. Офис в Хабаровске, собственное производство ЭВВ. Телефон: +7 (4212) 40-89-19" />
      <meta name="keywords" content="буровзрывные работы контакты, ООО Гранит телефон, заказать взрывные работы, производство ЭВВ Дальний Восток, связаться с ООО Гранит" />
      <link rel="canonical" href="https://granit-svg.ru/contact" />
      <meta property="og:title" content="Контакты ООО «Гранит» — Буровзрывные работы" />
      <meta property="og:description" content="Свяжитесь с ООО «Гранит» для консультации по буровзрывным работам. Офис в Хабаровске, собственное производство ЭВВ." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://granit-svg.ru/contact" />
      <meta property="og:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
      <meta property="og:site_name" content="ООО «Гранит»" />
      <meta property="og:locale" content="ru_RU" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Контакты ООО «Гранит» — Буровзрывные работы" />
      <meta name="twitter:description" content="Свяжитесь с ООО «Гранит» для консультации по буровзрывным работам. Офис в Хабаровске." />
      <meta name="twitter:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ООО «Гранит»",
          "url": "https://granit-svg.ru",
          "logo": "https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+7-4212-40-89-19",
            "contactType": "customer service",
            "areaServed": "RU",
            "availableLanguage": "Russian"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Павловича, д. 13, офис 514",
            "addressLocality": "Хабаровск",
            "postalCode": "680000",
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
