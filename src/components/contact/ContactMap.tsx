
import React from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import WorkingHours from '@/components/common/WorkingHours';

const ContactMap: React.FC = () => {
  useAnimateOnScroll();
  
  return (
    <div>
      <h2 className="text-2xl font-display font-semibold mb-6">
        Расположение офиса
      </h2>
      
      <div className="glass-card rounded-xl overflow-hidden h-[400px] mb-6">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.4302175116087!2d135.07920999999998!3d48.4804697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5efae9dc22927c3b%3A0xd5fc815212362d9!2z0KHRgtGA0L7QuNGC0LXQu9GM0L3QsNGPINGD0LsuLCAyOCwg0KXQsNCx0LDRgNC-0LLRgdC6!5e0!3m2!1sru!2sru!4v1717091235400!5m2!1sru!2sru!4v1717091235400!5m2!1sru!2sru" 
          width="100%" 
          height="100%" 
          style={{border: 0}} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          title="Карта расположения офиса ООО Гранит"
          aria-label="Интерактивная карта с расположением офиса ООО Гранит"
        ></iframe>
      </div>

      {/* Добавляем блок с режимом работы */}
      <div className="glass-card-solid rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Режим работы</h3>
        <WorkingHours variant="full" showSchedule={false} />
      </div>
    </div>
  );
};

export default ContactMap;
