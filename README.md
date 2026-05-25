# alex-1883-test-31

A minimal Vite app.

## Requirements

- Node.js 20
- npm

## Development

```bash
npm install
cp .env.example .env
npm run dev
```

Open the local URL printed by Vite to view the clock.

## Environment

- `VITE_DEV_SERVER_PORT`: optional local development server port.
- `VITE_APP_TITLE`: public browser-facing app title read from `import.meta.env`.

## Build

```bash
npm run build
```

The production build is written to `dist/` as static files:

- `dist/index.html`
- `dist/assets/*`

## Serve The Production Build

After building, serve `dist/` with any static file server. For example:

```bash
npm run preview
```

or:

```bash
npx serve dist
```

Deploy the contents of `dist/` to any static hosting provider that can serve
`index.html` and the generated files under `assets/`.
