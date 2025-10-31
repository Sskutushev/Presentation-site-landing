/**
 * Утилиты для управления темами
 * 
 * Предоставляет функции для получения соответствующих цветов в зависимости от темы
 */

export const getThemeColor = (colorName: string, isDark: boolean = true) => {
  if (isDark) {
    // Цвета для темной темы
    const darkColors: Record<string, string> = {
      'bg-primary': 'c-bg-primary',
      'bg-secondary': 'c-bg-secondary',
      'bg-tertiary': 'c-bg-tertiary',
      'text-primary': 'c-text-primary',
      'text-secondary': 'c-text-secondary',
      'text-tertiary': 'c-text-tertiary',
      'primary': 'c-primary',
      'primary-hover': 'c-primary-hover',
      'success': 'c-success',
      'danger': 'c-danger',
      'border': 'c-border',
      'gradient-start': 'c-text-primary',
      'gradient-end': 'c-primary',
    };
    return darkColors[colorName] || colorName;
  } else {
    // Цвета для светлой темы
    const lightColors: Record<string, string> = {
      'bg-primary': 'c-light-bg-primary',
      'bg-secondary': 'c-light-bg-secondary',
      'bg-tertiary': 'c-light-bg-tertiary',
      'text-primary': 'c-light-text-primary',
      'text-secondary': 'c-light-text-secondary',
      'text-tertiary': 'c-light-text-tertiary',
      'primary': 'c-light-primary',
      'primary-hover': 'c-light-primary-hover',
      'success': 'c-light-success',
      'danger': 'c-light-danger',
      'border': 'c-light-border',
      'gradient-start': 'c-light-gradient-start',
      'gradient-end': 'c-light-gradient-end',
    };
    return lightColors[colorName] || colorName;
  }
};