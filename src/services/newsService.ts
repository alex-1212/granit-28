
import { supabase } from "@/integrations/supabase/client";

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  image: string;
  category: 'Проекты' | 'Технологии' | 'События';
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
