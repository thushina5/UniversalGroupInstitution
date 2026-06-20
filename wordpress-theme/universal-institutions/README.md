# Universal Institutions — WordPress Theme

A premium educational-institution WordPress theme that mirrors the Next.js build: glassmorphism, animated hero, course cards, animated placement stats, testimonials slider, faculty grid, gallery and a working contact form. No page builder or paid plugins required.

**Brand palette:** Primary navy `#0A2E65` · Secondary gold `#FDB913` · white background.

## Requirements

- WordPress 6.0+
- PHP 7.4+

## Installation

### Option A — Upload via the WordPress admin
1. Zip the **`universal-institutions`** folder (the folder that contains `style.css`).
2. WP Admin → **Appearance → Themes → Add New → Upload Theme**.
3. Choose the zip, click **Install Now**, then **Activate**.

### Option B — Copy into the themes folder
1. Copy the `universal-institutions` folder into `wp-content/themes/`.
2. WP Admin → **Appearance → Themes** → activate **Universal Institutions**.

### Make the homepage show the design
The homepage renders automatically via `front-page.php`. If you set a static front page:
**Settings → Reading → Your homepage displays → A static page** and pick any page — the theme's `front-page.php` takes priority and shows all sections.

## What's included

```
universal-institutions/
  style.css                 # Theme header + full design system (all CSS)
  functions.php             # Asset enqueue, SEO meta + JSON-LD, theme supports
  header.php  footer.php    # Glass navbar + footer
  front-page.php  index.php # Homepage composition
  inc/
    content.php             # All editable content + inline SVG icon helper
    contact-handler.php     # Secure admin-post form handler (nonce + wp_mail)
  template-parts/
    hero.php  marquee.php  courses.php  placements.php
    admissions.php  testimonials.php  faculty.php
    gallery.php  contact.php
  assets/js/main.js         # Nav, scroll-reveal, counters, slider, validation
```

## Editing content

All copy lives in **`inc/content.php`** as simple PHP arrays — courses, stats,
recruiters, testimonials, faculty and gallery. Edit the text/values there and
the sections update everywhere. (This is the same content authored for the
Next.js version.)

## Contact form

- Posts to `admin-post.php` with a WordPress **nonce** and server-side validation.
- On success it emails the site admin (`wp_mail`) and redirects back with a
  success banner. Hook your CRM at the `TODO` in `inc/contact-handler.php`.
- For reliable delivery on a live server, install an SMTP plugin (e.g. WP Mail SMTP).

## Notes

- Demo images load from Unsplash & pravatar — replace with media-library uploads
  for production (and add a `screenshot.png`, 1200×900, for the theme preview).
- Animations use IntersectionObserver + CSS, and respect `prefers-reduced-motion`.
- SEO: title-tag support, meta description, Open Graph/Twitter tags and
  `CollegeOrUniversity` JSON-LD are output from `functions.php`. Pair with a
  plugin like Yoast/Rank Math for sitemaps if desired.

## Don't have WordPress locally?

Easiest local setup on Windows:
1. Install **Local** (localwp.com) — free, one-click WordPress.
2. Create a site, then drop this `universal-institutions` folder into the
   site's `app/public/wp-content/themes/` directory.
3. Activate the theme from the dashboard.
