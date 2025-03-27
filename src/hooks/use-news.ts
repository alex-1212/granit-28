
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllNews, getNewsById, getRelatedNews } from "@/services/news/getNews";
import { NewsItem } from "@/services/news/types";
import { toast } from "@/components/ui/use-toast";

// Константы для ключей запросов React Query
export const NEWS_QUERY_KEYS = {
  allNews: ['news', 'all'] as const,
  newsDetail: (slug: string) => ['news', 'detail', slug] as const,
  relatedNews: (category: string, id: string) => ['news', 'related', category, id] as const,
};

/**
 * Хук для получения всех новостей с оптимизированным кэшированием
 */
export function useAllNews() {
  return useQuery({
    queryKey: NEWS_QUERY_KEYS.allNews,
    queryFn: getAllNews,
    onError: (error) => {
      console.error('Ошибка при загрузке новостей:', error);
      toast({
        title: "Ошибка загрузки данных",
        description: "Не удалось загрузить список новостей. Пожалуйста, попробуйте позже.",
        variant: "destructive"
      });
    }
  });
}

/**
 * Хук для получения отдельной новости по ID или slug
 */
export function useNewsDetail(slug: string) {
  return useQuery({
    queryKey: NEWS_QUERY_KEYS.newsDetail(slug),
    queryFn: () => getNewsById(slug),
    onError: (error) => {
      console.error('Ошибка при загрузке новости:', error);
      toast({
        title: "Ошибка загрузки данных",
        description: "Не удалось загрузить новость. Пожалуйста, попробуйте позже.",
        variant: "destructive"
      });
    },
    enabled: !!slug, // Выполнять запрос только если есть slug
  });
}

/**
 * Хук для получения связанных новостей
 */
export function useRelatedNews(category: string, currentId: string, limit?: number) {
  return useQuery({
    queryKey: NEWS_QUERY_KEYS.relatedNews(category, currentId),
    queryFn: () => getRelatedNews(category, currentId, limit),
    onError: (error) => {
      console.error('Ошибка при загрузке связанных новостей:', error);
      // Не показываем уведомление о ошибке для связанных новостей, чтобы не отвлекать пользователя
    },
    enabled: !!category && !!currentId,
  });
}

/**
 * Хук для ручного управления кэшем новостей
 */
export function useNewsCache() {
  const queryClient = useQueryClient();
  
  return {
    // Проактивно обновить одну новость в кэше (например, после редактирования)
    updateNewsItem: (news: NewsItem) => {
      // Обновить в кэше детальных данных
      queryClient.setQueryData(NEWS_QUERY_KEYS.newsDetail(news.slug), news);
      
      // Обновить в общем списке новостей
      queryClient.setQueryData(NEWS_QUERY_KEYS.allNews, (oldData: NewsItem[] | undefined) => {
        if (!oldData) return [news];
        return oldData.map(item => item.id === news.id ? news : item);
      });
    },
    
    // Инвалидировать весь кэш новостей (заставить перезагрузить данные)
    invalidateAllNews: () => {
      queryClient.invalidateQueries({ queryKey: NEWS_QUERY_KEYS.allNews });
    },
    
    // Предварительно загрузить детали новости (префетчинг)
    prefetchNewsDetails: async (slug: string) => {
      await queryClient.prefetchQuery({
        queryKey: NEWS_QUERY_KEYS.newsDetail(slug),
        queryFn: () => getNewsById(slug),
      });
    },
  };
}
