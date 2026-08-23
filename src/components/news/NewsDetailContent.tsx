
import React, { useMemo, useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { NewsItem } from '@/services/newsService';
import { useLanguage } from '@/i18n/LanguageContext';
import ShareButtons from '@/components/news/ShareButtons';
import { Hash } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { sanitizeNewsHtml } from '@/lib/sanitize';

interface NewsDetailContentProps {
  news: NewsItem;
}

const NewsDetailContent = ({ news }: NewsDetailContentProps) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [hashtags, setHashtags] = useState<string[]>([]);

  // Защита от stored XSS: контент создаётся пользователями в Supabase
  const safeContent = useMemo(
    () => sanitizeNewsHtml(news.content),
    [news.content]
  );

  useEffect(() => {
    generateHashtags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [news.id]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    if (!target.src.includes('placeholder')) {
      target.src = '/placeholder.svg';
    }
  };

  const generateHashtags = () => {
    const tags: string[] = [];

    tags.push(news.category);

    const titleWords = news.title.split(' ')
      .filter(word => word.length > 5)
      .slice(0, 2);

    const industryTags = ['ГранитБВР', 'Взрывработы', 'Промышленность', 'ЭВВ'];

    const allTags = [...tags, ...titleWords, ...industryTags];

    const formattedTags = allTags.map(tag => {
      const cleanTag = tag.replace(/[^\wа-яА-Я]/g, '');
      return cleanTag.charAt(0).toUpperCase() + cleanTag.slice(1);
    });

    setHashtags([...new Set(formattedTags)].slice(0, 10));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <article className={`rounded-lg overflow-hidden shadow-lg mb-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <img
              src={news.image}
              alt={news.title}
              className="w-full aspect-video object-cover"
              onError={handleImageError}
            />

            <div className="p-6">
              <div className="mb-4">
                <p className="text-lg font-semibold mb-4">{news.summary}</p>
              </div>

              <div
                className={`prose news-content max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}
                dangerouslySetInnerHTML={{ __html: safeContent }}
              />

              {hashtags.length > 0 && (
                <div className="mt-8 mb-6">
                  <h3 className="text-lg font-semibold mb-3">{t('news.ui.detail.hashtags')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {hashtags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-sm transform transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <ShareButtons
                title={news.title}
                url={window.location.href}
                description={news.summary}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default NewsDetailContent;
