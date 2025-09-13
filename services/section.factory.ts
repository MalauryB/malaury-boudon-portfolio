import { ISectionFactory, ISectionComponent } from './interfaces';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';

export class SectionFactory implements ISectionFactory {
  private readonly sectionConfig: ISectionComponent[] = [
    { id: 'home', component: HeroSection, order: 1 },
    { id: 'about', component: AboutSection, order: 2 },
    { id: 'experience', component: ExperienceSection, order: 3 },
    { id: 'projects', component: ProjectsSection, order: 4 },
    { id: 'contact', component: ContactSection, order: 5 },
  ];

  createSections(): ISectionComponent[] {
    return [...this.sectionConfig].sort((a, b) => a.order - b.order);
  }

  getSectionById(id: string): ISectionComponent | undefined {
    return this.sectionConfig.find(section => section.id === id);
  }

  addSection(section: ISectionComponent): void {
    const existingIndex = this.sectionConfig.findIndex(s => s.id === section.id);
    if (existingIndex !== -1) {
      this.sectionConfig[existingIndex] = section;
    } else {
      this.sectionConfig.push(section);
    }
  }

  removeSection(id: string): boolean {
    const index = this.sectionConfig.findIndex(section => section.id === id);
    if (index !== -1) {
      this.sectionConfig.splice(index, 1);
      return true;
    }
    return false;
  }
}