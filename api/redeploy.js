// Vercel Cron endpoint — triggers a fresh production build once a day so
// scripts/fetch-rating.mjs re-syncs the Google rating/review count.
//
// Wiring (see vercel.json "crons"): Vercel calls GET /api/redeploy daily.
// The handler POSTs the project's Deploy Hook, which starts a new build.
//
// Env vars (Vercel → Settings → Environment Variables):
//   VERCEL_DEPLOY_HOOK_URL — from Settings → Git → Deploy Hooks
//   CRON_SECRET            — any long random string; Vercel automatically
//                            sends it as "Authorization: Bearer <secret>"
//                            on cron invocations, so outsiders can't
//                            trigger builds by hitting this URL.

export default async function handler(req, res) {
  const secret = process.env.CRON_SECRET
  if (secret && req.headers.authorization !== `Bearer ${secret}`) {
    return res.status(401).json({ ok: false, error: 'unauthorized' })
  }

  const hook = process.env.VERCEL_DEPLOY_HOOK_URL
  if (!hook) {
    return res.status(200).json({
      ok: false,
      error: 'VERCEL_DEPLOY_HOOK_URL env var not set — create a Deploy Hook in Vercel → Settings → Git and add it.',
    })
  }

  try {
    const r = await fetch(hook, { method: 'POST' })
    const body = await r.text()
    return res.status(200).json({ ok: r.ok, status: r.status, body: body.slice(0, 200) })
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message })
  }
}
