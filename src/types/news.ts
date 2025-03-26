
export interface NewsItem {
  id: string;
  title: string;
  content: string;
  image?: string;
  author: string;
  publishDate: string;
  featured: boolean;
  tags: string[];
}
