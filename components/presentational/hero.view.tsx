import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import Image from "next/image";
import { HeroContainerProps } from "@/components/containers/interfaces";

export const HeroView = memo(function HeroView({
  onScrollToProjects,
  onDownloadCV,
  onGitHubClick,
  onLinkedInClick,
  translations
}: HeroContainerProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Wireframe Background */}
      <div className="absolute inset-0 wireframe-bg animate-pulse-glow" />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rotate-45 animate-float" />
      <div
        className="absolute bottom-32 left-16 w-24 h-24 border border-primary/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Photo */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <Image
                  src="/malaury-profile.jpg"
                  alt="Malaury Boudon - Développeuse Full Stack"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              {/* Decorative elements around photo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-primary/60 rotate-45" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-foreground">{translations.creative}</span>
                <br />
                <span className="text-muted-foreground">{translations.developer}</span>
              </h1>

              <div className="lg:text-left">
                <p className="text-lg text-muted-foreground">{translations.name}</p>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">// {translations.tagline}.</p>
              </div>
            </div>

            <div className="mt-12 space-y-8">
              <p className="text-lg text-muted-foreground max-w-2xl lg:mx-0 mx-auto text-balance">
                {translations.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
                <Button
                  onClick={onScrollToProjects}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider"
                >
                  {translations.cta} ↓
                </Button>

                <Button
                  onClick={onDownloadCV}
                  variant="outline"
                  className="border-primary/20 hover:border-primary hover:bg-primary/10 px-8 py-3 text-sm font-medium uppercase tracking-wider bg-transparent"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {translations.downloadCV}
                </Button>

                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" onClick={onGitHubClick}>
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" onClick={onLinkedInClick}>
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
});
