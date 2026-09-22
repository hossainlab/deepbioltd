# Design system — blue, derived from the logo

Status: **foundation + homepage done 2026-09-18.** Interior routes pending.

Supersedes the warm "Osseus-direction" scope that previously lived in this
file. That direction put a marble/laurel/gold palette and EB Garamond against a
logo that is a blue monoline mark with a bold grotesque wordmark, and the two
never reconciled — the logo was the only blue thing and the only sans thing on
every page. The instruction that settled it: **the logo does not change.**
Everything else moves to meet it.

---

## 1. The idea

The logo mark is two strands diverging from a crossing point with rungs between
them. A volcano plot — the most-run output in the service catalogue — is two
wings diverging from a centre with threshold rules across them. They are the
same shape.

So the mark's geometry does two jobs:

- **The hero image** is a volcano plot drawn at display scale in the page's own
  colour and type (`components/brand/VolcanoMark.tsx`), not a matplotlib export
  dropped onto the page.
- **The section marker** is the rung: four ticks over a baseline (`.rung`,
  `.rung-dark`). It replaced a tracked-out uppercase eyebrow that restated the
  nav label above every heading.

Everything else is type and hairlines. One bold element per page.

---

## 2. Tokens

### Colour — `tailwind.config.ts`

| Token | Value | Role |
| --- | --- | --- |
| `abyss` | `#071A2C` | navy ground: hero, process band, closing ask, footer |
| `deep` | `#0E3355` | navy step |
| `brand` | `#205E92` | **the logo blue.** Buttons, links, active nav, `in`/`out` labels |
| `beam` | `#5AB0E8` | data blue on navy; focus ring on dark |
| `helix` | `#E08A2C` | the volcano's up-regulated orange. Semantic only — never chrome |
| `chalk` | `#F4F7FA` | light alternate ground |
| `paper` | `#FFFFFF` | page ground |
| `ink` | `#0B1B2A` | text on light |
| `slate` | `#56697E` | secondary text on light |
| `rule` / `rule-strong` | `#DCE3EA` / `#B9C5D1` | hairlines |
| `on-deep` / `-mid` / `-faint` | `#E8F0F7` / `#9FB4C7` / `#6E8399` | text on navy |

Measured: `slate` on `chalk` 4.6:1 · `beam` on `abyss` 7.4:1 · `brand` on white
7.0:1, so white-on-`brand` buttons pass too.

Every warm token (`marble`, `laurel`, `gild`, `sage`, …) still resolves, pointed
at the blue values, so un-migrated routes shifted with the rest of the site
instead of staying beige on their own. They go when the last reference does.

### Type — `app/layout.tsx`

- **Archivo**, loaded with its `wdth` axis. Display lines run expanded
  (`wdth 112`) and tight; body sits at normal width. One family for the whole
  interface. It is a grotesque, which is the point — the wordmark is set in the
  platform grotesque and is not being changed, so the page type meets it there.
- **IBM Plex Mono** for numbers, units, axis labels and file types. Never prose,
  never interface chrome.
- `font-serif` is aliased to Archivo. There is no serif in this system; the
  alias exists because legacy markup is full of `font-serif`.

### Geometry

- Container `75rem` (`max-w-plate`), gutters 24/40.
- Radius 2px on buttons; square everywhere else. The mark is drawn with round
  caps, so a pill would double the roundness and a hard 0 would contradict it.
- One shadow (`shadow-bar`), on the nav once it has left the hero.
- Left-aligned throughout. No centred statement blocks.

---

## 3. Done

`tailwind.config.ts` · `app/globals.css` · `app/layout.tsx` ·
`app/opengraph-image.tsx` · `app/page.tsx` · `Navbar` · `Footer` · `Hero` ·
`brand/VolcanoMark` · `home/SectionHeading` · `home/Capabilities` ·
`home/HowWeWork` · `home/SelectedWork` · `home/Leadership` · `home/HomeFaq` ·
`home/CtaBlock` · `WhoWeServe` · `Partners` · `ui/Accordion` ·
`lib/home/capabilities.ts`

Decisions worth keeping:

- **Capabilities is a specification table**, not a card grid. What to send and
  what comes back already exists on every service; six identical rounded cards
  each holding one sentence said less in more room.
- **The workflow schematic is gone from the homepage.** It baked in its own
  bold-sans title under the heading, ran its own 1–5 numbering beside a 1–4
  list, and rendered sublabels near 7pt at the width it was placed. The PCSK9
  structure took its slot in Selected Work — a result rather than a picture of a
  process, and legible at plate size.
- **Partner marks are held at grey**, colour on hover. Six house styles in six
  colour ranges otherwise compete with the one accent the page has.
- **The OG card lost a stats row** reading "250+ Genomes Analyzed / 18+
  Services". The catalogue holds twenty, so that card was shipping a stale
  number to every link preview, and nothing in the repository supports the
  genome count.

---

## 4. Pending

Interior routes still carry the old card/gradient/glass markup. They now render
in the blue palette through the aliases, but their *structure* is untouched:

```
ThesisProgramPage 80   AmbassadorHandbook 51   LabOnboarding 39   BioHPCLab 36
Brochure 35            CloudLabs 34            ResearchPrograms 24  CareerGuide 23
Research 16            About 16                Insilico 15          GenGenomics 15
BigBio 15              ResearchAsstRecruit 14  Ambassadors 13       Training 8
OurAmbassadors 6       DeepBioAcademy 6        Methodology 5        DeepAMR 5
VisionMission 2        LegalLayout 1
```

Suggested order: `/services` and `/case-studies` first (the two pages a buyer
reaches after the homepage, and the two that keep their figures), then
`/about` · `/team` · `/contact` · `/methodology`, then the long handbook pages.

Also outstanding:

- `public/favicon.svg` is already the logo blue and needs no change; the PNG
  favicons referenced in `app/layout.tsx` were not audited.
- Mobile rendering has not been screenshot-verified — the browser resize tool
  in this session would not take. Breakpoints stack at `md`/`lg` and nothing
  overflows at desktop width, but 390px wants a real pass.
- Leadership portraits are inconsistently framed (one full-body, two
  head-and-shoulders). A 4:5 crop holds them together; reshooting to a common
  crop would hold them better.

---

## 5. Out of scope

Copy rewriting · IA or nav restructuring · new routes · performance work beyond
not regressing · CMS · analytics.
