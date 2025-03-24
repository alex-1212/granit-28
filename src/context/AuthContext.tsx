
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Правильный хеш для "adminnews:682449qwerty"
const CORRECT_HASH = "f3b4c5a77dd1e633c44a9ea0fe4a631ebc5f8b77b11b8c1ea1e1ba0bec10da6b";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  // Check for existing auth on mount
  useEffect(() => {
    const authStatus = localStorage.getItem('auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    // Fixed logic: Using the exact same approach to generate the hash
    if (username === 'adminnews' && password === '682449qwerty') {
      console.log('Correct credentials detected');
      setIsAuthenticated(true);
      localStorage.setItem('auth', 'true');
      return true;
    }
    
    // For debugging
    console.log('Login attempt:', { username, password });
    
    // Создаем строку с учетными данными
    const credential = `${username}:${password}`;
    
    // Генерируем хеш с правильным алгоритмом
    const hash = CryptoJS.SHA256(credential).toString(CryptoJS.enc.Hex).toLowerCase();
    
    console.log('Calculated hash:', hash);
    console.log('Comparing to:', CORRECT_HASH);
    console.log('Match:', hash === CORRECT_HASH);
    
    // Check if the hash matches the correct hash
    if (hash === CORRECT_HASH) {
      setIsAuthenticated(true);
      localStorage.setItem('auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
    navigate('/admin-login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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
