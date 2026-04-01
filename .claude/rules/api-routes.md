---
globs: "src/app/api/**/*.ts,src/api/**/*.ts"
---

# API Route Rules

- Return consistent response shape: `{ success, data?, error? }`
- Validate request body before processing
- Handle errors with try/catch — never let unhandled errors crash
- Log errors server-side, return safe messages to client
