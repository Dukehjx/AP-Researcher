import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

const EssayContainer = styled.main`
  background: ${theme.colors.background.light};
  min-height: 100vh;
  width: 100%;
`;

const EssayWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: ${theme.spacing[8]} ${theme.spacing[4]};

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing[8]} ${theme.spacing[6]};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing[8]} ${theme.spacing[8]};
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    padding: ${theme.spacing[8]} ${theme.spacing[12]};
  }
`;

const EssayLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 2fr 1fr;
    gap: ${theme.spacing[12]};
  }
`;

const MainContent = styled.article`
  background: ${theme.colors.background.paper};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.neutral[200]};
  padding: ${theme.spacing[8]};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[6]};
  }
`;

const EssayHeader = styled.header`
  margin-bottom: ${theme.spacing[8]};
  padding-bottom: ${theme.spacing[6]};
  border-bottom: 1px solid ${theme.colors.neutral[200]};
`;

const CategoryLabel = styled.div`
  display: inline-block;
  background: ${theme.colors.primary[100]};
  color: ${theme.colors.primary[700]};
  font-size: ${theme.typography.fontSizes.sm};
  font-weight: ${theme.typography.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  border-radius: ${theme.borderRadius.base};
  margin-bottom: ${theme.spacing[4]};
`;

const EssayTitle = styled.h1`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.fontSizes['4xl']};
  font-weight: ${theme.typography.fontWeights.bold};
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeights.tight};
  margin-bottom: ${theme.spacing[4]};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSizes['3xl']};
  }
`;

const EssayMeta = styled.div`
  font-size: ${theme.typography.fontSizes.sm};
  color: ${theme.colors.text.muted};
  margin-bottom: ${theme.spacing[2]};
`;

const EssayContent = styled.div`
  font-size: ${theme.typography.fontSizes.lg};
  line-height: ${theme.typography.lineHeights.relaxed};
  color: ${theme.colors.text.primary};

  h2 {
    font-family: ${theme.typography.fonts.heading};
    font-size: ${theme.typography.fontSizes['2xl']};
    font-weight: ${theme.typography.fontWeights.semibold};
    color: ${theme.colors.text.primary};
    margin: ${theme.spacing[8]} 0 ${theme.spacing[4]} 0;
    line-height: ${theme.typography.lineHeights.snug};
  }

  h3 {
    font-family: ${theme.typography.fonts.heading};
    font-size: ${theme.typography.fontSizes.xl};
    font-weight: ${theme.typography.fontWeights.semibold};
    color: ${theme.colors.text.primary};
    margin: ${theme.spacing[6]} 0 ${theme.spacing[3]} 0;
    line-height: ${theme.typography.lineHeights.snug};
  }

  p {
    margin-bottom: ${theme.spacing[6]};
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    font-weight: ${theme.typography.fontWeights.semibold};
    color: ${theme.colors.text.primary};
  }

  em {
    font-style: italic;
  }
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[8]};
`;

const SidebarSection = styled.div`
  background: ${theme.colors.background.paper};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.neutral[200]};
  padding: ${theme.spacing[6]};
`;

const SidebarTitle = styled.h2`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.fontSizes['2xl']};
  font-weight: ${theme.typography.fontWeights.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[6]};
`;

const RelatedArticle = styled(Link)`
  display: flex;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[4]} 0;
  border-bottom: 1px solid ${theme.colors.neutral[200]};
  text-decoration: none;
  color: inherit;
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.neutral[50]};
    margin: 0 -${theme.spacing[4]};
    padding: ${theme.spacing[4]};
    border-radius: ${theme.borderRadius.md};
    border-bottom: 1px solid transparent;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const RelatedImage = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 60px;
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  background: ${theme.colors.neutral[100]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RelatedContent = styled.div`
  flex: 1;
`;

const RelatedTitle = styled.h3`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.fontSizes.base};
  font-weight: ${theme.typography.fontWeights.semibold};
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeights.snug};
  margin-bottom: ${theme.spacing[1]};
`;

const SubjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
`;

const SubjectTag = styled(Link)`
  background: transparent;
  color: ${theme.colors.primary[600]};
  font-size: ${theme.typography.fontSizes.sm};
  font-weight: ${theme.typography.fontWeights.medium};
  text-decoration: underline;
  padding: ${theme.spacing[1]} 0;
  border-radius: ${theme.borderRadius.base};
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.primary[700]};
    text-decoration: none;
  }
`;

const Essay: React.FC = () => {
  const relatedArticles = [
    {
      id: '1',
      title: 'Revolutionary Findings: How Social Media Algorithms Affect Teen Mental Health',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=160&h=120&fit=crop&crop=center',
      link: '/news/social-media-algorithms-teen-mental-health'
    },
    {
      id: '2',
      title: 'AP Seminar Teams Tackle Climate Justice Through Collaborative Research',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=160&h=120&fit=crop&crop=center',
      link: '/news/ap-seminar-climate-justice-research'
    },
    {
      id: '3',
      title: 'Breaking Barriers: AP Research Student Develops AI Tool for Language Learning',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=160&h=120&fit=crop&crop=center',
      link: '/news/ai-language-learning-tool-ap-research'
    }
  ];

  return (
    <EssayContainer>
      <EssayWrapper>
        <EssayLayout>
          <MainContent>
            <EssayHeader>
              <CategoryLabel>Student Essay</CategoryLabel>
              <EssayMeta>Published on May 29, 2025</EssayMeta>
              <EssayTitle>Algorithm vs. Adolescence: The Hidden Cost of Social Media on Teen Mental Health</EssayTitle>
            </EssayHeader>

            <EssayContent>
              <h2>Introduction</h2>
              <p>
                In a world where scrolling has become second nature, few teens pause to question how the content on their social media feed is chosen. Yet behind each suggested post lies a powerful algorithm — a set of programmed decisions that may subtly but profoundly shape a teenager's thoughts, emotions, and behavior. According to a recent AP Research study highlighted by Emily Rodriguez in her article <em>"Revolutionary Findings: How Social Media Algorithms Affect Teen Mental Health"</em> (May 15, 2024), the relationship between these algorithms and adolescent mental health is not just influential — it's deeply complex.
              </p>

              <h2>The Algorithmic Influence</h2>
              <p>
                Social media platforms such as TikTok, Instagram, and YouTube utilize algorithms that personalize content based on user behavior — likes, comments, watch time, and more. While these systems aim to increase engagement, they often prioritize emotionally charged or sensational content that can keep users hooked. For teens, whose brains are still developing and are especially sensitive to social validation and peer comparison, this can lead to harmful psychological effects. The study Rodriguez references found a notable correlation between frequent exposure to algorithm-curated content and increased levels of anxiety, depression, and body dissatisfaction in adolescents.
              </p>

              <h2>The Echo Chamber Effect</h2>
              <p>
                One of the most alarming consequences is the creation of <strong>"echo chambers"</strong> — online environments where users are repeatedly exposed to similar viewpoints or content types. For teens struggling with issues like low self-esteem or eating disorders, algorithms can reinforce negative thought patterns by continuously showing content that mirrors or even glamorizes these struggles. The AP Research study underscores this as a key contributor to the worsening mental health landscape among digital-native youth.
              </p>

              <h2>Educational Implications</h2>
              <p>
                Despite the risks, the article also emphasizes an important opportunity: education. If digital literacy programs can teach students not only how to navigate the internet but also how algorithms work, young users can become more conscious consumers of online media. By understanding the persuasive techniques behind the screen, teens can develop critical thinking skills that help buffer them against manipulation and emotional harm.
              </p>

              <h2>Conclusion</h2>
              <p>
                As Rodriguez aptly puts it, the findings from this AP Research study are revolutionary — not because they reveal that social media affects teens (a fact long suspected), but because they clarify the mechanism of that influence: the algorithm. The responsibility now lies with educators, parents, and platform designers to address these effects before they become irreversible. In a digital age, protecting mental health means teaching the next generation not just how to use technology, but how to question it.
              </p>
            </EssayContent>
          </MainContent>

          <Sidebar>
            <SidebarSection>
              <SidebarTitle>Related Articles</SidebarTitle>
              {relatedArticles.map((article) => (
                <RelatedArticle key={article.id} to={article.link}>
                  <RelatedImage>
                    <img src={article.image} alt={article.title} />
                  </RelatedImage>
                  <RelatedContent>
                    <RelatedTitle>{article.title}</RelatedTitle>
                  </RelatedContent>
                </RelatedArticle>
              ))}
            </SidebarSection>

            <SidebarSection>
              <SidebarTitle>Subjects</SidebarTitle>
              <SubjectTags>
                <SubjectTag to="/subjects/psychology">Psychology</SubjectTag>
                <SubjectTag to="/subjects/technology">Technology</SubjectTag>
                <SubjectTag to="/subjects/education">Education</SubjectTag>
                <SubjectTag to="/subjects/mental-health">Mental Health</SubjectTag>
              </SubjectTags>
            </SidebarSection>
          </Sidebar>
        </EssayLayout>
      </EssayWrapper>
    </EssayContainer>
  );
};

export default Essay; 