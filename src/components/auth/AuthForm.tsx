
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

type AuthFormProps = {
  mode: 'signin' | 'signup';
};

export const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'signin') {
        await signIn(email, password);
        toast({
          title: 'Успешный вход',
          description: 'Вы успешно вошли в систему',
          variant: 'default',
        });
      } else {
        await signUp(email, password);
        toast({
          title: 'Регистрация успешна',
          description: 'Пожалуйста, проверьте свою электронную почту для подтверждения',
          variant: 'default',
        });
      }
      navigate('/');
    } catch (error: any) {
      toast({
        title: 'Ошибка',
        description: error?.message || 'Произошла ошибка при авторизации',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{mode === 'signin' ? 'Вход' : 'Регистрация'}</CardTitle>
        <CardDescription>
          {mode === 'signin'
            ? 'Введите свои данные для входа'
            : 'Создайте новую учетную запись'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@mail.ru"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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
          <Button type="submit" className="w-full" disabled={loading}>
            {loading
              ? 'Загрузка...'
              : mode === 'signin'
              ? 'Войти'
              : 'Зарегистрироваться'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        {mode === 'signin' ? (
          <p className="text-sm text-center">
            Нет учетной записи?{' '}
            <Button
              variant="link"
              className="p-0"
              onClick={() => navigate('/signup')}
            >
              Зарегистрироваться
            </Button>
          </p>
        ) : (
          <p className="text-sm text-center">
            Уже есть учетная запись?{' '}
            <Button
              variant="link"
              className="p-0"
              onClick={() => navigate('/signin')}
            >
              Войти
            </Button>
          </p>
        )}
      </CardFooter>
    </Card>
  );
};
