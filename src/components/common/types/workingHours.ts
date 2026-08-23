
export interface WorkingDay {
  open: string;
  close: string;
  closed?: false;
}

export interface ClosedDay {
  closed: true;
  open?: never;
  close?: never;
}

export type DaySchedule = WorkingDay | ClosedDay;

export interface WorkingHoursProps {
  variant?: 'compact' | 'full';
  className?: string;
  showSchedule?: boolean;
}

export const dayNames = {
  0: 'Воскресенье',
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
} as const;

export const shortDayNames = {
  0: 'Вс',
  1: 'Пн',
  2: 'Вт',
  3: 'Ср',
  4: 'Чт',
  5: 'Пт',
  6: 'Сб',
} as const;

export const workingHours: Record<string, DaySchedule> = {
  1: { open: '08:00', close: '18:00' },
  2: { open: '08:00', close: '18:00' },
  3: { open: '08:00', close: '18:00' },
  4: { open: '08:00', close: '18:00' },
  5: { open: '08:00', close: '18:00' },
  6: { closed: true },
  0: { closed: true },
};
