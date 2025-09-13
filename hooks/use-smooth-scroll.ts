import { useCallback } from 'react';
import { ScrollService } from '@/services';

export function useSmoothScroll(scrollService: ScrollService) {
  const scrollToSection = useCallback((sectionId: string) => {
    scrollService.scrollToSection(sectionId);
  }, [scrollService]);

  return { scrollToSection };
}