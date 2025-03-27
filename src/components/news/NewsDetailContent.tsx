
import React, { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { NewsItem } from '@/services/newsService';

interface NewsDetailContentProps {
  news: NewsItem;
}

const NewsDetailContent = ({ news }: NewsDetailContentProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log('NewsDetailContent rendering with news:', news);
    console.log('News content:', news.content);
  }, [news]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className={`rounded-lg overflow-hidden shadow-lg mb-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetailContent;
