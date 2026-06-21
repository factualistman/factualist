# GSC / Bing Submission Checklist

## Google Search Console

1. Submit sitemap:
   `https://factualist.org/sitemap.xml`
2. Use URL Inspection and request indexing for:
   - `https://factualist.org/records/`
   - `https://factualist.org/.well-known/entities-context.json`
   - `https://factualist.org/llms.txt`
   - `https://factualist.org/records/music-commissioning-authority-2021/`
   - `https://factualist.org/records/nichion-valse-2021/`
   - `https://factualist.org/records/nichion-valse-2021/ja/`
   - `https://factualist.org/records/nichion-valse-2021/es/`
   - `https://factualist.org/records/nichion-valse-2021/de/`
   - `https://factualist.org/records/nichion-valse-2021/fr/`
   - `https://factualist.org/records/nichion-valse-2021/sk/`
   - `https://factualist.org/records/epm-music-2026/`
3. After deployment, confirm that each inspected URL returns:
   - `200`
   - `meta name="robots" content="index,follow"`
   - correct canonical URL
   - no stale hero title from the old cached version
4. Do not request indexing for `https://factualist.org/records/epm-music-2026/cron-job/`. It is a cron implementation path, not a public index target, and should return `410`.

## Bing Webmaster Tools / IndexNow

After the verified IndexNow key file is live at:

`https://factualist.org/5897a45f21a4dfbe45db5d741f74dade.txt`

submit:

```sh
curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  --data @seo/indexnow-payload.json
```

If Bing still shows stale cached titles, use Bing Webmaster Tools URL Inspection for the same URLs above and request recrawl.

If Bing has seen `https://factualist.org/records/epm-music-2026/cron-job/`, inspect that URL only to confirm the live `410` removal state. Do not add it as a search entry.
