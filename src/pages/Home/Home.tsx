import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import Card from '../../components/Card/Card';
import RecommendationsSection from '../../components/RecommendationsSection/RecommendationsSection';
import { mockNews } from '../../data/mockNews';

const HomeContainer = styled.main`
  background: ${theme.colors.background.light};
  min-height: 100vh;
  width: 100%;
`;

const HeroSection = styled.section`
  position: relative;
  height: 500px;
  overflow: hidden;
  background: linear-gradient(135deg, ${theme.colors.neutral[800]} 0%, ${theme.colors.neutral[600]} 100%);
  width: 100%;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    height: 400px;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    height: 350px;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=500&fit=crop');
  background-size: cover;
  background-position: center;
  opacity: 0.3;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  padding: 0 ${theme.spacing[4]};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: ${theme.spacing[8]};

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 0 ${theme.spacing[6]};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 ${theme.spacing[8]};
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    padding: 0 ${theme.spacing[12]};
    max-width: 1400px;
    margin: 0 auto;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${theme.spacing[4]};
  }
`;

const HeroTextContent = styled.div`
  color: ${theme.colors.text.inverse};
  
  @media (max-width: ${theme.breakpoints.md}) {
    order: 2;
  }
`;

const HeroCategory = styled.span`
  display: inline-block;
  font-size: ${theme.typography.fontSizes.sm};
  font-weight: ${theme.typography.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${theme.colors.primary[300]};
  margin-bottom: ${theme.spacing[3]};
`;

const HeroTitle = styled.h1`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.fontSizes['5xl']};
  font-weight: ${theme.typography.fontWeights.bold};
  line-height: ${theme.typography.lineHeights.tight};
  margin-bottom: ${theme.spacing[4]};
  color: ${theme.colors.text.inverse};

  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: ${theme.typography.fontSizes['4xl']};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSizes['3xl']};
  }
`;

const HeroExcerpt = styled.p`
  font-size: ${theme.typography.fontSizes.lg};
  line-height: ${theme.typography.lineHeights.relaxed};
  color: ${theme.colors.neutral[100]};
  margin-bottom: ${theme.spacing[6]};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSizes.base};
  }
`;

const HeroMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  font-size: ${theme.typography.fontSizes.sm};
  color: ${theme.colors.neutral[200]};

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const MetaItem = styled.span`
  &:not(:last-child)::after {
    content: '•';
    margin-left: ${theme.spacing[3]};
    color: ${theme.colors.neutral[400]};
  }
`;

const HeroImageSection = styled.div`
  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const ContentSection = styled.section`
  width: 100%;
  padding: ${theme.spacing[12]} ${theme.spacing[4]} ${theme.spacing[16]};

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing[12]} ${theme.spacing[6]} ${theme.spacing[16]};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing[12]} ${theme.spacing[8]} ${theme.spacing[16]};
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    padding: ${theme.spacing[12]} ${theme.spacing[12]} ${theme.spacing[16]};
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  
  @media (min-width: ${theme.breakpoints.xl}) {
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: ${theme.spacing[8]};
`;

const SectionTitle = styled.h2`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.fontSizes['3xl']};
  font-weight: ${theme.typography.fontWeights.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[3]};
`;

const SectionDescription = styled.p`
  font-size: ${theme.typography.fontSizes.lg};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeights.relaxed};
  max-width: 600px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing[6]};
  margin-bottom: ${theme.spacing[12]};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: ${theme.spacing[8]} auto 0;
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  font-size: ${theme.typography.fontSizes.base};
  font-weight: ${theme.typography.fontWeights.medium};
  color: ${theme.colors.primary[600]};
  background: transparent;
  border: 2px solid ${theme.colors.primary[600]};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.primary[600]};
    color: ${theme.colors.text.inverse};
  }
`;

const Home: React.FC = () => {
  const featuredArticle = mockNews.find(article => article.featured);
  const otherArticles = mockNews.filter(article => !article.featured).slice(0, 6);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <HomeContainer>
      {featuredArticle && (
        <HeroSection>
          <HeroBackground />
          <HeroContent>
            <HeroTextContent>
              <HeroCategory>Featured Research</HeroCategory>
              <HeroTitle>{featuredArticle.title}</HeroTitle>
              <HeroExcerpt>{featuredArticle.excerpt}</HeroExcerpt>
              <HeroMeta>
                <MetaItem>{featuredArticle.author.name}</MetaItem>
                <MetaItem>{formatDate(featuredArticle.publishedAt)}</MetaItem>
              </HeroMeta>
            </HeroTextContent>
            <HeroImageSection>
              {/* Space for potential hero image or illustration */}
            </HeroImageSection>
          </HeroContent>
        </HeroSection>
      )}

      <ContentSection>
        <ContentWrapper>
          <SectionHeader>
            <SectionTitle>Latest Research & News</SectionTitle>
            <SectionDescription>
              Discover groundbreaking research from AP Seminar and AP Research students, 
              showcasing innovative approaches to real-world challenges and academic inquiry.
            </SectionDescription>
          </SectionHeader>

          <ContentGrid>
            {otherArticles.map((article) => (
              <Card
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                imageUrl={article.featuredImage}
                link={`/news/${article.slug}`}
                category={article.tags[0]?.name}
                author={article.author.name}
                date={formatDate(article.publishedAt)}
                size="medium"
              />
            ))}
          </ContentGrid>

          <LoadMoreButton>
            View All Research & News
          </LoadMoreButton>
        </ContentWrapper>
      </ContentSection>

      <RecommendationsSection />
    </HomeContainer>
  );
};

export default Home; 