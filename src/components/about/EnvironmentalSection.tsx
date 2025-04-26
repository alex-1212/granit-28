
import React from 'react';

const EnvironmentalSection = () => {
  return (
    <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 md:p-12 mb-20 animate-on-scroll">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title mb-6">
          Экологическая ответственность
        </h2>
        
        <p className="text-lg mb-8">
          Мы внедряем замкнутые циклы производства, минимизируя воздействие на окружающую среду и повышая эффективность использования ресурсов.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-glass dark:shadow-glass-dark border border-white/20 dark:border-white/10 rounded-xl p-6 text-left">
            <h3 className="text-xl font-semibold mb-4">Переработка мешкотары</h3>
            <p className="text-muted-foreground">
              Переработка мешкотары в полиэтиленовые рукава для зарядки скважин и бытовые нужды, снижающая отходы и повторно использующая материалы.
            </p>
          </div>
          
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-glass dark:shadow-glass-dark border border-white/20 dark:border-white/10 rounded-xl p-6 text-left">
            <h3 className="text-xl font-semibold mb-4">Безопасное хранение</h3>
            <p className="text-muted-foreground">
              Собственные склады в Забайкалье, Хабаровске и на Камчатке для безопасного хранения продукции с соблюдением всех экологических норм.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalSection;
