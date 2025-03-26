import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { UserMenu } from './UserMenu';
const navItems = [{
  name: 'Главная',
  path: '/'
}, {
  name: 'Техника и технологии',
  path: '/technologies'
}, {
  name: 'Новости',
  path: '/news'
}, {
  name: 'О компании',
  path: '/about'
}, {
  name: 'ЧаВо',
  path: '/faq'
}, {
  name: 'Контакты',
  path: '/contact'
}];
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
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
  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-background/80 dark:bg-background/80 backdrop-blur-lg shadow-sm' : 'py-5 bg-transparent'}`;
  return <header className={headerClass}>
      <div className="container mx-auto px-4">
        <div className="my-[-16px]">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold text-xl">Г</div>
              <span className="text-xl font-display font-semibold">ООО «Гранит»</span>
            </Link>
          </div>

          {/* Navigation centered */}
          <nav className="hidden lg:flex flex-1 items-center justify-center space-x-1">
            {navItems.map((item, index) => <Link key={item.path} to={item.path} className={`nav-link animate-fade-in ${location.pathname === item.path || item.path !== '/' && location.pathname.startsWith(item.path) ? 'nav-link-active' : ''}`} style={{
            animationDelay: `${index * 100}ms`
          }}>
                {item.name}
              </Link>)}
          </nav>

          {/* Theme toggle and user menu on the right */}
          <div className="flex items-center ml-auto gap-2">
            <div className="hidden lg:block animate-fade-in" style={{
            animationDelay: `${navItems.length * 100}ms`
          }}>
              <ThemeToggle />
            </div>
            <UserMenu />
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button className="p-2" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute top-[100%] left-0 right-0 bg-background/95 dark:bg-background/95 backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out border-b border-border ${isMenuOpen ? 'max-h-[500px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`} style={{
      marginTop: 0
    }}>
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          {navItems.map((item, index) => <Link key={item.path} to={item.path} className={`py-2 px-4 rounded-lg ${location.pathname === item.path || item.path !== '/' && location.pathname.startsWith(item.path) ? 'bg-primary/10 text-primary dark:text-primary-foreground font-medium' : 'hover:bg-muted/50'}`} style={{
          transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
          opacity: isMenuOpen ? 1 : 0,
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }} onClick={closeMenu}>
              {item.name}
            </Link>)}
        </nav>
      </div>
    </header>;
};