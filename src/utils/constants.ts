// Application constants and configuration

export const APP_CONFIG = {
  name: 'AP Researcher',
  description: 'A platform to showcase AP Seminar and AP Research student work',
  version: '1.0.0',
  author: 'AP Research Community',
} as const;

export const ROUTES = {
  HOME: '/',
  NEWS: '/news',
  AP_SEMINAR: '/ap-seminar',
  AP_RESEARCH: '/ap-research',
  REPETITIVE_RESEARCH: '/repetitive-research',
  ABOUT: '/about',
  CONTACT: '/contact',
  NOT_FOUND: '/404',
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'News', path: ROUTES.NEWS },
  { label: 'AP Seminar', path: ROUTES.AP_SEMINAR },
  { label: 'AP Research', path: ROUTES.AP_RESEARCH },
  { label: 'Repetitive Research', path: ROUTES.REPETITIVE_RESEARCH },
] as const;

export const ACADEMIC_YEARS = [
  '2024-2025',
  '2023-2024',
  '2022-2023',
  '2021-2022',
  '2020-2021',
] as const;

export const RESEARCH_FIELDS = [
  'Biology',
  'Chemistry',
  'Physics',
  'Mathematics',
  'Computer Science',
  'Psychology',
  'Sociology',
  'History',
  'Literature',
  'Political Science',
  'Economics',
  'Environmental Science',
  'Philosophy',
  'Art History',
  'Music Theory',
  'Linguistics',
  'Anthropology',
  'Education',
  'Public Health',
  'Engineering',
] as const;

export const SEMINAR_SUBJECTS = [
  'Science & Technology',
  'Social Sciences',
  'Humanities',
  'Arts & Literature',
  'Global Issues',
  'Health & Medicine',
  'Environment & Sustainability',
  'Politics & Government',
  'Economics & Business',
  'Education & Learning',
] as const;

export const PERFORMANCE_TASKS = {
  IMP: 'Individual Multimedia Presentation',
  IRR: 'Individual Research Report',
  IWA: 'Individual Written Argument',
} as const;

export const RESEARCH_TYPES = {
  longitudinal: 'Longitudinal Study',
  comparative: 'Comparative Study',
  replication: 'Replication Study',
  'meta-analysis': 'Meta-Analysis',
} as const;

export const RESOURCE_TYPES = {
  pdf: 'PDF Document',
  video: 'Video',
  presentation: 'Presentation',
  dataset: 'Dataset',
  image: 'Image',
  link: 'External Link',
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  PAGE_SIZE_OPTIONS: [6, 12, 24, 48],
  MAX_PAGE_SIZE: 100,
} as const;

export const SEARCH = {
  MIN_QUERY_LENGTH: 2,
  DEBOUNCE_DELAY: 300,
  MAX_SUGGESTIONS: 5,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 250,
  SLOW: 350,
} as const;

export const LOCAL_STORAGE_KEYS = {
  THEME: 'ap-researcher-theme',
  FAVORITES: 'ap-researcher-favorites',
  RECENT_SEARCHES: 'ap-researcher-recent-searches',
  USER_PREFERENCES: 'ap-researcher-preferences',
} as const;

export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  FULL: 'MMMM dd, yyyy',
  SHORT: 'MM/dd/yyyy',
  ISO: 'yyyy-MM-dd',
} as const;

export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION: 'Please check your input and try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
} as const; 