import { IScrollService } from './interfaces';

export class ScrollService implements IScrollService {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  getCurrentActiveSection(sections: string[]): string {
    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        return sections[i];
      }
    }

    return sections[0] || '';
  }
}