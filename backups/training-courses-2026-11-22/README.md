# Legacy training courses — 2026-11-22

The nine practical bioinformatics courses that were on `/training` before the
page was narrowed to AI courses. Their syllabus data is in
`courses-legacy.ts`, verbatim.

Removed: Bioinformatics 101, Python for Data Science in Biology, Genomic
Variant Analysis, Structural Biology & Drug Design, Molecular Dynamics (MD)
Simulation, Molecular Docking, RNA-Seq Data Analysis, Single-Cell RNA-Seq
Analysis, Machine Learning for Biology.

Kept on the site: AI for Biological Discovery, Agentic AI for Computational
Biology, Agentic Cheminformatics with Google Antigravity.

Restore one course:
1. Copy its object from `courses-legacy.ts` into the `courses` array in
   `lib/training/courses.ts`.
2. Re-add its `case '<slug>'` thumbnail glyph in `app/training/page.tsx`
   (see the git history of that file, or tag `training-courses-backup-2026-11-22`).

Full pre-removal tree: `git checkout training-courses-backup-2026-11-22 -- lib/training app/training`
