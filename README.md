# NEEDCOFY (Black & White / Magazine-like)

Static website built with plain HTML/CSS/JS. No build step required.

## Run
- Open `index.html` directly in a browser, or serve locally:
  - Python: `python3 -m http.server` then visit `http://localhost:8000`

## Structure
- `index.html` — One-page editorial layout
- `menu.html`, `about.html`
- `assets/css/` — `tokens.css`, `base.css`, `components.css`
- `assets/js/main.js` — header scroll, reveal, lightbox, form, map
- `assets/images/` — drop WebP/JPG in 3 breakpoints if possible
- `assets/video/hero.mp4` — 6–10s loop, ≤3MB
- `seo/` — `metadata.json`, `robots.txt`, `sitemap.xml`
- `legal/privacy.md`
- `copy/home.md`

## Assets guideline
- Images: total ≤ 1MB target on first view; grayscale-friendly.
- Hero video: 1920×1080, ≤ 3MB, muted/loop/autoplay, high contrast.
- Instagram: icon-only in header.

## Map
- Set `data-place-id` on the map iframe in `index.html` or provide `data-lat` and `data-lng`.

