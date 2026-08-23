
import { useState, useEffect } from 'react';
import { workingHours } from '../types/workingHours';
import { useLanguage } from '@/i18n/LanguageContext';

export const useWorkingHours = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [nextOpenTime, setNextOpenTime] = useState<string>('');
  const [currentDay, setCurrentDay] = useState<number>(new Date().getDay());
  const [currentTime, setCurrentTime] = useState<string>('');
  const { lang, t } = useLanguage();

  // «в 08:00» для русского, просто «08:00» для китайского
  const formatTime = (time: string) => (lang === 'zh' ? time : `в ${time}`);

  const calculateNextOpenTime = (currentDay: number, isBeforeOpening: boolean = false) => {
    const daySchedule = workingHours[currentDay.toString()];
    
    // Если текущий день рабочий и время ещё не наступило
    if (daySchedule && !('closed' in daySchedule) && isBeforeOpening) {
      setNextOpenTime(`${t('hours.today')} ${formatTime(daySchedule.open)}`);
      return;
    }
    
    let nextDay = (currentDay + 1) % 7;
    let daysToAdd = 1;
    
    // Ищем следующий рабочий день
    while ('closed' in workingHours[nextDay.toString()] && workingHours[nextDay.toString()].closed) {
      nextDay = (nextDay + 1) % 7;
      daysToAdd++;
    }
    
    const nextDaySchedule = workingHours[nextDay.toString()];
    if (!('closed' in nextDaySchedule)) {
      if (daysToAdd === 1) {
        // Если следующий день - рабочий
        setNextOpenTime(`${t('hours.tomorrow')} ${formatTime(nextDaySchedule.open)}`);
      } else {
        // В остальных случаях показываем день недели
        setNextOpenTime(`${t(`hours.dayIn.${nextDay}`)} ${formatTime(nextDaySchedule.open)}`);
      }
    }
  };

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

  useEffect(() => {
    checkIsOpen();
    const interval = setInterval(checkIsOpen, 60000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return {
    isOpen,
    nextOpenTime,
    currentDay,
    currentTime
  };
};
