"use client"

import { useHeroContainer } from "@/components/containers";
import { HeroView } from "@/components/presentational";

export function HeroSection() {
  const containerProps = useHeroContainer();
  return <HeroView {...containerProps} />;
}
