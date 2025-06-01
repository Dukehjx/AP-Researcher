// Nature Journal inspired theme configuration

export const theme = {
  colors: {
    // Primary nature-inspired palette
    primary: {
      50: '#f0f9f0',
      100: '#dcf2dc',
      200: '#bce5bc',
      300: '#8dd18d',
      400: '#5cb85c',
      500: '#3d8b3d',
      600: '#2d6a2d',
      700: '#245524',
      800: '#1e441e',
      900: '#1a3a1a',
    },
    
    // Secondary earth tones
    secondary: {
      50: '#faf8f3',
      100: '#f4f0e6',
      200: '#e8dcc7',
      300: '#d9c4a0',
      400: '#c8a677',
      500: '#b8925a',
      600: '#a67c4e',
      700: '#8a6542',
      800: '#70533a',
      900: '#5c4530',
    },
    
    // Neutral paper tones
    neutral: {
      50: '#fdfcfa',
      100: '#f9f7f4',
      200: '#f1ede6',
      300: '#e6dfd5',
      400: '#d4c9b8',
      500: '#b8a995',
      600: '#9c8a75',
      700: '#7d6f5e',
      800: '#665a4d',
      900: '#544a40',
    },
    
    // Accent colors
    accent: {
      sage: '#9caf88',
      moss: '#6b7c5a',
      bark: '#8b6f47',
      leaf: '#7ba05b',
    },
    
    // Semantic colors
    success: '#5cb85c',
    warning: '#f0ad4e',
    error: '#d9534f',
    info: '#5bc0de',
    
    // Background colors
    background: {
      paper: '#fdfcfa',
      cream: '#f9f7f4',
      light: '#ffffff',
      dark: '#2d3748',
    },
    
    // Text colors
    text: {
      primary: '#2d3748',
      secondary: '#4a5568',
      muted: '#718096',
      light: '#a0aec0',
      inverse: '#ffffff',
    },
  },
  
  typography: {
    fonts: {
      heading: '"Crimson Text", "Georgia", serif',
      body: '"Source Sans Pro", "Helvetica Neue", sans-serif',
      accent: '"Kalam", "Comic Sans MS", cursive',
      mono: '"Fira Code", "Consolas", monospace',
    },
    
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
    },
    
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    
    lineHeights: {
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },
  
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    paper: '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)',
  },
  
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    base: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },
};

export default theme; 