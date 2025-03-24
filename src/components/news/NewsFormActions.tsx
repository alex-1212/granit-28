
import React from 'react';
import { CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface NewsFormActionsProps {
  isSubmitting: boolean;
  isEditing: boolean;
  onCancel: () => void;
}

const NewsFormActions: React.FC<NewsFormActionsProps> = ({
  isSubmitting,
  isEditing,
  onCancel
}) => {
  return (
    <CardFooter className="flex justify-between">
      <Button variant="outline" type="button" onClick={onCancel}>
        Отмена
      </Button>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting
          ? 'Сохранение...'
          : isEditing
          ? 'Сохранить изменения'
          : 'Добавить новость'}
      </Button>
    </CardFooter>
  );
};

export default NewsFormActions;
