import { useState, useEffect } from 'react';
import { ScrollService } from '@/services';

export function useActiveSection(sectionIds: string[], scrollService: ScrollService) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = scrollService.getCurrentActiveSection(sectionIds);
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, scrollService]);

  return activeSection;
}