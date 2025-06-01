// Animation utilities and keyframes

export const animations = {
  // Transition durations
  duration: {
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
  },
  
  // Easing functions
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Common animation presets
  fadeIn: 'fadeIn 0.3s ease-in-out',
  slideUp: 'slideUp 0.3s ease-out',
  scaleIn: 'scaleIn 0.2s ease-out',
} as const;

export default animations; 