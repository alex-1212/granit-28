
import { supabase } from "@/integrations/supabase/client";
import { generateSlug } from "@/lib/slugify";
import { NewsItem } from "./types";

/**
 * Creates a new news article
 */
export async function createNews(newsData: Omit<NewsItem, 'id'>): Promise<{success: boolean, data?: NewsItem, error?: string}> {
  
  // Ensure slug is set
  const dataWithSlug = {
    ...newsData,
    slug: newsData.slug || generateSlug(newsData.title)
  };
  
  const { data, error } = await supabase
    .from('news')
    .insert([dataWithSlug])
    .select('*')
    .single();
  
  if (error) {
    console.error('Error creating news:', error);
    return { success: false, error: error.message };
  }
  
  // Ensure returned data has a slug
  const resultWithSlug = {
    ...data,
    slug: data.slug || generateSlug(data.title)
  } as NewsItem;
  
  return { success: true, data: resultWithSlug };
}

/**
 * Updates an existing news article
 */
export async function updateNews(id: string, newsData: Partial<Omit<NewsItem, 'id'>>): Promise<{success: boolean, data?: NewsItem, error?: string}> {
  
  // Ensure slug is set if title is being updated
  const dataToUpdate = { ...newsData };
  if (newsData.title && !newsData.slug) {
    dataToUpdate.slug = generateSlug(newsData.title);
  }
  
  const { data, error } = await supabase
    .from('news')
    .update(dataToUpdate)
    .eq('id', id)
    .select('*')
    .single();
  
  if (error) {
    console.error('Error updating news:', error);
    return { success: false, error: error.message };
  }
  
  // Ensure returned data has a slug
  const resultWithSlug = {
    ...data,
    slug: data.slug || generateSlug(data.title)
  } as NewsItem;
  
  return { success: true, data: resultWithSlug };
}

/**
 * Deletes a news article
 */
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
