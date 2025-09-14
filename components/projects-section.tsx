"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "CTS - Projet Web et Mobile",
    description:
      "Développement complet d'une solution web et mobile avec gestion de projet Agile/Scrum. Programmation en Java et Angular pour le web, développement natif Android et solutions cross-platform avec Flutter.",
    image: "/tranmway_strasbourg.jpg",
    technologies: ["Java", "Angular", "Android", "Kotlin", "Flutter", "Jira"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Sentinel MBO - Projet Web Complet",
    description:
      "Projet full-stack avec gestion Agile/Scrum, rédaction de spécifications fonctionnelles et techniques. Développement avec React.js, Java et PostgreSQL, mise en production sous Linux.",
    image: "/sentinel.jpg",
    technologies: ["Java", "React.js", "PostgreSQL", "Linux", "Figma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Roiret - Interface Utilisateur",
    description:
      "Intégration front-end avec développement de l'interface utilisateur en React.js à partir de maquettes Figma. Optimisation des performances et adaptation responsive multi-appareils.",
    image: "/bordeaux.jpg",
    technologies: ["React.js", "HTML", "SCSS", "JavaScript", "Figma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Microservices Assurance - ADIS",
    description:
      "Développement et maintenance de microservices Java dans le secteur de l'assurance avec prise en compte des contraintes métier et réglementaires. Architecture API REST et intégration CI/CD.",
    image: "/assurance.jpg",
    technologies: ["Java", "Spring Boot", "MongoDB", "API REST", "CI/CD"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Agrégateur Boulanger",
    description:
      "Développement d'API REST dans le secteur de la grande distribution avec encadrement technique de 3 développeurs. Comparaison de systèmes d'information et migration réussie dans un délai réduit.",
    image: "/api-rest-grande-distribution.jpg",
    technologies: ["Java", "Spring Boot", "API REST", "Encadrement", "Migration"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Wewioo - Détection d'Incendie",
    description:
      "Projet React développé pour une startup innovante spécialisée dans la détection précoce d'incendies. Interface utilisateur moderne pour la surveillance et l'alerte en temps réel, contribuant à améliorer la sécurité et la prévention des risques d'incendie.",
    image: "/pompier.jpg",
    technologies: ["React", "JavaScript", "CSS", "Startup", "Sécurité"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Site Web Thérapeute - Strasbourg",
    description:
      "Projet personnel - Développement complet d'un site web pour un thérapeute à Strasbourg. Site vitrine moderne avec présentation des services, prise de rendez-vous et informations pratiques. Réalisé de manière indépendante.",
    image: "/famile.PNG",
    technologies: ["React", "JavaScript", "CSS", "Projet Personnel", "Site Vitrine"],
    liveUrl: "https://laure-conseil.fr",
    githubUrl: "#",
    featured: false,
    personal: true,
  },
]

export function ProjectsSection() {
  const [selectedTech, setSelectedTech] = useState<string>("Tous")

  // Extraire toutes les technologies uniques
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort()

  // Filtrer les projets selon la technologie sélectionnée
  const filteredProjects = selectedTech === "Tous"
    ? projects
    : projects.filter(project => project.technologies.includes(selectedTech))

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">PROJETS</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes projets professionnels, alliant expertise technique et gestion de projet.
          </p>
        </div>

        {/* Filtres par technologies */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Filtrer par technologie</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTech("Tous")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTech === "Tous"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Tous ({projects.length})
            </button>
            {allTechnologies.map((tech) => {
              const count = projects.filter(project => project.technologies.includes(tech)).length
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
                            Featured
                          </Badge>
                        )}
                        {project.personal && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Projet Personnel
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
