
import React, { useEffect, useState } from 'react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import LicensesHero from '@/components/licenses/LicensesHero';
import LicenseGrid from '@/components/licenses/LicenseGrid';
import LicenseModal from '@/components/licenses/LicenseModal';
import { licensesData, LicenseItem } from '@/components/licenses/licensesData';
import { LicensesMeta } from '@/components/meta/LicensesMeta';

const Licenses = () => {
  useAnimateOnScroll();
  const [selectedLicense, setSelectedLicense] = useState<LicenseItem | null>(null);

  useEffect(() => {
    document.title = 'Лицензии — ООО «Гранит»';
  }, []);

  const openModal = (license: LicenseItem) => {
    setSelectedLicense(license);
  };

  const closeModal = () => {
    setSelectedLicense(null);
  };

  return (
    <div>
      <LicensesMeta />
      <LicensesHero />
      <LicenseGrid licenses={licensesData} onLicenseClick={openModal} />
      <LicenseModal license={selectedLicense} onClose={closeModal} />
    </div>
  );
};

export default Licenses;
