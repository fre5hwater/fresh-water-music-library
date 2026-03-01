# Fresh Water Music Library

Static-friendly Next.js site for the Fresh Water music & video library.

## Quick start

```bash
npm install
npm run dev
```

## Static export (enabled)

This project is configured with `output: "export"` in `next.config.mjs`, so
`npm run export` generates a fully static site in the `out/` folder.

## Deployment options

### Netlify (fastest)

1. Run: `npm run export`
2. Drag and drop the `out/` folder into <https://app.netlify.com/drop>

If you connect this repository to Netlify, `netlify.toml` auto-configures:
- Build command: `npm run export`
- Publish directory: `out`

### Cloudflare Pages

1. Connect this repository.
2. Set build command to `npm run export`.
3. Set output directory to `out`.

### GitHub Pages

1. Enable GitHub Pages in repository settings.
2. Keep `.github/workflows/deploy-pages.yml` in place.
3. Push to `main`; the workflow builds and publishes the `out/` artifact.

> Subpath deploys (like `/<repo-name>/`) are supported. The workflow sets
> `NEXT_PUBLIC_BASE_PATH=/<repo-name>` automatically.

## Run from a Desktop icon (Windows)

1. Keep the project folder on your machine.
2. Right-click `FreshWaterMusic-Desktop.bat` → **Send to** → **Desktop (create shortcut)**.
3. Double-click the desktop shortcut whenever you want to launch the site.

What it does:
- installs dependencies automatically on first run,
- reuses an existing production build for faster startup,
- opens your browser to `http://localhost:3000`,
- starts the app (`next start`) on port `3000`.

Optional environment variables:

```powershell
setx FRESH_WATER_PORT 8080
setx FRESH_WATER_REBUILD 1
```

- `FRESH_WATER_PORT` changes the local port.
- `FRESH_WATER_REBUILD=1` forces a rebuild before each launch.

You can also launch from terminal with:

```bash
npm run desktop:windows
```
