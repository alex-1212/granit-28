
import { useState, useEffect } from 'react';
import { workingHours, dayNames } from '../types/workingHours';

export const useWorkingHours = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [nextOpenTime, setNextOpenTime] = useState<string>('');
  const [currentDay, setCurrentDay] = useState<number>(new Date().getDay());
  const [currentTime, setCurrentTime] = useState<string>('');

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
  }, []);

  return {
    isOpen,
    nextOpenTime,
    currentDay,
    currentTime
  };
};
