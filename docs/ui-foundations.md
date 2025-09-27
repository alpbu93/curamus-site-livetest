# UI Foundations – Modern Refresh (Draft)

_Last updated: 27 September 2025_

## Strategic Goals
- Convey a premium, contemporary look for Curamus without sacrificing clarity.
- Improve perceived performance and trust via subtle motion and layering.
- Keep the classic styling available as a fallback toggle until the refresh is approved.

## Palette
| Token | Hex | Usage |
| --- | --- | --- |
| `--color-primary` | `#0D6B71` | Primary actions, key highlights, gradients. |
| `--color-primary-soft` | `#1A9FA8` | Hover states, light backgrounds. |
| `--color-accent` | `#F0CE9C` | Accents, icons, callouts. |
| `--color-ink` | `#1D2939` | Headlines, primary text. |
| `--color-muted` | `#526070` | Body copy, secondary text. |
| `--color-surface` | `#F4F7F8` | Page background. |
| `--color-surface-elevated` | `rgba(255, 255, 255, 0.82)` | Glass cards / overlays. |
| `--color-gradient-start` | `#0D6B71` | CTA gradients. |
| `--color-gradient-end` | `#134B63` | CTA gradients. |

Fallback palette (`classic`) keeps the existing Tailwind colors (`primary-700`, etc.). We will expose both palettes via CSS variables to allow switching.

## Typography
- Primary font: `"Inter Variable", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` (variable font for responsive weight transitions).
- Headline weights: 600→700. Body text: 400→500.
- Letter spacing tweaks on all-caps labels (0.32em).

## Motion Principles
- Intro sequences: duration 400ms, ease `cubic-bezier(0.22, 1, 0.36, 1)`, stagger 90ms.
- Hover feedback: scale 1.02 + shadow intensity increase (100ms, ease-out).
- Scroll reveals: fade-up with 20px offset, triggered once (Intersection Observer via `framer-motion`).
- Modal transitions: spring, `stiffness 220`, `damping 28`.

## Component Guidelines
- **Navbar:** sticky glass panel (`backdrop-blur-xl`, translucent border), shrink on scroll.
- **Hero:** large duotone gradient overlay on hero image, layered call-to-action with pill button.
- **Service cards:** glassmorphism style with gradient border, iconography tinted in accent color.
- **CTA banners:** gradient backgrounds with subtle noise texture.
- **Footer:** dark gradient (`#0B1F2A → #08141C`), white text, social logos.

## Fallback Strategy
- Introduce a body data attribute `data-theme="classic" | "modern"`.
- Default to `modern`, allow toggling back to `classic` via quick helper (`toggleTheme` in `Layout` once ready).
- Classic theme should preserve existing Tailwind classes; modern theme relies on CSS variables overriding Tailwind color tokens.
- Backup snapshot: `backups/pre-redesign/` contains the pre-refresh sources for manual rollback.

## Implementation Roadmap
1. Extend Tailwind config: define CSS variables for both themes; map utilities to variables.
2. Add `ThemeProvider` (lightweight) to control `data-theme` attribute.
3. Update global styles (`styles/globals.css`) with new font imports, gradients, and animation keyframes.
4. Apply component-level updates in the following order: Navbar → Hero → CTA blocks → Services grid → Testimonials/CTA → Kontaktform → Footer.
5. Integrate `framer-motion` for motion primitives (ensure optional chaining to avoid SSR issues).
6. Run accessibility audit (focus states, contrast) before launch.

---
This document is the working specification; adjust tokens or sequencing as the redesign progresses.
