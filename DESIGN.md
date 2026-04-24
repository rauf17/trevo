# Trevo Design System

**Introduction**
Trevo is a visual folder structure generator. This document defines the Trevo Design System—the UI language and visual foundation of the application. It establishes a dark-mode-first system based on layered surface contrast, semi-transparent borders, and strict typographical constraints.

## 1. Visual Theme & Architecture

Trevo uses a dark-mode-native design system built upon a near-black base (`#08090a`). The system relies on a calibrated hierarchy of luminance and opacity for structural definition, utilizing semi-transparent borders (`rgba(255,255,255,0.05)`) and contrasting text luminance rather than color variation.

The typography system strictly uses Inter Variable with OpenType features `"cv01"` and `"ss03"` enabled globally. Inter is implemented across a specific weight scale: 300 (light body), 510 (medium emphasis), and 590 (semibold emphasis). The 510 weight serves as the default emphasis weight across the UI. Display text (48px to 72px) implements negative letter-spacing (-1.056px to -1.584px) to increase typographic density. Berkeley Mono is utilized exclusively for code and technical data presentation.

The color system is predominantly achromatic. A single primary brand accent (`#5e6ad2` for backgrounds, `#7170ff` for interactive elements) is reserved strictly for primary actions, active states, and brand identifiers. Structural boundaries are defined using low-opacity white borders (`rgba(255,255,255,0.05)` to `rgba(255,255,255,0.08)`).

**System Constraints:**
- Base Theme: Dark-mode native (`#08090a` Background, `#0f1011` Panel Surface, `#191a1b` Elevated Surface)
- Typography: Inter Variable with `"cv01", "ss03"` globally enabled
- Core Weight: 510 weight serves as the standard UI emphasis
- Tracking Rules: Negative letter-spacing applied to display sizes (-1.584px at 72px, -1.056px at 48px)
- Brand Accent: `#5e6ad2` (bg) / `#7170ff` (accent) / `#828fff` (hover) is the exclusive chromatic color
- Structural Borders: Semi-transparent white (`rgba(255,255,255,0.05)` to `rgba(255,255,255,0.08)`)
- Secondary Button Backgrounds: Low-opacity white (`rgba(255,255,255,0.02)` to `rgba(255,255,255,0.05)`)
- Elevation: Computed via background luminance increments and multi-layered shadows
- Primitives: Built on Radix UI primitives
- Semantic Status: Green (`#27a644`, `#10b981`) restricted to status/success indicators

## 2. Color System & Tokens

### Background Surfaces
- **Background Level 1** (`#010102` / `#08090a`): Base background layer. Used for main pages and hero sections.
- **Surface Level 2** (`#0f1011`): Sidebar and panel backgrounds. 
- **Surface Level 3** (`#191a1b`): Elevated surfaces, cards, and dropdown containers.
- **Surface Level 4** (`#28282c`): Highest dark surface. Used for hover states and prominent elevated components.

### Typography Colors
- **Primary Text** (`#f7f8f8`): Default text color. Near-white to prevent high-contrast eye strain.
- **Secondary Text** (`#d0d6e0`): Silver-gray for body copy, descriptions, and secondary data.
- **Tertiary Text** (`#8a8f98`): Muted gray for placeholders, metadata, and de-emphasized labels.
- **Quaternary Text** (`#62666d`): Subdued gray for timestamps and disabled states.

### Brand & Interactive Colors
- **Primary Brand Color** (`#5e6ad2`): Primary interactive background color for CTAs and key surfaces.
- **Accent Interactive** (`#7170ff`): Base color for text links, active states, and selections.
- **Accent Hover** (`#828fff`): Hover state variant for accent elements.
- **Muted Brand** (`#7a7fad`): Low-emphasis brand color for subtle UI components.

### Semantic Status Colors
- **Active Green** (`#27a644`): Primary success and active status indicator.
- **Success Emerald** (`#10b981`): Secondary success color for badges and completion states.

### Borders & Dividers
- **Border Solid Primary** (`#23252a`): High-contrast solid border for prominent structural separation.
- **Border Solid Secondary** (`#34343a`): Medium-contrast solid border.
- **Border Solid Tertiary** (`#3e3e44`): Low-contrast solid border.
- **Border Subtle** (`rgba(255,255,255,0.05)`): Default low-opacity semi-transparent border.
- **Border Standard** (`rgba(255,255,255,0.08)`): Standard semi-transparent border for input fields and cards.
- **Divider Subtle** (`#141516`): Minimal-contrast line for minor structural divisions.
- **Divider Standard** (`#18191a`): Standard divider line.

### Light Mode Equivalents (For Explicit Light Contexts)
- **Light Background** (`#f7f8f8`): Base page background.
- **Light Surface** (`#f3f4f5` / `#f5f6f7`): Surface component backgrounds.
- **Light Border** (`#d0d6e0`): Standard border.
- **Light Border Alt** (`#e6e6e6`): Secondary lighter border.
- **Pure White** (`#ffffff`): Elevated card surfaces.

### Overlays
- **Overlay Base** (`rgba(0,0,0,0.85)`): Modal and dialog backdrop for focus isolation.

## 3. Typography Constraints

### Font Stacks
- **Primary**: `Inter Variable, SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue`
- **Monospace**: `Berkeley Mono, ui-monospace, SF Mono, Menlo`
- **Required OpenType Features**: `"cv01", "ss03"` must be enabled globally on Inter Variable.

### Typographic Scale

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Display XL | Inter Variable | 72px (4.50rem) | 510 | 1.00 | -1.584px |
| Display Large | Inter Variable | 64px (4.00rem) | 510 | 1.00 | -1.408px |
| Display | Inter Variable | 48px (3.00rem) | 510 | 1.00 | -1.056px |
| Heading 1 | Inter Variable | 32px (2.00rem) | 400 | 1.13 | -0.704px |
| Heading 2 | Inter Variable | 24px (1.50rem) | 400 | 1.33 | -0.288px |
| Heading 3 | Inter Variable | 20px (1.25rem) | 590 | 1.33 | -0.240px |
| Body Large | Inter Variable | 18px (1.13rem) | 400 | 1.60 | -0.165px |
| Body Emphasis | Inter Variable | 17px (1.06rem) | 590 | 1.60 | 0px |
| Body | Inter Variable | 16px (1.00rem) | 400 | 1.50 | 0px |
| Body Medium | Inter Variable | 16px (1.00rem) | 510 | 1.50 | 0px |
| Body Semibold | Inter Variable | 16px (1.00rem) | 590 | 1.50 | 0px |
| Small | Inter Variable | 15px (0.94rem) | 400 | 1.60 | -0.165px |
| Small Medium | Inter Variable | 15px (0.94rem) | 510 | 1.60 | -0.165px |
| Small Semibold | Inter Variable | 15px (0.94rem) | 590 | 1.60 | -0.165px |
| Small Light | Inter Variable | 15px (0.94rem) | 300 | 1.47 | -0.165px |
| Caption Large | Inter Variable | 14px (0.88rem) | 510 | 1.50 | -0.182px |
| Caption | Inter Variable | 13px (0.81rem) | 400 | 1.50 | -0.130px |
| Label | Inter Variable | 12px (0.75rem) | 510 | 1.40 | 0px |
| Micro | Inter Variable | 11px (0.69rem) | 510 | 1.40 | 0px |
| Tiny | Inter Variable | 10px (0.63rem) | 400 | 1.50 | -0.150px |
| Link Large | Inter Variable | 16px (1.00rem) | 400 | 1.50 | 0px |
| Link Medium | Inter Variable | 15px (0.94rem) | 510 | 2.67 | 0px |
| Link Small | Inter Variable | 14px (0.88rem) | 510 | 1.50 | 0px |
| Link Caption | Inter Variable | 13px (0.81rem) | 400 | 1.50 | -0.130px |
| Mono Body | Berkeley Mono | 14px (0.88rem) | 400 | 1.50 | 0px |
| Mono Caption | Berkeley Mono | 13px (0.81rem) | 400 | 1.50 | 0px |
| Mono Label | Berkeley Mono | 12px (0.75rem) | 400 | 1.40 | 0px |

### Typography Implementation Rules
- **510 Weight Standard**: Use Inter 510 for default emphasis and UI elements. Do not use 500 or 600.
- **Dynamic Letter-Spacing**: Apply specific negative tracking values to Display classes (-1.584px, -1.408px, -1.056px, -0.704px). Do not use default tracking for sizes 32px and above.
- **Weight Limitations**: Restrict font weights to 300, 400, 510, and 590. Weight 700 (bold) is strictly prohibited.

## 4. Component Specifications

### Buttons

**Ghost Button (Default Secondary Action)**
- Background: `rgba(255,255,255,0.02)`
- Text Color: `#e2e4e7`
- Radius: 6px
- Border: `1px solid rgb(36, 40, 44)`
- Focus State: `rgba(0,0,0,0.1) 0px 4px 12px` box-shadow

**Subtle Button (Contextual/Toolbar)**
- Background: `rgba(255,255,255,0.04)`
- Text Color: `#d0d6e0`
- Padding: 0px 6px
- Radius: 6px

**Primary Brand Button (Primary CTA)**
- Background: `#5e6ad2`
- Text Color: `#ffffff`
- Padding: 8px 16px
- Radius: 6px
- Hover State: `#828fff` background

**Icon Button**
- Background: `rgba(255,255,255,0.03)` or `rgba(255,255,255,0.05)`
- Text Color: `#f7f8f8`
- Radius: 50%
- Border: `1px solid rgba(255,255,255,0.08)`

**Pill Button (Filters/Tags)**
- Background: Transparent
- Text Color: `#d0d6e0`
- Padding: 0px 10px 0px 5px
- Radius: 9999px
- Border: `1px solid rgb(35, 37, 42)`

**Small Toolbar Button**
- Background: `rgba(255,255,255,0.05)`
- Text Color: `#62666d`
- Radius: 2px
- Border: `1px solid rgba(255,255,255,0.05)`
- Shadow: `rgba(0,0,0,0.03) 0px 1.2px 0px 0px`
- Typography: 12px, Weight 510

### Containers & Cards
- Background: `rgba(255,255,255,0.02)` to `rgba(255,255,255,0.05)`
- Border: `1px solid rgba(255,255,255,0.08)` (Standard) or `1px solid rgba(255,255,255,0.05)` (Subtle)
- Radius: 8px (Standard), 12px (Featured), 22px (Large Panels)
- Box Shadow: `rgba(0,0,0,0.2) 0px 0px 0px 1px`
- Hover State: Increase background opacity value.

### Inputs & Forms

**Text Area**
- Background: `rgba(255,255,255,0.02)`
- Text Color: `#d0d6e0`
- Border: `1px solid rgba(255,255,255,0.08)`
- Padding: 12px 14px
- Radius: 6px

**Search Input**
- Background: Transparent
- Text Color: `#f7f8f8`
- Padding: 1px 32px

**Button-style Input**
- Text Color: `#8a8f98`
- Padding: 1px 6px
- Radius: 5px

### Badges & Status Indicators

**Success Pill**
- Background: `#10b981`
- Text Color: `#f7f8f8`
- Radius: 50%
- Typography: 10px, Weight 510

**Neutral Pill**
- Background: Transparent
- Text Color: `#d0d6e0`
- Padding: 0px 10px 0px 5px
- Radius: 9999px
- Border: `1px solid rgb(35, 37, 42)`
- Typography: 12px, Weight 510

**Subtle Badge**
- Background: `rgba(255,255,255,0.05)`
- Text Color: `#f7f8f8`
- Padding: 0px 8px 0px 2px
- Radius: 2px
- Border: `1px solid rgba(255,255,255,0.05)`
- Typography: 10px, Weight 510

### Navigation Elements
- Header Background: Dark sticky behavior on base background.
- Links: 13–14px Inter Variable, Weight 510, `#d0d6e0` default color.
- Link Active/Hover State: `#f7f8f8`.

## 5. Layout & Spacing Rules

### Spacing System
- Base Unit: 8px
- Fixed Scale: 1px, 4px, 7px, 8px, 11px, 12px, 16px, 19px, 20px, 22px, 24px, 28px, 32px, 35px
- Alignment Ratios: 7px and 11px values dictate optical alignment offsets.
- Primary Grid Rhythm: Multiples of 8px (8, 16, 24, 32).

### Layout Constraints
- Max Content Width: ~1200px
- Structural Separation: Implement spacing via margin/padding values rather than visible dividing lines.
- Section Padding: 80px+ vertical padding between primary layout blocks.

### Border Radius Scale
- 2px: Micro badges, toolbar buttons
- 4px: Small structural containers, list items
- 6px: Functional inputs, standard buttons
- 8px: General cards, popovers, dropdowns
- 12px: Featured panels, section containers
- 22px: Large structural panels
- 9999px: Fully rounded pills, tags
- 50%: Circular avatars, status dots

## 6. Elevation System

Elevation is constructed via luminance stacking (background opacity increments) combined with multi-layer box shadows.

| Level | Shadow/Border Treatment | Use Case |
|-------|-------------------------|----------|
| Level 0 (Flat) | No shadow, `#010102` background | Document body, base container |
| Level 1 (Subtle) | `rgba(0,0,0,0.03) 0px 1.2px 0px` | Minor elevation, toolbar buttons |
| Level 2 (Surface) | `rgba(255,255,255,0.05)` bg + `1px solid rgba(255,255,255,0.08)` border | Cards, inputs |
| Level 2b (Inset) | `rgba(0,0,0,0.2) 0px 0px 12px 0px inset` | Recessed containers |
| Level 3 (Ring) | `rgba(0,0,0,0.2) 0px 0px 0px 1px` | Component borders functioning as shadow |
| Level 4 (Elevated)| `rgba(0,0,0,0.4) 0px 2px 4px` | Dropdowns, floating overlays |
| Level 5 (Dialog) | `rgba(0,0,0,0) 0px 8px 2px, rgba(0,0,0,0.01) 0px 5px 2px, rgba(0,0,0,0.04) 0px 3px 2px, rgba(0,0,0,0.07) 0px 1px 1px, rgba(0,0,0,0.08) 0px 0px 1px` | Modals, command palettes |
| Focus State | `rgba(0,0,0,0.1) 0px 4px 12px` | Keyboard focus indicators |

**Implementation Rule**: Do not use standard drop-shadows to define depth on dark surfaces. Elevation requires an increase in the background `rgba` white value (`0.02` → `0.04` → `0.05`).

## 7. System Guidelines (Do's & Don'ts)

### Implementation Requirements (Do)
- Apply `font-feature-settings: "cv01", "ss03"` to all Inter Variable text nodes.
- Use font weight 510 for all default UI emphasis.
- Apply defined negative letter-spacing values to Display classes.
- Construct backgrounds using base layers (`#08090a`, `#0f1011`, `#191a1b`).
- Define borders exclusively using semi-transparent white (`rgba(255,255,255,0.05)` to `rgba(255,255,255,0.08)`).
- Implement secondary button backgrounds using transparent white (`rgba(255,255,255,0.02)` to `rgba(255,255,255,0.05)`).
- Restrict Primary Brand Color (`#5e6ad2` / `#7170ff`) to primary calls-to-action and active states.
- Set primary body text to `#f7f8f8`.
- Implement luminance stacking for elevation levels.

### Strict Prohibitions (Don't)
- Do not use `#ffffff` for primary text.
- Do not use solid hex colors for secondary button backgrounds.
- Do not apply Primary Brand Color to structural or decorative non-interactive elements.
- Do not use positive or zero letter-spacing on Display text sizes.
- Do not use opaque hex values for borders on dark backgrounds.
- Do not omit OpenType features `"cv01"` and `"ss03"`.
- Do not use font weight 700.
- Do not introduce warm color values outside of predefined semantic status indicators.
- Do not rely solely on dark drop-shadows to separate dark layers.

## 8. Responsive Specifications

### Viewport Breakpoints
| Breakpoint | Width Value | Implementation |
|------------|-------------|----------------|
| Mobile Small | <600px | Single column structure |
| Mobile | 600px | Base mobile layout |
| Tablet | 640px | Multi-column grid threshold |
| Desktop Small| 768px | Expanded component grids |
| Desktop | 1024px | Standard desktop navigation |
| Large Desktop| 1280px | Max layout constraints apply |

### Interaction Targets
- Interactive buttons must maintain a minimum 6px radius and standard padding.
- Touch targets for navigation links dictate a minimum 13px font size.
- Pill tags mandate a minimum 10px horizontal padding.
- Icon buttons require a 50% border-radius for tap target uniformity.

### Layout Transformations
- Typography Tracking: Scale tracking proportionally with font size reduction across viewports.
- Navigation: Horizontal configurations collapse to hamburger menu components at <=768px.
- Grid Systems: 3-column structures collapse to 2-column, then 1-column layouts beneath 768px.
