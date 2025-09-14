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
    "hero.creative": "DÉVELOPPEUSE",
    "hero.developer": "CRÉATIVE",
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
    "projects.title": "PROJETS",
    "projects.subtitle": "Une sélection de mes projets professionnels, alliant expertise technique et gestion de projet.",
    "projects.filterBy": "Filtrer par technologie",
    "projects.all": "Tous",
    "projects.featured": "Featured",
    "projects.personal": "Projet Personnel",

    // Individual Projects
    "projects.cts.title": "CTS - Projet Web et Mobile",
    "projects.cts.desc":
      "Développement complet d'une solution web et mobile avec gestion de projet Agile/Scrum. Programmation en Java et Angular pour le web, développement natif Android et solutions cross-platform avec Flutter.",
    "projects.sentinel.title": "Sentinel MBO - Projet Web Complet",
    "projects.sentinel.desc":
      "Projet full-stack avec gestion Agile/Scrum, rédaction de spécifications fonctionnelles et techniques. Développement avec React.js, Java et PostgreSQL, mise en production sous Linux.",
    "projects.roiret.title": "Roiret - Interface Utilisateur",
    "projects.roiret.desc":
      "Intégration front-end avec développement de l'interface utilisateur en React.js à partir de maquettes Figma. Optimisation des performances et adaptation responsive multi-appareils.",
    "projects.adis.title": "Microservices Assurance - ADIS",
    "projects.adis.desc":
      "Développement et maintenance de microservices Java dans le secteur de l'assurance avec prise en compte des contraintes métier et réglementaires. Architecture API REST et intégration CI/CD.",
    "projects.boulanger.title": "Agrégateur Boulanger",
    "projects.boulanger.desc":
      "Développement d'API REST dans le secteur de la grande distribution avec encadrement technique de 3 développeurs. Comparaison de systèmes d'information et migration réussie dans un délai réduit.",
    "projects.wewioo.title": "Wewioo - Détection d'Incendie",
    "projects.wewioo.desc":
      "Projet React développé pour une startup innovante spécialisée dans la détection précoce d'incendies. Interface utilisateur moderne pour la surveillance et l'alerte en temps réel, contribuant à améliorer la sécurité et la prévention des risques d'incendie.",
    "projects.therapist.title": "Site Web Thérapeute - Strasbourg",
    "projects.therapist.desc":
      "Projet personnel - Développement complet d'un site web pour un thérapeute à Strasbourg. Site vitrine moderne avec présentation des services, prise de rendez-vous et informations pratiques. Réalisé de manière indépendante.",
    "projects.viewProject": "Voir le projet",

    // Contact Section
    "contact.title": "CONTACT",
    "contact.subtitle": "Travaillons ensemble sur votre prochain projet.",
    "contact.heading": "Restons en contact",
    "contact.description":
      "Que vous ayez un projet en tête, une question technique ou simplement envie d'échanger sur le développement web, n'hésitez pas à me contacter.",
    "contact.phone": "Téléphone",
    "contact.email": "Email",
    "contact.location": "Localisation",
    "contact.follow": "Suivez-moi",
    "contact.form.name": "Nom complet",
    "contact.form.namePlaceholder": "Votre nom",
    "contact.form.emailPlaceholder": "votre@email.com",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Parlez-moi de votre projet...",
    "contact.form.submit": "Envoyer le message",
    "contact.form.submitting": "Envoi en cours...",
    "contact.form.success": "Message envoyé avec succès! Je vous répondrai bientôt.",
    "contact.form.error": "Une erreur est survenue. Veuillez réessayer.",
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
    "projects.title": "PROJECTS",
    "projects.subtitle": "A selection of my professional projects, combining technical expertise and project management.",
    "projects.filterBy": "Filter by technology",
    "projects.all": "All",
    "projects.featured": "Featured",
    "projects.personal": "Personal Project",

    // Individual Projects
    "projects.cts.title": "CTS - Web and Mobile Project",
    "projects.cts.desc":
      "Complete development of a web and mobile solution with Agile/Scrum project management. Java and Angular programming for web, native Android development and cross-platform solutions with Flutter.",
    "projects.sentinel.title": "Sentinel MBO - Complete Web Project",
    "projects.sentinel.desc":
      "Full-stack project with Agile/Scrum management, functional and technical specifications writing. Development with React.js, Java and PostgreSQL, Linux production deployment.",
    "projects.roiret.title": "Roiret - User Interface",
    "projects.roiret.desc":
      "Front-end integration with user interface development in React.js from Figma mockups. Performance optimization and responsive multi-device adaptation.",
    "projects.adis.title": "Insurance Microservices - ADIS",
    "projects.adis.desc":
      "Development and maintenance of Java microservices in the insurance sector with consideration of business and regulatory constraints. REST API architecture and CI/CD integration.",
    "projects.boulanger.title": "Boulanger Aggregator",
    "projects.boulanger.desc":
      "REST API development in the retail sector with technical leadership of 3 developers. Information systems comparison and successful migration within reduced timeframe.",
    "projects.wewioo.title": "Wewioo - Fire Detection",
    "projects.wewioo.desc":
      "React project developed for an innovative startup specialized in early fire detection. Modern user interface for real-time monitoring and alerts, contributing to improved safety and fire risk prevention.",
    "projects.therapist.title": "Therapist Website - Strasbourg",
    "projects.therapist.desc":
      "Personal project - Complete development of a website for a therapist in Strasbourg. Modern showcase site with service presentation, appointment booking and practical information. Independently realized.",
    "projects.viewProject": "View project",

    // Contact Section
    "contact.title": "CONTACT",
    "contact.subtitle": "Let's work together on your next project.",
    "contact.heading": "Let's stay in touch",
    "contact.description":
      "Whether you have a project in mind, a technical question, or just want to chat about web development, feel free to contact me.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.follow": "Follow me",
    "contact.form.name": "Full name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell me about your project...",
    "contact.form.submit": "Send message",
    "contact.form.submitting": "Sending...",
    "contact.form.success": "Message sent successfully! I'll get back to you soon.",
    "contact.form.error": "An error occurred. Please try again.",
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
