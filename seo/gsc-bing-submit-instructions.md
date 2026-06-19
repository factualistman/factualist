# GSC / Bing Submission Checklist

## Google Search Console

1. Submit sitemap:
   `https://factualist.org/sitemap.xml`
2. Use URL Inspection and request indexing for:
   - `https://factualist.org/records/`
   - `https://factualist.org/records/music-commissioning-authority-2021/`
   - `https://factualist.org/records/nichion-valse-2021/`
   - `https://factualist.org/records/nichion-valse-2021/ja/`
   - `https://factualist.org/records/nichion-valse-2021/es/`
   - `https://factualist.org/records/nichion-valse-2021/de/`
   - `https://factualist.org/records/nichion-valse-2021/fr/`
   - `https://factualist.org/records/nichion-valse-2021/sk/`
3. After deployment, confirm that each inspected URL returns:
   - `200`
   - `meta name="robots" content="index,follow"`
   - correct canonical URL
   - no stale hero title from the old cached version

## Bing Webmaster Tools / IndexNow

After the IndexNow key file is live at:

`https://factualist.org/7f1f1a1e23c04c8fbbadfb919ac09d81c8f0ad38d768e3e862cab98cf7d1a92f.txt`

submit:

```sh
curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  --data @seo/indexnow-payload.json
```

If Bing still shows stale cached titles, use Bing Webmaster Tools URL Inspection for the same URLs above and request recrawl.
