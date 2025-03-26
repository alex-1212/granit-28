
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  
  useEffect(() => {
    document.title = 'Профиль — ООО «Гранит»';
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Личный кабинет</h1>
        
        <div className="glass-card p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Информация пользователя</h2>
          
          <dl className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <dt className="font-medium text-muted-foreground">Email:</dt>
              <dd className="sm:col-span-2">{user?.email}</dd>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <dt className="font-medium text-muted-foreground">ID пользователя:</dt>
              <dd className="sm:col-span-2 break-all">{user?.id}</dd>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <dt className="font-medium text-muted-foreground">Последний вход:</dt>
              <dd className="sm:col-span-2">
                {user?.last_sign_in_at 
                  ? new Date(user.last_sign_in_at).toLocaleString('ru-RU') 
                  : 'Информация отсутствует'}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Profile;
