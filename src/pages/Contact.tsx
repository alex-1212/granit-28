
import React, { useEffect } from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { Helmet } from 'react-helmet-async';
import ContactHero from '@/components/contact/ContactHero';
import { ContactInfoCards } from '@/components/contact/ContactInfoCards';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';

const Contact = () => {
  useAnimateOnScroll();

  return (
    <div className="w-full">
      <Helmet>
        <title>Контакты ООО «Гранит» — Буровзрывные работы на Дальнем Востоке</title>
        <meta name="description" content="Свяжитесь с ООО «Гранит» для консультации по буровзрывным работам. Офис в Хабаровске, собственное производство ЭВВ. Телефон: +7 (4212) 40-89-19" />
        <link rel="canonical" href="https://granit-svg.ru/contact" />
        <meta property="og:title" content="Контакты ООО «Гранит» — Буровзрывные работы" />
        <meta property="og:description" content="Свяжитесь с ООО «Гранит» для консультации по буровзрывным работам. Офис в Хабаровске, собственное производство ЭВВ." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://granit-svg.ru/contact" />
        <meta property="og:image" content="https://granit-svg.ru/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" />
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
            }
          }
        `}</script>
      </Helmet>

      <ContactHero />
      <ContactInfoCards />
      
      {/* Contact Form and Map */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <ContactForm />
            </div>
            
            <div className="animate-on-scroll">
              <ContactMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
