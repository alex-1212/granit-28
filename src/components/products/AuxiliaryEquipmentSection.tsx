import React from 'react';
export const AuxiliaryEquipmentSection = () => {
  return <>
      <h2 className="section-title text-center mb-12 animate-on-scroll">Вспомогательная техника</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-on-scroll">
        <div className="glass-card-primary rounded-xl overflow-hidden">
          <div className="aspect-video">
            <img alt="Бульдозеры SHANTUI" className="w-full h-full object-cover" src="/lovable-uploads/916e92b1-8419-4512-ba1b-037d5295ac22.jpg" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Бульдозеры SHANTUI</h3>
            <p className="text-muted-foreground mb-4">
              Мощные бульдозеры с двигателем Cummins (360 л.с.) для работы в сложных условиях и подготовки площадок для буровых работ.
            </p>
          </div>
        </div>
        
        <div className="glass-card-primary rounded-xl overflow-hidden">
          <div className="aspect-video">
            <img alt="Вездеходы ТРЭКОЛ" className="w-full h-full object-cover" src="/lovable-uploads/ef5b9ab3-ba70-4ced-8a76-46436330863f.jpg" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Вездеходы ТРЭКОЛ</h3>
            <p className="text-muted-foreground mb-4">
              Вездеходы ТРЭКОЛ 39294 с бескамерными шинами для работы в среднегорье и транспортировки персонала в труднодоступные районы.
            </p>
          </div>
        </div>
        
        <div className="glass-card-primary rounded-xl overflow-hidden">
          <div className="aspect-video">
            <img src="https://granit-svg.ru/img-granit/tral.webp" alt="Грузовые автомобили" className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Грузовые автомобили</h3>
            <p className="text-muted-foreground mb-4">
              Грузовые автомобили повышенной проходимости УРАЛ, ГАЗ, КАМАЗ для доставки оборудования, материалов и персонала на объекты.
            </p>
          </div>
        </div>
      </div>
    </>;
};