
import React from 'react';
import { NewsItem } from '@/services/newsService';

interface NewsDetailContentProps {
  news: NewsItem;
}

const NewsDetailContent = ({ news }: NewsDetailContentProps) => {
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
          
          <div 
            className="prose prose-lg max-w-none dark:prose-invert animate-on-scroll"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsDetailContent;
