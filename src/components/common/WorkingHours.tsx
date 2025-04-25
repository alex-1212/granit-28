import React, { useState, useEffect } from 'react';
import { Clock, Check, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface WorkingDay {
  open: string;
  close: string;
  closed?: false;
}

interface ClosedDay {
  closed: true;
  open?: never;
  close?: never;
}

type DaySchedule = WorkingDay | ClosedDay;

const workingHours: Record<string, DaySchedule> = {
  1: { open: '9:00', close: '18:00' },
  2: { open: '9:00', close: '18:00' },
  3: { open: '9:00', close: '18:00' },
  4: { open: '9:00', close: '18:00' },
  5: { open: '9:00', close: '18:00' },
  6: { closed: true },
  0: { closed: true },
};

const dayNames = {
  0: 'Воскресенье',
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
};

const shortDayNames = {
  0: 'Вс',
  1: 'Пн',
  2: 'Вт',
  3: 'Ср',
  4: 'Чт',
  5: 'Пт',
  6: 'Сб',
};

interface WorkingHoursProps {
  variant?: 'compact' | 'full';
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

  const checkIsOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    
    setCurrentDay(day);
    setCurrentTime(currentTimeStr);
    
    const daySchedule = workingHours[day.toString()];
    
    if (daySchedule && 'closed' in daySchedule && daySchedule.closed) {
      setIsOpen(false);
      calculateNextOpenTime(day);
      return;
    }
    
    if (!('closed' in daySchedule) && daySchedule.open && daySchedule.close) {
      const openTimeParts = daySchedule.open.split(':').map(Number);
      const closeTimeParts = daySchedule.close.split(':').map(Number);
      
      const openTimeMinutes = openTimeParts[0] * 60 + openTimeParts[1];
      const closeTimeMinutes = closeTimeParts[0] * 60 + closeTimeParts[1];
      const currentTimeMinutes = hours * 60 + minutes;
      
      const isWithinWorkingHours = currentTimeMinutes >= openTimeMinutes && currentTimeMinutes < closeTimeMinutes;
      setIsOpen(isWithinWorkingHours);
      
      if (!isWithinWorkingHours) {
        calculateNextOpenTime(day, currentTimeMinutes < openTimeMinutes);
      }
    }
  };

  const calculateNextOpenTime = (currentDay: number, isBeforeOpening: boolean = false) => {
    const daySchedule = workingHours[currentDay.toString()];
    
    if (daySchedule && !('closed' in daySchedule) && isBeforeOpening) {
      setNextOpenTime(`сегодня в ${daySchedule.open}`);
      return;
    }
    
    let nextDay = (currentDay + 1) % 7;
    let daysToAdd = 1;
    
    while ('closed' in workingHours[nextDay.toString()] && workingHours[nextDay.toString()].closed) {
      nextDay = (nextDay + 1) % 7;
      daysToAdd++;
    }
    
    const nextDaySchedule = workingHours[nextDay.toString()];
    if (!('closed' in nextDaySchedule) && daysToAdd === 1) {
      setNextOpenTime(`завтра в ${nextDaySchedule.open}`);
    } else if (!('closed' in nextDaySchedule) && daysToAdd === 2 && currentDay === 5) {
      setNextOpenTime(`в понедельник в ${nextDaySchedule.open}`);
    } else if (!('closed' in nextDaySchedule)) {
      setNextOpenTime(`в ${dayNames[nextDay as keyof typeof dayNames].toLowerCase()} в ${nextDaySchedule.open}`);
    }
  };

  useEffect(() => {
    checkIsOpen();
    const interval = setInterval(checkIsOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  const renderFullSchedule = () => {
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
              <span>{shortDayNames[dayIndex as keyof typeof shortDayNames]}:</span>
              <span>
                {('closed' in dayInfo && dayInfo.closed)
                  ? "Выходной" 
                  : `${(dayInfo as WorkingDay).open} - ${(dayInfo as WorkingDay).close}`
                }
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  if (variant === 'compact') {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        {showSchedule ? (
          <Popover>
            <PopoverTrigger asChild>
              <button 
                className="flex items-center gap-2 hover:text-primary transition-colors"
                aria-label="Показать режим работы"
              >
                {isOpen ? (
                  <Clock size={20} className="text-green-500" />
                ) : (
                  <Clock size={20} className="text-red-500" />
                )}
                <span>
                  {isOpen ? 'Открыто сейчас' : 'Закрыто сейчас'}
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent 
              className="bg-secondary/90 backdrop-blur-sm border-border text-foreground p-4 w-64"
              sideOffset={5}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-semibold">
                  {isOpen ? (
                    <>
                      <Check size={20} className="text-green-500" />
                      <span>Открыто сейчас</span>
                    </>
                  ) : (
                    <>
                      <X size={20} className="text-red-500" />
                      <span>Закрыто сейчас</span>
                    </>
                  )}
                </div>
                
                {!isOpen && (
                  <div className="text-sm text-muted-foreground">
                    Откроется {nextOpenTime}
                  </div>
                )}
                
                <div className="pt-2 border-t border-border">
                  <h4 className="text-sm font-medium mb-2">Режим работы:</h4>
                  {renderFullSchedule()}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <div className="flex items-center gap-2">
            {isOpen ? (
              <Clock size={20} className="text-green-500" />
            ) : (
              <Clock size={20} className="text-red-500" />
            )}
            <span>
              {isOpen ? 'Открыто сейчас' : 'Закрыто сейчас'}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {isOpen ? (
            <>
              <Check size={20} className="text-green-500" />
              <span className="font-medium">Открыто сейчас</span>
            </>
          ) : (
            <>
              <X size={20} className="text-red-500" />
              <span className="font-medium">Закрыто сейчас</span>
            </>
          )}
        </div>
        
        {!isOpen && (
          <div className="text-sm text-muted-foreground">
            Откроется {nextOpenTime}
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        {renderFullSchedule()}
      </div>
    </div>
  );
};

export default WorkingHours;
