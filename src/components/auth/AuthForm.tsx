
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
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      console.log(`Выполняется ${mode === 'signin' ? 'вход' : 'регистрация'} для ${email}`);
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
      console.error('Ошибка авторизации:', error);
      const errorMessage = error?.message || 'Произошла ошибка при авторизации';
      setErrorMsg(errorMessage);
      toast({
        title: 'Ошибка',
        description: errorMessage,
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
          {errorMsg && (
            <div className="text-destructive text-sm mt-2">
              {errorMsg}
            </div>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading
              ? 'Загрузка...'
              : mode === 'signin'
              ? 'Войти'
              : 'Зарегистрироваться'}
          </Button>
        </form>
      </CardContent>
      {mode === 'signup' && (
        <CardFooter className="flex justify-center">
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
        </CardFooter>
      )}
    </Card>
  );
};
