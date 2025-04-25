
import React from 'react';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

export const ContactFormAndMap = () => {
  return (
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
  );
};
