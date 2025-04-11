
import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { LicenseItem } from './licensesData';

interface LicenseModalProps {
  license: LicenseItem | null;
  onClose: () => void;
}

const LicenseModal = ({ license, onClose }: LicenseModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (license) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [license, onClose]);

  if (!license) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4 py-8 backdrop-blur-sm">
      <div ref={modalRef} className="relative bg-card rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
        <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={onClose} 
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors" 
            aria-label="Закрыть"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex items-center justify-center p-4 h-full">
          <img 
            src={license.src} 
            alt={license.title} 
            className="max-w-full max-h-[80vh] object-contain" 
          />
        </div>
        
        <div className="p-4 border-t border-border">
          <h3 className="font-semibold mb-1 text-sm">{license.title}</h3>
          <p className="text-muted-foreground text-sm">№ {license.number}</p>
        </div>
      </div>
    </div>
  );
};

export default LicenseModal;
