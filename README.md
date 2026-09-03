# Magizh Technologies Website

Professional static website for **Magizh Technologies**.

Tagline: **Building Technology That Moves Business Forward**

## Pages
- Home
- About Us
- Services
- Portfolio
- FAQ
- Contact

## Assets
- `style.css`, `app.js`
- `assets/images/` — source copies of the logo, favicon, and profile photo. **These are no longer loaded from disk** — see "Why images are embedded" below. `apple-touch-icon.png` is still loaded as a file (iOS "Add to Home Screen" only).

## Why images are embedded, not linked
Earlier versions of this site linked to `assets/images/...` on disk, but images kept failing to appear on the live GitHub Pages deployment even though they worked locally — almost certainly an upload/path issue on the GitHub side that was hard to fully diagnose remotely. To make this bulletproof, the logo, favicon, and profile photo are now embedded directly inside the HTML as base64 data — they physically cannot 404, no matter how the files are hosted. The profile photo still has a graceful fallback avatar wired up via `onerror` in case a browser ever fails to render a data URI.

This makes the HTML files larger (largest is `about.html` at ~320KB), which is still fast to load, but if you'd prefer the leaner, file-based version instead now that hosting is stable, ask and it can be converted back.

## Icons are self-hosted, not CDN-linked
All social/tech/platform icons (Facebook, Instagram, X, LinkedIn, GitHub, WhatsApp, Android, Apple, Chrome, Windows, Linux, Java, Kotlin, Python, Django, Jetpack Compose) are inline SVGs built into the HTML — no external icon service is used anymore. This was a second real bug: the CDN previously used had actually removed its LinkedIn and Windows icons (likely a trademark/licensing decision on their end), which is exactly why those two specifically showed as broken images. The Windows "device" now uses a neutral 4-square glyph rather than reproducing Microsoft's logo mark.

## Features
- Custom illustrated device mockups (Android, iOS, Web, Android TV, Smart TV, Windows, Linux, Mac) on the homepage Platforms section
- Scroll-reveal animations, animated stat counters, sticky header, scroll progress bar, back-to-top button, animated nav underline, button hover sweep, subtle hero background motion
- Animated hamburger menu with slide-down mobile nav
- Portfolio page filter pills (All / Kotlin / Java / MVVM / MVC / Offline-First)
- Contact form shows an inline success card on submit instead of a browser alert
- Respects `prefers-reduced-motion`

## GitHub Pages
Upload all files to the repository root. The HTML pages reference `style.css` and `app.js` from the root, so do not move them into an `assets` folder unless the HTML paths are changed. Google Fonts is still loaded remotely (very reliable, standard practice) — everything else needed for a correct render is now self-contained.

## Contact form
The form is currently client-side only (shows a success message and resets). Connect it to a production form/email backend before using it for live enquiries.
