
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import { useAuth } from '@/context/AuthContext';

const Auth = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Вход — ООО «Гранит»';
    
    // Если пользователь уже авторизован, перенаправляем на главную
    if (!isLoading && user) {
      navigate('/');
    }
  }, [user, isLoading, navigate]);

  // Если загрузка или пользователь авторизован, не показываем форму
  if (isLoading || user) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <div className="max-w-md w-full mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Добро пожаловать</h1>
        <p className="text-muted-foreground">
          Войдите или зарегистрируйтесь для полного доступа к системе
        </p>
      </div>
      <AuthForm />
    </div>
  );
};

export default Auth;
