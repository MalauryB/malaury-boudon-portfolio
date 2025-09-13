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
  const onDownloadCV = () => downloadFile("/cv-malaury-boudon.pdf", "CV-Malaury-Boudon.pdf");

  return {
    onScrollToProjects,
    onDownloadCV,
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