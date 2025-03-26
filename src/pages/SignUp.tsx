
import React from 'react';
import { AuthForm } from '@/components/auth/AuthForm';

const SignUp: React.FC = () => {
  return (
    <div className="container max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Регистрация</h1>
      <AuthForm mode="signup" />
    </div>
  );
};

export default SignUp;
