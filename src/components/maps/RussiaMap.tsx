
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export interface RegionData {
  id: string;
  name: string;
  path: string;
}

// Данные о регионах России (частичные данные для примера)
// В полной реализации должны быть все регионы
const regions: RegionData[] = [
  { id: 'msk', name: 'Москва', path: 'M 379 195 L 382 193 L 385 196 L 384 199 L 380 199 Z' },
  { id: 'spb', name: 'Санкт-Петербург', path: 'M 327 146 L 330 145 L 331 148 L 329 150 L 327 148 Z' },
  { id: 'kdr', name: 'Краснодарский край', path: 'M 417 253 L 429 249 L 438 258 L 428 263 L 420 260 Z' },
  { id: 'krm', name: 'Крым', path: 'M 424 271 L 431 268 L 438 273 L 435 278 L 426 277 Z' },
  { id: 'svr', name: 'Свердловская область', path: 'M 520 170 L 535 168 L 542 185 L 529 193 L 518 182 Z' },
  { id: 'nnv', name: 'Нижегородская область', path: 'M 438 178 L 448 175 L 453 185 L 445 190 L 437 185 Z' },
  { id: 'kzn', name: 'Татарстан', path: 'M 458 190 L 470 187 L 475 195 L 468 200 L 459 197 Z' },
  { id: 'vgg', name: 'Волгоградская область', path: 'M 458 230 L 472 225 L 480 235 L 470 242 L 460 238 Z' },
  { id: 'rnd', name: 'Ростовская область', path: 'M 445 242 L 458 238 L 465 245 L 455 252 L 445 248 Z' },
  { id: 'krk', name: 'Красноярский край', path: 'M 580 140 L 620 130 L 650 180 L 600 200 L 570 170 Z' },
  { id: 'irk', name: 'Иркутская область', path: 'M 650 180 L 670 175 L 685 190 L 670 200 L 655 195 Z' },
  { id: 'khb', name: 'Хабаровский край', path: 'M 750 200 L 770 190 L 785 210 L 770 220 L 755 215 Z' },
  { id: 'prm', name: 'Приморский край', path: 'M 800 255 L 810 250 L 817 260 L 810 270 L 803 265 Z' },
  { id: 'skh', name: 'Сахалин', path: 'M 835 230 L 840 225 L 845 235 L 840 245 L 835 240 Z' },
  { id: 'kmk', name: 'Камчатка', path: 'M 860 170 L 875 160 L 890 190 L 875 200 L 865 190 Z' },
];

export const RussiaMap: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <AspectRatio ratio={16/9} className="bg-secondary/30 dark:bg-card/50 rounded-lg shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 1000 400" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <g>
            {regions.map((region) => (
              <HoverCard key={region.id} openDelay={0} closeDelay={0}>
                <HoverCardTrigger asChild>
                  <path
                    id={region.id}
                    d={region.path}
                    className={cn(
                      "fill-primary/20 dark:fill-primary/30 stroke-primary/50 dark:stroke-primary/60 stroke-[0.5] cursor-pointer transition-all duration-300",
                      activeRegion === region.id 
                        ? "fill-primary/40 dark:fill-primary/50 stroke-primary/70 dark:stroke-primary/80 stroke-[1]" 
                        : "hover:fill-primary/30 dark:hover:fill-primary/40 hover:stroke-primary/60 dark:hover:stroke-primary/70"
                    )}
                    onMouseEnter={() => setActiveRegion(region.id)}
                    onMouseLeave={() => setActiveRegion(null)}
                  />
                </HoverCardTrigger>
                <HoverCardContent 
                  className="bg-white/90 dark:bg-black/80 backdrop-blur-sm border-primary/20"
                  side="top"
                  align="center"
                >
                  <p className="font-medium text-sm">{region.name}</p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </g>
        </svg>
      </div>
      
      {/* Информация о выбранном регионе на мобильных устройствах */}
      {activeRegion && (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm md:hidden">
          <p className="text-center font-medium">
            {regions.find(r => r.id === activeRegion)?.name}
          </p>
        </div>
      )}
    </AspectRatio>
  );
};
