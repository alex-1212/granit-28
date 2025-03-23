
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

const mainNavItems = [
  { name: 'Главная', path: '/' },
  { name: 'Техника и технологии', path: '/technologies' },
  { name: 'О компании', path: '/about' },
  { name: 'ЧаВо', path: '/faq' },
  { name: 'Контакты', path: '/contact' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/90 dark:bg-background/80 backdrop-blur-lg shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 animate-fade-in">
          <div className="h-10 w-10 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold text-xl">Г</div>
          <span className="text-xl font-display font-semibold">ООО «Гранит»</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {mainNavItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                isActive(item.path) ? 'nav-link-active' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            className="p-2 text-foreground focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <div className="hidden md:block ml-4 animate-fade-in" style={{ animationDelay: `${mainNavItems.length * 100}ms` }}>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-background/95 backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out border-b border-gray-200 dark:border-border ${
          isMenuOpen ? 'max-h-[800px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          {mainNavItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`py-2 px-4 rounded-lg ${
                isActive(item.path) ? 'bg-primary/10 text-primary font-medium dark:text-primary-foreground' : 'hover:bg-gray-100 dark:hover:bg-muted/50'
              }`}
              style={{ 
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease'
              }}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
