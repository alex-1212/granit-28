
import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteNews } from '@/services/newsService';
import { useToast } from '@/hooks/use-toast';

interface DeleteNewsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  newsId: string;
  newsTitle: string;
}

export function DeleteNewsDialog({ isOpen, onClose, onSuccess, newsId, newsTitle }: DeleteNewsDialogProps) {
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    
    try {
      const result = await deleteNews(newsId);
      
      if (result.success) {
        toast({
          title: 'Новость удалена',
          description: 'Новость успешно удалена',
        });
        onSuccess();
      } else {
        toast({
          variant: 'destructive',
          title: 'Ошибка',
          description: result.error || 'Произошла ошибка при удалении новости',
        });
      }
    } catch (error) {
      console.error('Error deleting news:', error);
      toast({
        variant: 'destructive',
        title: 'Ошибка',
        description: 'Произошла неизвестная ошибка',
      });
    } finally {
      setIsDeleting(false);
      onClose();
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Вы уверены, что хотите удалить эту новость?</AlertDialogTitle>
          <AlertDialogDescription>
            Вы собираетесь удалить новость "{newsTitle}". Это действие нельзя будет отменить.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Отмена</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleDelete} 
            disabled={isDeleting}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isDeleting ? 'Удаление...' : 'Удалить'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
