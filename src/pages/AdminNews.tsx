
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { NewsItem } from '@/data/news';
import { getAllNews, deleteNews, addProvidedNews } from '@/services/newsService';
import { LogOut, Plus, Pencil, Trash2, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import NewsForm from '@/components/news/NewsForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const AdminNews: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState<NewsItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingDefaultNews, setIsAddingDefaultNews] = useState(false);
  const { toast } = useToast();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin-login');
    }
  }, [isAuthenticated, navigate]);

  // Load news items
  useEffect(() => {
    refreshNews();
  }, []);

  // Refresh news list
  const refreshNews = async () => {
    setIsLoading(true);
    try {
      const news = await getAllNews();
      setNewsItems(news);
    } catch (error) {
      console.error('Error fetching news:', error);
      toast({
        title: "Ошибка загрузки",
        description: "Не удалось загрузить список новостей",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle editing a news item
  const handleEdit = (news: NewsItem) => {
    setCurrentNews(news);
    setIsFormOpen(true);
  };

  // Handle deleting a news item
  const handleDelete = async (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить эту новость?')) {
      try {
        const success = await deleteNews(id);
        if (success) {
          toast({
            title: "Новость удалена",
            description: "Новость была успешно удалена",
          });
          refreshNews();
        } else {
          toast({
            title: "Ошибка",
            description: "Не удалось удалить новость",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error deleting news:', error);
        toast({
          title: "Ошибка",
          description: "Произошла ошибка при удалении новости",
          variant: "destructive",
        });
      }
    }
  };

  // Handle adding a new news item
  const handleAddNew = () => {
    setCurrentNews(null);
    setIsFormOpen(true);
  };

  // Handle adding default news
  const handleAddDefaultNews = async () => {
    setIsAddingDefaultNews(true);
    try {
      const success = await addProvidedNews();
      if (success) {
        toast({
          title: "Новости добавлены",
          description: "Предоставленные новости были успешно добавлены",
        });
        refreshNews();
      } else {
        toast({
          title: "Ошибка",
          description: "Не удалось добавить предоставленные новости",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error adding default news:', error);
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при добавлении новостей",
        variant: "destructive",
      });
    } finally {
      setIsAddingDefaultNews(false);
    }
  };

  // After form submission
  const handleFormSubmit = () => {
    setIsFormOpen(false);
    setCurrentNews(null);
    refreshNews();
  };

  // Close form
  const handleFormClose = () => {
    setIsFormOpen(false);
    setCurrentNews(null);
  };

  return (
    <div className="container mx-auto p-4 py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Управление новостями</h1>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Добавить тестовые новости
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Добавить предоставленные новости?</DialogTitle>
                <DialogDescription>
                  Это действие заменит все существующие новости пятью предоставленными новостями.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Отмена</Button>
                </DialogClose>
                <Button 
                  onClick={handleAddDefaultNews} 
                  disabled={isAddingDefaultNews}
                >
                  {isAddingDefaultNews ? 'Добавление...' : 'Добавить'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button onClick={handleAddNew}>
            <Plus className="mr-2 h-4 w-4" />
            Добавить новость
          </Button>
          <Button variant="outline" onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" />
            Выйти
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Список новостей</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-4">
              <p>Загрузка...</p>
            </div>
          ) : newsItems.length > 0 ? (
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
                {newsItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDelete(item.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-4">
              <p>Нет добавленных новостей</p>
            </div>
          )}
        </CardContent>
      </Card>

      {isFormOpen && (
        <NewsForm
          newsItem={currentNews}
          onSubmit={handleFormSubmit}
          onCancel={handleFormClose}
        />
      )}
    </div>
  );
};

export default AdminNews;
