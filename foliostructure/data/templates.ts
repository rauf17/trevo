export type TreeNode = {
  name: string;
  type: "file" | "folder";
  children?: TreeNode[];
};

export type TemplateCategory = "Frontend" | "Backend" | "Fullstack" | "Mobile" | "CLI" | "Monorepo";

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
    category: "Fullstack",
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
    category: "Frontend",
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
    category: "Backend",
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
    category: "Mobile",
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
    category: "Monorepo",
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
    category: "Backend",
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
    category: "Mobile",
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
  },
];
