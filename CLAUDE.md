# SAVR Website

SAVR is a hospitality intelligence platform by Arrdas Studio (tech by XAIR) that helps hotels eliminate food waste, predict demand, and optimise kitchen operations. First deployment: Radisson Blu Hotel, Amritsar. This repo is the marketing/landing website.

## Project Structure

```
savr-website/
├── react-app/          # Main Vite + React app
│   ├── src/
│   │   ├── App.jsx     # Root layout: FloatingHeader → Hero → Headline → Prose → SignUp → Footer → FloatingCta
│   │   ├── main.jsx    # Entry point
│   │   ├── index.css   # Tailwind v4 theme + SAVR brand tokens
│   │   ├── components/ # Page sections and UI primitives
│   │   │   ├── ui/     # Reusable UI (button, sheet, input, label, floating-header)
│   │   │   └── *.jsx   # Page sections (Hero, Headline, Prose, SignUp, Footer, FloatingCta, etc.)
│   │   ├── hooks/      # Custom hooks (useSmoothScroll via Lenis)
│   │   └── lib/        # Utilities (cn helper)
│   ├── public/         # Static assets (favicon.svg, icons.svg)
│   └── vite.config.js  # Vite config with @tailwindcss/vite plugin and @ alias
├── .agents/skills/     # Installed agent skills
├── brand_guide_text.txt        # SAVR brand voice guide (text)
├── SAVR_Brand_Voice_Guide.pdf  # SAVR brand voice guide (PDF)
└── package.json        # Root package (agent-browser dependency)
```

## Tech Stack

- **React 19** with JSX (no TypeScript)
- **Vite 8** for dev/build
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin
- **Framer Motion** for animations
- **Radix UI** primitives (dialog/sheet, label, slot)
- **Lenis** for smooth scrolling
- **Lucide React** for icons
- **shadcn/ui** pattern (CVA + clsx + tailwind-merge) for component variants

## Commands

```bash
cd react-app
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## SAVR Brand Tokens

Defined in `react-app/src/index.css` under `@theme`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-savr-green` | `#155c4b` | Primary brand color |
| `--color-savr-green-light` | `#1a7a63` | Hover/accent states |
| `--color-savr-green-dark` | `#0e3f34` | Dark variant |
| `--color-neutral-black` | `#141414` | Body text |
| `--color-neutral-light-gray` | `#f3f5fa` | Section backgrounds |
| `--font-display` | Playfair Display | Headlines |
| `--font-body` | Inter | Body text |

Use Tailwind classes like `text-savr-green`, `bg-neutral-light-gray`, `font-display`, `font-body`.

## Conventions

- **Path alias**: `@/` maps to `react-app/src/` (configured in vite.config.js and jsconfig.json)
- **Components**: Functional components with JSX, no TypeScript
- **UI primitives**: Follow shadcn/ui pattern in `src/components/ui/` — use CVA for variants, `cn()` from `@/lib/utils` for class merging
- **Styling**: Tailwind utility classes only; no separate CSS modules. Brand tokens via CSS custom properties in `index.css`
- **Animations**: Use Framer Motion (`motion` components, `useInView`, etc.)
- **Smooth scroll**: Already wired via `useSmoothScroll` hook (Lenis) in App.jsx

## Brand Voice (reference)

Tagline: "Save Smarter. Serve Better."
Tone: Confident, precise, data-driven but human. Speaks to both chefs and CFOs. Not flashy — calm, capable, trust-earning through results. See `brand_guide_text.txt` or `SAVR_Brand_Voice_Guide.pdf` for full guide.

## Agent Skills

Installed in `.agents/skills/` (managed via `skills-lock.json`):

| Skill | Source | Purpose |
|-------|--------|---------|
| `agent-browser` | vercel-labs/agent-browser | Browser automation CLI for testing/scraping via Chrome CDP |
| `find-skills` | vercel-labs/skills | Discover and install new agent skills |
| `frontend-design` | anthropics/skills | Guide for creating distinctive, production-grade UI |
| `vercel-react-best-practices` | vercel-labs/agent-skills | 69 React/Next.js perf optimization rules from Vercel |
| `video-prompting-guide` | inferen-sh/skills | AI video generation prompt best practices |

The `agent-browser` CLI (v0.24.1) is also installed as an npm dep at the root for direct use.
