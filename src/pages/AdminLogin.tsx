
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { login, isAuthenticated } from '@/services/authService';
import { Lock } from 'lucide-react';

const loginSchema = z.object({
  username: z.string().min(1, { message: 'Введите имя пользователя' }),
  password: z.string().min(1, { message: 'Введите пароль' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const AdminLogin: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  
  useEffect(() => {
    // Redirect to admin page if already authenticated
    if (isAuthenticated()) {
      navigate('/admnews');
    }
  }, [navigate]);
  
  const onSubmit = (values: LoginFormValues) => {
    setIsSubmitting(true);
    
    const success = login(values.username, values.password);
    
    if (success) {
      toast({
        title: "Успешный вход",
        description: "Вы вошли в панель администратора",
      });
      navigate('/admnews');
    } else {
      toast({
        title: "Ошибка авторизации",
        description: "Неверное имя пользователя или пароль",
        variant: "destructive",
      });
      form.reset();
    }
    
    setIsSubmitting(false);
  };
  
  return (
    <>
      <Helmet>
        <title>Вход в панель администратора | ООО «Гранит»</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 flex justify-center items-center">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Панель администратора</CardTitle>
            <CardDescription className="text-center">
              Введите учетные данные для доступа
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Имя пользователя</FormLabel>
                      <FormControl>
                        <Input placeholder="Введите имя пользователя" {...field} />
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
                        <Input type="password" placeholder="Введите пароль" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Вход...' : 'Войти'}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-center text-sm text-muted-foreground flex items-center">
              <Lock className="h-4 w-4 mr-1" />
              Защищенный доступ
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default AdminLogin;
