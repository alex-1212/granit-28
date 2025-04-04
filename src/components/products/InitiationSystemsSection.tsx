
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Leaf, MessageSquare } from 'lucide-react';
export const InitiationSystemsSection = () => {
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="animate-on-scroll">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
          Передовые решения
        </span>
        
        <h2 className="section-title mb-6">
          Системы инициирования
        </h2>
        
        <p className="text-lg mb-6">
          Поставляем передовые системы инициирования для безопасного и эффективного проведения взрывных работ в любых условиях.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Точность синхронизации</h3>
              <p className="text-muted-foreground">Микросекундная точность для эффективных взрывов и оптимального дробления породы.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Высокая безопасность</h3>
              <p className="text-muted-foreground">Защита от электромагнитных помех и несанкционированного подрыва.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Leaf className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Экологичность</h3>
              <p className="text-muted-foreground">Снижение вредного воздействия на окружающую среду при проведении взрывных работ.</p>
            </div>
          </div>
        </div>
        
        <Link to="/contact" className="inline-flex btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          <MessageSquare size={18} />
          Запросить консультацию
          <ArrowRight size={16} />
        </Link>
      </div>
      
      <div className="relative animate-on-scroll">
        <div className="glass-card rounded-2xl overflow-hidden aspect-video">
          <img src="https://granit-svg.ru/img-granit/system-ii.webp" alt="Системы инициирования" className="object-cover w-full h-full" />
        </div>
        <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
          <p className="font-semibold">Электронная точность</p>
          <p className="text-sm text-inherit">для идеального результата</p>
        </div>
      </div>
    </div>;
};
