// Typography utilities and constants

export const typography = {
  // Font stacks for different use cases
  stacks: {
    serif: '"Crimson Text", "Times New Roman", serif',
    sansSerif: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif',
    handwritten: '"Kalam", "Bradley Hand", cursive',
    monospace: '"Fira Code", "Consolas", "Monaco", monospace',
  },
  
  // Reading-optimized line heights
  reading: {
    tight: 1.2,
    comfortable: 1.6,
    loose: 1.8,
  },
} as const;

export default typography; 