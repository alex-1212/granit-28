import { supabase } from "@/integrations/supabase/client";

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  image: string;
  category: string; // Changed from union type to string to match database
}

export async function getAllNews(): Promise<NewsItem[]> {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false });
    
    if (error) {
      console.error('Error fetching news:', error);
      return [];
    }
    
    console.log('Fetched all news successfully:', data?.length || 0, 'items');
    return data || [];
  } catch (err) {
    console.error('Unexpected error fetching news:', err);
    return [];
  }
}

export async function getNewsById(id: string): Promise<NewsItem | null> {
  try {
    if (!id) {
      console.error('Invalid news ID provided');
      return null;
    }

    console.log('Fetching news by ID:', id);
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Error fetching news by id:', error);
      return null;
    }
    
    console.log('Fetched news by ID result:', data ? 'Found' : 'Not found');
    return data;
  } catch (err) {
    console.error('Unexpected error fetching news by id:', err);
    return null;
  }
}

export async function getRelatedNews(category: string, currentId: string, limit?: number): Promise<NewsItem[]> {
  try {
    console.log(`Fetching related news for category: ${category}, excluding ID: ${currentId}`);
    let query = supabase
      .from('news')
      .select('*')
      .eq('category', category)
      .neq('id', currentId)
      .order('date', { ascending: false });
    
    // Only apply limit if specified
    if (limit) {
      query = query.limit(limit);
    }
    
    const { data, error } = await query;
    
    if (error) {
      console.error('Error fetching related news:', error);
      return [];
    }
    
    console.log(`Found ${data?.length || 0} related news items`);
    return data || [];
  } catch (err) {
    console.error('Unexpected error fetching related news:', err);
    return [];
  }
}

export async function createNews(newsData: Omit<NewsItem, 'id'>): Promise<{success: boolean, data?: NewsItem, error?: string}> {
  console.log('Creating new news item:', newsData.title);
  const { data, error } = await supabase
    .from('news')
    .insert([newsData])
    .select('*')
    .single();
  
  if (error) {
    console.error('Error creating news:', error);
    return { success: false, error: error.message };
  }
  
  console.log('Successfully created news item with ID:', data.id);
  return { success: true, data };
}

export async function updateNews(id: string, newsData: Partial<Omit<NewsItem, 'id'>>): Promise<{success: boolean, data?: NewsItem, error?: string}> {
  console.log('Updating news item:', id);
  const { data, error } = await supabase
    .from('news')
    .update(newsData)
    .eq('id', id)
    .select('*')
    .single();
  
  if (error) {
    console.error('Error updating news:', error);
    return { success: false, error: error.message };
  }
  
  console.log('Successfully updated news item');
  return { success: true, data };
}

export async function deleteNews(id: string): Promise<{success: boolean, error?: string}> {
  console.log('Deleting news item:', id);
  const { error } = await supabase
    .from('news')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting news:', error);
    return { success: false, error: error.message };
  }
  
  console.log('Successfully deleted news item');
  return { success: true };
}
