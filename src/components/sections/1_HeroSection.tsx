// Импорты компонентов и библиотек
import { AnimatedSection } from '../common/AnimatedSection'; // Анимированный контейнер секции
import { Button } from '../common/Button'; // Универсальная кнопка
import { ArrowDown, Sparkles, Send } from 'lucide-react'; // Иконки
import { Link } from 'react-scroll'; // Компонент для плавной прокрутки
import { motion } from 'framer-motion'; // Анимации
import { fadeInUp } from '../../lib/motionPresets'; // Предустановки анимаций
import { useTranslation } from 'react-i18next'; // Хук для перевода

/**
 * Компонент главного экрана (Hero)
 *
 * Основная функция: приветствие пользователей и призыв к действию
 * Структура:
 * - Анимированный фон с пульсацией
 * - Текстовый блок с заголовком и описанием
 * - Две кнопки для взаимодействия
 * - Визуализация кошелька
 */
export const HeroSection = () => {
  const { t } = useTranslation(); // Хук для перевода

  return (
    // Контейнер секции с анимацией
    <AnimatedSection id="hero" className="pt-20 sm:pt-32 pb-10 relative overflow-hidden">
      {/* Вспомогательный блок: Пульсирующий градиентный фон */}
      <div className="absolute -z-10 blur-3xl opacity-30 bg-c-primary/40 w-[600px] h-[600px] rounded-full animate-pulse -left-1/4 top-1/4"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Основной блок: Текстовая часть (заголовок, описание, кнопки) */}
        <div className="text-center lg:text-left">
          {/* Элемент с иконкой и подзаголовком */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-c-bg-secondary rounded-full border border-c-border mb-6"
          >
            <Sparkles className="w-4 h-4 text-c-primary mr-2" />
            <span className="text-c-text-secondary text-sm">{t('hero.badge')}</span>
          </motion.div>

          {/* Заголовок секции */}
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-c-text-primary leading-tight"
          >
            {t('hero.title')}
            <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 bg-gradient-to-r from-c-primary to-green-400 bg-clip-text text-transparent animate-hue">
              {t('hero.title_highlight')}
            </span>
          </motion.h1>

          {/* Описание */}
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mt-6 text-lg md:text-xl text-c-text-secondary max-w-lg mx-auto lg:mx-0"
            dangerouslySetInnerHTML={{ __html: t('hero.description') }}
          />

          {/* Кнопки действия */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link to="problem" smooth={true} duration={500} offset={-80}>
              <Button
                variant="primary"
                className="w-full sm:w-auto px-8 py-4 text-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00e0be' }}
              >
                <ArrowDown className="w-5 h-5 mr-2" />
                {t('hero.button_more')}
              </Button>
            </Link>
            <Button
              variant="secondary"
              className="w-full sm:w-auto px-8 py-4 text-lg"
              onClick={() => window.open('https://t.me/DexSafeMiniApp_bot', '_blank')}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 224, 190, 0.15)' }}
            >
              <Send className="w-5 h-5 mr-2" />
              {t('hero.button_bot')}
            </Button>
          </motion.div>
        </div>

        {/* Основной блок: Визуализация кошелька */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex items-center justify-center relative"
        >
          {/* Контейнер с изображением кошелька */}
          <motion.div
            className="relative w-full max-w-lg h-96 bg-gradient-to-br from-c-bg-secondary to-c-bg-tertiary rounded-3xl flex items-center justify-center border border-c-border shadow-2xl"
            whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-c-primary/10 to-transparent rounded-3xl"></div>
            <img
              src="/Wallet.png"
              alt="Wallet visualization"
              className="w-full h-full object-contain"
            />

            {/* Вспомогательные элементы для стилизации */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-c-primary/20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-green-400/20 blur-xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
