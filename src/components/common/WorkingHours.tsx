
import React, { useState, useEffect } from 'react';
import { Clock, Check, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

// ДО: интерфейс был неявный, исправляем на строго типизированный массив
const schedule: {
  day: number; // 0 - вс ... 6 - сб
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
  
  // актуализация статуса каждую минуту
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
      const openMinutes = parseInt(today.open) * 60 + parseInt(today.open.split(':')[1]);
      const closeMinutes = parseInt(today.close) * 60 + parseInt(today.close.split(':')[1]);
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
      // ищем следующий рабочий день
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

  // ТАЙЛЫ для страницы контакты
  if (variant === 'tiles') {
    return (
      <div className={cn('w-full', className)}>
        <div className="flex gap-3 overflow-x-auto pb-1">
          {schedule.map((day, idx) => {
            const isToday = day.day === currentDay;
            return (
              <div
                key={day.day}
                className={cn(
                  "flex flex-col items-center px-4 py-3 rounded-lg min-w-[92px] shadow-md bg-white dark:bg-card border transition-all duration-200",
                  isToday
                    ? "bg-orange-500 text-white dark:bg-orange-500 font-bold scale-105"
                    : "bg-white text-foreground hover:bg-accent/30 dark:bg-card dark:hover:bg-muted"
                )}
                style={{
                  border: isToday ? '2px solid #fc984a' : '1px solid #ececec',
                  boxShadow: isToday
                    ? '0 2px 12px #fcc79444'
                    : '0 1px 6px #0002'
                }}
              >
                <div className="text-base font-semibold mb-1">{day.short}</div>
                {day.closed
                  ? <span className="text-sm text-gray-400 dark:text-gray-300">выходной</span>
                  : <span className="text-sm">{day.open}-{day.close}</span>
                }
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex items-center gap-2 pl-1">
          {isOpen ? (
            <>
              <Check size={18} className="text-green-500" />
              <span className="font-medium">Открыто сейчас</span>
            </>
          ) : (
            <>
              <X size={18} className="text-red-500" />
              <span className="font-medium">Закрыто</span>
              <span className="ml-3 text-muted-foreground text-sm">Откроется {nextOpenTime}</span>
            </>
          )}
        </div>
      </div>
    );
  }

  // КОМПАКТНЫЙ вариант только для футера с Popover
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

  // ПОЛНЫЙ (старый) режим не используется, fallback только
  return <div>Режим работы</div>;
};

export default WorkingHours;

