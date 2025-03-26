
import React from 'react';
import { AuthForm } from '@/components/auth/AuthForm';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

const SignIn: React.FC = () => {
  return (
    <div className="container max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Вход в систему</h1>
      <div className="text-center mb-6">
        <p className="text-muted-foreground mb-4">Нет учетной записи?</p>
        <Link to="/signup">
          <Button variant="outline" className="mx-auto">
            <UserPlus className="h-4 w-4 mr-2" />
            Зарегистрироваться
          </Button>
        </Link>
      </div>
      <AuthForm mode="signin" />
    </div>
  );
};

export default SignIn;
