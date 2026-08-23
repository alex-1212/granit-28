
import React from 'react';
import { Container } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ClipboardPen } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Seo } from '@/components/common/Seo';

const PrivacyPolicy = () => {
  const { lang, t } = useLanguage();
  return (
    <>
      <Seo
        path="/privacy-policy"
        title={
          lang === 'zh'
            ? String(t('legal.privacy.meta.title'))
            : 'Политика конфиденциальности — ООО «Гранит»'
        }
        description="Политика конфиденциальности ООО «Гранит»: обработка и защита персональных данных пользователей сайта granit-svg.ru."
      />
      
      <div className="py-12 bg-muted/30">
        <Container>
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-4 flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                <ArrowLeft size={16} />
                {t('legal.backHome')}
              </Button>
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-6 text-center">{t('legal.privacy.title')}</h1>
          
          <div className="bg-card rounded-lg shadow-sm p-6 md:p-8 prose prose-gray dark:prose-invert max-w-none">
            <p>
              {t('legal.privacy.intro')}
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mt-8">{t('legal.privacy.h1')}</h2>
            <p>{t('legal.privacy.p1')}</p>
            <p>{t('legal.privacy.p2')}</p>
            <p>{t('legal.privacy.p3')}</p>
            
            <h2 className="text-xl font-bold mt-8">{t('legal.privacy.h2')}</h2>
            <p>{t('legal.privacy.p4')}</p>
            <p>{t('legal.privacy.p5')}</p>
            <ul className="list-disc pl-6 mt-4">
              <li>{t('legal.privacy.li1')}</li>
              <li>{t('legal.privacy.li2')}</li>
              <li>{t('legal.privacy.li3')}</li>
              <li>{t('legal.privacy.li4')}</li>
              <li>{t('legal.privacy.li5')}</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8">{t('legal.privacy.h3')}</h2>
            <p>{t('legal.privacy.p6')}</p>
            <ul className="list-disc pl-6 mt-4">
              <li>{t('legal.privacy.li6')}</li>
              <li>{t('legal.privacy.li7')}</li>
              <li>{t('legal.privacy.li8')}</li>
              <li>{t('legal.privacy.li9')}</li>
              <li>{t('legal.privacy.li10')}</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8">{t('legal.privacy.h4')}</h2>
            <p>{t('legal.privacy.p7')}</p>
            <p>{t('legal.privacy.p8')}</p>
            
            <h2 className="text-xl font-bold mt-8">{t('legal.privacy.h5')}</h2>
            <p>{t('legal.privacy.p9')}</p>
            <ul className="list-disc pl-6 mt-4">
              <li>{t('legal.privacy.li11')}</li>
              <li>{t('legal.privacy.li12')}</li>
            </ul>
            <p>{t('legal.privacy.p10')}</p>
            <ul className="list-disc pl-6 mt-4">
              <li>{t('legal.privacy.li13')}</li>
              <li>{t('legal.privacy.li14')}</li>
              <li>{t('legal.privacy.li15')}</li>
              <li>{t('legal.privacy.li16')}</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8">{t('legal.privacy.h6')}</h2>
            <p>{t('legal.privacy.p11')}</p>
            <p>{t('legal.privacy.p12')}</p>
            <p>{t('legal.privacy.p13')}</p>
            <p>{t('legal.privacy.p14')}</p>
            
            <div className="text-muted-foreground text-sm mt-8 italic flex items-center gap-2">
              <ClipboardPen size={16} />
              {t('legal.lastUpdated')}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PrivacyPolicy;
