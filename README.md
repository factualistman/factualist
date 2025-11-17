# factualist.org — Evidence-based risk notes for music & fintech

This repository hosts the static site sources for **factualist.org**, a small,
evidence-driven “fact hub” operated by an independent label.

The first live case focuses on **AC55ID / “Acid Nation”** and their vinyl
pre-order campaign.

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

- `/docs` — Markdown / HTML sources for GitHub Pages.
  - `index.md` → site landing page
  - `ac55id-vinyl-facts.md` → AC55ID / Acid Nation facts & timeline
  - `evidence-index.md` → Evidence list for the AC55ID case
  - `principles.md` → Notes on “free project” claims & reliance damages
  - `for-artists.md` → Guidance for artists / labels
  - `for-platforms.md` → Signals for Stripe / PayPal / AWS / UPS / BBB / IC3
- `/data`
  - `/infra/ac55id/` → daily infrastructure snapshots
    (mirroring `ac55id-logs` from the Nipponeer server)
  - (future) other machine-readable inventories

---

## Primary sources (AC55ID / Acid Nation)

The AC55ID case is built from the following source sets:

- **Evidence bundle (Dropbox)** — emails, PDFs, screenshots, memos  
  *(restricted share link, not mirrored here)*
- **Infrastructure logs (Dropbox)** — `ac55id-logs/latest.log` and dated
  `infra_YYYYMMDDTHHMMSSZ.log` files from a Nipponeer server cron job.
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

- Deployment: GitHub Pages (static HTML + CSS, no framework required).
- Data refresh:
  - AC55ID infrastructure snapshots are pulled from `ac55id-logs` via
    Nipponeer’s cron job and converted into human-readable tables
    under `/docs/ac55id-vinyl-facts.md`.
- Languages:
  - Primary content: **English**
  - Selected sections (`principles`, `for-artists`, `for-platforms`) may
    include **Spanish** translations where useful.

---

## Roadmap

- [ ] Phase 1 — Internal index:
      timeline, evidence inventory, organisation matrix.
- [ ] Phase 2 — Public drafts:
      `/ac55id-vinyl-facts`, `/evidence-index`, `/principles`,
      `/for-artists`, `/for-platforms`.
- [ ] Phase 3 — Styling + publishing via GitHub Pages.
- [ ] Phase 4 — Optional additional cases (other labels, platforms, etc.).