
export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  /**
   * Содержимое новости в формате HTML
   */
  content: string;
  image: string;
  category: string;
  date: string;
}
