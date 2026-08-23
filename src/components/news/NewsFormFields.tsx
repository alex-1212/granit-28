
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categoryOptions } from './NewsEditorSchema';
import { FileUploader } from './FileUploader';
import { DatePickerField } from './DatePickerField';
import { FormattedTextEditor } from './FormattedTextEditor';
import { useLanguage } from '@/i18n/LanguageContext';

const categoryLabelKeys: Record<string, string> = {
  'Проекты': 'news.ui.category.projects',
  'Технологии': 'news.ui.category.technologies',
  'События': 'news.ui.category.events',
};

interface NewsFormFieldsProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleContentChange: (content: string) => void;
  handleCategoryChange: (value: string) => void;
  handleDateChange: (date: Date) => void;
  handleFileUpload: (url: string) => void;
}

export function NewsFormFields({ 
  formData, 
  handleChange, 
  handleContentChange,
  handleCategoryChange, 
  handleDateChange,
  handleFileUpload
}: NewsFormFieldsProps) {
  const { t } = useLanguage();
  // Преобразуем строку даты в объект Date для компонента DatePicker
  const dateObject = formData.date ? new Date(formData.date) : new Date();
  
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="space-y-2">
        <Label htmlFor="title">{t('news.ui.form.titleLabel')}</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="slug">URL (slug)</Label>
        <Input
          id="slug"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          placeholder={t('news.ui.form.slugPlaceholder')}
        />
        <p className="text-xs text-muted-foreground">
          {t('news.ui.form.slugHint')}
        </p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="summary">{t('news.ui.form.summaryLabel')}</Label>
        <Textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          required
          rows={2}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="content">{t('news.ui.form.contentLabel')}</Label>
        <FormattedTextEditor
          id="content"
          name="content"
          value={formData.content}
          onChange={handleContentChange}
          required
          rows={15}
          placeholder={t('news.ui.form.contentPlaceholder')}
        />
      </div>
      
      <FileUploader 
        onFileUploaded={handleFileUpload} 
        currentImage={formData.image}
      />
      
      <div className="space-y-2">
        <Label htmlFor="category">{t('news.ui.form.categoryLabel')}</Label>
        <Select 
          value={formData.category} 
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={t('news.ui.form.categoryPlaceholder')} />
          </SelectTrigger>
          <SelectContent>
            {categoryOptions.map((category) => (
              <SelectItem key={category} value={category}>
                {categoryLabelKeys[category] ? t(categoryLabelKeys[category]) : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <DatePickerField
        date={dateObject}
        onDateChange={handleDateChange}
      />
    </div>
  );
}
