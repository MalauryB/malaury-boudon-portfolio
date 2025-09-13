export interface HeroContainerProps {
  onScrollToProjects: () => void;
  onDownloadCV: () => void;
  onGitHubClick: () => void;
  onLinkedInClick: () => void;
  onEmailClick: () => void;
  translations: {
    creative: string;
    developer: string;
    name: string;
    tagline: string;
    description: string;
    cta: string;
    downloadCV: string;
  };
}

export interface NavigationContainerProps {
  isMenuOpen: boolean;
  activeSection: string;
  language: string;
  navItems: Array<{
    id: string;
    label: string;
    number: string;
  }>;
  onToggleMenu: () => void;
  onScrollToSection: (sectionId: string) => void;
  onToggleLanguage: () => void;
}

export interface AboutContainerProps {
  translations: {
    title: string;
    education: string;
    engineer: string;
    analyst: string;
    languages: string;
    french: string;
    english: string;
    interests: string;
    philosophy: string;
    ai: string;
    skills: string;
  };
}