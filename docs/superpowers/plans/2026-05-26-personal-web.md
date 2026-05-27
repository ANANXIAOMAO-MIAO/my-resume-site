# Personal Web Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a lightweight static personal portfolio for HR and interviewers, centered on psychology, AI product thinking, and content/training capability.

**Architecture:** Use Astro for static pages, TypeScript for structured profile data, and plain CSS for a clean responsive visual system. Keep all resume/project content in `src/content/profile.ts`, while pages and components only render that data.

**Tech Stack:** Astro, TypeScript, minimal React only if an interaction later needs it, CSS, Vercel/GitHub Pages compatible static output.

---

### Task 1: Scaffold Astro Project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/`
- Create: `public/`

- [ ] Initialize a minimal Astro + TypeScript project in the empty workspace.
- [ ] Add scripts for `dev`, `build`, `preview`, and `astro check`.
- [ ] Verify the project installs and Astro can run.

### Task 2: Define Content Contract

**Files:**
- Create: `src/content/profile.ts`

- [ ] Define typed sections for profile, contacts, education, experience, and projects.
- [ ] Add 4-6 realistic placeholder projects, with 2-3 marked `featured`.
- [ ] Include fields for project challenge, solution, result, gallery images, and links.

### Task 3: Build Page Structure

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/pages/index.astro`
- Create: `src/pages/projects/[slug].astro`
- Create: `src/components/*.astro`

- [ ] Render the homepage sections from `profile.ts`.
- [ ] Generate project detail pages from project slugs.
- [ ] Keep education and work experience complete on the homepage.
- [ ] Add clear fallback rendering for optional links and media.

### Task 4: Add Visual System

**Files:**
- Create: `src/styles/global.css`

- [ ] Implement the clean AI-product visual direction: light neutral backgrounds, blue-gray surfaces, and red accents.
- [ ] Add roomy responsive layout, rounded cards, readable typography, and mobile-first behavior.
- [ ] Add restrained hover and entrance effects without blocking readability.

### Task 5: Verify

**Files:**
- Modify only as needed based on verification output.

- [ ] Run `npm run check`.
- [ ] Run `npm run build`.
- [ ] Read diagnostics for edited files.
- [ ] Fix introduced issues and rerun verification.
