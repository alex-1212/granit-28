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
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 21.5a9.5 9.5 0 0 1-9.5-9.5v-.5l.6-1.4L6.7 8.6c.195-.195.45-.3.716-.3h.114L10 9l.164.765a1 1 0 0 1-.574 1.144l-.805.34a7.25 7.25 0 0 0 3.96 3.96l.34-.805a1.001 1.001 0 0 1 1.144-.574L15 14l.7 2.47c.06.211.06.436 0 .63-.083.269-.268.491-.5.63-.326.196-.656.37-1 .53-.346.14-.702.24-1.07.3l-.63.07H12z"/>
    <circle cx="12" cy="12" r="9"/>
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
