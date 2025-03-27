
import { supabase } from "@/integrations/supabase/client";
import { generateSlug } from "@/lib/slugify";
import { NewsItem } from "./types";

/**
 * Fetches all news articles from the database
 */
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
    
    // Ensure all records have slugs (this is a fallback, should be unnecessary now)
    const newsWithSlugs = data?.map(item => {
      return { 
        ...item, 
        slug: item.slug || generateSlug(item.title) 
      };
    }) || [];
    
    console.log('Fetched all news successfully:', newsWithSlugs?.length || 0, 'items');
    return newsWithSlugs as NewsItem[];
  } catch (err) {
    console.error('Unexpected error fetching news:', err);
    return [];
  }
}

/**
 * Fetches a single news article by ID or slug
 */
export async function getNewsById(idOrSlug: string): Promise<NewsItem | null> {
  try {
    if (!idOrSlug) {
      console.error('Invalid news ID or slug provided');
      return null;
    }

    console.log('Fetching news by ID or slug:', idOrSlug);
    
    // First try to find by slug
    let { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('slug', idOrSlug)
      .maybeSingle();
    
    // If not found by slug, try by id
    if (!data && !error) {
      ({ data, error } = await supabase
        .from('news')
        .select('*')
        .eq('id', idOrSlug)
        .single());
    }
    
    if (error) {
      console.error('Error fetching news by id or slug:', error);
      return null;
    }
    
    // If data is found, ensure slug exists
    if (data) {
      return {
        ...data,
        slug: data.slug || generateSlug(data.title)
      } as NewsItem;
    }
    
    console.log('Fetched news result:', data ? 'Found' : 'Not found');
    return null;
  } catch (err) {
    console.error('Unexpected error fetching news by id or slug:', err);
    return null;
  }
}

/**
 * Fetches news articles related to a specific article
 */
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
    
    // Ensure all news items have a slug
    const newsWithSlugs = data?.map(item => ({
      ...item,
      slug: item.slug || generateSlug(item.title)
    })) || [];
    
    console.log(`Found ${newsWithSlugs?.length || 0} related news items`);
    return newsWithSlugs as NewsItem[];
  } catch (err) {
    console.error('Unexpected error fetching related news:', err);
    return [];
  }
}
