import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { mockResearchProjects } from '../../data/mockResearchProjects';

const ResearchContainer = styled.main`
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

const ProjectsSection = styled.section`
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

const ProjectsWrapper = styled.div`
  width: 100%;
  
  @media (min-width: ${theme.breakpoints.xl}) {
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[8]};
`;

const ProjectItem = styled(Link)`
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

const ProjectImage = styled.div`
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

  ${ProjectItem}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectMeta = styled.div`
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

const ProjectTitle = styled.h2`
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

const ProjectAbstract = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeights.relaxed};
  font-size: ${theme.typography.fontSizes.base};
  margin-bottom: ${theme.spacing[4]};
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[4]};
  margin-top: auto;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[1]};
`;

const DetailLabel = styled.span`
  font-size: ${theme.typography.fontSizes.xs};
  font-weight: ${theme.typography.fontWeights.medium};
  color: ${theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const DetailValue = styled.span`
  font-size: ${theme.typography.fontSizes.sm};
  color: ${theme.colors.text.secondary};
`;

const ApResearch: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getProjectImage = (projectId: string) => {
    const researchImages = [
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=500&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop&crop=center',
    ];
    const imageIndex = parseInt(projectId.replace('res', '')) - 1;
    return researchImages[imageIndex] || researchImages[0];
  };

  return (
    <ResearchContainer>
      <PageHeader>
        <HeaderContent>
          <PageTitle>AP Research Projects</PageTitle>
          <PageDescription>
            Discover independent research projects from AP Research students, featuring original investigations, 
            rigorous methodology, and scholarly contributions to various academic disciplines.
          </PageDescription>
        </HeaderContent>
      </PageHeader>

      <ProjectsSection>
        <ProjectsWrapper>
          <ProjectList>
            {mockResearchProjects.map((project) => (
              <ProjectItem key={project.id} to={`/ap-research/${project.slug}`}>
                <ProjectImage>
                  <img src={getProjectImage(project.id)} alt={project.title} />
                </ProjectImage>
                
                <ProjectContent>
                  <ProjectMeta>
                    <CategoryTag>
                      Original Research
                    </CategoryTag>
                    <MetaItem>{formatDate(project.defenseDate)}</MetaItem>
                    <MetaItem>{project.researchArea}</MetaItem>
                  </ProjectMeta>
                  
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectAbstract>{project.abstract}</ProjectAbstract>
                  
                  <ProjectDetails>
                    <DetailItem>
                      <DetailLabel>Researcher</DetailLabel>
                      <DetailValue>{project.author.name}</DetailValue>
                    </DetailItem>
                    <DetailItem>
                      <DetailLabel>Methodology</DetailLabel>
                      <DetailValue>{project.methodology}</DetailValue>
                    </DetailItem>
                    {project.mentor && (
                      <DetailItem>
                        <DetailLabel>Mentor</DetailLabel>
                        <DetailValue>{project.mentor.name}</DetailValue>
                      </DetailItem>
                    )}
                  </ProjectDetails>
                </ProjectContent>
              </ProjectItem>
            ))}
          </ProjectList>
        </ProjectsWrapper>
      </ProjectsSection>
    </ResearchContainer>
  );
};

export default ApResearch; 