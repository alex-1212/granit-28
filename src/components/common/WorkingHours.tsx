
import React from 'react';
import { Clock, Check, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useWorkingHours } from './hooks/useWorkingHours';
import { FullSchedule } from './components/FullSchedule';
import type { WorkingHoursProps } from './types/workingHours';

const WorkingHours: React.FC<WorkingHoursProps> = ({
  variant = 'compact',
  className,
  showSchedule = true,
}) => {
  const { isOpen, nextOpenTime, currentDay } = useWorkingHours();

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
                  <FullSchedule currentDay={currentDay} />
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
        <FullSchedule currentDay={currentDay} />
      </div>
    </div>
  );
};

export default WorkingHours;
