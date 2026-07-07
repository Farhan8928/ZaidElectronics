# Auto-Updating Google Rating (4.9★ · review count)

The site shows your Google rating in the hero, trust bar, reviews section,
schema (JSON-LD) and llms.txt. This system keeps those numbers **synced with
your real Google Business Profile automatically** — when reviews cross 200,
the site says 200+ on its own.

**How it works:** every build runs `scripts/fetch-rating.mjs`, which asks the
official **Google Places API** (no scraping) for your current rating + review
count and injects them everywhere. A GitHub Action triggers one Vercel build
per day, so the site is never more than ~24h behind.

**Cost: ₹0.** The rating field is on the API's Enterprise tier with **1,000
free calls/month** — a daily build uses ~30.

---

## One-time setup (15 minutes)

### Step 1 — Get a Google API key
1. Go to https://console.cloud.google.com/ → create a project (e.g. "zaid-site").
2. "APIs & Services" → Library → search **"Places API (New)"** → Enable.
   (Google will ask you to attach a billing card — required to activate any
   Google API, but with the caps in Step 1b you will never be charged.)
3. "APIs & Services" → Credentials → Create credentials → **API key** → copy it.
4. (Recommended) Edit the key → API restrictions → restrict to "Places API (New)".

### Step 1b — Make "never charged" a guarantee (2 minutes, do it)
1. "APIs & Services" → **Places API (New)** → Quotas & System Limits →
   set **Requests per day = 50**. We use ~1–2/day; even a runaway bug can
   then never exceed the 1,000 free calls/month.
2. Billing → **Budgets & alerts** → create a budget of ₹100 with email
   alerts at 50/90/100% — an early-warning tripwire that should never fire.

### Step 2 — Find your Place ID (run once, locally)
```powershell
$env:GOOGLE_PLACES_API_KEY="YOUR_KEY"; node scripts/fetch-rating.mjs --find
```
It prints your business with its `PLACE ID: ChIJ...` — copy it.
(Check the printed rating/review count matches your real profile.)

### Step 3 — Add both values to Vercel
Vercel → Project → Settings → **Environment Variables** (all environments):
- `GOOGLE_PLACES_API_KEY` = your key
- `GOOGLE_PLACE_ID` = the ChIJ… id

Redeploy once. The build log should show:
`fetch-rating: live Google rating 4.9★ · 193 reviews (shown as "190+")`

### Step 4 — Turn on the daily rebuild
1. Vercel → Project → Settings → Git → **Deploy Hooks** → Create
   (name: `daily-rating`, branch: `main`) → copy the URL.
2. GitHub repo → Settings → Secrets and variables → Actions →
   **New repository secret**: `VERCEL_DEPLOY_HOOK_URL` = that URL.

Done. Every day at 09:00 IST the site rebuilds with the live numbers.
(You can also trigger it manually: GitHub → Actions → "Daily redeploy" → Run.)

---

## Is this allowed by Google? Yes — explicitly.
- The Places API is **Google's own product for exactly this**: displaying
  place data on your website with a registered key. (What's *forbidden* is
  scraping the Maps page — which this deliberately avoids.)
- **Caching policy:** Google permits caching place data up to 30 days; the
  daily rebuild keeps our stored copy under ~24h. Place IDs may be stored
  forever.
- **Attribution:** the site labels the numbers as Google's ("Google rating",
  "reviews on Google") and shows the embedded Google map — which is also
  simply better for trust.

## Notes
- **No keys? Nothing breaks.** Without the env vars the script skips and the
  committed fallback in `src/data/rating.gen.js` is used.
- **Display style:** copy shows the count floored to the nearest 10
  ("190+", "200+"), while the schema `reviewCount` uses the exact number —
  honest in both places.
- **The share image (`public/og-image.jpg`) is a static picture** — its
  "190+" is baked in. It's worth regenerating every few months; ask Claude to
  "regenerate the og-image with the current rating".
- Honesty note: Google itself ignores self-serving star schema for rich
  snippets on local businesses — the live count's real value is (a) accuracy,
  (b) AI assistants (ChatGPT/Perplexity) quoting correct numbers, and
  (c) trust copy on the page never looking stale.
