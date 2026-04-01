# jS9PJNTo2fRVf2Z0Kkwrx

ShipWith.AI project

## Tech Stack

<!-- Updated by agents as technology decisions are made -->
- **Framework**: TBD
- **Language**: TypeScript
- **Styling**: TBD
- **Deployment**: TBD

## Conventions

### Code Style
- Use TypeScript strict mode
- Prefer named exports over default exports
- Use `interface` for object shapes, `type` for unions
- Keep files under 300 lines — split when larger

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
