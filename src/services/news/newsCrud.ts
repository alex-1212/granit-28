
import { supabase } from '@/integrations/supabase/client';
import { NewsItem } from '@/data/news';
import { mapDbToNewsItem, mapNewsItemToDb, NewsDB } from './newsMapping';
import { verifyAuthentication } from './newsAuth';

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
    
    // Verify authentication
    if (!(await verifyAuthentication())) {
      throw new Error('User not authenticated');
    }
    
    // Make sure image is not empty
    if (!newsItem.image) {
      newsItem.image = '/images/news/placeholder.jpg';
    }
    
    // Prepare data for insertion
    const newsData = mapNewsItemToDb(newsItem);
    
    // Execute the request
    const { data, error } = await supabase
      .from('news')
      .insert(newsData)
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
    
    // Verify authentication
    if (!(await verifyAuthentication())) {
      throw new Error('User not authenticated');
    }
    
    // Make sure image is not empty
    if (!updatedNews.image) {
      updatedNews.image = '/images/news/placeholder.jpg';
    }
    
    // Prepare data for update
    const newsData = mapNewsItemToDb(updatedNews);
    
    // Execute the request
    const { data, error } = await supabase
      .from('news')
      .update(newsData)
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
    
    // Verify authentication
    if (!(await verifyAuthentication())) {
      throw new Error('User not authenticated');
    }
    
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
