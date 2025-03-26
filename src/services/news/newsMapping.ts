
import { NewsItem } from '@/types/news';

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
