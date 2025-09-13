# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` or `pnpm dev`
- **Build project**: `npm run build` or `pnpm build`
- **Start production**: `npm run start` or `pnpm start`
- **Lint code**: `npm run lint` or `pnpm lint`

## Project Architecture

This is a **Next.js 14 portfolio website** for Malaury Boudon, a full-stack developer. The project uses:

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui configuration
- **Fonts**: Geist Sans and Geist Mono
- **Analytics**: Vercel Analytics
- **Internationalization**: Custom i18n implementation via React Context

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - React components (sections, navigation, UI components)
- `contexts/` - React Context providers (language switching)
- `hooks/` - Custom React hooks
- `lib/` - Utility functions
- `styles/` - Global CSS and Tailwind configuration
- `public/` - Static assets

### Key Features
- **Bilingual support**: French (default) and English via `LanguageContext`
- **Dark theme**: Configured in layout with custom CSS variables
- **Component-based architecture**: Each section is a separate component
- **Modern design system**: Uses Tailwind CSS v4 with custom color tokens
- **shadcn/ui integration**: Components configured with "new-york" style

### Configuration Details
- **TypeScript**: Strict mode enabled
- **Path aliases**: `@/*` maps to project root
- **Build settings**: ESLint and TypeScript errors ignored during builds
- **Images**: Unoptimized for static export compatibility

### Internationalization System
The project uses a custom i18n system in `contexts/language-context.tsx` with:
- Translation keys organized by sections (nav, hero, about, experience, projects, contact)
- Complete French and English translations
- Context-based language switching

### Component Architecture
- **Page layout**: Single-page application with sections
- **Navigation**: Sticky navigation with language switcher
- **Sections**: Hero, About, Experience, Projects, Contact
- **Responsive design**: Mobile-first approach with Tailwind utilities

When working on this project, maintain the existing architecture patterns and use the established i18n system for any new text content.