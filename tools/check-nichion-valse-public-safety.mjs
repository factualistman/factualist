import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const scanRoots = [
  path.join(repoRoot, "records/nichion-valse-2021"),
  path.join(repoRoot, "src/data/nichion-valse/public")
];

const envTerms = (process.env.NICHION_VALSE_FORBIDDEN_TERMS || "")
  .split(/\r?\n|[|,]/)
  .map((term) => term.trim())
  .filter(Boolean);

const publicAllegationTerms = [
  "詐欺",
  "共犯",
  "黒幕",
  "犯罪",
  "常習的",
  "fraud",
  "scam",
  "criminal",
  "co-conspirator",
  "mastermind",
  "habitual"
];

const contentPatterns = [
  { name: "email address", pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi },
  { name: "Message-ID", pattern: /Message-ID/gi },
  { name: "exact timestamp", pattern: /\b20\d{2}-\d{2}-\d{2}[T ][0-2]?\d:[0-5]\d(?::[0-5]\d)?/g }
];

const forbiddenFileExtensions = new Set([".mbox", ".emlx", ".pdf", ".doc", ".docx"]);
const scannedExtensions = new Set([".html", ".json", ".svg", ".css", ".js", ".mjs", ".ts"]);
const findings = [];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
      continue;
    }
    await scanFile(fullPath);
  }
}

async function scanFile(filePath) {
  const relative = path.relative(repoRoot, filePath);
  const extension = path.extname(filePath).toLowerCase();
  if (forbiddenFileExtensions.has(extension)) {
    findings.push(`${relative}: forbidden source-file extension ${extension}`);
    return;
  }
  if (!scannedExtensions.has(extension)) return;

  const text = await fs.readFile(filePath, "utf8");
  for (const term of envTerms) {
    if (text.includes(term)) findings.push(`${relative}: matched private forbidden term from environment`);
  }
  for (const term of publicAllegationTerms) {
    const pattern = new RegExp(`(^|[^A-Za-z])${escapeRegExp(term)}([^A-Za-z]|$)`, "i");
    if (pattern.test(text)) findings.push(`${relative}: unsupported allegation term "${term}"`);
  }
  for (const check of contentPatterns) {
    if (check.pattern.test(text)) findings.push(`${relative}: ${check.name}`);
    check.pattern.lastIndex = 0;
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

for (const root of scanRoots) {
  await walk(root);
}

if (findings.length) {
  console.error("Nichion-VALSE public safety check failed:");
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log("Nichion-VALSE public safety check passed.");
if (!envTerms.length) {
  console.log("No private forbidden terms were supplied in NICHION_VALSE_FORBIDDEN_TERMS.");
}
