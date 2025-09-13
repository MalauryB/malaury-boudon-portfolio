import { useMemo } from "react";
import { useLanguage } from "@/contexts/language-context";
import { ScrollService, FileDownloadService } from "@/services";
import { useSmoothScroll, useFileDownload } from "@/hooks";
import { HeroContainerProps } from "./interfaces";

export function useHeroContainer(): HeroContainerProps {
  const { t } = useLanguage();

  const scrollService = useMemo(() => new ScrollService(), []);
  const fileDownloadService = useMemo(() => new FileDownloadService(), []);

  const { scrollToSection } = useSmoothScroll(scrollService);
  const { downloadFile } = useFileDownload(fileDownloadService);

  const onScrollToProjects = () => scrollToSection("projects");
  const onDownloadCV = () => downloadFile("/CV_malaury_boudon.pdf", "CV_malaury_boudon.pdf");
  const onGitHubClick = () => window.open("https://github.com/MalauryB", "_blank");
  const onLinkedInClick = () => window.open("https://www.linkedin.com/in/malaury-boudon-a9538a12b/", "_blank");
  const onEmailClick = () => window.open("mailto:boudonmalaury@gmail.com?subject=Contact depuis malaury.dev&body=Bonjour Malaury,%0D%0A%0D%0AJe vous contacte depuis votre portfolio malaury.dev.%0D%0A%0D%0A", "_blank");

  return {
    onScrollToProjects,
    onDownloadCV,
    onGitHubClick,
    onLinkedInClick,
    onEmailClick,
    translations: {
      creative: t("hero.creative"),
      developer: t("hero.developer"),
      name: t("hero.name"),
      tagline: t("hero.tagline"),
      description: t("hero.description"),
      cta: t("hero.cta"),
      downloadCV: t("hero.downloadCV"),
    }
  };
}