
import { NewsItem } from '@/data/news';

// Database table mapping
export interface NewsDB {
  id: number;
  title: string;
  date: string;
  short_description: string;
  full_text: string;
  image: string;
  created_at: string;
  updated_at: string;
}

// Map database model to application model
export const mapDbToNewsItem = (dbItem: NewsDB): NewsItem => ({
  id: dbItem.id,
  title: dbItem.title,
  date: dbItem.date,
  shortDescription: dbItem.short_description,
  fullText: dbItem.full_text,
  image: dbItem.image,
});

// Map application model to database model
export const mapNewsItemToDb = (item: Omit<NewsItem, 'id'>): Omit<NewsDB, 'id' | 'created_at' | 'updated_at'> => ({
  title: item.title,
  date: item.date,
  short_description: item.shortDescription,
  full_text: item.fullText,
  image: item.image,
});
