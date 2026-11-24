# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Vite dev server (http://localhost:5173)
npm run build     # tsc -b && vite build → dist/
npm run lint      # eslint .
npm run preview   # serve the production build
npm test          # jest (ts-jest + jsdom)

npx jest src/components/Button/Button.test.tsx   # single test file
npx jest -t "renders correctly"                  # tests matching a name

npx grc component ComponentName   # scaffold src/components/ComponentName (tsx + styles.scss + test)
npx grc section SectionName       # scaffold src/sections/SectionName (tsx + styles.scss, no test)
```

Scaffolding uses the custom templates in `grc/` (configured in `generate-react-cli.json`).

## Architecture

Single-page React 19 + TypeScript portfolio built with Vite 7, deployed to **Azure Static Web Apps** via `.github/workflows/azure-static-web-apps-*.yml` on every push/PR to `main` (builds from `/`, serves `dist`).

- **Page composition**: `main.tsx` → `App.tsx` → `components/Portfolio/Portfolio.tsx`, which is the real root. It renders the sections (`src/sections/`: Hero, About, Projects, Contact, Footer) in order and owns scroll-spy state (`activeNav`) by matching `window.scrollY` against section element ids (`home`, `about`, `skills`, `projects`, `contact`). Navigation is smooth-scroll to those ids — there is no router. New sections need a matching id added to that list and to `constants/NavLinkData.ts`.
- **Sections vs components**: `src/sections/` are page-level blocks; `src/components/` are reusable pieces, each in its own folder as `Name.tsx` + `Name.styles.scss` (+ optional `Name.test.tsx`). Several components come in `X` / `XList` pairs where the list maps over a data array from `src/constants/`.
- **Static content** lives in `src/constants/*.ts` (nav links, skills, tech stack, tools, contact/social data).
- **Dynamic content (DatoCMS)**: projects are fetched from DatoCMS's GraphQL API via `graphql-request`. `src/datocms/` contains the client (`datocms.ts`), the query (`queries/project.ts`), types, a `useProjects` hook, and `helper/transformProject.ts` which maps CMS records to `ProjectCardData` for `ProjectCard`. Used by `sections/Projects`.
- **Contact form**: `components/InputFormBlock` sends mail through EmailJS (`@emailjs/browser`).
- **Animations**: AOS via the `utils/FadeOnScroll` wrapper component, plus Framer Motion; carousels use Swiper / react-slick.

### Environment variables

Read via `import.meta.env` (Vite, so must be `VITE_`-prefixed): `VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_DATOCMS_API_TOKEN`, `VITE_DATOCMS_ENVIRONMENT` (defaults to `main`), `VITE_API_URL`. They are baked in at build time; the Azure workflow currently only injects `VITE_API_URL` from GitHub secrets, so any other var needed in production must be added to the workflow's `env:` block.

## Conventions and gotchas

- **Import aliases**: `components/*`, `constants/*`, `utils/*`, `assets/*`, `types/*`, `hooks/*`, `styles/*`, `pages/*` resolve to `src/…`. They are defined in **both** `vite.config.ts` (`resolve.alias`) and `tsconfig.app.json` (`paths`, with `baseUrl: "src"`) — keep them in sync. `baseUrl` also lets type-only imports like `datocms/types/project` resolve in tsc, but Vite has no `datocms` alias, so use relative paths for runtime imports from `src/datocms`.
- **Jest does not know the aliases**: `jest.config.ts` only maps style files (`identity-obj-proxy`). A test for a component that imports via an alias will fail to resolve unless a `moduleNameMapper` entry is added.
- **Styling**: Tailwind CSS 4 via `@tailwindcss/vite` (no tailwind.config file). Theme colors and the custom `1280` breakpoint are declared with `@theme` in `src/index.css`. Per-component SCSS files are imported for side effects.
- TypeScript is strict with `noUnusedLocals`/`noUnusedParameters` and `verbatimModuleSyntax` — use `import type` for type-only imports or `npm run build` fails.
- `assets/index-*.js|css` at the repo root are stale committed build artifacts, not source; real assets are in `src/assets/`.
