
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const authFormSchema = z.object({
  email: z.string().email({ message: 'Пожалуйста, введите корректный email' }),
  password: z.string().min(6, { message: 'Пароль должен быть не менее 6 символов' }),
});

type AuthFormValues = z.infer<typeof authFormSchema>;

export const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  
  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: AuthFormValues) => {
    setIsLoading(true);
    
    try {
      if (isSignIn) {
        // Вход
        const { error } = await signIn(values.email, values.password);
        
        if (error) {
          toast({
            title: 'Ошибка входа',
            description: error.message,
            variant: 'destructive',
          });
          return;
        }
        
        toast({
          title: 'Успешный вход',
          description: 'Вы успешно вошли в систему',
        });
        navigate('/');
      } else {
        // Регистрация
        const { error } = await signUp(values.email, values.password);
        
        if (error) {
          toast({
            title: 'Ошибка регистрации',
            description: error.message,
            variant: 'destructive',
          });
          return;
        }
        
        toast({
          title: 'Регистрация успешна',
          description: 'Пожалуйста, проверьте свою почту для подтверждения',
        });
      }
    } catch (error) {
      toast({
        title: 'Произошла ошибка',
        description: 'Пожалуйста, попробуйте снова позже',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{isSignIn ? 'Вход в систему' : 'Регистрация'}</CardTitle>
        <CardDescription>
          {isSignIn ? 'Введите свои данные для входа' : 'Создайте аккаунт для доступа к системе'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading 
                ? 'Загрузка...' 
                : isSignIn 
                  ? 'Войти' 
                  : 'Зарегистрироваться'
              }
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button 
          variant="link" 
          onClick={() => setIsSignIn(!isSignIn)} 
          className="text-sm"
        >
          {isSignIn 
            ? 'Нет аккаунта? Зарегистрироваться' 
            : 'Уже есть аккаунт? Войти'
          }
        </Button>
      </CardFooter>
    </Card>
  );
};
