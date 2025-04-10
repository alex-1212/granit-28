
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

// Добавим новый класс для стилизации кнопки обновления
const refreshButtonClass = 'hover:bg-blue-500 hover:border-blue-500 hover:text-white';

interface CaptchaComponentProps {
  value: string;
  onChange: (value: string) => void;
}

const CaptchaComponent: React.FC<CaptchaComponentProps> = ({ value, onChange }) => {
  const [captchaText, setCaptchaText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const generateCaptcha = () => {
    setIsLoading(true);
    
    // Генерируем случайную строку для капчи
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    setTimeout(() => {
      setCaptchaText(result);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 p-3 h-12 bg-muted/50 rounded-md flex items-center justify-center border">
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          ) : (
            <div className="text-muted-foreground font-mono font-bold tracking-widest text-lg select-none">
              {captchaText}
            </div>
          )}
        </div>
        <Button 
          type="button" 
          variant="outline" 
          size="sm" 
          onClick={generateCaptcha}
          className={cn("h-12 w-12 flex-shrink-0", refreshButtonClass)}
          title="Обновить"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Введите код с картинки"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div className="text-xs text-muted-foreground">
        <span className="font-bold">*</span> Проверка
      </div>
    </div>
  );
};

export default CaptchaComponent;
