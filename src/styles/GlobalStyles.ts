import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  // Import Google Fonts for Nature journal-inspired typography
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&family=Crimson+Text:wght@400;600;700&family=Kalam:wght@300;400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    width: 100%;
  }

  body {
    font-family: ${theme.typography.fonts.body};
    font-size: ${theme.typography.fontSizes.base};
    font-weight: ${theme.typography.fontWeights.normal};
    line-height: ${theme.typography.lineHeights.normal};
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background.light};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  .App {
    width: 100%;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fonts.heading};
    font-weight: ${theme.typography.fontWeights.semibold};
    line-height: ${theme.typography.lineHeights.tight};
    margin: 0;
  }

  h1 {
    font-size: ${theme.typography.fontSizes['4xl']};
    font-weight: ${theme.typography.fontWeights.bold};
  }

  h2 {
    font-size: ${theme.typography.fontSizes['3xl']};
  }

  h3 {
    font-size: ${theme.typography.fontSizes['2xl']};
  }

  h4 {
    font-size: ${theme.typography.fontSizes.xl};
  }

  h5 {
    font-size: ${theme.typography.fontSizes.lg};
  }

  h6 {
    font-size: ${theme.typography.fontSizes.base};
  }

  p {
    margin: 0;
    line-height: ${theme.typography.lineHeights.relaxed};
  }

  a {
    color: ${theme.colors.primary[600]};
    text-decoration: none;
    transition: color ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.primary[700]};
      text-decoration: underline;
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
    transition: all ${theme.transitions.fast};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  // Responsive container utility for controlled content width
  .container {
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
      max-width: 1400px;
      margin: 0 auto;
    }
  }

  // Full-width container for sections that need to span the entire screen
  .container-full {
    width: 100%;
    padding: 0;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  // Focus styles for accessibility
  *:focus {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: 2px;
  }

  button:focus,
  a:focus {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: 2px;
  }

  // Ensure smooth scrolling and prevent horizontal overflow
  html, body {
    overflow-x: hidden;
  }

  // Responsive text scaling
  @media (min-width: 1600px) {
    html {
      font-size: 18px;
    }
  }

  @media (min-width: 1920px) {
    html {
      font-size: 20px;
    }
  }
`;

export default GlobalStyles; 