
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useAnimateOnScroll } from '@/hooks/useImageLoader';
import { faqData, FAQItem } from '@/data/faq';
import { FAQMeta } from '@/components/meta/FAQMeta';

const FAQ = () => {
  useAnimateOnScroll();
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFAQ, setFilteredFAQ] = useState<FAQItem[]>(faqData);

  useEffect(() => {
    document.title = 'Часто задаваемые вопросы — ООО «Гранит»';
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredFAQ(faqData);
      // При очистке поиска возвращаем к изначальному состоянию - все аккордеоны закрыты
      setOpenItems([]);
    } else {
      const filtered = faqData.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredFAQ(filtered);
      // При поиске также сбрасываем открытые элементы
      setOpenItems([]);
    }
  }, [searchTerm]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="w-full">
      <FAQMeta />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05] bg-repeat bg-[length:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Часто задаваемые вопросы
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in animate-delay-100">
              Ответы на самые популярные вопросы о наших услугах, технологиях и процедурах
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto animate-fade-in animate-delay-200">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Поиск по вопросам..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Content */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-4xl">
          {filteredFAQ.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                По вашему запросу ничего не найдено. Попробуйте изменить поисковый запрос.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQ.map((item) => {
                const isOpen = openItems.includes(item.id);
                
                return (
                  <div
                    key={item.id}
                    className="glass-card rounded-lg overflow-hidden animate-on-scroll"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-200"
                    >
                      <span className="font-semibold text-lg pr-4">{item.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-6 border-t border-border/50">
                        <div className="pt-4 text-muted-foreground leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
