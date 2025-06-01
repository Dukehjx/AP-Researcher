import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { APP_CONFIG } from '../../utils/constants';

const FooterWrapper = styled.footer`
  background: ${theme.colors.neutral[900]};
  color: ${theme.colors.text.inverse};
  margin-top: auto;
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
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

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: ${theme.spacing[12]};
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.fontSizes.lg};
  font-weight: ${theme.typography.fontWeights.semibold};
  color: ${theme.colors.text.inverse};
  margin-bottom: ${theme.spacing[4]};
`;

const FooterDescription = styled.p`
  font-size: ${theme.typography.fontSizes.base};
  line-height: ${theme.typography.lineHeights.relaxed};
  color: ${theme.colors.neutral[300]};
  margin-bottom: ${theme.spacing[6]};
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: ${theme.spacing[3]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const FooterLinkAnchor = styled(Link)`
  font-size: ${theme.typography.fontSizes.base};
  color: ${theme.colors.neutral[300]};
  text-decoration: none;
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.text.inverse};
    text-decoration: none;
  }
`;

const ExternalLink = styled.a`
  font-size: ${theme.typography.fontSizes.base};
  color: ${theme.colors.neutral[300]};
  text-decoration: none;
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.text.inverse};
    text-decoration: none;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${theme.colors.neutral[700]};
  margin-top: ${theme.spacing[8]};
  padding-top: ${theme.spacing[6]};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Copyright = styled.p`
  font-size: ${theme.typography.fontSizes.sm};
  color: ${theme.colors.neutral[400]};
  margin: 0;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: ${theme.spacing[6]};
  flex-wrap: wrap;
`;

const FooterBottomLink = styled(Link)`
  font-size: ${theme.typography.fontSizes.sm};
  color: ${theme.colors.neutral[400]};
  text-decoration: none;
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.neutral[200]};
    text-decoration: none;
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterTitle>{APP_CONFIG.name}</FooterTitle>
            <FooterDescription>
              A platform dedicated to showcasing outstanding AP Seminar and AP Research student work, 
              fostering academic excellence and supporting the next generation of researchers and scholars.
            </FooterDescription>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Explore</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <FooterLinkAnchor to="/news">Latest News</FooterLinkAnchor>
              </FooterLink>
              <FooterLink>
                <FooterLinkAnchor to="/ap-seminar">AP Seminar Projects</FooterLinkAnchor>
              </FooterLink>
              <FooterLink>
                <FooterLinkAnchor to="/ap-research">AP Research Projects</FooterLinkAnchor>
              </FooterLink>
              <FooterLink>
                <FooterLinkAnchor to="/repetitive-research">Repetitive Research</FooterLinkAnchor>
              </FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Resources</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <ExternalLink href="https://apstudents.collegeboard.org/courses/ap-seminar" target="_blank" rel="noopener noreferrer">
                  AP Seminar Course
                </ExternalLink>
              </FooterLink>
              <FooterLink>
                <ExternalLink href="https://apstudents.collegeboard.org/courses/ap-research" target="_blank" rel="noopener noreferrer">
                  AP Research Course
                </ExternalLink>
              </FooterLink>
              <FooterLink>
                <ExternalLink href="https://apcentral.collegeboard.org/courses/ap-capstone" target="_blank" rel="noopener noreferrer">
                  AP Capstone Program
                </ExternalLink>
              </FooterLink>
              <FooterLink>
                <ExternalLink href="https://www.collegeboard.org/" target="_blank" rel="noopener noreferrer">
                  College Board
                </ExternalLink>
              </FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Support</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <FooterLinkAnchor to="/about">About Us</FooterLinkAnchor>
              </FooterLink>
              <FooterLink>
                <FooterLinkAnchor to="/contact">Contact</FooterLinkAnchor>
              </FooterLink>
              <FooterLink>
                <FooterLinkAnchor to="/help">Help Center</FooterLinkAnchor>
              </FooterLink>
              <FooterLink>
                <FooterLinkAnchor to="/submit">Submit Your Work</FooterLinkAnchor>
              </FooterLink>
            </FooterLinks>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © {currentYear} {APP_CONFIG.name}. All rights reserved.
          </Copyright>
          <FooterBottomLinks>
            <FooterBottomLink to="/privacy">Privacy Policy</FooterBottomLink>
            <FooterBottomLink to="/terms">Terms of Service</FooterBottomLink>
            <FooterBottomLink to="/accessibility">Accessibility</FooterBottomLink>
          </FooterBottomLinks>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer; 