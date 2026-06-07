# Development Log — adhikariganesh9813.github.io

A running log of all significant changes made to this portfolio site. Append new entries at the bottom.

---

## [2026-06-06] Initial Build — React/Vite Portfolio

**Author:** Ganesh Adhikari

**What was built:**
- React + Vite + Tailwind CSS portfolio site
- Custom design system: warm cream/teal palette (`cloud`, `ink`, `teal`, `coral`, `fog`)
- Fonts: Space Grotesk (display) + Source Serif 4 (body) via Google Fonts
- Sections: Hero, Highlights (3 cards), About Me (with slideshow), Projects (filterable), Research, Contact
- Project filter tabs (All / Data / App / Web / Others)
- Sticky header with mobile hamburger menu
- Back-to-top button
- Credly IBM Data Engineering badge inside the Data Engineering highlight card
- Hero cover image with fade mask, profile photo card
- SEO: sitemap.xml, robots.txt, manifest.json, Google verification file
- GitHub Actions deploy workflow (`docs/` folder → GitHub Pages)
- Typing animation on hero headline, reveal animations on hero content

**Key files:**
- `src/App.jsx` — main component (all sections in one file)
- `src/index.css` — Tailwind + custom component classes
- `tailwind.config.js` — color palette, fonts, shadows, keyframes
- `vite.config.js` — build output to `docs/`
- `.github/workflows/deploy.yml` — CI/CD to GitHub Pages

---

## [2026-06-06] Professional UI Redesign + Full GitHub Project Integration

**Author:** Claude (AI assistant via Claude Code)

**Changes made:**

### src/App.jsx — Full rewrite

**Professional UI improvements:**
- Added inline SVG icon components: `GitHubIcon`, `LinkedInIcon`, `ExternalLinkIcon`, `ChevronDownIcon` — no icon library needed
- Navigation: added GitHub icon button in the desktop nav bar; improved mobile menu with better close/open states and GitHub link
- Extracted reusable `ProjectCard` component — renders title, description, tags, and "View on GitHub" button consistently
- Hero: replaced email button with a "GitHub Profile" secondary CTA button alongside "View Projects"
- Contact section: added GitHub profile button alongside email and LinkedIn
- Footer: added icon next to LinkedIn and GitHub links

**Projects section restructure (expandable pattern):**
- 3 Featured projects shown by default (always visible):
  1. eLearning Web Platform — GeoTechBrain (full-stack, sole developer)
  2. Pendulum Balancing — Reinforcement Learning (Python RL agent)
  3. Focus Mode Productivity App (Electron desktop app, macOS/Windows)
- "Show All Projects (17 more)" expandable toggle button with chevron icon
- When expanded: category filter tabs (All / Data / App / Web / Research / Utility) + grid of all additional projects
- When collapsed: hides the additional projects cleanly
- Each project card has a "View on GitHub" button with GitHub icon + external link icon

**Full project list sourced from GitHub API (adhikariganesh9813):**
- ETL Pipeline Projects 1, 2, 3
- Web Scraping — Film Data to SQLite
- Text Analysis in Python
- Data Cleaning — Python & Pandas
- Data Projects 1-4 (Excel/Python/Jupyter)
- Tableau Data Visualization
- Python To Do List (macOS/Windows)
- Library Management System — OOP
- Shopping Website (HTML/CSS/JS)
- Database Design Proposal
- Research: Digital Marketing & Consumer Behavior
- Replace Text in a File

**Short descriptions written** for all 20 projects based on GitHub repo metadata.

### src/index.css — New component classes added

- `.project-card` — replaces `.card.glass` on project articles; adds hover border-color transition (teal tint) for subtle interaction feedback
- `.github-btn` — dark pill button for "View on GitHub"; turns teal on hover
- `.expand-btn` — styled expand/collapse toggle; teal-bordered pill with hover bg

**No changes to:**
- Color palette, fonts, shadows (tailwind.config.js unchanged)
- Hero layout, About section, Research section (kept as-is)
- Build system, CI/CD, SEO files

---

## [2026-06-06] Project Cleanup — Remove Unnecessary Files

**Author:** Claude (AI assistant via Claude Code)

**Files removed:**

| File/Folder | Reason |
|---|---|
| `docs/` (entire folder, git-tracked) | Stale old build output from "Deploy from branch" GitHub Pages method; CI workflow now builds and uploads `dist/` via GitHub Actions — docs/ was never needed anymore |
| `dist/` (local only, gitignored) | Leftover local build artifact; gitignored, not tracked |
| `legacy-static/css/style.css`, `legacy-static/js/script.js` | Old abandoned static site from before the React rewrite |
| `src/App.css` | Default Vite template file — never imported or used in this project |
| `src/assets/react.svg` | Default Vite template SVG — never used |
| `public/vite.svg` | Default Vite template SVG — never used |
| `DEPLOYMENT.md` | Referenced a different repo URL (`/Personal-Website-/`) — stale and wrong |
| `SEO-GUIDE.md` | Internal guide doc, not needed as a tracked project file |

**Files updated:**
- `README.md` — removed `legacy-static` reference from project structure section; pointed to `DEVELOPMENT_LOG.md` instead

**Result:** Project went from 55+ tracked files to 27 — only source, config, public assets, and CI remain.

---

_Append new entries below this line when making further changes._
