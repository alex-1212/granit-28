
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  LogOut, 
  Trash, 
  ChevronLeft, 
  ChevronRight,
  Search,
  Pencil
} from 'lucide-react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ProtectedRoute } from '@/components/admin/ProtectedRoute';
import { NewsForm } from '@/components/admin/NewsForm';
import { useAuth } from '@/context/AuthContext';
import { NewsItem } from '@/data/news';
import { 
  getAllNews, 
  addNews, 
  updateNews, 
  deleteNews 
} from '@/services/newsService';

const AdminNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const itemsPerPage = 10;
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  // Load all news
  useEffect(() => {
    const loadAllNews = () => {
      const allNews = getAllNews();
      setNews(allNews);
    };
    
    loadAllNews();
  }, []);
  
  // Filter news based on search term
  const filteredNews = news.filter(item => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchLower) ||
      item.summary.toLowerCase().includes(searchLower) ||
      item.category.toLowerCase().includes(searchLower)
    );
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);
  
  // Handle add news
  const handleAddNews = (newsData: Omit<NewsItem, 'id'>) => {
    setIsSubmitting(true);
    
    try {
      const newNews = addNews(newsData);
      setNews([newNews, ...news]);
      setIsAddDialogOpen(false);
    } catch (error) {
      console.error('Error adding news:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle edit news
  const handleEditNews = (newsData: Omit<NewsItem, 'id'>) => {
    if (!selectedNews) return;
    
    setIsSubmitting(true);
    
    try {
      const updatedNews = updateNews(selectedNews.id, newsData);
      if (updatedNews) {
        setNews(news.map(item => 
          item.id === selectedNews.id ? updatedNews : item
        ));
      }
      setIsEditDialogOpen(false);
      setSelectedNews(null);
    } catch (error) {
      console.error('Error updating news:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle delete news
  const handleDeleteNews = (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить эту новость?')) {
      const success = deleteNews(id);
      if (success) {
        setNews(news.filter(item => item.id !== id));
      }
    }
  };
  
  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'dd MMMM yyyy', { locale: ru });
  };
  
  // Truncate text for display
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };
  
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <header className="bg-primary text-primary-foreground py-4 shadow-md">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Управление новостями</h1>
            <Button variant="secondary" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Выйти
            </Button>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold">Список новостей</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Поиск новостей..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Добавить новость
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Добавить новость</DialogTitle>
                  </DialogHeader>
                  <NewsForm
                    onSubmit={handleAddNews}
                    isSubmitting={isSubmitting}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* News table */}
          <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">ID</TableHead>
                  <TableHead>Заголовок</TableHead>
                  <TableHead className="hidden md:table-cell">Краткое описание</TableHead>
                  <TableHead className="hidden md:table-cell">Дата</TableHead>
                  <TableHead className="hidden md:table-cell">Категория</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedNews.length > 0 ? (
                  paginatedNews.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell>{truncateText(item.title, 50)}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {truncateText(item.summary, 80)}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {formatDate(item.date)}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{item.category}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setSelectedNews(item)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            {selectedNews && selectedNews.id === item.id && (
                              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle>Редактировать новость</DialogTitle>
                                </DialogHeader>
                                <NewsForm
                                  initialData={selectedNews}
                                  onSubmit={handleEditNews}
                                  isSubmitting={isSubmitting}
                                />
                              </DialogContent>
                            )}
                          </Dialog>
                          
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => handleDeleteNews(item.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      {searchTerm ? 'Новости не найдены' : 'Нет доступных новостей'}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-6">
              <div className="text-sm text-muted-foreground">
                Показано {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredNews.length)} из {filteredNews.length}
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <span className="text-sm font-medium">
                  Страница {currentPage} из {totalPages}
                </span>
                
                <Button
                  variant="outline"
                  size="icon"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default AdminNews;
