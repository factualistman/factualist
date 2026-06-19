# factualist.org — Evidence-based risk notes for music & fintech

This repository hosts the static site sources for **factualist.org**, a small,
evidence-driven public record hub.

Current public records live under `/records/`.

The goal is *not* to attack individuals, but to:

- Document what was promised vs. what was delivered.
- Provide a neutral-ish **timeline** and **evidence index**.
- Explain relevant **business / legal principles** (e.g. “free project”
  claims and reliance damages).
- Help third parties (artists, labels, shops, platforms) make their own
  decisions.

No new monetary claims or settlement proposals are made on this site.  
The focus is **disclosure + platform risk reporting**, not negotiation.

---

## Structure

Static files are organised roughly as:

- `/records` — public record pages and record-scoped assets.
  - `/records/nichion-valse-2021/` → Nichion / VALSE commissioning record.
  - `/records/ac55id-2025/` → AC55ID record and relationship map.
  - `/records/epm-music-2026/` → EPM Music monitoring record container.
- `/src/data` — public-safe structured data used to generate record pages.
- `/tools` — local generators and public-safety checks.

---

## Primary sources (AC55ID / Acid Nation)

The AC55ID record is built from the following source sets:

- **Evidence bundle (Dropbox)** — emails, PDFs, screenshots, memos  
  *(restricted share link, not mirrored here)*
- **Infrastructure logs (restricted)** — dated infrastructure snapshots
  retained privately and summarized only when public-safe.
- **Google Docs**
  - `ac55id_risk_report_index` — narrative index of all evidence
  - `Stripe_PayPal_Fraud_Report_FINAL_EN` — report already submitted to
    payment platforms

On factualist.org, external links are always provided so readers can verify
the raw material themselves.

---

## Privacy & scope

The site deliberately:

- Does **not** disclose the operator’s full legal name or country.
- Uses generic terms like *“small independent label in East Asia”*.
- Avoids giving legal or investment advice.
- Avoids labels like “fraudster” / “criminal” and instead sticks to:
  > “Based on the information we received from X, we have not found
  > records that confirm manufacturing or shipping.”

Monetary amounts mentioned in emails and reports (e.g. USD 5,000 or
70–90k ranges) are recorded **only as historical facts** about what was
requested at that time, not as new demands.

---

## Tech notes

- Deployment: static HTML + CSS through the configured production host.
- Data refresh:
  - Record-specific monitoring jobs should publish reviewed outputs under
    `/records/<record-id>/`.
  - EPM Music monitoring is represented under
    `/records/epm-music-2026/cron-job/`.
- Languages:
  - Primary content: **English**
  - Public Japanese pages are provided where the record requires them.

---

## Roadmap

- [ ] Add record-specific structured data for new records before publication.
- [ ] Keep raw correspondence, private identities and unreviewed attachments
      out of the public tree.
- [ ] Run public-safety checks before deployment.
