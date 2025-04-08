
import React, { useEffect } from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfoCards from '@/components/contact/ContactInfoCards';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';

const Contact = () => {
  useAnimateOnScroll();
  
  useEffect(() => {
    document.title = 'Контакты — ООО «Гранит»';
  }, []);

  return (
    <div className="w-full">
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
