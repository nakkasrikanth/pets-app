import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

export const theme = {
  colors: {
    primary: '#6366f1',
    primaryLight: '#818cf8',
    primaryDark: '#4f46e5',
    primaryGradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    secondary: '#64748b',
    success: '#10b981',
    successLight: '#34d399',
    danger: '#ef4444',
    dangerLight: '#f87171',
    warning: '#f59e0b',
    background: '#f1f5f9',
    backgroundAlt: '#e2e8f0',
    surface: '#ffffff',
    surfaceHover: '#f8fafc',
    text: '#0f172a',
    textSecondary: '#475569',
    textMuted: '#94a3b8',
    border: '#e2e8f0',
    borderLight: '#f1f5f9',
    shadow: 'rgba(15, 23, 42, 0.08)',
    shadowDark: 'rgba(15, 23, 42, 0.16)',
    overlay: 'rgba(15, 23, 42, 0.5)',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
  },
  borderRadius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  breakpoints: {
    xs: '375px',
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  shadows: {
    sm: '0 1px 2px rgba(15, 23, 42, 0.05)',
    md: '0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
    lg: '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.05)',
    xl: '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)',
    glow: '0 0 20px rgba(99, 102, 241, 0.3)',
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
      'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
    min-height: 100vh;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color ${theme.transitions.fast};
    
    &:hover {
      color: ${theme.colors.primaryDark};
    }
  }

  ::selection {
    background: ${theme.colors.primaryLight};
    color: white;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.backgroundAlt};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.textMuted};
    border-radius: ${theme.borderRadius.full};
    
    &:hover {
      background: ${theme.colors.secondary};
    }
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.lg};
  }
  
  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 ${theme.spacing.xl};
  }
`;

export const Header = styled.header`
  background: ${theme.colors.surface};
  border-bottom: 1px solid ${theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.95);
`;

export const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing.md};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.md} ${theme.spacing.lg};
  }
  
  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: ${theme.spacing.lg} ${theme.spacing.xl};
  }
`;

export const Logo = styled.h1`
  font-size: 1.25rem;
  font-weight: 800;
  background: ${theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    -webkit-text-fill-color: inherit;
  }
  
  span {
    font-size: 1.5rem;
    
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 1.75rem;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${theme.spacing.sm};
  align-items: center;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing.lg};
  }
`;

export const NavLink = styled.a<{ $active?: boolean }>`
  color: ${props => props.$active ? theme.colors.primary : theme.colors.textSecondary};
  font-weight: ${props => props.$active ? 600 : 500};
  font-size: 0.875rem;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.fast};
  position: relative;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
  
  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.primary}08;
  }
  
  ${props => props.$active && css`
    background: ${theme.colors.primary}10;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 3px;
      background: ${theme.colors.primaryGradient};
      border-radius: ${theme.borderRadius.full};
    }
  `}
`;

export const Main = styled.main`
  padding: ${theme.spacing.lg} 0;
  min-height: calc(100vh - 80px);
  animation: ${fadeIn} 0.4s ease-out;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} 0;
  }
  
  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: ${theme.spacing.xxl} 0;
  }
`;

export const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.text};
  letter-spacing: -0.02em;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 2.25rem;
    margin-bottom: ${theme.spacing.md};
  }
  
  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 2.75rem;
  }
`;

export const PageSubtitle = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.lg};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.125rem;
    margin-bottom: ${theme.spacing.xl};
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: ${theme.spacing.md};
  grid-template-columns: repeat(2, 1fr);
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
  
  @media (min-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.lg};
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacing.xl};
  }
  
  @media (min-width: ${theme.breakpoints.wide}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.div<{ $selected?: boolean }>`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
  position: relative;
  box-shadow: ${theme.shadows.sm};
  border: 2px solid transparent;
  will-change: transform;
  contain: layout style paint;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }

  ${props => props.$selected && css`
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primary}30;
  `}
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    border-radius: ${theme.borderRadius.xl};
    
    &:hover {
      transform: translateY(-6px);
      box-shadow: ${theme.shadows.xl};
    }
  }
`;

export const CardImage = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
  background: ${theme.colors.backgroundAlt};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    aspect-ratio: 4/3;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    will-change: transform;
  }
  
  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

export const CardCheckbox = styled.div<{ $checked?: boolean }>`
  position: absolute;
  top: ${theme.spacing.sm};
  right: ${theme.spacing.sm};
  width: 28px;
  height: 28px;
  border-radius: ${theme.borderRadius.md};
  background: ${props => props.$checked 
    ? theme.colors.primaryGradient 
    : 'rgba(255, 255, 255, 0.95)'};
  border: 2px solid ${props => props.$checked 
    ? 'transparent' 
    : theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 700;
  transition: all ${theme.transitions.fast};
  z-index: 10;
  box-shadow: ${theme.shadows.md};
  backdrop-filter: blur(8px);
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${theme.shadows.lg};
  }
  
  ${props => props.$checked && css`
    animation: ${pulse} 0.3s ease-out;
  `}
`;

export const CardContent = styled.div`
  padding: ${theme.spacing.sm};
  
  @media (min-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.md};
  }
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.lg};
  }
`;

export const CardTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
  
  @media (min-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.125rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 0.75rem;
  color: ${theme.colors.textSecondary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
  
  @media (min-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
  }
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 0.875rem;
    -webkit-line-clamp: 2;
  }
`;

export const CardMeta = styled.span`
  font-size: 0.6875rem;
  color: ${theme.colors.textMuted};
  margin-top: ${theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 0.75rem;
    margin-top: ${theme.spacing.md};
  }
  
  &::before {
    content: '';
    width: 4px;
    height: 4px;
    background: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.full};
  }
`;

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: 0.8125rem;
  font-weight: 600;
  border-radius: ${theme.borderRadius.md};
  border: none;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  white-space: nowrap;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    font-size: 0.875rem;
    border-radius: ${theme.borderRadius.lg};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
  
  &:active:not(:disabled) {
    transform: scale(0.97);
  }
`;

export const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success' }>`
  ${buttonBase}
  
  ${props => {
    switch (props.$variant) {
      case 'secondary':
        return css`
          background: ${theme.colors.secondary};
          color: white;
          box-shadow: ${theme.shadows.sm};
          &:hover:not(:disabled) {
            background: #475569;
            box-shadow: ${theme.shadows.md};
            transform: translateY(-1px);
          }
        `;
      case 'outline':
        return css`
          background: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.border};
          &:hover:not(:disabled) {
            background: ${theme.colors.primary}08;
            border-color: ${theme.colors.primary};
            transform: translateY(-1px);
          }
        `;
      case 'danger':
        return css`
          background: linear-gradient(135deg, ${theme.colors.danger} 0%, ${theme.colors.dangerLight} 100%);
          color: white;
          box-shadow: ${theme.shadows.sm};
          &:hover:not(:disabled) {
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
            transform: translateY(-1px);
          }
        `;
      case 'success':
        return css`
          background: linear-gradient(135deg, ${theme.colors.success} 0%, ${theme.colors.successLight} 100%);
          color: white;
          box-shadow: ${theme.shadows.sm};
          &:hover:not(:disabled) {
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
            transform: translateY(-1px);
          }
        `;
      default:
        return css`
          background: ${theme.colors.primaryGradient};
          color: white;
          box-shadow: ${theme.shadows.sm};
          &:hover:not(:disabled) {
            box-shadow: ${theme.shadows.glow};
            transform: translateY(-1px);
          }
        `;
    }
  }}
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing.md};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: 0.875rem;
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  background: ${theme.colors.surface};
  transition: all ${theme.transitions.fast};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    font-size: 1rem;
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 4px ${theme.colors.primary}15;
  }
  
  &::placeholder {
    color: ${theme.colors.textMuted};
  }
`;

export const Select = styled.select`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  padding-right: ${theme.spacing.xl};
  font-size: 0.875rem;
  font-weight: 500;
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  background: ${theme.colors.surface};
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2364748b' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    padding-right: ${theme.spacing.xxl};
    font-size: 1rem;
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 4px ${theme.colors.primary}15;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  padding: ${theme.spacing.md};
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  border: 1px solid ${theme.colors.borderLight};

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.xl};
    margin-bottom: ${theme.spacing.xl};
  }
`;

export const ToolbarSection = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: auto;
    gap: ${theme.spacing.md};
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
  min-width: 100%;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    min-width: 280px;
    max-width: 400px;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: ${theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.textMuted};
  font-size: 1rem;
  pointer-events: none;
`;

export const SearchInput = styled(Input)`
  padding-left: 44px;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding-left: 48px;
  }
`;

export const SelectionBar = styled.div<{ $visible: boolean }>`
  position: fixed;
  bottom: ${theme.spacing.md};
  left: 50%;
  transform: translateX(-50%) translateY(${props => props.$visible ? '0' : 'calc(100% + 40px)'});
  background: ${theme.colors.text};
  color: white;
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.xl};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  box-shadow: ${theme.shadows.xl}, 0 0 40px rgba(0, 0, 0, 0.2);
  transition: transform ${theme.transitions.bounce};
  z-index: 1000;
  max-width: calc(100% - ${theme.spacing.lg});
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    bottom: ${theme.spacing.xl};
    padding: ${theme.spacing.md} ${theme.spacing.xl};
    gap: ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.full};
  }
`;

export const SelectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 80px;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    min-width: 100px;
  }
`;

export const SelectionCount = styled.span`
  font-weight: 700;
  font-size: 0.875rem;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const SelectionSize = styled.span`
  font-size: 0.6875rem;
  opacity: 0.7;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 0.75rem;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.xl};
  padding: ${theme.spacing.md};
  flex-wrap: wrap;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing.sm};
    margin-top: ${theme.spacing.xxl};
  }
`;

export const PaginationButton = styled.button<{ $active?: boolean }>`
  min-width: 36px;
  height: 36px;
  padding: 0 ${theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.$active ? 'transparent' : theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  background: ${props => props.$active ? theme.colors.primaryGradient : theme.colors.surface};
  color: ${props => props.$active ? 'white' : theme.colors.text};
  font-weight: ${props => props.$active ? 700 : 500};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  box-shadow: ${props => props.$active ? theme.shadows.glow : theme.shadows.sm};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    min-width: 44px;
    height: 44px;
    border-radius: ${theme.borderRadius.lg};
    font-size: 1rem;
  }
  
  &:hover:not(:disabled) {
    border-color: ${theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
    ${props => !props.$active && css`
      background: ${theme.colors.primary}08;
    `}
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xxl};
  color: ${theme.colors.textSecondary};
  min-height: 300px;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    min-height: 400px;
    padding: ${theme.spacing.xxxl};
  }
  
  p {
    margin-top: ${theme.spacing.md};
    font-size: 0.875rem;
    
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 1rem;
    }
  }
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${theme.colors.borderLight};
  border-top-color: ${theme.colors.primary};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 56px;
    height: 56px;
    border-width: 5px;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  color: ${theme.colors.textSecondary};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xxxl};
  }
  
  h2 {
    font-size: 1.25rem;
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacing.sm};
    
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 1.5rem;
    }
  }
  
  p {
    font-size: 0.875rem;
    max-width: 400px;
    margin: 0 auto;
    
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 1rem;
    }
  }
`;

export const EmptyStateIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${theme.spacing.md};
  opacity: 0.8;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 4rem;
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const ErrorState = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  color: ${theme.colors.danger};
  background: linear-gradient(135deg, ${theme.colors.danger}08 0%, ${theme.colors.danger}12 100%);
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid ${theme.colors.danger}20;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xxl};
  }
  
  h2 {
    font-size: 1.25rem;
    margin-bottom: ${theme.spacing.sm};
    
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 1.5rem;
    }
  }
  
  p {
    font-size: 0.875rem;
    opacity: 0.9;
    
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 1rem;
    }
  }
`;

export const DetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const DetailImage = styled.div`
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  margin-bottom: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.lg};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.xl};
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const DetailTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: ${theme.spacing.md};
  letter-spacing: -0.02em;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 2.25rem;
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const DetailDescription = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: ${theme.spacing.lg};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.125rem;
    margin-bottom: ${theme.spacing.xl};
  }
`;

export const DetailMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  background: linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.backgroundAlt} 100%);
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.lg};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing.xl};
    padding: ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.xl};
    margin-bottom: ${theme.spacing.xl};
  }
`;

export const DetailMetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

export const DetailMetaLabel = styled.span`
  font-size: 0.6875rem;
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 0.75rem;
  }
`;

export const DetailMetaValue = styled.span`
  font-size: 0.9375rem;
  font-weight: 700;
  color: ${theme.colors.text};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.primary};
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: ${theme.spacing.lg};
  cursor: pointer;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  margin-left: -${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.fast};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
    margin-bottom: ${theme.spacing.xl};
  }
  
  &:hover {
    background: ${theme.colors.primary}08;
    text-decoration: none;
  }
`;

export const AboutSection = styled.section`
  margin-bottom: ${theme.spacing.xl};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: ${theme.spacing.xxl};
  }
`;

export const AboutTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text};
  letter-spacing: -0.01em;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.5rem;
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const AboutText = styled.p`
  font-size: 0.9375rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: ${theme.spacing.md};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: ${theme.spacing.md};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: 0;
  }
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  transition: all ${theme.transitions.fast};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.lg};
    background: transparent;
    box-shadow: none;
    border-radius: 0;
    border-bottom: 1px solid ${theme.colors.border};
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      background: ${theme.colors.surfaceHover};
    }
  }
`;

export const FeatureIcon = styled.span`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primaryGradient};
  color: white;
  border-radius: ${theme.borderRadius.lg};
  font-size: 1.25rem;
  flex-shrink: 0;
  box-shadow: ${theme.shadows.md};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 48px;
    height: 48px;
    font-size: 1.5rem;
  }
`;

export const FeatureContent = styled.div`
  flex: 1;
`;

export const FeatureName = styled.h3`
  font-size: 0.9375rem;
  font-weight: 700;
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.text};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const FeatureDescription = styled.p`
  font-size: 0.8125rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.6;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 0.875rem;
  }
`;
