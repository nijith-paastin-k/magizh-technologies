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

## What changed in this update

**Fixed — icons/logo no longer depend on an external CDN.**
Every icon that previously hotlinked `cdn.simpleicons.org` (tech stack icons,
service icons, social icons, and the small OS logos inside the homepage
device mockups) is now a self-hosted inline SVG, sourced from the official
`simple-icons` npm package. Nothing on the site depends on a third-party
icon CDN staying up or a browser allowing that request through — this was
the root cause of icons/logos intermittently not rendering. Source copies of
each icon are kept in `assets/icons/` for reference/reuse.
The Windows and LinkedIn marks aren't in the current simple-icons dataset
(both were removed at the companies' request), so those two are simplified
generic glyphs rather than the exact trademarked logos.

**Added — advanced animation/interaction layer** (bottom of `style.css` /
`app.js`, clearly commented):
- Magnetic buttons — primary/secondary buttons subtly pull toward the cursor
- 3D tilt on hover for service cards, project cards, and platform/device cards
- Animated aurora gradient blobs drifting behind the hero
- Cursor-tracked spotlight glow on the hero card
- Animated underline on nav links, shine sweep on primary buttons
- Icon color/scale transitions on hover across service, tech, and social icons
- New scrolling tech marquee strip (Home page, under the hero) showcasing the
  tech stack with self-hosted icons
- Smooth accordion expand for FAQ answers, smooth fade/scale for portfolio
  filtering
- Everything respects `prefers-reduced-motion`

**Existing features retained:** scroll-reveal animations, animated stat
counters, sticky header, scroll progress bar, back-to-top button, animated
hamburger menu, portfolio filter pills, inline contact-form success state.

## Assets
- `assets/images/magizh-logo.png` — logo (transparent background)
- `assets/images/favicon.png`, `assets/images/apple-touch-icon.png` — browser tab / home screen icons
- `assets/images/nigith-profile.jpg` — profile image
- `assets/icons/*.svg` — source copies of the self-hosted brand/tech icons
- `style.css`
- `app.js`

## GitHub Pages
Upload **all** files and folders (including `assets/`) to the repository
root, preserving the folder structure exactly — the HTML references
`assets/images/...` and (inline, no separate file needed) the icon SVGs.
After pushing, confirm the files actually appear in the GitHub web UI at
your repo path before assuming the deploy worked; GitHub Pages rebuilds
take a minute or two, and browsers cache aggressively, so hard-refresh
(Ctrl/Cmd+Shift+R) when checking.

The site uses Google Fonts (only remaining external dependency). Icons are
fully self-hosted and need no internet connection to render correctly.

## Contact form
The form is currently client-side only (shows a success message and
resets). Connect it to a production form/email backend before using it for
live enquiries.
