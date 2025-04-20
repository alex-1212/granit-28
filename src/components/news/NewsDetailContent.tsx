import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { NewsItem } from '@/services/newsService';
import ShareButtons from '@/components/news/ShareButtons';
import { Hash } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface NewsDetailContentProps {
  news: NewsItem;
}

const NewsDetailContent = ({ news }: NewsDetailContentProps) => {
  const { theme } = useTheme();
  const [hashtags, setHashtags] = useState<string[]>([]);

  useEffect(() => {
    document.title = `${news.title} — ООО «Гранит» | Новости`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', news.summary);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = news.summary;
      document.head.appendChild(meta);
    }
    
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `https://granite-corp.ru/news/${news.slug}`);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = `https://granite-corp.ru/news/${news.slug}`;
      document.head.appendChild(link);
    }
    
    generateHashtags();
    
    console.log('NewsDetailContent rendering with news:', news);
    console.log('News content:', news.content);
  }, [news]);

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
            />
            
            <div className="p-6">
              <div className="mb-4">
                <p className="text-lg font-semibold mb-4">{news.summary}</p>
              </div>
              
              <div 
                className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
              
              {hashtags.length > 0 && (
                <div className="mt-8 mb-6">
                  <h3 className="text-lg font-semibold mb-3">Хэштеги:</h3>
                  <div className="flex flex-wrap gap-2">
                    {hashtags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
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
