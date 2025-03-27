import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

// Custom WhatsApp SVG icon component
const WhatsAppIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="lucide lucide-icon"
  >
    <path d="M20.4 3.6C17.7.9 14.2.9 11.6 2.5c-2.7 1.6-4.2 4.3-4.3 7.4 0 1.2.3 2.4.8 3.5L7 18l4.6-1.2c1.2.7 2.5 1 3.8 1 4.1 0 7.6-3.4 7.6-7.5 0-2.3-1-4.3-2.6-5.7zm-8.8 11.5c-1.1 0-2.1-.3-3.1-.8l-.2-.1H8l-1 .3.3-1v-.2c-.6-1-.9-2.1-.9-3.2 0-3.4 2.8-6.2 6.2-6.2 1.7 0 3.2.7 4.4 1.8 1.2 1.1 1.8 2.7 1.8 4.3 0 3.5-2.8 6.3-6.2 6.3zm3.4-4.6l-.4-.2c-.2 0-.4.1-.5.2l-.7.8c-.1.1-.3.2-.4.1-1.2-.5-2.3-1.6-2.8-2.8-.1-.2 0-.4.1-.5l.3-.6c.1-.1.1-.3.1-.4l-.2-.7c-.1-.7-.5-.8-.7-.8h-.6c-.2 0-.5.1-.6.2s-.7.7-.7 1.7c0 1 .7 2 .8 2.1.6.9 1.3 1.6 2.2 2.2.9.5 2 1 2.2 1.1.8.2 1.4.2 1.8.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3 0-.2-.1-.3-.4-.4z" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 dark:bg-card/50 pt-16 pb-8 border-t border-border">
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
            <div className="flex space-x-4">
              <a href="https://wa.me/79145418570" className="text-foreground/70 hover:text-primary transition-colors" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
            </div>
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
                <Link to="/news" className="text-foreground/80 hover:text-primary transition-colors">
                  Новости
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
                <a 
                  href="tel:+79145418570" 
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  +7 914 541 85 70
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-primary mt-0.5" />
                <a 
                  href="mailto:granit-svg@mail.ru" 
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
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
    </footer>
  );
};
