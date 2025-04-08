
import React from 'react';
import { RefreshCw } from 'lucide-react';

// Типы для капчи
export type CaptchaOperation = '+' | '-' | '*';
export type Captcha = {
  num1: number;
  num2: number;
  operation: CaptchaOperation;
  solution: number;
};

interface CaptchaComponentProps {
  captcha: Captcha | null;
  captchaInput: string;
  setCaptchaInput: (value: string) => void;
  generateCaptcha: () => void;
  error?: string;
}

const CaptchaComponent: React.FC<CaptchaComponentProps> = ({ 
  captcha, 
  captchaInput, 
  setCaptchaInput, 
  generateCaptcha, 
  error 
}) => {
  return (
    <div>
      <label htmlFor="captcha" className="block text-foreground font-medium mb-2">
        Проверка*
      </label>
      <div className="flex items-center gap-4">
        <div className="glass-card-solid rounded-lg p-3 flex items-center gap-2 flex-grow">
          {captcha && (
            <span className="text-lg font-medium">
              {captcha.num1} {captcha.operation} {captcha.num2} = ?
            </span>
          )}
        </div>
        <button 
          type="button" 
          onClick={generateCaptcha}
          className="p-3 rounded-lg border border-border bg-background hover:bg-accent transition-colors"
          aria-label="Обновить капчу"
        >
          <RefreshCw size={20} />
        </button>
        <input 
          type="text" 
          id="captcha"
          value={captchaInput}
          onChange={e => setCaptchaInput(e.target.value)}
          className={`w-20 px-4 py-3 rounded-lg border ${error ? 'border-destructive' : 'border-border'} bg-background focus:outline-none focus:ring-2 focus:ring-primary/30`} 
          placeholder="?"
        />
      </div>
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
};

export default CaptchaComponent;
