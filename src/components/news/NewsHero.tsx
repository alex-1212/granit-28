import React from 'react';
import { Helmet } from 'react-helmet-async';
const NewsHero = () => {
  return <>
      <Helmet>
        <title>Новости компании — ООО «Гранит»</title>
        <meta name="description" content="Актуальная информация о проектах, достижениях и технологиях компании ООО «Гранит». Последние новости в сфере буровзрывных работ на Дальнем Востоке." />
        <link rel="canonical" href="https://granite-corp.ru/news" />
      </Helmet>
      
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Новости компании
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-100">Актуальная информация о наших услугах, проектах, достижениях и технологиях</p>
          </div>
        </div>
      </section>
    </>;
};
export default NewsHero;