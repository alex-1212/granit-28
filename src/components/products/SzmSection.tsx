
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Settings, Factory, Image } from 'lucide-react';
export const SzmSection = () => {
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="order-2 lg:order-1 relative animate-on-scroll">
        <div className="glass-card rounded-2xl overflow-hidden aspect-video">
          <img src="https://granit-svg.ru/img-granit/galery-1.webp" alt="Смесительно-зарядные машины" className="object-cover w-full h-full" />
        </div>
        <div className="absolute -bottom-6 -left-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
          <p className="font-semibold">Высокая мобильность</p>
          <p className="text-sm text-inherit">работа в любых климатических условиях</p>
        </div>
      </div>
      
      <div className="order-1 lg:order-2 animate-on-scroll">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
          Передовая техника
        </span>
        
        <h2 className="section-title mb-6">
          Смесительно-зарядные машины
        </h2>
        
        <p className="text-lg mb-6">
          В нашем распоряжении современные смесительно-зарядные машины (СЗМ) от НИПИГОРМАШ и мобильные установки ПСЗУ для удалённых объектов.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Truck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Мобильность</h3>
              <p className="text-muted-foreground">Возможность производить ЭВВ непосредственно на месте проведения работ.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Гибкость настройки</h3>
              <p className="text-muted-foreground">Точная настройка состава ЭВВ под конкретные геологические условия.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Factory className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Автономность</h3>
              <p className="text-muted-foreground">Полная независимость от внешней инфраструктуры при работе на удаленных объектах.</p>
            </div>
          </div>
        </div>
        
        <Link to="/gallery" className="inline-flex btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          <Image size={18} />
          Смотреть галерею
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>;
};
