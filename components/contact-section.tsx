"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto URL with form data
    const subject = encodeURIComponent("Contact depuis malaury.dev")
    const body = encodeURIComponent(
      `Bonjour Malaury,\n\nNom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n--\nCe message a été envoyé depuis votre portfolio malaury.dev`
    )

    // Open Gmail with pre-filled data
    window.open(`mailto:boudonmalaury@gmail.com?subject=${subject}&body=${body}`, "_blank")

    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">CONTACT</h2>
          <p className="text-lg text-muted-foreground">Travaillons ensemble sur votre prochain projet.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Restons en contact</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Que vous ayez un projet en tête, une question technique ou simplement envie d'échanger sur le
                développement web, n'hésitez pas à me contacter.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">boudonmalaury@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Téléphone</p>
                  <p className="text-muted-foreground">06 95 60 15 81</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Localisation</p>
                  <p className="text-muted-foreground">Strasbourg, France</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-medium text-foreground mb-4">Suivez-moi</h4>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                  onClick={() => window.open("https://github.com/MalauryB", "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                  onClick={() => window.open("https://www.linkedin.com/in/malaury-boudon-a9538a12b/", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parlez-moi de votre projet..."
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
