import { INavigationService } from './interfaces';

export class NavigationService implements INavigationService {
  private readonly navigationConfig = [
    { id: "home", key: "nav.home", number: "01" },
    { id: "about", key: "nav.about", number: "02" },
    { id: "experience", key: "nav.experience", number: "03" },
    { id: "projects", key: "nav.projects", number: "04" },
    { id: "contact", key: "nav.contact", number: "05" },
  ];

  getNavItems(t: (key: string) => string): Array<{
    id: string;
    label: string;
    number: string;
  }> {
    return this.navigationConfig.map(item => ({
      id: item.id,
      label: t(item.key),
      number: item.number,
    }));
  }

  getSectionIds(): string[] {
    return this.navigationConfig.map(item => item.id);
  }
}