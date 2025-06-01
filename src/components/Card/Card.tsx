import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

export interface CardProps {
  title: string;
  excerpt: string;
  imageUrl?: string;
  link: string;
  category?: string;
  author?: string;
  date?: string;
  size?: 'small' | 'medium' | 'large' | 'featured';
  featured?: boolean;
  fillHeight?: boolean;
}

const CardWrapper = styled(Link)<{ $size: CardProps['size']; $featured: boolean; $fillHeight: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.background.light};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.base};
  transition: all ${theme.transitions.base};
  text-decoration: none;
  color: inherit;
  height: ${props => props.$fillHeight ? '100%' : 'fit-content'};

  &:hover {
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-2px);
    text-decoration: none;
    color: inherit;
  }

  ${props => props.$size === 'featured' && `
    grid-column: span 2;
    
    @media (max-width: ${theme.breakpoints.lg}) {
      grid-column: span 1;
    }
  `}

  ${props => props.$size === 'large' && `
    @media (min-width: ${theme.breakpoints.md}) {
      grid-column: span 2;
    }
  `}
`;

const ImageContainer = styled.div<{ $size: CardProps['size'] }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${theme.colors.neutral[100]};

  ${props => {
    switch (props.$size) {
      case 'featured':
        return `height: 400px;
                @media (max-width: ${theme.breakpoints.lg}) {
                  height: 300px;
                }
                @media (max-width: ${theme.breakpoints.md}) {
                  height: 250px;
                }`;
      case 'large':
        return `height: 350px;
                @media (max-width: ${theme.breakpoints.lg}) {
                  height: 280px;
                }`;
      case 'medium':
        return `height: 200px;`;
      case 'small':
      default:
        return `height: 160px;`;
    }
  }}
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${theme.transitions.base};

  ${CardWrapper}:hover & {
    transform: scale(1.05);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${theme.colors.neutral[100]} 0%, ${theme.colors.neutral[200]} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSizes.sm};
`;

const ContentContainer = styled.div<{ $size: CardProps['size'] }>`
  padding: ${theme.spacing[4]};
  flex: 1;
  display: flex;
  flex-direction: column;

  ${props => props.$size === 'featured' && `
    padding: ${theme.spacing[6]};
  `}

  ${props => props.$size === 'small' && `
    padding: ${theme.spacing[3]};
  `}
`;

const Category = styled.span`
  display: inline-block;
  font-size: ${theme.typography.fontSizes.xs};
  font-weight: ${theme.typography.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${theme.colors.primary[600]};
  margin-bottom: ${theme.spacing[2]};
`;

const CardTitle = styled.h3<{ $size: CardProps['size'] }>`
  font-family: ${theme.typography.fonts.heading};
  font-weight: ${theme.typography.fontWeights.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[3]};
  line-height: ${theme.typography.lineHeights.snug};

  ${props => {
    switch (props.$size) {
      case 'featured':
        return `
          font-size: ${theme.typography.fontSizes['3xl']};
          @media (max-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.typography.fontSizes['2xl']};
          }
        `;
      case 'large':
        return `font-size: ${theme.typography.fontSizes['2xl']};`;
      case 'medium':
        return `font-size: ${theme.typography.fontSizes.xl};`;
      case 'small':
      default:
        return `font-size: ${theme.typography.fontSizes.lg};`;
    }
  }}
`;

const CardExcerpt = styled.p<{ $size: CardProps['size'] }>`
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeights.relaxed};
  margin-bottom: ${theme.spacing[3]};

  ${props => {
    switch (props.$size) {
      case 'featured':
        return `font-size: ${theme.typography.fontSizes.base};`;
      case 'large':
        return `font-size: ${theme.typography.fontSizes.base};`;
      case 'medium':
        return `font-size: ${theme.typography.fontSizes.sm};`;
      case 'small':
      default:
        return `font-size: ${theme.typography.fontSizes.sm};`;
    }
  }}

  // Limit excerpt to 3 lines for visual consistency
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  font-size: ${theme.typography.fontSizes.xs};
  color: ${theme.colors.text.muted};
  margin-top: auto;
`;

const MetaItem = styled.span`
  &:not(:last-child)::after {
    content: '•';
    margin-left: ${theme.spacing[2]};
    color: ${theme.colors.neutral[400]};
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: ${theme.spacing[3]};
  left: ${theme.spacing[3]};
  background: ${theme.colors.primary[600]};
  color: ${theme.colors.text.inverse};
  font-size: ${theme.typography.fontSizes.xs};
  font-weight: ${theme.typography.fontWeights.medium};
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  border-radius: ${theme.borderRadius.base};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Card: React.FC<CardProps> = ({
  title,
  excerpt,
  imageUrl,
  link,
  category,
  author,
  date,
  size = 'medium',
  featured = false,
  fillHeight = false,
}) => {
  return (
    <CardWrapper to={link} $size={size} $featured={featured} $fillHeight={fillHeight}>
      <ImageContainer $size={size}>
        {imageUrl ? (
          <CardImage src={imageUrl} alt={title} />
        ) : (
          <ImagePlaceholder>
            No image available
          </ImagePlaceholder>
        )}
        {featured && <FeaturedBadge>Featured</FeaturedBadge>}
      </ImageContainer>

      <ContentContainer $size={size}>
        {category && <Category>{category}</Category>}
        
        <CardTitle $size={size}>{title}</CardTitle>
        
        <CardExcerpt $size={size}>{excerpt}</CardExcerpt>
        
        {(author || date) && (
          <CardMeta>
            {author && <MetaItem>{author}</MetaItem>}
            {date && <MetaItem>{date}</MetaItem>}
          </CardMeta>
        )}
      </ContentContainer>
    </CardWrapper>
  );
};

export default Card; 