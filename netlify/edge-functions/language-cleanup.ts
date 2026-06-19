const LANGUAGE_PARAM_NAMES = new Set(["lang", "hl", "locale", "language"]);
const JAPANESE_PARAM_VALUES = new Set(["ja", "jp", "ja-jp", "ja_jp", "jpn", "japanese"]);

function hasJapaneseLanguageQuery(url: URL) {
  for (const [name, value] of url.searchParams) {
    if (!LANGUAGE_PARAM_NAMES.has(name.toLowerCase())) continue;
    if (JAPANESE_PARAM_VALUES.has(value.toLowerCase())) return true;
  }
  return false;
}

function redirectTarget(requestUrl: string) {
  const url = new URL(requestUrl);
  const path = url.pathname;

  if (path === "/ja" || path === "/ja/") {
    url.pathname = "/";
    url.search = "";
    return url;
  }

  if (path === "/ja/records/" || path === "/ja/records") {
    url.pathname = "/records/";
    url.search = "";
    return url;
  }

  if (
    path === "/ja/methodology/" ||
    path === "/ja/methodology" ||
    path === "/ja/editorial-standard/" ||
    path === "/ja/editorial-standard" ||
    path === "/ja/redaction-policy/" ||
    path === "/ja/redaction-policy" ||
    path === "/ja/correction/" ||
    path === "/ja/correction" ||
    path === "/ja/notes/" ||
    path === "/ja/notes"
  ) {
    url.pathname = path.replace(/^\/ja/, "");
    if (!url.pathname.endsWith("/")) url.pathname += "/";
    url.search = "";
    return url;
  }

  if (path.startsWith("/ja/")) {
    url.pathname = "/";
    url.search = "";
    return url;
  }

  if (path === "/records/ac55id-2025/ja" || path === "/records/ac55id-2025/ja/") {
    url.pathname = "/records/ac55id-2025/";
    url.search = "";
    return url;
  }

  if (path === "/records/epm-music-2026/ja" || path === "/records/epm-music-2026/ja/") {
    url.pathname = "/records/epm-music-2026/";
    url.search = "";
    return url;
  }

  if (path === "/records/nichion-valse-2021/ja") {
    url.pathname = "/records/nichion-valse-2021/ja/";
    url.search = "";
    return url;
  }

  if (path === "/records/nichion-valse-2021/ja/" || path.startsWith("/records/nichion-valse-2021/ja/")) {
    return null;
  }

  if (/^\/records\/[^/]+\/ja(?:\/|$)/.test(path)) {
    url.pathname = "/records/";
    url.search = "";
    return url;
  }

  if (hasJapaneseLanguageQuery(url)) {
    url.search = "";
    return url;
  }

  return null;
}

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const target = redirectTarget(request.url);
  if (target) {
    return Response.redirect(target.toString(), 301);
  }
  return context.next();
};
