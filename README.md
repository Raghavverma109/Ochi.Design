
# Ochi.Design — Local Clone (analysis)

This repository is a local clone / recreation of the public site https://ochi.design/ and contains React + Vite source used to reproduce layout and several custom animations.

**Quick Links**
- **App entry:** [src/App.jsx](src/App.jsx)
- **Render / boot:** [src/main.jsx](src/main.jsx)
- **Components:** [src/components](src/components) (see below for highlights)

**Purpose of this README**: explain the project structure, call out where the animations live, note implementation details and small bugs, and provide run instructions and improvement suggestions.

**Project structure (high level)**
- **`src/App.jsx`**: top-level composition of the site. It imports `LocomotiveScroll` (but currently constructs it directly in the module body), and renders the major components.
- **`src/main.jsx`**: Vite/React entry that mounts the app.
- **`src/components/Navbar.jsx`**: header and nav links with an inline SVG logo.
- **`src/components/LandingPage.jsx`**: hero area using `framer-motion` for a small reveal animation and layout for the hero text.
- **`src/components/Marquee.jsx`**: large animated marquee using `framer-motion` (infinite linear motion).
- **`src/components/Eye.jsx`** and **`src/components/StartProject.jsx`**: both implement a mouse-driven eye animation (tracking mouse position and rotating an inner element). `Eye.jsx` also applies a scroll-based translate for parallax.
- **`src/components/FeaturedHeading.jsx`**, **`FeaturedCard.jsx`**, **`Cards.jsx`**, **`Footer.jsx`**: layout and content sections. `FeaturedCard.jsx` is partially summarized in the workspace — it uses `useAnimation()` (framer-motion) and likely contains the per-card hover animations.

Key libraries
- **Framer Motion**: used in `Marquee.jsx`, `LandingPage.jsx`, and likely `FeaturedCard.jsx` for timeline and hover animations.
- **Locomotive Scroll**: imported in `App.jsx`. The repo uses `data-scroll` attributes across components for LocomotiveScroll-parallax bindings, but Locomotive is not fully initialized in a React-friendly way yet.

Notable animation patterns
- **Marquee**: continuous horizontal text loop implemented with `framer-motion` using `animate` + `repeat: Infinity` and `linear` easing.
- **Hero reveal**: `LandingPage.jsx` animates a small image block width using `initial`/`animate` props in `framer-motion`.
- **Mouse-driven eyes**: `Eye.jsx` and `StartProject.jsx` both listen for `mousemove` and compute angle via `Math.atan2` then set component state (`rotate`). The components then rotate an inner element to point towards the cursor.
- **Parallax on scroll**: `Eye.jsx` reads `window.scrollY` and applies a small `translateY` to the eye container for parallax.

Implementation notes & issues to address
- **LocomotiveScroll initialization**: `App.jsx` currently does `const locomotiveScroll = new LocomotiveScroll();` in the component body. This should be done inside a `useEffect` with proper options and a scroll container reference (and cleaned up on unmount). See LocomotiveScroll docs for `el` and `smooth` options.
- **Duplicated mouse logic**: both `Eye.jsx` and `StartProject.jsx` implement similar `mousemove` handlers. Consider extracting into a shared hook (e.g. `usePointerAngle`) and throttle / rAF the updates to reduce rerenders.
- **Potential bugs / typos**:
	- In `src/components/Eye.jsx` the class string contains an extra bracket near the container: `... items-center]` — this will output an incorrect className.
	- `src/App.jsx` imports `LocomotiveScroll` but doesn't pass an element nor call `update()` after mount — the scroll attributes (`data-scroll`) depend on proper initialization.
	- `FeaturedCard.jsx` in the workspace was summarized; ensure it imports `useAnimation` and `motion` from `framer-motion` and that the hover handlers run inside `useEffect` or event callbacks.
	- Some custom font family names in className values may not match loaded fonts and may need `@font-face` or external import.

Assets and external dependencies
- Many images are hotlinked to the original site (`ochi.design`) — e.g. images in `App.jsx` and background URLs in `Eye.jsx`. If you intend to host locally, download and add them to `src/assets` and update paths.

How to run (development)
1. Install dependencies (from project root):

```bash
npm install
```

2. Start dev server (Vite):

```bash
npm run dev
```

3. Open the local dev URL printed by Vite (usually `http://localhost:5173`).

Build / preview

```bash
npm run build
npm run preview
```

Recommendations / next steps
- Initialize LocomotiveScroll in `App.jsx` inside a `useEffect`, and target a `data-scroll-container` wrapper element.
- Consolidate mouse tracking logic into a hook and use `requestAnimationFrame` or a small throttle to reduce setState frequency.
- Fix the small JSX / className typos (e.g. unmatched bracket in `Eye.jsx`).
- Validate `FeaturedCard.jsx` fully (ensure framer-motion `useAnimation` usage is correct) and add missing imports if necessary.
- Consider bundling or self-hosting images and registering custom fonts to ensure consistent rendering.

Credits & license
- This repository reproduces the layout/animations of the public site `https://ochi.design/` for learning / experimentation. If you plan to publish or deploy, ensure you have rights to use assets and content from the original site.

If you want, I can:
- Run a quick code sweep to apply the `LocomotiveScroll` initialization fix and the `Eye.jsx` className bug.
- Extract a shared `usePointerAngle` hook for the mouse-eye logic.

— End of analysis
