
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Session, User } from '@supabase/supabase-js';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  session: Session | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Константы для аутентификации
const ADMIN_EMAIL = 'adminnews@granit.com';
const ADMIN_PASSWORD = '682449qwerty';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [manualAuth, setManualAuth] = useState<boolean>(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Инициализация аутентификации при загрузке
  useEffect(() => {
    // Устанавливаем слушатель изменений состояния аутентификации
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state change:', event, session);
        setSession(session);
        setUser(session?.user ?? null);
        setIsAuthenticated(!!session);
      }
    );

    // Проверяем наличие сессии при загрузке
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Initial session check:', session);
      setSession(session);
      setUser(session?.user ?? null);
      setIsAuthenticated(!!session);
    });

    // Проверяем localStorage на наличие ручной авторизации
    const isManualLoggedIn = localStorage.getItem('manual_auth') === 'true';
    if (isManualLoggedIn) {
      console.log('Manual auth found in localStorage');
      const mockUser = { email: ADMIN_EMAIL, id: '1', user_metadata: {} } as User;
      setUser(mockUser);
      setIsAuthenticated(true);
      setManualAuth(true);
    }

    return () => subscription.unsubscribe();
  }, []);

  // Функция для входа
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      console.log('Attempting login with:', email, password);
      
      // Проверяем, что используются правильные учетные данные администратора
      if (email !== ADMIN_EMAIL) {
        console.log('Incorrect email');
        return false;
      }

      // Если логин и пароль совпадают с заданными константами
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        console.log('Manual authentication successful');
        
        // Создаем JWT-подобный токен вручную (упрощенно, для имитации)
        const mockToken = {
          access_token: 'manual_auth_token',
          token_type: 'bearer', 
          expires_in: 3600,
          refresh_token: 'manual_refresh_token',
          user: {
            id: '1',
            email: ADMIN_EMAIL,
            user_metadata: {},
            app_metadata: { provider: 'manual', role: 'authenticated' },
          }
        };
        
        // Устанавливаем состояние аутентификации вручную
        const mockUser = { email: ADMIN_EMAIL, id: '1', user_metadata: {} } as User;
        setUser(mockUser);
        setIsAuthenticated(true);
        setManualAuth(true);
        
        // Сохраняем статус ручной авторизации в localStorage
        localStorage.setItem('manual_auth', 'true');
        localStorage.setItem('manual_auth_user', JSON.stringify(mockUser));
        
        // Имитируем вручную сессию для Supabase
        await supabase.auth.setSession({
          access_token: mockToken.access_token,
          refresh_token: mockToken.refresh_token,
        });
        
        return true;
      }

      // Если все еще здесь, пробуем Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Error signing in:', error);
        return false;
      }

      console.log('Login successful:', data);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  // Функция для выхода
  const logout = async (): Promise<void> => {
    try {
      // Если использовалась ручная аутентификация
      if (manualAuth) {
        setUser(null);
        setIsAuthenticated(false);
        setManualAuth(false);
        localStorage.removeItem('manual_auth');
        localStorage.removeItem('manual_auth_user');
        navigate('/admin-login');
        return;
      }
      
      // Стандартный выход через Supabase
      await supabase.auth.signOut();
      navigate('/admin-login');
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: "Ошибка выхода",
        description: "Произошла ошибка при выходе из системы",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, session, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
