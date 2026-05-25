# Product Contract

## Snapshot

alex-1883-test-31 is a minimal Vite-powered web app. It currently serves a single hello page confirming that Vite is running and points developers to `src/main.js` as the starting place for future app work.

## Current Capabilities

- Browser entry point at `index.html`.
- JavaScript app bootstrap in `src/main.js`.
- Basic responsive styling in `src/style.css`.
- Local development server via `npm run dev`.
- Production build via `npm run build`.

## Architecture

- Frontend-only Vite project using native ES modules.
- No application framework is installed yet.
- Node.js 20 is the project runtime convention, recorded in `.nvmrc`.
- npm is the package manager, with `package-lock.json` committed.

## Conventions

- Keep generated output and dependencies out of Git (`dist/`, `node_modules/`).
- Add future UI behavior through `src/main.js` and shared styles through `src/style.css` until the app grows enough to justify additional structure.
- Keep `README.md` focused on setup and build instructions; keep this file as the concise product and architecture snapshot.
