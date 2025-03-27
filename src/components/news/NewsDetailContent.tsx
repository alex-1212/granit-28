
import React, { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { NewsItem } from '@/services/newsService';
import ShareButtons from '@/components/news/ShareButtons';

interface NewsDetailContentProps {
  news: NewsItem;
}

const NewsDetailContent = ({ news }: NewsDetailContentProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    // Обновляем title при загрузке новости
    document.title = `${news.title} — ООО «Гранит» | Новости`;
    
    // Обновляем meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', news.summary);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = news.summary;
      document.head.appendChild(meta);
    }
    
    // Обновляем canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `https://granite-corp.ru/news/${news.slug}`);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = `https://granite-corp.ru/news/${news.slug}`;
      document.head.appendChild(link);
    }
    
    console.log('NewsDetailContent rendering with news:', news);
    console.log('News content:', news.content);
  }, [news]);

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
