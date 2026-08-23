
import React from 'react';
import { cn } from '@/lib/utils';
import { workingHours } from '../types/workingHours';
import type { WorkingDay } from '../types/workingHours';
import { useLanguage } from '@/i18n/LanguageContext';

interface FullScheduleProps {
  currentDay: number;
}

export const FullSchedule: React.FC<FullScheduleProps> = ({ currentDay }) => {
  const { t } = useLanguage();
  return (
    <div className="space-y-2">
      {Array.from({ length: 7 }, (_, i) => {
        const dayIndex = (i + 1) % 7;
        const dayInfo = workingHours[dayIndex.toString()];
        const isCurrentDay = dayIndex === currentDay;
        
        return (
          <div 
            key={dayIndex} 
            className={cn(
              "flex justify-between",
              isCurrentDay && "font-bold text-primary"
            )}
          >
            <span>{t(`hours.day.${dayIndex}`)}:</span>
            <span>
              {('closed' in dayInfo && dayInfo.closed)
                ? t('hours.dayOff') 
                : `${(dayInfo as WorkingDay).open} - ${(dayInfo as WorkingDay).close}`
              }
            </span>
          </div>
        );
      })}
    </div>
  );
};
