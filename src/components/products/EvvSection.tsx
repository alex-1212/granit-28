
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BarChart, FileText, Image } from 'lucide-react';
export const EvvSection = () => {
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
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
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Безопасность</h3>
              <p className="text-muted-foreground">ЭВВ обладают высокой степенью безопасности при транспортировке и хранении.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <BarChart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Высокая эффективность</h3>
              <p className="text-muted-foreground">Обеспечивают оптимальные параметры взрыва и дробления породы.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Экологичность</h3>
              <p className="text-muted-foreground">Минимальное количество токсичных газов при детонации.</p>
            </div>
          </div>
        </div>
        
        <Link to="/gallery" className="inline-flex btn-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          <Image size={18} />
          Смотреть галерею
          <ArrowRight size={16} />
        </Link>
      </div>
      
      <div className="relative animate-on-scroll">
        <div className="glass-card rounded-2xl overflow-hidden aspect-video">
          <img src="https://granit-svg.ru/img-granit/products1.webp" alt="Производство ЭВВ" className="object-cover w-full h-full" />
        </div>
        <div className="absolute -bottom-6 -right-6 glass-card-accent rounded-xl p-4 max-w-[200px]">
          <p className="font-semibold">30 тыс. тонн/год</p>
          <p className="text-sm text-inherit">мощность производства в Забайкалье</p>
        </div>
      </div>
    </div>;
};
