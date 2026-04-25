const fs = require('fs');

let content = fs.readFileSync('c:\\Users\\AR\\Desktop\\Projects\\trevo\\foliostructure\\data\\templates.ts', 'utf8');

const tagsMap = {
  "nextjs-app": ["Next.js", "Tailwind", "TypeScript"],
  "react-vite": ["React", "Vite", "SWC"],
  "express-rest": ["Express", "MongoDB", "JWT"],
  "react-native": ["Expo", "TypeScript", "NativeWind"],
  "node-cli": ["Commander.js", "Inquirer", "Node.js"],
  "turborepo": ["Turborepo", "pnpm", "TypeScript"],
  "python-fastapi": ["FastAPI", "SQLAlchemy", "Alembic"],
  "flutter-app": ["Dart", "Riverpod", "Freezed"],
  "sveltekit-app": ["SvelteKit", "Tailwind", "TypeScript"],
  "t3-stack": ["tRPC", "Prisma", "NextAuth"],
  "django-rest": ["Django", "DRF", "PostgreSQL"],
  "rust-cli": ["Rust", "Cargo", "Clap"],
  "android-compose": ["Kotlin", "Jetpack Compose", "Hilt"],
  "docker-nginx": ["Docker", "Nginx", "Prometheus"]
};

// Replace tags for each template if they don't already have them
for (const [id, tags] of Object.entries(tagsMap)) {
  const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?category:\\s*"[^"]+",)`, 'g');
  content = content.replace(regex, `$1\n    tags: ${JSON.stringify(tags)},`);
}

// Append new templates before the last ];
const newTemplatesStr = `,
  {
    id: "astro-blog",
    name: "Astro Blog",
    description: "Fast content-focused website using Astro, Tailwind, and MDX.",
    icon: "🚀",
    category: "Frontend",
    tags: ["Astro", "Tailwind", "MDX"],
    tree: [
      {
        name: "public",
        type: "folder",
        children: [
          { name: "favicon.svg", type: "file" },
          { name: "og-image.png", type: "file" }
        ]
      },
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "components",
            type: "folder",
            children: [
              { name: "BlogCard.astro", type: "file" },
              { name: "Footer.astro", type: "file" },
              { name: "Header.astro", type: "file" },
              { name: "Hero.astro", type: "file" }
            ]
          },
          {
            name: "content",
            type: "folder",
            children: [
              {
                name: "blog",
                type: "folder",
                children: [
                  { name: "first-post.md", type: "file" },
                  { name: "second-post.md", type: "file" }
                ]
              },
              { name: "config.ts", type: "file" }
            ]
          },
          {
            name: "layouts",
            type: "folder",
            children: [
              { name: "BaseLayout.astro", type: "file" },
              { name: "BlogLayout.astro", type: "file" }
            ]
          },
          {
            name: "pages",
            type: "folder",
            children: [
              {
                name: "blog",
                type: "folder",
                children: [
                  { name: "[slug].astro", type: "file" },
                  { name: "index.astro", type: "file" }
                ]
              },
              { name: "about.astro", type: "file" },
              { name: "index.astro", type: "file" }
            ]
          },
          {
            name: "styles",
            type: "folder",
            children: [
              { name: "global.css", type: "file" }
            ]
          },
          {
            name: "types",
            type: "folder",
            children: [
              { name: "blog.ts", type: "file" }
            ]
          },
          {
            name: "utils",
            type: "folder",
            children: [
              { name: "formatDate.ts", type: "file" }
            ]
          }
        ]
      },
      { name: ".env.example", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: "astro.config.mjs", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "tailwind.config.mjs", type: "file" },
      { name: "tsconfig.json", type: "file" }
    ]
  },
  {
    id: "nuxt3-app",
    name: "Nuxt 3 App",
    description: "Intuitive Vue framework setup with auto-imports and server routes.",
    icon: "💚",
    category: "Frontend",
    tags: ["Nuxt", "Vue 3", "Pinia"],
    tree: [
      {
        name: "assets",
        type: "folder",
        children: [
          {
            name: "css",
            type: "folder",
            children: [
              { name: "main.css", type: "file" }
            ]
          },
          {
            name: "images",
            type: "folder",
            children: [
              { name: ".gitkeep", type: "file" }
            ]
          }
        ]
      },
      {
        name: "components",
        type: "folder",
        children: [
          {
            name: "ui",
            type: "folder",
            children: [
              { name: "Button.vue", type: "file" },
              { name: "Card.vue", type: "file" }
            ]
          },
          { name: "AppFooter.vue", type: "file" },
          { name: "AppHeader.vue", type: "file" }
        ]
      },
      {
        name: "composables",
        type: "folder",
        children: [
          { name: "useAuth.ts", type: "file" },
          { name: "useFetch.ts", type: "file" }
        ]
      },
      {
        name: "layouts",
        type: "folder",
        children: [
          { name: "auth.vue", type: "file" },
          { name: "default.vue", type: "file" }
        ]
      },
      {
        name: "middleware",
        type: "folder",
        children: [
          { name: "auth.ts", type: "file" }
        ]
      },
      {
        name: "pages",
        type: "folder",
        children: [
          {
            name: "blog",
            type: "folder",
            children: [
              { name: "[slug].vue", type: "file" },
              { name: "index.vue", type: "file" }
            ]
          },
          { name: "about.vue", type: "file" },
          { name: "index.vue", type: "file" }
        ]
      },
      {
        name: "plugins",
        type: "folder",
        children: [
          { name: "axios.ts", type: "file" }
        ]
      },
      {
        name: "server",
        type: "folder",
        children: [
          {
            name: "api",
            type: "folder",
            children: [
              {
                name: "auth",
                type: "folder",
                children: [
                  { name: "login.post.ts", type: "file" }
                ]
              },
              { name: "users.get.ts", type: "file" }
            ]
          }
        ]
      },
      {
        name: "stores",
        type: "folder",
        children: [
          { name: "auth.ts", type: "file" },
          { name: "user.ts", type: "file" }
        ]
      },
      { name: ".env", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: "nuxt.config.ts", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "tailwind.config.ts", type: "file" },
      { name: "tsconfig.json", type: "file" }
    ]
  },
  {
    id: "remix-app",
    name: "Remix App",
    description: "Fullstack web framework that lets you focus on the user interface.",
    icon: "💿",
    category: "Frontend",
    tags: ["Remix", "Prisma", "Tailwind"],
    tree: [
      {
        name: "app",
        type: "folder",
        children: [
          {
            name: "components",
            type: "folder",
            children: [
              {
                name: "ui",
                type: "folder",
                children: [
                  { name: "Button.tsx", type: "file" },
                  { name: "Input.tsx", type: "file" }
                ]
              },
              { name: "Footer.tsx", type: "file" },
              { name: "Navbar.tsx", type: "file" }
            ]
          },
          {
            name: "hooks",
            type: "folder",
            children: [
              { name: "useUser.ts", type: "file" }
            ]
          },
          {
            name: "routes",
            type: "folder",
            children: [
              { name: "_index.tsx", type: "file" },
              { name: "about.tsx", type: "file" },
              { name: "auth.login.tsx", type: "file" },
              { name: "auth.register.tsx", type: "file" },
              { name: "dashboard._index.tsx", type: "file" },
              { name: "dashboard.settings.tsx", type: "file" }
            ]
          },
          {
            name: "styles",
            type: "folder",
            children: [
              { name: "tailwind.css", type: "file" }
            ]
          },
          {
            name: "utils",
            type: "folder",
            children: [
              { name: "db.server.ts", type: "file" },
              { name: "session.server.ts", type: "file" }
            ]
          },
          { name: "entry.client.tsx", type: "file" },
          { name: "entry.server.tsx", type: "file" },
          { name: "root.tsx", type: "file" }
        ]
      },
      {
        name: "public",
        type: "folder",
        children: [
          { name: "favicon.ico", type: "file" },
          { name: "robots.txt", type: "file" }
        ]
      },
      { name: ".env", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "remix.config.js", type: "file" },
      { name: "tailwind.config.ts", type: "file" },
      { name: "tsconfig.json", type: "file" }
    ]
  },
  {
    id: "vue3-vite",
    name: "Vue 3 + Vite",
    description: "Progressive JavaScript framework initialized with fast Vite tooling.",
    icon: "🟢",
    category: "Frontend",
    tags: ["Vue 3", "Pinia", "Vue Router"],
    tree: [
      {
        name: "public",
        type: "folder",
        children: [
          { name: "favicon.ico", type: "file" }
        ]
      },
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "assets",
            type: "folder",
            children: [
              { name: "base.css", type: "file" },
              { name: "main.css", type: "file" }
            ]
          },
          {
            name: "components",
            type: "folder",
            children: [
              {
                name: "ui",
                type: "folder",
                children: [
                  { name: "BaseButton.vue", type: "file" },
                  { name: "BaseInput.vue", type: "file" },
                  { name: "BaseModal.vue", type: "file" }
                ]
              },
              { name: "AppFooter.vue", type: "file" },
              { name: "AppHeader.vue", type: "file" }
            ]
          },
          {
            name: "composables",
            type: "folder",
            children: [
              { name: "useApi.ts", type: "file" },
              { name: "useAuth.ts", type: "file" }
            ]
          },
          {
            name: "router",
            type: "folder",
            children: [
              { name: "index.ts", type: "file" }
            ]
          },
          {
            name: "stores",
            type: "folder",
            children: [
              { name: "auth.ts", type: "file" },
              { name: "user.ts", type: "file" }
            ]
          },
          {
            name: "types",
            type: "folder",
            children: [
              { name: "index.ts", type: "file" }
            ]
          },
          {
            name: "views",
            type: "folder",
            children: [
              { name: "AboutView.vue", type: "file" },
              { name: "DashboardView.vue", type: "file" },
              { name: "HomeView.vue", type: "file" },
              { name: "LoginView.vue", type: "file" }
            ]
          },
          { name: "App.vue", type: "file" },
          { name: "main.ts", type: "file" }
        ]
      },
      { name: ".env", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "tailwind.config.ts", type: "file" },
      { name: "tsconfig.json", type: "file" },
      { name: "vite.config.ts", type: "file" }
    ]
  },
  {
    id: "solidjs-vite",
    name: "SolidJS + Vite",
    description: "Simple and performant reactivity for building user interfaces.",
    icon: "⚡",
    category: "Frontend",
    tags: ["SolidJS", "Vite", "TypeScript"],
    tree: [
      {
        name: "public",
        type: "folder",
        children: [
          { name: "favicon.ico", type: "file" }
        ]
      },
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "components",
            type: "folder",
            children: [
              {
                name: "ui",
                type: "folder",
                children: [
                  { name: "Button.tsx", type: "file" },
                  { name: "Input.tsx", type: "file" }
                ]
              },
              { name: "Footer.tsx", type: "file" },
              { name: "Navbar.tsx", type: "file" }
            ]
          },
          {
            name: "hooks",
            type: "folder",
            children: [
              { name: "useAuth.ts", type: "file" },
              { name: "useFetch.ts", type: "file" }
            ]
          },
          {
            name: "pages",
            type: "folder",
            children: [
              { name: "About.tsx", type: "file" },
              { name: "Dashboard.tsx", type: "file" },
              { name: "Home.tsx", type: "file" }
            ]
          },
          {
            name: "stores",
            type: "folder",
            children: [
              { name: "auth.ts", type: "file" },
              { name: "counter.ts", type: "file" }
            ]
          },
          {
            name: "styles",
            type: "folder",
            children: [
              { name: "app.css", type: "file" },
              { name: "index.css", type: "file" }
            ]
          },
          {
            name: "types",
            type: "folder",
            children: [
              { name: "index.ts", type: "file" }
            ]
          },
          {
            name: "utils",
            type: "folder",
            children: [
              { name: "helpers.ts", type: "file" }
            ]
          },
          { name: "App.tsx", type: "file" },
          { name: "index.tsx", type: "file" }
        ]
      },
      { name: ".env", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "tsconfig.json", type: "file" },
      { name: "vite.config.ts", type: "file" }
    ]
  },
  {
    id: "angular-17",
    name: "Angular 17 App",
    description: "Modern Angular web platform utilizing standalone components.",
    icon: "🔴",
    category: "Frontend",
    tags: ["Angular", "RxJS", "TypeScript"],
    tree: [
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "app",
            type: "folder",
            children: [
              {
                name: "components",
                type: "folder",
                children: [
                  {
                    name: "footer",
                    type: "folder",
                    children: [
                      { name: "footer.component.ts", type: "file" }
                    ]
                  },
                  {
                    name: "navbar",
                    type: "folder",
                    children: [
                      { name: "navbar.component.ts", type: "file" }
                    ]
                  }
                ]
              },
              {
                name: "guards",
                type: "folder",
                children: [
                  { name: "auth.guard.ts", type: "file" }
                ]
              },
              {
                name: "interceptors",
                type: "folder",
                children: [
                  { name: "auth.interceptor.ts", type: "file" }
                ]
              },
              {
                name: "models",
                type: "folder",
                children: [
                  { name: "user.model.ts", type: "file" }
                ]
              },
              {
                name: "pages",
                type: "folder",
                children: [
                  {
                    name: "auth",
                    type: "folder",
                    children: [
                      {
                        name: "login",
                        type: "folder",
                        children: [
                          { name: "login.component.ts", type: "file" }
                        ]
                      }
                    ]
                  },
                  {
                    name: "dashboard",
                    type: "folder",
                    children: [
                      { name: "dashboard.component.html", type: "file" },
                      { name: "dashboard.component.ts", type: "file" }
                    ]
                  },
                  {
                    name: "home",
                    type: "folder",
                    children: [
                      { name: "home.component.html", type: "file" },
                      { name: "home.component.ts", type: "file" }
                    ]
                  }
                ]
              },
              {
                name: "services",
                type: "folder",
                children: [
                  { name: "api.service.ts", type: "file" },
                  { name: "auth.service.ts", type: "file" }
                ]
              },
              { name: "app.component.html", type: "file" },
              { name: "app.component.ts", type: "file" },
              { name: "app.config.ts", type: "file" },
              { name: "app.routes.ts", type: "file" }
            ]
          },
          {
            name: "environments",
            type: "folder",
            children: [
              { name: "environment.prod.ts", type: "file" },
              { name: "environment.ts", type: "file" }
            ]
          },
          { name: "main.ts", type: "file" },
          { name: "styles.css", type: "file" }
        ]
      },
      { name: ".gitignore", type: "file" },
      { name: "angular.json", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "tsconfig.app.json", type: "file" },
      { name: "tsconfig.json", type: "file" }
    ]
  }
];
`;

content = content.replace(/\];\s*$/, newTemplatesStr);

fs.writeFileSync('c:\\Users\\AR\\Desktop\\Projects\\trevo\\foliostructure\\data\\templates.ts', content, 'utf8');

console.log('Update complete!');
