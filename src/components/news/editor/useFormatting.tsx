
import { useRef } from 'react';
import { FormatCommand, TextSelection } from './types';

export function useFormatting(value: string, onChange: (value: string) => void) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const getSelection = (): TextSelection => {
    if (!textareaRef.current) return { start: 0, end: 0, text: '' };
    
    const start = textareaRef.current.selectionStart;
    const end = textareaRef.current.selectionEnd;
    const text = value.substring(start, end);
    
    return { start, end, text };
  };

  const insertFormatting = (
    prefix: string,
    suffix: string,
    defaultText: string = 'Текст'
  ) => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const { start, end, text } = getSelection();
    const selectedText = text || defaultText;
    
    const newValue = 
      value.substring(0, start) + 
      prefix + 
      selectedText + 
      suffix + 
      value.substring(end);
    
    onChange(newValue);
    
    // Установка курсора после вставки
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + prefix.length + selectedText.length + suffix.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 10);
  };

  const formatParagraph = () => {
    if (!textareaRef.current) return;
    
    const { start, end } = getSelection();
    
    // Найдем начало и конец текущего абзаца
    const beforeCursor = value.substring(0, start);
    const afterCursor = value.substring(end);
    
    const lastNewlineBeforeCursor = beforeCursor.lastIndexOf('\n') + 1;
    const nextNewlineAfterCursor = afterCursor.indexOf('\n');
    
    const paragraphStart = lastNewlineBeforeCursor === -1 ? 0 : lastNewlineBeforeCursor;
    const paragraphEnd = nextNewlineAfterCursor === -1 ? 
      value.length : 
      start + nextNewlineAfterCursor;
    
    const paragraphText = value.substring(paragraphStart, paragraphEnd);
    
    if (paragraphText.trim() === '') return;
    
    // Если параграф уже обернут в <p></p>, ничего не делаем
    if (paragraphText.startsWith('<p>') && paragraphText.endsWith('</p>')) return;
    
    const newValue = 
      value.substring(0, paragraphStart) + 
      '<p>' + paragraphText + '</p>' + 
      value.substring(paragraphEnd);
    
    onChange(newValue);
  };

  const formatBreak = () => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const { start } = getSelection();
    
    const newValue = 
      value.substring(0, start) + 
      '<br />' + 
      value.substring(start);
    
    onChange(newValue);
    
    // Установка курсора после вставки
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + 6; // длина <br /> = 6
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 10);
  };

  return {
    textareaRef,
    getSelection,
    insertFormatting,
    formatParagraph,
    formatBreak
  };
}
