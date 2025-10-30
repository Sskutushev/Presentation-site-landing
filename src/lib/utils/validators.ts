// Utility functions for validation

/**
 * Validates an email address
 * @param email - The email to validate
 * @returns True if the email is valid, false otherwise
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a URL
 * @param url - The URL to validate
 * @returns True if the URL is valid, false otherwise
 */
export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates a phone number
 * @param phone - The phone number to validate
 * @returns True if the phone number is valid, false otherwise
 */
export function validatePhone(phone: string): boolean {
  // Simple validation for international phone numbers
  const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
  return phoneRegex.test(phone);
}

/**
 * Validates a password strength
 * @param password - The password to validate
 * @returns Object with validation results
 */
export function validatePassword(password: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('Пароль должен содержать не менее 8 символов');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Пароль должен содержать хотя бы одну заглавную букву');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Пароль должен содержать хотя бы одну строчную букву');
  }

  if (!/\d/.test(password)) {
    errors.push('Пароль должен содержать хотя бы одну цифру');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validates a wallet address (generic validation)
 * @param address - The wallet address to validate
 * @returns True if the wallet address format is valid, false otherwise
 */
export function validateWalletAddress(address: string): boolean {
  // Basic validation for common wallet address formats (Ethereum-style)
  const addressRegex = /^(0x)?[0-9a-fA-F]{40}$|^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;
  return addressRegex.test(address);
}
