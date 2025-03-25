
// This file is maintained for backward compatibility
// It re-exports all news-related functions from the new, more focused modules

import { NewsItem, newsData } from '@/data/news';
import {
  getAllNews,
  getNewsById,
  addNews,
  updateNews,
  deleteNews,
  addProvidedNews,
  resetNewsData as resetNewsDataInternal,
  NewsDB,
  mapDbToNewsItem,
  mapNewsItemToDb,
  SUPABASE_PUBLISHABLE_KEY,
  prepareAuthenticatedClient,
  verifyAuthentication
} from './news';

// Export everything for backward compatibility
export {
  getAllNews,
  getNewsById,
  addNews,
  updateNews,
  deleteNews,
  addProvidedNews,
  SUPABASE_PUBLISHABLE_KEY,
  prepareAuthenticatedClient,
  verifyAuthentication
};

// Database table mapping
export type { NewsDB };

// Export mapping functions
export { mapDbToNewsItem, mapNewsItemToDb };

// Reset to default data (with the original newsData)
export const resetNewsData = async (): Promise<void> => {
  await resetNewsDataInternal(newsData);
};
