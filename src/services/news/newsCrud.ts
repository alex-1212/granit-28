
import { NewsItem } from '@/types/news';
import { mapMockNewsToNewsItem } from './newsMapping';
import { newsData } from '@/data/news';

// Using mock data instead of Supabase database
export const getAllNews = async (): Promise<NewsItem[]> => {
  return newsData.map(mapMockNewsToNewsItem);
};

export const getNewsById = async (id: string): Promise<NewsItem | null> => {
  const newsItem = newsData.find(item => item.id === id);
  if (!newsItem) {
    return null;
  }
  return mapMockNewsToNewsItem(newsItem);
};

// These functions are kept for API compatibility but will not modify data
export const createNews = async (news: NewsItem): Promise<NewsItem> => {
  console.log('Create news operation attempted but not implemented:', news);
  return news;
};

export const updateNews = async (news: NewsItem): Promise<NewsItem> => {
  console.log('Update news operation attempted but not implemented:', news);
  return news;
};

export const deleteNews = async (id: string): Promise<void> => {
  console.log('Delete news operation attempted but not implemented:', id);
};
