
import React from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { ContactMeta } from '@/components/contact/ContactMeta';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfoCards from '@/components/contact/ContactInfoCards';
import { ContactFormAndMap } from '@/components/contact/ContactFormAndMap';

const Contact = () => {
  useAnimateOnScroll();

  return (
    <div className="w-full">
      <ContactMeta />
      <ContactHero />
      <ContactInfoCards />
      <ContactFormAndMap />
    </div>
  );
};

export default Contact;
