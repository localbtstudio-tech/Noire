# NOIRÉ

> A cinematic luxury fashion editorial website focused on minimalism, typography, motion, and immersive visual storytelling.

![NOIRÉ](https://via.placeholder.com/1200x630/080808/F3F1ED?text=NOIR%C3%89)

## ✦ Overview

**NOIRÉ** is a luxury fashion-inspired editorial website designed around a dark, minimal, and cinematic visual identity.

The project combines elegant typography, horizontal scrolling, smooth motion, image transitions, and editorial-style layouts to create an immersive browsing experience.

This project was built as a front-end development and creative interaction experiment, with a strong focus on **visual design, animation, performance, and user experience**.

---

## ✦ Features

* 🖤 Luxury dark-mode aesthetic
* 🎞️ Cinematic horizontal scrolling experience
* ✨ GSAP-powered animations
* 🌊 Smooth scrolling with Lenis
* 🖼️ Editorial image layouts
* 📱 Responsive design
* 🖱️ Custom cursor interactions
* 🎨 Minimal luxury typography
* ⚡ Vite-powered development environment
* 🔄 Scroll-based animations with GSAP ScrollTrigger
* 📐 Responsive layouts for desktop and mobile

---

## ✦ Tech Stack

| Technology   | Purpose                     |
| ------------ | --------------------------- |
| HTML5        | Structure                   |
| CSS3         | Styling & responsive design |
| JavaScript   | Interactions & logic        |
| Vite         | Development & build tooling |
| GSAP         | Animations & ScrollTrigger  |
| Lenis        | Smooth scrolling            |
| Google Fonts | Typography                  |

### Main Libraries

* **GSAP** — animation engine and ScrollTrigger
* **Lenis** — smooth scrolling
* **Vite** — modern frontend tooling

---

## ✦ Design Direction

NOIRÉ follows a minimalist luxury-fashion aesthetic built around:

* Deep black backgrounds
* High-contrast typography
* Serif + sans-serif font pairing
* Large editorial imagery
* Generous spacing
* Smooth transitions
* Horizontal storytelling
* Subtle interaction feedback

The goal is to make the website feel closer to a **digital fashion editorial** than a traditional landing page.

---

## ✦ Website Structure

The experience is divided into several horizontal sections:

```text
01 — Hero
02 — Manifesto
03 — Collection
04 — Featured
05 — Atelier
06 — Editorial
07 — Story
08 — Final Collection
09 — Call To Action
10 — Footer
```

Each section contributes to the overall visual narrative.

---

## ✦ Project Structure

```text
NOIRE/
│
├── public/
│
├── src/
│   ├── main.js
│   ├── style.css
│   └── assets/
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## ✦ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/localbtstudio-tech/Noire.git
```

### 2. Enter the project

```bash
cd Noire
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL in your terminal.

---

## ✦ Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## ✦ Animation System

The website uses **GSAP + ScrollTrigger** to control the main motion system.

The horizontal experience is created by animating the main content track based on the user's vertical scroll position.

Conceptually:

```text
Vertical Scroll
       ↓
   ScrollTrigger
       ↓
   GSAP Timeline
       ↓
Horizontal Track
       ↓
Immersive Sections
```

Additional animations are used for:

* Hero entrance
* Typography reveals
* Image reveals
* Image parallax
* Collection cards
* Editorial transitions
* CTA animations
* Footer interactions

---

## ✦ Smooth Scrolling

**Lenis** is used to create a smoother scrolling experience.

The Lenis scroll loop is synchronized with GSAP's ticker and ScrollTrigger:

```text
User Scroll
     ↓
   Lenis
     ↓
Smooth Scroll Position
     ↓
ScrollTrigger
     ↓
GSAP Animations
```

This allows the animations and scrolling system to work together smoothly.

---

## ✦ Responsive Design

NOIRÉ is designed to adapt to different screen sizes.

The layout includes responsive behavior for:

* Desktop
* Tablet
* Mobile

The desktop experience emphasizes the cinematic horizontal layout, while the mobile layout prioritizes readability, spacing, and usability.

---

## ✦ Performance Considerations

The project was built with a focus on keeping the frontend lightweight.

Key considerations include:

* Vite for optimized builds
* Minimal dependencies
* CSS-based visual effects
* GSAP for controlled animations
* Lazy/optimized visual assets where applicable
* Responsive layouts
* Avoiding unnecessary JavaScript

---

## ✦ Version

### v1.0.0 — Initial Release

**NOIRÉ v1** represents the first complete version of the project.

### Included

* Complete landing page
* Horizontal scrolling system
* GSAP animations
* Lenis smooth scrolling
* Responsive styling
* Editorial sections
* Custom interactions
* Luxury visual identity

---

## ✦ Future Improvements

Possible future iterations may include:

* [ ] Advanced page transitions
* [ ] More sophisticated image loading
* [ ] Product detail pages
* [ ] Interactive product filtering
* [ ] WebGL / 3D visual effects
* [ ] Improved mobile interactions
* [ ] Accessibility improvements
* [ ] Performance optimization
* [ ] CMS integration
* [ ] E-commerce functionality

---

## ✦ Credits

Designed and developed by **Hamza Weslati**.

### Developer

**Hamza Weslati**

IT Student · Web Developer

GitHub:
https://github.com/localbtstudio-tech

---

## ✦ License

This project was created for **educational, experimental, and portfolio purposes**.

The design, branding, and visual direction of NOIRÉ are part of this personal project.

---

<p align="center">
  <strong>NOIRÉ</strong>
  <br>
  <sub>Minimalism · Motion · Fashion · Digital Experience</sub>
</p>
