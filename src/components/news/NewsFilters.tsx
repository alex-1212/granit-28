
import React from 'react';
import { Filter, Plus, Grid2X2, Briefcase, Cpu, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/i18n/LanguageContext';

type Category = 'Все' | 'Проекты' | 'Технологии' | 'События';

interface NewsFiltersProps {
  filter: Category;
  setFilter: (category: Category) => void;
  onCreateNews: () => void;
}

const categoryLabelKeys: Record<Category, string> = {
  'Все': 'news.ui.category.all',
  'Проекты': 'news.ui.category.projects',
  'Технологии': 'news.ui.category.technologies',
  'События': 'news.ui.category.events',
};

const NewsFilters = ({ filter, setFilter, onCreateNews }: NewsFiltersProps) => {
  const { user } = useAuth();
  const { t } = useLanguage();

  const categoryIcons = {
    'Все': <Grid2X2 size={16} />,
    'Проекты': <Briefcase size={16} />,
    'Технологии': <Cpu size={16} />,
    'События': <Calendar size={16} />
  };
  
  return (
    <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-on-scroll">
      <h2 className="text-2xl font-semibold">{t('news.ui.filters.title')}</h2>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {user && (
          <Button 
            onClick={onCreateNews}
            className="flex items-center gap-1.5"
          >
            <Plus size={18} />
            {t('news.ui.admin.addNews')}
          </Button>
        )}
        
        <div className="flex items-center">
          <Filter size={20} className="mr-2 text-primary" />
          <div className="flex flex-wrap gap-2">
            {(['Все', 'Проекты', 'Технологии', 'События'] as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-1.5 rounded-full text-sm transition-colors inline-flex items-center gap-2 ${
                  filter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/80 hover:bg-secondary text-foreground'
                }`}
              >
                {categoryIcons[category]}
                {t(categoryLabelKeys[category])}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFilters;
