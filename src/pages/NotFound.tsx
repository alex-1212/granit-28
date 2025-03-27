
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [count, setCount] = useState(5);
  const [animateError, setAnimateError] = useState(false);

  useEffect(() => {
    document.title = "Страница не найдена — ООО «Гранит»";
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Эффект анимации для числа 404
    setTimeout(() => {
      setAnimateError(true);
    }, 300);

    // Уведомление о 404 ошибке
    toast({
      title: "Страница не найдена",
      description: `Путь "${location.pathname}" не существует на сайте`,
      variant: "destructive",
    });

    // Демонстрационный счетчик для автоматического перенаправления
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // Переход на главную после окончания счетчика
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [location.pathname, toast, navigate]);

  // Функция для возврата на предыдущую страницу
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-background to-muted/50">
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
                <AlertTitle className="text-destructive font-medium text-base">Страница не найдена</AlertTitle>
                <AlertDescription className="mt-2">
                  Запрашиваемый путь{" "}
                  <code className="px-2 py-1 rounded bg-background/80 font-mono text-sm border border-destructive/30 whitespace-nowrap">
                    {location.pathname}
                  </code>{" "}
                  не существует.
                </AlertDescription>
              </Alert>
              
              <div className="text-center mb-8">
                <h1 className="text-3xl font-display font-bold mb-4">
                  Упс! Кажется, вы заблудились
                </h1>
                
                <p className="text-muted-foreground mb-6">
                  Запрашиваемая страница была перемещена, удалена или никогда не существовала.
                  Пожалуйста, вернитесь на главную страницу.
                </p>
                
                {count > 0 && (
                  <p className="text-sm text-muted-foreground animate-pulse">
                    Автоматический переход на главную через {count} сек...
                  </p>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-2 justify-center bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md transition-colors"
                >
                  <Home size={18} />
                  На главную
                </Link>
                
                <Button 
                  variant="outline"
                  onClick={goBack}
                  className="inline-flex items-center gap-2 justify-center"
                >
                  <ArrowLeft size={18} />
                  Назад
                </Button>
              </div>
            </div>
          </Card>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Если вы считаете, что это ошибка, пожалуйста, <Link to="/contact" className="text-primary hover:underline">свяжитесь с нами</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
