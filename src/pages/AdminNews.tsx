
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { NewsForm } from '@/components/admin/NewsForm';
import { Plus, Edit, Trash, LogOut, ArrowLeft } from 'lucide-react';
import { News } from '@/models/News';
import { getAllNews, addNews, updateNews, deleteNews } from '@/services/newsService';
import { logout } from '@/services/authService';

const AdminNews: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [news, setNews] = useState<News[]>(getAllNews());
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);
  
  // Handle logout
  const handleLogout = () => {
    logout();
    toast({
      title: "Успешный выход",
      description: "Вы вышли из панели администратора",
    });
    navigate('/admin-login');
  };
  
  // Open the form to add a new news item
  const handleAddNews = () => {
    setSelectedNews(null);
    setIsFormOpen(true);
  };
  
  // Open the form to edit an existing news item
  const handleEditNews = (item: News) => {
    setSelectedNews(item);
    setIsFormOpen(true);
  };
  
  // Open the delete confirmation dialog
  const handleDeleteClick = (item: News) => {
    setSelectedNews(item);
    setIsDeleteDialogOpen(true);
  };
  
  // Confirm news deletion
  const handleConfirmDelete = () => {
    if (selectedNews) {
      deleteNews(selectedNews.id);
      setNews(getAllNews());
      toast({
        title: "Новость удалена",
        description: `"${selectedNews.title}" была успешно удалена`,
      });
      setIsDeleteDialogOpen(false);
      setSelectedNews(null);
    }
  };
  
  // Handle form submission (for both add and edit)
  const handleFormSubmit = (data: Omit<News, 'id'>) => {
    if (selectedNews) {
      // Update existing news
      updateNews({ ...data, id: selectedNews.id });
      toast({
        title: "Новость обновлена",
        description: `"${data.title}" была успешно обновлена`,
      });
    } else {
      // Add new news
      addNews(data);
      toast({
        title: "Новость добавлена",
        description: `"${data.title}" была успешно добавлена`,
      });
    }
    
    setNews(getAllNews());
    setIsFormOpen(false);
    setSelectedNews(null);
  };
  
  return (
    <>
      <Helmet>
        <title>Управление новостями | ООО «Гранит»</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Управление новостями</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <Link to="/news">
              <Button variant="outline" size="sm">
                Просмотреть сайт
              </Button>
            </Link>
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Выйти
            </Button>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Список новостей</CardTitle>
                <CardDescription>
                  Управляйте новостями компании
                </CardDescription>
              </div>
              <Button onClick={handleAddNews}>
                <Plus className="h-4 w-4 mr-2" />
                Добавить новость
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Заголовок</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {news.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-8">
                      Нет доступных новостей
                    </TableCell>
                  </TableRow>
                ) : (
                  news.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleEditNews(item)}
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Ред.
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm" 
                            onClick={() => handleDeleteClick(item)}
                          >
                            <Trash className="h-4 w-4 mr-1" />
                            Удалить
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      
      {/* Add/Edit News Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedNews ? 'Редактировать новость' : 'Добавить новость'}
            </DialogTitle>
            <DialogDescription>
              {selectedNews
                ? 'Внесите изменения в выбранную новость'
                : 'Заполните форму для добавления новой новости'}
            </DialogDescription>
          </DialogHeader>
          
          <NewsForm 
            initialData={selectedNews || undefined}
            onSubmit={handleFormSubmit}
            onCancel={() => setIsFormOpen(false)}
          />
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Подтверждение удаления</DialogTitle>
            <DialogDescription>
              Вы уверены, что хотите удалить новость "{selectedNews?.title}"?
              Это действие нельзя отменить.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex justify-end gap-2 mt-4">
            <Button 
              variant="outline" 
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Отмена
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleConfirmDelete}
            >
              <Trash className="h-4 w-4 mr-2" />
              Удалить
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminNews;
