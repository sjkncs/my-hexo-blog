# Fieldnotes Theme

Local EJS theme for Yangting SONG's personal blog. The theme uses the existing Hexo renderer and no frontend framework. Lucide 1.56.0 SVG strings are embedded at build time under their ISC license. The typography uses locally available fonts; no remote font or icon service is required.

`layout/` defines the shared shell and homepage, projects, article, page and archive views. `source/` contains the CSS and JavaScript. `scripts/helpers.js` binds curated project metadata and helpers. Category filters, search, sort, empty states, keyboard-accessible dialogs, theme persistence, RSS and article utilities are verified by browser smoke checks.

Do not remove source provenance or present repository metadata as verified production capability. Legacy articles are retained, with decorative inline styles normalized at render time. The original Butterfly dependency is retained for reversible migration but is not loaded by this theme.
