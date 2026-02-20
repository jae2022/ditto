# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Turbopack) at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 app using the **App Router** (`app/` directory), React 19, TypeScript, and Tailwind CSS v4.

- `app/layout.tsx` — Root layout with Geist Sans/Mono fonts loaded via `next/font/google`
- `app/globals.css` — Global styles; Tailwind imported via `@import "tailwindcss"` (v4 syntax, not `@tailwind` directives). CSS variables drive `--background`/`--foreground` with automatic dark mode via `prefers-color-scheme`.
- `next.config.ts` — Minimal config; `devIndicators: false` is set.

**Path alias:** `@/*` maps to the repo root (e.g., `@/app/...`, `@/components/...`).

**ESLint:** Uses `eslint-config-next` core-web-vitals + TypeScript preset with flat config format (`eslint.config.mjs`).
