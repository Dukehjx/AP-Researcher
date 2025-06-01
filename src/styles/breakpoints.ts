// Responsive breakpoints and media query utilities

export const breakpoints = {
  // Standard breakpoint values
  values: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  
  // Media query helpers
  up: (breakpoint: keyof typeof breakpoints.values) => 
    `@media (min-width: ${breakpoints.values[breakpoint]}px)`,
  
  down: (breakpoint: keyof typeof breakpoints.values) => 
    `@media (max-width: ${breakpoints.values[breakpoint] - 1}px)`,
    
  between: (min: keyof typeof breakpoints.values, max: keyof typeof breakpoints.values) =>
    `@media (min-width: ${breakpoints.values[min]}px) and (max-width: ${breakpoints.values[max] - 1}px)`,
} as const;

export default breakpoints; 