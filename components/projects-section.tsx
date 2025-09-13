"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "CTS - Projet Web et Mobile",
    description:
      "Développement complet d'une solution web et mobile avec gestion de projet Agile/Scrum. Programmation en Java et Angular pour le web, développement natif Android et solutions cross-platform avec Flutter.",
    image: "/modern-ecommerce-dashboard.png",
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
    image: "/task-management-interface.png",
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
    image: "/ai-content-generation-interface.jpg",
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
    image: "/analytics-dashboard-charts.png",
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
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">PROJETS</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes projets professionnels, alliant expertise technique et gestion de projet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`group hover:scale-105 transition-all duration-300 bg-card border-border overflow-hidden ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Featured
                    </Badge>
                  )}
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3 bg-transparent">
            Voir tous les projets
          </Button>
        </div>
      </div>
    </section>
  )
}
