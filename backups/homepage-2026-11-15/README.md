# Homepage backup — 2026-11-15

Snapshot of `app/page.tsx` before the minimal, centered redesign.
The section components it imports (`components/Hero.tsx`, `components/home/*`)
are left untouched in the repo.

Restore:
    cp backups/homepage-2026-11-15/page.tsx app/page.tsx
or from git:
    git checkout homepage-backup-2026-11-15 -- app/page.tsx components/Navbar.tsx components/Footer.tsx app/layout.tsx
