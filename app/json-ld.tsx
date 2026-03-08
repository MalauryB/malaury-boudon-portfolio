export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Malaury Boudon",
    url: "https://malaury.dev",
    jobTitle: "Développeur Full Stack",
    knowsAbout: ["Next.js", "React", "Node.js", "TypeScript", "JavaScript"],
    sameAs: [],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Malaury Boudon - Portfolio",
    url: "https://malaury.dev",
    description:
      "Portfolio de Malaury Boudon, développeur full stack spécialisé en Next.js, React et Node.js.",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
