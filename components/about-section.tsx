"use client"

import { useAboutContainer } from "@/components/containers";
import { AboutView } from "@/components/presentational";

export function AboutSection() {
  const containerProps = useAboutContainer();
  return <AboutView {...containerProps} />;
}