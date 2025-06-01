import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX, FiUpload } from 'react-icons/fi';
import { theme } from '../../styles/theme';
import { NAVIGATION_ITEMS, APP_CONFIG } from '../../utils/constants';

const HeaderWrapper = styled.header`
  background: ${theme.colors.background.light};
  border-bottom: 1px solid ${theme.colors.neutral[200]};
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const TopNav = styled.div`
  border-bottom: 1px solid ${theme.colors.neutral[100]};
  padding: ${theme.spacing[2]} 0;
  width: 100%;
`;

const TopNavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 ${theme.spacing[4]};

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 0 ${theme.spacing[6]};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 ${theme.spacing[8]};
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    padding: 0 ${theme.spacing[12]};
  }
`;

const Logo = styled(Link)`
  font-family: ${theme.typography.fonts.heading};
  font-size: ${theme.typography.fontSizes['2xl']};
  font-weight: ${theme.typography.fontWeights.bold};
  color: ${theme.colors.text.primary};
  text-decoration: none;
  letter-spacing: -0.02em;

  &:hover {
    color: ${theme.colors.primary[600]};
    text-decoration: none;
  }
`;

const TopNavRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};

  @media (max-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing[3]};
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  font-size: ${theme.typography.fontSizes.sm};
  color: ${theme.colors.text.secondary};
  border: 1px solid ${theme.colors.neutral[300]};
  border-radius: ${theme.borderRadius.md};
  background: ${theme.colors.background.light};
  transition: all ${theme.transitions.fast};

  &:hover {
    border-color: ${theme.colors.primary[400]};
    color: ${theme.colors.text.primary};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    span {
      display: none;
    }
    padding: ${theme.spacing[2]};
  }
`;

const SubmitButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  font-size: ${theme.typography.fontSizes.sm};
  font-weight: ${theme.typography.fontWeights.medium};
  color: ${theme.colors.text.inverse};
  background: ${theme.colors.primary[600]};
  border: 1px solid ${theme.colors.primary[600]};
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.primary[700]};
    border-color: ${theme.colors.primary[700]};
    text-decoration: none;
    color: ${theme.colors.text.inverse};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    span {
      display: none;
    }
    padding: ${theme.spacing[2]};
  }
`;

const MainNav = styled.nav`
  padding: ${theme.spacing[3]} 0;
  width: 100%;
`;

const MainNavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 ${theme.spacing[4]};

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 0 ${theme.spacing[6]};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 ${theme.spacing[8]};
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    padding: 0 ${theme.spacing[12]};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[8]};
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${theme.breakpoints.lg}) {
    gap: ${theme.spacing[6]};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: ${theme.typography.fontSizes.base};
  font-weight: ${theme.typography.fontWeights.medium};
  color: ${theme.colors.text.primary};
  text-decoration: none;
  padding: ${theme.spacing[2]} 0;
  border-bottom: 2px solid transparent;
  transition: all ${theme.transitions.fast};

  &:hover {
    color: ${theme.colors.primary[600]};
    border-bottom-color: ${theme.colors.primary[600]};
    text-decoration: none;
  }

  &.active {
    color: ${theme.colors.primary[600]};
    border-bottom-color: ${theme.colors.primary[600]};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  padding: ${theme.spacing[2]};
  color: ${theme.colors.text.primary};

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${theme.colors.background.light};
  border-bottom: 1px solid ${theme.colors.neutral[200]};
  box-shadow: ${theme.shadows.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const MobileNavLinks = styled.ul`
  padding: ${theme.spacing[4]};
  margin: 0;
  list-style: none;
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: ${theme.spacing[3]} 0;
  font-size: ${theme.typography.fontSizes.base};
  font-weight: ${theme.typography.fontWeights.medium};
  color: ${theme.colors.text.primary};
  text-decoration: none;
  border-bottom: 1px solid ${theme.colors.neutral[100]};

  &:hover {
    color: ${theme.colors.primary[600]};
    text-decoration: none;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <HeaderWrapper>
      <TopNav>
        <TopNavContent>
          <Logo to="/">{APP_CONFIG.name}</Logo>
          <TopNavRight>
            <SearchButton>
              <FiSearch size={16} />
              <span>Search</span>
            </SearchButton>
            <SubmitButton to="/submit">
              <FiUpload size={16} />
              <span>Submit Work</span>
            </SubmitButton>
          </TopNavRight>
        </TopNavContent>
      </TopNav>

      <MainNav>
        <MainNavContent>
          <NavLinks>
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path}>{item.label}</NavLink>
              </li>
            ))}
          </NavLinks>

          <MobileMenuButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </MobileMenuButton>
        </MainNavContent>

        <MobileMenu isOpen={mobileMenuOpen}>
          <MobileNavLinks>
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.path}>
                <MobileNavLink 
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </MobileNavLink>
              </li>
            ))}
            <li>
              <MobileNavLink 
                to="/submit"
                onClick={() => setMobileMenuOpen(false)}
              >
                Submit Work
              </MobileNavLink>
            </li>
          </MobileNavLinks>
        </MobileMenu>
      </MainNav>
    </HeaderWrapper>
  );
};

export default Navigation; 