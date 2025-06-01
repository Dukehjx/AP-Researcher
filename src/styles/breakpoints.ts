// Responsive breakpoints and media query utilities

type BreakpointValues = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
};

export const breakpoints: {
  values: BreakpointValues;
  up: (breakpoint: keyof BreakpointValues) => string;
  down: (breakpoint: keyof BreakpointValues) => string;
  between: (min: keyof BreakpointValues, max: keyof BreakpointValues) => string;
} = {
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
  up: (breakpoint: keyof BreakpointValues) => 
    `@media (min-width: ${breakpoints.values[breakpoint]}px)`,
  
  down: (breakpoint: keyof BreakpointValues) => 
    `@media (max-width: ${breakpoints.values[breakpoint] - 1}px)`,
    
  between: (min: keyof BreakpointValues, max: keyof BreakpointValues) =>
    `@media (min-width: ${breakpoints.values[min]}px) and (max-width: ${breakpoints.values[max] - 1}px)`,
} as const;

export default breakpoints; 