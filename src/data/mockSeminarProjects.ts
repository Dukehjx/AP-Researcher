import type { SeminarProject, Author, Tag } from './types';

// Sample authors for Seminar projects
const seminarAuthors: Author[] = [
  {
    id: 'sem1',
    name: 'Maya Patel',
    email: 'maya.p@student.edu',
    bio: 'AP Seminar Student, Class of 2024',
  },
  {
    id: 'sem2',
    name: 'James Wilson',
    email: 'james.w@student.edu',
    bio: 'AP Seminar Student, Class of 2024',
  },
  {
    id: 'sem3',
    name: 'Sofia Garcia',
    email: 'sofia.g@student.edu',
    bio: 'AP Seminar Student, Class of 2024',
  },
  {
    id: 'sem4',
    name: 'Alex Chen',
    email: 'alex.c@student.edu',
    bio: 'AP Seminar Student, Class of 2024',
  },
  {
    id: 'sem5',
    name: 'Jordan Taylor',
    email: 'jordan.t@student.edu',
    bio: 'AP Seminar Student, Class of 2024',
  },
  {
    id: 'sem6',
    name: 'Priya Singh',
    email: 'priya.s@student.edu',
    bio: 'AP Seminar Student, Class of 2024',
  },
];

// Sample tags for Seminar projects
const seminarTags: Tag[] = [
  { id: 'collaboration', name: 'Collaboration', color: '#3d8b3d', category: 'Skill' },
  { id: 'research', name: 'Research', color: '#b8925a', category: 'Skill' },
  { id: 'presentation', name: 'Presentation', color: '#5cb85c', category: 'Skill' },
  { id: 'social-issues', name: 'Social Issues', color: '#7ba05b', category: 'Topic' },
  { id: 'policy', name: 'Policy Analysis', color: '#9caf88', category: 'Topic' },
  { id: 'community', name: 'Community Impact', color: '#8b6f47', category: 'Topic' },
];

// Mock AP Seminar projects
export const mockSeminarProjects: SeminarProject[] = [
  {
    id: 'sem1',
    title: 'Digital Divide: Bridging Technology Access Gaps in Rural Education',
    abstract: 'This collaborative research examines the persistent digital divide affecting rural students and proposes community-based solutions to ensure equitable access to educational technology and high-speed internet connectivity.',
    teamMembers: [seminarAuthors[0], seminarAuthors[1], seminarAuthors[2]],
    advisor: {
      id: 'advisor1',
      name: 'Dr. Rebecca Martinez',
      email: 'r.martinez@school.edu',
      bio: 'AP Seminar Coordinator and Technology Integration Specialist',
    },
    subject: 'Education & Technology',
    academicYear: '2023-2024',
    performanceTask: 'IMP',
    tags: [seminarTags[0], seminarTags[3], seminarTags[5]],
    presentationDate: '2024-04-15T14:00:00Z',
    resources: [
      {
        id: 'res1',
        type: 'presentation',
        title: 'Digital Divide Presentation',
        url: '/resources/digital-divide-presentation.pdf',
        description: 'Final IMP presentation slides',
        uploadedAt: '2024-04-15T14:00:00Z',
      },
    ],
    slug: 'digital-divide-rural-education',
    featured: true,
  },
  {
    id: 'sem2',
    title: 'Sustainable Fashion: Consumer Behavior and Environmental Impact',
    abstract: 'An investigation into how consumer awareness and purchasing decisions can drive sustainable practices in the fashion industry, focusing on fast fashion alternatives and circular economy principles.',
    teamMembers: [seminarAuthors[3], seminarAuthors[4]],
    subject: 'Environmental Science',
    academicYear: '2023-2024',
    performanceTask: 'IRR',
    tags: [seminarTags[1], seminarTags[3], seminarTags[5]],
    presentationDate: '2024-03-20T10:30:00Z',
    slug: 'sustainable-fashion-consumer-behavior',
    featured: false,
  },
  {
    id: 'sem3',
    title: 'Mental Health Stigma in Academic Communities',
    abstract: 'Exploring the barriers to mental health support in high schools and colleges, with recommendations for policy changes and community interventions to reduce stigma and improve access to care.',
    teamMembers: [seminarAuthors[5], seminarAuthors[0]],
    subject: 'Health & Society',
    academicYear: '2023-2024',
    performanceTask: 'IWA',
    tags: [seminarTags[3], seminarTags[4], seminarTags[5]],
    presentationDate: '2024-02-28T13:15:00Z',
    slug: 'mental-health-stigma-academic',
    featured: false,
  },
  {
    id: 'sem4',
    title: 'Artificial Intelligence in Creative Industries: Opportunities and Threats',
    abstract: 'Examining the impact of AI tools on creative professionals, analyzing both the opportunities for enhanced productivity and the potential threats to traditional creative employment.',
    teamMembers: [seminarAuthors[1], seminarAuthors[2], seminarAuthors[3]],
    subject: 'Technology & Society',
    academicYear: '2023-2024',
    performanceTask: 'IMP',
    tags: [seminarTags[0], seminarTags[1], seminarTags[4]],
    presentationDate: '2024-05-02T11:00:00Z',
    slug: 'ai-creative-industries-impact',
    featured: false,
  },
];

export default mockSeminarProjects; 