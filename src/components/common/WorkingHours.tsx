
import React, { useState, useEffect } from 'react';
import { Clock, Check, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

const schedule: {
  day: number;
  label: string;
  short: string;
  open?: string;
  close?: string;
  closed?: boolean;
}[] = [
  { day: 1, label: 'Понедельник', short: 'пн', open: '9:00', close: '18:00' },
  { day: 2, label: 'Вторник', short: 'вт', open: '9:00', close: '18:00' },
  { day: 3, label: 'Среда', short: 'ср', open: '9:00', close: '18:00' },
  { day: 4, label: 'Четверг', short: 'чт', open: '9:00', close: '18:00' },
  { day: 5, label: 'Пятница', short: 'пт', open: '9:00', close: '18:00' },
  { day: 6, label: 'Суббота', short: 'сб', closed: true },
  { day: 0, label: 'Воскресенье', short: 'вс', closed: true },
];

const getScheduleByDay = (jsDay: number) => schedule.find(item => item.day === jsDay);

interface WorkingHoursProps {
  variant?: 'compact' | 'full' | 'tiles';
  className?: string;
  showSchedule?: boolean;
}

const WorkingHours: React.FC<WorkingHoursProps> = ({
  variant = 'compact',
  className,
  showSchedule = true,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [nextOpenTime, setNextOpenTime] = useState<string>('');
  const [currentDay, setCurrentDay] = useState<number>(new Date().getDay());
  const [currentTime, setCurrentTime] = useState<string>('');
  const { t, language } = useLanguage();
  
  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const day = now.getDay();
      setCurrentDay(day);
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setCurrentTime(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);

      const today = getScheduleByDay(day);
      if (today?.closed) {
        setIsOpen(false);
        calcNextOpen(day);
        return;
      }
      if (!today?.open || !today.close) return;

      const nowMinutes = hours * 60 + minutes;
      const [hOpen, mOpen] = today.open.split(':').map(Number);
      const [hClose, mClose] = today.close.split(':').map(Number);
      const openMinutes = hOpen * 60 + mOpen;
      const closeMinutes = hClose * 60 + mClose;
      const isWorkTime = nowMinutes >= openMinutes && nowMinutes < closeMinutes;

      setIsOpen(isWorkTime);
      if (!isWorkTime) {
        calcNextOpen(day, nowMinutes < openMinutes);
      }
    };

    const calcNextOpen = (fromDay: number, beforeOpen = false) => {
      if (beforeOpen) {
        const today = getScheduleByDay(fromDay);
        setNextOpenTime(`${t('common.today')} ${t('common.openAt')} ${today?.open}`);
        return;
      }
      let add = 1, d = (fromDay + 1) % 7;
      while (getScheduleByDay(d)?.closed) {
        d = (d + 1) % 7;
        add += 1;
      }
      const openDay = getScheduleByDay(d);
      if (add === 1) setNextOpenTime(`${t('common.opensNext')} ${openDay?.open}`);
      else if (add > 1 && openDay?.short === 'пн') setNextOpenTime(`${t('common.opensMonday')} ${openDay.open}`);
      else setNextOpenTime(`${openDay?.label.toLowerCase()} ${t('common.openAt')} ${openDay?.open}`);
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, [t, language]);

  if (variant === 'compact') {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <Popover>
          <PopoverTrigger asChild>
            <button
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label="Показать режим работы"
              type="button"
            >
              {isOpen ? (
                <Clock size={20} className="text-green-500" />
              ) : (
                <Clock size={20} className="text-red-500" />
              )}
              <span>
                {isOpen ? t('common.openNow') : t('common.closedNow')}
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="bg-gray-800 text-white border-none shadow-xl w-64 dark:bg-gray-900"
            sideOffset={5}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-semibold">
                {isOpen ? (
                  <>
                    <Check size={20} className="text-green-400" />
                    <span>{t('common.openNow')}</span>
                  </>
                ) : (
                  <>
                    <X size={20} className="text-red-400" />
                    <span>{t('common.closedNow')}</span>
                  </>
                )}
              </div>
              {!isOpen && (
                <div className="text-sm text-white/80">
                  {nextOpenTime}
                </div>
              )}
              <div className="pt-2 border-t border-white/10">
                <h4 className="text-sm font-medium mb-2">{t('common.workingHours')}:</h4>
                <div className="space-y-2">
                  {schedule.map(day => (
                    <div
                      key={day.day}
                      className={cn(
                        "flex justify-between",
                        day.day === currentDay && "font-bold text-orange-400"
                      )}
                    >
                      <span>{t(`common.days.${day.short}`)}</span>
                      <span>
                        {day.closed
                          ? t('common.dayOff')
                          : `${day.open}-${day.close}`
                        }
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  }

  return <div>{t('common.workingHours')}</div>;
};

export default WorkingHours;
