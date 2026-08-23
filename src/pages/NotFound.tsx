import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useLanguage } from "@/i18n/LanguageContext";
import { Seo } from "@/components/common/Seo";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const [animateError, setAnimateError] = useState(false);

  useEffect(() => {
    // Эффект анимации для числа 404
    const timer = setTimeout(() => {
      setAnimateError(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Функция для возврата на предыдущую страницу
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-background to-muted/50">
      <Seo
        path="/404"
        title="Страница не найдена"
        description="Запрошенная страница не существует. Перейдите на главную страницу сайта ООО «Гранит»."
        noindex
      />
      <div className="container px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="border-4 border-destructive/40 shadow-xl overflow-hidden">
            <div className="p-6 sm:p-10">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className={`text-9xl font-display font-bold text-primary relative z-10 transition-all duration-1000 ${animateError ? 'scale-110' : 'scale-100'}`}>
                    404
                  </div>
                  <div className="absolute -top-4 -right-4 -left-4 -bottom-4 bg-destructive/10 rounded-full blur-3xl z-0"></div>
                </div>
              </div>
              
              <Alert variant="destructive" className="mb-6 border-destructive bg-destructive/10">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <AlertTitle className="text-destructive font-medium text-base">{t('notfound.alert.title')}</AlertTitle>
                <AlertDescription className="mt-2">
                  {t("notfound.path.prefix")}{" "}
                  <code className="px-2 py-1 rounded bg-background/80 font-mono text-sm border border-destructive/30 whitespace-nowrap">
                    {location.pathname}
                  </code>{" "}
                  {t("notfound.path.suffix")}
                </AlertDescription>
              </Alert>
              
              <div className="text-center mb-8">
                <h1 className="text-3xl font-display font-bold mb-4">
                  {t('notfound.heading')}
                </h1>
                
                <p className="text-muted-foreground mb-6">
                  {t('notfound.description.first')}
                  {' '}
                  {t('notfound.description.second')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-2 justify-center bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md transition-colors"
                >
                  <Home size={18} />
                  {t('notfound.actions.home')}
                </Link>
                
                <Button 
                  variant="outline"
                  onClick={goBack}
                  className="inline-flex items-center gap-2 justify-center"
                >
                  <ArrowLeft size={18} />
                  {t('notfound.actions.back')}
                </Button>
              </div>
            </div>
          </Card>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>{t('notfound.contact.prefix')} <Link to="/contact" className="text-primary hover:underline">{t('notfound.contact.link')}</Link>{t('notfound.contact.suffix')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
