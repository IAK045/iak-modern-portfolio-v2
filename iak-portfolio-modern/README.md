# IAK Modern Portfolio

A portfolio rebuild using Next.js App Router, React, TypeScript, CSS, JSON-driven content, Lucide icons, and Vercel-ready deployment.

## Run locally

Requires Node.js 20.9+ (Node.js 22 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Create a new GitHub repository (recommended: `iak-modern-portfolio`) and upload the contents of this folder, not the outer ZIP.
2. Import the repository in Vercel.
3. Framework preset should be Next.js. Keep the build command and output directory at their defaults.
4. Deploy. After testing, you can connect your existing domain `iakdev.vercel.app` to this project from Vercel's Domains settings. Do not delete the existing Vercel project until the replacement is working.

## Update your content

Edit `data/portfolio.json` to update project cards, skills, social links, and certificates. The seven project entries are portfolio entries, not a claim that every one has a complete production demo. Replace profile-level links with exact repository URLs as those repositories become available. Remove or update any item that does not accurately describe your completed work.

## Important

- This is a framework migration, not a direct replacement for the existing static site's `index.html` deployment configuration.
- Do not copy the old static `vercel.json` into this Next.js project; let Vercel detect Next.js.
- A real email address has not been supplied, so the site links to LinkedIn and GitHub instead of inventing an email address.
