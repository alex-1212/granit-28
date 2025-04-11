import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Building, Leaf, MessageSquare } from 'lucide-react';
export const InitiationSystemsSection = () => {
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="animate-on-scroll">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
          Передовые решения
        </span>
        
        <h2 className="section-title mb-6">Завод по производству ВВ и линия патронирования</h2>
        
        <p className="text-lg mb-6">Высокотехнологичный завод по выпуску компонентов эмульсионных взрывчатых веществ (ЭВВ) и мобильная линия патронирования</p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Factory className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 my-[8px] text-zinc-100 text-lg">Полный производственный цикл</h3>
              <p className="text-muted-foreground">От синтеза компонентов ЭВВ до выпуска готовых эмульсионных боевиков (32 мм и 60 мм).</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Building className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 my-[8px] text-zinc-100 text-lg">Стратегическая логистика и инфраструктура</h3>
              <p className="text-muted-foreground">Склады в Забайкалье (с железнодорожным тупиком), Хабаровском крае (портовая зона) и на Камчатке (выход к морю).</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Leaf className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 my-[8px] text-zinc-100 text-lg">Экологичность и безопасность</h3>
              <p className="text-muted-foreground">Собственное производство полиэтиленового рукава из вторичного сырья, что снижает себестоимость и минимизирует отходы.</p>
            </div>
          </div>
        </div>
        
        <Link to="/factory" className="inline-flex btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          Подробнее
          <ArrowRight size={18} />
        </Link>
      </div>
      
      <div className="relative animate-on-scroll">
        <div className="glass-card rounded-2xl overflow-hidden aspect-video">
          <img alt="Системы инициирования" className="object-cover w-full h-full" src="/lovable-uploads/51b7a486-fd3b-4bba-b226-bc334ebe8e70.jpg" />
        </div>
        <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
          <p className="font-semibold">ООО «Гранит»</p>
          <p className="text-sm text-inherit">передовые решения, экологичность и стратегическая логистика</p>
        </div>
      </div>
    </div>;
};