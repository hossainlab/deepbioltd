# Osseus-direction restyle — scope

Status: **Phase 1 (foundation) done 2026-09-11.** Phases 2–6 pending.

Phase 1 deviations from §1: `ink-faint` darkened to `#666D5F` (reference
`#8b9184` measured 3.05:1 on marble) and `sage` lightened to `#A3B294`
(reference `#8b9c7c` measured 3.92:1 on laurel). Old `ink-soft` (faint role)
renamed to `ink-faint` at its 14 call sites; other old token names remain as
warm aliases until their phases migrate them. `.brand-text-gradient` became
inherited colour + italic (a fixed colour failed on legacy hard-coded navy
heroes); `.brand-gradient` became solid laurel (all 10 uses are text-free
divider bars).
Reference: https://www.osseus.ai/ · Decision: full-site (option C), generated imagery.

---

## 0. The question that started this

**"Why the figure in 'A scope in writing, before any work starts'? It does not look good."**

Correct. `components/home/HowWeWork.tsx:44-70` renders
`/case_studies/img/figures_workflow_abstract.png`. Six defects:

1. **Two titles.** The PNG bakes in its own bold-sans title *"Cardiometabolic
   Polygenic Risk Score Workflow"*, sitting directly under the serif `<h2>`.
2. **Two numbered sequences.** The `<ol>` beside it runs 1–4. The image runs its
   own blue circles 1–5. The figure restates the list in worse type.
3. **Arrow tangle.** Box 5 fans three crossing diagonals to the output row,
   leaving a dead white band through the middle of the image.
4. **Glowing box.** A `bg-paper` wrapper on the `bg-deep` band — the exact
   failure `Hero.tsx:10-18` already documents and rejects.
5. **Illegible.** 1977px native, rendered at 620px. Sublabels land near 7pt.
6. **Stock chrome.** Rounded blue rectangles and arrowheads read as a template.

**Resolution: the figure is deleted, not redrawn.** Osseus carries zero
diagrams and zero charts on marketing pages, and that restraint *is* the
aesthetic being adopted.

---

## 1. What Osseus actually is (decoded from its own CSS, not impressions)

Stack: Next.js. Stylesheet: `/_next/static/immutable/chunks/2ixcem76e09dh.css`.

### Palette — warm, green-shifted, gold accent

| Token | Value | Role |
| --- | --- | --- |
| `marble` | `#faf8f2` | page ground |
| `parchment` | `#f2eee3` | alternate band |
| `linen` | `#e8e2d4` | soft fill |
| `mist` | `#d9d5c7` | rules |
| `ink` | `#171b14` | body / display type |
| `ink-soft` | `#2c332a` | secondary |
| `ink-muted` | `#5b6357` | deck copy |
| `ink-faint` | `#8b9184` | eyebrows, meta |
| `laurel` | `#2f3d2c` | dark ground |
| `moss` | `#56684c` | dark ground alt |
| `sage` | `#8b9c7c` | on-dark secondary |
| `gild` | `#a8873f` | single accent (borders, focus ring) |
| `gild-soft` | `#c9ab6b` | accent on dark |

No blue anywhere. Focus ring is `2px solid gild`, `offset 3px`.

### Type — serif does everything

- **EB Garamond** on 42 rules — headings *and* body *and* nav *and* buttons.
- **JetBrains Mono** on 12 rules — data, tabular figures only.
- No UI sans. Inter has no role in this system.
- Display scale is fluid throughout:
  `clamp(2.5rem, 6vw, 5rem)` hero · `clamp(2.25rem, 5vw, 3.75rem)` section
  · `clamp(1.55rem, 2.6vw, 1.95rem)` deck.
- Hero mixes roman and *italic* across two lines of one sentence.

### The eyebrow (strongest single signature)

```css
font-family: var(--font-serif);
text-transform: uppercase;
letter-spacing: .34em;
font-variant-numeric: lining-nums;
font-size: .7rem;
line-height: 1.2;
```

Preceded by a short horizontal rule, centered above every section heading.

### Geometry

- Rules are **`color-mix(in oklab, ink N%, transparent)`** at 8/10/12/14/15/20/
  25/30/35% — never a flat hex. Hairlines fade instead of drawing.
- Radii: buttons and the nav capsule are **fully round pills**. Cards use
  `0.75–1.5rem`.
- Exactly **one** `box-shadow` in the whole stylesheet (the floating nav).
- Containers: `96rem` / `78rem` / `73rem` / `64rem` / `56rem` / `52rem` / `49rem`.
  Prose statements sit at `49–56rem`, centered.

### Layout devices

1. Full-bleed painterly hero image, masked to fade into `marble` at the fold.
2. Nav transparent over the hero, collapsing to a floating rounded-full capsule
   on scroll.
3. Centered statement sections — 2–3 large serif sentences at `52rem`, no
   cards, no columns, no icons.
4. Full-bleed dark image bands between paper sections for rhythm.
5. Pill CTAs: filled ink + arrow (primary), hairline outline (secondary).

---

## 2. Where DeepBio stands today

Current system (from `restructure deepbio`, 5f5ffc4): left-aligned journal
editorial. Cool near-black `#23211D` on `#FDFCF8`, blue `#205E92` accent derived
from the DESeq2 volcano output, Newsreader headings, Inter body, square corners,
numbered figure plates, hairline rules at flat hex.

Legacy surface still un-migrated — 23 components, 461 hits of
`brand-gradient` / `glass` / `rounded-2xl` / `shadow-xl` / `bg-gradient`:

```
ThesisProgramPage 80   AmbassadorHandbook 51   LabOnboarding 39   BioHPCLab 36
Brochure 35            CloudLabs 34            ResearchPrograms 24  CareerGuide 23
Research 16            About 16                Insilico 15          GenGenomics 15
BigBio 15              ResearchAsstRecruit 14  Ambassadors 13       Training 8
OurAmbassadors 6       DeepBioAcademy 6        Methodology 5        DeepAMR 5
Navbar 3               VisionMission 2         LegalLayout 1
```

Scale: 26 routes, 39 components, ~10.7k LOC.

### Conflicts to resolve (four real ones)

| # | DeepBio now | Osseus | Ruling |
| --- | --- | --- | --- |
| 1 | Figure plates are the proof device | no figures at all | **Keep figures on `/case-studies` and `/services` only.** See §6. |
| 2 | Square corners, "no radius" | full-round pills | Adopt pills for CTAs and nav. Content stays square. |
| 3 | Blue `#205E92` brand | gold `gild` | Blue demoted to a data-only colour inside figures. Gold becomes UI accent. |
| 4 | Inter body sans | serif everywhere | Serif body; Inter survives only for figure captions and tabular data. |

---

## 3. Imagery

Osseus uses Claude-Lorrain-style classical Mediterranean landscape painting —
marble colonnade, valley, dawn light. **Copying marble porticos would read as a
clone and has nothing to do with a Bangladeshi genomics company.**

DeepBio's analogue, same painterly register, own subject:

- Bengal delta river systems from height at dawn — braided channels that read as
  branching lineage.
- Sundarbans mangrove canopy in mist.
- Terracotta temple relief (Bengal terracotta), warm ochre — the architectural
  note that `gild` already wants.
- Monsoon light through cloud over floodplain.

4–6 generated pieces, `.webp`, 2560px wide plus a 1280 and a portrait crop each,
matching Osseus's own `hero-valley-pano` / `-1280` / `-portrait` set. Painterly
and atmospheric, never photoreal stock, never AI-lab-render clichés. Every one
is decorative and carries `alt=""`.

**Flagged:** generated art is not a photo of DeepBio's real facilities. It
supports the site as atmosphere only, and nothing may imply it depicts actual
labs, staff, or equipment.

---

## 4. Work plan

### Phase 1 — foundation (2 files, blocks everything else)

- `tailwind.config.ts`: replace the colour block with the 13 tokens in §1.
  Keep `primary` / `brand.*` / `signal` as `figure.*` so figure assets and
  legacy pages keep compiling. Add fluid `fontSize` steps, `maxWidth` at
  `statement: 52rem` and `wide: 96rem`.
- `app/globals.css`: swap Newsreader→EB Garamond and Inter→JetBrains Mono via
  `next/font`; add `.eyebrow`, `.rule-hair` (oklab `color-mix`), `.pill`,
  `.pill-outline`, `.statement`; convert `.plate` / `.plate-dark` to the warm
  rules; gold focus ring; retire `.glass`, `.brand-gradient`,
  `.brand-text-gradient`.
- `app/layout.tsx`: font wiring.

### Phase 2 — chrome (2 files, every route sees it)

- `Navbar.tsx` (405 LOC): transparent over hero → floating rounded-full capsule
  on scroll, serif items, pill CTA. Nav copy unchanged.
- `Footer.tsx` (117 LOC): warm ground, serif, hairline column rules.

### Phase 3 — homepage (9 files)

- `Hero.tsx` — full-bleed image, centered roman+italic headline, pill CTAs. The
  PDF evidence list moves below the fold as a `statement`-width index.
- `HowWeWork.tsx` — **delete Fig. 1**, reflow the 4 steps to a centered
  sequence on `laurel`.
- `SelectedWork.tsx` — renumber Fig. 2–4 → 1–3, warm plate rules.
- `Capabilities` · `WhoWeServe` · `Leadership` · `HomeFaq` · `CtaBlock` ·
  `SectionHeading` — eyebrow device, centered statements, warm tokens.
- `app/page.tsx` — insert one full-bleed dark image band for rhythm; update the
  figure-numbering comment at line 23.

### Phase 4 — mid-weight routes (10 files)

`AboutPage` · `ServicesPage` · `CaseStudiesPage` · `TeamPage` · `ResearchPage` ·
`Methodology` · `Contact` · `Partners` · `legal/LegalLayout` · `Training`.

### Phase 5 — heavy legacy (13 files, the bulk)

`ThesisProgramPage` (873) · `AmbassadorHandbookPage` (1129) ·
`BioHPCLabPage` (1204) · `BrochurePage` (837) · `LabOnboardingPage` (535) ·
`CloudLabsPage` (505) · `CareerGuideHandbookPage` (487) ·
`ResearchProgramsPage` (389) · `ResearchAssistantRecruitmentPage` (268) ·
`AmbassadorsPage` (268) · `OurAmbassadorsPage` (239) · the three 242-LOC lab
pages · `DeepAMRShowcase` · `DeepBioAcademyShowcase` · `VisionMission` ·
`FeaturedInitiatives`.

Gradient/glass/shadow/radius stripped, warm tokens in, serif body.

### Phase 6 — verification

Every one of the 26 routes rendered at 1440 and 390, screenshotted, checked
against this document. `next build` clean. Contrast checked: `ink-muted` on
`marble` and `sage` on `laurel` both need measuring — if either misses 4.5:1 it
gets darkened, and the reference is not followed off a cliff.

---

## 5. Out of scope

Copy rewriting · IA or nav restructuring · new routes · the audience-split
positioning Osseus uses (`for research labs` / `for hospitals`) · performance
work beyond not regressing · CMS · analytics · `.playwright-mcp/` cleanup and
the other uncommitted deletions already sitting in `git status`.

---

## 6. What this costs — stated plainly

Osseus can be image-only because it sells datasets and access; its proof lives
on a leaderboard and a research blog. DeepBio sells *analysis*, and the figure
plates are the only checkable claim on the site. A literal full-site read of
"follow Osseus" would delete that proof.

So, unless overruled: figures are removed from the homepage and every marketing
page, and **retained on `/case-studies` and `/services`** — restyled to warm
rules and serif legends, but kept. Those are the pages a buyer reaches after
they are already interested, which is exactly where Osseus puts its own
evidence.

---

## 7. Risk

- Phase 5 is ~6.7k LOC of legacy markup. Highest chance of visual regression;
  screenshot every route before and after.
- Serif body copy at small sizes is weaker than Inter for dense handbook pages
  (`AmbassadorHandbookPage`, `BrochurePage`). Mono or a serif at raised size
  may be needed there; will flag when reached rather than guess now.
- Generated imagery may take iterations to avoid a stock or AI-render look.
- Blue→gold touches OG images, the favicon, and `app/opengraph-image.tsx`,
  which this scope does not currently cover. Say the word and it is added.

---

## 8. Approval

Say **go** and Phase 1 starts. Say which phases to cut and the plan is trimmed
before anything is written.
