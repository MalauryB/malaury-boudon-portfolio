export interface IScrollService {
  scrollToSection(sectionId: string): void;
  getCurrentActiveSection(sections: string[]): string;
}

export interface IFileDownloadService {
  downloadFile(filePath: string, fileName: string): void;
}

export interface INavigationService {
  getNavItems(t: (key: string) => string): Array<{
    id: string;
    label: string;
    number: string;
  }>;
}

export interface ISectionComponent {
  id: string;
  component: React.ComponentType;
  order: number;
}

export interface ISectionFactory {
  createSections(): ISectionComponent[];
  getSectionById(id: string): ISectionComponent | undefined;
}