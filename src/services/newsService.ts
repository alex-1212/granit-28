
import { NewsItem, newsData } from '../data/news';

// Local storage key
const NEWS_STORAGE_KEY = 'granitNewsData';

// Initialize news data from localStorage or default data
const initializeNews = (): NewsItem[] => {
  const savedNews = localStorage.getItem(NEWS_STORAGE_KEY);
  if (savedNews) {
    try {
      return JSON.parse(savedNews);
    } catch (error) {
      console.error('Error parsing saved news data:', error);
    }
  }
  return [...newsData];
};

// In-memory storage for news items, initially loaded from localStorage or defaults
let news: NewsItem[] = initializeNews();

// Save current news to localStorage
const saveNewsToStorage = () => {
  localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(news));
};

// Get all news items, sorted by id descending (newest first)
export const getAllNews = (): NewsItem[] => {
  // Refresh from localStorage each time to ensure latest data
  news = initializeNews();
  return [...news].sort((a, b) => b.id - a.id);
};

// Get a single news item by id
export const getNewsById = (id: number): NewsItem | undefined => {
  // Refresh from localStorage to ensure latest data
  news = initializeNews();
  return news.find(item => item.id === id);
};

// Add a new news item
export const addNews = (newsItem: Omit<NewsItem, 'id'>): NewsItem => {
  const id = news.length > 0 ? Math.max(...news.map(item => item.id)) + 1 : 1;
  const newItem = { ...newsItem, id };
  news.push(newItem);
  saveNewsToStorage(); // Save after adding
  return newItem;
};

// Update an existing news item
export const updateNews = (id: number, updatedNews: Omit<NewsItem, 'id'>): NewsItem | null => {
  const index = news.findIndex(item => item.id === id);
  if (index === -1) return null;
  
  const updatedItem = { ...updatedNews, id };
  news[index] = updatedItem;
  saveNewsToStorage(); // Save after updating
  return updatedItem;
};

// Delete a news item
export const deleteNews = (id: number): boolean => {
  const initialLength = news.length;
  news = news.filter(item => item.id !== id);
  const deleted = news.length < initialLength;
  if (deleted) {
    saveNewsToStorage(); // Save after deleting
  }
  return deleted;
};

// Reset to default data (useful for development)
export const resetNewsData = (): void => {
  news = [...newsData];
  saveNewsToStorage();
};
