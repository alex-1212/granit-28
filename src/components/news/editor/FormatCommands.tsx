
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FormatCommand } from './types';

interface FormatCommandsProps {
  commands: FormatCommand[];
  onFormatParagraph: () => void;
  onFormatBreak: () => void;
  onPreview: () => void;
}

export function FormatCommands({
  commands,
  onFormatParagraph,
  onFormatBreak,
  onPreview
}: FormatCommandsProps) {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-1 mb-2 p-1 border border-input rounded-md bg-background">
        {commands.map((command, index) => (
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
            <TooltipContent>
              <div className="text-sm font-medium">{command.tooltip}</div>
              {command.description && (
                <div className="text-xs text-muted-foreground mt-1">{command.description}</div>
              )}
            </TooltipContent>
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
              onClick={onFormatParagraph}
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              <span className="text-xs">P</span>
              <span className="sr-only">Параграф</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="text-sm font-medium">Обернуть в параграф</div>
            <div className="text-xs text-muted-foreground mt-1">
              Обрамляет выделенный текст или текущий абзац тегами &lt;p&gt;&lt;/p&gt;
            </div>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onFormatBreak}
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              <span className="text-xs">BR</span>
              <span className="sr-only">Перенос строки</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="text-sm font-medium">Добавить перенос строки</div>
            <div className="text-xs text-muted-foreground mt-1">
              Вставляет тег &lt;br /&gt; для принудительного переноса строки
            </div>
          </TooltipContent>
        </Tooltip>
        
        <div className="ml-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={onPreview}
                className="h-8"
              >
                Предпросмотр
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="text-sm font-medium">Предварительный просмотр</div>
              <div className="text-xs text-muted-foreground mt-1">
                Показывает, как будет выглядеть отформатированный текст на странице
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
