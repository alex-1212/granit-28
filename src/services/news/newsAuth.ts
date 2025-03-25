
import { supabase, isUserAuthenticated } from '@/integrations/supabase/client';

// Константа для доступа к publishable key
export const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4cGxsaXZocmhkcm5hb211c2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MDE3OTEsImV4cCI6MjA1ODM3Nzc5MX0.6gXSOABsnN4RxZ5yzwbiHYHdVSOXRg4RBpEftNnvLnU";

// Set up client for manual authentication if needed
export const prepareAuthenticatedClient = async (): Promise<boolean> => {
  try {
    // Check if authenticated
    const isAuth = await isUserAuthenticated();
    if (!isAuth) {
      console.error('User not authenticated');
      return false;
    }

    // If using manual auth, set the session
    if (localStorage.getItem('manual_auth') === 'true') {
      const { error } = await supabase.auth.setSession({
        access_token: SUPABASE_PUBLISHABLE_KEY,
        refresh_token: SUPABASE_PUBLISHABLE_KEY
      });
      
      if (error) {
        console.error('Error setting up manual auth session:', error);
        return false;
      }
    }
    
    return true;
  } catch (error) {
    console.error('Error in prepareAuthenticatedClient:', error);
    return false;
  }
};

// Verify authentication before performing protected operations
export const verifyAuthentication = async (): Promise<boolean> => {
  try {
    const isAuth = await isUserAuthenticated();
    console.log('Auth status:', isAuth);
    console.log('Manual auth status:', localStorage.getItem('manual_auth'));
    
    if (!isAuth) {
      console.error('User not authenticated');
      return false;
    }
    
    return await prepareAuthenticatedClient();
  } catch (error) {
    console.error('Error verifying authentication:', error);
    return false;
  }
};
