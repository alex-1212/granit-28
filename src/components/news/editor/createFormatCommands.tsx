
import React from 'react';
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
import { FormatCommand } from './types';

export function createFormatCommands(insertFormatting: (prefix: string, suffix: string, defaultText?: string) => void): FormatCommand[] {
  return [
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
}
