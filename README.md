Portfolio website built with Next.js App Router, Tailwind CSS, Framer Motion, and GSAP.

## Quick start

```bash
npm install
npm run dev
```

## Project structure

- `src/app` — App Router pages and layout
- `src/app/projects/[slug]` — Dynamic project detail pages
- `src/app/sitemap.ts` — Generated sitemap

## Deployment

- Vercel: push to GitHub and import the repo. Defaults are fine.
- Netlify: build command `npm run build`, publish `.next`.

### Automatic deploy via GitHub Actions -> Vercel

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-to-vercel.yml` that will deploy the site to Vercel on every push to `main`.

Required repository secrets (set in GitHub > Settings > Secrets):
- `VERCEL_TOKEN` — your Vercel personal token
- `VERCEL_ORG_ID` — Vercel organization ID
- `VERCEL_PROJECT_ID` — Vercel project ID

If you prefer manual deploys, you can also import the repository directly in Vercel and connect the `main` branch.

Note about CLI fallback workflow
--------------------------------
There is an additional workflow `.github/workflows/deploy-vercel-cli.yml` that uses the Vercel CLI to deploy. It requires only `VERCEL_TOKEN` to be set as a GitHub secret. After adding the token, pushing to `main` will trigger a CLI-based deploy.

## Content to prepare

- 3–5 project case studies, with visuals and outcomes
- About blurb, contact email or form endpoint
