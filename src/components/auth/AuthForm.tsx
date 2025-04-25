import { useState, useEffect } from 'react';
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
import CaptchaField from '@/components/contact/CaptchaField';
import { Captcha } from '@/components/contact/CaptchaComponent';
const authFormSchema = z.object({
  email: z.string().email({
    message: 'Пожалуйста, введите корректный email'
  }),
  password: z.string().min(6, {
    message: 'Пароль должен быть не менее 6 символов'
  }),
  // Добавим поле для капчи только для ручной валидации, чтобы работа схемы RHF не мешала custom state
  captcha: z.string().optional()
});
type AuthFormValues = z.infer<typeof authFormSchema>;
export const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    signIn
  } = useAuth();
  const navigate = useNavigate();

  // Капча
  const [captcha, setCaptcha] = useState<Captcha | null>(null);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState<string | undefined>();

  // Генерируем математическую капчу
  const generateCaptcha = () => {
    const operations: ('+' | '-' | '*')[] = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    if (operation === '-') {
      num1 = Math.floor(Math.random() * 10) + 10;
      num2 = Math.floor(Math.random() * num1);
    }
    let solution = 0;
    switch (operation) {
      case '+':
        solution = num1 + num2;
        break;
      case '-':
        solution = num1 - num2;
        break;
      case '*':
        solution = num1 * num2;
        break;
    }
    setCaptcha({
      num1,
      num2,
      operation,
      solution
    });
    setCaptchaInput('');
    setCaptchaError(undefined);
  };
  useEffect(() => {
    generateCaptcha();
  }, []);
  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  // Дополнительная ручная валидация капчи
  const validateCaptcha = (): boolean => {
    if (!captchaInput.trim()) {
      setCaptchaError('Пожалуйста, решите капчу');
      return false;
    }
    if (!captcha) {
      setCaptchaError('Капча не загружена');
      return false;
    }
    if (parseInt(captchaInput, 10) !== captcha.solution) {
      setCaptchaError('Неверный ответ, попробуйте еще раз');
      generateCaptcha();
      return false;
    }
    setCaptchaError(undefined);
    return true;
  };
  const onSubmit = async (values: AuthFormValues) => {
    setIsLoading(true);

    // Проверяем капчу перед тем как авторизовать пользователя
    if (!validateCaptcha()) {
      setIsLoading(false);
      return;
    }
    try {
      const {
        error
      } = await signIn(values.email, values.password);
      if (error) {
        toast({
          title: 'Ошибка входа',
          description: error.message,
          variant: 'destructive'
        });
        generateCaptcha();
        return;
      }
      toast({
        title: 'Успешный вход',
        description: 'Вы успешно вошли в систему'
      });
      navigate('/');
    } catch (error) {
      toast({
        title: 'Произошла ошибка',
        description: 'Пожалуйста, попробуйте снова позже',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Вход в систему</CardTitle>
        <CardDescription>Введите свои данные для входа</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="email" render={({
            field
          }) => <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage className="font-normal text-red-600 text-sm" />
                </FormItem>} />
            <FormField control={form.control} name="password" render={({
            field
          }) => <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600 my-[9px] font-normal text-sm" />
                </FormItem>} />
            {/* Добавим капчу */}
            <CaptchaField captcha={captcha} captchaInput={captchaInput} setCaptchaInput={setCaptchaInput} generateCaptcha={generateCaptcha} error={captchaError} />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Загрузка...' : 'Войти'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>;
};