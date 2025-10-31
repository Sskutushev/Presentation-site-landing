// Импорты основных библиотек и компонентов
import React from 'react'; // Основная библиотека React
import ReactDOM from 'react-dom/client'; // Методы для рендеринга в DOM
import { I18nextProvider } from 'react-i18next'; // Обертка для i18n
import App from './App'; // Главный компонент приложения
import './index.css'; // Основные стили и настройки
import i18next from './i18n'; // Конфигурация i18n
import { ThemeProvider } from './contexts/ThemeContext'; // Провайдер темы

/**
 * Точка входа в React-приложение
 *
 * Основная функция: смонтировать React-приложение в DOM с поддержкой i18n и тем
 * Использует StrictMode для выявления потенциальных проблем в компонентах
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
