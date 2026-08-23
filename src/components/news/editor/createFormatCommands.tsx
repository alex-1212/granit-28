
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

export function createFormatCommands(insertFormatting: (prefix: string, suffix: string, defaultText?: string) => void, t: (key: string) => string): FormatCommand[] {
  return [
    {
      name: t('news.ui.editor.h1Name'),
      icon: <Heading1 className="h-4 w-4" />,
      action: () => insertFormatting('<h1>', '</h1>', t('news.ui.editor.h1Default')),
      tooltip: t('news.ui.editor.h1Tooltip'),
      description: t('news.ui.editor.h1Description')
    },
    {
      name: t('news.ui.editor.h2Name'),
      icon: <Heading2 className="h-4 w-4" />,
      action: () => insertFormatting('<h2>', '</h2>', t('news.ui.editor.h2Default')),
      tooltip: t('news.ui.editor.h2Tooltip'),
      description: t('news.ui.editor.h2Description')
    },
    {
      name: t('news.ui.editor.h3Name'),
      icon: <Heading3 className="h-4 w-4" />,
      action: () => insertFormatting('<h3>', '</h3>', t('news.ui.editor.h3Default')),
      tooltip: t('news.ui.editor.h3Tooltip'),
      description: t('news.ui.editor.h3Description')
    },
    {
      name: t('news.ui.editor.boldName'),
      icon: <Bold className="h-4 w-4" />,
      action: () => insertFormatting('<strong>', '</strong>'),
      tooltip: t('news.ui.editor.boldTooltip'),
      description: t('news.ui.editor.boldDescription')
    },
    {
      name: t('news.ui.editor.italicName'),
      icon: <Italic className="h-4 w-4" />,
      action: () => insertFormatting('<em>', '</em>'),
      tooltip: t('news.ui.editor.italicTooltip'),
      description: t('news.ui.editor.italicDescription')
    },
    {
      name: t('news.ui.editor.quoteName'),
      icon: <Quote className="h-4 w-4" />,
      action: () => insertFormatting('<blockquote>', '</blockquote>', t('news.ui.editor.quoteDefault')),
      tooltip: t('news.ui.editor.quoteTooltip'),
      description: t('news.ui.editor.quoteDescription')
    },
    {
      name: t('news.ui.editor.ulName'),
      icon: <List className="h-4 w-4" />,
      action: () => insertFormatting('<ul>\n  <li>', `</li>\n  <li>${t('news.ui.editor.ulItem')}</li>\n</ul>`),
      tooltip: t('news.ui.editor.ulTooltip'),
      description: t('news.ui.editor.ulDescription')
    },
    {
      name: t('news.ui.editor.olName'),
      icon: <ListOrdered className="h-4 w-4" />,
      action: () => insertFormatting('<ol>\n  <li>', `</li>\n  <li>${t('news.ui.editor.ulItem')}</li>\n</ol>`),
      tooltip: t('news.ui.editor.olTooltip'),
      description: t('news.ui.editor.olDescription')
    },
    {
      name: t('news.ui.editor.codeName'),
      icon: <Code className="h-4 w-4" />,
      action: () => insertFormatting('<pre><code>', '</code></pre>'),
      tooltip: t('news.ui.editor.codeTooltip'),
      description: t('news.ui.editor.codeDescription')
    }
  ];
}
