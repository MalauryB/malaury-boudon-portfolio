import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { JsonLd } from "./json-ld"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://malaury.dev"),
  title: {
    default: "Malaury Boudon - Développeur Full Stack",
    template: "%s | Malaury Boudon",
  },
  description:
    "Malaury Boudon, développeur full stack basé en France. Spécialisé en Next.js, React et Node.js. Découvrez mes projets et mon parcours.",
  keywords: [
    "Malaury Boudon",
    "développeur full stack",
    "full stack developer",
    "Next.js",
    "React",
    "Node.js",
    "portfolio",
  ],
  authors: [{ name: "Malaury Boudon", url: "https://malaury.dev" }],
  creator: "Malaury Boudon",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: "https://malaury.dev",
    siteName: "Malaury Boudon - Portfolio",
    title: "Malaury Boudon - Développeur Full Stack",
    description:
      "Développeur full stack passionné, spécialisé en Next.js, React et Node.js. Découvrez mes projets et mon parcours.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malaury Boudon - Développeur Full Stack",
    description:
      "Développeur full stack passionné, spécialisé en Next.js, React et Node.js.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://malaury.dev",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <JsonLd />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
