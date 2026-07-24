# salramir-profile

Career profile / portfolio site. React + TypeScript + Vite, deployed to GitHub Pages.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

Output goes to `dist/`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages. In the repo settings, set **Pages > Source**
to **GitHub Actions** (one-time setup).

The site is served at `/salramir-profile/`, which matches the `base` path set
in `vite.config.ts`.
