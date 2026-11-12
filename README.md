# FashionOs-
# FashionOS website

The FashionOS landing page with waitlist, plus six Fashion Intelligence data pages (Trends, Design, Production, Business, Market, Retail), Privacy, Terms and 404.

This repo holds the finished, ready-to-serve site. Every file sits in the top level, so there is no build step.

## Deploy
Import this repo into Vercel or Netlify and press Deploy. Leave all build settings empty.

## Settings: edit `config.js`
- `supabaseUrl`, `supabaseKey`: from Supabase, Project Settings, API. Leave empty for preview mode, where signups are not saved.
- `contactEmail`, `instagramUrl`, `linkedinUrl`, `xUrl`: shown in the footer. Empty values are hidden.
- `googleAnalyticsId`, `plausibleDomain`, `clarityId`: optional analytics.
- `turnstileSiteKey`, `submitFunctionUrl`: optional spam protection. Both are needed.

Save the file and the live site updates on the next deploy.

## Waitlist database (one time)
In Supabase, open SQL Editor, paste the waitlist SQL and run it. It creates a `waitlist` table that only accepts new signups and cannot be read with the public key. View signups in Supabase under Table Editor, waitlist.

## Data pages
Every number on the intelligence pages is linked to its source: McKinsey and BoF State of Fashion 2026, Textile Exchange, WTO, NRF, ThredUp and Pantone. Refresh the figures when a new State of Fashion report comes out each November.
