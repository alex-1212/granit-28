
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogIn, LogOut } from 'lucide-react';
import { signOut, isUserAuthenticated } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { toast } from '@/hooks/use-toast';

export const AuthButtons: React.FC = () => {
  const { data: isAuthenticated, refetch } = useQuery({
    queryKey: ['isAuthenticated'],
    queryFn: isUserAuthenticated,
  });
  
  const handleSignOut = async () => {
    try {
      await signOut();
      refetch();
      toast({
        title: 'Выход выполнен',
        description: 'Вы успешно вышли из системы',
      });
    } catch (error: any) {
      toast({
        title: 'Ошибка',
        description: error?.message || 'Произошла ошибка при выходе',
        variant: 'destructive',
      });
    }
  };
  
  if (isAuthenticated) {
    return (
      <Button variant="outline" size="sm" onClick={handleSignOut}>
        <LogOut className="h-4 w-4 mr-2" />
        Выйти
      </Button>
    );
  }
  
  return (
    <div className="flex items-center gap-2">
      <Link to="/signin">
        <Button variant="outline" size="sm">
          <LogIn className="h-4 w-4 mr-2" />
          Войти
        </Button>
      </Link>
    </div>
  );
};
