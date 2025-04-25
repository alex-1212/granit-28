import React from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import WorkingHours from '@/components/common/WorkingHours';
import { Button } from '@/components/ui/button';
import { Navigation } from 'lucide-react';
const ContactMap: React.FC = () => {
  useAnimateOnScroll();
  const address = "г. Хабаровск ул. Строительная 28";
  const encodedAddress = encodeURIComponent(address);
  return <div>
      <h2 className="text-2xl font-display font-semibold mb-6">
        Расположение офиса
      </h2>
      
      <div className="glass-card rounded-xl overflow-hidden h-[400px] mb-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.4302175116087!2d135.07920999999998!3d48.4804697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5efae9dc22927c3b%3A0xd5fc815212362d9!2z0KHRgtGA0L7QuNGC0LXQu9GM0L3QsNGPINGD0LsuLCAyOCwg0KXQsNCx0LDRgNC-0LLRgdC6!5e0!3m2!1sru!2sru!4v1717091235400!5m2!1sru!2sru!4v1717091235400!5m2!1sru!2sru" width="100%" height="100%" style={{
        border: 0
      }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Карта расположения офиса ООО Гранит" aria-label="Интерактивная карта с расположением офиса ООО Гранит"></iframe>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Button variant="default" className="flex-1" onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank')}>
          <Navigation className="mr-2" />
          Проложить путь: Google Maps
        </Button>
        <Button variant="default" className="flex-1" onClick={() => window.open(`https://yandex.ru/maps/?rtext=~${encodedAddress}`, '_blank')}>
          <Navigation className="mr-2" />
          Проложить путь: Яндекс карты
        </Button>
      </div>

      
    </div>;
};
export default ContactMap;