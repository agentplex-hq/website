# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for AgentPlex — a desktop app for orchestrating multiple coding agent sessions. Hosted at https://github.com/agentplex-hq/website.git.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build locally

## Tech Stack

Vite + React 18 + TypeScript + Tailwind CSS v4

## Architecture

Single-page static site. All sections are independent React components in `src/components/`, rendered sequentially by `src/App.tsx`. No routing.

**Color tokens** are defined as Tailwind v4 `@theme` variables in `src/index.css` using the AgentPlex terracotta/charcoal palette (accent: `#d18a7a`, bg: `#262420`).

**Image assets** go in `public/images/`. Placeholders render when real assets are missing.

## Sections (in render order)

Navbar (sticky) -> Hero -> Features (4-col grid) -> Showcase (2-col) -> HowItWorks (3-step) -> FAQ (accordion) -> FinalCTA -> Footer
