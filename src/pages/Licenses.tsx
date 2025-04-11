
import React, { useEffect, useState, useRef } from 'react';
import { X, FileText, Search } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';

interface LicenseItem {
  id: number;
  src: string;
  title: string;
  number: string;
}

const licensesData: LicenseItem[] = [
  {
    id: 1,
    src: '/lovable-uploads/58baed52-fe27-45d4-9a12-311bbbfc9977.png',
    title: 'Лицензия на осуществление деятельности связанная с обращением взрывчатых материалов промышленного назначения. Сторона 1',
    number: 'ВМ-00-015946 от 11.04.2016г.'
  }, 
  {
    id: 2,
    src: '/lovable-uploads/98aaeb02-edf8-4b09-a857-ebb7636056a0.png',
    title: 'Лицензия на осуществление деятельности связанная с обращением взрывчатых материалов промышленного назначения. Сторона 2',
    number: 'ВМ-00-015946'
  }, 
  {
    id: 3,
    src: '/lovable-uploads/140a6535-9d83-4e56-b256-4bd520f1d860.png',
    title: 'Лицензия на осуществление деятельности связанная с обращением взрывчатых материалов промышленного назначения. Приложение',
    number: 'ВМ-00-015946'
  }, 
  {
    id: 4,
    src: '/lovable-uploads/b59d1486-ca03-40c4-869a-d2eb596614b0.png',
    title: 'Лицензия на пользование недрами',
    number: 'Серия ХАБ №00613 тип ТЭ от 08.08.2022г.'
  }, 
  {
    id: 5,
    src: '/lovable-uploads/4477c6ec-d723-413a-a5b1-9d78627979ba.png',
    title: 'Разрешение на применение взрывчатых веществ и изделий на их основе',
    number: 'РВВ 0437 от 13.03.2017'
  }, 
  {
    id: 6,
    src: '/lovable-uploads/f318f1c9-4959-4e98-b42f-e70b7e646e66.png',
    title: 'Разрешение на применение взрывчатых веществ и изделий на их основе',
    number: 'РВВ 0931 от 17.03.2023'
  }, 
  {
    id: 7,
    src: '/lovable-uploads/f8d0bd99-8860-4c13-8ad7-733a1b16eb54.png',
    title: 'Сертификат соответствия (Евразийский Экономический Союз)',
    number: 'Серия RU №0390327 от 28.03.2023г.'
  }, 
  {
    id: 8,
    src: '/lovable-uploads/9c83b320-ac3b-49c8-aa0e-fc04340e92ad.png',
    title: 'Свидетельство о регистрации в государственном реестре опасных производственных объектов',
    number: 'А71-02548'
  }
];

const Licenses = () => {
  useAnimateOnScroll();
  const [selectedLicense, setSelectedLicense] = useState<LicenseItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Лицензии — ООО «Гранит»';
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedLicense(null);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setSelectedLicense(null);
      }
    };

    if (selectedLicense) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedLicense]);

  const openModal = (license: LicenseItem) => {
    setSelectedLicense(license);
  };

  const closeModal = () => {
    setSelectedLicense(null);
  };

  return <div>
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Лицензии и сертификаты
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">
              Документы, подтверждающие право ООО «Гранит» на осуществление деятельности
            </p>
          </div>
        </div>
      </section>
      
      {/* Licenses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {licensesData.map(license => <div key={license.id} className="animate-on-scroll group cursor-pointer" onClick={() => openModal(license)}>
                <div className="glass-card-solid rounded-xl overflow-hidden h-full">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img src={license.src} alt={license.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    {/* Иконка лупы при наведении */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center">
                        <Search size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText size={16} className="text-primary flex-shrink-0" />
                      <h3 className="font-medium text-sm truncate">{license.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">№ {license.number}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* License Modal */}
      {selectedLicense && <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4 py-8 backdrop-blur-sm">
          <div ref={modalRef} className="relative bg-card rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
            <div className="absolute top-4 right-4 z-10">
              <button onClick={closeModal} className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors" aria-label="Закрыть">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex items-center justify-center p-4 h-full">
              <img src={selectedLicense.src} alt={selectedLicense.title} className="max-w-full max-h-[80vh] object-contain" />
            </div>
            
            <div className="p-4 border-t border-border">
              <h3 className="font-semibold mb-1 text-sm">{selectedLicense.title}</h3>
              <p className="text-muted-foreground text-sm">№ {selectedLicense.number}</p>
            </div>
          </div>
        </div>}
    </div>;
};

export default Licenses;
