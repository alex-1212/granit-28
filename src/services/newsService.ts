
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
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('date', { ascending: false });
  
  if (error) {
    console.error('Error fetching news:', error);
    return [];
  }
  
  return data || [];
}

export async function getNewsById(id: string): Promise<NewsItem | null> {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching news by id:', error);
    return null;
  }
  
  return data;
}

export async function getRelatedNews(category: string, currentId: string, limit: number = 3): Promise<NewsItem[]> {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('category', category)
    .neq('id', currentId)
    .order('date', { ascending: false })
    .limit(limit);
  
  if (error) {
    console.error('Error fetching related news:', error);
    return [];
  }
  
  return data || [];
}

// Add new functions for authenticated users to manage news

export async function createNews(newsData: Omit<NewsItem, 'id'>): Promise<{success: boolean, data?: NewsItem, error?: string}> {
  const { data, error } = await supabase
    .from('news')
    .insert([newsData])
    .select('*')
    .single();
  
  if (error) {
    console.error('Error creating news:', error);
    return { success: false, error: error.message };
  }
  
  return { success: true, data };
}

export async function updateNews(id: string, newsData: Partial<Omit<NewsItem, 'id'>>): Promise<{success: boolean, data?: NewsItem, error?: string}> {
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
  
  return { success: true, data };
}

export async function deleteNews(id: string): Promise<{success: boolean, error?: string}> {
  const { error } = await supabase
    .from('news')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting news:', error);
    return { success: false, error: error.message };
  }
  
  return { success: true };
}
