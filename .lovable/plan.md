
# Portfolio Rebuild — Rigel Santos (MrAres259)

## Overview
Recreate the existing HTML portfolio as a polished React app with improved visual design, glassmorphism, and all original interactive effects — with refinements.

## Pages & Sections (Single-page scrolling)

### 1. Header
- Fixed top bar with the RS logo (Logo.png) on the left
- Language toggle (EN/ES) and animated hamburger menu on the right
- Full-screen overlay menu with numbered links and staggered animations (same as original)

### 2. Hero Section
- Two-column layout: intro text left, glass card navigation links right
- "Hi! I'm Rigel Santos / MrAres259" with interactive letter proximity wave effect
- Subtitle with teal accent border
- Glass-styled nav cards (Education, Experience, Certifications, Contact) with hover arrows
- Smooth slide-out animation when menu opens

### 3. Education Section
- Glassmorphic cards with teal left border accent
- Two entries: UNAM Engineering (2020-2026) and Computer Technician (2017-2019)
- Hover translate effect

### 4. Professional Experience Section
- Same glassmorphic card style
- Three entries: Huawei TAM Intern, IT Support, Teleperformance

### 5. Certifications Section — **Bento Grid Layout**
- Replace the horizontal carousel with a responsive bento grid
- Mix of larger and smaller cards in an asymmetric grid layout
- 6 certifications with their badge images embedded directly:
  - Google UX Design (google_ux.png)
  - Google IT Support (google_it.png)
  - Git & GitHub Essentials (git_github.png)
  - Cisco Learn-A-Thon 2025 (net_athon.png)
  - Cisco Networking Basics (net_basics.png)
  - Google Cloud Essentials (google_cloud.png)
- Each card links to its Credly/credential URL
- Glassmorphic card styling with hover glow effects

### 6. Contact Section
- Grid of glass cards: Location, Email, LinkedIn
- **No WhatsApp link** (removed)
- Hover lift effect with teal border glow

## Interactive Effects

### Background
- Fixed animated gradient bubbles that follow cursor (teal/white radial gradients)
- Static film grain noise overlay (CSS animation)

### Custom Cursor
- Custom circle cursor on desktop (hidden on touch devices)
- **Smaller lamp/glow effect** — reduce bubble sizes (~60% of original)
- Expand cursor on hover over interactive elements

### Glassmorphism
- Apply consistent glass styling across all cards: `backdrop-filter: blur(12px)`, semi-transparent backgrounds, subtle borders
- Slightly frosted section backgrounds

### Animations
- Interactive letter wave effect on hero title (proximity-based scale)
- Smooth section transitions
- Staggered menu item reveals

## Design System
- Dark background (#1a1a1a)
- Accent teal (#58a4b0)
- Rubik font family
- All colors in HSL for Tailwind
- Responsive: single column on mobile (<960px), hide custom cursor on touch

## Bilingual Support
- EN/ES toggle with full translation dictionary stored in code
- Dynamic text replacement preserving interactive letter spans
