
import React from 'react';
import { Factory, Hammer } from 'lucide-react';

const ProductionFacilitiesSection = () => {
  return (
    <div className="mb-20">
      <h2 className="section-title text-center mb-12 animate-on-scroll">
        Производственные мощности
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="glass-card-primary rounded-xl p-6 animate-on-scroll">
          <div className="flex items-center justify-center mb-4">
            <Factory className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center">Завод в Забайкалье</h3>
          <p className="text-muted-foreground mb-4">
            С 2024 года запущено производство компонентов ЭВВ мощностью 30 тыс. тонн/год, включая «холодную» эмульсию для экстремальных условий.
          </p>
        </div>
        
        <div className="glass-card-primary rounded-xl p-6 animate-on-scroll">
          <div className="flex items-center justify-center mb-4">
            <Factory className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center">Линия в Якутии</h3>
          <p className="text-muted-foreground mb-4">
            Выпуск эмульсионных патронов для заказчиков Дальнего Востока. Стратегическое расположение для минимизации логистических затрат.
          </p>
        </div>
        
        <div className="glass-card-primary rounded-xl p-6 animate-on-scroll">
          <div className="flex items-center justify-center mb-4">
            <Hammer className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center">Производство в Хабаровске</h3>
          <p className="text-muted-foreground mb-4">
            Патроны, сенсибилизированные микросферами (диаметры 32–90 мм), для автономного применения на удаленных объектах.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductionFacilitiesSection;
