# Maintenance and validation

The source branch is `main`; GitHub Pages serves `gh-pages` under `/my-hexo-blog/`. The existing Butterfly theme is retained. Every push to `main` rebuilds and validates; the daily schedule (09:41 Asia/Shanghai) refreshes the allowlisted public project page and deploys it. A manual workflow dispatch does the same. Scheduled runs can be delayed by GitHub. Existing articles are not generated or rewritten by the schedule.

Use `npm ci --ignore-scripts`, `npm test`, `npm run sync`, and `npm run build`. The lockfile records installed versions. Builds fail on unresolved music tags, missing local links/assets, absent canonical/compatibility routes, missing search data or duplicate APlayer scripts.

Music requests occur only after a visitor clicks Load. APlayer 1.10.1 is bundled from npm; no mutable CDN is used for it. API failures, empty responses, timeouts and playback errors display a status with retry and the original music-platform link. Actual music availability is external and must be verified separately from player rendering. Do not download or republish song audio.

`scripts/site-fixes.js` maintains published article URLs, generates their alternate-date redirects, resolves raw HTML asset/link prefixes and renders music widgets. `tools/sync-projects.cjs` gathers a fixed public repository list fully before replacing the snapshot; failure blocks the deployment so the current site stays available. Descriptions are sourced from repository metadata and do not establish research results or production readiness.
