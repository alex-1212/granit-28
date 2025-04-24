
import React from 'react';
import {
  Mail,
  MapPin,
  Phone,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export const ContactInfoCards = () => {
  const { t } = useLanguage();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="glass-card p-6 rounded-lg animate-on-scroll">
        <div className="mb-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-4">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-medium">{t('contact.phoneNumber')}</h3>
        </div>
        <div className="space-y-2">
          <a 
            href="tel:+79145418570" 
            className="block text-lg font-semibold hover:text-primary transition-colors"
          >
            +7 (914) 541-85-70
          </a>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-lg animate-on-scroll">
        <div className="mb-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-4">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-medium">{t('contact.email')}</h3>
        </div>
        <div className="space-y-2">
          <a 
            href="mailto:granit-svg@mail.ru" 
            className="block text-lg font-semibold hover:text-primary transition-colors"
          >
            granit-svg@mail.ru
          </a>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-lg animate-on-scroll">
        <div className="mb-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-4">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-medium">{t('contact.address')}</h3>
        </div>
        <div className="space-y-2">
          <p className="mb-4">
            680001, г. Хабаровск<br /> 
            ул. Строительная 28, офис 1
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="https://goo.gl/maps/HTjw9T1sXb8ZJHRQA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2 text-sm px-3 py-2 w-full sm:w-auto"
            >
              <ExternalLink size={16} /> {t('contact.routeGoogle')}
            </a>
            <a 
              href="https://go.2gis.com/1YfhD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2 text-sm px-3 py-2 w-full sm:w-auto"
            >
              <ExternalLink size={16} /> {t('contact.routeYandex')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
