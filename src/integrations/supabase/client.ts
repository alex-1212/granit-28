
import { createClient } from '@supabase/supabase-js';

// Корректный URL и ключ API
const supabaseUrl = 'https://axpllivhrhdrnaomusfl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4cGxsaXZocmhkcm5hb211c2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1MTk0NTgsImV4cCI6MTk5NjA5NTQ1OH0.2Ppo9SQZ9QnSBx5DGcG5wnCpOyDk7LMn3NKCWQb5kpo';

// Создаем клиент Supabase с правильными настройками
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Функция для проверки аутентификации пользователя
export const isUserAuthenticated = async (): Promise<boolean> => {
  const { data } = await supabase.auth.getSession();
  return !!data.session;
};

// Функция для получения текущего пользователя
export const getCurrentUser = async () => {
  const { data } = await supabase.auth.getUser();
  return data.user;
};

// Функции для авторизации
export const signIn = async (email: string, password: string) => {
  console.log('Попытка входа с данными:', { email, password: '***' });
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) {
    console.error('Ошибка при входе:', error);
    throw error;
  }
  console.log('Успешный вход:', data);
  return data;
};

export const signUp = async (email: string, password: string) => {
  console.log('Попытка регистрации с данными:', { email, password: '***' });
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  if (error) {
    console.error('Ошибка при регистрации:', error);
    throw error;
  }
  console.log('Успешная регистрация:', data);
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const resetPassword = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });
  
  if (error) throw error;
};
