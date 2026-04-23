export type TreeNode = {
  name: string;
  type: "file" | "folder";
  children?: TreeNode[];
};

export type TemplateCategory = "frontend" | "backend" | "fullstack" | "mobile" | "cli" | "monorepo";

export type Template = {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: TemplateCategory;
  tree: TreeNode[];
};

export const templates: Template[] = [
  {
    id: "nextjs-app",
    name: "Next.js App",
    description: "A full-stack React framework with server-side rendering and static site generation.",
    icon: "🔺",
    category: "fullstack",
    tree: [
      {
        name: "app",
        type: "folder",
        children: [
          { name: "globals.css", type: "file" },
          { name: "layout.tsx", type: "file" },
          { name: "page.tsx", type: "file" },
        ],
      },
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Button.tsx", type: "file" },
        ],
      },
      {
        name: "public",
        type: "folder",
        children: [
          { name: "next.svg", type: "file" },
          { name: "vercel.svg", type: "file" },
        ],
      },
      { name: ".env.local", type: "file" },
      { name: ".eslintrc.json", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: "next.config.js", type: "file" },
      { name: "package.json", type: "file" },
      { name: "postcss.config.js", type: "file" },
      { name: "README.md", type: "file" },
      { name: "tailwind.config.ts", type: "file" },
      { name: "tsconfig.json", type: "file" },
    ],
  },
  {
    id: "react-vite",
    name: "React + Vite",
    description: "A fast, modern frontend build tool paired with React.",
    icon: "⚛️",
    category: "frontend",
    tree: [
      {
        name: "public",
        type: "folder",
        children: [
          { name: "vite.svg", type: "file" },
        ],
      },
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "assets",
            type: "folder",
            children: [
              { name: "react.svg", type: "file" },
            ],
          },
          { name: "App.css", type: "file" },
          { name: "App.tsx", type: "file" },
          { name: "index.css", type: "file" },
          { name: "main.tsx", type: "file" },
          { name: "vite-env.d.ts", type: "file" },
        ],
      },
      { name: ".eslintrc.cjs", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: "index.html", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "tsconfig.json", type: "file" },
      { name: "tsconfig.node.json", type: "file" },
      { name: "vite.config.ts", type: "file" },
    ],
  },
  {
    id: "express-rest-api",
    name: "Express REST API",
    description: "A minimal and flexible Node.js web application framework.",
    icon: "🚂",
    category: "backend",
    tree: [
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "controllers",
            type: "folder",
            children: [
              { name: "user.controller.ts", type: "file" },
            ],
          },
          {
            name: "middlewares",
            type: "folder",
            children: [
              { name: "error.middleware.ts", type: "file" },
              { name: "auth.middleware.ts", type: "file" },
            ],
          },
          {
            name: "models",
            type: "folder",
            children: [
              { name: "user.model.ts", type: "file" },
            ],
          },
          {
            name: "routes",
            type: "folder",
            children: [
              { name: "index.ts", type: "file" },
              { name: "user.routes.ts", type: "file" },
            ],
          },
          { name: "app.ts", type: "file" },
          { name: "server.ts", type: "file" },
        ],
      },
      { name: ".env.example", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "tsconfig.json", type: "file" },
    ],
  },
  {
    id: "react-native",
    name: "React Native",
    description: "A framework for building native mobile apps using React.",
    icon: "📱",
    category: "mobile",
    tree: [
      {
        name: "android",
        type: "folder",
        children: [
          { name: "app", type: "folder" },
          { name: "build.gradle", type: "file" },
          { name: "gradle.properties", type: "file" },
        ],
      },
      {
        name: "ios",
        type: "folder",
        children: [
          { name: "MyApp", type: "folder" },
          { name: "Podfile", type: "file" },
        ],
      },
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "components",
            type: "folder",
            children: [
              { name: "Button.tsx", type: "file" },
            ],
          },
          {
            name: "screens",
            type: "folder",
            children: [
              { name: "HomeScreen.tsx", type: "file" },
            ],
          },
        ],
      },
      { name: ".eslintrc.js", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: ".prettierrc.js", type: "file" },
      { name: ".watchmanconfig", type: "file" },
      { name: "app.json", type: "file" },
      { name: "App.tsx", type: "file" },
      { name: "babel.config.js", type: "file" },
      { name: "index.js", type: "file" },
      { name: "metro.config.js", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "tsconfig.json", type: "file" },
    ],
  },
  {
    id: "nodejs-cli",
    name: "Node.js CLI Tool",
    description: "A boilerplate for building command-line interfaces with Node.js.",
    icon: "💻",
    category: "cli",
    tree: [
      {
        name: "bin",
        type: "folder",
        children: [
          { name: "cli.js", type: "file" },
        ],
      },
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "commands",
            type: "folder",
            children: [
              { name: "init.ts", type: "file" },
              { name: "build.ts", type: "file" },
            ],
          },
          {
            name: "utils",
            type: "folder",
            children: [
              { name: "logger.ts", type: "file" },
            ],
          },
          { name: "index.ts", type: "file" },
        ],
      },
      { name: ".gitignore", type: "file" },
      { name: ".prettierrc", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "tsconfig.json", type: "file" },
    ],
  },
  {
    id: "turborepo",
    name: "Turborepo Monorepo",
    description: "High-performance build system for JavaScript and TypeScript codebases.",
    icon: "📦",
    category: "monorepo",
    tree: [
      {
        name: "apps",
        type: "folder",
        children: [
          {
            name: "docs",
            type: "folder",
            children: [
              { name: "next.config.js", type: "file" },
              { name: "package.json", type: "file" },
            ],
          },
          {
            name: "web",
            type: "folder",
            children: [
              { name: "next.config.js", type: "file" },
              { name: "package.json", type: "file" },
            ],
          },
        ],
      },
      {
        name: "packages",
        type: "folder",
        children: [
          {
            name: "eslint-config-custom",
            type: "folder",
            children: [
              { name: "index.js", type: "file" },
              { name: "package.json", type: "file" },
            ],
          },
          {
            name: "tsconfig",
            type: "folder",
            children: [
              { name: "base.json", type: "file" },
              { name: "package.json", type: "file" },
            ],
          },
          {
            name: "ui",
            type: "folder",
            children: [
              { name: "Button.tsx", type: "file" },
              { name: "package.json", type: "file" },
            ],
          },
        ],
      },
      { name: ".gitignore", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "turbo.json", type: "file" },
    ],
  },
  {
    id: "python-fastapi",
    name: "Python FastAPI",
    description: "A modern, fast web framework for building APIs with Python.",
    icon: "⚡",
    category: "backend",
    tree: [
      {
        name: "app",
        type: "folder",
        children: [
          {
            name: "api",
            type: "folder",
            children: [
              {
                name: "routers",
                type: "folder",
                children: [
                  { name: "items.py", type: "file" },
                  { name: "users.py", type: "file" },
                ],
              },
              { name: "dependencies.py", type: "file" },
            ],
          },
          {
            name: "core",
            type: "folder",
            children: [
              { name: "config.py", type: "file" },
              { name: "security.py", type: "file" },
            ],
          },
          {
            name: "models",
            type: "folder",
            children: [
              { name: "user.py", type: "file" },
            ],
          },
          { name: "__init__.py", type: "file" },
          { name: "main.py", type: "file" },
        ],
      },
      {
        name: "tests",
        type: "folder",
        children: [
          { name: "__init__.py", type: "file" },
          { name: "test_main.py", type: "file" },
        ],
      },
      { name: ".env.example", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: "pytest.ini", type: "file" },
      { name: "README.md", type: "file" },
      { name: "requirements.txt", type: "file" },
    ],
  },
  {
    id: "flutter-app",
    name: "Flutter App",
    description: "Cross-platform mobile framework by Google.",
    icon: "🐦",
    category: "mobile",
    tree: [
      {
        name: "android",
        type: "folder",
        children: [
          { name: "app", type: "folder" },
          { name: "build.gradle", type: "file" },
        ],
      },
      {
        name: "ios",
        type: "folder",
        children: [
          { name: "Runner", type: "folder" },
          { name: "Podfile", type: "file" },
        ],
      },
      {
        name: "lib",
        type: "folder",
        children: [
          {
            name: "screens",
            type: "folder",
            children: [
              { name: "home_screen.dart", type: "file" },
            ],
          },
          {
            name: "widgets",
            type: "folder",
            children: [
              { name: "custom_button.dart", type: "file" },
            ],
          },
          { name: "main.dart", type: "file" },
        ],
      },
      {
        name: "test",
        type: "folder",
        children: [
          { name: "widget_test.dart", type: "file" },
        ],
      },
      { name: ".gitignore", type: "file" },
      { name: ".metadata", type: "file" },
      { name: "analysis_options.yaml", type: "file" },
      { name: "pubspec.lock", type: "file" },
      { name: "pubspec.yaml", type: "file" },
      { name: "README.md", type: "file" },
    ],
  },
];
