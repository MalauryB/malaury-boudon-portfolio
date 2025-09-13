"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Languages, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-6 bg-card/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">{t("about.title")}</h2>
          <p className="text-lg text-muted-foreground">Mon parcours et mes compétences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Formation */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t("about.education")}</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-foreground">{t("about.engineer")}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">{t("about.analyst")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Langues */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Languages className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t("about.languages")}</h3>
              </div>
              <div className="space-y-2">
                <Badge variant="secondary">{t("about.french")}</Badge>
                <Badge variant="secondary">{t("about.english")}</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Loisirs */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t("about.interests")}</h3>
              </div>
              <div className="space-y-2">
                <Badge variant="secondary">{t("about.philosophy")}</Badge>
                <Badge variant="secondary">{t("about.ai")}</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compétences techniques */}
        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">{t("about.skills")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium text-foreground mb-3">Développement Front-end</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Angular</Badge>
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">SCSS</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-3">Développement Back-end</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">Spring Boot</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Express</Badge>
                  <Badge variant="outline">API REST</Badge>
                  <Badge variant="outline">Microservices</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-3">Mobile & Autres</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Android</Badge>
                  <Badge variant="outline">Kotlin</Badge>
                  <Badge variant="outline">Flutter</Badge>
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
