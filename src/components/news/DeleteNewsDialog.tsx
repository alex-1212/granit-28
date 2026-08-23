
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
import { useLanguage } from '@/i18n/LanguageContext';

interface DeleteNewsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  newsId: string;
  newsTitle: string;
}

export function DeleteNewsDialog({ isOpen, onClose, onSuccess, newsId, newsTitle }: DeleteNewsDialogProps) {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    
    try {
      const result = await deleteNews(newsId);
      
      if (result.success) {
        toast({
          title: t('news.ui.delete.successTitle'),
          description: t('news.ui.delete.successDesc'),
        });
        onSuccess();
      } else {
        toast({
          variant: 'destructive',
          title: t('news.ui.error'),
          description: result.error || t('news.ui.delete.errorDesc'),
        });
      }
    } catch (error) {
      console.error('Error deleting news:', error);
      toast({
        variant: 'destructive',
        title: t('news.ui.error'),
        description: t('news.ui.unknownError'),
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
          <AlertDialogTitle>{t('news.ui.delete.confirmTitle')}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('news.ui.delete.confirmDesc').replace('{title}', newsTitle)}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>{t('news.ui.cancel')}</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleDelete} 
            disabled={isDeleting}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isDeleting ? t('news.ui.delete.deleting') : t('news.ui.admin.delete')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
