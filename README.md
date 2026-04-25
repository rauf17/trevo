# 🌿 Trevo — Folder Structure Generator

> **tree + evolve** · A modern developer tool for visualizing and exporting clean folder structures across 25 tech stacks.

🔗 **Live Demo:** https://trevo-xi.vercel.app

---

## ✨ Features

- 🗂️ **25 Project Templates** — Next.js, React, Vue, Angular, Django, Go, Rust, Flutter, and more
- 🌲 **IDE View** — Interactive collapsible file tree with color-coded extensions
- 📟 **ASCII View** — Terminal-style tree ready to paste into any README
- 🔍 **Live File Search** — Filter and highlight files instantly as you type
- 📋 **Copy to Clipboard** — One-click ASCII export with toast confirmation
- 💾 **Download as .txt** — Save any structure locally
- 📊 **Stats Bar** — Files count, folders count, and depth level per template
- ⚡ **Zero Backend** — Fully client-side, works offline, never breaks
- 🎨 **Linear-inspired UI** — Dark mode, smooth animations, premium feel

---

## 📸 Screenshots

### Splash Screen
<img width="1920" height="874" alt="image" src="https://github.com/user-attachments/assets/f09d997d-dcab-4b9f-b7aa-0537bf1983c3" />

### Template Browser
<img width="1920" height="871" alt="image" src="https://github.com/user-attachments/assets/18ff9388-604c-4f73-ac50-35022b94c554" />

### IDE Tree View
<img width="1473" height="840" alt="image" src="https://github.com/user-attachments/assets/71171ced-09e2-4e49-a3ed-362a72eb618c" />

### ASCII View
<img width="1200" height="837" alt="image" src="https://github.com/user-attachments/assets/21b75049-6024-4c50-b15c-6c726a9c492c" />

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Design System:** Linear-inspired dark theme
- **Deployment:** Vercel

---

## 🚀 Getting Started

Clone the repo and run locally:

```bash
git clone https://github.com/rauf17/trevo.git
cd trevo
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure
```text
trevo/
├── app/                  # Next.js App Router pages
├── components/           # Reusable UI components
│   ├── Sidebar.tsx       # Template browser + search
│   ├── TreeView.tsx      # IDE file tree renderer
│   ├── Toolbar.tsx       # Action buttons + view switcher
│   ├── Particles.tsx     # Background particle effect
│   └── Toast.tsx         # Copy confirmation toast
├── data/
│   └── templates.ts      # All 25 project templates
├── utils/
│   └── treeToAscii.ts    # ASCII tree generator
└── public/
    └── favicon.svg       # Custom SVG favicon
```

## 🎯 Supported Tech Stacks

| Category | Templates |
|----------|-----------|
| Frontend | Next.js, React+Vite, SvelteKit, Nuxt 3, Remix, Vue 3, SolidJS, Angular 17, Electron |
| Backend | Express REST, FastAPI, Django REST, Go Gin, Java Spring Boot, GraphQL API |
| Fullstack | T3 Stack, PHP Laravel |
| Mobile | React Native, Flutter, Android Kotlin, React Native Expo |
| CLI | Node.js CLI, Rust CLI, C++ CMake, C Systems |
| DevOps | Docker+Nginx, Kubernetes+Helm |
| Other | Unity Game, Python Data Science |

---

## 🤝 Contributing

Contributions are welcome! If you want to add a new template:

1. Fork the repo
2. Add your template to `data/templates.ts`
3. Follow the existing `TreeNode` structure
4. Submit a pull request

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/rauf17">rauf17</a></p>
  <p>⭐ Star this repo if you found it useful!</p>
</div>
