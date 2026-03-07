

# Dynamic Effects Enhancement Plan

Four effects to add across the portfolio, all implemented with zero external dependencies.

---

## 1. Scroll-Reveal Animations

**What:** Sections and cards fade + slide up into view as the user scrolls down.

**How:** Create a reusable `useScrollReveal` hook using `IntersectionObserver`. Apply it to every section (`EducationSection`, `ExperienceSection`, `CertificationsSection`, `ContactSection`) and their child cards. Elements start with `opacity-0 translate-y-8` and transition to `opacity-100 translate-y-0` when they enter the viewport. Cards get staggered delays (e.g., 100ms per card index).

**Files touched:** New `src/hooks/useScrollReveal.ts`, plus all four section components and `HeroSection.tsx`.

---

## 2. Typing Animation on Hero

**What:** The role text ("Technical Account Manager Intern") types out character-by-character like a terminal, with a blinking cursor.

**How:** Add a `TypingText` component that uses `useEffect` + `setInterval` to reveal one character at a time (~60ms per char). A blinking `|` cursor appends at the end. Replaces the static `<p>` for `t.role` in `HeroSection.tsx`. Re-triggers when language changes.

**Files touched:** `src/components/HeroSection.tsx` (new inline component or separate file).

---

## 3. Parallax Scrolling

**What:** Subtle depth effect — section headings and background elements shift at different scroll speeds.

**How:** Add a lightweight `useParallax` hook that listens to `scroll` events (throttled via `requestAnimationFrame`) and applies a `translateY` offset proportional to scroll position. Apply a gentle parallax (0.05–0.1 factor) to section headings and the background glow circles in `BackgroundEffects.tsx` so the radial gradients drift slightly as you scroll.

**Files touched:** New `src/hooks/useParallax.ts`, `BackgroundEffects.tsx`, section components (headings only).

---

## 4. Animated Skill Bars / Stats

**What:** A new "Skills" or "Technologies" subsection with horizontal progress bars that animate from 0% to their target width when scrolled into view.

**How:** Add a `SkillsSection` component between Experience and Certifications. Each skill (e.g., "Networking 85%", "Linux 80%", "Cloud 75%") renders as a labeled bar. Uses the same `useScrollReveal` observer — when visible, a CSS `width` transition animates from `0%` to the target percentage over ~1s with an ease-out curve. Skills data lives in `translations.ts` for bilingual support.

**Files touched:** New `src/components/SkillsSection.tsx`, `src/lib/translations.ts` (add skill entries), `src/pages/Index.tsx` (add to layout).

---

## Implementation Order

1. `useScrollReveal` hook (shared dependency)
2. Scroll-reveal on all existing sections
3. Typing animation on hero
4. Parallax hook + apply to backgrounds/headings
5. Skills section with animated bars

All effects use native browser APIs (IntersectionObserver, requestAnimationFrame, CSS transitions) — no new packages needed.

