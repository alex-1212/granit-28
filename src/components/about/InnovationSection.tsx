
import React from 'react';
import { Building, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const InnovationSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="order-2 lg:order-1 animate-on-scroll">
        <img 
          alt="Инновации и технологии" 
          className="w-full rounded-2xl glass-card overflow-hidden" 
          src="/lovable-uploads/d12d2cee-c48a-46f8-bda1-e1176d299cdd.jpg" 
        />
      </div>
      
      <div className="order-1 lg:order-2 animate-on-scroll">
        <h2 className="section-title mb-6">
          Инновации и технологии
        </h2>
        
        <div className="space-y-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
              <Building className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 my-[8px] text-zinc-100">
                Мобильные установки
              </h3>
              <p className="text-muted-foreground">
                Внедрение мобильных смесительно-зарядных установок (ПСЗУ) для работы в удалённых районах, включая строительство БАМ-2 и газопровод Сила Сибири-2.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 my-[8px] text-zinc-100">
                Российское оборудование
              </h3>
              <p className="text-muted-foreground">
                Переход на российское оборудование: контроллеры «Овен», уровнемеры «Титан», расходомеры «Эмисс» обеспечивают независимость от импортных поставок.
              </p>
            </div>
          </div>
        </div>
        
        <Link to="/products" className="btn-primary inline-flex items-center gap-2">
          Все технологии
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default InnovationSection;
