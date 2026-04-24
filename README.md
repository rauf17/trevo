# Trevo

Trevo is a high-fidelity visual folder structure generator designed to help developers seamlessly scaffold, visualize, and export project architectures. Featuring a dynamic interactive tree UI, robust project templates, and a sleek, precision-engineered dark mode aesthetic, Trevo makes architecting robust applications faster and highly intuitive.

## Features

- **Interactive Architecture Visualization:** Traverse files and directories with a performant, animated Tree View UI.
- **Expansive Template Library:** 25 production-ready boilerplate configurations covering modern web, backend, CLI, DevOps, and game development environments.
- **Instant Previews & Filters:** Dynamic file search with real-time blur-fading and highlighting, plus detailed root structure previews on hover.
- **Fluid Micro-Interactions:** 3D perspective flips between IDE and ASCII views, scrolling frosted-glass navigation, and beautifully staggered entrance animations.
- **Zero-Dependency Styling:** Fully native CSS animation logic built atop a comprehensive bespoke design system.

## Tech Stack

- **Framework:** Next.js (App Router)
- **UI & Components:** React, Tailwind CSS
- **Typography:** Inter Variable, Berkeley Mono

## Setup & Installation

### Prerequisites

Ensure you have Node.js (v18+) and npm installed.

### Development

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd trevo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

To generate a production-ready build:

```bash
npm run build
npm run start
```

## Project Structure

```text
trevo/
├── app/               # Next.js App Router layout and pages
├── components/        # Reusable UI components (Sidebar, TreeView, Toolbar)
├── data/              # Core templates and node definitions
├── public/            # Static assets and favicon
├── utils/             # Helper utilities for string/tree processing
└── styles/            # Global stylesheets
```

## Design System

Trevo is built atop a proprietary, fully-fledged design system defined in `DESIGN.md`. It adheres to a strict dark-mode-first aesthetic heavily utilizing `rgba` translucency, tight typographic constraints via Inter Variable, and precision spacing. Refer to `DESIGN.md` for full implementation details regarding component styling, elevation mechanics, and typography specifications.
