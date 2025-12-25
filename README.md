# ELNET Group Website

Modern marketing site for ELNET Investment Holding Company highlighting subsidiaries, products, CSR initiatives, and corporate story. Built with TypeScript, React, Tailwind CSS, and componentized layout primitives to keep the design cohesive and maintainable.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features
- Hero landing experience with animated stats and CTAs
- Modular sections for “Why ELNET”, products, subsidiaries, CSR, and navigation to all pages
- Product grid with progressive reveal (“View More Products”) and expandable descriptions
- Data-driven content (products, subsidiaries, values, reasons) stored in `src/data`
- Smooth hash-based scrolling (`/#products`) handled via custom `ScrollToTop`
- Responsive navigation with mobile drawer, Tailwind-powered theming, and reusable `Section`, `Card`, `Hero`, `Button` components

## Tech Stack
- **React 18 + TypeScript**
- **Tailwind CSS** for utility-first styling
- **React Router v6** for page routing and hash navigation
- **Create React App** build tooling (Webpack, Babel, Jest)

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+

### Installation
```bash
git clone <repo-url>
cd elnet-group-website
npm install
```

### Running Locally
```bash
npm start
```
App runs at `http://localhost:3000/` with hot reload.

## Scripts
| Command | Description |
| --- | --- |
| `npm start` | Runs dev server with live reload. |
| `npm test` | Launches Jest/React Testing Library watcher. |
| `npm run build` | Produces production build in `build/`. |
| `npm run eject` | Provides direct control over CRA config (irreversible). |

## Local Development Process
1. **Install dependencies** (first time or after pulling new packages)\
   `npm install`
2. **Run the dev server** for instant feedback while editing components, pages, or data\
   `npm start`
3. **Iterate on UI/content** using Tailwind utility classes and modular components in `src/components` and `src/pages`.
4. **Run tests** before pushing to ensure behavior didn’t regress\
   `npm test`
5. **Create an optimized build** when you’re ready to deploy or verify production assets\
   `npm run build`
6. **Manually verify navigation + hash scrolling** (`/#products`), responsive breakpoints, and expandable product cards in the local browser.

## Project Structure
```
elnet-group-website/
├── public/                # Static assets served as-is
├── src/
│   ├── components/        # Reusable UI (Navigation, Hero, Section, Card…)
│   ├── pages/             # Route components (Home, About, Products, CSR…)
│   ├── data/              # Structured content powering sections
│   ├── utils/             # Helpers like SEO metadata + Scroll behavior
│   └── index.tsx          # App bootstrap
├── tailwind.config.js     # Tailwind theme configuration
├── tsconfig.json          # TypeScript compiler settings
└── package.json
```

## Environment Variables
No custom runtime variables are required today. If you add APIs (e.g., CMS, forms), prefer CRA-style env vars (`REACT_APP_*`) and document them here.

## Deployment
1. Build the app: `npm run build`
2. Deploy the `build/` directory to any static host (Netlify, Vercel, S3, Azure Static Web Apps, etc.)
3. Ensure your host rewrites all routes to `index.html` for SPA navigation.

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/awesome-thing`
3. Commit your changes: `git commit -m "feat: add awesome thing"`
4. Push and open a Pull Request

Please run `npm run build` (or at minimum `npm start` locally) before submitting to ensure TypeScript and linting pass.
