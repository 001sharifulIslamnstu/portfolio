# Md Shariful Islam — Research Portfolio

A fully static, responsive research website designed for **free GitHub Pages hosting**. No database, Node build, paid service, or server is required.

## Features

- Animated research-network hero background
- Responsive layout for desktop, tablet, and mobile
- Light/dark theme with saved preference
- Current research focus: HCI, VLMs, robotics, uncertainty, and ROS 2
- Weekly research update system
- Dedicated Research Atlas with expanded project stories, source-linked paper visuals, and method schematics
- Searchable/filterable publication archive with a short overview for every listed paper
- Searchable/filterable research blog
- Four ready-to-publish technical research notes
- Scroll animations, hover spotlights, animated profile statistics
- Reduced-motion accessibility support
- Separate About / experience page
- Current BUBT-RGS research/instructor roles and a public activity/media wall

## Deploy on GitHub Pages

1. Upload this repository to GitHub (or replace the files in the existing `portfolio` repository).
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the branch (normally `main`) and `/ (root)`.
5. Save. The site is entirely static and will work as a project page such as:
   `https://001sharifulislamnstu.github.io/portfolio/`

All internal links are relative, so the site works correctly inside a `/portfolio/` project path.

## Add the weekly update

Open:

`assets/js/site-data.js`

At the top of `PORTFOLIO_DATA.updates`, duplicate an update object and change:

- `date`
- `label`
- `title`
- `text`
- `tags`

Commit the file. The newest entries automatically appear on both the homepage and `updates.html`.

## Update a research project or paper overview

Open `assets/js/research-data.js`. The `featured` array controls expanded research-project stories, and the `publications` array powers the searchable paper atlas. Keep result language as “the paper reports…” unless you are explicitly adding a verified independent replication result.

Paper visuals are intentionally source-linked. If a stable original figure URL is unavailable, the page renders a labeled portfolio method schematic instead of pretending a recreated graphic is the paper’s original figure.

## Add a blog post

1. Copy one file in `posts/` and rename it, for example `my-new-note.html`.
2. Edit its title, date, category, deck, and article body.
3. Add the post metadata to `assets/js/blog-data.js` using the same slug.
4. Commit. It will become searchable/filterable on `blog.html`.

## Main files

- `index.html` — homepage
- `about.html` — education, experience, toolkit
- `research.html` — expanded project overviews, research-paper map, diagrams, and source links
- `publications.html` — searchable publication archive
- `updates.html` — weekly research log
- `blog.html` — research notes index
- `posts/` — individual blog articles
- `assets/css/style.css` — entire visual system
- `assets/js/main.js` — interaction and animation logic
- `assets/js/site-data.js` — weekly updates + research-interest cards
- `assets/js/research-data.js` — expanded project stories + overview metadata for the paper atlas
- `assets/js/blog-data.js` — blog index metadata
- `img/profile.png` — profile portrait
- `SOURCES.md` — audit trail for public BUBT/social-media and paper-figure sources

## Notes

The website uses only HTML, CSS, and vanilla JavaScript. Google Fonts are loaded from the web; if you prefer a fully self-contained site, remove the first `@import` line in `assets/css/style.css` and the system fonts will be used.

## Public event media

The homepage links to public BUBT/LinkedIn/news material for context. Public event images remain externally hosted and source-linked; if a remote image disappears, the rest of the static site continues to work. Instructor-role descriptions are portfolio content and should only be kept while they remain accurate.
