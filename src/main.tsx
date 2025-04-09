
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Добавляем проверку для отладки загрузки модулей
console.log('Инициализация приложения...');

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error('Корневой элемент не найден');
}
