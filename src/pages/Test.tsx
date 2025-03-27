
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RussiaMap } from '@/components/maps/RussiaMap';

const Test = () => {
  return (
    <>
      <Helmet>
        <title>Карта России — ООО «Гранит»</title>
        <meta name="description" content="Интерактивная карта регионов России" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-primary-foreground mb-6">
          Карта России
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Интерактивная карта регионов России. Наведите курсор на регион, чтобы увидеть его название.
        </p>
        
        <div className="w-full max-w-5xl mx-auto mb-16">
          <RussiaMap />
        </div>
      </div>
    </>
  );
};

export default Test;
