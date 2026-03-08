"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAssetPath } from "@/lib/assets"
import { useLanguage } from "@/contexts/language-context"
const projectsData = [
  {
    id: 1,
    image: getAssetPath("/tranmway_strasbourg.jpg"),
    titleKey: "projects.cts.title",
    descKey: "projects.cts.desc",
    technologies: ["Java", "Angular", "Android", "Kotlin", "Flutter", "Jira"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    image: getAssetPath("/sentinel.jpg"),
    titleKey: "projects.sentinel.title",
    descKey: "projects.sentinel.desc",
    technologies: ["Java", "React.js", "PostgreSQL", "Linux", "Figma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    image: getAssetPath("/bordeaux.jpg"),
    titleKey: "projects.roiret.title",
    descKey: "projects.roiret.desc",
    technologies: ["React.js", "HTML", "SCSS", "JavaScript", "Figma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    image: getAssetPath("/assurance.jpg"),
    titleKey: "projects.adis.title",
    descKey: "projects.adis.desc",
    technologies: ["Java", "Spring Boot", "MongoDB", "API REST", "CI/CD"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    titleKey: "projects.boulanger.title",
    descKey: "projects.boulanger.desc",
    technologies: ["Java", "Spring Boot", "API REST", "Encadrement", "Migration"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    titleKey: "projects.wewioo.title",
    descKey: "projects.wewioo.desc",
    image: "/pompier.jpg",
    technologies: ["React", "JavaScript", "CSS", "Startup", "Sécurité"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 7,
    titleKey: "projects.therapist.title",
    descKey: "projects.therapist.desc",
    image: "/famile.PNG",
    technologies: ["React", "JavaScript", "CSS", "Projet Personnel", "Site Vitrine"],
    liveUrl: "https://laure-conseil.fr",
    githubUrl: "#",
    featured: false,
    personal: true,
  },
  {
    id: 8,
    titleKey: "projects.nimli.title",
    descKey: "projects.nimli.desc",
    image: getAssetPath("/placeholder.svg"),
    technologies: ["Next.js", "React", "Node.js", "Supabase", "Tailwind CSS"],
    liveUrl: "https://nimli.fr",
    githubUrl: "#",
    featured: true,
    personal: true,
  },
  {
    id: 9,
    titleKey: "projects.president.title",
    descKey: "projects.president.desc",
    image: getAssetPath("/placeholder.svg"),
    technologies: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    liveUrl: "https://quiserapresident.fr",
    githubUrl: "#",
    featured: false,
    personal: true,
  },
]

export function ProjectsSection() {
  const { t } = useLanguage()
  const [selectedTech, setSelectedTech] = useState<string>(t("projects.all"))

  // Créer les projets avec les traductions
  const projects = projectsData.map(project => ({
    ...project,
    title: t(project.titleKey),
    description: t(project.descKey)
  }))

  // Extraire toutes les technologies uniques
  const allTechnologies = Array.from(
    new Set(projectsData.flatMap(project => project.technologies))
  ).sort()

  // Filtrer les projets selon la technologie sélectionnée
  const filteredProjects = selectedTech === t("projects.all")
    ? projects
    : projects.filter(project => project.technologies.includes(selectedTech))

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">{t("projects.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Filtres par technologies */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">{t("projects.filterBy")}</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTech(t("projects.all"))}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTech === t("projects.all")
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {t("projects.all")} ({projects.length})
            </button>
            {allTechnologies.map((tech) => {
              const count = projectsData.filter(project => project.technologies.includes(tech)).length
              return (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedTech === tech
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tech} ({count})
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const CardWrapper = project.liveUrl && project.liveUrl !== "#" ? "a" : "div";
            const cardProps = project.liveUrl && project.liveUrl !== "#"
              ? { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <CardWrapper key={project.id} {...cardProps}>
                <Card
                  className={`group hover:scale-105 transition-all duration-300 bg-card border-border overflow-hidden ${
                    project.featured ? "md:col-span-2" : ""
                  } ${project.liveUrl && project.liveUrl !== "#" ? "cursor-pointer" : ""}`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.featured && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {t("projects.featured")}
                          </Badge>
                        )}
                        {project.personal && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {t("projects.personal")}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardWrapper>
            );
          })}
        </div>

      </div>
    </section>
  )
}