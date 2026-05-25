# Product Contract

## Snapshot

alex-1883-test-31 is a Vite-powered browser clock. It renders the current local time as a responsive `HH:MM:SS` readout, updates on whole-second boundaries, and can be shipped as static files from `dist/`.

## Current Capabilities

- Browser entry point at `index.html`.
- JavaScript app bootstrap in `src/main.js`, with DOM rendering isolated in `src/clockView.js`.
- Time formatting helpers for zero-padded hours, minutes, seconds, and full `HH:MM:SS` strings.
- Tick scheduler that aligns updates to the next whole second and exposes `start()` / `stop()`.
- Responsive light/dark styling in `src/style.css`.
- Local development server via `npm run dev`.
- Production build via `npm run build`.
- ESLint checks via `npm run lint`.
- Prettier formatting via `npm run format`.
- Unit tests via `npm test`.
- Playwright smoke test via `npm run e2e`.

## Architecture

- Frontend-only Vite project using native ES modules.
- No application framework is installed yet.
- Pure time and scheduling modules are kept separate from DOM code.
- Vite environment variables are documented in `.env.example`; browser-exposed config uses `import.meta.env`.
- Node.js 20 is the project runtime convention, recorded in `.nvmrc`.
- npm is the package manager, with `package-lock.json` committed.
- ESLint uses a flat config in `eslint.config.js` with browser, Node, Vitest, and Playwright-aware scopes.
- Prettier uses `prettier.config.js` for project formatting.
- Production output is static and can be served with Vite preview or any static file server.

## Conventions

- Keep generated output and dependencies out of Git (`dist/`, `node_modules/`).
- Keep DOM-touching behavior thin and isolated from pure modules.
- Use ESLint and Prettier for JavaScript and asset formatting.
- Use Vitest for unit coverage and Playwright for browser smoke coverage.
- Keep `README.md` focused on setup and build instructions; keep this file as the concise product and architecture snapshot.
