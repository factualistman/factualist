import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const dataRoot = path.join(repoRoot, "src/data/nichion-valse/public");
const outRoot = path.join(repoRoot, "records/nichion-valse-2021");
const siteBase = "https://factualist.org";
const recordBase = "/records/nichion-valse-2021";
const datePublished = "2026-06-19";
const lastmod = "2026-06-20";
const recordCssVersion = "20260620-nichiva-hero2";
const globalHeaderCssVersion = "20260620-header-compact";
const heroImageBase = "/assets/records/nichion-valse-2021";
const heroImage = `${heroImageBase}/nichiva.jpg`;
const heroImageWebp = `${heroImageBase}/nichiva.webp`;
const heroMobileImage = `${heroImageBase}/nichivam.jpg`;
const heroMobileImageWebp = `${heroImageBase}/nichivam.webp`;
const languages = [
  { code: "en", path: "", label: "EN", name: "English" },
  { code: "ja", path: "ja", label: "JA", name: "日本語" },
  { code: "es", path: "es", label: "ES", name: "Español" },
  { code: "de", path: "de", label: "DE", name: "Deutsch" },
  { code: "fr", path: "fr", label: "FR", name: "Français" },
  { code: "sk", path: "sk", label: "SK", name: "Slovenčina" }
];
const languageCodes = languages.map((language) => language.code);
const languageByCode = Object.fromEntries(languages.map((language) => [language.code, language]));

function tr(lang, values) {
  return values?.[lang] ?? values?.en ?? values?.ja ?? "";
}

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
const explainer = await readJson("explainer.json");

const pages = [
  {
    id: "index",
    slug: "",
    nav: { en: "Record", ja: "記録", es: "Registro", de: "Akte", fr: "Dossier", sk: "Záznam" },
    title: {
      en: "株式会社日音 / 株式会社ヴァルス 2021 Commissioning Record",
      ja: "株式会社日音 / 株式会社ヴァルス 2021年発注記録",
      es: "Registro de encargo 株式会社日音 / 株式会社ヴァルス 2021",
      de: "株式会社日音 / 株式会社ヴァルス 2021 Auftragsprotokoll",
      fr: "Dossier de commande 株式会社日音 / 株式会社ヴァルス 2021",
      sk: "Záznam o zadaní 株式会社日音 / 株式会社ヴァルス 2021"
    }
  },
  {
    id: "chronology",
    slug: "chronology",
    nav: { en: "Chronology", ja: "時系列", es: "Cronología", de: "Chronologie", fr: "Chronologie", sk: "Chronológia" },
    title: { en: "Chronology", ja: "時系列", es: "Cronología", de: "Chronologie", fr: "Chronologie", sk: "Chronológia" }
  },
  {
    id: "commissioning-chain",
    slug: "commissioning-chain",
    nav: { en: "Commissioning Chain", ja: "発注経路", es: "Cadena de encargo", de: "Auftragskette", fr: "Chaîne de commande", sk: "Reťaz zadania" },
    title: { en: "Commissioning Chain", ja: "発注経路", es: "Cadena de encargo", de: "Auftragskette", fr: "Chaîne de commande", sk: "Reťaz zadania" }
  },
  {
    id: "work-before-terms",
    slug: "work-before-terms",
    nav: { en: "Work Before Terms", ja: "条件確定前の作業", es: "Trabajo antes de términos", de: "Arbeit vor Bedingungen", fr: "Travail avant conditions", sk: "Práca pred podmienkami" },
    title: { en: "Work Before Terms", ja: "条件確定前の作業", es: "Trabajo antes de los términos", de: "Arbeit vor Vertragsbedingungen", fr: "Travail avant conditions écrites", sk: "Práca pred dohodnutím podmienok" }
  },
  {
    id: "compensation-and-rights",
    slug: "compensation-and-rights",
    nav: { en: "Compensation and Rights", ja: "報酬と権利", es: "Compensación y derechos", de: "Vergütung und Rechte", fr: "Rémunération et droits", sk: "Odmena a práva" },
    title: { en: "Compensation and Rights", ja: "報酬と権利", es: "Compensación y derechos", de: "Vergütung und Rechte", fr: "Rémunération et droits", sk: "Odmena a práva" }
  },
  {
    id: "network",
    slug: "network",
    nav: { en: "Network", ja: "ネットワーク", es: "Red", de: "Netzwerk", fr: "Réseau", sk: "Sieť" },
    title: { en: "Institutional Network", ja: "組織ネットワーク", es: "Red institucional", de: "Institutionelles Netzwerk", fr: "Réseau institutionnel", sk: "Inštitucionálna sieť" }
  },
  {
    id: "evidence",
    slug: "evidence",
    nav: { en: "Evidence", ja: "証拠台帳", es: "Pruebas", de: "Evidenz", fr: "Preuves", sk: "Dôkazy" },
    title: { en: "Evidence Ledger", ja: "証拠台帳", es: "Registro de pruebas", de: "Evidenzregister", fr: "Registre des preuves", sk: "Evidenčný register" }
  },
  {
    id: "risk-advisory",
    slug: "risk-advisory",
    nav: { en: "Risk Advisory", ja: "リスク助言", es: "Aviso de riesgo", de: "Risikohinweis", fr: "Avis de risque", sk: "Rizikové odporúčanie" },
    title: { en: "Prospective Collaborator Risk Advisory", ja: "今後の協業者向けリスク助言", es: "Aviso de riesgo para futuros colaboradores", de: "Risikohinweis für künftige Mitwirkende", fr: "Avis de risque pour futurs collaborateurs", sk: "Rizikové odporúčanie pre budúcich spolupracovníkov" }
  },
  {
    id: "methodology",
    slug: "methodology",
    nav: { en: "Methodology", ja: "方法論", es: "Metodología", de: "Methodik", fr: "Méthodologie", sk: "Metodika" },
    title: { en: "Methodology", ja: "方法論", es: "Metodología", de: "Methodik", fr: "Méthodologie", sk: "Metodika" }
  },
  {
    id: "right-of-reply",
    slug: "right-of-reply",
    nav: { en: "Right of Reply", ja: "反論・訂正", es: "Derecho de respuesta", de: "Recht auf Erwiderung", fr: "Droit de réponse", sk: "Právo na odpoveď" },
    title: { en: "Right of Reply", ja: "反論・訂正", es: "Derecho de respuesta", de: "Recht auf Erwiderung", fr: "Droit de réponse", sk: "Právo na odpoveď" }
  }
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
  },
  es: {
    languageName: "Español",
    alternateName: "Inglés",
    recordEyebrow: "Registro de encargo documentado",
    homeSubtitle: "Autoridad, alcance, compensación, aclaración de derechos y trabajo realizado antes de cerrar términos escritos.",
    thesis1: "Este registro examina un proceso de encargo musical de 2021 en el que el contacto con creadores, las consultas sobre derechos, la coordinación y las conversaciones de pago parecen haber avanzado antes de que el alcance, la compensación y los términos escritos de la Parte Informante quedaran finalizados.",
    thesis2: "El registro se centra en la autoridad de encargo, la asignación de responsabilidades, la compensación, la aclaración de derechos y los vacíos documentales que quedaron sin resolver.",
    description: "Revisión documentada de autoridad de encargo, alcance, compensación, aclaración de derechos y vacíos documentales no resueltos en un proceso de producción musical de 2021.",
    whatExamines: "Qué examina este registro",
    recordSummary: "Resumen del registro",
    coreSequence: "Secuencia central",
    keyFindings: "Hallazgos clave",
    openQuestions: "Preguntas abiertas",
    detailPages: "Páginas detalladas",
    privacyTitle: "Privacidad y protección de fuentes",
    privacyText: "La correspondencia subyacente no se publica íntegramente. Se omiten datos personales, información de terceros y detalles identificativos de la comunicación. Los resúmenes públicos se limitan a la información necesaria para explicar la estructura transaccional documentada.",
    sourceLimitation1: "Los registros subyacentes se conservan de forma privada y no se publican íntegramente porque contienen datos personales, información de terceros y detalles identificativos de comunicaciones.",
    sourceLimitation2: "La verificación adecuada puede considerarse sujeta a confidencialidad, relevancia legal y revisión de redacción.",
    participants: "Participantes",
    establishes: "Lo que establece",
    limitations: "Lo que no establece",
    evidenceIds: "ID de prueba",
    status: "Estado",
    period: "Periodo",
    yes: "Sí",
    notPublished: "No publicado",
    notEstablished: "No establecido",
    notLocated: "No localizado",
    openQuestion: "Pregunta abierta",
    noFinalAgreement: "No se ha identificado un acuerdo escrito final en el material revisado.",
    backRecord: "Volver al registro",
    recordDirectory: "Directorio de registros",
    generatedFrom: "Generado solo a partir de datos públicos anonimizados.",
    publicSource: "Fuente pública",
    notPublishedStatus: "Original no publicado",
    privateEmail: "Registro de correo privado conservado por la Parte Informante",
    privateDocument: "Documento privado conservado por la Parte Informante",
    officialPublicSource: "Fuente pública oficial",
    formNote: "Esta página estática no publica envíos automáticamente. Toda respuesta o corrección debe revisarse antes de publicarse.",
    fieldHelp: "No incluya datos personales, información de terceros no relacionada ni acusaciones sin respaldo.",
    submitDisabled: "Preparar envío confidencial",
    figurePrompt: "Prompt de imagen hero",
    promptText: "Visual editorial de red forense, fondo grafito oscuro y gris acero, líneas precisas de señal de emisión, documentos abstractos de derechos musicales, nodos contractuales incompletos, marcadores de advertencia ámbar sobrios, estética documental corporativa japonesa, clínica y atmosférica, sin personas, sin rostros, sin logotipos, sin nombres de empresa, sin texto legible, sin interfaz de correo, composición cinematográfica amplia, 16:9."
  },
  de: {
    languageName: "Deutsch",
    alternateName: "Englisch",
    recordEyebrow: "Dokumentiertes Beauftragungsprotokoll",
    homeSubtitle: "Autorität, Umfang, Vergütung, Rechteklärung und Arbeit vor Abschluss schriftlicher Bedingungen.",
    thesis1: "Dieses Protokoll untersucht einen Musikbeauftragungsprozess aus dem Jahr 2021, bei dem Kontaktaufnahmen zu Urhebern, rechtebezogene Rückfragen, Koordination und Zahlungsabsprachen offenbar vor der abschließenden Festlegung von Umfang, Vergütung und schriftlichen Bedingungen der meldenden Partei vorangingen.",
    thesis2: "Der Schwerpunkt liegt auf Beauftragungsbefugnis, Verantwortungsverteilung, Vergütung, Rechteklärung und den ungelösten dokumentarischen Lücken.",
    description: "Dokumentierte Prüfung von Beauftragungsbefugnis, Umfang, Vergütung, Rechteklärung und ungelösten Dokumentationslücken in einem Musikproduktionsprozess von 2021.",
    whatExamines: "Was dieses Protokoll untersucht",
    recordSummary: "Zusammenfassung",
    coreSequence: "Kernsequenz",
    keyFindings: "Kernaussagen",
    openQuestions: "Offene Fragen",
    detailPages: "Detailseiten",
    privacyTitle: "Datenschutz und Quellenschutz",
    privacyText: "Die zugrunde liegende Korrespondenz wird nicht vollständig veröffentlicht. Personenbezogene Daten, Informationen Dritter und identifizierende Kommunikationsdetails wurden zurückgehalten. Öffentliche Zusammenfassungen sind auf Informationen beschränkt, die zur Erklärung der dokumentierten Transaktionsstruktur erforderlich sind.",
    sourceLimitation1: "Die zugrunde liegenden Aufzeichnungen werden privat aufbewahrt und wegen personenbezogener Daten, Drittinformationen und identifizierender Kommunikationsdetails nicht vollständig veröffentlicht.",
    sourceLimitation2: "Eine geeignete Überprüfung kann unter dem Vorbehalt von Vertraulichkeit, rechtlicher Relevanz und Redaktionsprüfung erwogen werden.",
    participants: "Beteiligte",
    establishes: "Was belegt wird",
    limitations: "Was nicht belegt wird",
    evidenceIds: "Beweis-IDs",
    status: "Status",
    period: "Zeitraum",
    yes: "Ja",
    notPublished: "Nicht veröffentlicht",
    notEstablished: "Nicht festgestellt",
    notLocated: "Nicht lokalisiert",
    openQuestion: "Offene Frage",
    noFinalAgreement: "Im geprüften Material wurde keine abschließende schriftliche Vereinbarung identifiziert.",
    backRecord: "Zurück zum Protokoll",
    recordDirectory: "Verzeichnis",
    generatedFrom: "Nur aus öffentlich anonymisierten Daten generiert.",
    publicSource: "Öffentliche Quelle",
    notPublishedStatus: "Original nicht veröffentlicht",
    privateEmail: "Private E-Mail-Aufzeichnung, aufbewahrt durch die meldende Partei",
    privateDocument: "Privates Dokument, aufbewahrt durch die meldende Partei",
    officialPublicSource: "Offizielle öffentliche Quelle",
    formNote: "Diese statische Seite veröffentlicht Eingaben nicht automatisch. Jede Antwort oder Korrektur muss vor Veröffentlichung geprüft werden.",
    fieldHelp: "Keine personenbezogenen Daten, irrelevanten Drittinformationen oder unbelegten Vorwürfe einfügen.",
    submitDisabled: "Vertrauliche Einreichung vorbereiten",
    figurePrompt: "Hero-Bild-Prompt",
    promptText: "Editoriales forensisches Netzwerkbild, dunkler Graphit- und Stahlgrau-Hintergrund, präzise Rundfunksignallinien, abstrakte Musikrechte-Dokumente, unvollständige Vertragsknoten, zurückhaltende bernsteinfarbene Warnmarkierungen, japanische Corporate-Dokumentarästhetik, klinisch und atmosphärisch, keine Menschen, keine Gesichter, keine Logos, keine Firmennamen, kein lesbarer Text, keine E-Mail-Oberfläche, breite filmische Komposition, 16:9."
  },
  fr: {
    languageName: "Français",
    alternateName: "Anglais",
    recordEyebrow: "Dossier de commande documenté",
    homeSubtitle: "Autorité, périmètre, rémunération, droits et travail effectué avant la finalisation des conditions écrites.",
    thesis1: "Ce dossier examine un processus de commande musicale de 2021 dans lequel la prise de contact avec des créateurs, les demandes liées aux droits, la coordination et les discussions de paiement semblent avoir avancé avant la finalisation du périmètre, de la rémunération et des conditions écrites de la Partie déclarante.",
    thesis2: "Le dossier porte sur l'autorité de commande, la répartition des responsabilités, la rémunération, la clarification des droits et les lacunes documentaires restées non résolues.",
    description: "Examen documenté de l'autorité de commande, du périmètre, de la rémunération, des droits et des lacunes documentaires non résolues dans un processus de production musicale de 2021.",
    whatExamines: "Ce que ce dossier examine",
    recordSummary: "Résumé du dossier",
    coreSequence: "Séquence centrale",
    keyFindings: "Constats clés",
    openQuestions: "Questions ouvertes",
    detailPages: "Pages détaillées",
    privacyTitle: "Confidentialité et protection des sources",
    privacyText: "La correspondance sous-jacente n'est pas publiée intégralement. Les données personnelles, informations de tiers et détails identifiants de communication sont retenus. Les résumés publics sont limités aux informations nécessaires pour expliquer la structure transactionnelle documentée.",
    sourceLimitation1: "Les dossiers sous-jacents sont conservés de manière privée et ne sont pas publiés intégralement car ils contiennent des données personnelles, des informations de tiers et des détails de communication identifiants.",
    sourceLimitation2: "Une vérification appropriée peut être envisagée sous réserve de confidentialité, de pertinence juridique et d'examen de rédaction.",
    participants: "Participants",
    establishes: "Ce que cela établit",
    limitations: "Ce que cela n'établit pas",
    evidenceIds: "ID de preuve",
    status: "Statut",
    period: "Période",
    yes: "Oui",
    notPublished: "Non publié",
    notEstablished: "Non établi",
    notLocated: "Non localisé",
    openQuestion: "Question ouverte",
    noFinalAgreement: "Aucun accord écrit final n'a été identifié dans les éléments examinés.",
    backRecord: "Retour au dossier",
    recordDirectory: "Répertoire des dossiers",
    generatedFrom: "Généré uniquement à partir de données publiques anonymisées.",
    publicSource: "Source publique",
    notPublishedStatus: "Original non publié",
    privateEmail: "Courriel privé conservé par la Partie déclarante",
    privateDocument: "Document privé conservé par la Partie déclarante",
    officialPublicSource: "Source publique officielle",
    formNote: "Cette page statique ne publie pas automatiquement les soumissions. Toute réponse ou correction doit être examinée avant publication.",
    fieldHelp: "N'incluez pas de données personnelles, d'informations de tiers non liées ni d'allégations non étayées.",
    submitDisabled: "Préparer une soumission confidentielle",
    figurePrompt: "Prompt de l'image hero",
    promptText: "Visuel éditorial de réseau forensique, fond graphite sombre et gris acier, lignes précises de signal de diffusion, documents abstraits de droits musicaux, nœuds contractuels incomplets, marqueurs d'alerte ambrés sobres, esthétique documentaire d'entreprise japonaise, clinique et atmosphérique, sans personnes, sans visages, sans logos, sans noms d'entreprise, sans texte lisible, sans interface e-mail, composition cinématographique large, 16:9."
  },
  sk: {
    languageName: "Slovenčina",
    alternateName: "Angličtina",
    recordEyebrow: "Zdokumentovaný záznam o zadaní",
    homeSubtitle: "Právomoc, rozsah, odmena, vyjasnenie práv a práca vykonaná pred finalizáciou písomných podmienok.",
    thesis1: "Tento záznam skúma proces hudobného zadania z roku 2021, v ktorom kontaktovanie tvorcov, otázky súvisiace s právami, koordinácia a platobné diskusie zrejme postupovali pred finalizáciou rozsahu práce, odmeny a písomných podmienok Oznamujúcej strany.",
    thesis2: "Záznam sa zameriava na zadávaciu právomoc, rozdelenie zodpovednosti, odmenu, vyjasnenie práv a nevyriešené dokumentačné medzery.",
    description: "Zdokumentovaná kontrola zadávacej právomoci, rozsahu, odmeny, vyjasnenia práv a nevyriešených dokumentačných medzier v procese hudobnej produkcie z roku 2021.",
    whatExamines: "Čo tento záznam skúma",
    recordSummary: "Zhrnutie záznamu",
    coreSequence: "Hlavná postupnosť",
    keyFindings: "Kľúčové zistenia",
    openQuestions: "Otvorené otázky",
    detailPages: "Podrobné stránky",
    privacyTitle: "Súkromie a ochrana zdrojov",
    privacyText: "Podkladová korešpondencia sa nezverejňuje v plnom rozsahu. Osobné údaje, informácie tretích strán a identifikačné detaily komunikácie sú vynechané. Verejné súhrny sa obmedzujú na informácie potrebné na vysvetlenie zdokumentovanej transakčnej štruktúry.",
    sourceLimitation1: "Podkladové záznamy sa uchovávajú súkromne a nezverejňujú sa v plnom rozsahu, pretože obsahujú osobné údaje, informácie tretích strán a identifikačné detaily komunikácie.",
    sourceLimitation2: "Primerané overenie možno zvážiť pri zachovaní dôvernosti, právnej relevancie a redakčnej kontroly.",
    participants: "Účastníci",
    establishes: "Čo to preukazuje",
    limitations: "Čo to nepreukazuje",
    evidenceIds: "ID dôkazov",
    status: "Stav",
    period: "Obdobie",
    yes: "Áno",
    notPublished: "Nezverejnené",
    notEstablished: "Nepreukázané",
    notLocated: "Nenájdené",
    openQuestion: "Otvorená otázka",
    noFinalAgreement: "V preskúmanom materiáli nebola identifikovaná konečná písomná dohoda.",
    backRecord: "Späť na záznam",
    recordDirectory: "Adresár záznamov",
    generatedFrom: "Vygenerované iba z verejne anonymizovaných údajov.",
    publicSource: "Verejný zdroj",
    notPublishedStatus: "Originál nezverejnený",
    privateEmail: "Súkromný e-mailový záznam uchovávaný Oznamujúcou stranou",
    privateDocument: "Súkromný dokument uchovávaný Oznamujúcou stranou",
    officialPublicSource: "Oficiálny verejný zdroj",
    formNote: "Táto statická stránka nezverejňuje podania automaticky. Každá odpoveď alebo oprava musí byť pred zverejnením skontrolovaná.",
    fieldHelp: "Neuvádzajte osobné údaje, nesúvisiace informácie tretích strán ani nepodložené tvrdenia.",
    submitDisabled: "Pripraviť dôverné podanie",
    figurePrompt: "Prompt pre hero obrázok",
    promptText: "Editoriálny forenzný sieťový vizuál, tmavé grafitové a oceľovosivé pozadie, presné linky vysielacieho signálu, abstraktné dokumenty hudobných práv, neúplné zmluvné uzly, zdržanlivé jantárové varovné značky, japonská korporátna dokumentárna estetika, klinická a atmosférická, bez ľudí, bez tvárí, bez log, bez názvov spoločností, bez čitateľného textu, bez e-mailového rozhrania, široká filmová kompozícia, 16:9."
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
  },
  es: {
    DOCUMENTED: "DOCUMENTADO",
    CORROBORATED: "CORROBORADO",
    PARTY_STATEMENT: "DECLARACIÓN DE PARTE",
    INFERRED: "INFERIDO",
    DISPUTED: "EN DISPUTA",
    OPEN_QUESTION: "PREGUNTA ABIERTA",
    CONTEXT_ONLY: "SOLO CONTEXTO"
  },
  de: {
    DOCUMENTED: "DOKUMENTIERT",
    CORROBORATED: "BESTÄTIGT",
    PARTY_STATEMENT: "PARTEIAUSSAGE",
    INFERRED: "ABGELEITET",
    DISPUTED: "UMSTRITTEN",
    OPEN_QUESTION: "OFFENE FRAGE",
    CONTEXT_ONLY: "NUR KONTEXT"
  },
  fr: {
    DOCUMENTED: "DOCUMENTÉ",
    CORROBORATED: "CORROBORÉ",
    PARTY_STATEMENT: "DÉCLARATION D'UNE PARTIE",
    INFERRED: "INFÉRÉ",
    DISPUTED: "CONTESTÉ",
    OPEN_QUESTION: "QUESTION OUVERTE",
    CONTEXT_ONLY: "CONTEXTE SEUL"
  },
  sk: {
    DOCUMENTED: "ZDOKUMENTOVANÉ",
    CORROBORATED: "POTVRDENÉ",
    PARTY_STATEMENT: "VYHLÁSENIE STRANY",
    INFERRED: "ODVODENÉ",
    DISPUTED: "SPORNÉ",
    OPEN_QUESTION: "OTVORENÁ OTÁZKA",
    CONTEXT_ONLY: "LEN KONTEXT"
  }
};

const sourceTypeLabels = Object.fromEntries(languageCodes.map((lang) => [lang, {
  "Private Email Record": copy[lang].privateEmail,
  "Private Document": copy[lang].privateDocument,
  "Public Source": copy[lang].officialPublicSource,
  "Not Published": copy[lang].notPublishedStatus
}]));

const relationshipTypeLabels = {
  en: {},
  ja: {
    Ownership: "所有関係",
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
  },
  es: {
    Ownership: "Propiedad",
    Introduction: "Introducción",
    Communication: "Comunicación",
    Request: "Solicitud",
    "Rights Enquiry": "Consulta de derechos",
    "Creator Outreach": "Contacto con creadores",
    "Demo Delivery": "Entrega de demos",
    "Payment Discussion": "Discusión de pago",
    "Contract Discussion": "Discusión contractual",
    "Documented Communication": "Comunicación documentada",
    "Facility Location": "Ubicación de instalaciones",
    "Programme Credit": "Crédito de programa",
    "Publicly Listed Business Activity": "Actividad pública declarada"
  },
  de: {
    Ownership: "Eigentum",
    Introduction: "Einführung",
    Communication: "Kommunikation",
    Request: "Anfrage",
    "Rights Enquiry": "Rechterückfrage",
    "Creator Outreach": "Kontaktaufnahme zu Urhebern",
    "Demo Delivery": "Demo-Übergabe",
    "Payment Discussion": "Zahlungsabstimmung",
    "Contract Discussion": "Vertragsgespräch",
    "Documented Communication": "Dokumentierte Kommunikation",
    "Facility Location": "Standort der Einrichtung",
    "Programme Credit": "Programmcredit",
    "Publicly Listed Business Activity": "Öffentlich angegebene Geschäftstätigkeit"
  },
  fr: {
    Ownership: "Propriété",
    Introduction: "Introduction",
    Communication: "Communication",
    Request: "Demande",
    "Rights Enquiry": "Demande sur les droits",
    "Creator Outreach": "Contact avec les créateurs",
    "Demo Delivery": "Transmission de démos",
    "Payment Discussion": "Discussion de paiement",
    "Contract Discussion": "Discussion contractuelle",
    "Documented Communication": "Communication documentée",
    "Facility Location": "Localisation de l'installation",
    "Programme Credit": "Crédit de programme",
    "Publicly Listed Business Activity": "Activité déclarée publiquement"
  },
  sk: {
    Ownership: "Vlastníctvo",
    Introduction: "Predstavenie",
    Communication: "Komunikácia",
    Request: "Žiadosť",
    "Rights Enquiry": "Otázka práv",
    "Creator Outreach": "Kontaktovanie tvorcov",
    "Demo Delivery": "Dodanie dema",
    "Payment Discussion": "Diskusia o platbe",
    "Contract Discussion": "Diskusia o zmluve",
    "Documented Communication": "Zdokumentovaná komunikácia",
    "Facility Location": "Umiestnenie zariadenia",
    "Programme Credit": "Programový kredit",
    "Publicly Listed Business Activity": "Verejne uvedená obchodná činnosť"
  }
};

const lineLabels = {
  en: { solid: "solid", dashed: "dashed", dotted: "dotted" },
  ja: { solid: "実線", dashed: "破線", dotted: "点線" },
  es: { solid: "línea continua", dashed: "línea discontinua", dotted: "línea punteada" },
  de: { solid: "durchgezogen", dashed: "gestrichelt", dotted: "gepunktet" },
  fr: { solid: "ligne pleine", dashed: "ligne tiretée", dotted: "ligne pointillée" },
  sk: { solid: "plná čiara", dashed: "prerušovaná čiara", dotted: "bodkovaná čiara" }
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
  },
  es: {
    "Holding Company": "Sociedad holding",
    "Music Publisher": "Editorial musical",
    "Production Company": "Productora",
    Broadcaster: "Radiodifusor",
    Programme: "Programa",
    Facility: "Instalación",
    Person: "Persona",
    Project: "Proyecto"
  },
  de: {
    "Holding Company": "Holdinggesellschaft",
    "Music Publisher": "Musikverlag",
    "Production Company": "Produktionsgesellschaft",
    Broadcaster: "Rundfunkanbieter",
    Programme: "Programm",
    Facility: "Einrichtung",
    Person: "Person",
    Project: "Projekt"
  },
  fr: {
    "Holding Company": "Société holding",
    "Music Publisher": "Éditeur musical",
    "Production Company": "Société de production",
    Broadcaster: "Diffuseur",
    Programme: "Programme",
    Facility: "Installation",
    Person: "Personne",
    Project: "Projet"
  },
  sk: {
    "Holding Company": "Holdingová spoločnosť",
    "Music Publisher": "Hudobný vydavateľ",
    "Production Company": "Produkčná spoločnosť",
    Broadcaster: "Vysielateľ",
    Programme: "Program",
    Facility: "Zariadenie",
    Person: "Osoba",
    Project: "Projekt"
  }
};

function local(value, lang) {
  if (value && typeof value === "object" && !Array.isArray(value) && value[lang] !== undefined) return value[lang];
  if (value && typeof value === "object" && !Array.isArray(value) && value.en !== undefined) return value.en;
  if (value && typeof value === "object" && !Array.isArray(value) && value.ja !== undefined) return value.ja;
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

function jsonForScript(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

let currentLang = "en";

function companyLabel(id, lang = currentLang) {
  const labels = {
    nichion: { ja: "株式会社日音", default: "NICHION,INC." },
    valse: { ja: "株式会社ヴァルス", default: "VALSE Inc." }
  };
  const label = labels[id];
  return lang === "ja" ? label.ja : label.default;
}

function localizedCompanyText(html, lang = currentLang) {
  if (lang === "ja") return html;
  return html
    .replaceAll("株式会社日音", companyLabel("nichion", lang))
    .replaceAll("株式会社ヴァルス", companyLabel("valse", lang))
    .replaceAll("VALSE Inc..", "VALSE Inc.")
    .replaceAll("NICHION,INC..", "NICHION,INC.");
}

function urlFor(lang, slug = "") {
  const cleanSlug = slug ? `${slug}/` : "";
  const language = languageByCode[lang] || languageByCode.en;
  if (language.path) return `${recordBase}/${language.path}/${cleanSlug}`;
  return `${recordBase}/${cleanSlug}`;
}

function absUrl(lang, slug = "") {
  return `${siteBase}${urlFor(lang, slug)}`;
}

function outputPath(lang, slug = "") {
  const parts = [outRoot];
  const language = languageByCode[lang] || languageByCode.en;
  if (language.path) parts.push(language.path);
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

function RightOfReplyNotice(lang = currentLang) {
  return `
    <div class="summary-stack">
      <p class="notice">${escapeHtml(explainerText("rightOfReplyNotice", lang))}</p>
      <div class="hero-actions">
        <a class="btn primary" href="${urlFor(lang, "right-of-reply")}">${escapeHtml(local(pageById["right-of-reply"].title, lang))}</a>
        <a class="btn" href="${urlFor(lang, "methodology")}">${escapeHtml(local(pageById.methodology.title, lang))}</a>
      </div>
    </div>
  `;
}

function TransactionStructure(lang = currentLang) {
  return `
    <div class="summary-stack">
      <p class="notice">${escapeHtml(explainerText("centralQuestion", lang))}</p>
      <div class="sequence">
        ${explainer.transactionStructure.map((item, index) => `
          <article class="step">
            ${EvidenceBadge(item.status, lang)}
            <strong>${String(index + 1).padStart(2, "0")} ${escapeHtml(homeText("transactionStructure", lang, index, "label", item.label))}</strong>
            <p class="muted">${escapeHtml(homeText("transactionStructure", lang, index, "body", item.body))}</p>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function ControlGapTable(lang = currentLang) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>${lang === "ja" ? "論点" : "Issue"}</th>
            <th>${lang === "ja" ? "記録済みの範囲" : "Documented Scope"}</th>
            <th>${lang === "ja" ? "未解決事項" : "Unresolved Point"}</th>
            <th>${lang === "ja" ? "状態" : "Status"}</th>
          </tr>
        </thead>
        <tbody>
          ${explainer.controlGaps.map((row) => `
            <tr>
              <td>${escapeHtml(local(row.issue, lang))}</td>
              <td>${escapeHtml(local(row.documented, lang))}</td>
              <td>${escapeHtml(local(row.unresolved, lang))}</td>
              <td>${EvidenceBadge(row.status, lang)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function AuthorityMatrix(lang = currentLang) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>${lang === "ja" ? "役割" : "Role"}</th>
            <th>${lang === "ja" ? "記録上の機能" : "Documented Function"}</th>
            <th>${lang === "ja" ? "示さないこと" : "Does Not Establish"}</th>
            <th>${lang === "ja" ? "状態" : "Status"}</th>
          </tr>
        </thead>
        <tbody>
          ${explainer.authorityMatrix.map((row) => `
            <tr>
              <td>${escapeHtml(local(row.role, lang))}</td>
              <td>${escapeHtml(local(row.documentedFunction, lang))}</td>
              <td>${escapeHtml(local(row.doesNotEstablish, lang))}</td>
              <td>${EvidenceBadge(row.status, lang)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function NetworkHighlights(lang = currentLang) {
  return `
    <div class="grid two">
      ${explainer.networkHighlights.map((item) => `
        <article class="card">
          ${EvidenceBadge(item.status, lang)}
          <h3>${escapeHtml(local(item.title, lang))}</h3>
          <p>${escapeHtml(local(item.body, lang))}</p>
          <p class="muted">${escapeHtml(copy[lang].publicSource)}: <a href="${escapeHtml(item.sourceUrl)}" rel="noopener">${escapeHtml(item.sourceUrl)}</a></p>
        </article>
      `).join("")}
    </div>
  `;
}

function EvidenceProtocol(lang = currentLang) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>${lang === "ja" ? "処理" : "Process"}</th>
            <th>${lang === "ja" ? "公開上の扱い" : "Public Handling"}</th>
            <th>${lang === "ja" ? "状態" : "Status"}</th>
          </tr>
        </thead>
        <tbody>
          ${explainer.evidenceProtocol.map((row) => `
            <tr>
              <td>${escapeHtml(local(row.step, lang))}</td>
              <td>${escapeHtml(local(row.publicHandling, lang))}</td>
              <td>${EvidenceBadge(row.status, lang)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function PublicationCheckCards(lang = currentLang) {
  return `
    <div class="grid two">
      ${explainer.publicationChecks.map((item) => `
        <article class="card">
          ${EvidenceBadge("DOCUMENTED", lang)}
          <p>${escapeHtml(local(item, lang))}</p>
        </article>
      `).join("")}
    </div>
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
  const label = tr(lang, {
    en: "Public subject organisations",
    ja: "公開上の対象組織",
    es: "Organizaciones objeto de publicación",
    de: "Öffentlich benannte Gegenstandsorganisationen",
    fr: "Organisations publiquement concernées",
    sk: "Verejne uvedené predmetné organizácie"
  });
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
        <h3>${escapeHtml(local(valse.label, lang))}</h3>
        <p>${escapeHtml(label)}</p>
        <p class="muted"><a href="${escapeHtml(valse.sourceUrl)}" rel="noopener">${escapeHtml(valse.sourceUrl)}</a></p>
      </article>
    </div>
  `;
}

function subjectOrganizationNodes(lang = currentLang) {
  const networkNodes = Object.fromEntries(entities.networkNodes.map((node) => [node.id, node]));
  const nichion = networkNodes.nichion;
  const valse = networkNodes.valse;
  return [
    {
      "@type": "Organization",
      "@id": `${siteBase}${recordBase}/#organization-nichion`,
      name: companyLabel("nichion", lang),
      alternateName: lang === "ja" ? ["Nichion", "Nichion Co., Ltd.", "株式会社日音"] : ["Nichion", "Nichion Co., Ltd.", "NICHION,INC."],
      url: "https://www.nichion.co.jp/",
      sameAs: ["https://www.nichion.co.jp/", nichion.sourceUrl],
      description: local(nichion.description, lang)
    },
    {
      "@type": "Organization",
      "@id": `${siteBase}${recordBase}/#organization-valse`,
      name: companyLabel("valse", lang),
      alternateName: lang === "ja" ? ["VALSE", "VALSE Inc.", "株式会社ヴァルス"] : ["VALSE", "VALSE Inc."],
      url: valse.sourceUrl,
      sameAs: ["https://www.valse.jp/", valse.sourceUrl],
      description: local(valse.description, lang)
    }
  ];
}

function schemaAbout(lang = currentLang) {
  const topics = tr(lang, {
    en: ["Music commissioning", "Music publishing", "Rights clearance", "Independent contractor risk"],
    ja: ["音楽制作発注", "音楽出版", "権利処理", "独立事業者リスク"],
    es: ["Encargo musical", "Edición musical", "Aclaración de derechos", "Riesgo para independientes"],
    de: ["Musikbeauftragung", "Musikverlag", "Rechteklärung", "Risiko für unabhängige Beteiligte"],
    fr: ["Commande musicale", "Édition musicale", "Clarification des droits", "Risque pour indépendants"],
    sk: ["Hudobné zadanie", "Hudobné vydavateľstvo", "Vyjasnenie práv", "Riziko pre nezávislých účastníkov"]
  }).map((name) => ({ "@type": "Thing", name }));
  return [...subjectOrganizationNodes(lang), ...topics];
}

function CounterpartyPeople(lang = currentLang) {
  const note = tr(lang, {
    en: "The following are counterparty people and organisations shown in the public record. The Reporting Party's name, label, artist identity, email, domain, location and identifying biography are withheld.",
    ja: "以下は相手方として公開表示する人物・組織です。申告者側の氏名、レーベル名、アーティスト名義、メール、ドメイン、所在地、肩書は掲載しません。",
    es: "A continuación se muestran personas y organizaciones de la contraparte incluidas en el registro público. Se omiten el nombre, sello, identidad artística, correo, dominio, ubicación y biografía identificativa de la Parte Informante.",
    de: "Nachfolgend sind Gegenparteipersonen und Organisationen aufgeführt, die im öffentlichen Protokoll erscheinen. Name, Label, Künstleridentität, E-Mail, Domain, Standort und identifizierende Biografie der meldenden Partei werden zurückgehalten.",
    fr: "Les personnes et organisations de la contrepartie affichées dans le dossier public figurent ci-dessous. Le nom, le label, l'identité artistique, l'e-mail, le domaine, la localisation et la biographie identifiable de la Partie déclarante sont retenus.",
    sk: "Nižšie sú osoby a organizácie protistrany zobrazené vo verejnom zázname. Meno, label, umelecká identita, e-mail, doména, lokalita a identifikačná biografia Oznamujúcej strany sú zadržané."
  });
  const reportingPartyLabel = tr(lang, {
    en: "Reporting Party",
    ja: "申告者",
    es: "Parte Informante",
    de: "Meldende Partei",
    fr: "Partie déclarante",
    sk: "Oznamujúca strana"
  });
  const independentLabel = tr(lang, {
    en: "Independent business participant",
    ja: "独立事業者",
    es: "Participante empresarial independiente",
    de: "Unabhängiger Geschäftsbeteiligter",
    fr: "Participant commercial indépendant",
    sk: "Nezávislý podnikateľský účastník"
  });
  const withheldText = tr(lang, {
    en: "Shown only under an anonymised public label. Name, label, artist identity, email, domain and related identifiers are not published.",
    ja: "公開上は匿名表示に統一します。氏名、レーベル名、アーティスト名義、メール、ドメイン等は掲載しません。",
    es: "Se muestra únicamente bajo una etiqueta pública anonimizada. No se publican nombre, sello, identidad artística, correo, dominio ni identificadores relacionados.",
    de: "Nur unter einer anonymisierten öffentlichen Bezeichnung dargestellt. Name, Label, Künstleridentität, E-Mail, Domain und verwandte Kennungen werden nicht veröffentlicht.",
    fr: "Affiché uniquement sous une étiquette publique anonymisée. Le nom, le label, l'identité artistique, l'e-mail, le domaine et les identifiants liés ne sont pas publiés.",
    sk: "Zobrazuje sa iba pod anonymizovaným verejným označením. Meno, label, umelecká identita, e-mail, doména a súvisiace identifikátory sa nezverejňujú."
  });
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
        <h3>${escapeHtml(reportingPartyLabel)}</h3>
        <p>${escapeHtml(independentLabel)}</p>
        <p class="muted">${escapeHtml(withheldText)}</p>
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
  },
  es: {
    chronology: "Secuencia por eventos sin horas exactas de correo.",
    "commissioning-chain": "Mapa de autoridad y comunicación por roles.",
    "work-before-terms": "Tabla central del trabajo realizado antes de los términos finales.",
    "compensation-and-rights": "Pago, costes y derechos separados por tema.",
    network: "Contexto institucional con límites de relación.",
    evidence: "Registro de pruebas seguro para publicación, sin correspondencia cruda.",
    "risk-advisory": "Lista de verificación para futuros colaboradores.",
    methodology: "Corpus, clasificación y política de redacción.",
    "right-of-reply": "Vía de corrección y respuesta."
  },
  de: {
    chronology: "Ereignisbezogene Abfolge ohne genaue E-Mail-Zeiten.",
    "commissioning-chain": "Rollenbasierte Karte von Befugnis und Kommunikation.",
    "work-before-terms": "Zentrale Tabelle der Arbeit vor endgültigen schriftlichen Bedingungen.",
    "compensation-and-rights": "Zahlung, Kosten und Rechte nach Themen getrennt.",
    network: "Institutioneller Kontext mit Beziehungsgrenzen.",
    evidence: "Öffentlich sichere Evidenzliste ohne Rohkorrespondenz.",
    "risk-advisory": "Checkliste für künftige Mitwirkende.",
    methodology: "Korpus, Klassifizierung und Redaktionsrichtlinie.",
    "right-of-reply": "Weg für Korrektur und Erwiderung."
  },
  fr: {
    chronology: "Séquence par événement sans heures exactes d'e-mails.",
    "commissioning-chain": "Carte des autorités et communications par rôle.",
    "work-before-terms": "Tableau central du travail réalisé avant les conditions finales.",
    "compensation-and-rights": "Paiement, coûts et droits séparés par thème.",
    network: "Contexte institutionnel avec limites relationnelles.",
    evidence: "Registre de preuves publiquement sûr, sans correspondance brute.",
    "risk-advisory": "Liste de vérification pour futurs collaborateurs.",
    methodology: "Corpus, classification et politique de rédaction.",
    "right-of-reply": "Voie de correction et de réponse."
  },
  sk: {
    chronology: "Postupnosť podľa udalostí bez presných časov e-mailov.",
    "commissioning-chain": "Mapa právomocí a komunikácie podľa rolí.",
    "work-before-terms": "Centrálna tabuľka práce vykonanej pred konečnými podmienkami.",
    "compensation-and-rights": "Platba, náklady a práva oddelené podľa tém.",
    network: "Inštitucionálny kontext s obmedzeniami vzťahov.",
    evidence: "Verejne bezpečný evidenčný register bez surovej korešpondencie.",
    "risk-advisory": "Kontrolný zoznam pre budúcich spolupracovníkov.",
    methodology: "Korpus, klasifikácia a pravidlá redakcie.",
    "right-of-reply": "Cesta pre opravu a odpoveď."
  }
};

const homeTranslations = {
  explainer: {
    es: {
      centralQuestion: "¿Cómo se asignaron la autoridad, el presupuesto y la responsabilidad documental cuando el contacto con creadores, las consultas de derechos, la coordinación y la logística de pago avanzaron antes de localizar términos escritos finales?",
      rightOfReplyNotice: "株式会社日音, 株式会社ヴァルス y cualquier participante nombrado pueden presentar correcciones, documentos de contexto o una respuesta formal. Las presentaciones se conservarán y revisarán antes de cualquier publicación."
    },
    de: {
      centralQuestion: "Wie wurden Befugnis, Budget und Dokumentationsverantwortung verteilt, als Urheberkontakt, Rechterückfragen, Koordination und Zahlungslogistik vor Auffinden endgültiger schriftlicher Bedingungen voranschritten?",
      rightOfReplyNotice: "株式会社日音, 株式会社ヴァルス und alle namentlich genannten Beteiligten können Korrekturen, Kontextdokumente oder eine formelle Antwort einreichen. Einreichungen werden vor jeder Veröffentlichung aufbewahrt und geprüft."
    },
    fr: {
      centralQuestion: "Comment l'autorité, le budget et la responsabilité documentaire étaient-ils répartis lorsque le contact avec les créateurs, les questions de droits, la coordination et la logistique de paiement ont avancé avant que des conditions écrites finales ne soient localisées ?",
      rightOfReplyNotice: "株式会社日音, 株式会社ヴァルス et tout participant nommé peuvent soumettre des corrections, des documents contextuels ou une réponse formelle. Les soumissions seront conservées et examinées avant toute publication."
    },
    sk: {
      centralQuestion: "Ako boli rozdelené právomoc, rozpočet a dokumentačná zodpovednosť, keď kontaktovanie tvorcov, otázky práv, koordinácia a platobná logistika napredovali pred nájdením konečných písomných podmienok?",
      rightOfReplyNotice: "株式会社日音, 株式会社ヴァルス a každý menovaný účastník môžu predložiť opravy, kontextové dokumenty alebo formálnu odpoveď. Podania budú uchované a skontrolované pred akýmkoľvek zverejnením."
    }
  },
  examines: {
    es: [
      { title: "Autoridad de encargo", body: "¿Quién tenía autoridad para solicitar y aprobar el trabajo?" },
      { title: "Alcance", body: "¿Qué trabajo fue solicitado, realizado o discutido?" },
      { title: "Compensación", body: "¿Cuándo y cómo se propuso el pago?" },
      { title: "Derechos", body: "¿Cuándo se plantearon cuestiones de derechos de autor, edición y máster?" },
      { title: "Documentación", body: "¿Qué términos escritos estaban presentes, ausentes o no resueltos?" }
    ],
    de: [
      { title: "Beauftragungsbefugnis", body: "Wer hatte die Befugnis, Arbeit anzufordern und zu genehmigen?" },
      { title: "Umfang", body: "Welche Arbeit wurde angefordert, ausgeführt oder besprochen?" },
      { title: "Vergütung", body: "Wann und wie wurde eine Zahlung vorgeschlagen?" },
      { title: "Rechte", body: "Wann wurden Urheberrechts-, Verlags- und Masterfragen angesprochen?" },
      { title: "Dokumentation", body: "Welche schriftlichen Bedingungen lagen vor, fehlten oder blieben ungelöst?" }
    ],
    fr: [
      { title: "Autorité de commande", body: "Qui avait autorité pour demander et approuver le travail ?" },
      { title: "Périmètre", body: "Quel travail a été demandé, réalisé ou discuté ?" },
      { title: "Rémunération", body: "Quand et comment le paiement a-t-il été proposé ?" },
      { title: "Droits", body: "Quand les questions de droit d'auteur, d'édition et de master ont-elles été soulevées ?" },
      { title: "Documentation", body: "Quelles conditions écrites étaient présentes, absentes ou non résolues ?" }
    ],
    sk: [
      { title: "Zadávacia právomoc", body: "Kto mal právomoc požiadať o prácu a schváliť ju?" },
      { title: "Rozsah", body: "Aká práca bola požadovaná, vykonaná alebo diskutovaná?" },
      { title: "Odmena", body: "Kedy a ako bola navrhnutá platba?" },
      { title: "Práva", body: "Kedy boli otvorené otázky autorských, vydavateľských a master práv?" },
      { title: "Dokumentácia", body: "Ktoré písomné podmienky existovali, chýbali alebo zostali nevyriešené?" }
    ]
  },
  recordSummary: {
    es: [
      "Los registros disponibles indican que un proceso de encargo musical de 2021 incluyó discusión del proyecto, contacto con creadores, consultas relacionadas con derechos y coordinación antes de que el alcance, la compensación y los términos escritos de la Parte Informante quedaran finalizados en el corpus revisado.",
      "Los registros revisados muestran que la coordinación con creadores, las cuestiones de derechos, el manejo de demos o materiales del proyecto y la logística de pago estuvieron activos durante el periodo del proyecto.",
      "Los materiales disponibles no establecen quién tenía la autoridad final de encargo, quién aprobó el presupuesto del proyecto ni quién era responsable de emitir una orden escrita o declaración de trabajo.",
      "No se ha identificado un documento escrito final en el corpus revisado. Esa ausencia no prueba que tal documento no existiera fuera de los materiales revisados.",
      "La asignación de autoridad sigue siendo una pregunta abierta, y el registro no realiza una determinación legal sobre responsabilidad, intención o conducta indebida."
    ],
    de: [
      "Die verfügbaren Aufzeichnungen deuten darauf hin, dass ein Musikbeauftragungsprozess von 2021 Projektdiskussion, Urheberkontakt, rechtebezogene Rückfragen und Koordination umfasste, bevor Umfang, Vergütung und schriftliche Bedingungen der meldenden Partei im geprüften Korpus finalisiert waren.",
      "Die geprüften Aufzeichnungen zeigen, dass Urheberkoordination, Rechtefragen, Demo- oder Projektmaterialbearbeitung und Zahlungslogistik während des Projektzeitraums aktiv waren.",
      "Die verfügbaren Materialien belegen nicht, wer die endgültige Beauftragungsbefugnis hatte, wer das Projektbudget genehmigte oder wer für die Ausstellung eines schriftlichen Auftrags oder Leistungsumfangs verantwortlich war.",
      "Im geprüften Korpus wurde kein endgültiges schriftliches Dokument identifiziert. Diese Abwesenheit beweist nicht, dass außerhalb der geprüften Materialien nie ein Dokument existierte.",
      "Die Zuweisung der Befugnis bleibt eine offene Frage, und das Protokoll trifft keine rechtliche Feststellung zu Haftung, Absicht oder Fehlverhalten."
    ],
    fr: [
      "Les dossiers disponibles indiquent qu'un processus de commande musicale de 2021 a comporté une discussion de projet, des contacts avec des créateurs, des demandes liées aux droits et de la coordination avant que le périmètre, la rémunération et les conditions écrites de la Partie déclarante ne soient finalisés dans le corpus examiné.",
      "Les dossiers examinés montrent que la coordination avec les créateurs, les questions de droits, le traitement de démos ou de matériaux du projet et la logistique de paiement étaient actifs pendant la période du projet.",
      "Les éléments disponibles n'établissent pas qui détenait l'autorité finale de commande, qui a approuvé le budget du projet ni qui était responsable d'émettre une commande écrite ou un énoncé de travail.",
      "Aucun document écrit final n'a été identifié dans le corpus examiné. Cette absence ne prouve pas qu'aucun document n'a jamais existé en dehors des éléments examinés.",
      "La répartition de l'autorité reste une question ouverte, et le dossier ne formule aucune détermination juridique sur la responsabilité, l'intention ou une faute."
    ],
    sk: [
      "Dostupné záznamy naznačujú, že proces hudobného zadania z roku 2021 zahŕňal diskusiu o projekte, kontaktovanie tvorcov, otázky súvisiace s právami a koordináciu pred finalizáciou rozsahu, odmeny a písomných podmienok Oznamujúcej strany v preskúmanom korpuse.",
      "Preskúmané záznamy ukazujú, že koordinácia s tvorcami, otázky práv, nakladanie s demami alebo projektovými materiálmi a platobná logistika boli počas obdobia projektu aktívne.",
      "Dostupné materiály nepreukazujú, kto mal konečnú zadávaciu právomoc, kto schválil rozpočet projektu ani kto bol zodpovedný za vydanie písomnej objednávky alebo zadania prác.",
      "V preskúmanom korpuse nebol identifikovaný konečný písomný dokument. Táto absencia nepreukazuje, že mimo preskúmaných materiálov nikdy neexistoval žiadny dokument.",
      "Rozdelenie právomoci zostáva otvorenou otázkou a záznam nerobí právny záver o zodpovednosti, úmysle alebo protiprávnom konaní."
    ]
  },
  coreSequence: {
    es: ["Contacto inicial", "Discusión del proyecto", "Contacto con creadores", "Consultas de derechos", "Demos / coordinación", "Discusión de pago", "Propuesta de honorarios", "Discusión contractual", "Disputa"],
    de: ["Erstkontakt", "Projektdiskussion", "Urheberkontakt", "Rechterückfragen", "Demo / Koordination", "Zahlungsabstimmung", "Honorarvorschlag", "Vertragsgespräch", "Streit"],
    fr: ["Contact initial", "Discussion du projet", "Contact avec les créateurs", "Demandes sur les droits", "Démo / coordination", "Discussion de paiement", "Proposition d'honoraires", "Discussion contractuelle", "Litige"],
    sk: ["Prvý kontakt", "Diskusia o projekte", "Kontaktovanie tvorcov", "Otázky práv", "Demo / koordinácia", "Diskusia o platbe", "Návrh honoráru", "Diskusia o zmluve", "Spor"]
  },
  keyFindings: {
    es: [
      "La coordinación relacionada con creadores tuvo lugar durante el periodo del proyecto.",
      "Se discutieron cuestiones relacionadas con derechos y pagos.",
      "La autoridad precisa de encargo no ha sido establecida por una orden escrita localizada.",
      "El momento y la base de la compensación de la Parte Informante siguen en disputa.",
      "Las organizaciones implicadas operan dentro de redes establecidas de música, radiodifusión y producción."
    ],
    de: [
      "Urheberbezogene Koordination fand während des Projektzeitraums statt.",
      "Rechte- und zahlungsbezogene Fragen wurden besprochen.",
      "Die genaue Beauftragungsbefugnis wurde durch keinen aufgefundenen schriftlichen Auftrag festgestellt.",
      "Zeitpunkt und Grundlage der Vergütung der meldenden Partei bleiben umstritten.",
      "Die beteiligten Organisationen arbeiten in etablierten Musik-, Rundfunk- und Produktionsnetzwerken."
    ],
    fr: [
      "Une coordination liée aux créateurs a eu lieu pendant la période du projet.",
      "Des questions liées aux droits et au paiement ont été discutées.",
      "L'autorité précise de commande n'a pas été établie par une commande écrite localisée.",
      "Le calendrier et le fondement de la rémunération de la Partie déclarante restent contestés.",
      "Les organisations impliquées opèrent au sein de réseaux établis de musique, de diffusion et de production."
    ],
    sk: [
      "Koordinácia súvisiaca s tvorcami prebiehala počas obdobia projektu.",
      "Diskutovalo sa o otázkach súvisiacich s právami a platbou.",
      "Presná zadávacia právomoc nebola preukázaná nájdenou písomnou objednávkou.",
      "Načasovanie a základ odmeny Oznamujúcej strany zostávajú sporné.",
      "Zapojené organizácie pôsobia v etablovaných hudobných, vysielacích a produkčných sieťach."
    ]
  },
  openQuestions: {
    es: [
      "¿Quién tenía la autoridad final de encargo?",
      "¿Quién aprobó el presupuesto del proyecto?",
      "¿Quién era responsable de emitir una orden escrita o declaración de trabajo?",
      "¿En qué momento se aprobó la compensación de la Parte Informante?",
      "¿Qué términos regulaban la cancelación o el pago por trabajo ya realizado?",
      "¿Qué restricciones se aplicaban a demos, información de derechos y contactos de creadores tras finalizar el proyecto?"
    ],
    de: [
      "Wer hatte die endgültige Beauftragungsbefugnis?",
      "Wer genehmigte das Projektbudget?",
      "Wer war für die Ausstellung eines schriftlichen Auftrags oder Leistungsumfangs verantwortlich?",
      "Zu welchem Zeitpunkt wurde die Vergütung der meldenden Partei genehmigt?",
      "Welche Bedingungen regelten Kündigung oder Zahlung für bereits geleistete Arbeit?",
      "Welche Beschränkungen galten nach Projektende für Demos, Rechteinformationen und Urheberkontakte?"
    ],
    fr: [
      "Qui détenait l'autorité finale de commande ?",
      "Qui a approuvé le budget du projet ?",
      "Qui était responsable d'émettre une commande écrite ou un énoncé de travail ?",
      "À quel moment la rémunération de la Partie déclarante a-t-elle été approuvée ?",
      "Quelles conditions régissaient l'annulation ou le paiement du travail déjà réalisé ?",
      "Quelles restrictions s'appliquaient aux démos, informations de droits et contacts de créateurs après la fin du projet ?"
    ],
    sk: [
      "Kto mal konečnú zadávaciu právomoc?",
      "Kto schválil rozpočet projektu?",
      "Kto bol zodpovedný za vydanie písomnej objednávky alebo zadania prác?",
      "V akom okamihu bola schválená odmena Oznamujúcej strany?",
      "Aké podmienky upravovali zrušenie alebo platbu za už vykonanú prácu?",
      "Aké obmedzenia platili pre demá, informácie o právach a kontakty na tvorcov po skončení projektu?"
    ]
  },
  transactionStructure: {
    es: [
      { label: "Introducción / puente", body: "Un representante del lado de VALSE está documentado como parte de la vía de introducción y comunicación del proyecto." },
      { label: "Discusión del proyecto", body: "Personal del lado de 株式会社日音 y la Parte Informante aparecen por rol en las comunicaciones del proyecto." },
      { label: "Actividad de trabajo", body: "El contacto con creadores, las consultas de derechos, el manejo de demos/materiales y la logística de pago aparecen en el registro revisado." },
      { label: "Vacío documental", body: "El alcance escrito final, la autoridad de encargo, la tarifa aprobada y el tratamiento de cancelación siguen sin resolverse en el corpus revisado." },
      { label: "Encuadre posterior de honorarios", body: "Se refleja una propuesta de honorarios en una etapa posterior, pero la autoridad, la base y la aceptación mutua no quedan establecidas por el registro seguro para publicación." }
    ],
    de: [
      { label: "Einführung / Brücke", body: "Ein VALSE-seitiger Vertreter ist als Teil des Einführungs- und Projektkommunikationswegs dokumentiert." },
      { label: "Projektdiskussion", body: "株式会社日音-seitiges Personal und die meldende Partei erscheinen in der Projektkommunikation nach Rollen." },
      { label: "Arbeitsaktivität", body: "Urheberkontakt, Rechterückfragen, Demo-/Materialbearbeitung und Zahlungslogistik spiegeln sich im geprüften Protokoll wider." },
      { label: "Dokumentationslücke", body: "Endgültiger schriftlicher Umfang, Beauftragungsbefugnis, genehmigte Vergütung und Kündigungsbehandlung bleiben im geprüften Korpus ungelöst." },
      { label: "Spätere Honorardarstellung", body: "Ein späterer Honorarvorschlag ist abgebildet, aber Befugnis, Grundlage und gegenseitige Annahme werden durch das öffentlich sichere Protokoll nicht festgestellt." }
    ],
    fr: [
      { label: "Introduction / passerelle", body: "Un représentant côté VALSE est documenté comme faisant partie du chemin d'introduction et de communication du projet." },
      { label: "Discussion du projet", body: "Le personnel côté 株式会社日音 et la Partie déclarante apparaissent par rôle dans les communications du projet." },
      { label: "Activité de travail", body: "Le contact avec les créateurs, les demandes sur les droits, le traitement des démos/matériaux et la logistique de paiement figurent dans le dossier examiné." },
      { label: "Lacune documentaire", body: "Le périmètre écrit final, l'autorité de commande, les honoraires approuvés et le traitement de l'annulation restent non résolus dans le corpus examiné." },
      { label: "Qualification ultérieure des honoraires", body: "Une proposition d'honoraires ultérieure est reflétée, mais l'autorité, la base et l'acceptation mutuelle ne sont pas établies par le dossier publiquement sûr." }
    ],
    sk: [
      { label: "Predstavenie / prepojenie", body: "Zástupca na strane VALSE je zdokumentovaný ako súčasť cesty predstavenia a projektovej komunikácie." },
      { label: "Diskusia o projekte", body: "Personál na strane 株式会社日音 a Oznamujúca strana sa v projektovej komunikácii objavujú podľa rolí." },
      { label: "Pracovná aktivita", body: "Kontaktovanie tvorcov, otázky práv, nakladanie s demami/materiálmi a platobná logistika sa odrážajú v preskúmanom zázname." },
      { label: "Dokumentačná medzera", body: "Konečný písomný rozsah, zadávacia právomoc, schválená odmena a zaobchádzanie pri zrušení zostávajú v preskúmanom korpuse nevyriešené." },
      { label: "Neskoršie rámcovanie honoráru", body: "Neskorší návrh honoráru je zachytený, ale právomoc, základ a vzájomné prijatie nie sú verejne bezpečným záznamom preukázané." }
    ]
  }
};

function homeText(group, lang, index, field, fallback) {
  const entry = homeTranslations[group]?.[lang]?.[index];
  if (entry && field && entry[field] !== undefined) return entry[field];
  if (entry && !field) return entry;
  return local(fallback, lang);
}

function explainerText(key, lang) {
  return homeTranslations.explainer?.[lang]?.[key] || local(explainer[key], lang);
}

const heroDisplayTitles = {
  en: "株式会社日音 / 株式会社ヴァルス 2021 Music Commissioning Record",
  ja: "株式会社日音 / 株式会社ヴァルス 2021年 音楽制作発注・権利処理記録",
  es: "株式会社日音 / 株式会社ヴァルス Registro 2021 de encargo musical",
  de: "株式会社日音 / 株式会社ヴァルス 2021 Protokoll zum Musikauftrag",
  fr: "株式会社日音 / 株式会社ヴァルス Dossier 2021 de commande musicale",
  sk: "株式会社日音 / 株式会社ヴァルス Záznam 2021 o hudobnom zadaní"
};

const answerSummaries = {
  en: [
    "This public record is an evidence-separated review of a 2021 music commissioning process involving 株式会社日音 and 株式会社ヴァルス as public subject organisations.",
    "It answers who communicated, what work and rights topics were discussed, where authority and budget approval remain unresolved, and why final written terms matter for independent music work.",
    "The page does not publish the Reporting Party's identity, raw correspondence, email headers, message IDs, signatures, exact times, demos or private creator identifiers."
  ],
  ja: [
    "本公開記録は、株式会社日音及び株式会社ヴァルスを公開上の対象組織として、2021年の音楽制作発注過程を証拠と評価を分けて整理するものです。",
    "誰が連絡し、どの作業・権利論点が協議され、発注権限・予算承認・最終書面条件のどこが未解決なのかを、第三者が確認しやすい形で示します。",
    "申告者の氏名、レーベル名、アーティスト名義、メール、ヘッダー、メッセージ識別子、署名、正確な時刻、デモ、非公開作家識別情報は掲載しません。"
  ],
  es: [
    "Este registro público separa pruebas y evaluación en un proceso de encargo musical de 2021 con 株式会社日音 y 株式会社ヴァルス como organizaciones públicas objeto del registro.",
    "Responde quién comunicó, qué trabajo y derechos se discutieron, dónde siguen abiertas la autoridad y la aprobación presupuestaria, y por qué importan los términos escritos finales.",
    "No publica identidad de la Parte Informante, correspondencia cruda, cabeceras, identificadores de mensajes, firmas, horas exactas, demos ni identificadores privados de creadores."
  ],
  de: [
    "Dieses öffentliche Protokoll trennt Belege und Bewertung in einem Musikbeauftragungsprozess von 2021 mit 株式会社日音 und 株式会社ヴァルス als öffentlich benannten Gegenstandsorganisationen.",
    "Es beantwortet, wer kommunizierte, welche Arbeiten und Rechtefragen besprochen wurden, wo Befugnis und Budgetfreigabe offen bleiben und warum endgültige schriftliche Bedingungen wichtig sind.",
    "Identität der meldenden Partei, Rohkorrespondenz, Header, Nachrichtenkennungen, Signaturen, genaue Uhrzeiten, Demos und private Urheberkennungen werden nicht veröffentlicht."
  ],
  fr: [
    "Ce dossier public sépare les preuves et l'évaluation dans un processus de commande musicale de 2021 impliquant 株式会社日音 et 株式会社ヴァルス comme organisations publiquement concernées.",
    "Il répond à qui a communiqué, quels travaux et droits ont été discutés, où l'autorité et l'approbation budgétaire restent ouvertes, et pourquoi les conditions écrites finales comptent.",
    "Il ne publie pas l'identité de la Partie déclarante, la correspondance brute, les en-têtes, identifiants de message, signatures, heures exactes, démos ou identifiants privés de créateurs."
  ],
  sk: [
    "Tento verejný záznam oddeľuje dôkazy a hodnotenie v procese hudobného zadania z roku 2021 s 株式会社日音 a 株式会社ヴァルス ako verejne uvedenými predmetnými organizáciami.",
    "Odpovedá, kto komunikoval, aké práce a otázky práv boli diskutované, kde zostáva otvorená právomoc a schválenie rozpočtu a prečo sú konečné písomné podmienky dôležité.",
    "Nezverejňuje identitu Oznamujúcej strany, surovú korešpondenciu, hlavičky, identifikátory správ, podpisy, presné časy, demá ani súkromné identifikátory tvorcov."
  ]
};

const searchIntentItems = {
  en: [
    "株式会社日音 株式会社ヴァルス 2021 music commissioning record",
    "music production scope before written terms",
    "creator outreach and rights clearance evidence ledger",
    "independent music contractor payment and cancellation risk"
  ],
  ja: [
    "日音 VALSE 2021 音楽制作 発注記録",
    "書面条件前の音楽制作 業務範囲",
    "作家連絡 権利処理 証拠台帳",
    "独立事業者 音楽制作 報酬 中止リスク"
  ],
  es: [
    "registro de encargo musical 株式会社日音 株式会社ヴァルス 2021",
    "producción musical antes de términos escritos",
    "contacto con creadores y aclaración de derechos",
    "riesgo de pago y cancelación para contratistas musicales"
  ],
  de: [
    "株式会社日音 株式会社ヴァルス 2021 Musikauftrag Protokoll",
    "Musikproduktion vor schriftlichen Bedingungen",
    "Urheberkontakt und Rechteklärung Evidenzregister",
    "Zahlungs- und Kündigungsrisiko für unabhängige Musikauftragnehmer"
  ],
  fr: [
    "dossier de commande musicale 株式会社日音 株式会社ヴァルス 2021",
    "production musicale avant conditions écrites",
    "contact créateurs et clarification des droits",
    "risque paiement annulation indépendant musique"
  ],
  sk: [
    "株式会社日音 株式会社ヴァルス 2021 záznam o hudobnom zadaní",
    "hudobná produkcia pred písomnými podmienkami",
    "kontakt tvorcov a vyjasnenie práv",
    "riziko platby a zrušenia pre nezávislých hudobných dodávateľov"
  ]
};

const recordFaqs = {
  en: [
    ["What is this record about?", "It is a public-safe record of a 2021 music commissioning process, focused on authority, scope, compensation, rights clearance and unresolved documentary gaps."],
    ["Does the record identify the Reporting Party?", "No. The Reporting Party is described only by a public-safe role label. Private identifiers are withheld."],
    ["Does the record make a legal conclusion?", "No. It separates documented facts, context, disputed issues and open questions. It does not determine liability, intent or wrongdoing."],
    ["Why are 株式会社日音 and 株式会社ヴァルス named?", "They are public subject organisations for the record. Public company context is used only as context unless supported by record-specific evidence."],
    ["Where should corrections be sent?", "The right-of-reply page provides a route for corrections, contextual documents and formal responses before any publication decision."]
  ],
  ja: [
    ["この記録は何を扱うものですか。", "2021年の音楽制作発注過程について、発注権限、業務範囲、報酬、権利処理、未解決の書面上の空白を公開安全な形で整理する記録です。"],
    ["申告者は特定されますか。", "いいえ。申告者は公開安全な役割名でのみ表示し、氏名、レーベル名、アーティスト名義、メール等は掲載しません。"],
    ["法的結論を示していますか。", "いいえ。記録済み事実、背景情報、争点、未解決事項を分けて表示します。責任、故意、不正行為を断定しません。"],
    ["なぜ株式会社日音と株式会社ヴァルスの名前を出すのですか。", "本記録の公開上の対象組織だからです。公式会社情報は、本件固有証拠で支えられない限り背景情報としてのみ扱います。"],
    ["訂正や反論はどこから出せますか。", "反論・訂正ページから、訂正、文脈資料、正式回答を提出する経路を確認できます。"]
  ],
  es: [
    ["¿De qué trata este registro?", "Es un registro público seguro de un proceso de encargo musical de 2021, centrado en autoridad, alcance, compensación, aclaración de derechos y vacíos documentales no resueltos."],
    ["¿Identifica el registro a la Parte Informante?", "No. La Parte Informante se describe solo mediante una etiqueta de rol pública segura. Los identificadores privados se omiten."],
    ["¿El registro formula una conclusión legal?", "No. Separa hechos documentados, contexto, cuestiones disputadas y preguntas abiertas. No determina responsabilidad, intención ni conducta indebida."],
    ["¿Por qué se nombran 株式会社日音 y 株式会社ヴァルス?", "Son organizaciones públicas objeto del registro. El contexto empresarial público se usa solo como contexto salvo que esté respaldado por evidencia específica del registro."],
    ["¿Dónde se envían correcciones?", "La página de derecho de respuesta ofrece una vía para correcciones, documentos contextuales y respuestas formales antes de cualquier decisión de publicación."]
  ],
  de: [
    ["Worum geht es in diesem Protokoll?", "Es ist ein öffentlich sicheres Protokoll eines Musikbeauftragungsprozesses von 2021 mit Fokus auf Befugnis, Umfang, Vergütung, Rechteklärung und ungelöste Dokumentationslücken."],
    ["Identifiziert das Protokoll die meldende Partei?", "Nein. Die meldende Partei wird nur mit einer öffentlich sicheren Rollenbezeichnung beschrieben. Private Kennungen werden zurückgehalten."],
    ["Trifft das Protokoll eine rechtliche Schlussfolgerung?", "Nein. Es trennt dokumentierte Tatsachen, Kontext, Streitfragen und offene Fragen. Es stellt keine Haftung, Absicht oder Fehlverhalten fest."],
    ["Warum werden 株式会社日音 und 株式会社ヴァルス genannt?", "Sie sind öffentlich benannte Gegenstandsorganisationen des Protokolls. Öffentlicher Unternehmenskontext wird nur als Kontext verwendet, sofern er nicht durch protokollspezifische Belege gestützt ist."],
    ["Wo können Korrekturen eingereicht werden?", "Die Seite zum Recht auf Erwiderung bietet einen Weg für Korrekturen, Kontextdokumente und formelle Antworten vor jeder Veröffentlichungsentscheidung."]
  ],
  fr: [
    ["De quoi traite ce dossier ?", "Il s'agit d'un dossier public sécurisé sur un processus de commande musicale de 2021, centré sur l'autorité, le périmètre, la rémunération, la clarification des droits et les lacunes documentaires non résolues."],
    ["Le dossier identifie-t-il la Partie déclarante ?", "Non. La Partie déclarante est décrite uniquement par une étiquette de rôle publique sécurisée. Les identifiants privés sont retenus."],
    ["Le dossier formule-t-il une conclusion juridique ?", "Non. Il sépare faits documentés, contexte, points contestés et questions ouvertes. Il ne détermine pas responsabilité, intention ou faute."],
    ["Pourquoi 株式会社日音 et 株式会社ヴァルス sont-ils nommés ?", "Ce sont les organisations publiquement concernées par le dossier. Le contexte public d'entreprise est utilisé uniquement comme contexte sauf s'il est appuyé par des preuves propres au dossier."],
    ["Où envoyer des corrections ?", "La page du droit de réponse fournit une voie pour les corrections, documents contextuels et réponses formelles avant toute décision de publication."]
  ],
  sk: [
    ["O čom je tento záznam?", "Je to verejne bezpečný záznam o procese hudobného zadania z roku 2021 so zameraním na právomoc, rozsah, odmenu, vyjasnenie práv a nevyriešené dokumentačné medzery."],
    ["Identifikuje záznam Oznamujúcu stranu?", "Nie. Oznamujúca strana je opísaná iba verejne bezpečným označením roly. Súkromné identifikátory sú zadržané."],
    ["Robí záznam právny záver?", "Nie. Oddeľuje zdokumentované fakty, kontext, sporné otázky a otvorené otázky. Neurčuje zodpovednosť, úmysel ani protiprávne konanie."],
    ["Prečo sú uvedené 株式会社日音 a 株式会社ヴァルス?", "Sú to verejne uvedené predmetné organizácie záznamu. Verejný firemný kontext sa používa iba ako kontext, pokiaľ nie je podložený dôkazmi špecifickými pre záznam."],
    ["Kam možno poslať opravy?", "Stránka práva na odpoveď poskytuje cestu pre opravy, kontextové dokumenty a formálne odpovede pred akýmkoľvek rozhodnutím o zverejnení."]
  ]
};

function localizedFaqs(lang) {
  return recordFaqs[lang] || recordFaqs.en;
}

function AnswerSummary(lang = currentLang) {
  return `<div class="summary-stack">${(answerSummaries[lang] || answerSummaries.en).map((item) => `<p class="notice">${escapeHtml(item)}</p>`).join("")}</div>`;
}

function SearchIntentPanel(lang = currentLang) {
  return `<div class="grid two">${(searchIntentItems[lang] || searchIntentItems.en).map((item) => `
    <article class="card">
      ${EvidenceBadge("CONTEXT_ONLY", lang)}
      <p>${escapeHtml(item)}</p>
    </article>
  `).join("")}</div>`;
}

function FaqPanel(lang = currentLang) {
  return `<div class="summary-stack">${localizedFaqs(lang).map(([question, answer]) => `
    <details class="notice">
      <summary>${escapeHtml(question)}</summary>
      <p>${escapeHtml(answer)}</p>
    </details>
  `).join("")}</div>`;
}

function seoKeywords(lang = currentLang) {
  return (searchIntentItems[lang] || searchIntentItems.en).concat([
    "株式会社日音", "Nichion", "株式会社ヴァルス", "VALSE", "music commissioning", "rights clearance", "evidence ledger", "right of reply"
  ]).join(", ");
}

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
  const lines = wrapSvgText(label, currentLang === "ja" ? 14 : 22);
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
    <svg class="relationship-svg" viewBox="0 0 1000 500" role="img" aria-label="${escapeHtml(tr(lang, { en: "Commissioning chain diagram", ja: "発注経路図", es: "Diagrama de cadena de encargo", de: "Diagramm der Auftragskette", fr: "Diagramme de chaîne de commande", sk: "Diagram reťazca zadania" }))}">
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
    "tbs-holdings": [70, 36, 190, 66],
    nichion: [70, 146, 190, 72],
    valse: [70, 310, 190, 72],
    "proposed-project": [405, 205, 210, 82],
    "broadcast-context": [740, 70, 190, 72],
    "facility-context": [740, 310, 190, 72]
  };
  const lineData = [
    ["tbs-holdings", "nichion", "M165 102 V146", 178, 128],
    ["nichion", "proposed-project", "M260 182 C330 190 350 232 405 242", 318, 198],
    ["valse", "proposed-project", "M260 346 C330 330 350 266 405 250", 316, 330],
    ["valse", "facility-context", "M260 346 C430 402 590 402 740 346", 480, 398],
    ["valse", "broadcast-context", "M260 328 C430 238 560 128 740 106", 462, 224],
    ["nichion", "broadcast-context", "M260 182 C430 86 570 54 740 106", 470, 78]
  ];
  const relMap = new Map(relationships.institutional.map((rel) => [`${rel.from}->${rel.to}`, rel]));
  return `
    <svg class="network-svg" viewBox="0 0 1000 460" role="img" aria-label="${escapeHtml(tr(lang, { en: "Institutional context network diagram", ja: "組織的背景ネットワーク図", es: "Diagrama de red de contexto institucional", de: "Netzwerkdiagramm des institutionellen Kontexts", fr: "Diagramme de réseau du contexte institutionnel", sk: "Diagram siete inštitucionálneho kontextu" }))}">
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
      <span><i class="line-key"></i>${escapeHtml(tr(lang, { en: "solid line = documented communication", ja: "実線 = 記録済み連絡", es: "línea continua = comunicación documentada", de: "durchgezogene Linie = dokumentierte Kommunikation", fr: "ligne pleine = communication documentée", sk: "plná čiara = zdokumentovaná komunikácia" }))}</span>
      <span><i class="line-key dashed"></i>${escapeHtml(tr(lang, { en: "dashed line = inferred or contextual relationship", ja: "破線 = 推認又は背景関係", es: "línea discontinua = relación inferida o contextual", de: "gestrichelte Linie = abgeleitete oder kontextuelle Beziehung", fr: "ligne tiretée = relation inférée ou contextuelle", sk: "prerušovaná čiara = odvodený alebo kontextový vzťah" }))}</span>
      <span><i class="line-key dotted"></i>${escapeHtml(tr(lang, { en: "dotted line = unresolved or disputed relationship", ja: "点線 = 未解決又は争点", es: "línea punteada = relación no resuelta o disputada", de: "gepunktete Linie = ungelöste oder umstrittene Beziehung", fr: "ligne pointillée = relation non résolue ou contestée", sk: "bodkovaná čiara = nevyriešený alebo sporný vzťah" }))}</span>
    </div>
  `;
}

function MapPreview(lang = currentLang) {
  const chainText = tr(lang, {
    en: "A commissioning-chain map showing introduction, request, creator outreach, rights enquiry, payment discussion and unresolved documentation in one view.",
    ja: "紹介、依頼、作家連絡、権利確認、支払協議、書面未解決を同じ画面で確認できる発注経路図です。",
    es: "Mapa de la cadena de encargo que muestra introducción, solicitud, contacto con creadores, consulta de derechos, discusión de pago y documentación no resuelta en una sola vista.",
    de: "Karte der Auftragskette mit Einführung, Anfrage, Urheberkontakt, Rechterückfrage, Zahlungsabstimmung und ungelöster Dokumentation in einer Ansicht.",
    fr: "Carte de la chaîne de commande montrant l'introduction, la demande, le contact avec les créateurs, les questions de droits, la discussion de paiement et la documentation non résolue en une seule vue.",
    sk: "Mapa reťazca zadania zobrazujúca predstavenie, žiadosť, kontaktovanie tvorcov, otázky práv, diskusiu o platbe a nevyriešenú dokumentáciu v jednom pohľade."
  });
  const networkText = tr(lang, {
    en: "An institutional-context map separating ownership, facility location, programme background and record-specific communication by line type.",
    ja: "所有関係、施設所在地、番組背景、本件連絡を線種で分けた組織的背景図です。",
    es: "Mapa de contexto institucional que separa propiedad, ubicación de instalaciones, contexto de programa y comunicación específica del registro por tipo de línea.",
    de: "Institutionelle Kontextkarte, die Eigentum, Standort, Programmkontext und protokollspezifische Kommunikation nach Linientyp trennt.",
    fr: "Carte de contexte institutionnel distinguant propriété, localisation des installations, contexte de programme et communication propre au dossier par type de ligne.",
    sk: "Mapa inštitucionálneho kontextu oddeľujúca vlastníctvo, umiestnenie zariadenia, programové pozadie a komunikáciu špecifickú pre záznam podľa typu čiary."
  });
  return `
    <div class="map-preview-stack">
      <article class="map-preview">
        <div class="map-preview-head">
          <div>
            <h3>${escapeHtml(tr(lang, { en: "Commissioning Chain Map", ja: "発注経路図", es: "Mapa de la cadena de encargo", de: "Karte der Auftragskette", fr: "Carte de la chaîne de commande", sk: "Mapa reťazca zadania" }))}</h3>
            <p class="muted">${escapeHtml(chainText)}</p>
          </div>
          ${EvidenceBadge("OPEN_QUESTION", lang)}
        </div>
        ${RelationshipGraph(lang)}
      </article>
      <article class="map-preview">
        <div class="map-preview-head">
          <div>
            <h3>${escapeHtml(tr(lang, { en: "Institutional Network Map", ja: "組織ネットワーク図", es: "Mapa de red institucional", de: "Institutionelle Netzwerkkarte", fr: "Carte du réseau institutionnel", sk: "Mapa inštitucionálnej siete" }))}</h3>
            <p class="muted">${escapeHtml(networkText)}</p>
          </div>
          ${EvidenceBadge("CONTEXT_ONLY", lang)}
        </div>
        ${NetworkGraph(lang)}
      </article>
    </div>
  `;
}

function verificationMapCopy(lang = currentLang) {
  return {
    title: tr(lang, {
      en: "Relationship and Verification Map",
      ja: "関係・検証マップ",
      es: "Mapa de relación y verificación",
      de: "Beziehungs- und Prüfkarte",
      fr: "Carte relationnelle et de vérification",
      sk: "Mapa vzťahov a overenia"
    }),
    lead: tr(lang, {
      en: "A neutral public-redacted map of the 2021 production engagement: organisations, role-based participants, documents and open questions. Click a node to read its note. No legal conclusion is made.",
      ja: "2021年の制作案件について、組織、役割ベースの関係者、資料、未解決論点を公開安全な形で整理した中立マップです。ノードをクリックすると注記を確認できます。法的結論は示しません。",
      es: "Mapa neutral y redactado para publicación del encargo de producción de 2021: organizaciones, participantes por rol, documentos y preguntas abiertas. Haga clic en un nodo para leer la nota. No se formula una conclusión legal.",
      de: "Neutrale, öffentlich redigierte Karte des Produktionsauftrags von 2021: Organisationen, rollenbasierte Beteiligte, Dokumente und offene Fragen. Klicken Sie auf einen Knoten, um die Notiz zu lesen. Es wird keine rechtliche Schlussfolgerung gezogen.",
      fr: "Carte neutre et expurgée pour publication de l'engagement de production de 2021 : organisations, participants par rôle, documents et questions ouvertes. Cliquez sur un noeud pour lire sa note. Aucune conclusion juridique n'est formulée.",
      sk: "Neutrálna verejne redigovaná mapa produkčného zadania z roku 2021: organizácie, účastníci podľa rolí, dokumenty a otvorené otázky. Kliknutím na uzol zobrazíte poznámku. Neuvádza sa právny záver."
    }),
    chips: tr(lang, {
      en: ["Parties shown by role", "No legal conclusion", "Right of reply open"],
      ja: ["人物は役割で表示", "法的結論なし", "反論・訂正受付中"],
      es: ["Partes mostradas por rol", "Sin conclusión legal", "Derecho de respuesta abierto"],
      de: ["Parteien nach Rolle", "Keine rechtliche Schlussfolgerung", "Erwiderung offen"],
      fr: ["Parties affichées par rôle", "Aucune conclusion juridique", "Droit de réponse ouvert"],
      sk: ["Strany zobrazené podľa roly", "Bez právneho záveru", "Právo na odpoveď otvorené"]
    }),
    kicker: tr(lang, {
      en: "RELATIONSHIP & VERIFICATION MAP",
      ja: "関係・検証マップ",
      es: "MAPA DE RELACIÓN Y VERIFICACIÓN",
      de: "BEZIEHUNGS- UND PRÜFKARTE",
      fr: "CARTE RELATIONNELLE ET DE VÉRIFICATION",
      sk: "MAPA VZŤAHOV A OVERENIA"
    }),
    deck: tr(lang, {
      en: "株式会社日音 / 株式会社ヴァルス · 2021 record · no legal conclusion",
      ja: "株式会社日音 / 株式会社ヴァルス · 2021年記録 · 法的結論なし",
      es: "株式会社日音 / 株式会社ヴァルス · Registro 2021 · sin conclusión legal",
      de: "株式会社日音 / 株式会社ヴァルス · Protokoll 2021 · keine rechtliche Schlussfolgerung",
      fr: "株式会社日音 / 株式会社ヴァルス · Dossier 2021 · aucune conclusion juridique",
      sk: "株式会社日音 / 株式会社ヴァルス · Záznam 2021 · bez právneho záveru"
    }),
    hint: tr(lang, {
      en: "drag · hover to expand · click a node for its note",
      ja: "ドラッグ · ホバーで拡大 · クリックで注記",
      es: "arrastre · pase el cursor para ampliar · clic para nota",
      de: "ziehen · Hover zum Erweitern · Klick für Notiz",
      fr: "glisser · survol pour agrandir · clic pour la note",
      sk: "ťahať · hover na zväčšenie · klik pre poznámku"
    }),
    reset: tr(lang, { en: "Shuffle", ja: "再配置", es: "Reordenar", de: "Neu anordnen", fr: "Réorganiser", sk: "Premiešať" }),
    legendTitle: tr(lang, { en: "EDGE = RELATION + STATUS", ja: "線 = 関係 + 状態", es: "ARISTA = RELACIÓN + ESTADO", de: "KANTE = BEZIEHUNG + STATUS", fr: "LIEN = RELATION + STATUT", sk: "HRANA = VZŤAH + STAV" }),
    legend: tr(lang, {
      en: ["Documented relation", "Open / unverified", "Verification gap", "Context only - no responsibility"],
      ja: ["記録済み関係", "未解決 / 未検証", "検証上の空白", "背景のみ - 責任関係なし"],
      es: ["Relación documentada", "Abierto / no verificado", "Vacío de verificación", "Solo contexto - sin responsabilidad"],
      de: ["Dokumentierte Beziehung", "Offen / ungeprüft", "Prüflücke", "Nur Kontext - keine Verantwortung"],
      fr: ["Relation documentée", "Ouvert / non vérifié", "Lacune de vérification", "Contexte seulement - pas de responsabilité"],
      sk: ["Zdokumentovaný vzťah", "Otvorené / neoverené", "Medzera v overení", "Iba kontext - bez zodpovednosti"]
    }),
    privacy: tr(lang, {
      en: "People are shown by role; individual staff names and reporting-side identity are omitted. No endorsement, knowledge, control, fault or responsibility is established for any party.",
      ja: "人物は役割で表示し、個別の担当者名及び申告側の識別情報は省略します。いずれの当事者についても、承認、認識、支配、過失又は責任を認定するものではありません。",
      es: "Las personas se muestran por rol; se omiten nombres individuales e identidad de la parte informante. No se establece aprobación, conocimiento, control, culpa ni responsabilidad de ninguna parte.",
      de: "Personen werden nach Rollen angezeigt; einzelne Mitarbeiternamen und die Identität der meldenden Seite werden ausgelassen. Für keine Partei werden Billigung, Kenntnis, Kontrolle, Verschulden oder Verantwortung festgestellt.",
      fr: "Les personnes sont affichées par rôle ; les noms individuels et l'identité de la partie déclarante sont omis. Aucune approbation, connaissance, maîtrise, faute ou responsabilité n'est établie pour une partie.",
      sk: "Osoby sú zobrazené podľa rolí; mená jednotlivých pracovníkov a identita oznamujúcej strany sú vynechané. Nepreukazuje sa schválenie, vedomosť, kontrola, vina ani zodpovednosť žiadnej strany."
    }),
    nodeListTitle: tr(lang, { en: "All nodes - text record", ja: "全ノード - テキスト記録", es: "Todos los nodos - registro textual", de: "Alle Knoten - Textprotokoll", fr: "Tous les noeuds - enregistrement texte", sk: "Všetky uzly - textový záznam" }),
    sourceType: tr(lang, { en: "Source type", ja: "情報源種別", es: "Tipo de fuente", de: "Quellentyp", fr: "Type de source", sk: "Typ zdroja" }),
    noteLabel: tr(lang, { en: "Note", ja: "注記", es: "Nota", de: "Notiz", fr: "Note", sk: "Poznámka" }),
    openRelated: tr(lang, { en: "Open related page", ja: "関連ページを開く", es: "Abrir página relacionada", de: "Zugehörige Seite öffnen", fr: "Ouvrir la page liée", sk: "Otvoriť súvisiacu stránku" }),
    categories: tr(lang, {
      en: { subject: "Subject", org: "Organisation", role: "Role (name withheld)", doc: "Documented", open: "Open question", ctx: "Context", reporting: "Reviewing party" },
      ja: { subject: "対象", org: "組織", role: "役割(氏名非表示)", doc: "記録済み", open: "未解決論点", ctx: "背景", reporting: "確認側" },
      es: { subject: "Objeto", org: "Organización", role: "Rol (nombre omitido)", doc: "Documentado", open: "Pregunta abierta", ctx: "Contexto", reporting: "Parte revisora" },
      de: { subject: "Gegenstand", org: "Organisation", role: "Rolle (Name zurückgehalten)", doc: "Dokumentiert", open: "Offene Frage", ctx: "Kontext", reporting: "Prüfende Seite" },
      fr: { subject: "Objet", org: "Organisation", role: "Rôle (nom retenu)", doc: "Documenté", open: "Question ouverte", ctx: "Contexte", reporting: "Partie examinatrice" },
      sk: { subject: "Predmet", org: "Organizácia", role: "Rola (meno zadržané)", doc: "Zdokumentované", open: "Otázka otvorená", ctx: "Kontext", reporting: "Kontrolujúca strana" }
    })
  };
}

function verificationMapNodes(lang = currentLang) {
  return [
    {
      id: "project",
      cat: "subject",
      r: 30,
      label: tr(lang, { en: "2021 production engagement", ja: "2021年制作案件", es: "Encargo de producción 2021", de: "Produktionsauftrag 2021", fr: "Engagement de production 2021", sk: "Produkčné zadanie 2021" }),
      role: tr(lang, { en: "Library-music production work begun in 2021.", ja: "2021年に開始されたライブラリ音楽制作作業。", es: "Trabajo de producción de música de librería iniciado en 2021.", de: "2021 begonnene Library-Music-Produktionsarbeit.", fr: "Travail de production de musique de bibliothèque commencé en 2021.", sk: "Produkčná práca library music začatá v roku 2021." }),
      source: tr(lang, { en: "Reviewed 2021 correspondence", ja: "確認済み2021年通信", es: "Correspondencia revisada de 2021", de: "Geprüfte Korrespondenz 2021", fr: "Correspondance 2021 examinée", sk: "Skontrolovaná korešpondencia z roku 2021" }),
      q: tr(lang, { en: "Work scope, creator coordination and direction are described in dated correspondence; no signed written contract was located.", ja: "業務範囲、作家調整、ディレクションは日付付き通信に記録されていますが、署名済み書面契約は確認されていません。", es: "El alcance, la coordinación de creadores y la dirección figuran en correspondencia fechada; no se localizó contrato escrito firmado.", de: "Umfang, Urheberkoordination und Direction sind in datierter Korrespondenz beschrieben; ein unterschriebener schriftlicher Vertrag wurde nicht gefunden.", fr: "Le périmètre, la coordination des créateurs et la direction figurent dans une correspondance datée ; aucun contrat écrit signé n'a été localisé.", sk: "Rozsah práce, koordinácia tvorcov a vedenie sú opísané v datovanej korešpondencii; podpísaná písomná zmluva sa nenašla." }),
      href: urlFor(lang)
    },
    {
      id: "nichion",
      cat: "org",
      r: 23,
      label: companyLabel("nichion", lang),
      role: tr(lang, { en: "Music publisher; commissioning and rights-side context.", ja: "音楽出版社。発注・権利処理側の背景。", es: "Editorial musical; contexto del lado de encargo y derechos.", de: "Musikverlag; Kontext der Beauftragung und Rechte.", fr: "Éditeur musical ; contexte côté commande et droits.", sk: "Hudobné vydavateľstvo; kontext zadania a práv." }),
      source: tr(lang, { en: "Public company site and reviewed correspondence", ja: "公式会社情報及び確認済み通信", es: "Sitio oficial y correspondencia revisada", de: "Öffentliche Unternehmensseite und geprüfte Korrespondenz", fr: "Site officiel et correspondance examinée", sk: "Verejná firemná stránka a skontrolovaná korešpondencia" }),
      q: tr(lang, { en: "Referenced as a public subject organisation. Context only unless supported by record-specific evidence.", ja: "公開上の対象組織として表示します。本件固有証拠に支えられない限り背景情報です。", es: "Se muestra como organización pública objeto del registro. Es contexto salvo respaldo específico del expediente.", de: "Als öffentlich benannte Gegenstandsorganisation aufgeführt. Kontext, sofern nicht durch fallspezifische Belege gestützt.", fr: "Affichée comme organisation publiquement concernée. Contexte sauf preuve propre au dossier.", sk: "Uvedená ako verejne uvedená predmetná organizácia. Ide o kontext, ak nie je podložená dôkazmi záznamu." }),
      href: urlFor(lang)
    },
    {
      id: "valse",
      cat: "org",
      r: 23,
      label: companyLabel("valse", lang),
      role: tr(lang, { en: "Broadcast audio-production company; introduction and coordination context.", ja: "放送音響制作会社。紹介・調整の背景。", es: "Empresa de producción de audio para emisión; contexto de introducción y coordinación.", de: "Broadcast-Audioproduktionsunternehmen; Kontext von Einführung und Koordination.", fr: "Société de production audio pour diffusion ; contexte d'introduction et de coordination.", sk: "Spoločnosť pre broadcast audio produkciu; kontext predstavenia a koordinácie." }),
      source: tr(lang, { en: "Public company site and reviewed correspondence", ja: "公式会社情報及び確認済み通信", es: "Sitio oficial y correspondencia revisada", de: "Öffentliche Unternehmensseite und geprüfte Korrespondenz", fr: "Site officiel et correspondance examinée", sk: "Verejná firemná stránka a skontrolovaná korešpondencia" }),
      q: tr(lang, { en: "The official company profile identifies VALSE Inc. The public label here follows that company profile.", ja: "公式会社概要には VALSE Inc. 株式会社ヴァルス と記載されています。本記録の主表示は株式会社ヴァルスです。", es: "El perfil oficial identifica VALSE Inc. La etiqueta pública aquí sigue ese perfil de empresa.", de: "Das offizielle Unternehmensprofil identifiziert VALSE Inc. Die öffentliche Bezeichnung hier folgt diesem Profil.", fr: "Le profil officiel de l'entreprise identifie VALSE Inc. L'intitulé public ici suit ce profil.", sk: "Oficiálny firemný profil identifikuje VALSE Inc. Verejné označenie tu nadväzuje na tento profil." }),
      href: urlFor(lang)
    },
    {
      id: "reviewing",
      cat: "reporting",
      r: 21,
      label: tr(lang, { en: "Reviewing party", ja: "確認側", es: "Parte revisora", de: "Prüfende Seite", fr: "Partie examinatrice", sk: "Kontrolujúca strana" }),
      role: tr(lang, { en: "Independent production / coordination side. Identity withheld.", ja: "独立した制作・調整側。識別情報は非公開。", es: "Lado independiente de producción / coordinación. Identidad omitida.", de: "Unabhängige Produktions- / Koordinationsseite. Identität zurückgehalten.", fr: "Côté production / coordination indépendant. Identité retenue.", sk: "Nezávislá produkčná / koordinačná strana. Identita zadržaná." }),
      source: tr(lang, { en: "Reviewed correspondence", ja: "確認済み通信", es: "Correspondencia revisada", de: "Geprüfte Korrespondenz", fr: "Correspondance examinée", sk: "Skontrolovaná korešpondencia" }),
      q: tr(lang, { en: "Reporting-side identity, label name, artist identity, private email and location are withheld.", ja: "申告側の氏名、レーベル名、アーティスト名義、非公開メール、所在地は掲載しません。", es: "Se omiten identidad, sello, nombre artístico, correo privado y ubicación de la parte informante.", de: "Identität, Labelname, Künstlername, private E-Mail und Standort der meldenden Seite werden zurückgehalten.", fr: "L'identité, le label, le nom artistique, l'e-mail privé et la localisation de la partie déclarante sont retenus.", sk: "Identita, label, umelecké meno, súkromný e-mail a lokalita oznamujúcej strany sú zadržané." }),
      href: urlFor(lang)
    },
    {
      id: "nichionContacts",
      cat: "role",
      r: 19,
      label: tr(lang, { en: "株式会社日音 contacts (role)", ja: "株式会社日音側連絡者(役割)", es: "Contactos de 株式会社日音 (rol)", de: "株式会社日音-Kontakte (Rolle)", fr: "Contacts 株式会社日音 (rôle)", sk: "Kontakty 株式会社日音 (rola)" }),
      role: tr(lang, { en: "Coordination, contract and production-side communications by role.", ja: "調整、契約、制作側連絡を役割で表示。", es: "Comunicaciones de coordinación, contrato y producción por rol.", de: "Koordinations-, Vertrags- und Produktionskommunikation nach Rolle.", fr: "Communications de coordination, contrat et production par rôle.", sk: "Koordinačná, zmluvná a produkčná komunikácia podľa roly." }),
      source: tr(lang, { en: "Reviewed correspondence", ja: "確認済み通信", es: "Correspondencia revisada", de: "Geprüfte Korrespondenz", fr: "Correspondance examinée", sk: "Skontrolovaná korešpondencia" }),
      q: tr(lang, { en: "Individual communications are represented by organisational role in the map.", ja: "個別の通信は、このマップでは組織上の役割として表示します。", es: "Las comunicaciones individuales se representan por rol organizativo.", de: "Einzelkommunikation wird in der Karte als organisatorische Rolle dargestellt.", fr: "Les communications individuelles sont représentées par rôle organisationnel.", sk: "Jednotlivá komunikácia je na mape zobrazená ako organizačná rola." }),
      href: urlFor(lang, "commissioning-chain")
    },
    {
      id: "valseRep",
      cat: "role",
      r: 19,
      label: tr(lang, { en: "株式会社ヴァルス representative (role)", ja: "株式会社ヴァルス側担当者(役割)", es: "Representante de 株式会社ヴァルス (rol)", de: "Vertretung von 株式会社ヴァルス (Rolle)", fr: "Représentant de 株式会社ヴァルス (rôle)", sk: "Zástupca 株式会社ヴァルス (rola)" }),
      role: tr(lang, { en: "Introduction and project-side communication role.", ja: "紹介及び企画側連絡の役割。", es: "Rol de introducción y comunicación del proyecto.", de: "Rolle für Einführung und Projektkommunikation.", fr: "Rôle d'introduction et de communication de projet.", sk: "Rola predstavenia a projektovej komunikácie." }),
      source: tr(lang, { en: "Reviewed correspondence", ja: "確認済み通信", es: "Correspondencia revisada", de: "Geprüfte Korrespondenz", fr: "Correspondance examinée", sk: "Skontrolovaná korešpondencia" }),
      q: tr(lang, { en: "Shown as role context; the organisation is identified as 株式会社ヴァルス.", ja: "役割上の背景として表示します。組織名は株式会社ヴァルスとして表示します。", es: "Se muestra como contexto de rol; la organización se identifica como 株式会社ヴァルス.", de: "Als Rollenkontext dargestellt; die Organisation wird als 株式会社ヴァルス bezeichnet.", fr: "Affiché comme contexte de rôle ; l'organisation est identifiée comme 株式会社ヴァルス.", sk: "Zobrazené ako kontext roly; organizácia je označená ako 株式会社ヴァルス." }),
      href: urlFor(lang, "commissioning-chain")
    },
    {
      id: "emails",
      cat: "doc",
      r: 20,
      label: tr(lang, { en: "2021 correspondence", ja: "2021年通信記録", es: "Correspondencia 2021", de: "Korrespondenz 2021", fr: "Correspondance 2021", sk: "Korešpondencia 2021" }),
      role: tr(lang, { en: "Primary record of scope, requests and negotiation sequence.", ja: "範囲、依頼、交渉経過を示す主要記録。", es: "Registro principal de alcance, solicitudes y secuencia de negociación.", de: "Hauptnachweis für Umfang, Anfragen und Verhandlungsfolge.", fr: "Preuve principale du périmètre, des demandes et de la séquence de négociation.", sk: "Hlavný záznam rozsahu, žiadostí a priebehu rokovaní." }),
      source: tr(lang, { en: "Reviewed emails / PDFs", ja: "確認済みメール / PDF", es: "Correos / PDF revisados", de: "Geprüfte E-Mails / PDFs", fr: "E-mails / PDF examinés", sk: "Skontrolované e-maily / PDF" }),
      q: tr(lang, { en: "Raw correspondence, private addresses and message metadata are not published.", ja: "通信原文、非公開アドレス、メッセージメタデータは公開しません。", es: "No se publican correspondencia bruta, direcciones privadas ni metadatos.", de: "Rohkorrespondenz, private Adressen und Metadaten werden nicht veröffentlicht.", fr: "La correspondance brute, les adresses privées et les métadonnées ne sont pas publiées.", sk: "Surová korešpondencia, súkromné adresy a metadáta správ sa nezverejňujú." }),
      href: urlFor(lang, "evidence")
    },
    {
      id: "contract",
      cat: "open",
      r: 19,
      label: tr(lang, { en: "Written-contract formation", ja: "書面契約の成立", es: "Formación de contrato escrito", de: "Schriftlicher Vertragsschluss", fr: "Formation du contrat écrit", sk: "Vznik písomnej zmluvy" }),
      role: tr(lang, { en: "Open question.", ja: "未解決論点。", es: "Pregunta abierta.", de: "Offene Frage.", fr: "Question ouverte.", sk: "Otázka otvorená." }),
      source: tr(lang, { en: "Reviewed 2021 correspondence", ja: "確認済み2021年通信", es: "Correspondencia revisada de 2021", de: "Geprüfte Korrespondenz 2021", fr: "Correspondance 2021 examinée", sk: "Skontrolovaná korešpondencia z roku 2021" }),
      q: tr(lang, { en: "No signed final written order or commissioning agreement was located in the reviewed corpus.", ja: "確認済み資料内では、署名済みの最終発注書又は発注契約は確認されていません。", es: "No se localizó orden final firmada ni acuerdo de encargo en el corpus revisado.", de: "Im geprüften Bestand wurde keine unterzeichnete finale Bestellung oder Beauftragungsvereinbarung gefunden.", fr: "Aucun bon de commande final signé ni accord de commande n'a été localisé dans le corpus examiné.", sk: "V skontrolovanom súbore sa nenašla podpísaná finálna objednávka ani dohoda o zadaní." }),
      href: urlFor(lang, "work-before-terms")
    },
    {
      id: "payment",
      cat: "open",
      r: 20,
      label: tr(lang, { en: "Compensation confirmation", ja: "報酬確認", es: "Confirmación de compensación", de: "Vergütungsbestätigung", fr: "Confirmation de rémunération", sk: "Potvrdenie odmeny" }),
      role: tr(lang, { en: "Open question.", ja: "未解決論点。", es: "Pregunta abierta.", de: "Offene Frage.", fr: "Question ouverte.", sk: "Otázka otvorená." }),
      source: tr(lang, { en: "Reviewed 2021 correspondence", ja: "確認済み2021年通信", es: "Correspondencia revisada de 2021", de: "Geprüfte Korrespondenz 2021", fr: "Correspondance 2021 examinée", sk: "Skontrolovaná korešpondencia z roku 2021" }),
      q: tr(lang, { en: "Compensation discussions are documented; final payment resolution is not established in the public record.", ja: "報酬協議は記録されていますが、最終的な支払解決は公開記録上では確定していません。", es: "Las conversaciones de compensación están documentadas; la resolución final de pago no queda establecida en el registro público.", de: "Vergütungsabsprachen sind dokumentiert; die finale Zahlungsregelung ist im öffentlichen Protokoll nicht festgestellt.", fr: "Les discussions de rémunération sont documentées ; le règlement final du paiement n'est pas établi dans le dossier public.", sk: "Diskusie o odmene sú zdokumentované; konečné vyriešenie platby nie je vo verejnom zázname potvrdené." }),
      href: urlFor(lang, "compensation-and-rights")
    },
    {
      id: "work",
      cat: "open",
      r: 19,
      label: tr(lang, { en: "Work recognition / deliverables", ja: "作業認識 / 成果物", es: "Reconocimiento del trabajo / entregables", de: "Anerkennung der Arbeit / Liefergegenstände", fr: "Reconnaissance du travail / livrables", sk: "Uznanie práce / výstupy" }),
      role: tr(lang, { en: "Open question.", ja: "未解決論点。", es: "Pregunta abierta.", de: "Offene Frage.", fr: "Question ouverte.", sk: "Otázka otvorená." }),
      source: tr(lang, { en: "Reviewed correspondence", ja: "確認済み通信", es: "Correspondencia revisada", de: "Geprüfte Korrespondenz", fr: "Correspondance examinée", sk: "Skontrolovaná korešpondencia" }),
      q: tr(lang, { en: "Coordination, direction and demo-related work are described; recognition and settlement remain unresolved in the reviewed public record.", ja: "調整、ディレクション、デモ関連作業は記録されていますが、その認識及び精算は確認済み公開記録上未解決です。", es: "Se describen coordinación, dirección y trabajo relacionado con demos; reconocimiento y liquidación siguen abiertos.", de: "Koordination, Direction und demo-bezogene Arbeit sind beschrieben; Anerkennung und Abrechnung bleiben offen.", fr: "Coordination, direction et travail lié aux maquettes sont décrits ; reconnaissance et règlement restent ouverts.", sk: "Koordinácia, vedenie a práca s demami sú opísané; uznanie a vyrovnanie zostávajú otvorené." }),
      href: urlFor(lang, "work-before-terms")
    },
    {
      id: "rights",
      cat: "ctx",
      r: 18,
      label: tr(lang, { en: "Rights / licensing context", ja: "権利 / ライセンス背景", es: "Contexto de derechos / licencias", de: "Rechte- / Lizenzkontext", fr: "Contexte droits / licences", sk: "Kontext práv / licencií" }),
      role: tr(lang, { en: "Context.", ja: "背景。", es: "Contexto.", de: "Kontext.", fr: "Contexte.", sk: "Kontext." }),
      source: tr(lang, { en: "Public industry practice and correspondence", ja: "業界慣行及び通信", es: "Práctica del sector y correspondencia", de: "Branchenpraxis und Korrespondenz", fr: "Pratique sectorielle et correspondance", sk: "Odvetvová prax a korešpondencia" }),
      q: tr(lang, { en: "Master/copyright handling and writer agreements are recorded as context, not as a finding of wrongdoing.", ja: "原盤・著作権処理及び作家契約は背景として記録し、不正行為の認定ではありません。", es: "Gestión de máster/derechos y acuerdos con autores se registran como contexto, no como hallazgo de irregularidad.", de: "Master-/Urheberrechtsbehandlung und Autorenvereinbarungen werden als Kontext festgehalten, nicht als Fehlverhalten.", fr: "Gestion master/droits et accords auteurs sont enregistrés comme contexte, non comme constat d'irrégularité.", sk: "Správa master/autorských práv a dohody s autormi sú uvedené ako kontext, nie ako zistenie protiprávnosti." }),
      href: urlFor(lang, "compensation-and-rights")
    },
    {
      id: "tbs",
      cat: "ctx",
      r: 19,
      label: tr(lang, { en: "TBS Holdings context", ja: "TBSホールディングス背景", es: "Contexto de TBS Holdings", de: "Kontext TBS Holdings", fr: "Contexte TBS Holdings", sk: "Kontext TBS Holdings" }),
      role: tr(lang, { en: "Public corporate-affiliation context.", ja: "公開上の企業関係背景。", es: "Contexto público de afiliación corporativa.", de: "Öffentlicher Unternehmenszugehörigkeitskontext.", fr: "Contexte public d'affiliation d'entreprise.", sk: "Verejný kontext firemnej príslušnosti." }),
      source: tr(lang, { en: "Public corporate records", ja: "公開会社情報", es: "Registros corporativos públicos", de: "Öffentliche Unternehmensangaben", fr: "Documents d'entreprise publics", sk: "Verejné firemné záznamy" }),
      q: tr(lang, { en: "Recorded as corporate context only; no knowledge, involvement, control or responsibility is asserted.", ja: "企業背景としてのみ記録し、認識、関与、支配又は責任を主張しません。", es: "Registrado solo como contexto corporativo; no se afirma conocimiento, participación, control ni responsabilidad.", de: "Nur als Unternehmenskontext festgehalten; Kenntnis, Beteiligung, Kontrolle oder Verantwortung werden nicht behauptet.", fr: "Enregistré uniquement comme contexte d'entreprise ; aucune connaissance, implication, maîtrise ou responsabilité n'est affirmée.", sk: "Zaznamenané iba ako firemný kontext; netvrdí sa vedomosť, účasť, kontrola ani zodpovednosť." }),
      href: urlFor(lang, "network")
    },
    {
      id: "broadcast",
      cat: "ctx",
      r: 18,
      label: tr(lang, { en: "Broadcast-audio work context", ja: "放送音響業務背景", es: "Contexto de audio para emisión", de: "Broadcast-Audiokontext", fr: "Contexte audio de diffusion", sk: "Kontext broadcast audio práce" }),
      role: tr(lang, { en: "General business context for 株式会社ヴァルス.", ja: "株式会社ヴァルスの一般的な事業背景。", es: "Contexto general de negocio de 株式会社ヴァルス.", de: "Allgemeiner Geschäftskontext von 株式会社ヴァルス.", fr: "Contexte général d'activité de 株式会社ヴァルス.", sk: "Všeobecný obchodný kontext 株式会社ヴァルス." }),
      source: tr(lang, { en: "Public company profile", ja: "公式会社概要", es: "Perfil oficial de empresa", de: "Öffentliches Unternehmensprofil", fr: "Profil officiel de l'entreprise", sk: "Verejný firemný profil" }),
      q: tr(lang, { en: "Recorded as public business context only; no broadcaster involvement is asserted.", ja: "公開された事業背景としてのみ記録し、放送局の関与は主張しません。", es: "Registrado solo como contexto público de negocio; no se afirma participación de una emisora.", de: "Nur als öffentlicher Geschäftskontext festgehalten; eine Beteiligung eines Senders wird nicht behauptet.", fr: "Enregistré uniquement comme contexte d'activité public ; aucune implication de diffuseur n'est affirmée.", sk: "Zaznamenané iba ako verejný obchodný kontext; netvrdí sa účasť vysielateľa." }),
      href: urlFor(lang, "network")
    }
  ];
}

function VerificationMap(lang = currentLang) {
  const text = verificationMapCopy(lang);
  const nodes = verificationMapNodes(lang);
  const edgeLabel = {
    introduced: tr(lang, { en: "introduced", ja: "紹介", es: "introducción", de: "Einführung", fr: "introduction", sk: "predstavenie" }),
    engagement: tr(lang, { en: "engagement", ja: "関与", es: "encargo", de: "Auftrag", fr: "engagement", sk: "zadanie" }),
    representative: tr(lang, { en: "representative", ja: "担当", es: "representante", de: "Vertretung", fr: "représentant", sk: "zástupca" }),
    staff: tr(lang, { en: "staff", ja: "担当者", es: "personal", de: "Personal", fr: "personnel", sk: "pracovníci" }),
    commissioning: tr(lang, { en: "commissioning", ja: "発注", es: "encargo", de: "Beauftragung", fr: "commande", sk: "zadanie" }),
    production: tr(lang, { en: "production", ja: "制作", es: "producción", de: "Produktion", fr: "production", sk: "produkcia" }),
    evidence: tr(lang, { en: "evidence", ja: "証拠", es: "prueba", de: "Beleg", fr: "preuve", sk: "dôkaz" }),
    scope: tr(lang, { en: "scope", ja: "範囲", es: "alcance", de: "Umfang", fr: "périmètre", sk: "rozsah" }),
    offer: tr(lang, { en: "offer", ja: "提示", es: "oferta", de: "Angebot", fr: "offre", sk: "ponuka" }),
    deliverables: tr(lang, { en: "deliverables", ja: "成果物", es: "entregables", de: "Liefergegenstände", fr: "livrables", sk: "výstupy" }),
    licensing: tr(lang, { en: "licensing", ja: "権利処理", es: "licencias", de: "Lizenzierung", fr: "licences", sk: "licencovanie" }),
    parentGroup: tr(lang, { en: "parent group", ja: "親会社背景", es: "grupo matriz", de: "Muttergruppe", fr: "groupe parent", sk: "materská skupina" }),
    broadcastWork: tr(lang, { en: "broadcast work", ja: "放送音響業務", es: "trabajo de emisión", de: "Broadcast-Arbeit", fr: "travail de diffusion", sk: "broadcast práca" })
  };
  const edges = [
    ["valse", "reviewing", edgeLabel.introduced, "doc"],
    ["valse", "nichion", edgeLabel.introduced, "doc"],
    ["reviewing", "nichion", edgeLabel.engagement, "doc"],
    ["valse", "valseRep", edgeLabel.representative, "ctx"],
    ["nichion", "nichionContacts", edgeLabel.staff, "ctx"],
    ["project", "nichion", edgeLabel.commissioning, "doc"],
    ["project", "reviewing", edgeLabel.production, "doc"],
    ["project", "emails", edgeLabel.evidence, "doc"],
    ["emails", "contract", edgeLabel.scope, "open"],
    ["emails", "payment", edgeLabel.offer, "open"],
    ["emails", "work", edgeLabel.deliverables, "open"],
    ["nichion", "rights", edgeLabel.licensing, "ctx"],
    ["nichion", "tbs", edgeLabel.parentGroup, "ctx"],
    ["valse", "broadcast", edgeLabel.broadcastWork, "ctx"]
  ];
  return `
    <div class="verification-map">
      <p class="verification-lead">${escapeHtml(text.lead)}</p>
      <div class="verification-note-bar">
        ${text.chips.map((chip) => `<span>${escapeHtml(chip)}</span>`).join("")}
      </div>
      <div class="verification-panel">
        <div class="verification-top">
          <p>${escapeHtml(text.kicker)}</p>
          <strong>${escapeHtml(text.deck)}</strong>
        </div>
        <canvas data-verification-canvas role="img" aria-label="${escapeHtml(text.title)}"></canvas>
        <button class="verification-reset" type="button">${escapeHtml(text.reset)}</button>
        <div class="verification-hint">${escapeHtml(text.hint)}</div>
        <aside class="verification-info" aria-live="polite"></aside>
        <div class="verification-legend" aria-label="${escapeHtml(text.legendTitle)}">
          <p>${escapeHtml(text.legendTitle)}</p>
          <div>
            <span><i style="border-color:#35d07f"></i>${escapeHtml(text.legend[0])}</span>
            <span><i style="border-color:#e0b53c"></i>${escapeHtml(text.legend[1])}</span>
            <span><i style="border-color:#e0563f"></i>${escapeHtml(text.legend[2])}</span>
            <span><i style="border-color:#5d6f64;border-top-style:dashed"></i>${escapeHtml(text.legend[3])}</span>
          </div>
        </div>
      </div>
      <p class="verification-privacy">${escapeHtml(text.privacy)}</p>
      <div class="verification-node-list">
        <h3>${escapeHtml(text.nodeListTitle)}</h3>
        <div class="verification-nodes" data-verification-list></div>
      </div>
    </div>
    <script>
    (() => {
      const root = document.currentScript.previousElementSibling;
      if (!root || !root.classList.contains("verification-map")) return;
      const C = root.querySelector("[data-verification-canvas]");
      const X = C && C.getContext("2d");
      const panel = root.querySelector(".verification-panel");
      const info = root.querySelector(".verification-info");
      const hintEl = root.querySelector(".verification-hint");
      const reset = root.querySelector(".verification-reset");
      const listRoot = root.querySelector("[data-verification-list]");
      if (!C || !X || !panel || !info || !listRoot) return;
      const TXT = ${jsonForScript(text)};
      const COL = { doc: "#35d07f", open: "#e0b53c", gap: "#e0563f", ctx: "#5d6f64" };
      const CATCOL = { subject: "#35d07f", org: "#4d9bff", role: "#9aa8a0", doc: "#35d07f", open: "#e0b53c", ctx: "#5d6f64", reporting: "#5d6f64" };
      const N = ${jsonForScript(nodes)};
      const E = ${jsonForScript(edges)};
      const byId = {};
      N.forEach((n) => { byId[n.id] = n; n.x = 0; n.y = 0; n.vx = 0; n.vy = 0; n.scale = 1; n.sv = 0; });
      const adj = {};
      N.forEach((n) => { adj[n.id] = []; });
      E.forEach((e) => { adj[e[0]].push(e[1]); adj[e[1]].push(e[0]); });
      let HW = 760, HH = 620, DPR = 1, t = 0, hover = null, mouse = null, drag = null;
      const R = 150;
      function h(value) {
        return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
      }
      function size() {
        DPR = Math.min(2, devicePixelRatio || 1);
        HW = panel.clientWidth;
        HH = panel.clientHeight;
        C.width = Math.round(HW * DPR);
        C.height = Math.round(HH * DPR);
        C.style.width = HW + "px";
        C.style.height = HH + "px";
      }
      function seed() {
        const cx = HW / 2;
        const cy = HH / 2 + 8;
        const rr = Math.min(HW, HH) * 0.33;
        N.forEach((n, i) => {
          if (n.cat === "subject") {
            n.x = cx;
            n.y = cy;
          } else {
            const a = (i / N.length) * Math.PI * 2;
            n.x = cx + Math.cos(a) * rr + (Math.random() - 0.5) * 26;
            n.y = cy + Math.sin(a) * rr + (Math.random() - 0.5) * 26;
          }
          n.vx = (Math.random() - 0.5) * 0.3;
          n.vy = (Math.random() - 0.5) * 0.3;
        });
      }
      function tick() {
        for (let i = 0; i < N.length; i += 1) {
          const a = N[i];
          for (let j = i + 1; j < N.length; j += 1) {
            const b = N[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d2 = dx * dx + dy * dy || 1;
            const d = Math.sqrt(d2);
            const rep = Math.min(2800 / d2, 1.6);
            const ux = dx / d;
            const uy = dy / d;
            a.vx += ux * rep;
            a.vy += uy * rep;
            b.vx -= ux * rep;
            b.vy -= uy * rep;
          }
          a.vx += (HW / 2 - a.x) * 0.0013;
          a.vy += (HH / 2 + 8 - a.y) * 0.0013;
        }
        E.forEach((e) => {
          const a = byId[e[0]];
          const b = byId[e[1]];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          const target = Math.min(HW, HH) * 0.24;
          const f = (d - target) * 0.003;
          const ux = dx / d;
          const uy = dy / d;
          a.vx += ux * f;
          a.vy += uy * f;
          b.vx -= ux * f;
          b.vy -= uy * f;
        });
        N.forEach((n) => {
          if (n !== drag) {
            n.vx *= 0.86;
            n.vy *= 0.86;
            const mv = 2.4;
            n.vx = Math.max(-mv, Math.min(mv, n.vx));
            n.vy = Math.max(-mv, Math.min(mv, n.vy));
            n.x += n.vx;
            n.y += n.vy;
            n.x = Math.max(80, Math.min(HW - 80, n.x));
            n.y = Math.max(92, Math.min(HH - 100, n.y));
          }
          let tg = 1;
          if (mouse) {
            const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
            if (d < R) tg = 1 + (1 - d / R) * 0.7;
          }
          n.sv += (tg - n.scale) * 0.22;
          n.sv *= 0.58;
          n.scale += n.sv;
        });
      }
      function rrect(x, y, w, h, r) {
        X.beginPath();
        X.moveTo(x + r, y);
        X.arcTo(x + w, y, x + w, y + h, r);
        X.arcTo(x + w, y + h, x, y + h, r);
        X.arcTo(x, y + h, x, y, r);
        X.arcTo(x, y, x + w, y, r);
        X.closePath();
      }
      function chip(text, cx, cy, bold, alpha) {
        X.font = (bold ? "700 11px " : "10px ") + "system-ui,-apple-system,sans-serif";
        X.textAlign = "center";
        X.textBaseline = "middle";
        const w = X.measureText(text).width;
        const pad = 7;
        X.globalAlpha = alpha;
        X.fillStyle = "rgba(7,11,9,.84)";
        rrect(cx - w / 2 - pad, cy - 9, w + pad * 2, 18, 7);
        X.fill();
        X.strokeStyle = "rgba(255,255,255,.06)";
        X.lineWidth = 1;
        X.stroke();
        X.fillStyle = "#e9f1ec";
        X.fillText(text, cx, cy + 1);
        X.globalAlpha = 1;
      }
      function draw() {
        t += 0.016;
        X.setTransform(DPR, 0, 0, DPR, 0, 0);
        X.clearRect(0, 0, HW, HH);
        E.forEach((e) => {
          const a = byId[e[0]];
          const b = byId[e[1]];
          const st = e[3];
          const lit = hover && (hover === e[0] || hover === e[1]);
          const dim = hover && !lit;
          const c = COL[st];
          const breath = 0.06 * Math.sin(t * 1.5 + e[0].length + e[1].length);
          X.save();
          X.globalAlpha = dim ? 0.1 : (lit ? 1 : 0.46 + breath);
          X.strokeStyle = c;
          X.lineWidth = lit ? 2.6 : 1.5;
          if (st === "ctx") X.setLineDash([5, 6]);
          X.shadowColor = c;
          X.shadowBlur = lit ? 16 : 5;
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2 - 18;
          X.beginPath();
          X.moveTo(a.x, a.y);
          X.quadraticCurveTo(mx, my, b.x, b.y);
          X.stroke();
          X.restore();
          const speed = st === "doc" ? 0.18 : (st === "open" ? 0.15 : 0.11);
          const p = (t * speed + (e[0].length + e[1].length) * 0.1) % 1;
          if (st !== "ctx" && !dim) {
            const px = (1 - p) * (1 - p) * a.x + 2 * (1 - p) * p * mx + p * p * b.x;
            const py = (1 - p) * (1 - p) * a.y + 2 * (1 - p) * p * my + p * p * b.y;
            X.globalAlpha = lit ? 0.85 : 0.4;
            X.fillStyle = c;
            X.shadowColor = c;
            X.shadowBlur = 9;
            X.beginPath();
            X.arc(px, py, lit ? 3 : 2.2, 0, 7);
            X.fill();
            X.shadowBlur = 0;
            X.globalAlpha = 1;
          }
        });
        if (hover) {
          E.forEach((e) => {
            if (e[0] !== hover && e[1] !== hover) return;
            const a = byId[e[0]];
            const b = byId[e[1]];
            chip(e[2], (a.x + b.x) / 2, (a.y + b.y) / 2 - 18, false, 1);
          });
        }
        N.forEach((n) => {
          const lit = hover && (hover === n.id || (adj[hover] || []).includes(n.id));
          const dim = hover && !lit;
          const c = CATCOL[n.cat];
          const rr = n.r * n.scale;
          X.globalAlpha = dim ? 0.18 : 1;
          const pr = n.cat === "subject" ? 6 + Math.sin(t * 1.6) * 2 : 0;
          X.beginPath();
          X.arc(n.x, n.y, rr + pr, 0, 7);
          X.fillStyle = n.cat === "reporting" ? "#0e1712" : c + "22";
          X.shadowColor = c;
          X.shadowBlur = (n.cat === "subject" ? 26 : (lit ? 18 : 8)) * n.scale;
          X.fill();
          X.shadowBlur = 0;
          X.beginPath();
          X.arc(n.x, n.y, rr, 0, 7);
          X.fillStyle = n.cat === "reporting" ? "#0e1712" : "#0b140f";
          X.strokeStyle = n.cat === "reporting" ? "#5d6f64" : c;
          X.lineWidth = n.cat === "subject" ? 3 : 2;
          if (n.cat === "reporting") X.setLineDash([3, 3]);
          X.fill();
          X.stroke();
          X.setLineDash([]);
          if (n.cat === "reporting") {
            X.fillStyle = "#5d6f64";
            X.fillRect(n.x - rr * 0.7, n.y - 3, rr * 1.4, 6);
          }
          X.globalAlpha = 1;
        });
        N.forEach((n) => {
          const lit = hover && (hover === n.id || (adj[hover] || []).includes(n.id));
          const a = hover ? (lit ? 1 : 0.25) : 1;
          chip(n.label, n.x, n.y + n.r * n.scale + 14, n.cat === "subject", a);
        });
      }
      function loop() {
        tick();
        draw();
        requestAnimationFrame(loop);
      }
      function hideInfo() {
        info.classList.remove("show");
      }
      function showInfo(n) {
        if (hintEl) hintEl.style.display = "none";
        const pc = CATCOL[n.cat] || "#7c8b95";
        info.innerHTML = '<button class="verification-close" type="button" aria-label="Close">x</button><span class="verification-pri" style="background:' + pc + '">' + h(TXT.categories[n.cat] || "Note") + '</span><h3>' + h(n.label) + '</h3><p class="verification-role">' + h(n.role) + '</p><div class="verification-field"><b>' + h(TXT.sourceType) + '</b><span>' + h(n.source) + '</span></div><div class="verification-field"><b>' + h(TXT.noteLabel) + '</b><span>' + h(n.q) + '</span></div><a class="verification-open" href="' + h(n.href) + '">' + h(TXT.openRelated) + '</a>';
        const close = info.querySelector(".verification-close");
        if (close) close.addEventListener("click", hideInfo);
        info.classList.add("show");
      }
      function nodeAt(mx, my) {
        for (let i = N.length - 1; i >= 0; i -= 1) {
          const n = N[i];
          if (Math.hypot(n.x - mx, n.y - my) <= n.r * n.scale + 5) return n;
        }
        return null;
      }
      function rel(e) {
        const r = C.getBoundingClientRect();
        return { x: e.clientX - r.left, y: e.clientY - r.top };
      }
      C.addEventListener("mousemove", (e) => {
        const m = rel(e);
        mouse = m;
        if (drag) {
          drag.x = m.x;
          drag.y = m.y;
          drag.vx = 0;
          drag.vy = 0;
          return;
        }
        const n = nodeAt(m.x, m.y);
        hover = n ? n.id : null;
        C.style.cursor = n ? "pointer" : "default";
      });
      C.addEventListener("mouseleave", () => { mouse = null; hover = null; });
      C.addEventListener("mousedown", (e) => { const m = rel(e); const n = nodeAt(m.x, m.y); if (n) drag = n; });
      addEventListener("mouseup", () => { drag = null; });
      C.addEventListener("click", (e) => { const m = rel(e); const n = nodeAt(m.x, m.y); if (n) showInfo(n); else hideInfo(); });
      C.addEventListener("touchstart", (e) => { const t0 = e.touches[0]; const m = rel(t0); mouse = m; const n = nodeAt(m.x, m.y); if (n) { drag = n; hover = n.id; showInfo(n); } }, { passive: true });
      C.addEventListener("touchmove", (e) => { const t0 = e.touches[0]; const m = rel(t0); mouse = m; if (drag) { drag.x = m.x; drag.y = m.y; drag.vx = 0; drag.vy = 0; } }, { passive: true });
      addEventListener("touchend", () => { drag = null; mouse = null; });
      function buildList() {
        listRoot.innerHTML = N.map((n) => {
          const pc = CATCOL[n.cat] || "#7c8b95";
          return '<details class="verification-node"><summary><span class="verification-node-name">' + h(n.label) + '</span><p class="verification-node-role" style="border-left:3px solid ' + pc + '">' + h(n.role) + '</p></summary><div class="verification-node-body"><div class="verification-field"><b>' + h(TXT.sourceType) + '</b><span>' + h(n.source) + '</span></div><div class="verification-field"><b>' + h(TXT.noteLabel) + '</b><span>' + h(n.q) + '</span></div><a class="verification-open" href="' + h(n.href) + '">' + h(TXT.openRelated) + '</a></div></details>';
        }).join("");
      }
      buildList();
      size();
      seed();
      loop();
      addEventListener("resize", () => { size(); seed(); });
      if (reset) reset.addEventListener("click", () => { seed(); });
    })();
    </script>
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

function HeroMedia(lang = currentLang, eager = false) {
  const alt = tr(lang, {
    en: "NICHION,INC. and VALSE Inc. public-safe 2021 music commissioning record hero image.",
    ja: "株式会社日音及び株式会社ヴァルスの2021年音楽制作発注記録を示す公開安全なヒーロー画像。",
    es: "Imagen principal pública y segura del registro de encargo musical 2021 de NICHION,INC. y VALSE Inc.",
    de: "Öffentlich sichere Hero-Grafik zum Musikauftragsprotokoll 2021 von NICHION,INC. und VALSE Inc.",
    fr: "Image principale publique et sûre du dossier de commande musicale 2021 de NICHION,INC. et VALSE Inc.",
    sk: "Verejne bezpečný hlavný obrázok záznamu o hudobnom zadaní 2021 spoločností NICHION,INC. a VALSE Inc."
  });
  return `<figure class="record-hero-media">
        <picture>
          <source media="(max-width: 720px)" srcset="${heroMobileImageWebp}" type="image/webp">
          <source media="(max-width: 720px)" srcset="${heroMobileImage}" type="image/jpeg">
          <source srcset="${heroImageWebp}" type="image/webp">
          <img src="${heroImage}" width="1600" height="900" alt="${escapeHtml(alt)}" loading="${eager ? "eager" : "lazy"}" decoding="async"${eager ? ' fetchpriority="high"' : ""}>
        </picture>
      </figure>`;
}

function pageHero(page, lang = currentLang, extra = "") {
  const title = local(page.title, lang);
  return `
    <header class="record-hero">
      ${HeroMedia(lang)}
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
  const heroTitle = heroDisplayTitles[lang] || heroDisplayTitles.en;

  const thesis = section(
    tr(lang, { en: "Record Thesis", ja: "中心命題", es: "Tesis del registro", de: "These des Protokolls", fr: "Thèse du dossier", sk: "Téza záznamu" }),
    `<div class="summary-stack">
      <p class="notice">${escapeHtml(explainerText("centralQuestion", lang))}</p>
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
    tr(lang, { en: "Public Subject Organisations", ja: "公開上の対象組織", es: "Organizaciones objeto de publicación", de: "Öffentlich benannte Gegenstandsorganisationen", fr: "Organisations publiquement concernées", sk: "Verejne uvedené predmetné organizácie" }),
    subjectEntityStrip(lang),
    { id: "subject-organisations", badge: "CONTEXT_ONLY" }
  );

  const counterpartyPeople = section(
    tr(lang, { en: "Counterparty People and Organisations", ja: "相手方の人物・組織", es: "Personas y organizaciones de la contraparte", de: "Gegenparteipersonen und Organisationen", fr: "Personnes et organisations de la contrepartie", sk: "Osoby a organizácie protistrany" }),
    CounterpartyPeople(lang),
    { id: "counterparty-people", badge: "DOCUMENTED" }
  );

  const answerSummary = section(
    tr(lang, { en: "Answer Summary", ja: "回答要約", es: "Resumen de respuesta", de: "Antwortzusammenfassung", fr: "Résumé de réponse", sk: "Súhrn odpovede" }),
    AnswerSummary(lang),
    { id: "answer-summary", badge: "DOCUMENTED" }
  );

  const searchIntent = section(
    tr(lang, { en: "Search Entry Points", ja: "検索入口", es: "Entradas de búsqueda", de: "Sucheinstiege", fr: "Points d'entrée de recherche", sk: "Vstupy pre vyhľadávanie" }),
    SearchIntentPanel(lang),
    { id: "search-entry-points", badge: "CONTEXT_ONLY" }
  );

  const verificationMap = `
    <section class="panel" id="relationship-map">
      ${HeroMedia(lang, true)}
      <div class="panel-head">
        <div>
          <p class="eyebrow">${escapeHtml(copy[lang].recordEyebrow)}</p>
          <h1 class="section-title">${escapeHtml(heroTitle)}</h1>
          <p class="muted">${escapeHtml(copy[lang].homeSubtitle)}</p>
        </div>
        <span class="badge documented">DOCUMENTED</span>
      </div>
      ${VerificationMap(lang)}
    </section>
  `;

  const examines = section(copy[lang].whatExamines, `<div class="grid">${findings.examines.map((item, index) => `
    <article class="card">
      ${EvidenceBadge(item.status, lang)}
      <h3>${escapeHtml(homeText("examines", lang, index, "title", item.title))}</h3>
      <p>${escapeHtml(homeText("examines", lang, index, "body", item.body))}</p>
    </article>
  `).join("")}</div>`, { id: "examines" });

  const summary = section(copy[lang].recordSummary, `<div class="summary-stack">${findings.recordSummary.map((item, index) => `
    <article class="summary-item">
      ${EvidenceBadge(item.status, lang)}
      <p>${escapeHtml(homeText("recordSummary", lang, index, null, item.text))}</p>
    </article>
  `).join("")}</div>`, { id: "summary" });

  const sequence = section(copy[lang].coreSequence, `<div class="sequence">${findings.coreSequence.map((item, index) => `
    <article class="step">
      ${EvidenceBadge(item.status, lang)}
      <strong>${String(index + 1).padStart(2, "0")} ${escapeHtml(homeText("coreSequence", lang, index, null, item.label))}</strong>
    </article>
  `).join("")}</div>`, { id: "sequence" });

  const keyFindings = section(copy[lang].keyFindings, `<div class="grid">${findings.keyFindings.map((item, index) => `
    <article class="finding-card">
      ${EvidenceBadge(item.status, lang)}
      <p>${escapeHtml(homeText("keyFindings", lang, index, null, item.text))}</p>
    </article>
  `).join("")}</div>`, { id: "findings" });

  const replyNotice = section(tr(lang, { en: "Right of Reply Entry Point", ja: "反論・訂正の入口", es: "Entrada para derecho de respuesta", de: "Einstieg für Erwiderung und Korrektur", fr: "Point d'entrée du droit de réponse", sk: "Vstup pre právo na odpoveď" }), RightOfReplyNotice(lang), { id: "right-of-reply-entry", badge: "DOCUMENTED" });
  const transactionStructure = section(tr(lang, { en: "Transaction Structure", ja: "取引構造", es: "Estructura de la transacción", de: "Transaktionsstruktur", fr: "Structure transactionnelle", sk: "Transakčná štruktúra" }), TransactionStructure(lang), { id: "transaction-structure", badge: "OPEN_QUESTION" });
  const questions = section(copy[lang].openQuestions, `<div class="grid two">${openQuestions.map((question, index) => OpenQuestionCard(homeText("openQuestions", lang, index, null, question), index, lang)).join("")}</div>`, { id: "open-questions" });
  const faq = section(
    tr(lang, { en: "Answer Engine FAQ", ja: "回答エンジン向けFAQ", es: "FAQ para motores de respuesta", de: "FAQ für Antwortmaschinen", fr: "FAQ pour moteurs de réponse", sk: "FAQ pre odpovedacie systémy" }),
    FaqPanel(lang),
    { id: "faq", badge: "DOCUMENTED" }
  );
  const navigation = section(copy[lang].detailPages, navCards(lang), { id: "pages" });

  return `<main class="main">${verificationMap}${subjectEntities}${counterpartyPeople}${replyNotice}${answerSummary}${thesis}${transactionStructure}${examines}${summary}${sequence}${keyFindings}${questions}${faq}${searchIntent}${navigation}${PrivacyNotice(lang)}</main>`;
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
      ${section(lang === "ja" ? "権限・責任マトリクス" : "Authority and Responsibility Matrix", AuthorityMatrix(lang), { id: "authority-matrix", badge: "OPEN_QUESTION" })}
      ${section(lang === "ja" ? "書面管理上の空白" : "Documentation Control Gaps", ControlGapTable(lang), { id: "control-gaps", badge: "OPEN_QUESTION" })}
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
      ${section(lang === "ja" ? "取引リスク構造" : "Transaction Risk Structure", TransactionStructure(lang), { id: "transaction-structure", badge: "OPEN_QUESTION" })}
      ${section(lang === "ja" ? "流れ" : "Sequence", WorkBeforeTermsFlow(lang), { id: "flow", badge: "DOCUMENTED" })}
      ${section(local(pageById["work-before-terms"].title, lang), workTable(lang), { id: "work-table", badge: "OPEN_QUESTION" })}
      ${section(lang === "ja" ? "管理上の未解決事項" : "Unresolved Control Points", ControlGapTable(lang), { id: "control-gaps", badge: "OPEN_QUESTION" })}
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
      ${section(lang === "ja" ? "公式公開情報による背景" : "Official Public-Source Context", NetworkHighlights(lang), { id: "official-context", badge: "CONTEXT_ONLY" })}
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
      ${section(lang === "ja" ? "証拠処理プロトコル" : "Evidence Handling Protocol", EvidenceProtocol(lang), { id: "protocol", badge: "DOCUMENTED" })}
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
      ${section(lang === "ja" ? "公開前チェック" : "Publication Checks", PublicationCheckCards(lang), { id: "publication-checks", badge: "DOCUMENTED" })}
      ${section(lang === "ja" ? "証拠分類" : "Evidence Classification", MethodologyNote(lang), { id: "classification" })}
      ${section(lang === "ja" ? "重要な限定" : "Material Limitation", `<div class="grid two">${SourceLimitationCard(lang)}<article class="card">${EvidenceBadge("DOCUMENTED", lang)}<h3>${lang === "ja" ? "引用と原本" : "Quotes and originals"}</h3><p>${escapeHtml(lang === "ja" ? "メール本文、件名全文、署名、ヘッダー及び添付ファイル名の原文は公開しません。" : "Email bodies, full subject lines, signatures, headers and original attachment names are not published.")}</p></article></div>`, { id: "limitation", badge: "OPEN_QUESTION" })}
      ${PrivacyNotice(lang)}
    </main>`;
}

function rightOfReplyPage(lang = currentLang) {
  const paragraphs = lang === "ja"
    ? [
        "株式会社日音、株式会社ヴァルス及び本記録で役割により特定された人物又は組織は、訂正、文脈資料又は正式な回答を提出できます。",
        "提出内容は保存され、確認されます。検証済みの訂正は透明性をもって反映します。争いのある解釈は、適切な場合、既存記録と並べて掲載することがあります。",
        "個人データ、無関係な第三者情報及び根拠のない主張は含めないでください。"
      ]
    : [
        "株式会社日音, 株式会社ヴァルス and any person or organisation identified by role in this record may submit corrections, contextual documents or a formal response.",
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

const globalLanguageOrder = ["en", "es", "de", "fr", "sk", "ja"];
const globalLanguageMeta = {
  en: { label: "EN", flag: "🇺🇸" },
  es: { label: "ES", flag: "🇪🇸" },
  de: { label: "DE", flag: "🇩🇪" },
  fr: { label: "FR", flag: "🇫🇷" },
  sk: { label: "SK", flag: "🇸🇰" },
  ja: { label: "JA", flag: "🇯🇵" }
};
const globalNavLabels = {
  en: { methodology: "Methodology", records: "Records", editorial: "Editorial Standard", redaction: "Redaction Policy", correction: "Correction" },
  es: { methodology: "Metodología", records: "Registros", editorial: "Estándar editorial", redaction: "Política de redacción", correction: "Corrección" },
  de: { methodology: "Methodik", records: "Aufzeichnungen", editorial: "Redaktioneller Standard", redaction: "Redaktionsrichtlinie", correction: "Korrektur" },
  fr: { methodology: "Méthodologie", records: "Dossiers", editorial: "Norme éditoriale", redaction: "Politique de rédaction", correction: "Correction" },
  sk: { methodology: "Metodika", records: "Záznamy", editorial: "Redakčný štandard", redaction: "Politika redakcie", correction: "Oprava" },
  ja: { methodology: "方法論", records: "記録", editorial: "編集基準", redaction: "匿名化方針", correction: "訂正" }
};

function localizedRootPath(lang, slug) {
  return lang === "en" ? `/${slug}/` : `/${lang}/${slug}/`;
}

function globalHeader(lang, page) {
  const nav = globalNavLabels[lang] || globalNavLabels.en;
  const languageLinks = globalLanguageOrder.map((code) => {
    const item = globalLanguageMeta[code];
    return `<a href="${urlFor(code, page.slug)}" hreflang="${code}" ${lang === code ? `aria-current="true"` : ""}><span class="global-flag">${item.flag}</span>${item.label}</a>`;
  }).join("");
  return [
    `  <header class="global-header">`,
    `    <a class="global-brand" href="/" aria-label="Factualist home">`,
    `      <svg class="global-logo-icon" viewBox="0 0 84 48" role="img" aria-label="Factualist">`,
    `        <circle cx="8" cy="30" r="7" fill="#16a34a"/>`,
    `        <rect x="24" y="10" width="10" height="30" rx="5" fill="#16a34a"/>`,
    `        <path d="M41 10h31c4 0 7 3 7 7s-3 7-7 7H55v5h13c4 0 7 3 7 7s-3 7-7 7H41V10z" fill="#16a34a"/>`,
    `      </svg>`,
    `      <span class="global-wordmark">FACTUALIST</span>`,
    `    </a>`,
    `    <div class="global-header-actions">`,
    `      <nav class="global-nav" aria-label="Primary navigation">`,
    `        <a href="${localizedRootPath(lang, "methodology")}">${escapeHtml(nav.methodology)}</a>`,
    `        <a href="${localizedRootPath(lang, "records")}">${escapeHtml(nav.records)}</a>`,
    `        <a href="${localizedRootPath(lang, "editorial-standard")}">${escapeHtml(nav.editorial)}</a>`,
    `        <a href="${localizedRootPath(lang, "redaction-policy")}">${escapeHtml(nav.redaction)}</a>`,
    `        <a href="${localizedRootPath(lang, "correction")}">${escapeHtml(nav.correction)}</a>`,
    `      </nav>`,
    `      <nav class="global-langbar" aria-label="Language">`,
    `        ${languageLinks}`,
    `      </nav>`,
    `    </div>`,
    `  </header>`
  ].join("\n");
}

function navHtml(page, lang) {
  return `
    <nav class="site-nav" aria-label="${escapeHtml(tr(lang, { en: "Record navigation", ja: "記録ナビゲーション", es: "Navegación del registro", de: "Protokollnavigation", fr: "Navigation du dossier", sk: "Navigácia záznamu" }))}">
      <a class="brand" href="/records/">Factualist</a>
      <div class="nav-links">
        ${pages.map((item) => `<a href="${urlFor(lang, item.slug)}" ${item.id === page.id ? `aria-current="page"` : ""}>${escapeHtml(local(item.nav, lang))}</a>`).join("")}
      </div>
      <div class="lang-links" aria-label="${escapeHtml(tr(lang, { en: "Language", ja: "言語", es: "Idioma", de: "Sprache", fr: "Langue", sk: "Jazyk" }))}">
        ${languages.map((language) => `<a href="${urlFor(language.code, page.slug)}" hreflang="${language.code}" ${lang === language.code ? `aria-current="true"` : ""}>${escapeHtml(language.label)}</a>`).join("")}
      </div>
    </nav>
  `;
}

function layout(page, lang, body) {
  const pageTitle = local(page.title, lang);
  const title = page.id === "index" ? pageTitle : `${pageTitle} | ${local(pageById.index.title, lang)}`;
  const canonical = absUrl(lang, page.slug);
  const baseSchema = {
    "@type": page.id === "index" ? ["Article", "Report"] : "WebPage",
    "@id": `${canonical}#${page.id}`,
    headline: title,
    name: title,
    url: canonical,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    datePublished,
    dateModified: lastmod,
    description: copy[lang].description,
    publisher: { "@type": "Organization", name: "Factualist", url: siteBase },
    about: schemaAbout(lang),
    mentions: subjectOrganizationNodes(lang),
    inLanguage: lang
  };
  const schema = page.id === "index"
    ? {
        "@context": "https://schema.org",
        "@graph": [
          baseSchema,
          {
            "@type": "FAQPage",
            "@id": `${canonical}#faq`,
            mainEntity: localizedFaqs(lang).map(([question, answer]) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer }
            }))
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${canonical}#breadcrumb`,
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Factualist", item: `${siteBase}/` },
              { "@type": "ListItem", position: 2, name: "Records", item: `${siteBase}/records/` },
              { "@type": "ListItem", position: 3, name: title, item: canonical }
            ]
          }
        ]
      }
    : { "@context": "https://schema.org", ...baseSchema };
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="index,follow">
  <title>${escapeHtml(title)} | Factualist</title>
  <meta name="description" content="${escapeHtml(copy[lang].description)}">
  <meta name="keywords" content="${escapeHtml(seoKeywords(lang))}">
  <link rel="canonical" href="${canonical}">
  ${languages.map((language) => `<link rel="alternate" hreflang="${language.code}" href="${absUrl(language.code, page.slug)}">`).join("\n  ")}
  <link rel="alternate" hreflang="x-default" href="${absUrl("en", page.slug)}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(copy[lang].description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${siteBase}${heroImage}">
  <meta property="og:image:secure_url" content="${siteBase}${heroImage}">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:alt" content="${escapeHtml(tr(lang, { en: "NICHION,INC. and VALSE Inc. public-safe 2021 music commissioning record hero image.", ja: "株式会社日音及び株式会社ヴァルスの2021年音楽制作発注記録を示す公開安全なヒーロー画像。", es: "Imagen principal pública y segura del registro de encargo musical 2021 de NICHION,INC. y VALSE Inc.", de: "Öffentlich sichere Hero-Grafik zum Musikauftragsprotokoll 2021 von NICHION,INC. und VALSE Inc.", fr: "Image principale publique et sûre du dossier de commande musicale 2021 de NICHION,INC. et VALSE Inc.", sk: "Verejne bezpečný hlavný obrázok záznamu o hudobnom zadaní 2021 spoločností NICHION,INC. a VALSE Inc." }))}">
  <meta property="og:image:width" content="1600">
  <meta property="og:image:height" content="900">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(copy[lang].description)}">
  <meta name="twitter:image" content="${siteBase}${heroImage}">
  <meta name="theme-color" content="#16a34a">
  <link rel="icon" href="/records/assets/favicon.svg" type="image/svg+xml">
  <script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>
  <link rel="stylesheet" href="${recordBase}/assets/css/main.css?v=${recordCssVersion}">
  <link rel="stylesheet" href="/records/assets/global-header.css?v=${globalHeaderCssVersion}">
</head>
<body>
${globalHeader(lang, page)}
  <div class="page">
    ${page.id === "index" ? "" : navHtml(page, lang)}
    ${body}
    <footer class="footer">
      <p>${escapeHtml(copy[lang].generatedFrom)}</p>
    </footer>
  </div>
</body>
</html>
`;
}

function sitemapEntry(url) {
  return `  <url>
    <loc>${escapeHtml(`${siteBase}${url}`)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
}

async function writeSitemap() {
  const otherPaths = [
    "/records/",
    "/records/music-commissioning-authority-2021/",
    "/records/ac55id-2025/",
    "/records/ac55id-2025/relationship-map/",
    "/records/epm-music-2026/",
    "/records/nichion-valse-2021/relationship-map/"
  ];
  const recordPaths = languageCodes.flatMap((lang) => pages.map((page) => urlFor(lang, page.slug)));
  const urls = [...otherPaths, ...recordPaths];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(sitemapEntry).join("\n")}
</urlset>
`;
  await fs.writeFile(path.join(repoRoot, "sitemap.xml"), xml, "utf8");
}

for (const lang of languageCodes) {
  currentLang = lang;
  for (const page of pages) {
    const file = outputPath(lang, page.slug);
    await fs.mkdir(path.dirname(file), { recursive: true });
    const body = renderers[page.id](lang);
    await fs.writeFile(file, localizedCompanyText(layout(page, lang, body), lang), "utf8");
  }
}

await writeSitemap();

console.log(`Generated ${pages.length * languageCodes.length} Nichion-VALSE pages.`);
