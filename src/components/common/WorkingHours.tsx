import React, { useState, useEffect } from 'react';
import { Clock, Check, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const schedule: {
  day: number;
  label: string;
  short: string;
  open?: string;
  close?: string;
  closed?: boolean;
}[] = [
  { day: 1, label: 'Понедельник', short: 'Пн', open: '9:00', close: '18:00' },
  { day: 2, label: 'Вторник', short: 'Вт', open: '9:00', close: '18:00' },
  { day: 3, label: 'Среда', short: 'Ср', open: '9:00', close: '18:00' },
  { day: 4, label: 'Четверг', short: 'Чт', open: '9:00', close: '18:00' },
  { day: 5, label: 'Пятница', short: 'Пт', open: '9:00', close: '18:00' },
  { day: 6, label: 'Суббота', short: 'Сб', closed: true },
  { day: 0, label: 'Воскресенье', short: 'Вс', closed: true },
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
        setNextOpenTime(`сегодня в ${today?.open}`);
        return;
      }
      let add = 1, d = (fromDay + 1) % 7;
      while (getScheduleByDay(d)?.closed) {
        d = (d + 1) % 7;
        add += 1;
      }
      const openDay = getScheduleByDay(d);
      if (add === 1) setNextOpenTime(`завтра в ${openDay?.open}`);
      else if (add > 1 && openDay?.short === 'Пн') setNextOpenTime(`в понедельник в ${openDay.open}`);
      else setNextOpenTime(`в ${openDay?.label.toLowerCase()} в ${openDay?.open}`);
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (variant === 'tiles') {
    return (
      <div className={cn('w-full', className, "bg-transparent shadow-none px-0 pb-0")}>
        <div className="flex gap-1 justify-between w-full overflow-x-hidden pb-1 select-none">
          {schedule.map((day, idx) => {
            const isToday = day.day === currentDay;
            return (
              <div
                key={day.day}
                className={cn(
                  "flex flex-col items-center px-1.5 py-1.5 sm:px-2 sm:py-2 rounded-md min-w-0 flex-1 transition-all duration-200",
                  isToday
                    ? "bg-orange-500 text-white font-bold scale-105"
                    : "bg-white/80 text-foreground hover:bg-accent/30 dark:bg-card dark:hover:bg-muted"
                )}
                style={{
                  border: isToday ? '2px solid #fc984a' : '1px solid #ececec',
                  boxShadow: 'none',
                  fontSize: "0.89rem",
                  maxWidth: "50px",
                }}
              >
                <div className="text-xs font-semibold mb-1">{day.short}</div>
                {day.closed
                  ? <span className="text-[11px] text-gray-400 dark:text-gray-300">выходной</span>
                  : <span className="text-[11px]">{day.open}-{day.close}</span>
                }
              </div>
            );
          })}
        </div>
        <div className="mt-3 flex items-center gap-2 pl-1 text-sm min-h-[25px]">
          {isOpen ? (
            <>
              <Check size={16} className="text-green-500" />
              <span className="font-medium">Открыто сейчас</span>
            </>
          ) : (
            <>
              <X size={16} className="text-red-500" />
              <span className="font-medium">Закрыто</span>
              <span className="ml-2 text-muted-foreground text-xs">Откроется {nextOpenTime}</span>
            </>
          )}
        </div>
      </div>
    );
  }

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
                {isOpen ? 'Открыто' : 'Закрыто'}
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
                    <span>Открыто сейчас</span>
                  </>
                ) : (
                  <>
                    <X size={20} className="text-red-400" />
                    <span>Закрыто</span>
                  </>
                )}
              </div>
              {!isOpen && (
                <div className="text-sm text-white/80">
                  Откроется {nextOpenTime}
                </div>
              )}
              <div className="pt-2 border-t border-white/10">
                <h4 className="text-sm font-medium mb-2">Режим работы:</h4>
                <div className="space-y-2">
                  {schedule.map(day => (
                    <div
                      key={day.day}
                      className={cn(
                        "flex justify-between",
                        day.day === currentDay && "font-bold text-orange-400"
                      )}
                    >
                      <span>{day.short}:</span>
                      <span>
                        {day.closed
                          ? "выходной"
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

  return <div>Режим работы</div>;
};

export default WorkingHours;
