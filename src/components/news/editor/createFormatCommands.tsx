
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
      tooltip: 'Заголовок с синей полосой слева (16px)',
      description: 'Создает крупный заголовок с синей вертикальной полосой слева и светлым фоном'
    },
    {
      name: 'Подзаголовок с полосой (16px)',
      icon: <Heading2 className="h-4 w-4" />,
      action: () => insertFormatting('<h2>', '</h2>', 'Подзаголовок с синей полосой'),
      tooltip: 'Подзаголовок с синей полосой слева (16px)',
      description: 'Создает подзаголовок с синей вертикальной полосой слева и светлым фоном'
    },
    {
      name: 'Подзаголовок с маркером (16px)',
      icon: <Heading3 className="h-4 w-4" />,
      action: () => insertFormatting('<h3>', '</h3>', 'Подзаголовок с маркером'),
      tooltip: 'Подзаголовок с синим маркером (16px)',
      description: 'Создает подзаголовок с небольшим синим маркером в виде точки слева'
    },
    {
      name: 'Жирный',
      icon: <Bold className="h-4 w-4" />,
      action: () => insertFormatting('<strong>', '</strong>'),
      tooltip: 'Выделение жирным шрифтом',
      description: 'Делает выделенный текст жирным для привлечения внимания'
    },
    {
      name: 'Курсив',
      icon: <Italic className="h-4 w-4" />,
      action: () => insertFormatting('<em>', '</em>'),
      tooltip: 'Выделение курсивом',
      description: 'Делает текст курсивным, используется для выделения определений или цитат'
    },
    {
      name: 'Цитата',
      icon: <Quote className="h-4 w-4" />,
      action: () => insertFormatting('<blockquote>', '</blockquote>', 'Цитата'),
      tooltip: 'Блок цитаты с оформлением',
      description: 'Создает блок для цитаты с синей рамкой слева и стильным оформлением'
    },
    {
      name: 'Маркированный список',
      icon: <List className="h-4 w-4" />,
      action: () => insertFormatting('<ul>\n  <li>', '</li>\n  <li>Элемент списка</li>\n</ul>'),
      tooltip: 'Список с маркерами (синие точки)',
      description: 'Создает маркированный список с синими точками перед каждым элементом'
    },
    {
      name: 'Нумерованный список',
      icon: <ListOrdered className="h-4 w-4" />,
      action: () => insertFormatting('<ol>\n  <li>', '</li>\n  <li>Элемент списка</li>\n</ol>'),
      tooltip: 'Нумерованный список с цифрами',
      description: 'Создает нумерованный список с автоматической нумерацией элементов'
    },
    {
      name: 'Код',
      icon: <Code className="h-4 w-4" />,
      action: () => insertFormatting('<pre><code>', '</code></pre>'),
      tooltip: 'Блок кода с моноширинным шрифтом',
      description: 'Форматирует текст как код с сохранением пробелов и переносов строк'
    }
  ];
}
