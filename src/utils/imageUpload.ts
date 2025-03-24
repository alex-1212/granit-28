
// This is a simple mock image upload utility for demo purposes
// In a real application, you would upload to a server or cloud storage

// Base64 encoded default placeholder image
const DEFAULT_IMAGE = '/images/news/placeholder.jpg';

export const uploadImage = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    // In a real app, this would be a server upload
    // For this demo, we'll just pretend we're uploading and return a placeholder path
    if (!file) {
      reject(new Error('No file provided'));
      return;
    }
    
    // Simulate a network request
    setTimeout(() => {
      // In a real app, this would be the URL returned from the server
      // For demo purposes, just return the name of the file
      resolve(`/images/news/${file.name}`);
    }, 500);
  });
};

export const getDefaultImage = (): string => {
  return DEFAULT_IMAGE;
};
