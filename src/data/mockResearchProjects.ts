import type { ResearchProject, Author, Tag } from './types';

// Sample authors for Research projects
const researchAuthors: Author[] = [
  {
    id: 'res1',
    name: 'Emma Rodriguez',
    email: 'emma.r@student.edu',
    bio: 'AP Research Student, Class of 2024',
  },
  {
    id: 'res2',
    name: 'Kai Nakamura',
    email: 'kai.n@student.edu',
    bio: 'AP Research Student, Class of 2024',
  },
  {
    id: 'res3',
    name: 'Zara Ahmed',
    email: 'zara.a@student.edu',
    bio: 'AP Research Student, Class of 2024',
  },
  {
    id: 'res4',
    name: 'Lucas Thompson',
    email: 'lucas.t@student.edu',
    bio: 'AP Research Student, Class of 2024',
  },
  {
    id: 'res5',
    name: 'Ava Johnson',
    email: 'ava.j@student.edu',
    bio: 'AP Research Student, Class of 2024',
  },
  {
    id: 'res6',
    name: 'David Kim',
    email: 'david.k@student.edu',
    bio: 'AP Research Student, Class of 2024',
  },
];

// Sample tags for Research projects
const researchTags: Tag[] = [
  { id: 'original-research', name: 'Original Research', color: '#2d5d7b', category: 'Type' },
  { id: 'data-analysis', name: 'Data Analysis', color: '#5a9bc4', category: 'Method' },
  { id: 'experimental', name: 'Experimental', color: '#7bb3d9', category: 'Method' },
  { id: 'longitudinal', name: 'Longitudinal Study', color: '#a5c9e1', category: 'Method' },
  { id: 'interdisciplinary', name: 'Interdisciplinary', color: '#8b6f47', category: 'Approach' },
  { id: 'stem', name: 'STEM', color: '#3d8b3d', category: 'Field' },
];

// Mock AP Research projects
export const mockResearchProjects: ResearchProject[] = [
  {
    id: 'res1',
    title: 'Machine Learning Approaches to Early Detection of Alzheimer\'s Disease Through Speech Pattern Analysis',
    abstract: 'This research investigates the effectiveness of natural language processing and machine learning algorithms in identifying early-stage Alzheimer\'s disease through analysis of speech patterns, pauses, and vocabulary complexity in patient recordings.',
    author: researchAuthors[0],
    mentor: {
      id: 'mentor1',
      name: 'Dr. Sarah Chen',
      email: 's.chen@university.edu',
      bio: 'Professor of Neuroscience and Data Science',
    },
    researchArea: 'Neuroscience & AI',
    methodology: 'Quantitative Analysis',
    academicYear: '2023-2024',
    tags: [researchTags[0], researchTags[1], researchTags[5]],
    defenseDate: '2024-05-15T09:00:00Z',
    resources: [
      {
        id: 'res1-paper',
        type: 'paper',
        title: 'Research Paper: ML Approaches to Alzheimer\'s Detection',
        url: '/resources/alzheimers-ml-detection.pdf',
        description: 'Complete research paper with methodology, results, and conclusions',
        uploadedAt: '2024-05-15T09:00:00Z',
      },
    ],
    slug: 'ml-alzheimers-speech-analysis',
    featured: true,
  },
  {
    id: 'res2',
    title: 'Urban Heat Islands: Impact on Pollinator Populations in Metropolitan Areas',
    abstract: 'A comprehensive study examining how urban heat islands affect native bee and butterfly populations, with recommendations for urban planning and green infrastructure development.',
    author: researchAuthors[1],
    researchArea: 'Environmental Biology',
    methodology: 'Field Research & Statistical Analysis',
    academicYear: '2023-2024',
    tags: [researchTags[0], researchTags[2], researchTags[3]],
    defenseDate: '2024-04-22T14:00:00Z',
    slug: 'urban-heat-islands-pollinators',
    featured: false,
  },
  {
    id: 'res3',
    title: 'Blockchain Technology for Secure Medical Records: Privacy and Accessibility Analysis',
    abstract: 'Investigating the potential of blockchain technology to revolutionize medical record storage while maintaining patient privacy and ensuring healthcare provider accessibility.',
    author: researchAuthors[2],
    researchArea: 'Computer Science & Healthcare',
    methodology: 'System Design & Security Analysis',
    academicYear: '2023-2024',
    tags: [researchTags[0], researchTags[4], researchTags[5]],
    defenseDate: '2024-03-18T11:30:00Z',
    slug: 'blockchain-medical-records-security',
    featured: false,
  },
  {
    id: 'res4',
    title: 'Social Media Influence on Body Image: A Cross-Cultural Longitudinal Study',
    abstract: 'A 12-month longitudinal study examining how social media usage patterns affect body image perception across different cultural backgrounds among teenage users.',
    author: researchAuthors[3],
    researchArea: 'Psychology & Cultural Studies',
    methodology: 'Longitudinal Survey Research',
    academicYear: '2023-2024',
    tags: [researchTags[0], researchTags[3], researchTags[4]],
    defenseDate: '2024-06-03T15:45:00Z',
    slug: 'social-media-body-image-cultural',
    featured: false,
  },
];

export default mockResearchProjects; 