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
- `assets/images/magizh-logo.png` — cleaned Magizh Technologies logo (transparent background)
- `assets/images/favicon.png`, `assets/images/apple-touch-icon.png` — browser tab / home screen icons
- `assets/images/nigith-profile.jpg` — supplied profile image
- `style.css`
- `app.js`

## Features
- Custom illustrated device mockups (Android, iOS, Web, Android TV, Smart TV, Windows, Linux, Mac) on the homepage Platforms section — self-contained inline SVG, no extra image requests
- Scroll-reveal animations, animated stat counters, sticky header, scroll progress bar, back-to-top button
- Animated hamburger menu with slide-down mobile nav
- Portfolio page filter pills (All / Kotlin / Java / MVVM / MVC / Offline-First)
- Contact form shows an inline success card on submit instead of a browser alert
- Respects `prefers-reduced-motion`

## GitHub Pages
Upload all files to the repository root. The HTML pages reference `style.css` and `app.js` from the root, so do not move them into an `assets` folder unless the HTML paths are changed.

The site uses Google Fonts and Simple Icons CDN for technology/platform/social icons and the device mockup logos. An internet connection is required for those remote resources.

## Contact form
The form is currently client-side only (shows a success message and resets). Connect it to a production form/email backend before using it for live enquiries.
