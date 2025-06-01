// Type definitions for the AP Researcher platform

export interface Author {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  bio?: string;
}

export interface Tag {
  id: string;
  name: string;
  color?: string;
  category?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  tags: Tag[];
  featuredImage?: string;
  slug: string;
  featured?: boolean;
}

export interface SeminarProject {
  id: string;
  title: string;
  abstract: string;
  teamMembers: Author[];
  advisor?: Author;
  subject: string;
  academicYear: string;
  performanceTask: 'IMP' | 'IRR' | 'IWA'; // Individual Multimedia Presentation, Individual Research Report, Individual Written Argument
  tags: Tag[];
  presentationDate?: string;
  resources?: ProjectResource[];
  slug: string;
  featured?: boolean;
}

export interface ResearchProject {
  id: string;
  title: string;
  abstract: string;
  researcher: Author;
  advisor?: Author;
  researchField: string;
  methodology: string[];
  keyFindings: string[];
  academicYear: string;
  submissionDate: string;
  tags: Tag[];
  resources?: ProjectResource[];
  slug: string;
  featured?: boolean;
  citations?: number;
}

export interface RepetitiveResearch {
  id: string;
  title: string;
  description: string;
  originalStudy: ResearchProject;
  followUpStudies: ResearchProject[];
  researchType: 'longitudinal' | 'comparative' | 'replication' | 'meta-analysis';
  timespan: string;
  keyEvolution: string[];
  tags: Tag[];
  slug: string;
  featured?: boolean;
}

export interface ProjectResource {
  id: string;
  type: 'pdf' | 'video' | 'presentation' | 'dataset' | 'image' | 'link';
  title: string;
  url: string;
  description?: string;
  size?: string;
  uploadedAt: string;
}

export interface SearchFilters {
  query?: string;
  tags?: string[];
  academicYear?: string;
  subject?: string;
  researchField?: string;
  author?: string;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface SearchResult<T> {
  items: T[];
  pagination: PaginationInfo;
  filters: SearchFilters;
}

// API Response types (for future backend integration)
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  timestamp: string;
}

export interface ApiError {
  message: string;
  code: string;
  details?: any;
}

// Navigation and UI types
export interface NavigationItem {
  label: string;
  path: string;
  icon?: string;
  children?: NavigationItem[];
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

// Theme and styling types
export interface ThemeColors {
  primary: Record<string, string>;
  secondary: Record<string, string>;
  neutral: Record<string, string>;
  accent: Record<string, string>;
  background: Record<string, string>;
  text: Record<string, string>;
}

export interface ComponentVariant {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
} 