
import React, { createContext, useContext, useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

// Admin credentials
// Note: In a real-world application, these would be stored securely on the server
const ADMIN_USERNAME = 'adminnews';
const ADMIN_PASSWORD_HASH = 'e2f2ae1a80f32dd9be7c5f7bc74fe44e'; // Хеш от "682449qwerty"

interface AuthContextType {
  isLoggedIn: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  // Check if user is already logged in on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('admin_auth');
    if (savedAuth) {
      try {
        const authData = JSON.parse(savedAuth);
        if (authData.timestamp && (Date.now() - authData.timestamp < 24 * 60 * 60 * 1000)) {
          setIsLoggedIn(true);
        } else {
          // Session expired
          localStorage.removeItem('admin_auth');
        }
      } catch (e) {
        localStorage.removeItem('admin_auth');
      }
    }
  }, []);
  
  const login = (username: string, password: string): boolean => {
    // Hash the password for comparison
    const passwordMd5 = CryptoJS.MD5(password).toString();
    
    if (username === ADMIN_USERNAME && passwordMd5 === ADMIN_PASSWORD_HASH) {
      setIsLoggedIn(true);
      // Save auth state with timestamp
      localStorage.setItem('admin_auth', JSON.stringify({ 
        timestamp: Date.now() 
      }));
      return true;
    }
    
    return false;
  };
  
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('admin_auth');
  };
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
