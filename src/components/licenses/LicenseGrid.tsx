
import React from 'react';
import { LicenseItem } from './licensesData';
import LicenseCard from './LicenseCard';

interface LicenseGridProps {
  licenses: LicenseItem[];
  onLicenseClick: (license: LicenseItem) => void;
}

const LicenseGrid = ({ licenses, onLicenseClick }: LicenseGridProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {licenses.map(license => (
            <LicenseCard 
              key={license.id} 
              license={license} 
              onClick={onLicenseClick} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseGrid;
