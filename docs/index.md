---
title: factualist.org
---

# factualist.org

*A small, evidence-based fact hub operated by an independent label in East Asia.*

This site collects **timelines, evidence indexes, and neutral-ish notes** about
cases where there are serious questions around:

- What was promised vs. what was delivered.
- How pre-orders, manufacturing, and shipping were represented to buyers.
- How payment, hosting, and logistics platforms reacted (or did not react).

The first live case is:

> **AC55ID / “Acid Nation” — vinyl pre-orders and non-delivery concerns**

No new money claims or settlement proposals are made here.  
The purpose is to document facts and help **artists, labels, shops, and
platforms** run their own assessments.

---

## AC55ID / “Acid Nation” vinyl case

- **Facts & timeline**  
  → [`/ac55id-vinyl-facts`](./ac55id-vinyl-facts.md)

  This page covers:
  - A date-by-date timeline (emails, promises, explanations).
  - Operational signals:
    - UPS status stuck at “Label Created”.
    - Press Play Vinyl reporting “no order on file”.
    - Public sales pages later removed.
  - **Infrastructure footprint history**, based on daily logs (`ac55id-logs`),
    showing how `ac55id.com` and `acidnation.com` are wired:
    - DNS via Amazon Route53.
    - Redirects through an Application Load Balancer.
    - Frontend served through CloudFront with nginx.
    - POPs and IP ranges observed over time.

- **Evidence index**  
  → [`/evidence-index`](./evidence-index.md)

  A structured list of the underlying materials:
  - Emails
  - Exported PDFs and filings (BBB, IC3, Stripe, PayPal, UPS, AWS)
  - Screenshots (UPS tracking, dashboards, chats)
  - Infrastructure logs

  Each item is tagged by:
  - Date
  - Counterparty (AC55ID, Stripe, UPS, AWS, BBB, IC3, Press Play Vinyl)
  - File name / external link
  - Short summary

---

## Principles & context

Some parts of this case are not unique to one merchant.  
The following pages explain the more general ideas:

- **Principles**  
  → [`/principles`](./principles.md)

  Topics include:

  - Why a later claim that *“the project was free”* does not erase:
    - earlier representations about manufacturing and shipping,
    - reliance investments (artwork licences, mastering, motion reels, etc.),
    - reputational and operational harm.
  - The concept of **reliance damages** in simple language.
  - Why *“we didn’t actually take payment”* is not a magic eraser for
    misleading operational status, fake shipping labels, or long-running
    pre-order campaigns with no production behind them.

- **For artists & labels**  
  → [`/for-artists`](./for-artists.md)

  Written for artists and labels who might be:
  - Considering working with AC55ID / “Acid Nation”, or
  - Already in the middle of a project and trying to decide whether to stay.

  It focuses on:
  - What was actually delivered on the label side.
  - Where the risk appears to sit (manufacturing / shipping layer).
  - Practical questions to ask any vinyl “partner” before committing.

- **For platforms (Stripe / PayPal / AWS / UPS / BBB / IC3)**  
  → [`/for-platforms`](./for-platforms.md)

  This page summarises:
  - Signals relevant to merchant risk reviews.
  - Existing filings and reports already submitted.
  - A clear statement that:
    > The operator is not asking platforms for refunds or settlement money,
    > only for **log preservation and an internal risk review**.

---

## Sources & verification

For transparency, each page links back to its underlying sources:

- **Dropbox evidence bundle** — emails, PDFs, screenshots, memos.  
- **Dropbox infrastructure logs (`ac55id-logs`)** — daily snapshots of DNS /
  HTTP / CDN behaviour for `ac55id.com` and `acidnation.com`.
- **Google Docs** — narrative index and platform reports.

Readers are encouraged to follow the links and review the primary materials
directly. Where screenshots or OCR may be imperfect, that uncertainty is noted
explicitly.

---

## Language

- Core pages are written in **English**.
- Selected sections (`principles`, `for-artists`, `for-platforms`) may also
  include **Spanish** translations.
- The operator’s country and full legal name are intentionally not disclosed;
  the site only states that it is run by *“a small independent label in East
  Asia”*.