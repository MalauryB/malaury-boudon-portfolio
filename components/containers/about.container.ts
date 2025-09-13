import { useLanguage } from "@/contexts/language-context";
import { AboutContainerProps } from "./interfaces";

export function useAboutContainer(): AboutContainerProps {
  const { t } = useLanguage();

  return {
    translations: {
      title: t("about.title"),
      education: t("about.education"),
      engineer: t("about.engineer"),
      analyst: t("about.analyst"),
      languages: t("about.languages"),
      french: t("about.french"),
      english: t("about.english"),
      interests: t("about.interests"),
      philosophy: t("about.philosophy"),
      ai: t("about.ai"),
      skills: t("about.skills"),
    }
  };
}