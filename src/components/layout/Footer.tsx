
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WorkingHours from '@/components/common/WorkingHours';

export const Footer: React.FC = () => {
  const foundingYear = 2015;
  const currentYear = new Date().getFullYear();
  
  return <footer className="bg-secondary/50 dark:bg-card/50 pt-16 pb-8 border-t border-border py-[28px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" alt="Логотип Гранит" className="h-16 object-none" />
              <span className="text-white" style={{
              fontFamily: 'Spaceland Ten Oblique, cursive',
              fontSize: '28px',
              lineHeight: '1.75rem',
              textShadow: '0px 0px 7px #000000',
              letterSpacing: '1px',
              marginBottom: '-20px'
            }}>
                ООО «ГРАНИТ»
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Специализированная компания по производству буровзрывных работ в сложных климатических условиях
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/79145418570" className="inline-block" aria-label="WhatsApp">
                <Button variant="outline" size="sm" className="flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  <MessageSquare size={16} />
                  Напишите нам
                </Button>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans font-semibold text-lg mb-5">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-foreground/80 hover:text-primary transition-colors">
                  Продукты и услуги
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-foreground/80 hover:text-primary transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans font-semibold text-lg mb-5">Разделы</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/gallery" className="text-foreground/80 hover:text-primary transition-colors">
                  Галерея
                </Link>
              </li>
              <li>
                <Link to="/licenses" className="text-foreground/80 hover:text-primary transition-colors">
                  Лицензии
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-foreground/80 hover:text-primary transition-colors">
                  Сотрудники
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-foreground/80 hover:text-primary transition-colors">
                  Вакансии
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-foreground/80 hover:text-primary transition-colors">
                  ЧаВо
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans font-semibold text-lg mb-5">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+79145418570" className="text-foreground/80 hover:text-primary transition-colors">
                  +7 914 541 85 70
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:granit-svg@mail.ru" className="text-foreground/80 hover:text-primary transition-colors">
                  granit-svg@mail.ru
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-primary mt-0.5 flex-shrink-0" />
                <a href="https://go.2gis.com/1YfhD" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                 680001, г. Хабаровск ул. Строительная 28, офис 1
                </a>
              </li>
              {/* Добавляем статус работы */}
              <li className="flex items-start">
                <div className="mr-3 mt-0.5 w-5 flex-shrink-0"></div>
                <WorkingHours />
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {foundingYear} - {currentYear} ООО «ГРАНИТ». Все права защищены.
            </p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-foreground/80 hover:text-primary transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-foreground/80 hover:text-primary transition-colors">
                  Условия использования
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>;
};
