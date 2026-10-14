# Maintenance and validation

The source branch is `main`; GitHub Pages serves `gh-pages` under `/my-hexo-blog/`. The active theme is the local `themes/fieldnotes` EJS theme. Butterfly stays installed for a reversible migration but is not loaded by the new layouts. Every push to `main` rebuilds and validates; the daily schedule (09:41 Asia/Shanghai) refreshes the allowlisted public project page and deploys it. A manual workflow dispatch does the same. Scheduled runs can be delayed by GitHub. Existing articles are not generated or rewritten by the schedule.

The new theme implements project category/search/sort controls, a keyboard-accessible search dialog, local theme persistence, article contents and copy controls, RSS, and a compact mobile navigation. Brand icon assets are embedded from `lucide-static@1.56.0` (ISC license). It does not depend on external theme scripts, font services or statistics renderers. Curated project summaries live in `data/project-catalog.json`; API metadata remains separate in `data/projects.json`.

The research preview image is a byte-identical copy of the user's public `shenzhen-housing-redevelopment` event-study figure. Its SHA-256 is `5a22ae1c561ba5c510484dd2d46428246c90215261057f5b8d6814a06dfb0d0f`. The accompanying 2026-10-14 progress note links the data summaries and explicitly distinguishes area-level diagnostics from project-level causal evidence.

Use `npm ci --ignore-scripts`, `npm test`, `npm run sync`, and `npm run build`. The lockfile records installed versions. Builds fail on unresolved music tags, missing local links/assets, absent canonical/compatibility routes, missing search data or duplicate APlayer scripts.

Music requests occur only after a visitor clicks Load. APlayer 1.10.1 is bundled from npm; no mutable CDN is used for it. API failures, empty responses, timeouts and playback errors display a status with retry and the original music-platform link. Actual music availability is external and must be verified separately from player rendering. Do not download or republish song audio.

`scripts/site-fixes.js` maintains published article URLs, generates their alternate-date redirects, resolves raw HTML asset/link prefixes and renders music widgets. `tools/sync-projects.cjs` gathers a fixed public repository list fully before replacing the snapshot; failure blocks the deployment so the current site stays available. Descriptions are sourced from repository metadata and do not establish research results or production readiness.
