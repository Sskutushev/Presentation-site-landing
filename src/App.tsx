// Импорты компонентов для лендинга
import CursorGlow from './components/common/CursorGlow'; // Анимированный эффект подсветки курсора
import { Header } from './components/sections/0_Header'; // Шапка сайта с навигацией
import { HeroSection } from './components/sections/1_HeroSection'; // Главный экран с призывом к действию
import { ProblemSection } from './components/sections/2_ProblemSection'; // Секция с описанием проблемы
import { SolutionSection } from './components/sections/3_SolutionSection'; // Секция с предложенным решением
import { UpaSection } from './components/sections/4_UpaSection'; // Секция с описанием UPA Engine
import { FeaturesTable } from './components/sections/5_FeaturesTable'; // Таблица с функциями кошелька
import { StatusSection } from './components/sections/6_StatusSection'; // Секция с текущим статусом
import { RoadmapSection } from './components/sections/7_RoadmapSection'; // Дорожная карта развития
import { ContactSection } from './components/sections/8_ContactSection'; // Контактная информация

/**
 * Главный компонент приложения
 *
 * Основная функция: объединение всех секций лендинга в одно целое
 * Структура:
 * - Обертка для всего контента
 * - Эффект подсветки курсора (CursorGlow) - вспомогательная функция
 * - Шапка сайта (Header) - основной блок
 * - Секции лендинга - основные блоки
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
function App() {
  return (
    // Основной контейнер приложения
    <main className="flex flex-col min-h-screen">
      {/* Вспомогательный блок: Анимированный курсор */}
      <CursorGlow />

      {/* Основной блок: Шапка сайта */}
      <Header />

      {/* Основной блок: Главный экран */}
      <div data-testid="hero-section">
        <HeroSection />
      </div>

      {/* Основной блок: Секция с проблемой */}
      <div data-testid="problem-section">
        <ProblemSection />
      </div>

      {/* Основной блок: Секция с решением */}
      <div data-testid="solution-section">
        <SolutionSection />
      </div>

      {/* Основной блок: Секция с UPA Engine */}
      <div data-testid="upa-section">
        <UpaSection />
      </div>

      {/* Основной блок: Таблица функций */}
      <div data-testid="features-section">
        <FeaturesTable />
      </div>

      {/* Основной блок: Секция статуса */}
      <div data-testid="status-section">
        <StatusSection />
      </div>

      {/* Основной блок: Дорожная карта */}
      <div data-testid="roadmap-section">
        <RoadmapSection />
      </div>

      {/* Основной блок: Контактная секция */}
      <div data-testid="contact-section">
        <ContactSection />
      </div>
    </main>
  );
}

export default App;
