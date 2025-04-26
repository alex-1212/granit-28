
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-background relative border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" alt="ООО «ГРАНИТ» логотип" className="h-12" />
            </Link>
            <p className="text-sm text-muted-foreground">
              ООО «Гранит» - динамично развивающаяся компания, специализирующаяся на буровзрывных работах на Дальнем Востоке и в Сибири.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('navigation.products')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/evv" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('products.evv.title')}
                </Link>
              </li>
              <li>
                <Link to="/szm" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('products.szm.title')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('navigation.about')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Команда
                </Link>
              </li>
              <li>
                <Link to="/licenses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Лицензии
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('contact.title')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  г. Хабаровск ул. Строительная 28
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                <a href="tel:+79145418570" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +7 914 541 85 70
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                <a href="mailto:granit-svg@mail.ru" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  granit-svg@mail.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            {t('common.copyright')}
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms-of-use" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
