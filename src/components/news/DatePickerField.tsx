
import * as React from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface DatePickerFieldProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

export function DatePickerField({ date, onDateChange }: DatePickerFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="date-picker">Дата публикации</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date-picker"
            variant="outline"
            className={cn(
              "w-full justify-start text-left",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "d MMMM yyyy", { locale: ru }) : <span>Выберите дату</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 z-50" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => date && onDateChange(date)}
            initialFocus
            locale={ru}
            className="z-50"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
