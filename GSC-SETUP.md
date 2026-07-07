# Google Search Console — First-Time Setup (Step by Step)

Do this once, right after the site is live at https://zaidelectronicsmumbai.com/

---

## Step 1 — Open Search Console
1. Go to **https://search.google.com/search-console**
2. Sign in with your Google account — **use the same account that owns your
   Google Business Profile** (keeps everything under one login).

## Step 2 — Add your website (choose ONE method)

**Method A — Domain property (best, verifies everything at once):**
1. Click "Add property" → choose **Domain** → type: `zaidelectronicsmumbai.com`
2. Google shows a **TXT record** (looks like `google-site-verification=abc123...`)
3. Open the website where you bought the domain (GoDaddy / Hostinger /
   Namecheap...) → DNS settings → **Add record** → Type: `TXT`, Name/Host: `@`,
   Value: paste the code → Save.
4. Back in Search Console click **Verify**. (DNS can take 5 min – few hours.
   If it fails, wait an hour and press Verify again.)

**Method B — URL prefix (easier if DNS confuses you):**
1. "Add property" → **URL prefix** → enter `https://zaidelectronicsmumbai.com/`
2. Choose the **HTML tag** method → copy the `<meta name="google-site-verification" ...>` tag
3. Send that tag to me — I'll add it to the site's `<head>` and redeploy —
   then press **Verify**.

## Step 3 — Submit the sitemap
1. Left menu → **Sitemaps**
2. In "Add a new sitemap" type exactly: `sitemap.xml`
3. Press **Submit** → status should say **Success** with 30 discovered URLs.

## Step 4 — URL Inspection + Request Indexing
Top search bar in Search Console = **URL Inspection**. Paste a URL, wait for
the check, then click **"Request Indexing"**.

⚠ Google allows only ~10 requests per day — so do it in this order over 3 days.
(Pages you don't manually request still get indexed via the sitemap — this
just speeds up the most important ones.)

**Day 1 — homepage + services + home turf:**
1.  https://zaidelectronicsmumbai.com/
2.  https://zaidelectronicsmumbai.com/tv-panel-repair-bonding-mumbai/
3.  https://zaidelectronicsmumbai.com/led-tv-repair-mumbai/
4.  https://zaidelectronicsmumbai.com/lcd-tv-repair-mumbai/
5.  https://zaidelectronicsmumbai.com/smart-tv-repair-mumbai/
6.  https://zaidelectronicsmumbai.com/doorstep-tv-repair-mumbai/
7.  https://zaidelectronicsmumbai.com/tv-repair-chembur/
8.  https://zaidelectronicsmumbai.com/tv-repair-govandi/
9.  https://zaidelectronicsmumbai.com/tv-repair-mankhurd/
10. https://zaidelectronicsmumbai.com/tv-repair-trombay/

**Day 2 — east belt + Central line:**
11. https://zaidelectronicsmumbai.com/tv-repair-cheeta-camp/
12. https://zaidelectronicsmumbai.com/tv-repair-kurla/
13. https://zaidelectronicsmumbai.com/tv-repair-sion/
14. https://zaidelectronicsmumbai.com/tv-repair-wadala/
15. https://zaidelectronicsmumbai.com/tv-repair-ghatkopar/
16. https://zaidelectronicsmumbai.com/tv-repair-dadar/
17. https://zaidelectronicsmumbai.com/tv-repair-vikhroli/
18. https://zaidelectronicsmumbai.com/tv-repair-bhandup/
19. https://zaidelectronicsmumbai.com/tv-repair-mulund/
20. https://zaidelectronicsmumbai.com/tv-repair-powai/

**Day 3 — Western line + Thane + Navi Mumbai:**
21. https://zaidelectronicsmumbai.com/tv-repair-thane/
22. https://zaidelectronicsmumbai.com/tv-repair-lower-parel/
23. https://zaidelectronicsmumbai.com/tv-repair-bandra/
24. https://zaidelectronicsmumbai.com/tv-repair-santacruz/
25. https://zaidelectronicsmumbai.com/tv-repair-andheri/
26. https://zaidelectronicsmumbai.com/tv-repair-goregaon/
27. https://zaidelectronicsmumbai.com/tv-repair-malad/
28. https://zaidelectronicsmumbai.com/tv-repair-kandivali/
29. https://zaidelectronicsmumbai.com/tv-repair-borivali/
30. https://zaidelectronicsmumbai.com/tv-repair-navi-mumbai/

(Type the URLs with the ending `/` exactly as above.)

## Step 5 — What to check afterwards
- **After 2–7 days:** left menu → **Pages** → you want the 15 URLs under
  "Indexed". Some may take 1–2 weeks — normal for a new domain.
- **After ~1 week:** left menu → **Performance** → shows which search queries
  display your site, clicks, and average position. Check this every Monday
  (it's on the CALLS-PLAYBOOK scorecard).
- If a page shows "Crawled – currently not indexed", don't panic — new domains
  warm up over 2–6 weeks. Keep the review flow going; authority speeds it up.

## Step 6 — Bonus (5 minutes, worth it)
- **Bing Webmaster Tools** (powers ChatGPT/Copilot search):
  https://www.bing.com/webmasters → sign in → it offers **"Import from Google
  Search Console"** → one click imports the site + sitemap. Done.

---

### Quick answers to beginner worries
- **"Success" on sitemap but 0 indexed?** Indexing takes days; submission is instant.
- **Verification failed?** DNS not propagated yet — retry after 1 hour.
- **Do I resubmit the sitemap after changes?** No — Google rechecks it
  automatically. Only resubmit if you add NEW pages.
- **Which property owner email?** Same Google account as your Business Profile.
