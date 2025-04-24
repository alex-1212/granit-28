
import React from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { Button } from '@/components/ui/button';
import { MapPin, Map } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const OFFICE_ADDRESS = 'г. Хабаровск, ул. Строительная 28';
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=г.+Хабаровск,+ул.+Строительная+28';
const YANDEX_MAPS_URL = 'https://yandex.ru/maps/?rtext=~г.+Хабаровск,+ул.+Строительная+28';

const ContactMap: React.FC = () => {
  useAnimateOnScroll();
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <div>
      <h2 className="text-2xl font-display font-semibold mb-6">
        {t('contact.officeLocation')}
      </h2>
      
      {/* 1. Карта */}
      <div className="glass-card rounded-xl overflow-hidden h-[320px] mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.4302175116087!2d135.07920999999998!3d48.4804697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5efae9dc22927c3b%3A0xd5fc815212362d9!2z0KHRgtGA0L7QuNGC0LXQu9GM0L3QsNGPINGD0LsuLCAyOCwg0KXQsNCx0LDRgNC-0LLRgdC6!5e0!3m2!1sru!2sru!4v1717091235400!5m2!1sru!2sru"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта расположения офиса ООО Гранит"
          aria-label="Интерактивная карта с расположением офиса ООО Гранит"
        ></iframe>
      </div>

      {/* 2. Кнопки прокладки маршрута */}
      <div className={`flex ${isMobile ? 'flex-col' : 'gap-3'} mb-5 w-full`}>
        <a href={GOOGLE_MAPS_URL} className={`${isMobile ? 'mb-3' : 'flex-1'}`} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="sm"
            className="w-full min-w-[0] text-xs py-2 px-2 font-semibold flex gap-2 justify-center border-primary hover:bg-primary/10 text-zinc-50"
          >
            <Map className="mr-2" size={16} />
            {t('contact.routeGoogle')}
          </Button>
        </a>
        <a href={YANDEX_MAPS_URL} className={`${isMobile ? '' : 'flex-1'}`} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="sm"
            className="w-full min-w-[0] text-xs py-2 px-2 font-semibold flex gap-2 justify-center text-[#ffcc00] border-[#ffcc00] hover:bg-[#ffcc0055]"
          >
            <MapPin className="mr-2" size={16} />
            {t('contact.routeYandex')}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ContactMap;
