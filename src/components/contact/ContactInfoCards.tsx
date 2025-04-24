
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
      <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-primary">
            <Phone className="h-8 w-8" />
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
      
      <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-primary">
            <Mail className="h-8 w-8" />
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
      
      <div className="glass-card-solid p-5 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-primary">
            <MapPin className="h-8 w-8" />
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

