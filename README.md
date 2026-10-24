# Feltham & District Rifle Club — one-page website

A complete responsive website for **www.fdrc.uk**, hosted on **Cloudflare Workers Static Assets** (not Cloudflare Pages). No database, third-party libraries, paid plan or external image services required. Official FDRC logo updated using the supplied October 2026 white-background version, optimised for the web without altering the design.

## What's included

- `public/index.html` — the entire one-page website, including HTML, CSS and a small mobile-navigation script
- `public/assets/club-logo.webp` — club logo optimised from the supplied original JPEG, with its white background
- `public/assets/favicon.png` — browser icon generated from the same supplied logo
- `source-assets/FDRC-logo-original.jpeg` — unchanged original uploaded logo as a reference
- `src/index.js` — tiny Cloudflare Worker for static asset serving
- `wrangler.jsonc` — Cloudflare Workers configuration
- `package.json` — local or GitHub deployment commands

## Deploy without Windows — using GitHub + Cloudflare

1. Create a new GitHub repository, for example `fdrc-website`.
2. Upload **the contents of this project folder** to its root (not the ZIP itself). You can do this using GitHub in your iPad browser, desktop browser or Mac.
3. Open Cloudflare dashboard > **Workers & Pages** > **Create application** > connect/import a Git repository. Choose the GitHub repository and ensure this is a **Worker**, not a Pages project. In the Workers Builds settings, select a build/deploy configuration that runs `npm ci && npx wrangler deploy`. For a fresh repository without a `package-lock.json`, use `npm install && npx wrangler deploy`. If the UI separates build and deployment commands, set build to `npm install` and deploy to `npx wrangler deploy`.
4. The Worker should deploy to a `workers.dev` preview URL. Visit and test it first.
5. In that Worker, use **Settings > Domains & Routes > Add > Custom Domain** (names can change in the dashboard) and enter `www.fdrc.uk`. Ensure your domain's DNS is in the same Cloudflare account.
6. If you want `fdrc.uk` to redirect to `www.fdrc.uk`, configure a Cloudflare Redirect Rule for the root hostname (or attach both domains with a canonical preference).

If you have a Mac, Linux machine or a cloud development environment with Node.js, you can alternatively run:

```bash
npm install
npx wrangler login
npm run dev
npm run deploy
```

## Confirmed club details included

- **Club meeting nights:** Tuesday and Wednesday evenings. No specific opening or closing times are published because none were provided by the club.
- **Club contact:** `secretary@fdrc.uk`. The main call-to-action and footer open the visitor's default email app. There is no website contact form.
- **Club logo:** the exact club-supplied white-background emblem is used, optimised for the web, with a copy of the original under `source-assets/`.

## Checks before publishing

- **Location:** New Road, Feltham, TW14 9BG is taken from public directories rather than directly confirmed by the club. Please confirm it before launch.
- **Membership information:** confirm current application process, fees, age requirements and visitor arrangements before adding details.
- **Email:** verify that `secretary@fdrc.uk` is receiving messages properly.
- **Map:** the View on Google Maps button opens a maps search; no embedded Google map or tracking service is loaded.

Relevant third-party references consulted earlier:
- https://www.msbra.co.uk/clubs/club-list/38-feltham-district-rifle-club
- https://developers.cloudflare.com/workers/static-assets/

## Modify the site

All copy, buttons, session times and colours are in `public/index.html`. No build step or framework is required. Changes pushed to GitHub are deployed through the connected Workers build pipeline.

## Note about email and forms

This initial version has no visitor form and does not collect personal data. A secure contact form with Cloudflare Turnstile + D1 + notification email could be added in a later version, once you decide how the club wants to receive enquiries.
