import type { RepetitiveResearch, Author, Tag } from './types';

// Sample authors for Repetitive Research projects
const repetitiveAuthors: Author[] = [
  {
    id: 'rep1',
    name: 'Isabella Martinez',
    email: 'isabella.m@student.edu',
    bio: 'Advanced Research Student, Class of 2024',
  },
  {
    id: 'rep2',
    name: 'Ryan O\'Brien',
    email: 'ryan.o@student.edu',
    bio: 'Advanced Research Student, Class of 2024',
  },
  {
    id: 'rep3',
    name: 'Aisha Williams',
    email: 'aisha.w@student.edu',
    bio: 'Advanced Research Student, Class of 2024',
  },
  {
    id: 'rep4',
    name: 'Noah Zhang',
    email: 'noah.z@student.edu',
    bio: 'Advanced Research Student, Class of 2024',
  },
  {
    id: 'rep5',
    name: 'Grace Thompson',
    email: 'grace.t@student.edu',
    bio: 'Advanced Research Student, Class of 2024',
  },
  {
    id: 'rep6',
    name: 'Marcus Davis',
    email: 'marcus.d@student.edu',
    bio: 'Advanced Research Student, Class of 2024',
  },
];

// Sample tags for Repetitive Research projects
const repetitiveTags: Tag[] = [
  { id: 'replication', name: 'Replication Study', color: '#8b5a2b', category: 'Type' },
  { id: 'meta-analysis', name: 'Meta-Analysis', color: '#a0661f', category: 'Type' },
  { id: 'validation', name: 'Validation', color: '#b8925a', category: 'Purpose' },
  { id: 'methodology', name: 'Methodology', color: '#9caf88', category: 'Focus' },
  { id: 'cross-cultural', name: 'Cross-Cultural', color: '#7ba05b', category: 'Scope' },
  { id: 'longitudinal-follow', name: 'Longitudinal Follow-up', color: '#8b6f47', category: 'Timeline' },
];

// Mock Repetitive Research projects
export const mockRepetitiveResearch: RepetitiveResearch[] = [
  {
    id: 'rep1',
    title: 'Replication of Stanford Prison Experiment: Modern Ethics and Digital Age Considerations',
    abstract: 'A comprehensive replication study examining the psychological dynamics of authority and conformity in online environments, addressing ethical concerns and methodological improvements from the original 1971 Stanford Prison Experiment.',
    author: repetitiveAuthors[0],
    originalStudy: {
      title: 'Stanford Prison Experiment',
      authors: ['Philip Zimbardo'],
      year: 1971,
      journal: 'International Journal of Criminology & Penology',
    },
    replicationScope: 'Partial replication with ethical modifications',
    findings: 'Confirmed authority-conformity dynamics in digital environments with reduced psychological harm',
    academicYear: '2023-2024',
    tags: [repetitiveTags[0], repetitiveTags[2], repetitiveTags[4]],
    completionDate: '2024-05-20T10:00:00Z',
    slug: 'stanford-prison-experiment-replication',
    featured: true,
  },
  {
    id: 'rep2',
    title: 'Meta-Analysis of Growth Mindset Interventions in STEM Education (2010-2023)',
    abstract: 'A systematic meta-analysis examining the effectiveness of growth mindset interventions in improving STEM learning outcomes across diverse educational settings and student populations.',
    author: repetitiveAuthors[1],
    originalStudy: {
      title: 'Multiple growth mindset studies',
      authors: ['Carol Dweck', 'Various researchers'],
      year: 2010,
      journal: 'Various educational psychology journals',
    },
    replicationScope: 'Meta-analysis of 47 studies',
    findings: 'Moderate positive effects with stronger outcomes in middle school settings',
    academicYear: '2023-2024',
    tags: [repetitiveTags[1], repetitiveTags[3], repetitiveTags[2]],
    completionDate: '2024-04-10T14:30:00Z',
    slug: 'growth-mindset-stem-meta-analysis',
    featured: false,
  },
  {
    id: 'rep3',
    title: 'Cross-Cultural Validation of Social Identity Theory in Online Communities',
    abstract: 'Replicating Tajfel and Turner\'s social identity theory experiments within modern online gaming communities across different cultural contexts to validate the theory\'s cross-cultural applicability.',
    author: repetitiveAuthors[2],
    originalStudy: {
      title: 'Social Identity Theory',
      authors: ['Henri Tajfel', 'John Turner'],
      year: 1979,
      journal: 'Psychology of Intergroup Relations',
    },
    replicationScope: 'Cross-cultural validation study',
    findings: 'Theory holds across cultures with varying intensities in collectivist vs individualist societies',
    academicYear: '2023-2024',
    tags: [repetitiveTags[0], repetitiveTags[4], repetitiveTags[2]],
    completionDate: '2024-03-25T16:15:00Z',
    slug: 'social-identity-theory-online-validation',
    featured: false,
  },
  {
    id: 'rep4',
    title: 'Longitudinal Follow-up: Effects of Bilingual Education on Cognitive Development',
    abstract: 'A 10-year follow-up study tracking the cognitive development outcomes of participants from original bilingual education research, examining long-term effects on executive function and academic achievement.',
    author: repetitiveAuthors[3],
    originalStudy: {
      title: 'Bilingual Education and Cognitive Development',
      authors: ['Ellen Bialystok'],
      year: 2014,
      journal: 'Developmental Psychology',
    },
    replicationScope: 'Longitudinal follow-up study',
    findings: 'Sustained cognitive advantages persist into early adulthood with continued bilingual practice',
    academicYear: '2023-2024',
    tags: [repetitiveTags[5], repetitiveTags[2], repetitiveTags[4]],
    completionDate: '2024-06-05T11:45:00Z',
    slug: 'bilingual-education-longitudinal-followup',
    featured: false,
  },
];

export default mockRepetitiveResearch; 