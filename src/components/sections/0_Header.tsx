// Импорты библиотек и компонентов
import { Link } from 'react-scroll'; // Компонент для плавной прокрутки к якорям
import { Container } from '../Container'; // Обертка для центрирования контента
import { Menu, X, Globe } from 'lucide-react'; // Иконки для мобильного меню и языка
import { useState } from 'react'; // Хук для управления состоянием
import { motion, useScroll, useTransform } from 'framer-motion'; // Анимации и эффекты скролла
import { useTranslation } from 'react-i18next'; // Хук для перевода

/**
 * Компонент шапки сайта
 *
 * Основная функция: предоставить навигацию по лендингу с адаптивным дизайном
 * Включает в себя: логотип, десктопное меню, мобильное меню, переключатель языка
 * Использует эффекты скролла для изменения высоты и прозрачности
 */
export const Header = () => {
  // Состояния
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false); // Состояние для меню языка
  const { t, i18n } = useTranslation(); // Хук для перевода

  // Функция переключения языка
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang); // Сохраняем язык в localStorage
    setLangMenuOpen(false); // Закрываем меню после выбора
  };

  // Активный язык
  const currentLang = i18n.language;

  // Элементы навигации
  const navItems = [
    { label: t('header.problem'), to: 'problem' }, // Якорь для секции проблемы
    { label: t('header.solution'), to: 'solution' }, // Якорь для секции решения
    { label: t('header.upa'), to: 'upa' }, // Якорь для секции UPA Engine
    { label: t('header.status'), to: 'status' }, // Якорь для секции статуса
    { label: t('header.roadmap'), to: 'roadmap' }, // Якорь для дорожной карты
    { label: t('header.contact'), to: 'contact' }, // Якорь для контактной секции
  ];

  // Анимации при скролле: изменение высоты и прозрачности при прокрутке
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 0.1], [80, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  return (
    // Анимированный заголовок с эффектами при скролле
    <motion.header
      style={{ height, opacity: mobileMenuOpen ? 1 : opacity }}
      className={`sticky top-0 z-50 w-full border-b border-c-border ${mobileMenuOpen ? 'bg-c-bg-secondary' : 'bg-c-bg-secondary/70 backdrop-blur-xl'}`}
    >
      {/* Обертка для центрирования контента */}
      <Container>
        {/* Основной контейнер шапки */}
        <div className="flex items-center justify-between h-full">
          {/* Блок логотипа */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center"
            data-testid="logo-link"
          >
            <img src="/Logo.png" alt="DexSafe.Pro Logo" className="w-[60px] h-[60px] mr-4" />
            <h1 className="text-2xl font-bold text-c-text-primary hover:text-c-primary transition-colors">
              DexSafe<span className="text-c-primary">.Pro</span>
            </h1>
          </Link>

          {/* Основной блок: Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="relative text-c-text-secondary hover:text-c-primary font-medium transition-colors cursor-pointer text-sm group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-c-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
            ))}

            {/* Переключатель языка для десктопа */}
            <div className="relative">
              <button
                className="text-c-text-secondary hover:text-c-primary transition-colors flex items-center gap-1"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
              >
                <Globe size={18} />
                <span className="uppercase text-sm">{currentLang}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-c-bg-secondary border border-c-border rounded-lg shadow-lg z-50">
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-c-bg-tertiary ${currentLang === 'ru' ? 'text-c-primary' : 'text-c-text-secondary'}`}
                    onClick={() => changeLanguage('ru')}
                  >
                    Русский
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-c-bg-tertiary ${currentLang === 'en' ? 'text-c-primary' : 'text-c-text-secondary'}`}
                    onClick={() => changeLanguage('en')}
                  >
                    English
                  </button>
                </div>
              )}
            </div>
            

          </nav>

          {/* Вспомогательный блок: Кнопка мобильного меню */}
          <div className="flex items-center space-x-2">
            {/* Переключатель языка для мобильных */}
            <div className="relative md:hidden">
              <button
                className="text-c-text-secondary hover:text-c-primary transition-colors flex items-center gap-1"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
              >
                <Globe size={18} />
                <span className="uppercase">{currentLang}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-c-bg-secondary border border-c-border rounded-lg shadow-lg z-50">
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-c-bg-tertiary ${currentLang === 'ru' ? 'text-c-primary' : 'text-c-text-secondary'}`}
                    onClick={() => changeLanguage('ru')}
                  >
                    Русский
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-c-bg-tertiary ${currentLang === 'en' ? 'text-c-primary' : 'text-c-text-secondary'}`}
                    onClick={() => changeLanguage('en')}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            <button
              className="md:hidden text-c-text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Основной блок: Мобильная навигация */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-c-border !bg-c-bg-secondary z-40 rounded-xl">
            <div className="flex flex-col space-y-4 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-c-text-secondary hover:text-c-primary font-medium transition-colors cursor-pointer py-2 text-center text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </motion.header>
  );
};
