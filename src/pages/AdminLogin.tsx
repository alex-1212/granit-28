
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('adminnews@granit.com');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Если пользователь уже аутентифицирован, перенаправляем на страницу админки
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admnews');
    }
  }, [isAuthenticated, navigate]);

  // Регистрация администратора (запускается только один раз при первой настройке)
  const registerAdmin = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: 'adminnews@granit.com',
        password: '682449qwerty',
      });
      
      if (error) {
        console.error('Error registering admin:', error);
      } else {
        console.log('Admin registration successful:', data);
      }
    } catch (error) {
      console.error('Admin registration error:', error);
    }
  };

  // Запускаем регистрацию администратора один раз
  useEffect(() => {
    registerAdmin();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log('Attempting login with:', email, password);
    
    try {
      // Авторизация через Supabase
      const success = await login(email, password);
      
      if (success) {
        toast({
          title: "Вход выполнен",
          description: "Вы успешно вошли в систему",
        });
        navigate('/admnews');
      } else {
        toast({
          title: "Ошибка входа",
          description: "Неверный email или пароль",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Ошибка входа",
        description: "Произошла ошибка при входе в систему",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-[80vh] px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Вход в панель администратора</CardTitle>
          <CardDescription>
            Для доступа к управлению новостями введите учетные данные администратора
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled
              />
              <p className="text-xs text-muted-foreground">
                Используйте предустановленный email администратора
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Выполняется вход..." : "Войти"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AdminLogin;
