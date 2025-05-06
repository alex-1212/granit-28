
import React, { useState, useRef, useEffect } from 'react';

const PartnersSection = () => {
  const partners = [{
    name: "УЗСК",
    logo: "/lovable-uploads/852c3c4d-fb22-4821-9966-cfd304d5bbaa.png"
  }, {
    name: "Полиметалл",
    logo: "/lovable-uploads/4c3ca6bf-13bc-4158-a42b-6d9996b4782a.png"
  }, {
    name: "Амур Золото",
    logo: "/lovable-uploads/fd6bbf6e-9a9d-4d40-9830-e23449e72c27.png"
  }, {
    name: "Caterpillar",
    logo: "/lovable-uploads/830a5cf1-cc2d-4b2a-8f16-fec02d3389b1.png"
  }, {
    name: "Дальграфит",
    logo: "/lovable-uploads/88928b69-f51d-4a8c-8ae4-570be749949f.png"
  }, {
    name: "Atlas Copco",
    logo: "/lovable-uploads/9c3dc227-cf30-4c4c-80b2-aae5f48e5580.png"
  }, {
    name: "Деловые Линии",
    logo: "/lovable-uploads/370d371f-362a-4298-ba36-12c24ef9b2ea.png"
  }, {
    name: "Highland Gold Mining",
    logo: "/lovable-uploads/578d68dc-86e9-415d-8ad3-618a9adb79b2.png"
  }];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  
  useEffect(() => {
    let animationId: number;
    const carousel = carouselRef.current;
    
    const animate = () => {
      if (!carousel || isHovering || !autoplayEnabled) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      
      // Плавная прокрутка
      carousel.scrollLeft += 1; // Увеличил скорость прокрутки
      
      // Если достигнут конец, переходим в начало
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    // Активировать автопрокрутку после загрузки всех изображений
    setTimeout(() => {
      setAutoplayEnabled(true);
    }, 500); // Уменьшил время ожидания
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovering, autoplayEnabled]);

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="section-title mb-6">
          Наши партнеры
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Мы гордимся сотрудничеством с ведущими компаниями отрасли
        </p>
      </div>
      
      <div className="relative max-w-full overflow-hidden">
        {/* Затемнение слева */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
        
        <div 
          className="flex overflow-hidden w-full"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={carouselRef}
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex items-center space-x-16 py-6 whitespace-nowrap w-max">
            {/* Дублируем логотипы для создания эффекта бесконечной прокрутки */}
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center px-6 min-w-[200px]"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-[80px] object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Затемнение справа */}
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default PartnersSection;
