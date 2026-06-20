# Universal Institutions — Elementor Template

`universal-institutions-home.json` is an importable **Elementor page template** that
recreates the homepage (hero, stats counters, course icon-boxes, admissions CTA,
testimonials, faculty, gallery, contact) using **native Elementor widgets** — so
every section is editable by drag-and-drop.

## Requirements
- WordPress 6.0+
- **Elementor** (free) installed & active
- Recommended: any theme (Hello Elementor is ideal), Google Fonts (Inter + Poppins)

## How to import

1. WP Admin → **Templates → Saved Templates**.
2. Click **Import Templates** (top of the page).
3. Choose `universal-institutions-home.json` → **Import Now**.
4. Open a page with Elementor → **⌃ Add Template** (folder icon) → **My Templates**
   → **Insert** "Universal Institutions — Home".
5. Set that page as your homepage: **Settings → Reading → A static page**.

## What's native vs. needs a tweak

| Section | Built with | Notes |
|---|---|---|
| Hero | Section bg + Heading + Text + Buttons + Image | Animated blobs/glass need Custom CSS (Elementor Pro) |
| Placement stats | **Counter** widgets | Animate-on-scroll built in ✓ |
| Courses | **Icon Box** ×6 | FontAwesome icons (microchip, briefcase…) |
| Admissions | Heading + Text + Button + Icon Boxes | ✓ |
| Testimonials | **Testimonial** ×2 | For a slider, use Elementor Pro's *Testimonial Carousel* |
| Faculty | **Image Box** ×4 | ✓ |
| Gallery | **Image Gallery** | ✓ (lightbox built in) |
| Contact form | **HTML** widget (basic form) | Replace with **Elementor Pro Form**, or a Contact Form 7 / WPForms shortcode |

## Pro-only pieces (free workarounds noted)
- **Form widget** → use the included HTML form, or Contact Form 7 (free) shortcode.
- **Testimonial Carousel / sliders** → free version shows them side-by-side.
- **Custom CSS per element** (glass blur, hero blobs) → add globally via
  **Appearance → Customize → Additional CSS** instead.

## Brand setup (do this once)
Elementor → **Site Settings → Global Colors**:
- Primary `#0A2E65` · Secondary/Accent `#FDB913` · Text `#0F172A`
**Global Fonts:** Primary **Poppins**, Secondary **Inter**.

## Tip
The hand-coded **`universal-institutions`** theme in the parent folder gives you the
exact pixel-perfect design (glassmorphism, animated hero, custom slider) with zero
plugins. Use this Elementor template instead if you'd rather edit visually and don't
need every effect 1:1.
