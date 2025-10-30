// Импорты библиотек и компонентов
import { ButtonHTMLAttributes, ReactNode, memo } from 'react'; // Типы для HTML-кнопки
import { motion, HTMLMotionProps } from 'framer-motion'; // Анимации для кнопки
import { Loader2 } from 'lucide-react'; // Иконка загрузки

/**
 * Интерфейс пропсов для кнопки
 * @typedef {Object} ButtonProps
 * @property {('primary'|'secondary'|'outline'|'gradient')} [variant='primary'] - Вариант стиля кнопки
 * @property {boolean} [loading=false] - Состояние загрузки
 * @property {ReactNode} children - Дочерние элементы (содержимое кнопки)
 */

// Интерфейс пропсов для кнопки
interface ButtonProps
  extends Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'style'
    >,
    HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient'; // Вариант стиля кнопки
  loading?: boolean; // Состояние загрузки
  children: ReactNode; // Дочерние элементы (содержимое кнопки)
}

/**
 * Универсальный компонент кнопки
 *
 * Основная функция: предоставить стилизованную кнопку с анимацией и различными вариантами оформления
 * Варианты: primary (основной), secondary (вторичный), outline (обводка), gradient (градиент)
 * Автоматически отключается при состоянии loading или disabled
 */
const ButtonComponent = ({
  variant = 'primary', // Стиль по умолчанию
  loading = false, // Состояние загрузки по умолчанию
  disabled, // Состояние отключения
  children, // Содержимое кнопки
  className = '', // Дополнительные CSS-классы
  ...props // Другие пропсы для кнопки
}: ButtonProps) => {
  // Объект с определениями классов для каждого варианта
  const variants = {
    primary: 'bg-c-primary hover:bg-c-primary-hover text-c-bg-primary font-bold',
    secondary: 'bg-c-bg-secondary hover:bg-c-bg-tertiary text-c-text-primary',
    outline: 'border border-c-border hover:border-c-primary text-c-text-primary',
    gradient:
      'bg-gradient-to-r from-c-primary to-green-400 text-c-bg-primary font-bold hover:from-c-primary-hover hover:to-c-primary',
  };

  return (
    <motion.button
      // Анимации при наведении и клике
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`        ${variants[variant]}  // Стили в зависимости от варианта
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}  // Стили для отключенного состояния
        px-6 py-3 rounded-lg font-bold transition-all duration-300  // Базовые стили
        shadow-lg hover:shadow-xl  // Тени
        flex items-center justify-center gap-2  // Флекс-свойства
        ${className}  // Дополнительные классы
     `}
      disabled={disabled || loading} // Отключение кнопки при загрузке или явном disable
      {...props}
    >
      {/* Иконка загрузки при состоянии loading */}
      {loading && <Loader2 className="w-5 h-5 animate-spin" role="img" aria-label="Loading" />}
      {children}
    </motion.button>
  );
};

export const Button = memo(ButtonComponent);
