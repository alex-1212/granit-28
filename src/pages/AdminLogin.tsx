
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockKeyhole, User } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const success = login(username, password);
      
      if (success) {
        toast.success('Успешный вход в систему');
        navigate('/admnews');
      } else {
        toast.error('Неверное имя пользователя или пароль');
      }
      
      setIsLoading(false);
    }, 800); // Simulate network request
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Панель администратора</h1>
            <p className="text-muted-foreground mt-2">
              Пожалуйста, войдите для управления новостями
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium">
                  Имя пользователя
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Введите имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Пароль
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockKeyhole className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Проверка...' : 'Войти'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
