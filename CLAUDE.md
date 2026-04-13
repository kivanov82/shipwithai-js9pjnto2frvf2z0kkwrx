# jS9PJNTo2fRVf2Z0Kkwrx

ShipWith.AI project - Smart Home Store

## Tech Stack

<!-- Updated by agents as technology decisions are made -->
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Components**: Custom component library based on UI Designer specs
- **Fonts**: DM Sans (primary), JetBrains Mono (monospace)
- **Icons**: Custom SVG icons
- **State Management**: React hooks (useState, useEffect)
- **Deployment**: Vercel (pending)

## Design System

- **Colors**: Sage green primary palette (#647864)
- **Typography**: DM Sans for headings and body, JetBrains Mono for prices
- **Spacing**: 4px base unit system
- **Components**: Button, Card, Input, Badge, ProductCard, etc.

## Conventions

### Code Style
- Use TypeScript strict mode
- Prefer named exports over default exports
- Use `interface` for object shapes, `type` for unions
- Keep files under 300 lines — split when larger
- Component structure: `components/ComponentName/index.tsx`

### Git Workflow
- Never commit directly to main
- Use feature branches: `feature/<agent-or-author>/<description>`
- All PRs are automatically reviewed before merge

### File Structure
```
src/
  components/    # React components
  lib/           # Utilities and helpers
  app/           # Next.js app router pages
  api/           # API routes
  types/         # Shared type definitions
```

## API Conventions

- All API routes return `{ success: boolean, data?: T, error?: string }`
- Use proper HTTP status codes (400 for validation, 404 for not found, 500 for server errors)
- Validate all inputs at the route handler level

## Current Status

### Completed
- ✅ Core design system implementation
- ✅ Component library (Button, Card, Input, Badge, etc.)
- ✅ Layout components (Header, Footer, Container, Section)
- ✅ Home page with Hero, Features, Product Showcase
- ✅ Responsive design (mobile-first)
- ✅ Loading and error states

### Pending
- 🔄 Product catalog pages
- 🔄 Shopping cart functionality
- 🔄 User authentication
- 🔄 Payment integration
- 🔄 API integration
- 🔄 Search functionality
- 🔄 Smart home quiz