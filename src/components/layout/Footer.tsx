import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="pt-16 pb-8 border-t border-border bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold text-xl">Г</div>
              <span className="text-xl font-display font-semibold">ООО «Гранит»</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Специализированная компания по производству буровзрывных работ в сложных климатических условиях
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/technologies" className="text-foreground/80 hover:text-primary transition-colors">
                  Техника и технологии
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
                  О компании
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Разделы</h4>
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
            <h4 className="font-display font-semibold text-lg mb-5">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-primary mt-0.5" />
                <a href="tel:+79145418570" className="text-foreground/80 hover:text-primary transition-colors">
                  +7 914 541 85 70
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-primary mt-0.5" />
                <a href="mailto:granit-svg@mail.ru" className="text-foreground/80 hover:text-primary transition-colors">
                  granit-svg@mail.ru
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-primary mt-0.5" />
                <span className="text-foreground/80">
                  Строительная ул., 28 г, Хабаровск
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} ООО «Гранит». Все права защищены.
            </p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
                  Условия использования
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>;
};