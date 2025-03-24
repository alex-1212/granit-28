
import React from 'react';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface NewsFormHeaderProps {
  isEditing: boolean;
  onCancel: () => void;
}

const NewsFormHeader: React.FC<NewsFormHeaderProps> = ({ isEditing, onCancel }) => {
  return (
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle>{isEditing ? 'Редактировать новость' : 'Добавить новость'}</CardTitle>
      <Button variant="ghost" size="icon" onClick={onCancel}>
        <X />
      </Button>
    </CardHeader>
  );
};

export default NewsFormHeader;
