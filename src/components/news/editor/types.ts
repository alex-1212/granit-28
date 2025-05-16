
import { ReactNode } from 'react';

export interface FormatCommand {
  name: string;
  icon: ReactNode;
  action: () => void;
  tooltip: string;
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
