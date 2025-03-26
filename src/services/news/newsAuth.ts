
import { supabase, isUserAuthenticated } from '@/integrations/supabase/client';

export const checkNewsPermissions = async (userId?: string) => {
  const isAuthenticated = await isUserAuthenticated();
  if (!isAuthenticated) {
    return false;
  }
  
  // For now, any authenticated user can manage news
  // You can implement more granular permissions here later
  return true;
};
