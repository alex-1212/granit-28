
import React from 'react';
import { Filter, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

type Category = 'Все' | 'Проекты' | 'Технологии' | 'События';

interface NewsFiltersProps {
  filter: Category;
  setFilter: (category: Category) => void;
  onCreateNews: () => void;
}

const NewsFilters = ({ filter, setFilter, onCreateNews }: NewsFiltersProps) => {
  const { user } = useAuth();
  
  return (
    <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-on-scroll">
      <h2 className="text-2xl font-semibold">Все публикации</h2>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Add News Button - Only visible to authenticated users */}
        {user && (
          <Button 
            onClick={onCreateNews}
            className="flex items-center gap-1.5"
          >
            <Plus size={18} />
            Добавить новость
          </Button>
        )}
        
        <div className="flex items-center">
          <Filter size={20} className="mr-2 text-primary" />
          <div className="flex flex-wrap gap-2">
            {(['Все', 'Проекты', 'Технологии', 'События'] as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                  filter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/80 hover:bg-secondary text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFilters;
