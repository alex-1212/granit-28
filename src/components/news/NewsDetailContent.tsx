
import React, { useEffect } from 'react';
import { NewsItem } from '@/services/newsService';

interface NewsDetailContentProps {
  news: NewsItem;
}

const NewsDetailContent = ({ news }: NewsDetailContentProps) => {
  useEffect(() => {
    console.log('NewsDetailContent rendering with news:', news);
    console.log('News content:', news.content);
  }, [news]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-xl overflow-hidden mb-10 animate-on-scroll">
            <img
              src={news.image}
              alt={news.title}
              className="w-full aspect-video object-cover"
            />
          </div>
          
          {news.content && (
            <div className="prose prose-lg max-w-none dark:prose-invert animate-on-scroll">
              {/* If content is HTML, render it with dangerouslySetInnerHTML */}
              {news.content.includes('<') ? (
                <div dangerouslySetInnerHTML={{ __html: news.content }} />
              ) : (
                /* Otherwise render as plain text with paragraph wrapping */
                <p>{news.content}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsDetailContent;
