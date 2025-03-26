
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Простые рандомные новости для демонстрации
const simpleNewsData = [
  {
    id: '1',
    title: 'Новый метод производства ЭВВ',
    date: '2024-10-15',
    content: 'Нашими учеными разработан инновационный метод производства эмульсионных взрывчатых веществ, позволяющий увеличить безопасность при транспортировке и хранении.'
  },
  {
    id: '2',
    title: 'Открытие представительства в Красноярске',
    date: '2024-10-10',
    content: 'ООО «Гранит» расширяет географию присутствия и открывает новое представительство в Красноярске для более эффективного обслуживания клиентов в этом регионе.'
  },
  {
    id: '3',
    title: 'Завершение проекта в Карелии',
    date: '2024-10-05',
    content: 'Успешно завершен масштабный проект по разработке месторождения в Карелии с применением наших передовых технологий взрывных работ.'
  },
  {
    id: '4',
    title: 'Внедрение системы электронного документооборота',
    date: '2024-10-01',
    content: 'В компании завершено внедрение современной системы электронного документооборота, что позволит оптимизировать внутренние процессы и ускорить обработку заказов.'
  },
  {
    id: '5',
    title: 'Участие в международной выставке',
    date: '2024-09-28',
    content: 'Представители ООО «Гранит» приняли участие в международной выставке горнодобывающей промышленности и представили новейшие разработки компании.'
  }
];

const SimpleNews: React.FC = () => {
  useEffect(() => {
    document.title = 'Простая страница новостей — ООО «Гранит»';
    window.scrollTo(0, 0);
  }, []);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };
  
  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 dark:bg-gray-900 min-h-screen">
      <div className="bg-gray-100 dark:bg-gray-800 py-8 mb-10">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/news" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 text-sm mb-5">
            <ArrowLeft size={18} />
            Вернуться к новостям
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Простая страница новостей</h1>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <div className="space-y-8">
          {simpleNewsData.map(news => (
            <div key={news.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-800 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{news.title}</h2>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">{formatDate(news.date)}</div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{news.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleNews;
