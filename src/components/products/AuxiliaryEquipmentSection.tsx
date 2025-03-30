
import React from 'react';

export const AuxiliaryEquipmentSection = () => {
  return (
    <>
      <h2 className="section-title text-center mb-12 animate-on-scroll">Вспомогательная техника</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-on-scroll">
        <div className="glass-card-primary rounded-xl overflow-hidden">
          <div className="aspect-video">
            <img
              src="https://s9.auto.drom.ru/photo/v2/Sa714jKuL9rAO_unE2pJT_VTam-dtv55Y_bXTdhF86Zl7_NwC1a4bME1cS7hiw0tHCtAZgXiVfzpv6fN/gen1200.jpg"
              alt="Бульдозеры SHANTUI"
              className="w-full h-full object-cover"
            />
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
            <img
              src="https://img.promportal.su/foto/good_fotos/3569/35690399/vezdehod-snegobolotohod-trekol-39294_foto_largest.jpg"
              alt="Вездеходы ТРЭКОЛ"
              className="w-full h-full object-cover"
            />
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
            <img
              src="https://uzst.ru/images/stories/contentimages/catalog/92-61144.jpg"
              alt="Грузовые автомобили"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Грузовые автомобили</h3>
            <p className="text-muted-foreground mb-4">
              Грузовые автомобили повышенной проходимости УРАЛ, ГАЗ, КАМАЗ для доставки оборудования, материалов и персонала на объекты.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
