# Project Structure

```
daedalus_website/
│
├── next.config.mjs          → Next.js config (empty/default — no custom options yet)
├── jsconfig.json            → JS path alias: "@/*" maps to project root
├── eslint.config.mjs        → ESLint config (flat config format, Next.js rules)
├── package.json             → Dependencies and npm scripts (dev, build, start, lint)
├── STRUCTURE.md             → This file — annotated project file tree
├── .gitignore               → Excludes node_modules, .next, build artifacts
│
├── public/                  → Static assets served at "/"
│   ├── logo.svg             → Static brand logo: "(D)AEDALUS" tspan with accent/white
│   ├── file.svg             → Next.js scaffold default icon (unused)
│   ├── globe.svg            → Next.js scaffold default icon (unused)
│   ├── next.svg             → Next.js scaffold default icon (unused)
│   ├── vercel.svg           → Next.js scaffold default icon (unused)
│   └── window.svg           → Next.js scaffold default icon (unused)
│
└── app/                     → Next.js App Router root
    ├── layout.js            → Root layout — wraps all pages, imports globals.css
    ├── page.js              → Home page ("/") — orchestrates intro, scroll lock,
    │                          and renders all page sections in order
    ├── globals.css          → Global CSS variables (--accent, --bg, fonts),
    │                          resets, scrollbar styling, and base typography
    ├── page.module.css      → Scoped styles for the home page sections
    ├── favicon.ico          → Browser tab icon
    │
    ├── about/
    │   ├── page.jsx         → "/about" — standalone About Us page: story,
    │   │                       beliefs, team cards, scope list, and CTA
    │   └── page.module.css  → Scoped styles for the /about page
    │
    ├── services/
    │   ├── page.jsx         → "/services" — standalone Services page
    │   └── page.module.css  → Scoped styles for the /services page
    │
    └── components/          → All reusable UI components (each paired with a CSS module)
        │
        ├── DaedalusLogo.jsx         → Brand logo: "(D)" in accent color + "AEDALUS" in white
        ├── DaedalusLogo.module.css  → Logo font (Space Mono, bold) and accent color rule
        │
        ├── IntroAnimation.jsx       → Boot/loading screen — phases: empty → name →
        │                              subtitle → exit → done; shows DAEDALUS + spinning gear
        ├── IntroAnimation.module.css → Overlay, constellation dots, progress bar,
        │                              name slide-up, gear spin, subtitle char reveal
        │
        ├── Navbar.jsx               → Fixed top nav — scroll-aware background blur,
        │                              desktop links, mobile hamburger + overlay menu
        ├── Navbar.module.css        → Nav layout, logo sizing, link styles,
        │                              hamburger, mobile menu transitions
        │
        ├── Hero.jsx                 → First section — main headline, proposal CTA button,
        │                              scroll indicator
        ├── Hero.module.css          → Hero layout, headline sizing, CTA styles
        │
        ├── Ticker.jsx               → Horizontal auto-scrolling keyword marquee
        │                              (service keywords, infinite CSS loop)
        ├── Ticker.module.css        → Marquee keyframe animation and edge fade masks
        │
        ├── Services.jsx             → "#services" — The Problem / Solution / What You Get
        │                              with animated stat counters (IntersectionObserver)
        ├── Services.module.css      → Services grid, stat cards, accent highlights
        │
        ├── Work.jsx                 → "#how" — "How It Works" 4-step process cards
        ├── Work.module.css          → Step card layout, numbered styling
        │
        ├── About.jsx                → "#about" — About Us blurb, who-it's-for list,
        │                              feature cards
        ├── About.module.css         → About section grid and feature card styles
        │
        ├── Contact.jsx              → "#contact" — FAQ accordion + proposal request form
        ├── Contact.module.css       → Accordion expand/collapse, form inputs, submit button
        │
        ├── Footer.jsx               → Site footer — logo, tagline, 4-column link grid
        │                              (Company / Connect / Legal), copyright bar
        ├── Footer.module.css        → Footer grid, responsive column collapse
        │
        ├── BackgroundAnimation.jsx  → Ambient decorative background effect rendered
        │                              behind all page content
        ├── BackgroundAnimation.module.css → Background positioning and opacity
        │
        ├── SpinningBadge.jsx        → Floating circular badge — rotating text ring
        │                              ("DAEDALUS STUDIO · EST 2026 · WEB DEV ·")
        │                              with counter-rotating gear at center
        ├── SpinningBadge.module.css → Badge fixed position, text ring and gear animations
        │
        ├── CustomCursor.jsx         → Replaces the OS cursor — dot + lagging ring that
        │                              follows the mouse; expands on hover over links/buttons;
        │                              hidden (opacity 0) during the intro animation
        └── CustomCursor.module.css  → Cursor dot/ring sizing, blend, hover transition,
                                       opacity fade-in state, hidden on touch devices
```
