import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/language-context";
import { NavigationService, ScrollService } from "@/services";
import { useActiveSection, useSmoothScroll } from "@/hooks";
import { NavigationContainerProps } from "./interfaces";

export function useNavigationContainer(): NavigationContainerProps {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigationService = useMemo(() => new NavigationService(), []);
  const scrollService = useMemo(() => new ScrollService(), []);

  const navItems = navigationService.getNavItems(t);
  const sectionIds = navigationService.getSectionIds();

  const activeSection = useActiveSection(sectionIds, scrollService);
  const { scrollToSection: scrollTo } = useSmoothScroll(scrollService);

  const onScrollToSection = (sectionId: string) => {
    scrollTo(sectionId);
    setIsMenuOpen(false);
  };

  const onToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const onToggleLanguage = () => setLanguage(language === "fr" ? "en" : "fr");

  return {
    isMenuOpen,
    activeSection,
    language,
    navItems,
    onToggleMenu,
    onScrollToSection,
    onToggleLanguage,
  };
}