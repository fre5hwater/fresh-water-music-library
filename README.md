# Fresh Water Music Library

Static-friendly Next.js site for the Fresh Water music & video library.

## Quick start

```bash
npm install
npm run dev
```

## Static export (enabled)

This project is configured for static export via `output: "export"` in
`next.config.mjs`, which makes it compatible with static hosting services.

## Deployment options

### Netlify (fastest)

1. Run the export build: `npm run export`.
2. Drag-and-drop the `out/` folder into https://app.netlify.com/drop.

If you connect this repository to Netlify, the included `netlify.toml` sets the
build command and output directory automatically.

### Cloudflare Pages

1. Connect this repository.
2. Set the build command to `npm run export`.
3. Set the output directory to `out`.

### GitHub Pages

1. GitHub Pages requires a static export.
2. Run `npm run export` to generate the `out/` folder.
3. Deploy with the included GitHub Actions workflow in `.github/workflows/deploy-pages.yml`.

> Tip: If you plan to deploy to a subpath (like `/<repo-name>/`), set
> `NEXT_PUBLIC_BASE_PATH=/<repo-name>` and re-run the export. The GitHub Pages
> workflow automatically sets this to the repository name.

## Run from a Desktop icon (Windows)

1. Keep the project folder on your machine.
2. Right-click `FreshWaterMusic-Desktop.bat` → **Send to** → **Desktop (create shortcut)**.
3. Double-click the desktop shortcut whenever you want to launch the site.

What it does:
- installs dependencies automatically on first run,
- runs a fresh `npm run build`,
- opens your browser to `http://localhost:3000`,
- starts the app (`next start`) on port `3000`.

Optional: set a custom port before launching:

```powershell
setx FRESH_WATER_PORT 8080
```

You can also launch directly from terminal with:

```bash
npm run desktop:windows
```
