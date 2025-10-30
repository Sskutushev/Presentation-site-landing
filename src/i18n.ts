import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};

i18n
  .use(LanguageDetector) // автоматическое определение языка
  .use(initReactI18next) // подключаем react-i18next
  .init({
    resources,
    lng: 'ru', // язык по умолчанию
    fallbackLng: 'ru', // запасной язык
    interpolation: {
      escapeValue: false, // React сам экранирует значения
    },
    detection: {
      order: ['localStorage', 'navigator'], // порядок определения языка
      caches: ['localStorage'], // где хранить язык
    },
  });

export default i18n;
