
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';

const ContactInfoCards: React.FC = () => {
  useAnimateOnScroll();
  
  return (
    <section className="py-16 w-full" aria-labelledby="contact-methods">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 id="contact-methods" className="sr-only">Способы связи</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="animate-on-scroll">
            <div className="glass-card-solid rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Телефон для связи
                </h3>
                <a href="tel:+79145418570" className="text-muted-foreground hover:text-primary transition-colors mb-2 block">
                  +7 914 541 85 70
                </a>
                <a href="https://wa.me/+79145418570" className="text-primary text-sm font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="glass-card-solid rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Электронная почта
                </h3>
                <a href="mailto:granit-svg@mail.ru" className="text-muted-foreground hover:text-primary transition-colors mb-2 block">
                  granit-svg@mail.ru
                </a>
                <p className="text-sm text-muted-foreground">
                  Среднее время ответа: 24 часа
                </p>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="glass-card-solid rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Адрес офиса
                </h3>
                <p className="text-muted-foreground mb-2">
                  г. Хабаровск ул. Строительная 28
                </p>
                <a href="https://go.2gis.com/1YfhD" className="text-primary text-sm font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                  Открыть на карте
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
