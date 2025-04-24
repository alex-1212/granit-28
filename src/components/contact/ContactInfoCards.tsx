
import React from 'react';
import {
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const ContactInfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="glass-card p-8 rounded-xl animate-on-scroll">
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
            <Phone className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-xl font-medium mb-4">Телефон для связи</h3>
          <a 
            href="tel:+79145418570" 
            className="text-lg font-semibold hover:text-primary transition-colors mb-2"
          >
            +7 (914) 541-85-70
          </a>
          <a 
            href="https://wa.me/79145418570" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
      
      <div className="glass-card p-8 rounded-xl animate-on-scroll">
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
            <Mail className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-xl font-medium mb-4">Электронная почта</h3>
          <a 
            href="mailto:granit-svg@mail.ru" 
            className="text-lg font-semibold hover:text-primary transition-colors mb-2"
          >
            granit-svg@mail.ru
          </a>
          <p className="text-sm text-muted-foreground">
            Среднее время ответа: 24 часа
          </p>
        </div>
      </div>
      
      <div className="glass-card p-8 rounded-xl animate-on-scroll">
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
            <MapPin className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-xl font-medium mb-4">Адрес офиса</h3>
          <p className="text-lg font-semibold mb-2">
            г. Хабаровск<br />
            ул. Строительная 28
          </p>
          <a 
            href="#map" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Открыть на карте
          </a>
        </div>
      </div>
    </div>
  );
};
