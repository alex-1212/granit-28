
import React from 'react';
import { FileText, Search } from 'lucide-react';
import { LicenseItem } from './licensesData';

interface LicenseCardProps {
  license: LicenseItem;
  onClick: (license: LicenseItem) => void;
}

const LicenseCard = ({ license, onClick }: LicenseCardProps) => {
  return (
    <div className="animate-on-scroll group cursor-pointer" onClick={() => onClick(license)}>
      <div className="glass-card-solid rounded-xl overflow-hidden h-full">
        <div className="aspect-[3/4] overflow-hidden relative">
          <img 
            src={license.src} 
            alt={license.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            loading="lazy" 
          />
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
    </div>
  );
};

export default LicenseCard;
