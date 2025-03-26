
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
    <div className="simple-news-page">
      <div className="simple-news-header">
        <div className="container">
          <Link to="/news" className="back-link">
            <ArrowLeft size={18} />
            Вернуться к новостям
          </Link>
          <h1>Простая страница новостей</h1>
        </div>
      </div>
      
      <div className="container">
        <div className="simple-news-list">
          {simpleNewsData.map(news => (
            <div className="simple-news-item" key={news.id}>
              <h2>{news.title}</h2>
              <div className="simple-news-date">{formatDate(news.date)}</div>
              <p>{news.content}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .simple-news-page {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #333;
          line-height: 1.6;
        }
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .simple-news-header {
          background: #f5f5f5;
          padding: 30px 0;
          margin-bottom: 40px;
        }
        
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #555;
          text-decoration: none;
          margin-bottom: 20px;
          font-size: 14px;
        }
        
        .back-link:hover {
          color: #000;
        }
        
        h1 {
          font-size: 32px;
          font-weight: 700;
          margin: 0;
          color: #222;
        }
        
        .simple-news-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .simple-news-item {
          padding: 20px;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          background-color: #fff;
        }
        
        .simple-news-item h2 {
          font-size: 22px;
          margin: 0 0 10px 0;
        }
        
        .simple-news-date {
          font-size: 14px;
          color: #777;
          margin-bottom: 12px;
        }
        
        .simple-news-item p {
          margin: 0;
          font-size: 15px;
        }
        
        /* Темная тема */
        @media (prefers-color-scheme: dark) {
          .simple-news-page {
            background-color: #1a1a1a;
            color: #e0e0e0;
          }
          
          .simple-news-header {
            background: #242424;
          }
          
          h1 {
            color: #fff;
          }
          
          .back-link {
            color: #aaa;
          }
          
          .back-link:hover {
            color: #fff;
          }
          
          .simple-news-item {
            background-color: #242424;
            border-color: #333;
          }
          
          .simple-news-date {
            color: #999;
          }
        }
      `}</style>
    </div>
  );
};

export default SimpleNews;
