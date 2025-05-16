
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
              onClick={onFormatParagraph}
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
              onClick={onFormatBreak}
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
            onClick={onPreview}
            className="h-8"
          >
            Предпросмотр
          </Button>
        </div>
      </div>
    </TooltipProvider>
  );
}
