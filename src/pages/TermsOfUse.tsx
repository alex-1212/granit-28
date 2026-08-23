
import React from 'react';
import { Container } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ClipboardPen } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Seo } from '@/components/common/Seo';

const TermsOfUse = () => {
  const { lang, t } = useLanguage();
  return <>
      <Seo
        path="/terms-of-use"
        title={
          lang === 'zh'
            ? String(t('legal.terms.meta.title'))
            : 'Условия использования сайта — ООО «Гранит»'
        }
        description="Условия использования сайта ООО «Гранит»: права и обязанности пользователей, интеллектуальная собственность, обработка запросов."
        jsonLd={undefined}
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
          
          <h1 className="text-3xl font-bold mb-6 text-center">{t('legal.terms.title')}</h1>
          <div className="bg-card rounded-lg shadow-sm p-6 md:p-8 prose prose-gray dark:prose-invert max-w-none my-0 px-[5px] mx-[10px] py-[15px]">
            <p>
              {t('legal.terms.intro')}
            </p>
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold mt-8">{t('legal.terms.h1')}</h2>
            <p>{t('legal.terms.p1')}</p>
            <p>{t('legal.terms.p2')}</p>
            <p>{t('legal.terms.p3')}<Link to="/privacy-policy" className="text-primary hover:underline">{t('legal.privacy.linkText')}</Link>{t('legal.terms.p3b')}</p>
            
            <h2 className="text-xl font-bold mt-8">{t('legal.terms.h2')}</h2>
            <p>{t('legal.terms.p4')}</p>
            <ul className="list-disc pl-6 mt-4">
              <li>{t('legal.terms.li1')}</li>
              <li>{t('legal.terms.li2')}</li>
              <li>{t('legal.terms.li3')}</li>
            </ul>
            <p>{t('legal.terms.p5')}</p>
            <ul className="list-disc pl-6 mt-4">
              <li>{t('legal.terms.li4')}</li>
              <li>{t('legal.terms.li5')}<Link to="/privacy-policy" className="text-primary hover:underline">{t('legal.privacy.linkText')}</Link>{t('legal.terms.li5b')}</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8">{t('legal.terms.h3')}</h2>
            <p>{t('legal.terms.p6')}</p>
            <ul className="list-disc pl-6 mt-4">
              <li>{t('legal.terms.li6')}</li>
              <li>{t('legal.terms.li7')}</li>
            </ul>
            <p>{t('legal.terms.p7')}</p>
            <ul className="list-disc pl-6 mt-4">
              <li>{t('legal.terms.li8')}</li>
              <li>{t('legal.terms.li9')}</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8">{t('legal.terms.h4')}</h2>
            <p>{t('legal.terms.p8')}</p>
            <p>{t('legal.terms.p9')}</p>
            
            <h2 className="text-xl font-bold mt-8">{t('legal.terms.h5')}</h2>
            <p>{t('legal.terms.p10')}</p>
            <ul className="list-disc pl-6 mt-4">
              <li>{t('legal.terms.li10')}</li>
              <li>{t('legal.terms.li11')}</li>
            </ul>
            <p>{t('legal.terms.p11')}</p>
            
            <h2 className="text-xl font-bold mt-8">{t('legal.terms.h6')}</h2>
            <p>{t('legal.terms.p12')}</p>
            <p>{t('legal.terms.p13')}</p>
            
            <h2 className="text-xl font-bold mt-8">{t('legal.terms.h7')}</h2>
            <p>{t('legal.terms.p14')}</p>
            <ul className="list-disc pl-6 mt-4">
              <li>{t('legal.terms.li12')}</li>
              <li>{t('legal.terms.li13')}</li>
            </ul>
            
            <div className="text-muted-foreground text-sm mt-8 italic flex items-center gap-2">
              <ClipboardPen size={16} />
              {t('legal.lastUpdated')}
            </div>
          </div>
        </Container>
      </div>
    </>;
};
export default TermsOfUse;
