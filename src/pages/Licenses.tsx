import React, { useState } from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import LicensesHero from '@/components/licenses/LicensesHero';
import LicenseGrid from '@/components/licenses/LicenseGrid';
import LicenseModal from '@/components/licenses/LicenseModal';
import { licensesData, LicenseItem } from '@/components/licenses/licensesData';
import { Seo, breadcrumbSchema } from '@/components/common/Seo';

const Licenses = () => {
  useAnimateOnScroll();
  const [selectedLicense, setSelectedLicense] = useState<LicenseItem | null>(null);

  const openModal = (license: LicenseItem) => {
    setSelectedLicense(license);
  };

  const closeModal = () => {
    setSelectedLicense(null);
  };

  return (
    <div>
      <Seo
        path="/licenses"
        title="Лицензии и разрешения на взрывчатые материалы"
        description="Лицензии ООО «Гранит» на обращение взрывчатых материалов промышленного назначения, свидетельства Ростехнадзора о регистрации опасных производственных объектов."
        keywords="лицензия взрывчатые материалы, разрешение ростехнадзор, лицензия БВР, опасные производственные объекты гранит"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Главная', path: '/' },
            { name: 'Лицензии', path: '/licenses' },
          ]),
        ]}
      />
      <LicensesHero />
      <LicenseGrid licenses={licensesData} onLicenseClick={openModal} />
      <LicenseModal license={selectedLicense} onClose={closeModal} />
    </div>
  );
};

export default Licenses;
