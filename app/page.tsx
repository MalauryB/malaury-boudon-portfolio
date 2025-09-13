"use client"

import { useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { SectionFactory } from "@/services"

export default function Home() {
  const sectionFactory = useMemo(() => new SectionFactory(), [])
  const sections = sectionFactory.createSections()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      {sections.map(({ id, component: Component }) => (
        <Component key={id} />
      ))}

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">© 2024 Malaury Boudon - Développé avec passion et Next.js</p>
        </div>
      </footer>
    </main>
  )
}
