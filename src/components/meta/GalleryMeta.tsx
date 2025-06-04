
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const GalleryMeta = () => {
  return (
    <Helmet>
      <title>Галерея ООО «Гранит» — Фото производства и буровзрывных работ</title>
      <meta name="description" content="Фотогалерея ООО «Гранит»: производственные мощности, буровзрывные работы, оборудование для производства ЭВВ и горнодобывающая техника." />
      <meta name="keywords" content="фото Гранит, производство ЭВВ фото, буровзрывные работы фото, горнодобывающая техника, заводы ЭВВ" />
      <link rel="canonical" href="https://granit-svg.ru/gallery" />
      <meta property="og:title" content="Галерея ООО «Гранит» — Производство и буровзрывные работы" />
      <meta property="og:description" content="Фотогалерея производственных мощностей и буровзрывных работ компании ООО «Гранит»." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://granit-svg.ru/gallery" />
      <meta property="og:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
      <meta property="og:site_name" content="ООО «Гранит»" />
      <meta property="og:locale" content="ru_RU" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Галерея ООО «Гранит»" />
      <meta name="twitter:description" content="Фотогалерея производства ЭВВ и буровзрывных работ." />
      <meta name="twitter:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Галерея ООО «Гранит»",
          "description": "Фотогалерея производственных мощностей и буровзрывных работ",
          "url": "https://granit-svg.ru/gallery",
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
                "name": "Галерея",
                "item": "https://granit-svg.ru/gallery"
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
