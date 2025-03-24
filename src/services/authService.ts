
// Admin credentials
const ADMIN_USERNAME = 'adminnews';
// This is a hashed version of '682449qwerty' using a simple hash function
// In a real app, you would use a proper crypto library
const ADMIN_PASSWORD_HASH = '8d23cf6c86e834a7';

// Simple hash function (for demonstration purposes only)
// In a real app, use a proper crypto library
const hashPassword = (password: string): string => {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16);
};

// Check if the credentials are valid
export const validateCredentials = (username: string, password: string): boolean => {
  return username === ADMIN_USERNAME && hashPassword(password) === ADMIN_PASSWORD_HASH;
};

// Check if the user is authenticated
export const isAuthenticated = (): boolean => {
  return localStorage.getItem('admin_authenticated') === 'true';
};

// Login with username and password
export const login = (username: string, password: string): boolean => {
  if (validateCredentials(username, password)) {
    localStorage.setItem('admin_authenticated', 'true');
    return true;
  }
  return false;
};

// Logout
export const logout = (): void => {
  localStorage.removeItem('admin_authenticated');
};
