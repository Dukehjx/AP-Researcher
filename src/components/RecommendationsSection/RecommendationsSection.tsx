import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import Card from '../Card/Card';
import { mockNews } from '../../data/mockNews';
import { mockSeminarProjects } from '../../data/mockSeminarProjects';
import { mockResearchProjects } from '../../data/mockResearchProjects';
import { mockRepetitiveResearch } from '../../data/mockRepetitiveResearch';

const RecommendationsContainer = styled.section`
  width: 100%;
  padding: ${theme.spacing[16]} ${theme.spacing[4]} ${theme.spacing[20]};
  background: ${theme.colors.background.paper};

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing[16]} ${theme.spacing[6]} ${theme.spacing[20]};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing[16]} ${theme.spacing[8]} ${theme.spacing[20]};
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    padding: ${theme.spacing[16]} ${theme.spacing[12]} ${theme.spacing[20]};
  }
`;

const RecommendationsWrapper = styled.div`
  width: 100%;
  
  @media (min-width: ${theme.breakpoints.xl}) {
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing[12]};
`;

const SectionTitle = styled.h2`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.fontSizes['4xl']};
  font-weight: ${theme.typography.fontWeights.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[4]};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSizes['3xl']};
  }
`;

const SectionDescription = styled.p`
  font-size: ${theme.typography.fontSizes.lg};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeights.relaxed};
  max-width: 700px;
  margin: 0 auto;
`;

const CategorySection = styled.div`
  margin-bottom: ${theme.spacing[16]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing[8]};
  padding-bottom: ${theme.spacing[4]};
  border-bottom: 2px solid ${theme.colors.primary[100]};

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing[3]};
  }
`;

const CategoryTitle = styled.h3`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.fontSizes['2xl']};
  font-weight: ${theme.typography.fontWeights.semibold};
  color: ${theme.colors.text.primary};
`;

const ViewAllLink = styled(Link)`
  font-size: ${theme.typography.fontSizes.base};
  font-weight: ${theme.typography.fontWeights.medium};
  color: ${theme.colors.primary[600]};
  text-decoration: none;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border: 1px solid ${theme.colors.primary[300]};
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.primary[600]};
    color: ${theme.colors.text.inverse};
    text-decoration: none;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  gap: ${theme.spacing[6]};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto auto;
    gap: ${theme.spacing[6]};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: auto auto;
    gap: ${theme.spacing[6]};
  }
`;

const FeaturedCard = styled.div`
  height: 100%;
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-column: 1;
    grid-row: 1 / 4;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-column: 1;
    grid-row: 1 / 3;
  }

  // Ensure the card inside fills the full height
  & > * {
    height: 100%;
  }
`;

const MinorCard = styled.div<{ index: number }>`
  @media (min-width: ${theme.breakpoints.md}) and (max-width: ${theme.breakpoints.lg}) {
    grid-column: 2;
    grid-row: ${props => props.index + 1};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    ${props => {
      if (props.index === 0) {
        return `
          grid-column: 2;
          grid-row: 1;
        `;
      } else if (props.index === 1) {
        return `
          grid-column: 3;
          grid-row: 1;
        `;
      } else if (props.index === 2) {
        return `
          grid-column: 2 / 4;
          grid-row: 2;
        `;
      }
    }}
  }
`;

interface CategoryData {
  title: string;
  route: string;
  featured: any;
  items: any[];
}

const RecommendationsSection: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatSeminarProject = (project: any) => {
    // Different images for each Seminar project
    const seminarImages = [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&crop=center', // Collaboration/education
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop&crop=center', // Nature/environment
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&crop=center', // Mental health/wellness
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop&crop=center', // Technology/AI
    ];
    const imageIndex = parseInt(project.id.replace('sem', '')) - 1;
    
    return {
      title: project.title,
      excerpt: project.abstract,
      imageUrl: seminarImages[imageIndex] || seminarImages[0],
      link: `/ap-seminar/${project.slug}`,
      category: project.subject,
      author: project.teamMembers[0]?.name || 'AP Seminar Team',
      date: formatDate(project.presentationDate),
    };
  };

  const formatResearchProject = (project: any) => {
    // Different images for each Research project
    const researchImages = [
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop&crop=center', // Brain/neuroscience
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop&crop=center', // Urban environment/bees
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=500&fit=crop&crop=center', // Blockchain/technology
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop&crop=center', // Social media/psychology
    ];
    const imageIndex = parseInt(project.id.replace('res', '')) - 1;
    
    return {
      title: project.title,
      excerpt: project.abstract,
      imageUrl: researchImages[imageIndex] || researchImages[0],
      link: `/ap-research/${project.slug}`,
      category: project.researchArea,
      author: project.author.name,
      date: formatDate(project.defenseDate),
    };
  };

  const formatRepetitiveResearch = (project: any) => {
    // Different images for each Repetitive Research project
    const repetitiveImages = [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&crop=center', // Psychology/research
      'https://images.unsplash.com/photo-1427348693976-99e4aca06bb9?w=800&h=500&fit=crop&crop=center', // Education/STEM
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop&crop=center', // Gaming/online communities
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop&crop=center', // Bilingual/education
    ];
    const imageIndex = parseInt(project.id.replace('rep', '')) - 1;
    
    return {
      title: project.title,
      excerpt: project.abstract,
      imageUrl: repetitiveImages[imageIndex] || repetitiveImages[0],
      link: `/repetitive-research/${project.slug}`,
      category: project.replicationScope,
      author: project.author.name,
      date: formatDate(project.completionDate),
    };
  };

  const formatNewsArticle = (article: any) => ({
    title: article.title,
    excerpt: article.excerpt,
    imageUrl: article.featuredImage,
    link: `/news/${article.slug}`,
    category: article.tags[0]?.name || 'News',
    author: article.author.name,
    date: formatDate(article.publishedAt),
  });

  // Prepare category data
  const categories: CategoryData[] = [
    {
      title: 'Latest News',
      route: '/news',
      featured: mockNews.find(item => item.featured),
      items: mockNews.filter(item => !item.featured).slice(0, 3),
    },
    {
      title: 'AP Seminar',
      route: '/ap-seminar',
      featured: mockSeminarProjects.find(item => item.featured),
      items: mockSeminarProjects.filter(item => !item.featured).slice(0, 3),
    },
    {
      title: 'AP Research',
      route: '/ap-research',
      featured: mockResearchProjects.find(item => item.featured),
      items: mockResearchProjects.filter(item => !item.featured).slice(0, 3),
    },
    {
      title: 'Repetitive Research',
      route: '/repetitive-research',
      featured: mockRepetitiveResearch.find(item => item.featured),
      items: mockRepetitiveResearch.filter(item => !item.featured).slice(0, 3),
    },
  ];

  const getFormattedItem = (item: any, categoryTitle: string) => {
    switch (categoryTitle) {
      case 'Latest News':
        return formatNewsArticle(item);
      case 'AP Seminar':
        return formatSeminarProject(item);
      case 'AP Research':
        return formatResearchProject(item);
      case 'Repetitive Research':
        return formatRepetitiveResearch(item);
      default:
        return formatNewsArticle(item);
    }
  };

  return (
    <RecommendationsContainer>
      <RecommendationsWrapper>
        <SectionHeader>
          <SectionTitle>Explore by Category</SectionTitle>
          <SectionDescription>
            Dive deeper into each research category and discover the innovative work 
            being conducted by AP students across various academic disciplines.
          </SectionDescription>
        </SectionHeader>

        {categories.map((category, index) => (
          <CategorySection key={index}>
            <CategoryHeader>
              <CategoryTitle>{category.title}</CategoryTitle>
              <ViewAllLink to={category.route}>
                View All {category.title}
              </ViewAllLink>
            </CategoryHeader>

            <CategoryGrid>
              {category.featured && (
                <FeaturedCard>
                  <Card
                    {...getFormattedItem(category.featured, category.title)}
                    size="large"
                    featured
                    fillHeight
                  />
                </FeaturedCard>
              )}

              {category.items.map((item, itemIndex) => (
                <MinorCard key={itemIndex} index={itemIndex}>
                  <Card
                    {...getFormattedItem(item, category.title)}
                    size={itemIndex === 2 ? "medium" : "small"}
                  />
                </MinorCard>
              ))}
            </CategoryGrid>
          </CategorySection>
        ))}
      </RecommendationsWrapper>
    </RecommendationsContainer>
  );
};

export default RecommendationsSection; 