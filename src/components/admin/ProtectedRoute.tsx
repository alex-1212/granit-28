
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error('Пожалуйста, авторизуйтесь для доступа к панели администратора');
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    return <Navigate to="/admin-login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
