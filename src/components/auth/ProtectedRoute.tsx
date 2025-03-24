
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '@/services/authService';
import { useToast } from '@/hooks/use-toast';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { toast } = useToast();
  const location = useLocation();
  
  const authenticated = isAuthenticated();
  
  useEffect(() => {
    if (!authenticated) {
      toast({
        title: "Доступ запрещен",
        description: "Пожалуйста, войдите в систему",
        variant: "destructive",
      });
    }
  }, [authenticated, toast]);
  
  if (!authenticated) {
    return <Navigate to="/admin-login" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
};
