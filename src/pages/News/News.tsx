import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { mockNews } from '../../data/mockNews';

const NewsContainer = styled.main`
  background: ${theme.colors.background.light};
  min-height: 100vh;
  width: 100%;
`;

const PageHeader = styled.section`
  background: ${theme.colors.background.paper};
  border-bottom: 1px solid ${theme.colors.neutral[200]};
  padding: ${theme.spacing[12]} ${theme.spacing[4]} ${theme.spacing[8]};

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing[12]} ${theme.spacing[6]} ${theme.spacing[8]};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing[12]} ${theme.spacing[8]} ${theme.spacing[8]};
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    padding: ${theme.spacing[12]} ${theme.spacing[12]} ${theme.spacing[8]};
  }
`;

const HeaderContent = styled.div`
  width: 100%;
  
  @media (min-width: ${theme.breakpoints.xl}) {
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const PageTitle = styled.h1`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.fontSizes['4xl']};
  font-weight: ${theme.typography.fontWeights.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[4]};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSizes['3xl']};
  }
`;

const PageDescription = styled.p`
  font-size: ${theme.typography.fontSizes.lg};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeights.relaxed};
  max-width: 700px;
`;

const ArticlesSection = styled.section`
  width: 100%;
  padding: ${theme.spacing[8]} ${theme.spacing[4]} ${theme.spacing[16]};

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing[8]} ${theme.spacing[6]} ${theme.spacing[16]};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing[8]} ${theme.spacing[8]} ${theme.spacing[16]};
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    padding: ${theme.spacing[8]} ${theme.spacing[12]} ${theme.spacing[16]};
  }
`;

const ArticlesWrapper = styled.div`
  width: 100%;
  
  @media (min-width: ${theme.breakpoints.xl}) {
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[8]};
`;

const ArticleItem = styled(Link)`
  display: flex;
  gap: ${theme.spacing[6]};
  padding: ${theme.spacing[6]};
  background: ${theme.colors.background.paper};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.neutral[200]};
  text-decoration: none;
  color: inherit;
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing[4]};
    padding: ${theme.spacing[4]};
  }
`;

const ArticleImage = styled.div`
  flex-shrink: 0;
  width: 280px;
  height: 180px;
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  background: ${theme.colors.neutral[100]};

  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${theme.transitions.base};
  }

  ${ArticleItem}:hover & img {
    transform: scale(1.05);
  }
`;

const ArticleContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  margin-bottom: ${theme.spacing[3]};
  font-size: ${theme.typography.fontSizes.sm};
  color: ${theme.colors.text.muted};

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-wrap: wrap;
    gap: ${theme.spacing[2]};
  }
`;

const CategoryTag = styled.span`
  background: ${theme.colors.primary[100]};
  color: ${theme.colors.primary[700]};
  font-size: ${theme.typography.fontSizes.xs};
  font-weight: ${theme.typography.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  border-radius: ${theme.borderRadius.base};
`;

const MetaItem = styled.span`
  &:not(:last-child)::after {
    content: '•';
    margin-left: ${theme.spacing[3]};
    color: ${theme.colors.neutral[400]};
  }
`;

const ArticleTitle = styled.h2`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.fontSizes['2xl']};
  font-weight: ${theme.typography.fontWeights.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[3]};
  line-height: ${theme.typography.lineHeights.snug};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSizes.xl};
  }
`;

const ArticleExcerpt = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeights.relaxed};
  font-size: ${theme.typography.fontSizes.base};
  margin-top: auto;
`;

const News: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <NewsContainer>
      <PageHeader>
        <HeaderContent>
          <PageTitle>Latest News & Updates</PageTitle>
          <PageDescription>
            Stay informed with the latest developments in AP research, student achievements, 
            and important announcements from the academic community.
          </PageDescription>
        </HeaderContent>
      </PageHeader>

      <ArticlesSection>
        <ArticlesWrapper>
          <ArticleList>
            {mockNews.map((article) => (
              <ArticleItem key={article.id} to={`/news/${article.slug}`}>
                <ArticleImage>
                  <img src={article.featuredImage} alt={article.title} />
                </ArticleImage>
                
                <ArticleContent>
                  <ArticleMeta>
                    <CategoryTag>
                      {article.tags[0]?.name || 'News'}
                    </CategoryTag>
                    <MetaItem>{formatDate(article.publishedAt)}</MetaItem>
                    <MetaItem>By {article.author.name}</MetaItem>
                  </ArticleMeta>
                  
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                </ArticleContent>
              </ArticleItem>
            ))}
          </ArticleList>
        </ArticlesWrapper>
      </ArticlesSection>
    </NewsContainer>
  );
};

export default News; 