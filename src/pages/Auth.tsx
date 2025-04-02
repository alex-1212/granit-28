
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const Auth = () => {
  const { user, isLoading } = useAuth();
  const { t } = useLanguage();
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
      <div className="flex justify-end w-full mb-4">
        <ThemeToggle />
      </div>
      
      <Link to="/" className="flex items-center gap-3 mb-8">
        <img src="/lovable-uploads/88fff896-717b-4e5d-89b9-497557d68736.png" alt="Логотип Гранит" className="h-16 object-none" />
        <span className="font-display font-semibold text-white" style={{
          fontFamily: 'Spaceland Ten Oblique, cursive',
          fontSize: '28px',
          lineHeight: '1.75rem',
          textShadow: '0px 0px 7px #000000',
          letterSpacing: '1px',
          marginBottom: '-20px'
        }}>
          ООО «ГРАНИТ»
        </span>
      </Link>
      
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
