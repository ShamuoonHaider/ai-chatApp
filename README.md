# AI Chat App (React + Vite + TypeScript)

This project uses Bun as the package manager and React Router for page navigation.

## Run with Bun

```bash
bun install
bun run dev
```

## Folder Structure

```text
src/
  app/
    router.tsx
  features/
    auth/
      pages/
        SignInPage.tsx
        SignUpPage.tsx
    dashboard/
      pages/
        DashboardPage.tsx
    not-found/
      pages/
        NotFoundPage.tsx
  App.tsx
  main.tsx
  index.css
```

## Routes

- `/` → redirects to `/sign-in`
- `/sign-in` → sign in page
- `/sign-up` → sign up page
- `/dashboard` → dashboard page
- `*` → 404 not found page
