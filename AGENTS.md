# Blog maintenance

- Source branch: `main`; published files: `gh-pages`. Preserve existing articles and personal information unless a task calls for revision.
- GitHub Pages root is `/my-hexo-blog/`. Build-time filters normalize internal URLs; generated-site checks must reject missing local routes and assets.
- Music uses one locally bundled APlayer and an explicit visitor load action. The external music service can fail; retain retry and original platform links. Never claim working audio solely from a rendered player.
- `data/projects.json` is generated from an allowlisted set of public GitHub repositories. Fail on incomplete collection; do not invent or automatically publish article prose.
- Run `npm test` and `npm run build`. Smoke-test the article, homepage, search and project page at desktop/mobile widths, including a simulated music-service failure.
- Daily workflow refreshes public project metadata and deploys a validated build. Pull requests validate without publishing. Lock dependency versions and use `npm ci`.
- The active theme is the local `themes/fieldnotes` EJS theme. Butterfly remains installed only for reversible migration; do not load its old CSS or global scripts into the new layouts.
- `data/project-catalog.json` contains curated titles, classifications and summaries; `data/projects.json` remains API metadata. Never convert repository descriptions into verified deployment or research claims.
- Preserve all historical article paths. New UI icons come from pinned `lucide-static` SVGs embedded during the build, not external icon services. Validate project filtering, sorting, empty states, search, theme persistence, menu keyboard access, RSS and article code-copy controls.
