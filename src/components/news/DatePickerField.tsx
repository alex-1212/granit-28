
import * as React from "react";
import { format } from "date-fns";
import { ru, zhCN } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

interface DatePickerFieldProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

export function DatePickerField({ date, onDateChange }: DatePickerFieldProps) {
  const { lang, t } = useLanguage();
  const dateLocale = lang === 'zh' ? zhCN : ru;
  return (
    <div className="space-y-2">
      <Label htmlFor="date-picker">{t('news.ui.form.dateLabel')}</Label>
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
            {date ? format(date, "d MMMM yyyy", { locale: dateLocale }) : <span>{t('news.ui.form.pickDate')}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 z-50" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => date && onDateChange(date)}
            initialFocus
            locale={dateLocale}
            className="z-50 pointer-events-auto"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
