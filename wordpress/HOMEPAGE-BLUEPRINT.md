# Homepage Blueprint — onpointhq.com replacement

Section-by-section build recipe for Novamira/Elementor. Copy below is final draft — items marked **[VERIFY]** must be confirmed against real credentials/numbers before publish. One gold CTA site-wide: **Book a Reality Audit**.

---

## 0. Header (sticky, all pages)
`.cop-header`. White knockout logo left. Nav: Services · How We Work (AIM) · Federal · About · Insights. Right: gold `.cop-btn--primary` → "Book a Reality Audit".

## 1. Hero — dark, `.cop-lf--pillars cop-lf--alive`
- Eyebrow badge (`.cop-badge--gold`, zap icon): `ASYMMETRIC ADVANTAGE`
- H1 (COP Display, ~56px, white; last phrase `.cop-grad-text`):
  **Turn hidden reality into *visible momentum.***
- Lead (18–19px, white/66, max 520px):
  We unify Message, Machines, and Mission so your organization can see more, sell more, and operate smarter.
- CTA row: gold **Book a Reality Audit** + outline-dark **How AIM works** (anchor to §4)
- Tagline line (Poppins 600, 15px): We build momentum. **Real. Measurable. Unstoppable.** OnPoint.
- Right column: `.cop-glass` stat panel — logo + "Live signal" badge + 4 `.cop-stat` metrics **[VERIFY — replace demo numbers +38% / $2.1M / 3.4× / 72 with real client results]**

## 2. Problem strip — light, short
- Eyebrow: `THE GAP`
- H2: **You don't have a tools problem. You have a traction problem.**
- One paragraph (max 60 words): Most organizations are sitting on advantage they can't see — messages that don't land, systems that don't talk, missions that don't drive decisions. We make the hidden visible, then turn it into momentum you can measure.
- No cards, no icons. Text + one `.cop-rule`.

## 3. M³ — dark, `.cop-lf--aurora`
- Eyebrow: `M³ · OUR FOUNDATIONAL PHILOSOPHY`
- H2: Everything connects Message, Machines, and Mission.
- Three `.cop-pillar` cards (message / machines / mission gradients), each: eyebrow (What you say / How you operate / Why you exist), Lucide icon, title, one-sentence description, gold `.cop-rule`.

## 4. AIM OnPoint™ — light (anchor: #how-aim-works)
- Eyebrow: `AIM ONPOINT™ FRAMEWORK` · H2: **M³ is the philosophy. AIM is the action.**
- Three `.cop-card` steps: 01 **Acquire** (identify opportunities, capture data, understand the landscape) · 02 **Integrate** (fuse creative, technical, and operational into one system) · 03 **Maximize** (activate momentum — amplify, accelerate, measure everything).
- Below: centered label `POWERED BY THE 6 C'S OF ONPOINT SUCCESS` + six `.cop-chip`s: Client Commitment · Connection · Clarity · Creativity · Confidence · Celebration.

## 5. Service lines — light, THREE cards only (VDI removed)
- Eyebrow: `SERVICE LINES` · H2: **Integrated expressions of M³.** · outline button "Explore all services"
- 3-across `.cop-pillar` grid:
  1. **Growth & Workforce Enablement** — tag MESSAGE — Sales training, marketing, and communications that move people.
  2. **Technology & Infrastructure** — tag MACHINES — AI transformation, automation, IT & cybersecurity advisory, Microsoft licensing & governance.
  3. **Mission Strategy & Readiness** — tag MISSION — Adoption & change management, AI governance for health systems.
- **Never add a fourth card.** Drone/4D capture work belongs to OnPoint Sky Solutions (footer only).

## 6. Trust band — white, `.cop-section--card`
- Eyebrow: `TRUSTED WHERE IT COUNTS`
- Row 1 — credential chips **[VERIFY each]**: SDVOSB · Native-owned (FAR 19.1406 sole-source eligible) · CMMI Level 2 · active contract vehicles.
- Row 2 — client/partner logo row, grayscale 60% → color on hover **[VERIFY logo permissions]**.
- One sentence: Federal, healthcare, and commercial teams trust us with the work that can't slip.

## 7. Founder authority block — light, compact (one row, not a bio page)
- Photo left (real photo, not stock). Right: eyebrow `WHO'S BEHIND ONPOINT`, H3 with founder name/title, 2–3 sentences of credibility **[VERIFY details with user]**, ghost link "More about us →". No second gold button.

## 8. CTA band — `.cop-card--ink` panel, radius 32px, `.cop-lf--horizon cop-lf--alive`
- H2: **See more. Sell more. Operate smarter.**
- Sub: Start with a Reality Audit. We'll surface what's hidden across your three M's in 14 days.
- Gold **Book a Reality Audit** → opens form (Fluent/WPForms in `.cop-form`): name, work email, organization, "What's your biggest gap right now?" (select: Message / Machines / Mission / Not sure), message. Success state offers the Calendly link.

## 9. Footer — ink, `.cop-lf--spotlight`
- White knockout logo + tagline. Columns: Services · Company · Resources.
- "Family of brands": **OnPoint Sky Solutions** (external link) — the only VDI/drone reference on the site.
- Legal row: © Celebration OnPoint · privacy · terms.

---

## Pages beyond the homepage (nav targets)
- **/services** + one page per service line (reuse §3/§5 patterns; Tier-2 `.cop-tier-authority` + `.cop-grid-overlay` treatment for cybersecurity/federal content).
- **/federal** — Precision Authority tier: grid overlay, credential detail, contract vehicles, capability statement download.
- **/about**, **/insights**, **/contact** (Reality Audit form + Calendly).
- Homepage carries **no FAQ and no comparison table** — FAQ moves to service pages/contact.
