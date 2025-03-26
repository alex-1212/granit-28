
import { NewsItem } from '@/types/news';
import { newsData as mockNewsData } from '@/data/news';

// Convert our mock data to the NewsItem type
export const mapMockNewsToNewsItem = (mockNews: any): NewsItem => {
  return {
    id: mockNews.id,
    title: mockNews.title,
    content: mockNews.content,
    image: mockNews.image,
    author: 'Гранит', // Default author
    publishDate: mockNews.date,
    featured: false, // Default value
    tags: [mockNews.category], // Use category as a tag
  };
};

// These mapping functions are kept for potential future database use
export const mapToNewsItem = (dbNews: any): NewsItem => {
  return {
    id: dbNews.id || '',
    title: dbNews.title || '',
    content: dbNews.content || '',
    image: dbNews.image || '',
    author: dbNews.author || '',
    publishDate: dbNews.publish_date || new Date().toISOString(),
    featured: dbNews.featured || false,
    tags: dbNews.tags || [],
  };
};

export const mapToDbNews = (news: NewsItem): any => {
  return {
    title: news.title,
    content: news.content,
    image: news.image,
    author: news.author,
    publish_date: news.publishDate,
    featured: news.featured,
    tags: news.tags,
  };
};
