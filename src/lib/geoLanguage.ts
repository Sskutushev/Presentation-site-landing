/**
 * Функции для определения языка по геопозиции
 *
 * Основная функция: определить язык пользователя на основе его IP-адреса
 * Возвращает 'ru' для стран СНГ (RU, BY, KZ, UA), 'en' для остальных
 */

// Маппинг стран на языки
const COUNTRY_LANGUAGE_MAP: Record<string, string> = {
  RU: 'ru', // Россия
  BY: 'ru', // Беларусь
  KZ: 'ru', // Казахстан
  UA: 'ru', // Украина
  // Добавьте другие страны СНГ при необходимости
};

/**
 * Определяет страну пользователя по IP-адресу
 * @returns Promise<string> - код страны (например, 'RU', 'US')
 */
async function getCountryByIP(): Promise<string> {
  try {
    // Используем один из публичных API для определения местоположения
    // Примеры: ipapi.co, ipgeolocation.io, ipinfo.io
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    // Возвращаем код страны
    return data.country || 'US'; // 'US' в качестве fallback
  } catch (error) {
    console.warn('Could not determine country from IP, defaulting to RU', error);
    return 'RU'; // Возвращаем русский по умолчанию в случае ошибки
  }
}

/**
 * Определяет язык по геопозиции и устанавливает его
 * @param i18n - i18next instance
 */
export async function setLanguageByGeo(i18n: {
  changeLanguage: (lang: string) => void;
}): Promise<void> {
  try {
    // Проверяем, не сохранен ли уже язык пользователем
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      return;
    }

    // Определяем страну по IP
    const country = await getCountryByIP();

    // Определяем язык на основе страны
    const language = COUNTRY_LANGUAGE_MAP[country] || 'en';

    // Устанавливаем язык
    i18n.changeLanguage(language);

    console.log(`Language set to ${language} based on country: ${country}`);
  } catch (error) {
    console.error('Error setting language by geo:', error);
    // В случае ошибки, оставляем язык по умолчанию (ru)
  }
}
