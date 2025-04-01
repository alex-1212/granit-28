
import React from 'react';
import { 
  Drill, Factory, Shield, Ruler, Hammer, Lightbulb, Wrench, 
  Pickaxe, Shovel, Construction, Building, Compass, Mountain, 
  Package, Earth
} from 'lucide-react';

export const ServicesSection = () => {
  // Все иконки для буровых работ
  const drillingIcons = [
    { icon: <Drill size={28} />, name: "Буровая установка" },
    { icon: <Hammer size={28} />, name: "Ударные работы" },
    { icon: <Wrench size={28} />, name: "Монтаж оборудования" },
    { icon: <Pickaxe size={28} />, name: "Проходческие работы" },
    { icon: <Shovel size={28} />, name: "Земляные работы" },
    { icon: <Construction size={28} />, name: "Строительство" },
    { icon: <Building size={28} />, name: "Возведение объектов" },
    { icon: <Compass size={28} />, name: "Разведка месторождений" },
    { icon: <Mountain size={28} />, name: "Горные работы" },
    { icon: <Package size={28} />, name: "Инструменты и спецтехника" }
  ];

  return (
    <div className="mb-20 animate-on-scroll">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
          Комплексный подход
        </span>
        
        <h2 className="section-title mb-6">
          Услуги компании
        </h2>
        
        <p className="text-lg mx-auto max-w-3xl">
          Предоставляем полный спектр услуг в области буровзрывных работ, от проектирования до реализации проектов любой сложности
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 10 карточек для буровых работ с разными иконками */}
        {drillingIcons.map((item, index) => (
          <div key={index} className="glass-card p-6 rounded-xl animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: `${index * 50}ms` }}>
            <div className="mb-4 text-primary">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
            <p className="text-muted-foreground mb-4">
              Профессиональное выполнение {item.name.toLowerCase()} с использованием современных технологий и оборудования в любых условиях.
            </p>
          </div>
        ))}
        
        <div className="glass-card p-6 rounded-xl animate-on-scroll animate-delay-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="mb-4 text-primary">
            <Factory size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Взрывные работы</h3>
          <p className="text-muted-foreground mb-4">
            Выполняем взрывные работы с применением ЭВВ собственного производства на различных объектах.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl animate-on-scroll animate-delay-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="mb-4 text-primary">
            <Shield size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Специальные взрывные работы</h3>
          <p className="text-muted-foreground mb-4">
            Выполняем специальные взрывные работы повышенной сложности в труднодоступных районах.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl animate-on-scroll animate-delay-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="mb-4 text-primary">
            <Ruler size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Маркшейдерские работы</h3>
          <p className="text-muted-foreground mb-4">
            Проводим профессиональные маркшейдерские работы для обеспечения точности выполнения проектов.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl animate-on-scroll animate-delay-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="mb-4 text-primary">
            <Earth size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Инженерно-технический консалтинг</h3>
          <p className="text-muted-foreground mb-4">
            Профессиональные решения для оптимизации буровзрывных, маркшейдерских и производственных процессов.
          </p>
        </div>
      </div>
    </div>
  );
};
