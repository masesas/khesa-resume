# khesa-resume

Device-framed portfolio gallery built with Astro. Each project screenshot is rendered
inside its native context — a **browser window** for web/desktop shots, a **neutral phone
frame** for mobile shots — using runtime CSS components (no baked-in mockups).

The gallery is driven entirely by `src/data/projects.ts`. Each `Shot` has a `type`
(`'web'` → BrowserFrame, `'mobile'` → PhoneFrame) and an `alt`. Web shots may set a
`url` for the address bar. App icons are passed via `Project.icon` and render as a small
badge next to the title — never inside a frame.

Re-run it any time the source screenshots change. It is idempotent and overwrites outputs.

## Commands

| Command                 | Action                                      |
| :---------------------- | :------------------------------------------ |
| `npm install`           | Install dependencies                        |
| `node scripts/process-images.mjs` | Regenerate `public/shots/`        |
| `npm run dev`           | Dev server at `localhost:4321`              |
| `npm run build`         | Build to `./dist/`                          |
| `npm run preview`       | Preview the production build                |
