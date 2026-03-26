# AgentPlex Landing Page — Design Spec

## Overview

A single-page marketing site for AgentPlex, a desktop app for orchestrating multiple coding agent sessions (Claude, Codex, Copilot) with real-time graph visualization. Built with Vite + React + TypeScript + Tailwind CSS. Visual style mirrors the Cryptix Framer template: clean sections, generous whitespace, card-based layouts, dark theme.

## Tech Stack

- **Build:** Vite
- **UI:** React 18 + TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** CSS transitions (no heavy animation library)
- **Deployment:** Static build, deployable anywhere

## Color System

Pulled from the AgentPlex app's existing theme:

| Token | Value | Usage |
|-------|-------|-------|
| `bg-primary` | `#262420` | Page background |
| `bg-surface` | `#302c28` | Cards, elevated elements |
| `bg-inset` | `#1e1c18` | Nav, footer, recessed areas |
| `accent` | `#d18a7a` | CTAs, highlights, active links |
| `accent-hover` | `#dfa898` | Hover states |
| `accent-active` | `#b87060` | Pressed states |
| `text-primary` | `#ece4d8` | Headings, body text |
| `text-muted` | `#9a8a70` | Secondary/descriptive text |
| `success` | `#a8c878` | Status indicators |
| `warning` | `#e8c070` | Badges |
| `error` | `#e07070` | Error states |

## Typography

- **Font:** Inter (loaded from Google Fonts)
- **Hero heading:** 56px / bold
- **Section headings:** 36px / bold
- **Card titles:** 20px / semibold
- **Body:** 16px / regular
- **Small/muted:** 14px / regular

## Layout

- Full-width sections with `max-w-[1200px]` centered container
- Vertical section padding: 80-100px
- Card grid gaps: 24px
- Fully responsive: 4-col -> 2-col -> 1-col on mobile

## Image Placeholders

The following slots accept user-provided images. All images go in `public/images/`:

| Slot | File | Dimensions | Where used |
|------|------|------------|------------|
| Logo | `public/images/logo.svg` | ~40px height | Nav, Footer |
| Hero screenshot | `public/images/hero-screenshot.png` | 1200x700 recommended | Hero section, below CTAs |
| Showcase screenshot | `public/images/showcase-screenshot.png` | 600x400 recommended | Product Showcase right column |
| Feature icon 1 | `public/images/icon-graph.svg` | 48x48 | Features grid — Visual Graph Canvas |
| Feature icon 2 | `public/images/icon-sessions.svg` | 48x48 | Features grid — Multi-Session Management |
| Feature icon 3 | `public/images/icon-subagent.svg` | 48x48 | Features grid — Sub-Agent Tracking |
| Feature icon 4 | `public/images/icon-alert.svg` | 48x48 | Features grid — HITL Alerts |
| Windows icon | `public/images/icon-windows.svg` | 20x20 | Download button icon |
| Social/GitHub icon | `public/images/icon-github.svg` | 24x24 | Footer |

Until real images are provided, placeholders will be rendered (gray rounded rects with labels for screenshots, simple SVG shapes for icons).

## Sections

### 1. Navigation (sticky)

- Background: `bg-inset` (`#1e1c18`), slight transparency + backdrop blur
- Height: 64px
- **Left:** AgentPlex logo (linked to top)
- **Center:** Features | How it Works | FAQ | Blog (smooth-scroll anchors, Blog links to `/blog` or `#`)
- **Right:** "Download for Windows" button (accent filled, with Windows icon)
- Mobile: hamburger menu collapsing center links

### 2. Hero

- Background: `bg-primary` (`#262420`)
- Centered text alignment
- **Headline:** "Orchestrate Your Coding Agents, Visually" (56px bold, `text-primary`)
- **Subtitle:** "Run multiple Claude, Codex, and Copilot sessions side-by-side with real-time graph visualization and cross-session coordination." (18px, `text-muted`)
- **CTAs (row, centered):**
  - Primary: "Download for Windows" (filled accent button with Windows icon)
  - Secondary: "Learn More" (ghost/outlined button, scrolls to Features)
- **Social proof pill** below CTAs: star icon + "Built for developers who orchestrate AI workflows" (`bg-surface` rounded pill)
- **Hero image:** Full-width product screenshot below text block, with subtle shadow/glow

### 3. Features — "Why Choose AgentPlex?"

- Background: `bg-primary`
- Section label pill: "Features" (small, `bg-surface`, `text-muted`)
- Section heading: "Why Choose AgentPlex?" (36px bold, centered)
- **4-column grid** of cards on `bg-surface` with 1px border `rgba(255,255,255,0.06)`:
  1. **Visual Graph Canvas** — icon + title + "Drag-and-drop session nodes on an interactive canvas to organize your workflow"
  2. **Multi-Session Management** — icon + title + "Run Claude, Codex, and Copilot sessions simultaneously in one workspace"
  3. **Sub-Agent Tracking** — icon + title + "Automatically detect and visualize spawned sub-agents in real time"
  4. **Human-in-the-Loop Alerts** — icon + title + "Get notified instantly when a session needs your input"
- Cards have 24px padding, 12px border-radius, subtle hover: translate-y -2px + shadow

### 4. Product Showcase — "Every Agent, One Canvas"

- Background: `bg-primary`
- **Two-column layout** (text left, image right), vertically centered
- **Left column:**
  - Label pill: "All-in-One Platform"
  - Headline: "Every Agent, One Canvas" (36px bold)
  - Description: "Manage Claude, Codex, Copilot, and shell sessions from a single visual workspace. Share context between sessions, track plans and tasks, and never lose sight of what your agents are doing." (`text-muted`)
  - CTA: "Download for Windows" button
- **Right column:** Product screenshot (showcase-screenshot.png) with rounded corners and subtle shadow
- Mobile: stacks vertically, image below text

### 5. How It Works

- Background: `bg-surface` (`#302c28`) — contrasting section bg
- Section label pill: "Getting Started"
- Heading: "How It Works" (centered)
- **3 cards in a row**, each with:
  - Step number in accent-colored circle (1, 2, 3)
  - Title (20px semibold)
  - Description (`text-muted`)
- Steps:
  1. **Launch AgentPlex** — "Download and open the app on Windows"
  2. **Start Your Sessions** — "Spin up Claude, Codex, or Copilot sessions in any working directory"
  3. **Orchestrate Visually** — "Arrange, monitor, and coordinate agents on the graph canvas"
- CTA below: "Get Started Now" button (centered)

### 6. FAQ

- Background: `bg-primary`
- Heading: "Frequently Asked Questions" (centered)
- **Accordion** items, max-width 768px centered:
  - "What is AgentPlex?" — AgentPlex is a desktop application for orchestrating multiple coding agent sessions with real-time graph visualization and cross-session communication.
  - "Which coding agents does AgentPlex support?" — Claude CLI, OpenAI Codex, GitHub Copilot, plus PowerShell and Bash sessions.
  - "How does cross-session messaging work?" — You can send context from one session to another, with optional AI-powered summarization using Claude Haiku.
  - "Is AgentPlex free?" — Yes, AgentPlex is free and open-source.
  - "What platforms are supported?" — Windows is supported now with a pre-built installer. macOS and Linux support is coming soon (build from source available now).
  - "Do I need API keys to use AgentPlex?" — You need your own Claude/Codex API keys for the AI sessions. An optional AGENTPLEX_API_KEY enables cross-session summarization.
- Accordion items: `bg-surface` cards, click to expand/collapse with smooth height transition, chevron rotates on open

### 7. Final CTA

- Background: `bg-surface` with subtle radial gradient glow from accent color at center
- Centered layout
- **Headline:** "Ready to Orchestrate Your Coding Agents?" (36px bold)
- **Subtitle:** "Join developers who are managing complex AI workflows with a visual-first approach." (`text-muted`)
- **CTA:** "Download for Windows" button (large, accent filled)

### 8. Footer

- Background: `bg-inset` (`#1e1c18`)
- **Three-column layout:**
  - Left: AgentPlex logo + short tagline ("Orchestrate coding agents visually")
  - Center: Nav links (Features, How it Works, FAQ, Blog)
  - Right: GitHub link icon
- **Bottom bar:** Copyright "2026 AgentPlex. All rights reserved." (`text-muted`, small)

## Interactive Behaviors

- **Smooth scroll:** Nav links scroll to section anchors
- **Sticky nav:** Fixed to top on scroll, with subtle shadow after scrolling past hero
- **FAQ accordion:** Click to toggle, smooth height animation, one item open at a time
- **Button hovers:** Background shifts to `accent-hover`, subtle scale(1.02)
- **Card hovers:** translateY(-2px) + box-shadow increase
- **Mobile nav:** Hamburger menu toggling a slide-down menu

## Responsive Breakpoints

| Breakpoint | Layout changes |
|------------|---------------|
| `>=1024px` | Full desktop layout, 4-col features, 2-col showcase |
| `768-1023px` | 2-col features, 2-col showcase |
| `<768px` | 1-col everything, stacked hero, hamburger nav |

## File Structure

```
website-plex/
  public/
    images/          <-- user drops images here
      logo.svg
      hero-screenshot.png
      showcase-screenshot.png
      icon-graph.svg
      icon-sessions.svg
      icon-subagent.svg
      icon-alert.svg
      icon-windows.svg
      icon-github.svg
  src/
    main.tsx         <-- React entry
    App.tsx          <-- Root component, section layout
    index.css        <-- Tailwind imports + custom properties
    components/
      Navbar.tsx
      Hero.tsx
      Features.tsx
      Showcase.tsx
      HowItWorks.tsx
      FAQ.tsx
      FinalCTA.tsx
      Footer.tsx
  index.html
  package.json
  tailwind.config.ts
  tsconfig.json
  vite.config.ts
```
