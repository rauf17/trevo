export type TreeNode = {
  name: string;
  type: "file" | "folder";
  children?: TreeNode[];
};

export type TemplateCategory = "frontend" | "backend" | "fullstack" | "mobile" | "CLI" | "monorepo" | "devops" | "other";

export interface Template {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: TemplateCategory;
  tree: TreeNode[];
}

export const templates: Template[] = [
  {
    id: "nextjs-app",
    name: "Next.js App",
    description: "Modern fullstack Next.js app with App Router, Tailwind, and authentication setup.",
    icon: "▲",
    category: "fullstack",
    tree: [
      {
        name: "app",
        type: "folder",
        children: [
          {
            name: "(auth)",
            type: "folder",
            children: [
              {
                name: "login",
                type: "folder",
                children: [{ name: "page.tsx", type: "file" }],
              },
              {
                name: "register",
                type: "folder",
                children: [{ name: "page.tsx", type: "file" }],
              },
            ],
          },
          {
            name: "(dashboard)",
            type: "folder",
            children: [
              { name: "layout.tsx", type: "file" },
              { name: "page.tsx", type: "file" },
            ],
          },
          {
            name: "api",
            type: "folder",
            children: [
              {
                name: "auth",
                type: "folder",
                children: [{ name: "route.ts", type: "file" }],
              },
              {
                name: "users",
                type: "folder",
                children: [{ name: "route.ts", type: "file" }],
              },
            ],
          },
          { name: "layout.tsx", type: "file" },
          { name: "page.tsx", type: "file" },
          { name: "globals.css", type: "file" },
        ],
      },
      {
        name: "components",
        type: "folder",
        children: [
          {
            name: "layout",
            type: "folder",
            children: [
              { name: "Footer.tsx", type: "file" },
              { name: "Navbar.tsx", type: "file" },
              { name: "Sidebar.tsx", type: "file" },
            ],
          },
          {
            name: "ui",
            type: "folder",
            children: [
              { name: "Badge.tsx", type: "file" },
              { name: "Button.tsx", type: "file" },
              { name: "Input.tsx", type: "file" },
              { name: "Modal.tsx", type: "file" },
            ],
          },
        ],
      },
      {
        name: "hooks",
        type: "folder",
        children: [
          { name: "useAuth.ts", type: "file" },
          { name: "useFetch.ts", type: "file" },
          { name: "useLocalStorage.ts", type: "file" },
        ],
      },
      {
        name: "lib",
        type: "folder",
        children: [
          { name: "db.ts", type: "file" },
          { name: "utils.ts", type: "file" },
          { name: "validations.ts", type: "file" },
        ],
      },
      {
        name: "public",
        type: "folder",
        children: [
          { name: "favicon.ico", type: "file" },
          { name: "og-image.png", type: "file" },
        ],
      },
      {
        name: "types",
        type: "folder",
        children: [
          { name: "api.ts", type: "file" },
          { name: "index.ts", type: "file" },
        ],
      },
      { name: ".env.example", type: "file" },
      { name: ".env.local", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: "middleware.ts", type: "file" },
      { name: "next.config.ts", type: "file" },
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
    description: "Fast, minimal React frontend application powered by Vite and SWC.",
    icon: "⚡",
    category: "frontend",
    tree: [
      {
        name: "public",
        type: "folder",
        children: [
          { name: "vite.svg", type: "file" },
          { name: "robots.txt", type: "file" },
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
              { name: "logo.png", type: "file" },
            ],
          },
          {
            name: "components",
            type: "folder",
            children: [
              {
                name: "common",
                type: "folder",
                children: [
                  { name: "Button.tsx", type: "file" },
                  { name: "Card.tsx", type: "file" },
                  { name: "Spinner.tsx", type: "file" },
                ],
              },
              {
                name: "layout",
                type: "folder",
                children: [
                  { name: "Header.tsx", type: "file" },
                  { name: "Footer.tsx", type: "file" },
                ],
              },
            ],
          },
          {
            name: "context",
            type: "folder",
            children: [
              { name: "AuthContext.tsx", type: "file" },
              { name: "ThemeContext.tsx", type: "file" },
            ],
          },
          {
            name: "hooks",
            type: "folder",
            children: [
              { name: "useDebounce.ts", type: "file" },
              { name: "useWindowSize.ts", type: "file" },
            ],
          },
          {
            name: "pages",
            type: "folder",
            children: [
              { name: "Home.tsx", type: "file" },
              { name: "About.tsx", type: "file" },
              { name: "NotFound.tsx", type: "file" },
            ],
          },
          {
            name: "services",
            type: "folder",
            children: [
              { name: "api.ts", type: "file" },
              { name: "auth.ts", type: "file" },
            ],
          },
          {
            name: "styles",
            type: "folder",
            children: [
              { name: "variables.css", type: "file" },
              { name: "utilities.css", type: "file" },
            ],
          },
          {
            name: "utils",
            type: "folder",
            children: [
              { name: "formatters.ts", type: "file" },
              { name: "validators.ts", type: "file" },
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
      { name: ".prettierrc", type: "file" },
      { name: "index.html", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "tsconfig.json", type: "file" },
      { name: "tsconfig.node.json", type: "file" },
      { name: "vite.config.ts", type: "file" },
    ],
  },
  {
    id: "express-rest",
    name: "Express REST API",
    description: "Robust Node.js backend using Express, MongoDB, and JSON Web Tokens.",
    icon: "⚙️",
    category: "backend",
    tree: [
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "config",
            type: "folder",
            children: [
              { name: "database.ts", type: "file" },
              { name: "logger.ts", type: "file" },
              { name: "env.ts", type: "file" },
            ],
          },
          {
            name: "controllers",
            type: "folder",
            children: [
              { name: "authController.ts", type: "file" },
              { name: "userController.ts", type: "file" },
              { name: "productController.ts", type: "file" },
            ],
          },
          {
            name: "middlewares",
            type: "folder",
            children: [
              { name: "authMiddleware.ts", type: "file" },
              { name: "errorHandler.ts", type: "file" },
              { name: "rateLimiter.ts", type: "file" },
              { name: "validateRequest.ts", type: "file" },
            ],
          },
          {
            name: "models",
            type: "folder",
            children: [
              { name: "User.ts", type: "file" },
              { name: "Product.ts", type: "file" },
              { name: "Order.ts", type: "file" },
            ],
          },
          {
            name: "routes",
            type: "folder",
            children: [
              { name: "authRoutes.ts", type: "file" },
              { name: "userRoutes.ts", type: "file" },
              { name: "productRoutes.ts", type: "file" },
              { name: "index.ts", type: "file" },
            ],
          },
          {
            name: "services",
            type: "folder",
            children: [
              { name: "emailService.ts", type: "file" },
              { name: "paymentService.ts", type: "file" },
              { name: "s3Service.ts", type: "file" },
            ],
          },
          {
            name: "utils",
            type: "folder",
            children: [
              { name: "catchAsync.ts", type: "file" },
              { name: "apiError.ts", type: "file" },
              { name: "pick.ts", type: "file" },
            ],
          },
          { name: "app.ts", type: "file" },
          { name: "server.ts", type: "file" },
        ],
      },
      {
        name: "tests",
        type: "folder",
        children: [
          {
            name: "integration",
            type: "folder",
            children: [
              { name: "auth.test.ts", type: "file" },
              { name: "users.test.ts", type: "file" },
            ],
          },
          {
            name: "unit",
            type: "folder",
            children: [
              { name: "userModel.test.ts", type: "file" },
              { name: "error.test.ts", type: "file" },
            ],
          },
          { name: "setup.ts", type: "file" },
        ],
      },
      { name: ".env", type: "file" },
      { name: ".env.test", type: "file" },
      { name: ".eslintignore", type: "file" },
      { name: ".eslintrc.json", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: "docker-compose.yml", type: "file" },
      { name: "Dockerfile", type: "file" },
      { name: "jest.config.js", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "tsconfig.json", type: "file" },
    ],
  },
  {
    id: "react-native",
    name: "React Native",
    description: "Cross-platform mobile application utilizing React Native CLI and Expo.",
    icon: "📱",
    category: "mobile",
    tree: [
      {
        name: "android",
        type: "folder",
        children: [
          {
            name: "app",
            type: "folder",
            children: [
              {
                name: "src",
                type: "folder",
                children: [
                  { name: "main", type: "folder", children: [{ name: "AndroidManifest.xml", type: "file" }] },
                ],
              },
              { name: "build.gradle", type: "file" },
            ],
          },
          { name: "build.gradle", type: "file" },
          { name: "gradle.properties", type: "file" },
        ],
      },
      {
        name: "ios",
        type: "folder",
        children: [
          {
            name: "MyApp",
            type: "folder",
            children: [
              { name: "Info.plist", type: "file" },
              { name: "AppDelegate.mm", type: "file" },
            ],
          },
          { name: "Podfile", type: "file" },
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
              { name: "fonts", type: "folder", children: [{ name: "Inter-Regular.ttf", type: "file" }] },
              { name: "images", type: "folder", children: [{ name: "logo.png", type: "file" }] },
            ],
          },
          {
            name: "components",
            type: "folder",
            children: [
              { name: "Button.tsx", type: "file" },
              { name: "Card.tsx", type: "file" },
              { name: "ScreenWrapper.tsx", type: "file" },
              { name: "TabBar.tsx", type: "file" },
            ],
          },
          {
            name: "hooks",
            type: "folder",
            children: [
              { name: "useTheme.ts", type: "file" },
              { name: "useKeyboard.ts", type: "file" },
            ],
          },
          {
            name: "navigation",
            type: "folder",
            children: [
              { name: "AppNavigator.tsx", type: "file" },
              { name: "AuthNavigator.tsx", type: "file" },
              { name: "TabNavigator.tsx", type: "file" },
            ],
          },
          {
            name: "screens",
            type: "folder",
            children: [
              { name: "HomeScreen.tsx", type: "file" },
              { name: "LoginScreen.tsx", type: "file" },
              { name: "ProfileScreen.tsx", type: "file" },
              { name: "SettingsScreen.tsx", type: "file" },
            ],
          },
          {
            name: "store",
            type: "folder",
            children: [
              { name: "index.ts", type: "file" },
              { name: "authSlice.ts", type: "file" },
              { name: "userSlice.ts", type: "file" },
            ],
          },
          {
            name: "utils",
            type: "folder",
            children: [
              { name: "dimensions.ts", type: "file" },
              { name: "storage.ts", type: "file" },
            ],
          },
          { name: "App.tsx", type: "file" },
          { name: "theme.ts", type: "file" },
        ],
      },
      { name: ".env", type: "file" },
      { name: ".eslintrc.js", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: ".prettierrc.js", type: "file" },
      { name: ".watchmanconfig", type: "file" },
      { name: "app.json", type: "file" },
      { name: "babel.config.js", type: "file" },
      { name: "index.js", type: "file" },
      { name: "metro.config.js", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "tsconfig.json", type: "file" },
    ],
  },
  {
    id: "node-cli",
    name: "Node.js CLI Tool",
    description: "Command-line interface application built with Commander.js and Inquirer.",
    icon: "⌨️",
    category: "CLI",
    tree: [
      {
        name: "bin",
        type: "folder",
        children: [{ name: "cli.js", type: "file" }],
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
              { name: "generate.ts", type: "file" },
              { name: "build.ts", type: "file" },
              { name: "serve.ts", type: "file" },
            ],
          },
          {
            name: "core",
            type: "folder",
            children: [
              { name: "config.ts", type: "file" },
              { name: "parser.ts", type: "file" },
              { name: "runner.ts", type: "file" },
            ],
          },
          {
            name: "prompts",
            type: "folder",
            children: [
              { name: "setupPrompt.ts", type: "file" },
              { name: "confirmPrompt.ts", type: "file" },
            ],
          },
          {
            name: "utils",
            type: "folder",
            children: [
              { name: "logger.ts", type: "file" },
              { name: "fs.ts", type: "file" },
              { name: "git.ts", type: "file" },
              { name: "colors.ts", type: "file" },
            ],
          },
          { name: "index.ts", type: "file" },
        ],
      },
      {
        name: "tests",
        type: "folder",
        children: [
          { name: "init.test.ts", type: "file" },
          { name: "generate.test.ts", type: "file" },
          { name: "parser.test.ts", type: "file" },
        ],
      },
      { name: ".eslintrc.json", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: ".prettierrc", type: "file" },
      { name: "CHANGELOG.md", type: "file" },
      { name: "jest.config.js", type: "file" },
      { name: "LICENSE", type: "file" },
      { name: "package.json", type: "file" },
      { name: "README.md", type: "file" },
      { name: "tsconfig.json", type: "file" },
      { name: "tsup.config.ts", type: "file" },
    ],
  },
  {
    id: "turborepo",
    name: "Turborepo Monorepo",
    description: "High-performance monorepo scaling multiple frontend apps and packages.",
    icon: "📦",
    category: "monorepo",
    tree: [
      {
        name: "apps",
        type: "folder",
        children: [
          {
            name: "api",
            type: "folder",
            children: [
              { name: "src", type: "folder", children: [{ name: "index.ts", type: "file" }] },
              { name: "package.json", type: "file" },
              { name: "tsconfig.json", type: "file" },
            ],
          },
          {
            name: "docs",
            type: "folder",
            children: [
              { name: "pages", type: "folder", children: [{ name: "index.mdx", type: "file" }] },
              { name: "next.config.js", type: "file" },
              { name: "package.json", type: "file" },
            ],
          },
          {
            name: "web",
            type: "folder",
            children: [
              { name: "app", type: "folder", children: [{ name: "page.tsx", type: "file" }] },
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
            name: "config-eslint",
            type: "folder",
            children: [
              { name: "next.js", type: "file" },
              { name: "react-internal.js", type: "file" },
              { name: "package.json", type: "file" },
            ],
          },
          {
            name: "config-typescript",
            type: "folder",
            children: [
              { name: "base.json", type: "file" },
              { name: "nextjs.json", type: "file" },
              { name: "react-library.json", type: "file" },
              { name: "package.json", type: "file" },
            ],
          },
          {
            name: "ui",
            type: "folder",
            children: [
              { name: "src", type: "folder", children: [{ name: "button.tsx", type: "file" }, { name: "card.tsx", type: "file" }] },
              { name: "package.json", type: "file" },
              { name: "turbo.json", type: "file" },
            ],
          },
          {
            name: "utils",
            type: "folder",
            children: [
              { name: "src", type: "folder", children: [{ name: "index.ts", type: "file" }] },
              { name: "package.json", type: "file" },
            ],
          },
        ],
      },
      { name: ".eslintrc.js", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: ".npmrc", type: "file" },
      { name: ".prettierignore", type: "file" },
      { name: "package.json", type: "file" },
      { name: "pnpm-lock.yaml", type: "file" },
      { name: "pnpm-workspace.yaml", type: "file" },
      { name: "README.md", type: "file" },
      { name: "turbo.json", type: "file" },
    ],
  },
  {
    id: "python-fastapi",
    name: "Python FastAPI",
    description: "High-performance Python API using FastAPI, SQLAlchemy, and Alembic.",
    icon: "🐍",
    category: "backend",
    tree: [
      {
        name: "alembic",
        type: "folder",
        children: [
          {
            name: "versions",
            type: "folder",
            children: [
              { name: "e1b2c3d4_init.py", type: "file" },
              { name: "a5b6c7d8_add_users.py", type: "file" },
            ],
          },
          { name: "env.py", type: "file" },
          { name: "script.py.mako", type: "file" },
        ],
      },
      {
        name: "app",
        type: "folder",
        children: [
          {
            name: "api",
            type: "folder",
            children: [
              {
                name: "v1",
                type: "folder",
                children: [
                  { name: "endpoints", type: "folder", children: [{ name: "auth.py", type: "file" }, { name: "users.py", type: "file" }, { name: "items.py", type: "file" }] },
                  { name: "api.py", type: "file" },
                ],
              },
              { name: "deps.py", type: "file" },
            ],
          },
          {
            name: "core",
            type: "folder",
            children: [
              { name: "config.py", type: "file" },
              { name: "security.py", type: "file" },
              { name: "celery_app.py", type: "file" },
            ],
          },
          {
            name: "crud",
            type: "folder",
            children: [
              { name: "base.py", type: "file" },
              { name: "crud_user.py", type: "file" },
              { name: "crud_item.py", type: "file" },
            ],
          },
          {
            name: "db",
            type: "folder",
            children: [
              { name: "base.py", type: "file" },
              { name: "base_class.py", type: "file" },
              { name: "session.py", type: "file" },
            ],
          },
          {
            name: "models",
            type: "folder",
            children: [
              { name: "item.py", type: "file" },
              { name: "user.py", type: "file" },
            ],
          },
          {
            name: "schemas",
            type: "folder",
            children: [
              { name: "item.py", type: "file" },
              { name: "msg.py", type: "file" },
              { name: "token.py", type: "file" },
              { name: "user.py", type: "file" },
            ],
          },
          {
            name: "tests",
            type: "folder",
            children: [
              { name: "api", type: "folder", children: [{ name: "test_auth.py", type: "file" }, { name: "test_users.py", type: "file" }] },
              { name: "conftest.py", type: "file" },
            ],
          },
          { name: "__init__.py", type: "file" },
          { name: "main.py", type: "file" },
        ],
      },
      { name: ".env", type: "file" },
      { name: ".gitignore", type: "file" },
      { name: "alembic.ini", type: "file" },
      { name: "docker-compose.yml", type: "file" },
      { name: "Dockerfile", type: "file" },
      { name: "pyproject.toml", type: "file" },
      { name: "README.md", type: "file" },
      { name: "requirements.txt", type: "file" },
    ],
  },
  {
    id: "flutter-app",
    name: "Flutter App",
    description: "Cross-platform mobile framework using Dart, Riverpod, and Freezed.",
    icon: "🐦",
    category: "mobile",
    tree: [
      {
        name: "android",
        type: "folder",
        children: [
          { name: "app", type: "folder", children: [{ name: "build.gradle", type: "file" }, { name: "src", type: "folder", children: [{ name: "main", type: "folder", children: [{ name: "AndroidManifest.xml", type: "file" }] }] }] },
          { name: "build.gradle", type: "file" },
        ],
      },
      {
        name: "ios",
        type: "folder",
        children: [
          { name: "Runner", type: "folder", children: [{ name: "Info.plist", type: "file" }, { name: "AppDelegate.swift", type: "file" }] },
          { name: "Podfile", type: "file" },
        ],
      },
      {
        name: "lib",
        type: "folder",
        children: [
          {
            name: "core",
            type: "folder",
            children: [
              { name: "constants", type: "folder", children: [{ name: "colors.dart", type: "file" }, { name: "strings.dart", type: "file" }] },
              { name: "errors", type: "folder", children: [{ name: "failures.dart", type: "file" }] },
              { name: "network", type: "folder", children: [{ name: "api_client.dart", type: "file" }] },
              { name: "theme", type: "folder", children: [{ name: "app_theme.dart", type: "file" }] },
            ],
          },
          {
            name: "features",
            type: "folder",
            children: [
              {
                name: "auth",
                type: "folder",
                children: [
                  { name: "data", type: "folder", children: [{ name: "auth_repository.dart", type: "file" }] },
                  { name: "domain", type: "folder", children: [{ name: "user_model.dart", type: "file" }] },
                  { name: "presentation", type: "folder", children: [{ name: "login_screen.dart", type: "file" }, { name: "auth_controller.dart", type: "file" }] },
                ],
              },
              {
                name: "home",
                type: "folder",
                children: [
                  { name: "data", type: "folder", children: [{ name: "feed_repository.dart", type: "file" }] },
                  { name: "presentation", type: "folder", children: [{ name: "home_screen.dart", type: "file" }, { name: "widgets", type: "folder", children: [{ name: "feed_card.dart", type: "file" }] }] },
                ],
              },
            ],
          },
          {
            name: "shared",
            type: "folder",
            children: [
              { name: "widgets", type: "folder", children: [{ name: "custom_button.dart", type: "file" }, { name: "custom_input.dart", type: "file" }] },
            ],
          },
          { name: "app.dart", type: "file" },
          { name: "main.dart", type: "file" },
        ],
      },
      {
        name: "test",
        type: "folder",
        children: [
          { name: "features", type: "folder", children: [{ name: "auth", type: "folder", children: [{ name: "auth_controller_test.dart", type: "file" }] }] },
          { name: "widget_test.dart", type: "file" },
        ],
      },
      { name: ".gitignore", type: "file" },
      { name: ".metadata", type: "file" },
      { name: "analysis_options.yaml", type: "file" },
      { name: "build.yaml", type: "file" },
      { name: "pubspec.lock", type: "file" },
      { name: "pubspec.yaml", type: "file" },
      { name: "README.md", type: "file" },
    ],
  }, {
    id: "python-data-science",
    name: "Python Data Science",
    description: "Tags: [\"Python\", \"Pandas\", \"Jupyter\"]",
    icon: "🐼",
    category: "backend",
    tree: [
      {
        name: "notebooks",
        type: "folder",
        children: [
          {
            name: "01_eda.ipynb",
            type: "file"
          },
          {
            name: "02_preprocessing.ipynb",
            type: "file"
          },
          {
            name: "03_modeling.ipynb",
            type: "file"
          },
          {
            name: "04_evaluation.ipynb",
            type: "file"
          }
        ]
      },
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "data",
            type: "folder",
            children: [
              {
                name: "loader.py",
                type: "file"
              },
              {
                name: "cleaner.py",
                type: "file"
              },
              {
                name: "splitter.py",
                type: "file"
              }
            ]
          },
          {
            name: "features",
            type: "folder",
            children: [
              {
                name: "engineer.py",
                type: "file"
              },
              {
                name: "selector.py",
                type: "file"
              }
            ]
          },
          {
            name: "models",
            type: "folder",
            children: [
              {
                name: "baseline.py",
                type: "file"
              },
              {
                name: "trainer.py",
                type: "file"
              },
              {
                name: "evaluator.py",
                type: "file"
              }
            ]
          },
          {
            name: "visualization",
            type: "folder",
            children: [
              {
                name: "plots.py",
                type: "file"
              }
            ]
          },
          {
            name: "utils",
            type: "folder",
            children: [
              {
                name: "logger.py",
                type: "file"
              },
              {
                name: "config.py",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "data",
        type: "folder",
        children: [
          {
            name: "raw",
            type: "folder",
            children: [
              {
                name: ".gitkeep",
                type: "file"
              }
            ]
          },
          {
            name: "processed",
            type: "folder",
            children: [
              {
                name: ".gitkeep",
                type: "file"
              }
            ]
          },
          {
            name: "external",
            type: "folder",
            children: [
              {
                name: ".gitkeep",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "models",
        type: "folder",
        children: [
          {
            name: "saved",
            type: "folder",
            children: [
              {
                name: ".gitkeep",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "reports",
        type: "folder",
        children: [
          {
            name: "figures",
            type: "folder",
            children: [
              {
                name: ".gitkeep",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "requirements.txt",
        type: "file"
      },
      {
        name: "environment.yml",
        type: "file"
      },
      {
        name: ".env",
        type: "file"
      },
      {
        name: ".gitignore",
        type: "file"
      },
      {
        name: "README.md",
        type: "file"
      },
      {
        name: "setup.py",
        type: "file"
      },
      {
        name: "config.yaml",
        type: "file"
      },
      {
        name: "Makefile",
        type: "file"
      }
    ]
  },
  {
    id: "c-cmake-project",
    name: "C++ CMake Project",
    description: "Tags: [\"C++\", \"CMake\", \"GoogleTest\"]",
    icon: "⚙️",
    category: "CLI",
    tree: [
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "main.cpp",
            type: "file"
          },
          {
            name: "core",
            type: "folder",
            children: [
              {
                name: "engine.cpp",
                type: "file"
              },
              {
                name: "engine.h",
                type: "file"
              },
              {
                name: "renderer.cpp",
                type: "file"
              },
              {
                name: "renderer.h",
                type: "file"
              }
            ]
          },
          {
            name: "utils",
            type: "folder",
            children: [
              {
                name: "logger.cpp",
                type: "file"
              },
              {
                name: "logger.h",
                type: "file"
              },
              {
                name: "config.cpp",
                type: "file"
              },
              {
                name: "config.h",
                type: "file"
              }
            ]
          },
          {
            name: "math",
            type: "folder",
            children: [
              {
                name: "vector3.h",
                type: "file"
              },
              {
                name: "matrix4.h",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "include",
        type: "folder",
        children: [
          {
            name: "core",
            type: "folder",
            children: [
              {
                name: "engine.h",
                type: "file"
              }
            ]
          },
          {
            name: "utils",
            type: "folder",
            children: [
              {
                name: "logger.h",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "tests",
        type: "folder",
        children: [
          {
            name: "test_engine.cpp",
            type: "file"
          },
          {
            name: "test_utils.cpp",
            type: "file"
          },
          {
            name: "CMakeLists.txt",
            type: "file"
          }
        ]
      },
      {
        name: "libs",
        type: "folder",
        children: [
          {
            name: ".gitkeep",
            type: "file"
          }
        ]
      },
      {
        name: "build",
        type: "folder",
        children: [
          {
            name: ".gitkeep",
            type: "file"
          }
        ]
      },
      {
        name: "CMakeLists.txt",
        type: "file"
      },
      {
        name: ".clang-format",
        type: "file"
      },
      {
        name: ".gitignore",
        type: "file"
      },
      {
        name: "README.md",
        type: "file"
      },
      {
        name: "Makefile",
        type: "file"
      },
      {
        name: "vcpkg.json",
        type: "file"
      },
      {
        name: ".github",
        type: "folder",
        children: [
          {
            name: "workflows",
            type: "folder",
            children: [
              {
                name: "cmake.yml",
                type: "file"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "c-systems-project",
    name: "C Systems Project",
    description: "Tags: [\"C\", \"Make\", \"Valgrind\"]",
    icon: "🔩",
    category: "CLI",
    tree: [
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "main.c",
            type: "file"
          },
          {
            name: "server",
            type: "folder",
            children: [
              {
                name: "server.c",
                type: "file"
              },
              {
                name: "server.h",
                type: "file"
              }
            ]
          },
          {
            name: "client",
            type: "folder",
            children: [
              {
                name: "client.c",
                type: "file"
              },
              {
                name: "client.h",
                type: "file"
              }
            ]
          },
          {
            name: "protocol",
            type: "folder",
            children: [
              {
                name: "protocol.c",
                type: "file"
              },
              {
                name: "protocol.h",
                type: "file"
              }
            ]
          },
          {
            name: "utils",
            type: "folder",
            children: [
              {
                name: "memory.c",
                type: "file"
              },
              {
                name: "memory.h",
                type: "file"
              },
              {
                name: "logger.c",
                type: "file"
              },
              {
                name: "logger.h",
                type: "file"
              }
            ]
          },
          {
            name: "data",
            type: "folder",
            children: [
              {
                name: "hashtable.c",
                type: "file"
              },
              {
                name: "hashtable.h",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "include",
        type: "folder",
        children: [
          {
            name: "common.h",
            type: "file"
          },
          {
            name: "types.h",
            type: "file"
          }
        ]
      },
      {
        name: "tests",
        type: "folder",
        children: [
          {
            name: "test_server.c",
            type: "file"
          },
          {
            name: "test_protocol.c",
            type: "file"
          }
        ]
      },
      {
        name: "scripts",
        type: "folder",
        children: [
          {
            name: "build.sh",
            type: "file"
          },
          {
            name: "test.sh",
            type: "file"
          },
          {
            name: "clean.sh",
            type: "file"
          }
        ]
      },
      {
        name: "Makefile",
        type: "file"
      },
      {
        name: ".gitignore",
        type: "file"
      },
      {
        name: "README.md",
        type: "file"
      },
      {
        name: "valgrind.supp",
        type: "file"
      },
      {
        name: "docs",
        type: "folder",
        children: [
          {
            name: "architecture.md",
            type: "file"
          },
          {
            name: "api.md",
            type: "file"
          }
        ]
      }
    ]
  },
  {
    id: "go-rest-api",
    name: "Go REST API",
    description: "Tags: [\"Go\", \"Gin\", \"PostgreSQL\"]",
    icon: "🐹",
    category: "backend",
    tree: [
      {
        name: "cmd",
        type: "folder",
        children: [
          {
            name: "server",
            type: "folder",
            children: [
              {
                name: "main.go",
                type: "file"
              }
            ]
          },
          {
            name: "migrate",
            type: "folder",
            children: [
              {
                name: "main.go",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "internal",
        type: "folder",
        children: [
          {
            name: "api",
            type: "folder",
            children: [
              {
                name: "router.go",
                type: "file"
              },
              {
                name: "middleware",
                type: "folder",
                children: [
                  {
                    name: "auth.go",
                    type: "file"
                  },
                  {
                    name: "logger.go",
                    type: "file"
                  }
                ]
              },
              {
                name: "handlers",
                type: "folder",
                children: [
                  {
                    name: "user.go",
                    type: "file"
                  },
                  {
                    name: "auth.go",
                    type: "file"
                  }
                ]
              }
            ]
          },
          {
            name: "domain",
            type: "folder",
            children: [
              {
                name: "user.go",
                type: "file"
              },
              {
                name: "repository.go",
                type: "file"
              }
            ]
          },
          {
            name: "service",
            type: "folder",
            children: [
              {
                name: "user_service.go",
                type: "file"
              },
              {
                name: "auth_service.go",
                type: "file"
              }
            ]
          },
          {
            name: "repository",
            type: "folder",
            children: [
              {
                name: "postgres",
                type: "folder",
                children: [
                  {
                    name: "user_repo.go",
                    type: "file"
                  }
                ]
              }
            ]
          },
          {
            name: "config",
            type: "folder",
            children: [
              {
                name: "config.go",
                type: "file"
              }
            ]
          },
          {
            name: "database",
            type: "folder",
            children: [
              {
                name: "db.go",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "pkg",
        type: "folder",
        children: [
          {
            name: "jwt",
            type: "folder",
            children: [
              {
                name: "jwt.go",
                type: "file"
              }
            ]
          },
          {
            name: "hash",
            type: "folder",
            children: [
              {
                name: "bcrypt.go",
                type: "file"
              }
            ]
          },
          {
            name: "validator",
            type: "folder",
            children: [
              {
                name: "validator.go",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "migrations",
        type: "folder",
        children: [
          {
            name: "001_create_users.up.sql",
            type: "file"
          },
          {
            name: "001_create_users.down.sql",
            type: "file"
          }
        ]
      },
      {
        name: "tests",
        type: "folder",
        children: [
          {
            name: "integration",
            type: "folder",
            children: [
              {
                name: "user_test.go",
                type: "file"
              }
            ]
          },
          {
            name: "unit",
            type: "folder",
            children: [
              {
                name: "service_test.go",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "go.mod",
        type: "file"
      },
      {
        name: "go.sum",
        type: "file"
      },
      {
        name: "Makefile",
        type: "file"
      },
      {
        name: "Dockerfile",
        type: "file"
      },
      {
        name: ".env",
        type: "file"
      },
      {
        name: ".gitignore",
        type: "file"
      },
      {
        name: "README.md",
        type: "file"
      }
    ]
  },
  {
    id: "java-spring-boot",
    name: "Java Spring Boot",
    description: "Tags: [\"Spring Boot\", \"Maven\", \"JPA\"]",
    icon: "☕",
    category: "backend",
    tree: [
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "main",
            type: "folder",
            children: [
              {
                name: "java",
                type: "folder",
                children: [
                  {
                    name: "com",
                    type: "folder",
                    children: [
                      {
                        name: "app",
                        type: "folder",
                        children: [
                          {
                            name: "Application.java",
                            type: "file"
                          },
                          {
                            name: "controller",
                            type: "folder",
                            children: [
                              {
                                name: "UserController.java",
                                type: "file"
                              },
                              {
                                name: "AuthController.java",
                                type: "file"
                              }
                            ]
                          },
                          {
                            name: "service",
                            type: "folder",
                            children: [
                              {
                                name: "UserService.java",
                                type: "file"
                              },
                              {
                                name: "AuthService.java",
                                type: "file"
                              }
                            ]
                          },
                          {
                            name: "repository",
                            type: "folder",
                            children: [
                              {
                                name: "UserRepository.java",
                                type: "file"
                              }
                            ]
                          },
                          {
                            name: "model",
                            type: "folder",
                            children: [
                              {
                                name: "User.java",
                                type: "file"
                              },
                              {
                                name: "Role.java",
                                type: "file"
                              }
                            ]
                          },
                          {
                            name: "dto",
                            type: "folder",
                            children: [
                              {
                                name: "UserDTO.java",
                                type: "file"
                              }
                            ]
                          },
                          {
                            name: "config",
                            type: "folder",
                            children: [
                              {
                                name: "SecurityConfig.java",
                                type: "file"
                              },
                              {
                                name: "JwtConfig.java",
                                type: "file"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                name: "resources",
                type: "folder",
                children: [
                  {
                    name: "application.yml",
                    type: "file"
                  },
                  {
                    name: "application-dev.yml",
                    type: "file"
                  },
                  {
                    name: "db",
                    type: "folder",
                    children: [
                      {
                        name: "migration",
                        type: "folder",
                        children: [
                          {
                            name: "V1__create_users.sql",
                            type: "file"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: "test",
            type: "folder",
            children: [
              {
                name: "java",
                type: "folder",
                children: [
                  {
                    name: "com",
                    type: "folder",
                    children: [
                      {
                        name: "app",
                        type: "folder",
                        children: [
                          {
                            name: "UserControllerTest.java",
                            type: "file"
                          },
                          {
                            name: "UserServiceTest.java",
                            type: "file"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "pom.xml",
        type: "file"
      },
      {
        name: "Dockerfile",
        type: "file"
      },
      {
        name: "docker-compose.yml",
        type: "file"
      },
      {
        name: ".gitignore",
        type: "file"
      },
      {
        name: "README.md",
        type: "file"
      },
      {
        name: "Makefile",
        type: "file"
      }
    ]
  },
  {
    id: "php-laravel",
    name: "PHP Laravel",
    description: "Tags: [\"Laravel\", \"MySQL\", \"Blade\"]",
    icon: "🐘",
    category: "fullstack",
    tree: [
      {
        name: "app",
        type: "folder",
        children: [
          {
            name: "Http",
            type: "folder",
            children: [
              {
                name: "Controllers",
                type: "folder",
                children: [
                  {
                    name: "UserController.php",
                    type: "file"
                  },
                  {
                    name: "AuthController.php",
                    type: "file"
                  }
                ]
              },
              {
                name: "Middleware",
                type: "folder",
                children: [
                  {
                    name: "Authenticate.php",
                    type: "file"
                  }
                ]
              }
            ]
          },
          {
            name: "Models",
            type: "folder",
            children: [
              {
                name: "User.php",
                type: "file"
              },
              {
                name: "Post.php",
                type: "file"
              }
            ]
          },
          {
            name: "Providers",
            type: "folder",
            children: [
              {
                name: "AppServiceProvider.php",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "database",
        type: "folder",
        children: [
          {
            name: "migrations",
            type: "folder",
            children: [
              {
                name: "2024_01_01_create_users_table.php",
                type: "file"
              }
            ]
          },
          {
            name: "seeders",
            type: "folder",
            children: [
              {
                name: "UserSeeder.php",
                type: "file"
              }
            ]
          },
          {
            name: "factories",
            type: "folder",
            children: [
              {
                name: "UserFactory.php",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "resources",
        type: "folder",
        children: [
          {
            name: "views",
            type: "folder",
            children: [
              {
                name: "layouts",
                type: "folder",
                children: [
                  {
                    name: "app.blade.php",
                    type: "file"
                  }
                ]
              },
              {
                name: "auth",
                type: "folder",
                children: [
                  {
                    name: "login.blade.php",
                    type: "file"
                  }
                ]
              },
              {
                name: "dashboard",
                type: "folder",
                children: [
                  {
                    name: "index.blade.php",
                    type: "file"
                  }
                ]
              }
            ]
          },
          {
            name: "css",
            type: "folder",
            children: [
              {
                name: "app.css",
                type: "file"
              }
            ]
          },
          {
            name: "js",
            type: "folder",
            children: [
              {
                name: "app.js",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "routes",
        type: "folder",
        children: [
          {
            name: "web.php",
            type: "file"
          },
          {
            name: "api.php",
            type: "file"
          },
          {
            name: "auth.php",
            type: "file"
          }
        ]
      },
      {
        name: "tests",
        type: "folder",
        children: [
          {
            name: "Feature",
            type: "folder",
            children: [
              {
                name: "AuthTest.php",
                type: "file"
              }
            ]
          },
          {
            name: "Unit",
            type: "folder",
            children: [
              {
                name: "UserTest.php",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "config",
        type: "folder",
        children: [
          {
            name: "app.php",
            type: "file"
          },
          {
            name: "database.php",
            type: "file"
          },
          {
            name: "auth.php",
            type: "file"
          }
        ]
      },
      {
        name: ".env",
        type: "file"
      },
      {
        name: ".env.example",
        type: "file"
      },
      {
        name: "composer.json",
        type: "file"
      },
      {
        name: "package.json",
        type: "file"
      },
      {
        name: "artisan",
        type: "file"
      },
      {
        name: ".gitignore",
        type: "file"
      },
      {
        name: "README.md",
        type: "file"
      }
    ]
  },
  {
    id: "electron-desktop-app",
    name: "Electron Desktop App",
    description: "Tags: [\"Electron\", \"React\", \"TypeScript\"]",
    icon: "🖥️",
    category: "frontend",
    tree: [
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "main",
            type: "folder",
            children: [
              {
                name: "main.ts",
                type: "file"
              },
              {
                name: "preload.ts",
                type: "file"
              },
              {
                name: "menu.ts",
                type: "file"
              },
              {
                name: "ipc",
                type: "folder",
                children: [
                  {
                    name: "handlers.ts",
                    type: "file"
                  },
                  {
                    name: "channels.ts",
                    type: "file"
                  }
                ]
              }
            ]
          },
          {
            name: "renderer",
            type: "folder",
            children: [
              {
                name: "index.tsx",
                type: "file"
              },
              {
                name: "App.tsx",
                type: "file"
              },
              {
                name: "pages",
                type: "folder",
                children: [
                  {
                    name: "Home.tsx",
                    type: "file"
                  },
                  {
                    name: "Settings.tsx",
                    type: "file"
                  }
                ]
              },
              {
                name: "components",
                type: "folder",
                children: [
                  {
                    name: "Titlebar.tsx",
                    type: "file"
                  },
                  {
                    name: "Sidebar.tsx",
                    type: "file"
                  }
                ]
              },
              {
                name: "hooks",
                type: "folder",
                children: [
                  {
                    name: "useElectron.ts",
                    type: "file"
                  }
                ]
              },
              {
                name: "store",
                type: "folder",
                children: [
                  {
                    name: "app.ts",
                    type: "file"
                  }
                ]
              },
              {
                name: "styles",
                type: "folder",
                children: [
                  {
                    name: "global.css",
                    type: "file"
                  }
                ]
              }
            ]
          },
          {
            name: "shared",
            type: "folder",
            children: [
              {
                name: "types.ts",
                type: "file"
              },
              {
                name: "constants.ts",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "assets",
        type: "folder",
        children: [
          {
            name: "icon.png",
            type: "file"
          },
          {
            name: "icon.ico",
            type: "file"
          },
          {
            name: "icon.icns",
            type: "file"
          }
        ]
      },
      {
        name: "forge.config.ts",
        type: "file"
      },
      {
        name: "webpack.main.config.ts",
        type: "file"
      },
      {
        name: "webpack.renderer.config.ts",
        type: "file"
      },
      {
        name: "tsconfig.json",
        type: "file"
      },
      {
        name: "package.json",
        type: "file"
      },
      {
        name: ".gitignore",
        type: "file"
      },
      {
        name: "README.md",
        type: "file"
      }
    ]
  },
  {
    id: "graphql-api",
    name: "GraphQL API",
    description: "Tags: [\"GraphQL\", \"Apollo\", \"Prisma\"]",
    icon: "◈",
    category: "backend",
    tree: [
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "index.ts",
            type: "file"
          },
          {
            name: "server.ts",
            type: "file"
          },
          {
            name: "schema",
            type: "folder",
            children: [
              {
                name: "typeDefs.ts",
                type: "file"
              },
              {
                name: "resolvers.ts",
                type: "file"
              },
              {
                name: "types",
                type: "folder",
                children: [
                  {
                    name: "user.ts",
                    type: "file"
                  },
                  {
                    name: "post.ts",
                    type: "file"
                  }
                ]
              }
            ]
          },
          {
            name: "resolvers",
            type: "folder",
            children: [
              {
                name: "userResolver.ts",
                type: "file"
              },
              {
                name: "postResolver.ts",
                type: "file"
              },
              {
                name: "authResolver.ts",
                type: "file"
              }
            ]
          },
          {
            name: "middleware",
            type: "folder",
            children: [
              {
                name: "auth.ts",
                type: "file"
              },
              {
                name: "rateLimit.ts",
                type: "file"
              }
            ]
          },
          {
            name: "datasources",
            type: "folder",
            children: [
              {
                name: "userAPI.ts",
                type: "file"
              },
              {
                name: "postAPI.ts",
                type: "file"
              }
            ]
          },
          {
            name: "utils",
            type: "folder",
            children: [
              {
                name: "jwt.ts",
                type: "file"
              },
              {
                name: "bcrypt.ts",
                type: "file"
              },
              {
                name: "logger.ts",
                type: "file"
              }
            ]
          },
          {
            name: "types",
            type: "folder",
            children: [
              {
                name: "context.ts",
                type: "file"
              },
              {
                name: "generated.ts",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "prisma",
        type: "folder",
        children: [
          {
            name: "schema.prisma",
            type: "file"
          },
          {
            name: "seed.ts",
            type: "file"
          }
        ]
      },
      {
        name: "tests",
        type: "folder",
        children: [
          {
            name: "resolvers",
            type: "folder",
            children: [
              {
                name: "user.test.ts",
                type: "file"
              },
              {
                name: "auth.test.ts",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: ".env",
        type: "file"
      },
      {
        name: ".env.example",
        type: "file"
      },
      {
        name: "tsconfig.json",
        type: "file"
      },
      {
        name: "package.json",
        type: "file"
      },
      {
        name: "codegen.ts",
        type: "file"
      },
      {
        name: ".gitignore",
        type: "file"
      },
      {
        name: "README.md",
        type: "file"
      }
    ]
  },
  {
    id: "unity-game-project",
    name: "Unity Game Project",
    description: "Tags: [\"Unity\", \"C#\", \"HLSL\"]",
    icon: "🎮",
    category: "other",
    tree: [
      {
        name: "Assets",
        type: "folder",
        children: [
          {
            name: "Scripts",
            type: "folder",
            children: [
              {
                name: "GameManager.cs",
                type: "file"
              },
              {
                name: "Player",
                type: "folder",
                children: [
                  {
                    name: "PlayerController.cs",
                    type: "file"
                  },
                  {
                    name: "PlayerHealth.cs",
                    type: "file"
                  }
                ]
              },
              {
                name: "Enemy",
                type: "folder",
                children: [
                  {
                    name: "EnemyAI.cs",
                    type: "file"
                  },
                  {
                    name: "EnemySpawner.cs",
                    type: "file"
                  }
                ]
              },
              {
                name: "UI",
                type: "folder",
                children: [
                  {
                    name: "MainMenuUI.cs",
                    type: "file"
                  },
                  {
                    name: "HUDController.cs",
                    type: "file"
                  }
                ]
              },
              {
                name: "Managers",
                type: "folder",
                children: [
                  {
                    name: "AudioManager.cs",
                    type: "file"
                  },
                  {
                    name: "SceneLoader.cs",
                    type: "file"
                  }
                ]
              }
            ]
          },
          {
            name: "Scenes",
            type: "folder",
            children: [
              {
                name: "MainMenu.unity",
                type: "file"
              },
              {
                name: "GameScene.unity",
                type: "file"
              }
            ]
          },
          {
            name: "Prefabs",
            type: "folder",
            children: [
              {
                name: ".gitkeep",
                type: "file"
              }
            ]
          },
          {
            name: "Materials",
            type: "folder",
            children: [
              {
                name: "Player.mat",
                type: "file"
              }
            ]
          },
          {
            name: "Shaders",
            type: "folder",
            children: [
              {
                name: "CustomLit.hlsl",
                type: "file"
              }
            ]
          },
          {
            name: "Audio",
            type: "folder",
            children: [
              {
                name: "SFX",
                type: "folder",
                children: [
                  {
                    name: ".gitkeep",
                    type: "file"
                  }
                ]
              },
              {
                name: "Music",
                type: "folder",
                children: [
                  {
                    name: ".gitkeep",
                    type: "file"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Packages",
        type: "folder",
        children: [
          {
            name: "manifest.json",
            type: "file"
          }
        ]
      },
      {
        name: "ProjectSettings",
        type: "folder",
        children: [
          {
            name: "ProjectSettings.asset",
            type: "file"
          }
        ]
      },
      {
        name: ".gitignore",
        type: "file"
      },
      {
        name: "README.md",
        type: "file"
      }
    ]
  },
  {
    id: "kubernetes-helm",
    name: "Kubernetes + Helm",
    description: "Tags: [\"Kubernetes\", \"Helm\", \"ArgoCD\"]",
    icon: "☸️",
    category: "devops",
    tree: [
      {
        name: "helm",
        type: "folder",
        children: [
          {
            name: "myapp",
            type: "folder",
            children: [
              {
                name: "Chart.yaml",
                type: "file"
              },
              {
                name: "values.yaml",
                type: "file"
              },
              {
                name: "values-prod.yaml",
                type: "file"
              },
              {
                name: "values-staging.yaml",
                type: "file"
              },
              {
                name: "templates",
                type: "folder",
                children: [
                  {
                    name: "deployment.yaml",
                    type: "file"
                  },
                  {
                    name: "service.yaml",
                    type: "file"
                  },
                  {
                    name: "ingress.yaml",
                    type: "file"
                  },
                  {
                    name: "configmap.yaml",
                    type: "file"
                  },
                  {
                    name: "hpa.yaml",
                    type: "file"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "k8s",
        type: "folder",
        children: [
          {
            name: "namespaces.yaml",
            type: "file"
          },
          {
            name: "secrets.yaml",
            type: "file"
          },
          {
            name: "pvc.yaml",
            type: "file"
          },
          {
            name: "network-policy.yaml",
            type: "file"
          }
        ]
      },
      {
        name: "argocd",
        type: "folder",
        children: [
          {
            name: "application.yaml",
            type: "file"
          },
          {
            name: "project.yaml",
            type: "file"
          }
        ]
      },
      {
        name: "scripts",
        type: "folder",
        children: [
          {
            name: "deploy.sh",
            type: "file"
          },
          {
            name: "rollback.sh",
            type: "file"
          },
          {
            name: "port-forward.sh",
            type: "file"
          }
        ]
      },
      {
        name: "monitoring",
        type: "folder",
        children: [
          {
            name: "alerts.yaml",
            type: "file"
          }
        ]
      },
      {
        name: ".github",
        type: "folder",
        children: [
          {
            name: "workflows",
            type: "folder",
            children: [
              {
                name: "deploy.yml",
                type: "file"
              },
              {
                name: "validate.yml",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "Makefile",
        type: "file"
      },
      {
        name: ".gitignore",
        type: "file"
      },
      {
        name: "README.md",
        type: "file"
      }
    ]
  },
  {
    id: "react-native-expo",
    name: "React Native + Expo",
    description: "Tags: [\"Expo\", \"NativeWind\", \"Zustand\"]",
    icon: "📱",
    category: "mobile",
    tree: [
      {
        name: "app",
        type: "folder",
        children: [
          {
            name: "(tabs)",
            type: "folder",
            children: [
              {
                name: "index.tsx",
                type: "file"
              },
              {
                name: "explore.tsx",
                type: "file"
              },
              {
                name: "_layout.tsx",
                type: "file"
              }
            ]
          },
          {
            name: "_layout.tsx",
            type: "file"
          },
          {
            name: "auth",
            type: "folder",
            children: [
              {
                name: "login.tsx",
                type: "file"
              },
              {
                name: "register.tsx",
                type: "file"
              }
            ]
          },
          {
            name: "modal.tsx",
            type: "file"
          },
          {
            name: "+not-found.tsx",
            type: "file"
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
              {
                name: "Button.tsx",
                type: "file"
              },
              {
                name: "Input.tsx",
                type: "file"
              },
              {
                name: "Card.tsx",
                type: "file"
              }
            ]
          },
          {
            name: "ThemedText.tsx",
            type: "file"
          },
          {
            name: "ThemedView.tsx",
            type: "file"
          },
          {
            name: "ParallaxScrollView.tsx",
            type: "file"
          }
        ]
      },
      {
        name: "hooks",
        type: "folder",
        children: [
          {
            name: "useColorScheme.ts",
            type: "file"
          },
          {
            name: "useThemeColor.ts",
            type: "file"
          }
        ]
      },
      {
        name: "stores",
        type: "folder",
        children: [
          {
            name: "auth.ts",
            type: "file"
          },
          {
            name: "user.ts",
            type: "file"
          }
        ]
      },
      {
        name: "services",
        type: "folder",
        children: [
          {
            name: "api.ts",
            type: "file"
          },
          {
            name: "auth.ts",
            type: "file"
          }
        ]
      },
      {
        name: "constants",
        type: "folder",
        children: [
          {
            name: "Colors.ts",
            type: "file"
          },
          {
            name: "Layout.ts",
            type: "file"
          }
        ]
      },
      {
        name: "assets",
        type: "folder",
        children: [
          {
            name: "fonts",
            type: "folder",
            children: [
              {
                name: "SpaceMono-Regular.ttf",
                type: "file"
              }
            ]
          },
          {
            name: "images",
            type: "folder",
            children: [
              {
                name: "icon.png",
                type: "file"
              },
              {
                name: "splash.png",
                type: "file"
              }
            ]
          }
        ]
      },
      {
        name: "app.json",
        type: "file"
      },
      {
        name: "babel.config.js",
        type: "file"
      },
      {
        name: "tsconfig.json",
        type: "file"
      },
      {
        name: "package.json",
        type: "file"
      },
      {
        name: ".gitignore",
        type: "file"
      },
      {
        name: "README.md",
        type: "file"
      }
    ]
  }
];