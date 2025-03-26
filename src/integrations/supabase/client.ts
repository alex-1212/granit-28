
import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://axpllivhrhdrnaomusfl.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4cGxsaXZocmhkcm5hb211c2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1MTk0NTgsImV4cCI6MTk5NjA5NTQ1OH0.2Ppo9SQZ9QnSBx5DGcG5wnCpOyDk7LMn3NKCWQb5kpo';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to check if user is authenticated
export const isUserAuthenticated = async (): Promise<boolean> => {
  const { data } = await supabase.auth.getSession();
  return !!data.session;
};

// Function to get current user
export const getCurrentUser = async () => {
  const { data } = await supabase.auth.getUser();
  return data.user;
};
