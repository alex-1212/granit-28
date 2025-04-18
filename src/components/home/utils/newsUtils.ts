
export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 100;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

export const formatDate = (dateString: string): string => {
  try {
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', options);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};
