
import React from 'react';
import { AuthForm } from '@/components/auth/AuthForm';

const SignIn: React.FC = () => {
  return (
    <div className="container max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Вход в систему</h1>
      <AuthForm mode="signin" />
    </div>
  );
};

export default SignIn;
