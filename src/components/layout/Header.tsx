
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const mainNavItems = [
  { name: 'Главная', path: '/' },
  { 
    name: 'Техника и технологии', 
    path: '/technologies',
    hasSubmenu: true,
    submenu: [
      { name: 'Галерея', path: '/gallery' },
      { name: 'Лицензии', path: '/licenses' },
    ] 
  },
  { name: 'Новости', path: '/news' },
  { 
    name: 'О компании', 
    path: '/about',
    hasSubmenu: true,
    submenu: [
      { name: 'Сотрудники', path: '/team' },
      { name: 'Вакансии', path: '/careers' },
    ] 
  },
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
          ? 'py-3 bg-background/80 dark:bg-background/80 backdrop-blur-lg shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 animate-fade-in">
          <div className="h-10 w-10 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold text-xl">Г</div>
          <span className="text-xl font-display font-semibold">ООО «Гранит»</span>
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {mainNavItems.map((item, index) => (
              item.hasSubmenu ? (
                <NavigationMenuItem key={item.path} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <NavigationMenuTrigger 
                    className={cn(
                      "nav-link flex items-center gap-1", 
                      isActive(item.path) ? "nav-link-active" : ""
                    )}
                  >
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.path}
                            className={cn(
                              "block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              isActive(item.path) ? "bg-accent text-accent-foreground" : ""
                            )}
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {item.submenu?.map((subItem) => (
                        <li key={subItem.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={subItem.path}
                              className={cn(
                                "block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                isActive(subItem.path) ? "bg-accent text-accent-foreground" : ""
                              )}
                            >
                              {subItem.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.path} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <Link
                    to={item.path}
                    className={`nav-link ${
                      isActive(item.path) ? 'nav-link-active' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              )
            ))}
          </NavigationMenuList>
        </NavigationMenu>

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
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 dark:bg-background/95 backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out border-b border-border ${
          isMenuOpen ? 'max-h-[800px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-2">
          {mainNavItems.map((item, index) => (
            <div key={item.path} className="flex flex-col">
              <Link
                to={item.path}
                className={`py-2 px-4 rounded-lg ${
                  isActive(item.path) ? 'bg-primary/10 text-primary dark:text-primary-foreground font-medium' : 'hover:bg-muted/50'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}
                onClick={closeMenu}
              >
                <div className="flex justify-between items-center">
                  <span>{item.name}</span>
                  {item.hasSubmenu && <ChevronDown size={16} className="ml-1" />}
                </div>
              </Link>
              
              {item.hasSubmenu && (
                <div className="pl-6 space-y-2 mt-1">
                  {item.submenu?.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className={`block py-2 px-4 rounded-lg ${
                        isActive(subItem.path) ? 'bg-primary/10 text-primary dark:text-primary-foreground font-medium' : 'hover:bg-muted/50'
                      }`}
                      style={{ 
                        transitionDelay: isMenuOpen ? `${(index + 1) * 50}ms` : '0ms',
                        opacity: isMenuOpen ? 1 : 0,
                        transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease'
                      }}
                      onClick={closeMenu}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};
