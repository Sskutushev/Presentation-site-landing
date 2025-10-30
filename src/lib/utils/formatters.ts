// Utility functions for formatting

/**
 * Formats a number with thousands separators
 * @param num - The number to format
 * @returns Formatted number as string
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

/**
 * Formats a date to the specified locale
 * @param date - The date to format
 * @param locale - The locale to use (default: 'ru-RU')
 * @returns Formatted date as string
 */
export function formatDate(date: Date, locale: string = 'ru-RU'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Formats a currency amount
 * @param amount - The amount to format
 * @param currency - The currency code (default: 'USD')
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

/**
 * Truncates a string to a specified length
 * @param str - The string to truncate
 * @param maxLength - The maximum length
 * @param suffix - The suffix to add (default: '...')
 * @returns Truncated string
 */
export function truncateString(str: string, maxLength: number, suffix: string = '...'): string {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + suffix;
}

/**
 * Formats a large number using abbreviations (K, M, B)
 * @param num - The number to format
 * @returns Formatted number as string with abbreviation
 */
export function formatLargeNumber(num: number): string {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
}
