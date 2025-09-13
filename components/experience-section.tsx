"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2023 - Aujourd'hui",
    title: "Développeuse Full Stack",
    company: "Ormaes",
    description:
      "Gestion de projet Agile/Scrum, développement web (Java, Angular), développement mobile natif Android et cross-platform (Flutter), administration système et UX/UI. Projets CTS, Sentinel MBO et Roiret avec focus sur l'expérience utilisateur et les performances.",
    technologies: ["Java", "Angular", "Android", "Kotlin", "Flutter", "React.js", "PostgreSQL", "Figma", "Jira"],
    current: true,
  },
  {
    period: "2021 - 2023",
    title: "Développeuse Java",
    company: "ADIS",
    description:
      "Développement et maintenance de microservices Java dans le secteur de l'assurance. Développement d'outils internes avec prise en compte des contraintes métier et réglementaires.",
    technologies: ["Java", "Spring Boot", "MongoDB", "Microservices", "API REST", "CI/CD"],
    current: false,
  },
  {
    period: "2018 - 2021",
    title: "Développeuse Java - Encadrement technique",
    company: "Boulanger",
    description:
      "Développement d'API REST dans le secteur de la grande distribution. Encadrement de 3 développeurs sur le projet Agrégateur, rédaction de spécifications et animation de réunions de suivi projet.",
    technologies: ["Java", "Spring Boot", "API REST", "Encadrement", "Spécifications"],
    current: false,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">EXPÉRIENCE</h2>
          <p className="text-lg text-muted-foreground">Mon parcours professionnel dans le développement web.</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-2 bg-background hidden md:block ${
                    exp.current ? "border-primary bg-primary" : "border-border"
                  }`}
                />

                <Card className="md:ml-16 bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <Badge variant="outline" className="text-xs">
                          {exp.period}
                        </Badge>
                        {exp.current && <Badge className="bg-primary/10 text-primary text-xs">Actuel</Badge>}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
