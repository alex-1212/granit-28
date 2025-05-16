
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { FormattedTextEditorProps } from './editor/types';
import { useFormatting } from './editor/useFormatting';
import { FormatCommands } from './editor/FormatCommands';
import { EditorArea } from './editor/EditorArea';
import { createFormatCommands } from './editor/createFormatCommands';

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
  const {
    textareaRef,
    insertFormatting,
    formatParagraph,
    formatBreak
  } = useFormatting(value, onChange);

  const formatCommands = createFormatCommands(insertFormatting);

  const handlePreview = () => {
    alert('Предпросмотр: отображение HTML-разметки будет таким же, как в детальной странице новости.');
  };

  return (
    <div className="space-y-2">
      <FormatCommands 
        commands={formatCommands}
        onFormatParagraph={formatParagraph}
        onFormatBreak={formatBreak}
        onPreview={handlePreview}
      />
      
      <EditorArea
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        required={required}
        textareaRef={textareaRef}
        theme={theme}
      />
    </div>
  );
}
