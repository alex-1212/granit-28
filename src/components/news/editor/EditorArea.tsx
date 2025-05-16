
import React from 'react';
import { Textarea } from '@/components/ui/textarea';

interface EditorAreaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  theme: 'light' | 'dark';
}

export function EditorArea({
  id,
  name,
  value,
  onChange,
  rows = 10,
  placeholder,
  required = false,
  textareaRef,
  theme
}: EditorAreaProps) {
  return (
    <>
      <Textarea
        ref={textareaRef}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className={`font-mono text-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} min-h-[200px]`}
      />
      
      <div className="text-xs text-muted-foreground">
        <p>Подсказка: Выделите текст и нажмите на кнопку форматирования для применения стиля.</p>
      </div>
    </>
  );
}
