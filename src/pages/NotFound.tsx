
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Страница не найдена — ООО «Гранит»";
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="container px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="text-primary mb-6">
            <span className="text-9xl font-display font-bold">404</span>
          </div>
          
          <h1 className="text-3xl font-display font-bold mb-4">
            Страница не найдена
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Запрашиваемая страница не существует или была перемещена. Пожалуйста, вернитесь на главную страницу или воспользуйтесь меню навигации.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary inline-flex items-center gap-2 justify-center">
              <Home size={18} />
              На главную
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="btn-outline inline-flex items-center gap-2 justify-center"
            >
              <ArrowLeft size={18} />
              Назад
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
