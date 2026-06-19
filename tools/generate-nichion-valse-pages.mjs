import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const dataRoot = path.join(repoRoot, "src/data/nichion-valse/public");
const outRoot = path.join(repoRoot, "records/nichion-valse-2021");
const siteBase = "https://factualist.org";
const recordBase = "/records/nichion-valse-2021";
const lastmod = "2026-06-19";

async function readJson(name) {
  return JSON.parse(await fs.readFile(path.join(dataRoot, name), "utf8"));
}

const chronology = await readJson("chronology.json");
const evidence = await readJson("evidence.json");
const entities = await readJson("entities.json");
const relationships = await readJson("relationships.json");
const findings = await readJson("findings.json");
const openQuestions = await readJson("openQuestions.json");
const riskAdvisory = await readJson("riskAdvisory.json");

const pages = [
  { id: "index", slug: "", nav: { en: "Record", ja: "記録" }, title: { en: "Nichion–VALSE 2021 Commissioning Record", ja: "日音・VALSE 2021年発注記録" } },
  { id: "chronology", slug: "chronology", nav: { en: "Chronology", ja: "時系列" }, title: { en: "Chronology", ja: "時系列" } },
  { id: "commissioning-chain", slug: "commissioning-chain", nav: { en: "Commissioning Chain", ja: "発注経路" }, title: { en: "Commissioning Chain", ja: "発注経路" } },
  { id: "work-before-terms", slug: "work-before-terms", nav: { en: "Work Before Terms", ja: "条件確定前の作業" }, title: { en: "Work Before Terms", ja: "条件確定前の作業" } },
  { id: "compensation-and-rights", slug: "compensation-and-rights", nav: { en: "Compensation and Rights", ja: "報酬と権利" }, title: { en: "Compensation and Rights", ja: "報酬と権利" } },
  { id: "network", slug: "network", nav: { en: "Network", ja: "ネットワーク" }, title: { en: "Institutional Network", ja: "組織ネットワーク" } },
  { id: "evidence", slug: "evidence", nav: { en: "Evidence", ja: "証拠台帳" }, title: { en: "Evidence Ledger", ja: "証拠台帳" } },
  { id: "risk-advisory", slug: "risk-advisory", nav: { en: "Risk Advisory", ja: "リスク助言" }, title: { en: "Prospective Collaborator Risk Advisory", ja: "今後の協業者向けリスク助言" } },
  { id: "methodology", slug: "methodology", nav: { en: "Methodology", ja: "方法論" }, title: { en: "Methodology", ja: "方法論" } },
  { id: "right-of-reply", slug: "right-of-reply", nav: { en: "Right of Reply", ja: "反論・訂正" }, title: { en: "Right of Reply", ja: "反論・訂正" } }
];

const pageById = Object.fromEntries(pages.map((page) => [page.id, page]));

const copy = {
  en: {
    languageName: "English",
    alternateName: "Japanese",
    recordEyebrow: "A documented commissioning record",
    homeSubtitle: "Authority, scope, compensation, rights clearance and work performed before written terms were finalised.",
    thesis1: "This record examines a 2021 music commissioning process in which creator outreach, rights-related enquiries, coordination and payment discussions appear to have progressed before the Reporting Party's scope, compensation and written terms were finalised.",
    thesis2: "The record focuses on commissioning authority, allocation of responsibility, compensation, rights clearance and the documentary gaps that remained unresolved.",
    description: "A documented review of commissioning authority, scope, compensation, rights clearance and unresolved documentary gaps in a 2021 music production process.",
    whatExamines: "What This Record Examines",
    recordSummary: "Record Summary",
    coreSequence: "Core Sequence",
    keyFindings: "Key Findings",
    openQuestions: "Open Questions",
    detailPages: "Detailed Pages",
    privacyTitle: "Privacy and source protection",
    privacyText: "The underlying correspondence is not published in full. Personal data, third-party information and identifying correspondence details have been withheld. Public summaries are limited to information considered necessary to explain the documented transaction structure.",
    sourceLimitation1: "The underlying records are retained privately and are not published in full because they contain personal data, third-party information and identifying correspondence details.",
    sourceLimitation2: "Appropriate verification may be considered subject to confidentiality, legal relevance and redaction review.",
    participants: "Participants",
    establishes: "What it establishes",
    limitations: "What it does not establish",
    evidenceIds: "Evidence IDs",
    status: "Status",
    period: "Period",
    yes: "Yes",
    notPublished: "Not published",
    notEstablished: "Not established",
    notLocated: "Not located",
    openQuestion: "Open question",
    noFinalAgreement: "No final written agreement has been identified in the reviewed material.",
    backRecord: "Back to record",
    recordDirectory: "Record directory",
    generatedFrom: "Generated from public anonymised data only.",
    publicSource: "Public Source",
    notPublishedStatus: "Original not published",
    privateEmail: "Private email record retained by the Reporting Party",
    privateDocument: "Private document retained by the Reporting Party",
    officialPublicSource: "Official public source",
    formNote: "This static page does not auto-publish submissions. Any response or correction must be reviewed before publication.",
    fieldHelp: "Do not include personal data, unrelated third-party information or unsupported allegations.",
    submitDisabled: "Prepare confidential submission",
    figurePrompt: "Hero image prompt",
    promptText: "Editorial forensic network visual, dark graphite and steel-grey background, precise broadcast signal lines, abstract music-rights documents, incomplete contractual nodes, restrained amber warning markers, Japanese corporate documentary aesthetic, clinical and atmospheric, no people, no faces, no logos, no company names, no readable text, no email interface, wide cinematic composition, 16:9."
  },
  ja: {
    languageName: "日本語",
    alternateName: "英語",
    recordEyebrow: "文書化された発注記録",
    homeSubtitle: "書面条件の確定前に行われた発注権限、業務範囲、報酬、権利処理及び作業の検証。",
    thesis1: "本記録は、申告者の業務範囲、報酬及び書面条件が確定する前に、作家への連絡、権利関連の確認、調整及び支払方法の協議が進行したとみられる2021年の音楽制作案件を検証するものです。",
    thesis2: "主な検証対象は、発注権限、責任分担、報酬、権利処理及び未解決の書面上の空白です。",
    description: "2021年の音楽制作過程における発注権限、業務範囲、報酬、権利処理及び未解決の書面上の空白を検証する文書化された記録。",
    whatExamines: "本記録が検証する事項",
    recordSummary: "案件概要",
    coreSequence: "中核的な流れ",
    keyFindings: "主要所見",
    openQuestions: "未解決の論点",
    detailPages: "詳細ページ",
    privacyTitle: "プライバシーと情報源保護",
    privacyText: "基礎となる通信記録は全文公開していません。個人データ、第三者情報及び通信を特定できる詳細は非公開です。公開要約は、記録された取引構造を説明するために必要と考えられる情報に限定しています。",
    sourceLimitation1: "基礎となる記録は非公開で保管され、個人データ、第三者情報及び通信を特定できる詳細を含むため全文公開していません。",
    sourceLimitation2: "適切な検証は、秘密保持、法的関連性及び匿名化確認を条件として検討される場合があります。",
    participants: "関係者",
    establishes: "この記録が示すこと",
    limitations: "この記録が示さないこと",
    evidenceIds: "証拠ID",
    status: "状態",
    period: "時期",
    yes: "はい",
    notPublished: "非公開",
    notEstablished: "確定せず",
    notLocated: "未確認",
    openQuestion: "未解決",
    noFinalAgreement: "確認済み資料内では最終的な書面合意は確認されていません。",
    backRecord: "記録へ戻る",
    recordDirectory: "記録一覧",
    generatedFrom: "公開用の匿名化済みデータのみから生成。",
    publicSource: "公開情報",
    notPublishedStatus: "原本非公開",
    privateEmail: "申告者が保管する非公開メール記録",
    privateDocument: "申告者が保管する非公開文書",
    officialPublicSource: "公式公開情報",
    formNote: "この静的ページでは送信内容を自動公開しません。反論又は訂正は公開前に確認される必要があります。",
    fieldHelp: "個人データ、無関係な第三者情報、根拠のない主張は含めないでください。",
    submitDisabled: "秘密保持前提の提出を準備",
    figurePrompt: "Hero画像プロンプト",
    promptText: "Editorial forensic network visual, dark graphite and steel-grey background, precise broadcast signal lines, abstract music-rights documents, incomplete contractual nodes, restrained amber warning markers, Japanese corporate documentary aesthetic, clinical and atmospheric, no people, no faces, no logos, no company names, no readable text, no email interface, wide cinematic composition, 16:9."
  }
};

const statusLabels = {
  en: {
    DOCUMENTED: "DOCUMENTED",
    CORROBORATED: "CORROBORATED",
    PARTY_STATEMENT: "PARTY STATEMENT",
    INFERRED: "INFERRED",
    DISPUTED: "DISPUTED",
    OPEN_QUESTION: "OPEN QUESTION",
    CONTEXT_ONLY: "CONTEXT ONLY"
  },
  ja: {
    DOCUMENTED: "記録済み",
    CORROBORATED: "複数記録で確認",
    PARTY_STATEMENT: "当事者申述",
    INFERRED: "推認",
    DISPUTED: "争点",
    OPEN_QUESTION: "未解決",
    CONTEXT_ONLY: "背景情報"
  }
};

const sourceTypeLabels = {
  en: {
    "Private Email Record": copy.en.privateEmail,
    "Private Document": copy.en.privateDocument,
    "Public Source": copy.en.officialPublicSource,
    "Not Published": copy.en.notPublishedStatus
  },
  ja: {
    "Private Email Record": copy.ja.privateEmail,
    "Private Document": copy.ja.privateDocument,
    "Public Source": copy.ja.officialPublicSource,
    "Not Published": copy.ja.notPublishedStatus
  }
};

const relationshipTypeLabels = {
  en: {},
  ja: {
    Introduction: "紹介",
    Communication: "連絡",
    Request: "依頼",
    "Rights Enquiry": "権利確認",
    "Creator Outreach": "作家連絡",
    "Demo Delivery": "デモ受領",
    "Payment Discussion": "支払協議",
    "Contract Discussion": "契約協議",
    "Documented Communication": "記録済み連絡",
    "Facility Location": "施設所在地",
    "Programme Credit": "番組クレジット",
    "Publicly Listed Business Activity": "公開事業内容"
  }
};

const lineLabels = {
  en: { solid: "solid", dashed: "dashed", dotted: "dotted" },
  ja: { solid: "実線", dashed: "破線", dotted: "点線" }
};

const categoryLabels = {
  en: {},
  ja: {
    "Holding Company": "持株会社",
    "Music Publisher": "音楽出版社",
    "Production Company": "制作会社",
    Broadcaster: "放送関連",
    Programme: "番組",
    Facility: "施設",
    Person: "人物",
    Project: "企画"
  }
};

function local(value, lang) {
  if (value && typeof value === "object" && !Array.isArray(value) && value[lang] !== undefined) return value[lang];
  return value;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function esc(value) {
  return escapeHtml(local(value, currentLang));
}

let currentLang = "en";

function urlFor(lang, slug = "") {
  const cleanSlug = slug ? `${slug}/` : "";
  if (lang === "ja") return `${recordBase}/ja/${cleanSlug}`;
  return `${recordBase}/${cleanSlug}`;
}

function absUrl(lang, slug = "") {
  return `${siteBase}${urlFor(lang, slug)}`;
}

function outputPath(lang, slug = "") {
  const parts = [outRoot];
  if (lang === "ja") parts.push("ja");
  if (slug) parts.push(slug);
  return path.join(...parts, "index.html");
}

function statusClass(status) {
  return String(status).toLowerCase().replaceAll("_", "-");
}

function EvidenceBadge(status, lang = currentLang) {
  return `<span class="badge ${statusClass(status)}">${escapeHtml(statusLabels[lang][status] || status)}</span>`;
}

function relationshipType(type, lang = currentLang) {
  return relationshipTypeLabels[lang][type] || type;
}

function lineLabel(line, lang = currentLang) {
  return lineLabels[lang][line] || line;
}

function categoryLabel(category, lang = currentLang) {
  return categoryLabels[lang][category] || category;
}

function list(items, lang = currentLang) {
  if (!items || !items.length) return "";
  return `<ul class="mini-list">${items.map((item) => `<li>${escapeHtml(local(item, lang))}</li>`).join("")}</ul>`;
}

function section(title, body, options = {}) {
  const note = options.note ? `<p class="section-note">${escapeHtml(options.note)}</p>` : "";
  const badge = options.badge ? EvidenceBadge(options.badge) : "";
  return `
    <section class="panel" id="${escapeHtml(options.id || "")}">
      <div class="panel-head">
        <div>
          <h2>${escapeHtml(title)}</h2>
          ${note}
        </div>
        ${badge}
      </div>
      ${body}
    </section>
  `;
}

function PrivacyNotice(lang = currentLang) {
  return `
    <div class="privacy">
      <h3>${escapeHtml(copy[lang].privacyTitle)}</h3>
      <p>${escapeHtml(copy[lang].privacyText)}</p>
    </div>
  `;
}

function SourceLimitation(lang = currentLang) {
  return `
    <div class="notice">
      <p>${escapeHtml(copy[lang].sourceLimitation1)}</p>
      <p>${escapeHtml(copy[lang].sourceLimitation2)}</p>
    </div>
  `;
}

function EvidenceCard(item, lang = currentLang) {
  const sourceLabel = sourceTypeLabels[lang][item.sourceType] || item.sourceType;
  const publicationLabel = sourceTypeLabels[lang][item.sourcePublicationStatus] || item.sourcePublicationStatus;
  return `
    <article class="evidence-card">
      <div class="timeline-meta">
        ${EvidenceBadge(item.status, lang)}
        <span class="pill">${escapeHtml(item.id)}</span>
        <span class="pill">${escapeHtml(item.period)}</span>
      </div>
      <h3>${escapeHtml(local(item.subjectCategory, lang))}</h3>
      <p>${escapeHtml(local(item.summary, lang))}</p>
      <dl class="evidence-meta">
        <div class="meta-block"><dt>${lang === "ja" ? "送信者カテゴリ" : "Sender Category"}</dt><dd>${escapeHtml(local(item.senderCategory, lang))}</dd></div>
        <div class="meta-block"><dt>${lang === "ja" ? "受信者カテゴリ" : "Recipient Category"}</dt><dd>${escapeHtml(local(item.recipientCategory, lang))}</dd></div>
        <div class="meta-block"><dt>${lang === "ja" ? "情報源" : "Source"}</dt><dd>${escapeHtml(sourceLabel)}</dd></div>
        <div class="meta-block"><dt>${lang === "ja" ? "公開状態" : "Publication Status"}</dt><dd>${escapeHtml(publicationLabel)}</dd></div>
      </dl>
      <div>
        <h3>${escapeHtml(copy[lang].establishes)}</h3>
        ${list(local(item.establishes, lang), lang)}
      </div>
      <div>
        <h3>${escapeHtml(copy[lang].limitations)}</h3>
        ${list(local(item.limitations, lang), lang)}
      </div>
    </article>
  `;
}

function OpenQuestionCard(question, index, lang = currentLang) {
  return `
    <article class="question-card">
      ${EvidenceBadge("OPEN_QUESTION", lang)}
      <h3>${String(index + 1).padStart(2, "0")}</h3>
      <p>${escapeHtml(local(question, lang))}</p>
    </article>
  `;
}

function RiskAdvisoryTable(lang = currentLang) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>${lang === "ja" ? "論点" : "Issue"}</th>
            <th>${lang === "ja" ? "取引上のリスク" : "Transaction Risk"}</th>
            <th>${lang === "ja" ? "着手前の防御策" : "Protection Before Work"}</th>
          </tr>
        </thead>
        <tbody>
          ${riskAdvisory.table.map((row) => `
            <tr>
              <td>${escapeHtml(local(row.issue, lang))}</td>
              <td>${escapeHtml(local(row.risk, lang))}</td>
              <td>${escapeHtml(local(row.protection, lang))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function MethodologyNote(lang = currentLang) {
  const items = [
    ["DOCUMENTED", { en: "Primary source directly supports the statement.", ja: "一次資料が当該記述を直接支えます。" }],
    ["CORROBORATED", { en: "Multiple independent records support the statement.", ja: "複数の独立した記録が当該記述を支えます。" }],
    ["PARTY_STATEMENT", { en: "A statement made by one party but not independently established.", ja: "一方当事者の申述であり、独立確認は未了です。" }],
    ["INFERRED", { en: "A reasoned inference from the records, clearly marked as such.", ja: "記録からの合理的推認であり、その旨を明示します。" }],
    ["DISPUTED", { en: "The parties or records provide conflicting interpretations.", ja: "当事者又は記録の解釈が対立しています。" }],
    ["OPEN_QUESTION", { en: "The reviewed materials do not resolve the issue.", ja: "確認済み資料では当該論点は解決しません。" }],
    ["CONTEXT_ONLY", { en: "Public background information that does not establish record-specific conduct.", ja: "本件固有の行為を示さない公開背景情報です。" }]
  ];
  return `<div class="grid two">${items.map(([status, text]) => `
    <article class="card">
      ${EvidenceBadge(status, lang)}
      <p>${escapeHtml(local(text, lang))}</p>
    </article>
  `).join("")}</div>`;
}

function RightOfReplyPanel(lang = currentLang) {
  const fields = [
    { id: "name", label: { en: "Name", ja: "氏名" }, type: "text" },
    { id: "organisation", label: { en: "Organisation", ja: "組織" }, type: "text" },
    { id: "role", label: { en: "Role", ja: "役割" }, type: "text" },
    { id: "email", label: { en: "Email", ja: "メール" }, type: "email" },
    { id: "evidence", label: { en: "Evidence ID or page concerned", ja: "対象の証拠ID又はページ" }, type: "text", full: true },
    { id: "response", label: { en: "Correction or response", ja: "訂正又は反論" }, type: "textarea", full: true },
    { id: "supporting", label: { en: "Supporting document", ja: "補足資料" }, type: "text", full: true },
    { id: "consent", label: { en: "Consent to publication", ja: "公開への同意" }, type: "text" },
    { id: "format", label: { en: "Preferred publication format", ja: "希望する公開形式" }, type: "text" }
  ];
  return `
    <div class="notice"><p>${escapeHtml(copy[lang].formNote)}</p></div>
    <form class="reply-form" aria-describedby="reply-help">
      ${fields.map((field) => `
        <div class="field ${field.full ? "full" : ""}">
          <label for="${field.id}">${escapeHtml(local(field.label, lang))}</label>
          ${field.type === "textarea"
            ? `<textarea id="${field.id}" name="${field.id}" autocomplete="off"></textarea>`
            : `<input id="${field.id}" name="${field.id}" type="${field.type}" autocomplete="off">`}
        </div>
      `).join("")}
      <p class="muted field full" id="reply-help">${escapeHtml(copy[lang].fieldHelp)}</p>
      <div class="field full"><button class="btn primary" type="button">${escapeHtml(copy[lang].submitDisabled)}</button></div>
    </form>
  `;
}

function SourceLimitationCard(lang = currentLang) {
  return `
    <article class="card">
      ${EvidenceBadge("OPEN_QUESTION", lang)}
      <h3>${lang === "ja" ? "書面不存在の意味" : "Meaning of a missing document"}</h3>
      <p>${lang === "ja"
        ? "確認済み資料内で書面が見つからないことは、その書面が一切存在しなかったことの証明ではありません。確認済み資料内では特定されなかった、という意味に限られます。"
        : "Absence of a located document does not prove that no such document ever existed. It means only that no such document was identified in the reviewed corpus."}</p>
    </article>
  `;
}

function navCards(lang = currentLang) {
  return `<div class="grid">${pages.filter((page) => page.id !== "index").map((page) => `
    <a class="card card-link" href="${urlFor(lang, page.slug)}">
      <h3>${escapeHtml(local(page.title, lang))}</h3>
      <p>${escapeHtml(navDescriptions[lang][page.id])}</p>
    </a>
  `).join("")}</div>`;
}

function subjectEntityStrip(lang = currentLang) {
  const networkNodes = Object.fromEntries(entities.networkNodes.map((node) => [node.id, node]));
  const nichion = networkNodes.nichion;
  const valse = networkNodes.valse;
  const label = lang === "ja" ? "公開上の対象組織" : "Public subject organisations";
  const via = lang === "ja" ? "via 会社名" : "via company name";
  return `
    <div class="grid two">
      <article class="card">
        ${EvidenceBadge("CONTEXT_ONLY", lang)}
        <h3>${escapeHtml(local(nichion.label, lang))}</h3>
        <p>${escapeHtml(label)}</p>
        <p class="muted"><a href="${escapeHtml(nichion.sourceUrl)}" rel="noopener">${escapeHtml(nichion.sourceUrl)}</a></p>
      </article>
      <article class="card">
        ${EvidenceBadge("CONTEXT_ONLY", lang)}
        <h3>${escapeHtml(via)} ${escapeHtml(local(valse.label, lang))}</h3>
        <p>${escapeHtml(label)}</p>
        <p class="muted"><a href="${escapeHtml(valse.sourceUrl)}" rel="noopener">${escapeHtml(valse.sourceUrl)}</a></p>
      </article>
    </div>
  `;
}

function CounterpartyPeople(lang = currentLang) {
  const note = lang === "ja"
    ? "以下は相手方として公開表示する人物・組織です。申告者側の氏名、レーベル名、アーティスト名義、メール、ドメイン、所在地、肩書は掲載しません。"
    : "The following are counterparty people and organisations shown in the public record. The Reporting Party's name, label, artist identity, email, domain, location and identifying biography are withheld.";
  return `
    <div class="notice"><p>${escapeHtml(note)}</p></div>
    <div class="grid">
      ${entities.counterpartyPeople.map((person) => `
        <article class="card">
          ${EvidenceBadge(person.status, lang)}
          <h3>${escapeHtml(local(person.name, lang))}</h3>
          <p>${escapeHtml(local(person.organisation, lang))}</p>
          <p>${escapeHtml(local(person.publicRole, lang))}</p>
          <p class="muted">${escapeHtml(local(person.recordRole, lang))}</p>
          <p class="muted">${escapeHtml(local(person.sourceBasis, lang))}</p>
        </article>
      `).join("")}
      <article class="card">
        ${EvidenceBadge("DOCUMENTED", lang)}
        <h3>${lang === "ja" ? "申告者" : "Reporting Party"}</h3>
        <p>${lang === "ja" ? "独立事業者" : "Independent business participant"}</p>
        <p class="muted">${lang === "ja"
          ? "公開上は匿名表示に統一します。氏名、レーベル名、アーティスト名義、メール、ドメイン等は掲載しません。"
          : "Shown only under an anonymised public label. Name, label, artist identity, email, domain and related identifiers are not published."}</p>
      </article>
    </div>
  `;
}

const navDescriptions = {
  en: {
    chronology: "Event-level sequence without exact email times.",
    "commissioning-chain": "Role-based authority and communication map.",
    "work-before-terms": "Central table of work performed before final written terms.",
    "compensation-and-rights": "Payment, cost and rights questions separated by topic.",
    network: "Institutional context only, with relationship limits.",
    evidence: "Public-safe evidence ledger without raw correspondence.",
    "risk-advisory": "Checklist for prospective collaborators.",
    methodology: "Corpus, classification and redaction policy.",
    "right-of-reply": "Correction and response pathway."
  },
  ja: {
    chronology: "正確なメール時刻を出さない出来事単位の流れ。",
    "commissioning-chain": "役割ベースの権限及び連絡関係図。",
    "work-before-terms": "最終書面条件前の作業を示す中核表。",
    "compensation-and-rights": "支払、費用及び権利論点を分離して整理。",
    network: "関係の限界を明示した組織的背景のみ。",
    evidence: "原文通信を出さない公開安全化済み証拠台帳。",
    "risk-advisory": "今後の協業者向けチェックリスト。",
    methodology: "資料範囲、分類及び匿名化方針。",
    "right-of-reply": "訂正及び反論の経路。"
  }
};

function wrapSvgText(text, maxChars = 18) {
  const clean = String(text);
  if (!clean.includes(" ")) {
    const parts = [];
    for (let i = 0; i < clean.length; i += maxChars) parts.push(clean.slice(i, i + maxChars));
    return parts.slice(0, 3);
  }
  const lines = [];
  let line = "";
  for (const word of clean.split(/\s+/)) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

function svgNode(id, x, y, w, h, label, status) {
  const lines = wrapSvgText(label, currentLang === "ja" ? 10 : 18);
  const className = status === "OPEN_QUESTION" ? "svg-node open" : "svg-node";
  const textY = y + h / 2 - ((lines.length - 1) * 9);
  return `
    <g class="${className}">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10"/>
      ${lines.map((line, i) => `<text x="${x + w / 2}" y="${textY + i * 18}" text-anchor="middle">${escapeHtml(line)}</text>`).join("")}
    </g>
  `;
}

function RelationshipGraph(lang = currentLang) {
  const roleById = Object.fromEntries(entities.recordRoles.map((role) => [role.id, role]));
  const nodes = {
    "valse-representative": [60, 60, 190, 72],
    "nichion-personnel": [60, 230, 190, 72],
    "reporting-party": [390, 145, 200, 80],
    "external-creators": [740, 60, 190, 72],
    "rights-administration": [740, 230, 190, 72],
    "budget-approval": [390, 330, 200, 72],
    "contract-documentation": [740, 360, 190, 72]
  };
  const lineData = [
    ["valse-representative", "reporting-party", "M250 96 C310 96 330 166 390 166", 300, 92],
    ["nichion-personnel", "reporting-party", "M250 266 C310 266 330 184 390 184", 300, 258],
    ["reporting-party", "external-creators", "M590 166 C650 166 675 96 740 96", 630, 92],
    ["nichion-personnel", "rights-administration", "M250 266 C420 304 590 304 740 266", 480, 300],
    ["reporting-party", "nichion-personnel", "M390 205 C330 220 310 246 250 246", 305, 226],
    ["budget-approval", "nichion-personnel", "M390 366 C305 358 285 286 250 286", 282, 350],
    ["contract-documentation", "reporting-party", "M740 396 C650 386 620 224 590 205", 650, 350]
  ];
  const relMap = new Map(relationships.commissioning.map((rel) => [`${rel.from}->${rel.to}`, rel]));
  return `
    <svg class="relationship-svg" viewBox="0 0 1000 500" role="img" aria-label="${lang === "ja" ? "発注経路図" : "Commissioning chain diagram"}">
      <defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="#8fb6c2"/></marker></defs>
      ${lineData.map(([from, to, pathD, lx, ly]) => {
        const rel = relMap.get(`${from}->${to}`) || relMap.get(`${to}->${from}`);
        const cls = `svg-line ${rel?.line || "solid"}`;
        return `<path class="${cls}" d="${pathD}" marker-end="url(#arrow)"/><text class="svg-label" x="${lx}" y="${ly}">${escapeHtml(local(rel?.label || "", lang))}</text>`;
      }).join("")}
      ${Object.entries(nodes).map(([id, box]) => {
        const role = roleById[id];
        return svgNode(id, ...box, local(role.label, lang), role.status);
      }).join("")}
    </svg>
    ${lineLegend(lang)}
  `;
}

function NetworkGraph(lang = currentLang) {
  const nodeById = Object.fromEntries(entities.networkNodes.map((node) => [node.id, node]));
  const nodes = {
    nichion: [70, 70, 190, 72],
    valse: [70, 300, 190, 72],
    "proposed-project": [405, 185, 210, 82],
    "broadcast-context": [740, 70, 190, 72],
    "facility-context": [740, 300, 190, 72]
  };
  const lineData = [
    ["nichion", "proposed-project", "M260 106 C330 120 350 206 405 214", 318, 132],
    ["valse", "proposed-project", "M260 336 C330 320 350 240 405 232", 316, 322],
    ["valse", "facility-context", "M260 336 C430 392 590 392 740 336", 480, 388],
    ["valse", "broadcast-context", "M260 318 C430 230 560 128 740 106", 462, 214],
    ["nichion", "broadcast-context", "M260 106 C430 54 570 54 740 106", 470, 62]
  ];
  const relMap = new Map(relationships.institutional.map((rel) => [`${rel.from}->${rel.to}`, rel]));
  return `
    <svg class="network-svg" viewBox="0 0 1000 460" role="img" aria-label="${lang === "ja" ? "組織的背景ネットワーク図" : "Institutional context network diagram"}">
      ${lineData.map(([from, to, pathD, lx, ly]) => {
        const rel = relMap.get(`${from}->${to}`);
        const cls = `svg-line ${rel?.line || "solid"}`;
        return `<path class="${cls}" d="${pathD}"/><text class="svg-label" x="${lx}" y="${ly}">${escapeHtml(local(rel?.label || "", lang))}</text>`;
      }).join("")}
      ${Object.entries(nodes).map(([id, box]) => {
        const node = nodeById[id];
        return svgNode(id, ...box, local(node.label, lang), node.status);
      }).join("")}
    </svg>
    ${lineLegend(lang)}
  `;
}

function lineLegend(lang = currentLang) {
  return `
    <div class="legend">
      <span><i class="line-key"></i>${lang === "ja" ? "実線 = 記録済み連絡" : "solid line = documented communication"}</span>
      <span><i class="line-key dashed"></i>${lang === "ja" ? "破線 = 推認又は背景関係" : "dashed line = inferred or contextual relationship"}</span>
      <span><i class="line-key dotted"></i>${lang === "ja" ? "点線 = 未解決又は争点" : "dotted line = unresolved or disputed relationship"}</span>
    </div>
  `;
}

function WorkBeforeTermsFlow(lang = currentLang) {
  const labels = [
    ["CONTACT", "連絡"],
    ["PROJECT DISCUSSION", "企画協議"],
    ["CREATOR OUTREACH", "作家連絡"],
    ["RIGHTS ENQUIRIES", "権利確認"],
    ["COORDINATION", "調整"],
    ["PAYMENT DISCUSSION", "支払協議"],
    ["FEE PROPOSAL", "報酬提示"],
    ["CONTRACT DISCUSSION", "契約協議"],
    ["DISPUTE", "紛争化"]
  ];
  return `
    <svg class="flow-svg" viewBox="0 0 1100 310" role="img" aria-label="${lang === "ja" ? "条件確定前作業の流れ" : "Work before terms flow"}">
      ${labels.map((pair, index) => {
        const x = 36 + (index % 3) * 350;
        const y = 34 + Math.floor(index / 3) * 92;
        const text = lang === "ja" ? pair[1] : pair[0];
        const status = index < 6 ? "DOCUMENTED" : index === 6 ? "DISPUTED" : "OPEN_QUESTION";
        const lines = wrapSvgText(text, lang === "ja" ? 8 : 20);
        return `
          <g class="${status === "OPEN_QUESTION" ? "svg-node open" : "svg-node"}">
            <rect x="${x}" y="${y}" width="280" height="58" rx="10"/>
            ${lines.map((line, i) => `<text x="${x + 140}" y="${y + 28 + i * 16}" text-anchor="middle">${escapeHtml(line)}</text>`).join("")}
          </g>
          ${index < labels.length - 1 ? `<path class="svg-line ${index >= 5 ? "dotted" : ""}" d="${index % 3 === 2 ? `M${x + 140} ${y + 58} V${y + 82} H176` : `M${x + 280} ${y + 29} H${x + 348}`}"/>` : ""}
        `;
      }).join("")}
    </svg>
  `;
}

function workTable(lang = currentLang) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>${lang === "ja" ? "作業" : "Activity"}</th>
            <th>${lang === "ja" ? "依頼又は協議" : "Requested or Discussed"}</th>
            <th>${lang === "ja" ? "作業実施" : "Work Performed"}</th>
            <th>${lang === "ja" ? "受領者" : "Recipient"}</th>
            <th>${lang === "ja" ? "範囲確定" : "Scope Confirmed"}</th>
            <th>${lang === "ja" ? "報酬確定" : "Fee Confirmed"}</th>
            <th>${lang === "ja" ? "書面発注確認" : "Written Order Located"}</th>
            <th>${lang === "ja" ? "状態" : "Status"}</th>
          </tr>
        </thead>
        <tbody>
          ${findings.workBeforeTerms.map((row) => `
            <tr>
              <td>${escapeHtml(local(row.activity, lang))}</td>
              <td class="yes">${row.requestedOrDiscussed ? escapeHtml(copy[lang].yes) : escapeHtml(copy[lang].notEstablished)}</td>
              <td class="yes">${row.workPerformed ? escapeHtml(copy[lang].yes) : escapeHtml(copy[lang].notEstablished)}</td>
              <td>${escapeHtml(local(row.recipient, lang))}</td>
              <td class="unknown">${escapeHtml(local(row.scopeConfirmed, lang))}</td>
              <td class="unknown">${escapeHtml(local(row.feeConfirmed, lang))}</td>
              <td class="unknown">${escapeHtml(local(row.writtenOrderLocated, lang))}</td>
              <td>${EvidenceBadge(row.status, lang)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function compensationTable(lang = currentLang) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>${lang === "ja" ? "区分" : "Category"}</th>
            <th>${lang === "ja" ? "金額" : "Amount Discussed"}</th>
            <th>${lang === "ja" ? "名目" : "Purpose Attributed"}</th>
            <th>${lang === "ja" ? "伝達者" : "Communicator"}</th>
            <th>${lang === "ja" ? "段階" : "Project Stage"}</th>
            <th>${lang === "ja" ? "受諾又は解決状況" : "Acceptance or Resolution"}</th>
            <th>${lang === "ja" ? "状態" : "Status"}</th>
          </tr>
        </thead>
        <tbody>
          ${findings.compensation.map((row, index) => `
            <tr>
              <td>${escapeHtml(local(row.item, lang))}</td>
              <td class="unknown">${escapeHtml(index === 0 ? copy[lang].notPublished : copy[lang].notEstablished)}</td>
              <td>${escapeHtml(local(row.note, lang))}</td>
              <td>${escapeHtml(index === 0 ? (lang === "ja" ? "発注側関係者" : "Commissioning-side personnel") : copy[lang].notEstablished)}</td>
              <td>${escapeHtml(index <= 3 ? (lang === "ja" ? "企画期間中" : "Project period") : copy[lang].openQuestion)}</td>
              <td class="unknown">${escapeHtml(copy[lang].openQuestion)}</td>
              <td>${EvidenceBadge(row.status, lang)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function pageHero(page, lang = currentLang, extra = "") {
  const title = local(page.title, lang);
  return `
    <header class="record-hero">
      <div class="hero-content">
        <p class="eyebrow">${escapeHtml(copy[lang].recordEyebrow)}</p>
        <h1 class="display">${escapeHtml(title)}</h1>
        <p class="lede">${escapeHtml(extra || copy[lang].description)}</p>
        <div class="hero-actions">
          <a class="btn primary" href="${urlFor(lang)}">${escapeHtml(copy[lang].backRecord)}</a>
          <a class="btn" href="/records/">${escapeHtml(copy[lang].recordDirectory)}</a>
        </div>
      </div>
    </header>
  `;
}

function homePage(lang = currentLang) {
  const hero = `
    <header class="record-hero">
      <div class="hero-content">
        <p class="eyebrow">${escapeHtml(copy[lang].recordEyebrow)}</p>
        <h1 class="display">${lang === "ja" ? "日音・VALSE 2021年発注記録" : "Nichion–VALSE 2021 Commissioning Record"}</h1>
        <p class="lede">${escapeHtml(copy[lang].homeSubtitle)}</p>
        <div class="pill-row">
          ${(lang === "ja" ? ["発注権限", "業務範囲", "報酬", "権利", "書面上の空白"] : ["Authority", "Scope", "Compensation", "Rights", "Documentary Gaps"]).map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("")}
        </div>
      </div>
    </header>
  `;

  const thesis = section(
    lang === "ja" ? "中心命題" : "Record Thesis",
    `<div class="summary-stack">
      <p class="notice">${escapeHtml(copy[lang].thesis1)}</p>
      <p class="notice">${escapeHtml(copy[lang].thesis2)}</p>
      <details class="notice">
        <summary>${escapeHtml(copy[lang].figurePrompt)}</summary>
        <p>${escapeHtml(copy[lang].promptText)}</p>
      </details>
    </div>`,
    { id: "thesis", badge: "DOCUMENTED" }
  );

  const subjectEntities = section(
    lang === "ja" ? "公開上の対象組織" : "Public Subject Organisations",
    subjectEntityStrip(lang),
    { id: "subject-organisations", badge: "CONTEXT_ONLY" }
  );

  const counterpartyPeople = section(
    lang === "ja" ? "相手方の人物・組織" : "Counterparty People and Organisations",
    CounterpartyPeople(lang),
    { id: "counterparty-people", badge: "DOCUMENTED" }
  );

  const examines = section(copy[lang].whatExamines, `<div class="grid">${findings.examines.map((item) => `
    <article class="card">
      ${EvidenceBadge(item.status, lang)}
      <h3>${escapeHtml(local(item.title, lang))}</h3>
      <p>${escapeHtml(local(item.body, lang))}</p>
    </article>
  `).join("")}</div>`, { id: "examines" });

  const summary = section(copy[lang].recordSummary, `<div class="summary-stack">${findings.recordSummary.map((item) => `
    <article class="summary-item">
      ${EvidenceBadge(item.status, lang)}
      <p>${escapeHtml(local(item.text, lang))}</p>
    </article>
  `).join("")}</div>`, { id: "summary" });

  const sequence = section(copy[lang].coreSequence, `<div class="sequence">${findings.coreSequence.map((item, index) => `
    <article class="step">
      ${EvidenceBadge(item.status, lang)}
      <strong>${String(index + 1).padStart(2, "0")} ${escapeHtml(local(item.label, lang))}</strong>
    </article>
  `).join("")}</div>`, { id: "sequence" });

  const keyFindings = section(copy[lang].keyFindings, `<div class="grid">${findings.keyFindings.map((item) => `
    <article class="finding-card">
      ${EvidenceBadge(item.status, lang)}
      <p>${escapeHtml(local(item.text, lang))}</p>
    </article>
  `).join("")}</div>`, { id: "findings" });

  const questions = section(copy[lang].openQuestions, `<div class="grid two">${openQuestions.map((question, index) => OpenQuestionCard(question, index, lang)).join("")}</div>`, { id: "open-questions" });
  const navigation = section(copy[lang].detailPages, navCards(lang), { id: "pages" });

  return `${hero}<main class="main">${subjectEntities}${counterpartyPeople}${thesis}${examines}${summary}${sequence}${keyFindings}${questions}${navigation}${PrivacyNotice(lang)}</main>`;
}

function chronologyPage(lang = currentLang) {
  return `${pageHero(pageById.chronology, lang, lang === "ja" ? "メール単位ではなく、出来事単位で整理した公開安全版の時系列です。" : "Public-safe event-level chronology, not an email-by-email publication.")}
    <main class="main">
      ${section(local(pageById.chronology.title, lang), `<div class="timeline">${chronology.map((event) => `
        <article class="timeline-card">
          <div class="timeline-meta">
            ${EvidenceBadge(event.status, lang)}
            <span class="pill">${escapeHtml(event.id)}</span>
            <span class="pill">${escapeHtml(event.period)}</span>
          </div>
          <h3>${escapeHtml(local(event.title, lang))}</h3>
          <p>${escapeHtml(local(event.summary, lang))}</p>
          <div class="grid two">
            <div class="card">
              <h3>${escapeHtml(copy[lang].participants)}</h3>
              ${list(local(event.participants, lang), lang)}
            </div>
            <div class="card">
              <h3>${escapeHtml(copy[lang].evidenceIds)}</h3>
              ${list(event.evidenceIds, lang)}
            </div>
            <div class="card">
              <h3>${escapeHtml(copy[lang].establishes)}</h3>
              ${list(local(event.establishes, lang), lang)}
            </div>
            <div class="card">
              <h3>${escapeHtml(copy[lang].limitations)}</h3>
              ${list(local(event.doesNotEstablish, lang), lang)}
            </div>
          </div>
        </article>
      `).join("")}</div>`, { id: "chronology", badge: "DOCUMENTED" })}
      ${PrivacyNotice(lang)}
    </main>`;
}

function commissioningChainPage(lang = currentLang) {
  const roles = `<div class="grid">${entities.recordRoles.map((role) => `
    <article class="card">
      ${EvidenceBadge(role.status, lang)}
      <h3>${escapeHtml(local(role.label, lang))}</h3>
      <p>${escapeHtml(local(role.role, lang))}</p>
      <p class="muted">${escapeHtml(local(role.description, lang))}</p>
    </article>
  `).join("")}</div>`;
  const relTable = `
    <div class="table-wrap">
      <table>
        <thead><tr><th>${lang === "ja" ? "関係" : "Relationship"}</th><th>${lang === "ja" ? "線種" : "Line"}</th><th>${lang === "ja" ? "注記" : "Note"}</th><th>${lang === "ja" ? "状態" : "Status"}</th></tr></thead>
        <tbody>${relationships.commissioning.map((rel) => `<tr><td>${escapeHtml(local(rel.label, lang))}</td><td>${escapeHtml(lineLabel(rel.line, lang))}</td><td>${escapeHtml(local(rel.note, lang))}</td><td>${EvidenceBadge(rel.status, lang)}</td></tr>`).join("")}</tbody>
      </table>
    </div>`;
  return `${pageHero(pageById["commissioning-chain"], lang, lang === "ja" ? "紹介、連絡、依頼、権利確認、デモ受領、支払協議及び契約協議を役割単位で表示します。" : "Role-based view of introduction, communication, request, rights enquiry, demo delivery, payment discussion and contract discussion.")}
    <main class="main">
      ${section(lang === "ja" ? "相手方の人物・組織" : "Counterparty People and Organisations", CounterpartyPeople(lang), { id: "counterparty-people", badge: "DOCUMENTED" })}
      ${section(lang === "ja" ? "役割" : "Roles", roles, { id: "roles" })}
      ${section(lang === "ja" ? "発注経路図" : "Commissioning Chain Diagram", RelationshipGraph(lang), { id: "diagram", badge: "OPEN_QUESTION" })}
      ${section(lang === "ja" ? "関係の意味" : "Relationship Meaning", relTable, { id: "relationships" })}
      ${PrivacyNotice(lang)}
    </main>`;
}

function workBeforeTermsPage(lang = currentLang) {
  const intro = lang === "ja"
    ? "このページは本件の中心ページです。作業が進んだことと、範囲、報酬、書面発注が確定していたことは分けて表示します。"
    : "This is the central page for the record. It separates work activity from final confirmation of scope, fee and written order.";
  return `${pageHero(pageById["work-before-terms"], lang, intro)}
    <main class="main">
      ${section(lang === "ja" ? "流れ" : "Sequence", WorkBeforeTermsFlow(lang), { id: "flow", badge: "DOCUMENTED" })}
      ${section(local(pageById["work-before-terms"].title, lang), workTable(lang), { id: "work-table", badge: "OPEN_QUESTION" })}
      ${section(lang === "ja" ? "書面上の空白" : "Documentary Gap", `<div class="grid two">${SourceLimitationCard(lang)}<article class="card">${EvidenceBadge("OPEN_QUESTION", lang)}<h3>${escapeHtml(copy[lang].openQuestion)}</h3><p>${escapeHtml(lang === "ja" ? "範囲、報酬、発注書面、中止時支払及びデモの終了後使用は、確認済み資料内では未解決です。" : "Scope, fee, written order, cancellation payment and post-project demo use remain unresolved in the reviewed material.")}</p></article></div>`, { id: "gap" })}
      ${PrivacyNotice(lang)}
    </main>`;
}

function compensationAndRightsPage(lang = currentLang) {
  const rightsList = (lang === "ja" ? findings.rightsJa : findings.rights).map((topic) => `
    <article class="card">
      ${EvidenceBadge("OPEN_QUESTION", lang)}
      <h3>${escapeHtml(topic)}</h3>
      <p>${escapeHtml(copy[lang].noFinalAgreement)}</p>
    </article>
  `).join("");
  const safePhrases = lang === "ja"
    ? ["記録は、権利関連の確認が行われたことを示しています。", "確認済み資料は、最終的な権利合意を確定しません。", "確認済み資料内では、最終的なライセンス又は譲渡契約は確認されていません。"]
    : ["The records indicate that rights-related questions were raised.", "The materials reviewed do not establish a final rights agreement.", "No final written licence or assignment has been identified in the reviewed material."];
  return `${pageHero(pageById["compensation-and-rights"], lang, lang === "ja" ? "報酬、第三者費用、海外送金、税務、権利処理を分離して整理します。" : "Compensation, third-party costs, international transfer, tax and rights topics are separated.")}
    <main class="main">
      ${section(lang === "ja" ? "報酬" : "Compensation", compensationTable(lang), { id: "compensation", badge: "DISPUTED" })}
      ${section(lang === "ja" ? "権利" : "Rights", `<div class="summary-stack">${safePhrases.map((text) => `<p class="notice">${escapeHtml(text)}</p>`).join("")}</div><div class="grid">${rightsList}</div>`, { id: "rights", badge: "OPEN_QUESTION" })}
      ${PrivacyNotice(lang)}
    </main>`;
}

function networkPage(lang = currentLang) {
  const note = lang === "ja"
    ? "このネットワーク図は組織的背景のみを示します。ここに示す関係は、本件固有の証拠で別途支えられない限り、争点となる発注判断への関与を示すものではありません。"
    : "This network map provides institutional context only. A relationship shown here does not establish involvement in the disputed commissioning decisions unless separately supported by record-specific evidence.";
  const doNotEquate = lang === "ja"
    ? ["所有関係 ≠ 番組クレジット", "施設所在地 ≠ 子会社関係", "取引関係 ≠ 企業系列", "メール連絡 ≠ 決裁権限"]
    : ["ownership does not equal programme credit", "facility location does not equal subsidiary relationship", "business relationship does not equal corporate affiliation", "email communication does not equal decision-making authority"];
  const nodes = `<div class="grid">${entities.networkNodes.map((node) => `
    <article class="card">
      ${EvidenceBadge(node.status, lang)}
      <h3>${escapeHtml(local(node.label, lang))}</h3>
      <p>${escapeHtml(categoryLabel(node.category, lang))}</p>
      <p class="muted">${escapeHtml(local(node.description, lang))}</p>
      ${node.sourceUrl ? `<p class="muted">${escapeHtml(copy[lang].publicSource)}: <a href="${escapeHtml(node.sourceUrl)}" rel="noopener">${escapeHtml(node.sourceUrl)}</a></p>` : ""}
    </article>
  `).join("")}</div>`;
  const rels = `<div class="table-wrap"><table><thead><tr><th>${lang === "ja" ? "関係種別" : "Relationship Type"}</th><th>${lang === "ja" ? "注記" : "Note"}</th><th>${lang === "ja" ? "状態" : "Status"}</th></tr></thead><tbody>${relationships.institutional.map((rel) => `<tr><td>${escapeHtml(relationshipType(rel.type, lang))}</td><td>${escapeHtml(local(rel.note, lang))}</td><td>${EvidenceBadge(rel.status, lang)}</td></tr>`).join("")}</tbody></table></div>`;
  return `${pageHero(pageById.network, lang, note)}
    <main class="main">
      ${section(lang === "ja" ? "重要な注記" : "Important Note", `<p class="notice">${escapeHtml(note)}</p><div class="grid four">${doNotEquate.map((item) => `<article class="card"><p>${escapeHtml(item)}</p></article>`).join("")}</div>`, { id: "note", badge: "CONTEXT_ONLY" })}
      ${section(lang === "ja" ? "ネットワーク図" : "Network Map", NetworkGraph(lang), { id: "map", badge: "CONTEXT_ONLY" })}
      ${section(lang === "ja" ? "ノード" : "Nodes", nodes, { id: "nodes" })}
      ${section(lang === "ja" ? "相手方人物" : "Counterparty People", CounterpartyPeople(lang), { id: "counterparty-people", badge: "DOCUMENTED" })}
      ${section(lang === "ja" ? "関係" : "Relationships", rels, { id: "relationships" })}
      ${PrivacyNotice(lang)}
    </main>`;
}

function evidencePage(lang = currentLang) {
  return `${pageHero(pageById.evidence, lang, lang === "ja" ? "公開版には原本、メール画面、本文、件名全文、署名、ヘッダーを掲載しません。" : "The public version does not publish originals, email screenshots, bodies, full subject lines, signatures or headers.")}
    <main class="main">
      ${section(local(pageById.evidence.title, lang), `${SourceLimitation(lang)}<div class="evidence-grid">${evidence.map((item) => EvidenceCard(item, lang)).join("")}</div>`, { id: "ledger", badge: "DOCUMENTED" })}
      ${PrivacyNotice(lang)}
    </main>`;
}

function riskPage(lang = currentLang) {
  const advisory = lang === "ja"
    ? "この助言は、文書化された2021年の取引から導いたものです。同じ流れが他の案件でも発生したことを示すものではありません。"
    : "This advisory is derived from the documented 2021 transaction. It does not establish that the same sequence occurred in any other project.";
  return `${pageHero(pageById["risk-advisory"], lang, advisory)}
    <main class="main">
      ${section(lang === "ja" ? "注意書き" : "Advisory Notice", `<p class="notice">${escapeHtml(advisory)}</p><figure><img src="/records/nichion-valse-2021/assets/og/risk-advisory-og.svg" alt="${escapeHtml(lang === "ja" ? "着手前に発注主体、権限、範囲、報酬、権利、支払、中止条件を確認するリスク助言画像。" : "Risk advisory image listing entity, authority, scope, fee, rights, payment and cancellation checks before work.")}"></figure>`, { id: "notice", badge: "DOCUMENTED" })}
      ${section(lang === "ja" ? "チェックリスト" : "Checklist", `<div class="grid two">${riskAdvisory.checklist.map((item) => `<article class="card">${EvidenceBadge("OPEN_QUESTION", lang)}<p>${escapeHtml(local(item, lang))}</p></article>`).join("")}</div>`, { id: "checklist" })}
      ${section(lang === "ja" ? "取引リスク表" : "Risk Table", RiskAdvisoryTable(lang), { id: "risk-table" })}
      ${PrivacyNotice(lang)}
    </main>`;
}

function methodologyPage(lang = currentLang) {
  const items = [
    ["Corpus boundaries", "資料範囲"],
    ["Inclusion criteria", "掲載基準"],
    ["Exclusion criteria", "除外基準"],
    ["Deduplication", "重複排除"],
    ["Date normalisation", "日付正規化"],
    ["Thread reconstruction", "スレッド再構成"],
    ["Quoted-text separation", "引用文分離"],
    ["Evidence classification", "証拠分類"],
    ["Redaction policy", "匿名化方針"],
    ["Public-source verification", "公開情報確認"],
    ["Inference policy", "推認方針"],
    ["Correction policy", "訂正方針"]
  ];
  const itemCards = `<div class="grid">${items.map(([en, ja]) => `<article class="card">${EvidenceBadge("DOCUMENTED", lang)}<h3>${escapeHtml(lang === "ja" ? ja : en)}</h3><p>${escapeHtml(lang === "ja" ? "公開安全化、分類、訂正可能性を前提に処理します。" : "Handled with public-safety, classification and correction review.")}</p></article>`).join("")}</div>`;
  return `${pageHero(pageById.methodology, lang, lang === "ja" ? "資料範囲、匿名化、推認、訂正の方針を明示します。" : "Corpus boundaries, redaction, inference and correction policies are stated here.")}
    <main class="main">
      ${section(lang === "ja" ? "方法論項目" : "Methodology Items", itemCards, { id: "items", badge: "DOCUMENTED" })}
      ${section(lang === "ja" ? "証拠分類" : "Evidence Classification", MethodologyNote(lang), { id: "classification" })}
      ${section(lang === "ja" ? "重要な限定" : "Material Limitation", `<div class="grid two">${SourceLimitationCard(lang)}<article class="card">${EvidenceBadge("DOCUMENTED", lang)}<h3>${lang === "ja" ? "引用と原本" : "Quotes and originals"}</h3><p>${escapeHtml(lang === "ja" ? "メール本文、件名全文、署名、ヘッダー及び添付ファイル名の原文は公開しません。" : "Email bodies, full subject lines, signatures, headers and original attachment names are not published.")}</p></article></div>`, { id: "limitation", badge: "OPEN_QUESTION" })}
      ${PrivacyNotice(lang)}
    </main>`;
}

function rightOfReplyPage(lang = currentLang) {
  const paragraphs = lang === "ja"
    ? [
        "日音、VALSE及び本記録で役割により特定された人物又は組織は、訂正、文脈資料又は正式な回答を提出できます。",
        "提出内容は保存され、確認されます。検証済みの訂正は透明性をもって反映します。争いのある解釈は、適切な場合、既存記録と並べて掲載することがあります。",
        "個人データ、無関係な第三者情報及び根拠のない主張は含めないでください。"
      ]
    : [
        "Nichion, VALSE and any person or organisation identified by role in this record may submit corrections, contextual documents or a formal response.",
        "Submissions will be preserved and reviewed. Verified corrections will be incorporated transparently. Disputed interpretations may be published alongside the existing record where appropriate.",
        "Personal data, unrelated third-party information and unsupported allegations should not be included."
      ];
  return `${pageHero(pageById["right-of-reply"], lang, lang === "ja" ? "訂正、補足資料及び正式回答のための公開安全な経路です。" : "Public-safe pathway for corrections, contextual documents and formal responses.")}
    <main class="main">
      ${section(local(pageById["right-of-reply"].title, lang), `<div class="summary-stack">${paragraphs.map((text) => `<p class="notice">${escapeHtml(text)}</p>`).join("")}</div>${RightOfReplyPanel(lang)}`, { id: "reply", badge: "DOCUMENTED" })}
      ${PrivacyNotice(lang)}
    </main>`;
}

const renderers = {
  index: homePage,
  chronology: chronologyPage,
  "commissioning-chain": commissioningChainPage,
  "work-before-terms": workBeforeTermsPage,
  "compensation-and-rights": compensationAndRightsPage,
  network: networkPage,
  evidence: evidencePage,
  "risk-advisory": riskPage,
  methodology: methodologyPage,
  "right-of-reply": rightOfReplyPage
};

function navHtml(page, lang) {
  return `
    <nav class="site-nav" aria-label="${lang === "ja" ? "記録ナビゲーション" : "Record navigation"}">
      <a class="brand" href="/records/">Factualist</a>
      <div class="nav-links">
        ${pages.map((item) => `<a href="${urlFor(lang, item.slug)}" ${item.id === page.id ? `aria-current="page"` : ""}>${escapeHtml(local(item.nav, lang))}</a>`).join("")}
      </div>
      <div class="lang-links" aria-label="${lang === "ja" ? "言語" : "Language"}">
        <a href="${urlFor("en", page.slug)}" hreflang="en" ${lang === "en" ? `aria-current="true"` : ""}>EN</a>
        <a href="${urlFor("ja", page.slug)}" hreflang="ja" ${lang === "ja" ? `aria-current="true"` : ""}>JA</a>
      </div>
    </nav>
  `;
}

function layout(page, lang, body) {
  const pageTitle = local(page.title, lang);
  const title = page.id === "index" ? pageTitle : `${pageTitle} | ${local(pageById.index.title, lang)}`;
  const canonical = absUrl(lang, page.slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": page.id === "index" ? ["Article", "Report"] : "WebPage",
    "@id": `${canonical}#${page.id}`,
    headline: title,
    name: title,
    url: canonical,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    datePublished: lastmod,
    dateModified: lastmod,
    description: copy[lang].description,
    publisher: { "@type": "Organization", name: "Factualist", url: siteBase },
    about: lang === "ja" ? ["音楽制作発注", "音楽出版", "権利処理", "独立事業者リスク"] : ["Music commissioning", "Music publishing", "Rights clearance", "Independent contractor risk"],
    inLanguage: lang
  };
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="index,follow">
  <title>${escapeHtml(title)} | Factualist</title>
  <meta name="description" content="${escapeHtml(copy[lang].description)}">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="en" href="${absUrl("en", page.slug)}">
  <link rel="alternate" hreflang="ja" href="${absUrl("ja", page.slug)}">
  <link rel="alternate" hreflang="x-default" href="${absUrl("en", page.slug)}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(copy[lang].description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${siteBase}${recordBase}/assets/og/nichion-valse-og.svg">
  <meta property="og:image:alt" content="${escapeHtml(lang === "ja" ? "発注、音楽権利、未解決の書面上のつながりを示す抽象的なネットワーク。" : "Abstract network representing commissioning, music rights and unresolved documentary links.")}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(copy[lang].description)}">
  <meta name="twitter:image" content="${siteBase}${recordBase}/assets/og/nichion-valse-og.svg">
  <meta name="theme-color" content="#080b0d">
  <link rel="icon" href="/records/assets/favicon.svg" type="image/svg+xml">
  <script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>
  <link rel="stylesheet" href="${recordBase}/assets/css/main.css?v=20260619-nichion-valse">
</head>
<body>
  <div class="page">
    ${navHtml(page, lang)}
    ${body}
    <footer class="footer">
      <p>${escapeHtml(copy[lang].generatedFrom)}</p>
    </footer>
  </div>
</body>
</html>
`;
}

for (const lang of ["en", "ja"]) {
  currentLang = lang;
  for (const page of pages) {
    const file = outputPath(lang, page.slug);
    await fs.mkdir(path.dirname(file), { recursive: true });
    const body = renderers[page.id](lang);
    await fs.writeFile(file, layout(page, lang, body), "utf8");
  }
}

console.log(`Generated ${pages.length * 2} Nichion-VALSE pages.`);
