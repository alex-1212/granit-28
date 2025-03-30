
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BarChart, FileText } from 'lucide-react';

export const EvvSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="animate-on-scroll">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground font-medium mb-6">
          Собственное производство
        </span>
        
        <h2 className="section-title mb-6">
          Эмульсионные взрывчатые вещества (ЭВВ)
        </h2>
        
        <p className="text-lg mb-6">
          ООО «Гранит» производит высококачественные эмульсионные взрывчатые вещества на собственных заводах в Забайкалье и Хабаровске, а также на линии в Якутии.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <div className="mt-1 text-primary">
              <Shield size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Безопасность</h3>
              <p className="text-muted-foreground">ЭВВ обладают высокой степенью безопасности при транспортировке и хранении.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-primary">
              <BarChart size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Высокая эффективность</h3>
              <p className="text-muted-foreground">Обеспечивают оптимальные параметры взрыва и дробления породы.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 text-primary">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Экологичность</h3>
              <p className="text-muted-foreground">Минимальное количество токсичных газов при детонации.</p>
            </div>
          </div>
        </div>
        
        <Link to="/gallery" className="btn-primary inline-flex items-center gap-2">
          Смотреть галерею
          <ArrowRight size={18} />
        </Link>
      </div>
      
      <div className="relative animate-on-scroll">
        <div className="glass-card rounded-2xl overflow-hidden aspect-video">
          <img
            src="/images/evv-production.jpg"
            alt="Производство ЭВВ"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
          <p className="font-semibold">30 тыс. тонн/год</p>
          <p className="text-sm text-muted-foreground">мощность производства в Забайкалье</p>
        </div>
      </div>
    </div>
  );
};
