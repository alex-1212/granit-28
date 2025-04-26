
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, User, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';

export const UserMenu = () => {
  const { user, signOut } = useAuth();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  
  const handleLogout = () => {
    signOut();
    setOpen(false);
  };
  
  if (!user) {
    return (
      <Link to="/auth" className="py-1.5">
        <Button variant="ghost" size="sm" className="flex items-center gap-1.5">
          <LogIn size={16} />
          <span className="hidden sm:inline">{t('auth.login')}</span>
        </Button>
      </Link>
    );
  }
  
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <User size={16} className="mr-1" />
          <span className="hidden sm:inline">{user.email?.split('@')[0]}</span>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>
          {user.email}
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to="/profile" className="cursor-pointer w-full flex items-center" onClick={() => setOpen(false)}>
              <Settings className="w-4 h-4 mr-2" />
              <span>{t('profile.title')}</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="w-4 h-4 mr-2" />
          <span>{t('auth.logout')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
