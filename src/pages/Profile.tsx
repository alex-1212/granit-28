
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/i18n/LanguageContext';
import { Seo } from '@/components/common/Seo';

const Profile = () => {
  const { user } = useAuth();
  const { lang, t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <Seo
        path="/profile"
        title="Личный кабинет"
        description="Личный кабинет пользователя сайта ООО «Гранит»."
        noindex
      />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{t('profile.title')}</h1>
        
        <div className="glass-card p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">{t('profile.info.title')}</h2>
          
          <dl className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <dt className="font-medium text-muted-foreground">{t('profile.fields.email')}</dt>
              <dd className="sm:col-span-2">{user?.email}</dd>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <dt className="font-medium text-muted-foreground">{t('profile.fields.id')}</dt>
              <dd className="sm:col-span-2 break-all">{user?.id}</dd>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <dt className="font-medium text-muted-foreground">{t('profile.fields.lastSignIn')}</dt>
              <dd className="sm:col-span-2">
                {user?.last_sign_in_at 
                  ? new Date(user.last_sign_in_at).toLocaleString(lang === 'zh' ? 'zh-CN' : 'ru-RU') 
                  : t('profile.noData')}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Profile;
