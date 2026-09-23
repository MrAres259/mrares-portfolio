# Portfolio Structure & Developer Guide

## Tech Stack & Deployment
- **Stack:** Vite 5, React 18, TypeScript, Tailwind CSS 3.4, and shadcn/ui.
- **Routing:** React Router v6 (`react-router-dom`).
- **Deployment:** Static deployment on GitHub Pages (`www.mrares259.com`). SPA routing fallback uses a generated `404.html` created during the deployment workflow.

## Routes
- `/`: Main portfolio landing page (Index) with all sections (Hero, Work, Experience, Capabilities, Credentials, Contact).
- `/project/insaight`: Case study for InsAIght.
- `/project/noli`: Case study for Noli.
- `*`: Not Found fallback page.

## Content Architecture
Content is bilingual (English and Spanish) and strictly separated:
- `src/lib/content.ts`: Bilingual UI copy for navigation, hero, section titles, experience, capabilities, credentials, and contact.
- `src/lib/project-content.ts`: Detailed bilingual case study content (summaries, overviews, chapters, and gallery captions).
- `src/lib/portfolio-data.ts`: Language-agnostic data including person info, social links, skill groups, certifications, project IDs, media paths, and tech stacks.

## Design System
- **Design Tokens:** Defined as `oklch` CSS variables in `src/index.css` supporting dark mode (default) and `.light` theme.
- **Utility Classes:** Custom theme utilities configured in CSS, including `glass`, `glass-strong`, `ambient-grid`, `ambient-light`, `accent-text`, `accent-fill`, `section-label`, `status-badge`, `status-dot`, `tech-chip`, `project-card`, and `project-preview`.

## Adding a New Project
1. **Data:** Add the project entry (cover, media gallery, stack) to `projects` and update `projectIds` in `src/lib/portfolio-data.ts`.
2. **Copy:** Add bilingual case study copy (`en` and `es`) to `projectCopy` in `src/lib/project-content.ts`.
3. **Route:** Register the new route in `src/App.tsx` pointing to `<ProjectDetail id="<project-id>" />`.

## Scripts
- `npm run dev`: Start local Vite development server.
- `npm test`: Run test suite with Vitest.
- `npm run build`: Typecheck and produce static production bundle in `dist/`.
