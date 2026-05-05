import React from 'react';
import {
  Container,
  Main,
  PageTitle,
  AboutSection,
  AboutTitle,
  AboutText,
  FeatureList,
  FeatureItem,
  FeatureIcon,
  FeatureContent,
  FeatureName,
  FeatureDescription,
} from '../../styles';

interface Feature {
  icon: string;
  name: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🖼️',
    name: 'Image Gallery',
    description: 'Browse through a beautiful responsive grid of pet images with smooth hover animations.',
  },
  {
    icon: '✅',
    name: 'Multi-Select',
    description: 'Select multiple images at once with the checkbox feature. Your selections persist across page navigation.',
  },
  {
    icon: '📥',
    name: 'Bulk Download',
    description: 'Download multiple selected images at once with estimated file size preview.',
  },
  {
    icon: '🔍',
    name: 'Search & Filter',
    description: 'Quickly find pets by searching through titles and descriptions.',
  },
  {
    icon: '↕️',
    name: 'Sorting Options',
    description: 'Sort pets by name (A-Z or Z-A) or by date (newest or oldest first).',
  },
  {
    icon: '📄',
    name: 'Pagination',
    description: 'Navigate through pages of pets with an intuitive pagination system.',
  },
  {
    icon: '📱',
    name: 'Responsive Design',
    description: '1 column on mobile, 2 columns on tablet, and 4 columns on desktop for optimal viewing.',
  },
  {
    icon: '🔗',
    name: 'Detail View',
    description: 'Click on any pet to see detailed information including dimensions and full description.',
  },
];

const techStack: { name: string; description: string }[] = [
  { name: 'React 19', description: 'Latest React with hooks and functional components' },
  { name: 'TypeScript', description: 'Full type safety throughout the application' },
  { name: 'React Router v6', description: 'Client-side routing with dynamic routes' },
  { name: 'styled-components', description: 'CSS-in-JS for component-scoped styling' },
  { name: 'Redux Toolkit', description: 'Global state management with slices' },
  { name: 'Axios', description: 'HTTP client with interceptors for API calls' },
];

export function About() {
  return (
    <Main>
      <Container>
        <PageTitle>About Pet Gallery</PageTitle>

        <AboutSection>
          <AboutText>
            Welcome to Pet Gallery, a modern web application built to showcase
            adorable pet images with a rich set of features for browsing,
            searching, and downloading your favorite pet photos.
          </AboutText>
        </AboutSection>

        <AboutSection>
          <AboutTitle>Features</AboutTitle>
          <FeatureList>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureContent>
                  <FeatureName>{feature.name}</FeatureName>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureContent>
              </FeatureItem>
            ))}
          </FeatureList>
        </AboutSection>

        <AboutSection>
          <AboutTitle>Tech Stack</AboutTitle>
          <FeatureList>
            {techStack.map((tech, index) => (
              <FeatureItem key={index}>
                <FeatureIcon>⚡</FeatureIcon>
                <FeatureContent>
                  <FeatureName>{tech.name}</FeatureName>
                  <FeatureDescription>{tech.description}</FeatureDescription>
                </FeatureContent>
              </FeatureItem>
            ))}
          </FeatureList>
        </AboutSection>

        <AboutSection>
          <AboutTitle>How to Use</AboutTitle>
          <AboutText>
            <strong>Browse:</strong> Scroll through the gallery to explore all available pets.
            Use the pagination controls at the bottom to navigate between pages.
          </AboutText>
          <AboutText>
            <strong>Search:</strong> Use the search bar to filter pets by title or description.
            Results update in real-time as you type.
          </AboutText>
          <AboutText>
            <strong>Sort:</strong> Use the dropdown menu to sort pets by name (alphabetically)
            or by date (newest or oldest first).
          </AboutText>
          <AboutText>
            <strong>Select:</strong> Click the checkbox on any pet card to select it.
            Use "Select All" to select all visible pets or "Clear Selection" to deselect all.
          </AboutText>
          <AboutText>
            <strong>Download:</strong> After selecting pets, use the floating action bar
            at the bottom to download all selected images. The estimated total file size
            is displayed to help you manage your downloads.
          </AboutText>
          <AboutText>
            <strong>View Details:</strong> Click on any pet card (not the checkbox) to
            navigate to a detailed view with full-size image and complete information.
          </AboutText>
        </AboutSection>

        <AboutSection>
          <AboutText style={{ textAlign: 'center', color: '#64748b' }}>
            Built with ❤️ using React, TypeScript, and styled-components
          </AboutText>
        </AboutSection>
      </Container>
    </Main>
  );
}
