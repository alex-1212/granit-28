import { NewsItem, newsData } from '@/data/news';
import { toast } from 'sonner';

// Local storage key
const NEWS_STORAGE_KEY = 'granit_news_data';

// Load news from localStorage or use default data
export const loadNews = (): NewsItem[] => {
  if (typeof window === 'undefined') return newsData;
  
  const savedNews = localStorage.getItem(NEWS_STORAGE_KEY);
  if (savedNews) {
    try {
      return JSON.parse(savedNews);
    } catch (error) {
      console.error('Error loading news from localStorage:', error);
      return newsData;
    }
  }
  
  // If no saved data exists, save the default data
  saveNews(newsData);
  return newsData;
};

// Save news to localStorage
export const saveNews = (news: NewsItem[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(news));
};

// Get all news
export const getAllNews = (): NewsItem[] => {
  return loadNews();
};

// Get news by ID
export const getNewsById = (id: string): NewsItem | undefined => {
  const allNews = loadNews();
  return allNews.find(item => item.id === id);
};

// Add a new news item
export const addNews = (news: Omit<NewsItem, 'id'>): NewsItem => {
  const allNews = loadNews();
  
  // Generate a new ID
  const newId = allNews.length > 0 
    ? (Math.max(...allNews.map(n => parseInt(n.id))) + 1).toString()
    : '1';
  
  const newNews: NewsItem = {
    ...news,
    id: newId
  };
  
  // Add to the beginning to keep newest first
  const updatedNews = [newNews, ...allNews];
  saveNews(updatedNews);
  
  toast.success('Новость успешно добавлена');
  return newNews;
};

// Update an existing news item
export const updateNews = (id: string, news: Omit<NewsItem, 'id'>): NewsItem | null => {
  const allNews = loadNews();
  const index = allNews.findIndex(item => item.id === id);
  
  if (index === -1) {
    toast.error('Новость не найдена');
    return null;
  }
  
  const updatedNews: NewsItem = {
    ...news,
    id
  };
  
  allNews[index] = updatedNews;
  saveNews(allNews);
  
  toast.success('Новость успешно обновлена');
  return updatedNews;
};

// Delete a news item
export const deleteNews = (id: string): boolean => {
  const allNews = loadNews();
  const filteredNews = allNews.filter(item => item.id !== id);
  
  if (filteredNews.length === allNews.length) {
    toast.error('Новость не найдена');
    return false;
  }
  
  saveNews(filteredNews);
  toast.success('Новость успешно удалена');
  return true;
};
