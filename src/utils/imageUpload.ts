
// This handles image upload and storage for news items

/**
 * Convert a File object to a data URL for storage
 * This approach stores images directly in localStorage as base64 strings
 */
export const uploadImage = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('No file provided'));
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target && typeof event.target.result === 'string') {
        // Return the base64 data URL that can be stored and displayed directly
        resolve(event.target.result);
      } else {
        reject(new Error('Failed to convert image to data URL'));
      }
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

// Default placeholder image (base64 or URL)
export const getDefaultImage = (): string => {
  return '/images/news/placeholder.jpg';
};

// Validate if an image path is a data URL or a regular path
export const isDataUrl = (url: string): boolean => {
  return url.startsWith('data:image/');
};

// Helper to check if an image URL is valid
export const isValidImageUrl = (url: string): boolean => {
  return isDataUrl(url) || url.startsWith('/');
};
