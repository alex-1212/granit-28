
import { supabase } from '@/integrations/supabase/client';
import { NewsItem } from '@/types/news';
import { mapToNewsItem, mapToDbNews } from './newsMapping';

export const getAllNews = async (): Promise<NewsItem[]> => {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('publishDate', { ascending: false });

  if (error) {
    console.error('Error fetching news:', error);
    throw error;
  }

  return data.map(mapToNewsItem);
};

export const getNewsById = async (id: string): Promise<NewsItem | null> => {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null; // Record not found
    }
    console.error('Error fetching news by id:', error);
    throw error;
  }

  return mapToNewsItem(data);
};

export const createNews = async (news: NewsItem): Promise<NewsItem> => {
  const dbNews = mapToDbNews(news);
  const { data, error } = await supabase
    .from('news')
    .insert(dbNews)
    .select()
    .single();

  if (error) {
    console.error('Error creating news:', error);
    throw error;
  }

  return mapToNewsItem(data);
};

export const updateNews = async (news: NewsItem): Promise<NewsItem> => {
  const dbNews = mapToDbNews(news);
  const { data, error } = await supabase
    .from('news')
    .update(dbNews)
    .eq('id', news.id)
    .select()
    .single();

  if (error) {
    console.error('Error updating news:', error);
    throw error;
  }

  return mapToNewsItem(data);
};

export const deleteNews = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('news')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting news:', error);
    throw error;
  }
};
