"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Navigation
    "nav.home": "ACCUEIL",
    "nav.about": "À PROPOS",
    "nav.experience": "EXPÉRIENCE PROFESSIONNELLE",
    "nav.projects": "PROJETS",
    "nav.contact": "CONTACT",

    // Hero Section
    "hero.creative": "CRÉATIVE",
    "hero.developer": "DÉVELOPPEUSE",
    "hero.name": "Malaury Boudon / Développeuse Full Stack",
    "hero.tagline": "SOLUTIONS WEB ÉVOLUTIVES",
    "hero.description":
      "Développeuse full-stack passionnée par la transformation d'idées en applications concrètes et accessibles. Expertise en développement web et mobile avec une approche centrée sur l'utilisateur.",
    "hero.cta": "DÉCOUVRIR MON TRAVAIL",
    "hero.downloadCV": "TÉLÉCHARGER CV",

    // About Section
    "about.title": "À Propos",
    "about.intro":
      "Ce qui me motive en tant que développeuse full-stack, c'est de transformer des idées en applications concrètes et accessibles.",
    "about.description":
      "Avec une expérience à la fois en front-end (React, Angular, HTML, CSS, JavaScript) et en back-end (Node.js, Express, Java), j'ai aussi exploré le développement mobile (Android/Java/Kotlin, Flutter, React Native). Je m'attache à créer des solutions performantes et ergonomiques, en privilégiant la collaboration et l'écoute des besoins réels des utilisateurs.",
    "about.education": "Formation",
    "about.skills": "Compétences",
    "about.languages": "Langues",
    "about.interests": "Centres d'intérêt",
    "about.engineer": "Ingénieur en informatique, Centrale Lille",
    "about.analyst": "Analyste programmeur, IUT A Lille",
    "about.french": "Français",
    "about.english": "Anglais",
    "about.philosophy": "Philosophie",
    "about.ai": "Intelligence Artificielle",

    // Experience Section
    "experience.title": "Expérience Professionnelle",
    "experience.ormaes.title": "Développeuse Full Stack",
    "experience.ormaes.company": "Ormaes",
    "experience.ormaes.period": "2023 - Aujourd'hui",
    "experience.ormaes.desc":
      "Gestion de projets web et mobile avec coordination d'équipes, développement Java/Angular, développement mobile natif Android et Flutter, administration système et conception UX/UI.",
    "experience.adis.title": "Développeuse Java",
    "experience.adis.company": "ADIS",
    "experience.adis.period": "2021 - 2023",
    "experience.adis.desc":
      "Développement et maintenance de microservices Java dans le secteur de l'assurance, avec expertise en Spring Boot, API REST et bases de données MongoDB.",
    "experience.boulanger.title": "Développeuse Java Senior",
    "experience.boulanger.company": "Boulanger",
    "experience.boulanger.period": "2018 - 2021",
    "experience.boulanger.desc":
      "Développement d'API REST Java/Spring Boot, encadrement technique de 3 développeurs et gouvernance de projets dans la grande distribution.",

    // Projects Section
    "projects.title": "Projets Clés",
    "projects.cts.title": "Application CTS - Web & Mobile",
    "projects.cts.desc":
      "Développement d'une solution complète web et mobile pour la CTS avec gestion de projet Agile, développement Java/Angular et application mobile native Android.",
    "projects.sentinel.title": "Sentinel MBO - Plateforme Web",
    "projects.sentinel.desc":
      "Projet web complet avec développement full-stack (Java, React.js, PostgreSQL), conception UX/UI et mise en production sous Linux.",
    "projects.roiret.title": "Roiret - Interface Utilisateur",
    "projects.roiret.desc":
      "Intégration front-end React.js avec optimisation des performances, adaptation responsive et développement à partir de maquettes Figma.",
    "projects.api.title": "API REST Grande Distribution",
    "projects.api.desc":
      "Développement d'API REST performantes pour le secteur de la grande distribution avec architecture microservices et intégration CI/CD.",
    "projects.viewProject": "Voir le projet",

    // Contact Section
    "contact.title": "Contactez-moi",
    "contact.subtitle": "Prête à collaborer sur votre prochain projet",
    "contact.description":
      "Que vous ayez un projet en tête ou que vous souhaitiez simplement discuter de développement, n'hésitez pas à me contacter.",
    "contact.phone": "Téléphone",
    "contact.email": "Email",
    "contact.location": "Localisation",
    "contact.cta": "Commençons à collaborer",
  },
  en: {
    // Navigation
    "nav.home": "HOME",
    "nav.about": "ABOUT",
    "nav.experience": "PROFESSIONAL EXPERIENCE",
    "nav.projects": "PROJECTS",
    "nav.contact": "CONTACT",

    // Hero Section
    "hero.creative": "CREATIVE",
    "hero.developer": "DEVELOPER",
    "hero.name": "Malaury Boudon / Full Stack Developer",
    "hero.tagline": "SCALABLE WEB SOLUTIONS",
    "hero.description":
      "Full-stack developer passionate about transforming ideas into concrete and accessible applications. Expertise in web and mobile development with a user-centered approach.",
    "hero.cta": "EXPLORE MY WORK",
    "hero.downloadCV": "DOWNLOAD CV",

    // About Section
    "about.title": "About Me",
    "about.intro":
      "What motivates me as a full-stack developer is transforming ideas into concrete and accessible applications.",
    "about.description":
      "With experience in both front-end (React, Angular, HTML, CSS, JavaScript) and back-end (Node.js, Express, Java), I have also explored mobile development (Android/Java/Kotlin, Flutter, React Native). I focus on creating performant and ergonomic solutions, prioritizing collaboration and listening to real user needs.",
    "about.education": "Education",
    "about.skills": "Skills",
    "about.languages": "Languages",
    "about.interests": "Interests",
    "about.engineer": "Computer Engineering, Centrale Lille",
    "about.analyst": "Programmer Analyst, IUT A Lille",
    "about.french": "French",
    "about.english": "English",
    "about.philosophy": "Philosophy",
    "about.ai": "Artificial Intelligence",

    // Experience Section
    "experience.title": "Professional Experience",
    "experience.ormaes.title": "Full Stack Developer",
    "experience.ormaes.company": "Ormaes",
    "experience.ormaes.period": "2023 - Present",
    "experience.ormaes.desc":
      "Web and mobile project management with team coordination, Java/Angular development, native Android and Flutter mobile development, system administration and UX/UI design.",
    "experience.adis.title": "Java Developer",
    "experience.adis.company": "ADIS",
    "experience.adis.period": "2021 - 2023",
    "experience.adis.desc":
      "Development and maintenance of Java microservices in the insurance sector, with expertise in Spring Boot, REST APIs and MongoDB databases.",
    "experience.boulanger.title": "Senior Java Developer",
    "experience.boulanger.company": "Boulanger",
    "experience.boulanger.period": "2018 - 2021",
    "experience.boulanger.desc":
      "Development of Java/Spring Boot REST APIs, technical leadership of 3 developers and project governance in retail distribution.",

    // Projects Section
    "projects.title": "Key Projects",
    "projects.cts.title": "CTS Application - Web & Mobile",
    "projects.cts.desc":
      "Development of a complete web and mobile solution for CTS with Agile project management, Java/Angular development and native Android mobile application.",
    "projects.sentinel.title": "Sentinel MBO - Web Platform",
    "projects.sentinel.desc":
      "Complete web project with full-stack development (Java, React.js, PostgreSQL), UX/UI design and Linux production deployment.",
    "projects.roiret.title": "Roiret - User Interface",
    "projects.roiret.desc":
      "React.js front-end integration with performance optimization, responsive adaptation and development from Figma mockups.",
    "projects.api.title": "Retail Distribution REST API",
    "projects.api.desc":
      "Development of performant REST APIs for the retail sector with microservices architecture and CI/CD integration.",
    "projects.viewProject": "View project",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to collaborate on your next project",
    "contact.description":
      "Whether you have a project in mind or just want to discuss development, feel free to reach out.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.cta": "Let's start collaborating",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
