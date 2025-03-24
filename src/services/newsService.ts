
import { NewsItem, newsData } from '../data/news';

// In-memory storage for news items
let news: NewsItem[] = [...newsData];

// Get all news items, sorted by id descending (newest first)
export const getAllNews = (): NewsItem[] => {
  return [...news].sort((a, b) => b.id - a.id);
};

// Get a single news item by id
export const getNewsById = (id: number): NewsItem | undefined => {
  return news.find(item => item.id === id);
};

// Add a new news item
export const addNews = (newsItem: Omit<NewsItem, 'id'>): NewsItem => {
  const id = news.length > 0 ? Math.max(...news.map(item => item.id)) + 1 : 1;
  const newItem = { ...newsItem, id };
  news.push(newItem);
  return newItem;
};

// Update an existing news item
export const updateNews = (id: number, updatedNews: Omit<NewsItem, 'id'>): NewsItem | null => {
  const index = news.findIndex(item => item.id === id);
  if (index === -1) return null;
  
  const updatedItem = { ...updatedNews, id };
  news[index] = updatedItem;
  return updatedItem;
};

// Delete a news item
export const deleteNews = (id: number): boolean => {
  const initialLength = news.length;
  news = news.filter(item => item.id !== id);
  return news.length < initialLength;
};
