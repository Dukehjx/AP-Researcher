import type { NewsArticle, Author, Tag } from './types';

// Sample authors
const authors: Author[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    email: 'sarah.chen@apresearch.org',
    bio: 'AP Research Coordinator and Biology Teacher',
  },
  {
    id: '2',
    name: 'Emily Rodriguez',
    email: 'emily.r@student.edu',
    bio: 'AP Research Student, Class of 2024',
  },
  {
    id: '3',
    name: 'Marcus Thompson',
    email: 'marcus.t@student.edu',
    bio: 'AP Seminar Student, Class of 2024',
  },
  {
    id: '4',
    name: 'Dr. Michael Park',
    email: 'michael.park@apresearch.org',
    bio: 'AP Seminar Coordinator and History Teacher',
  },
  {
    id: '5',
    name: 'Alex Chen',
    email: 'alex.chen@student.edu',
    bio: 'AP Research Student, Class of 2025',
  },
];

// Sample tags
const tags: Tag[] = [
  { id: 'climate', name: 'Climate Change', color: '#3d8b3d', category: 'Science' },
  { id: 'psychology', name: 'Psychology', color: '#b8925a', category: 'Social Science' },
  { id: 'technology', name: 'Technology', color: '#5cb85c', category: 'Science' },
  { id: 'education', name: 'Education', color: '#7ba05b', category: 'Social Science' },
  { id: 'health', name: 'Public Health', color: '#9caf88', category: 'Science' },
  { id: 'literature', name: 'Literature', color: '#8b6f47', category: 'Humanities' },
];

// Mock news articles
export const mockNews: NewsArticle[] = [
  {
    id: '0',
    title: 'Algorithm vs. Adolescence: The Hidden Cost of Social Media on Teen Mental Health',
    excerpt: 'A student essay examining the complex relationship between social media algorithms and adolescent psychological well-being, building on recent AP Research findings.',
    content: `This student essay explores the intricate relationship between social media algorithms and teen mental health, analyzing how these powerful systems shape adolescent behavior and psychological outcomes.

In a world where scrolling has become second nature, few teens pause to question how the content on their social media feed is chosen. Yet behind each suggested post lies a powerful algorithm — a set of programmed decisions that may subtly but profoundly shape a teenager's thoughts, emotions, and behavior.

The essay examines key areas including algorithmic influence on engagement, the echo chamber effect, and educational implications for digital literacy. Through careful analysis of recent research, it demonstrates how algorithm-curated content correlates with increased anxiety, depression, and body dissatisfaction in adolescents.

The work concludes with a call for enhanced digital literacy education and collaborative efforts between educators, parents, and platform designers to address these concerning effects before they become irreversible.`,
    author: authors[4],
    publishedAt: '2024-05-29T10:00:00Z',
    tags: [tags[1], tags[2], tags[3]],
    featuredImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop&crop=center',
    slug: 'algorithm-vs-adolescence',
    featured: true,
  },
  {
    id: '1',
    title: 'Revolutionary Findings: How Social Media Algorithms Affect Teen Mental Health',
    excerpt: 'A comprehensive AP Research study reveals the complex relationship between algorithm-driven content and adolescent psychological well-being, with implications for digital literacy education.',
    content: `This groundbreaking AP Research project, conducted over 18 months by senior Emily Rodriguez, examines the correlation between social media algorithm exposure and mental health outcomes in teenagers aged 14-18.

The study employed a mixed-methods approach, combining quantitative analysis of screen time data with qualitative interviews and psychological assessments. Rodriguez surveyed 200 participants across three high schools, measuring their social media usage patterns alongside standardized mental health indicators.

Key findings include:
- 73% of participants showed increased anxiety symptoms after exposure to algorithm-curated "negative" content
- Students who used chronological feeds showed 15% better emotional regulation scores
- Time spent on educational content correlated positively with academic self-efficacy

"This research challenges us to think critically about how we design and interact with digital platforms," notes Dr. Sarah Chen, AP Research Coordinator. "Emily's work demonstrates the real-world impact that student research can have on policy discussions."

The project has already gained attention from local mental health organizations and has been submitted to the National AP Research Symposium.`,
    author: authors[1],
    publishedAt: '2024-05-15T10:30:00Z',
    tags: [tags[1], tags[2]],
    featuredImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop&crop=center',
    slug: 'social-media-algorithms-teen-mental-health',
    featured: false,
  },
  {
    id: '2',
    title: 'AP Seminar Teams Tackle Climate Justice Through Collaborative Research',
    excerpt: 'Three AP Seminar teams present innovative solutions to environmental inequality, combining scientific research with social policy analysis.',
    content: `This semester's AP Seminar cohort has produced remarkable collaborative research on climate justice, addressing the intersection of environmental science and social equity.

The teams explored different aspects of climate change impacts on vulnerable communities:

**Team 1: Urban Heat Islands and Housing Policy**
Analyzed temperature data from low-income neighborhoods and proposed policy interventions for equitable cooling infrastructure.

**Team 2: Food Security and Climate Adaptation**
Examined how climate change affects local food systems and developed community-based solutions for food resilience.

**Team 3: Environmental Health Disparities**
Investigated the relationship between pollution exposure and health outcomes in marginalized communities.

Each team will present their findings at the Regional AP Capstone Conference next month.`,
    author: authors[3],
    publishedAt: '2024-05-10T14:15:00Z',
    tags: [tags[0], tags[3]],
    featuredImage: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=500&fit=crop&crop=center',
    slug: 'ap-seminar-climate-justice-research',
    featured: false,
  },
  {
    id: '3',
    title: 'Breaking Barriers: AP Research Student Develops AI Tool for Language Learning',
    excerpt: 'Marcus Thompson creates machine learning application to help non-native speakers improve academic writing skills.',
    content: `Senior Marcus Thompson has developed an innovative AI-powered tool that helps English language learners improve their academic writing through personalized feedback and linguistic pattern recognition.

The project, titled "Bridging Languages: AI-Assisted Academic Writing for Multilingual Students," represents a year-long investigation into natural language processing applications in education.

Thompson's tool analyzes writing samples and provides targeted suggestions for:
- Sentence structure improvement
- Academic vocabulary enhancement
- Cultural communication patterns
- Grammar error correction with explanations

"I wanted to address a real challenge that many of my peers face," Thompson explains. "Traditional grammar checkers don't understand the specific needs of multilingual learners."

The application has been tested with 50 students across different language backgrounds, showing a 34% improvement in academic writing scores over a semester.

Thompson plans to open-source the tool and has been invited to present at the International Conference on Educational Technology.`,
    author: authors[2],
    publishedAt: '2024-05-08T09:00:00Z',
    tags: [tags[2], tags[3]],
    featuredImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop&crop=center',
    slug: 'ai-language-learning-tool-ap-research',
    featured: false,
  },
  {
    id: '4',
    title: 'From Classroom to Community: AP Research Addresses Local Water Quality Crisis',
    excerpt: 'Student researcher partners with environmental agencies to study contamination in local watershed.',
    content: `What started as a curiosity about brown water from the school fountain has evolved into a comprehensive environmental study with real policy implications.

Junior Sarah Kim's AP Research project examines water quality in the local Riverside watershed, collaborating with the County Environmental Health Department and the State Water Resources Board.

Kim's methodology includes:
- Monthly water sampling from 12 locations
- Chemical analysis using school lab equipment
- Interviews with community members about health concerns
- Historical analysis of industrial discharge data

Preliminary findings have identified several contamination sources and elevated levels of heavy metals in two residential areas.

"Sarah's work is already informing our monitoring protocols," says County Environmental Scientist Dr. Janet Liu. "This is exactly the kind of community-engaged research we need more of."

The project has led to increased testing frequency in affected areas and new community education initiatives about water safety.`,
    author: authors[0],
    publishedAt: '2024-05-05T16:45:00Z',
    tags: [tags[0], tags[4]],
    featuredImage: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=500&fit=crop&crop=center',
    slug: 'water-quality-crisis-ap-research',
    featured: false,
  },
  {
    id: '5',
    title: 'Literary Analysis Meets Digital Humanities in AP Seminar Project',
    excerpt: 'Students use computational tools to analyze representation in contemporary young adult literature.',
    content: `This year's AP Seminar students have pioneered a digital humanities approach to literary analysis, using data science techniques to examine diversity and representation in young adult fiction.

The collaborative project, "Mirrors and Windows: Computational Analysis of Identity in YA Literature," analyzed over 500 books published between 2018-2023.

Using text analysis software, students examined:
- Character name diversity and cultural origins
- Setting geographic distribution
- Theme frequency related to social justice
- Author demographic representation

The research revealed significant patterns in how different identities are portrayed in popular YA fiction and identified gaps in representation that affect young readers' self-perception.

"We're combining traditional literary criticism with modern analytical tools," explains team leader Alex Chen. "It's helping us understand literature's impact on society in measurable ways."

The project has garnered interest from publishers and literacy organizations interested in promoting diverse voices in young adult literature.`,
    author: authors[3],
    publishedAt: '2024-05-01T11:20:00Z',
    tags: [tags[5], tags[2]],
    featuredImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop&crop=center',
    slug: 'digital-humanities-ya-literature-analysis',
    featured: false,
  },
  {
    id: '6',
    title: 'AP Research Symposium 2024: Celebrating Student Innovation',
    excerpt: 'Annual showcase highlights outstanding research projects from students across the region.',
    content: `The fifth annual AP Research Symposium brought together over 150 student researchers to share their innovative projects and connect with peers from across the region.

This year's symposium featured presentations in six categories:
- STEM Innovation and Technology
- Social Sciences and Human Behavior  
- Environmental Science and Sustainability
- Arts, Literature, and Cultural Studies
- Health and Medical Research
- Education and Learning Sciences

Highlights included:
- A study on biodegradable plastic alternatives made from food waste
- Research on the effectiveness of peer mentoring in STEM education
- An analysis of music therapy's impact on dementia patients
- Investigation into social media's role in political polarization

"The quality and relevance of student research continues to amaze me," commented keynote speaker Dr. Maria Santos, Professor of Education at State University. "These young researchers are tackling some of our most pressing societal challenges."

Awards were presented for outstanding research methodology, community impact, and innovative approaches to traditional problems.`,
    author: authors[0],
    publishedAt: '2024-04-28T13:00:00Z',
    tags: [tags[3], tags[2]],
    featuredImage: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=500&fit=crop&crop=center',
    slug: 'ap-research-symposium-2024',
    featured: false,
  },
];

export default mockNews; 