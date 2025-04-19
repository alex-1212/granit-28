
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { UserMenu } from './UserMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLanguage } from '@/context/LanguageContext';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [{
    name: t('menu.home'),
    path: '/'
  }, {
    name: t('menu.products'),
    path: '/products'
  }, {
    name: t('menu.gallery'),
    path: '/gallery'
  }, {
    name: t('menu.news'),
    path: '/news'
  }, {
    name: t('menu.about'),
    path: '/about'
  }, {
    name: t('menu.faq'),
    path: '/faq'
  }, {
    name: t('menu.contact'),
    path: '/contact'
  }];

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

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-background/90 dark:bg-background/90 backdrop-blur-lg shadow-sm' : 'py-3 bg-transparent'}`;
  return <header className={headerClass}>
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" alt="ООО «ГРАНИТ» логотип" className="h-16" />
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

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`nav-link animate-fade-in ${location.pathname === item.path || item.path !== '/' && location.pathname.startsWith(item.path) ? 'nav-link-active' : ''}`} 
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <UserMenu />
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button 
                  className="p-2 rounded-md hover:bg-secondary/50 transition-colors lg:hidden" 
                  aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                >
                  {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0 pt-2 w-full sm:w-[300px] overflow-y-auto">
                <nav className="pt-10 px-2 flex flex-col h-full">
                  {navItems.map((item, index) => (
                    <Link 
                      key={item.path} 
                      to={item.path} 
                      className={`py-3 px-4 rounded-lg text-lg font-medium my-1 transition-colors ${location.pathname === item.path || item.path !== '/' && location.pathname.startsWith(item.path) ? 'bg-primary/10 text-primary dark:text-primary-foreground' : 'hover:bg-muted/50'}`} 
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="mt-auto pt-4 border-t border-border mt-6">
                    <p className="text-sm text-muted-foreground px-4 py-2">
                      © {new Date().getFullYear()} ООО «Гранит»
                    </p>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>;
};
