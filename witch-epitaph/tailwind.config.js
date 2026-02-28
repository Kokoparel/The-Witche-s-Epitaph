/**
 * tailwind.config.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Tailwind configuration for the Witch's Epitaph Reader.
 *
 * Key additions:
 *  - fontFamily extension so `font-cinzel` and `font-playfair` are available
 *    as Tailwind utilities (complements the @layer utilities block in index.css)
 *  - content paths cover all JSX and JS files inside /src
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** @type {import('tailwindcss').Config} */
export default {
  // ── Purge paths: Tailwind only keeps classes that appear in these files ──
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      // Register the two Google Fonts so they can be used as Tailwind classes:
      // font-cinzel   → Cinzel (gothic display headings)
      // font-playfair → Playfair Display (elegant body serif)
      fontFamily: {
        cinzel:   ['"Cinzel"', "serif"],
        playfair: ['"Playfair Display"', "Georgia", "serif"],
      },

      // Custom drop-shadow for the pulsing red glow on special lines
      dropShadow: {
        "red-glow":  "0 0 8px rgba(239, 68, 68, 0.8)",
        "gold-glow": "0 0 12px rgba(217, 119, 6, 0.7)",
      },
    },
  },

  plugins: [],
};
