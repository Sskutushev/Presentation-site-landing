// Constants for the application

// Color constants
export const COLORS = {
  primary: '#00E0BE',
  primaryHover: '#00C4A7',
  backgroundPrimary: '#0d0f13',
  backgroundSecondary: '#1A1D25',
  backgroundTertiary: '#2A2D35',
  textPrimary: '#E5E7EB',
  textSecondary: '#9CA3AF',
  textTertiary: '#6B7280',
  border: '#2A2D35',
  success: '#10B981',
  danger: '#EF4444',
} as const;

// Size constants
export const SIZES = {
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
} as const;

// URL constants
export const URLS = {
  TELEGRAM_BOT: 'https://t.me/DexSafeMiniApp_bot',
  GITHUB_REPO: '', // Add if needed
  API_BASE: '', // Add if needed
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Animation constants
export const ANIMATIONS = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  easing: {
    easeOut: [0.25, 0.46, 0.45, 0.94],
    easeInOut: [0.455, 0.03, 0.515, 0.955],
  },
} as const;
