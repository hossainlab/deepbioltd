# Old pages backup — 2026-11-22

Pages from the pre-redesign site that were still reachable on deepbioltd.com
(e.g. /about) after the move to the minimal single-column layout and the
"Biological Foundation Models" positioning. They were removed from `app/` and
now permanently redirect (see `redirects()` in `next.config.js`).

Contents: each route's `app/<route>/page.tsx` plus the page component it
renders. Shared components (Navbar, Footer, ui/*, lib data) stay in the repo.
`/privacy` and `/terms` are copied here for completeness but remain live.

| Old route | Now redirects to |
| --- | --- |
| /about, /team, /contact | / |
| /research-programs, /labs/* | /research |
| /methodology, /brochure | /services |
| /research-assistant-recruitment, /lab-onboarding, /ambassadors, /our-ambassadors, /ambassador-handbook | /join-us |
| /career-guide/*, /thesis-support, /training | https://deepbioacademy.com/ |

Restore one route (also delete its redirect in next.config.js):
    cp -R backups/old-pages-2026-11-22/app/about app/about
or the full pre-removal tree from git:
    git checkout old-pages-backup-2026-11-22 -- app/
