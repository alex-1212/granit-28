
import { ReactNode } from 'react';

export interface FormatCommand {
  name: string;
  icon: ReactNode;
  action: () => void;
  tooltip: string;
  description?: string; // Дополнительное описание для более подробных подсказок
}

export interface FormattedTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
}

export interface TextSelection {
  start: number;
  end: number;
  text: string;
}

/**
 * Типы форматирования для категоризации команд
 */
export type FormatType = 'heading' | 'text' | 'block' | 'list' | 'special';

/**
 * Расширенное описание команды для более информативных подсказок
 */
export interface CommandDescription {
  purpose: string;      // Назначение команды
  usage: string;        // Как использовать
  example?: string;     // Пример использования
}
