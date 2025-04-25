
import React, { useState, useEffect } from 'react';
import { Clock, Check, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

// Определяем типы для рабочих часов
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

// Данные о режиме работы
const workingHours: Record<string, DaySchedule> = {
  1: { open: '9:00', close: '18:00' }, // Понедельник
  2: { open: '9:00', close: '18:00' }, // Вторник
  3: { open: '9:00', close: '18:00' }, // Среда
  4: { open: '9:00', close: '18:00' }, // Четверг
  5: { open: '9:00', close: '18:00' }, // Пятница
  6: { closed: true }, // Суббота
  0: { closed: true }, // Воскресенье
};

// Названия дней недели
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

  // Функция для проверки, открыто ли сейчас
  const checkIsOpen = () => {
    const now = new Date();
    const day = now.getDay(); // 0-6, где 0 - воскресенье
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    
    setCurrentDay(day);
    setCurrentTime(currentTimeStr);
    
    // Проверяем тип дня и наличие свойства closed
    const daySchedule = workingHours[day.toString()];
    
    // Если сегодня выходной, то закрыто
    if (daySchedule && 'closed' in daySchedule && daySchedule.closed) {
      setIsOpen(false);
      calculateNextOpenTime(day);
      return;
    }
    
    // Получаем время открытия и закрытия для текущего дня
    if (!('closed' in daySchedule) && daySchedule.open && daySchedule.close) {
      const openTimeParts = daySchedule.open.split(':').map(Number);
      const closeTimeParts = daySchedule.close.split(':').map(Number);
      
      // Переводим всё в минуты для удобства сравнения
      const openTimeMinutes = openTimeParts[0] * 60 + openTimeParts[1];
      const closeTimeMinutes = closeTimeParts[0] * 60 + closeTimeParts[1];
      const currentTimeMinutes = hours * 60 + minutes;
      
      // Проверяем, находимся ли в рабочее время
      const isWithinWorkingHours = currentTimeMinutes >= openTimeMinutes && currentTimeMinutes < closeTimeMinutes;
      setIsOpen(isWithinWorkingHours);
      
      // Если закрыто, рассчитываем следующее время открытия
      if (!isWithinWorkingHours) {
        calculateNextOpenTime(day, currentTimeMinutes < openTimeMinutes);
      }
    }
  };
  
  // Функция для расчета следующего времени открытия
  const calculateNextOpenTime = (currentDay: number, isBeforeOpening: boolean = false) => {
    const daySchedule = workingHours[currentDay.toString()];
    
    // Если сегодня рабочий день и еще не открылись
    if (daySchedule && !('closed' in daySchedule) && isBeforeOpening) {
      setNextOpenTime(`сегодня в ${daySchedule.open}`);
      return;
    }
    
    // Иначе ищем следующий рабочий день
    let nextDay = (currentDay + 1) % 7;
    let daysToAdd = 1;
    
    // Пока не найдем рабочий день
    while ('closed' in workingHours[nextDay.toString()] && workingHours[nextDay.toString()].closed) {
      nextDay = (nextDay + 1) % 7;
      daysToAdd++;
    }
    
    // Определяем сообщение в зависимости от того, когда следующий рабочий день
    const nextDaySchedule = workingHours[nextDay.toString()];
    if (!('closed' in nextDaySchedule) && daysToAdd === 1) {
      setNextOpenTime(`завтра в ${nextDaySchedule.open}`);
    } else if (!('closed' in nextDaySchedule) && daysToAdd === 2 && currentDay === 5) { // Если сегодня пятница, то следующий - понедельник
      setNextOpenTime(`в понедельник в ${nextDaySchedule.open}`);
    } else if (!('closed' in nextDaySchedule)) {
      setNextOpenTime(`в ${dayNames[nextDay as keyof typeof dayNames].toLowerCase()} в ${nextDaySchedule.open}`);
    }
  };
  
  // Проверяем статус каждую минуту
  useEffect(() => {
    checkIsOpen();
    const interval = setInterval(checkIsOpen, 60000); // Каждую минуту
    return () => clearInterval(interval);
  }, []);
  
  // Полное расписание для попапа
  const renderFullSchedule = () => {
    return (
      <div className="space-y-2">
        {Array.from({ length: 7 }, (_, i) => {
          // Начинаем с понедельника (индекс 1)
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
  
  // Компактный вариант отображения
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
                  {isOpen ? 'Открыто' : 'Закрыто'}
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
                      <span>Закрыто</span>
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
              {isOpen ? 'Открыто' : 'Закрыто'}
            </span>
          </div>
        )}
      </div>
    );
  }
  
  // Полный вариант для страницы контактов
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
              <span className="font-medium">Закрыто</span>
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
