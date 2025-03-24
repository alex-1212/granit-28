
import { supabase } from '@/integrations/supabase/client';
import { NewsItem, newsData } from '../data/news';

// Database table mapping
interface NewsDB {
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
const mapDbToNewsItem = (dbItem: NewsDB): NewsItem => ({
  id: dbItem.id,
  title: dbItem.title,
  date: dbItem.date,
  shortDescription: dbItem.short_description,
  fullText: dbItem.full_text,
  image: dbItem.image,
});

// Map application model to database model
const mapNewsItemToDb = (item: Omit<NewsItem, 'id'>): Omit<NewsDB, 'id' | 'created_at' | 'updated_at'> => ({
  title: item.title,
  date: item.date,
  short_description: item.shortDescription,
  full_text: item.fullText,
  image: item.image,
});

// Get all news items, sorted by id descending (newest first)
export const getAllNews = async (): Promise<NewsItem[]> => {
  try {
    console.log('Fetching all news from Supabase');
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      console.error('Error fetching news:', error);
      return [];
    }

    console.log('Fetched news data:', data);
    return (data as NewsDB[]).map(mapDbToNewsItem);
  } catch (error) {
    console.error('Error in getAllNews:', error);
    return [];
  }
};

// Get a single news item by id
export const getNewsById = async (id: number): Promise<NewsItem | undefined> => {
  try {
    console.log(`Fetching news with id: ${id}`);
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching news by id:', error);
      return undefined;
    }

    if (!data) {
      console.log(`No news found with id: ${id}`);
      return undefined;
    }

    return mapDbToNewsItem(data as NewsDB);
  } catch (error) {
    console.error('Error in getNewsById:', error);
    return undefined;
  }
};

// Add a new news item
export const addNews = async (newsItem: Omit<NewsItem, 'id'>): Promise<NewsItem | null> => {
  try {
    console.log('Adding news item:', newsItem);
    
    // Explicitly log the request
    console.log('Supabase request details:', {
      table: 'news',
      operation: 'insert',
      data: mapNewsItemToDb(newsItem)
    });
    
    const { data, error } = await supabase
      .from('news')
      .insert(mapNewsItemToDb(newsItem))
      .select()
      .single();

    if (error) {
      console.error('Error adding news:', error);
      console.error('Error details:', error.details, error.hint, error.message);
      return null;
    }

    console.log('Successfully added news, response:', data);
    return mapDbToNewsItem(data as NewsDB);
  } catch (error) {
    console.error('Error in addNews:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return null;
  }
};

// Update an existing news item
export const updateNews = async (id: number, updatedNews: Omit<NewsItem, 'id'>): Promise<NewsItem | null> => {
  try {
    console.log(`Updating news with id: ${id}`, updatedNews);
    
    // Explicitly log the request
    console.log('Supabase request details:', {
      table: 'news',
      operation: 'update',
      id,
      data: mapNewsItemToDb(updatedNews)
    });
    
    const { data, error } = await supabase
      .from('news')
      .update(mapNewsItemToDb(updatedNews))
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating news:', error);
      console.error('Error details:', error.details, error.hint, error.message);
      return null;
    }

    console.log('Successfully updated news, response:', data);
    return mapDbToNewsItem(data as NewsDB);
  } catch (error) {
    console.error('Error in updateNews:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return null;
  }
};

// Delete a news item
export const deleteNews = async (id: number): Promise<boolean> => {
  try {
    console.log(`Deleting news with id: ${id}`);
    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting news:', error);
      console.error('Error details:', error.details, error.hint, error.message);
      return false;
    }

    console.log('Successfully deleted news with id:', id);
    return true;
  } catch (error) {
    console.error('Error in deleteNews:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return false;
  }
};

// Reset to default data (useful for development)
export const resetNewsData = async (): Promise<void> => {
  try {
    // Delete all existing news
    await supabase.from('news').delete().neq('id', 0);
    
    // Add default news data
    for (const item of newsData) {
      await supabase.from('news').insert(mapNewsItemToDb(item));
    }
  } catch (error) {
    console.error('Error in resetNewsData:', error);
  }
};
