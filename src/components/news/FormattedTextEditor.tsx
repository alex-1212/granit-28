
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Heading1, 
  Heading2, 
  Heading3,
  Code
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface FormattedTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
}

export function FormattedTextEditor({
  value,
  onChange,
  rows = 10,
  name,
  id,
  placeholder,
  required = false,
}: FormattedTextEditorProps) {
  const { theme } = useTheme();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const getSelection = () => {
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

  const formatCommands = [
    {
      name: 'Заголовок (16px)',
      icon: <Heading1 className="h-4 w-4" />,
      action: () => insertFormatting('<h1>', '</h1>', 'Заголовок с синей полосой'),
      tooltip: 'Заголовок с синей полосой слева (16px)'
    },
    {
      name: 'Подзаголовок с полосой (16px)',
      icon: <Heading2 className="h-4 w-4" />,
      action: () => insertFormatting('<h2>', '</h2>', 'Подзаголовок с синей полосой'),
      tooltip: 'Подзаголовок с синей полосой слева (16px)'
    },
    {
      name: 'Подзаголовок с маркером (16px)',
      icon: <Heading3 className="h-4 w-4" />,
      action: () => insertFormatting('<h3>', '</h3>', 'Подзаголовок с маркером'),
      tooltip: 'Подзаголовок с синим маркером (16px)'
    },
    {
      name: 'Жирный',
      icon: <Bold className="h-4 w-4" />,
      action: () => insertFormatting('<strong>', '</strong>'),
      tooltip: 'Жирный текст'
    },
    {
      name: 'Курсив',
      icon: <Italic className="h-4 w-4" />,
      action: () => insertFormatting('<em>', '</em>'),
      tooltip: 'Курсивный текст'
    },
    {
      name: 'Цитата',
      icon: <Quote className="h-4 w-4" />,
      action: () => insertFormatting('<blockquote>', '</blockquote>', 'Цитата'),
      tooltip: 'Цитата с синей рамкой слева'
    },
    {
      name: 'Маркированный список',
      icon: <List className="h-4 w-4" />,
      action: () => insertFormatting('<ul>\n  <li>', '</li>\n  <li>Элемент списка</li>\n</ul>'),
      tooltip: 'Список с маркерами (синие точки)'
    },
    {
      name: 'Нумерованный список',
      icon: <ListOrdered className="h-4 w-4" />,
      action: () => insertFormatting('<ol>\n  <li>', '</li>\n  <li>Элемент списка</li>\n</ol>'),
      tooltip: 'Нумерованный список'
    },
    {
      name: 'Код',
      icon: <Code className="h-4 w-4" />,
      action: () => insertFormatting('<pre><code>', '</code></pre>'),
      tooltip: 'Блок кода'
    }
  ];

  const formatParagraph = () => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
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

  const handlePreview = () => {
    alert('Предпросмотр: отображение HTML-разметки будет таким же, как в детальной странице новости.');
  };

  return (
    <div className="space-y-2">
      <TooltipProvider>
        <div className="flex flex-wrap gap-1 mb-2 p-1 border border-input rounded-md bg-background">
          {formatCommands.map((command, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={command.action}
                  className="h-8 px-2 text-muted-foreground hover:text-foreground"
                >
                  {command.icon}
                  <span className="sr-only">{command.name}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{command.tooltip}</TooltipContent>
            </Tooltip>
          ))}
          
          <div className="flex items-center h-8 px-2">
            <span className="text-muted-foreground">|</span>
          </div>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={formatParagraph}
                className="h-8 px-2 text-muted-foreground hover:text-foreground"
              >
                <span className="text-xs">P</span>
                <span className="sr-only">Параграф</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Обернуть в параграф</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={formatBreak}
                className="h-8 px-2 text-muted-foreground hover:text-foreground"
              >
                <span className="text-xs">BR</span>
                <span className="sr-only">Перенос строки</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Добавить перенос строки</TooltipContent>
          </Tooltip>
          
          <div className="ml-auto">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handlePreview}
              className="h-8"
            >
              Предпросмотр
            </Button>
          </div>
        </div>
      </TooltipProvider>
      
      <Textarea
        ref={textareaRef}
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className={`font-mono text-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} min-h-[200px]`}
      />
      
      <div className="text-xs text-muted-foreground">
        <p>Подсказка: Выделите текст и нажмите на кнопку форматирования для применения стиля.</p>
      </div>
    </div>
  );
}
