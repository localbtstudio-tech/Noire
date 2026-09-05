import "./style.css";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ========================================
// LENIS — Smooth Scroll
// ========================================

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  smoothTouch: false,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// ========================================
// NOIRÉ — Application
// ========================================

const app = document.querySelector("#app");

app.innerHTML = `




  <header class="nav">
    <a href="#" class="logo">NOIRÉ</a>

    <div class="nav-meta">
      <span>PARIS — 2026</span>
      <button class="menu-toggle">MENU</button>
    </div>
  </header>

  <main class="horizontal-wrapper">
    <div class="horizontal-track">

      <!-- HERO -->
      <section class="panel hero">
        <span class="section-number">01 / 10</span>

        <div class="hero-content">
          <p class="eyebrow">ATELIER NOIRÉ</p>

          <h1>NOIRÉ</h1>

          <p class="hero-subtitle">
            WEAR THE UNEXPECTED
          </p>
        </div>

        <div class="hero-image image-placeholder">
          LOOK 01
        </div>
      </section>


      <!-- MANIFESTO -->
      <section class="panel manifesto">
        <span class="section-number">02 / 10</span>

        <div class="manifesto-text">
          <p>WE DON'T</p>
          <p>FOLLOW</p>
          <p>TRENDS.</p>
          <p>WE CREATE</p>
          <p>THEM.</p>
        </div>
      </section>


      <!-- COLLECTION -->
      <section class="panel collection">
        <div class="section-heading">
          <span>03 / 10</span>
          <h2>COLLECTION</h2>
        </div>

        <div class="collection-grid">

          <article class="fashion-card">
            <div class="image-placeholder">
              LOOK 01
            </div>
            <span>01 — OBSIDIAN</span>
          </article>

          <article class="fashion-card featured-card">
            <div class="image-placeholder">
              LOOK 02
            </div>
            <span>02 — SILHOUETTE</span>
          </article>

          <article class="fashion-card">
            <div class="image-placeholder">
              LOOK 03
            </div>
            <span>03 — NOCTURNE</span>
          </article>

        </div>
      </section>


      <!-- FEATURED -->
      <section class="panel featured">
        <span class="section-number">04 / 10</span>

        <div class="featured-copy">
          <p class="eyebrow">THE PIECE</p>

          <h2>
            FORM<br>
            IN<br>
            MOTION
          </h2>
        </div>

        <div class="featured-product image-placeholder">
          FEATURED PIECE
        </div>
      </section>


      <!-- ATELIER -->
      <section class="panel atelier">
        <span class="section-number">05 / 10</span>

        <div class="atelier-image image-placeholder">
          ATELIER
        </div>

        <div class="atelier-copy">
          <p class="eyebrow">THE ATELIER</p>

          <h2>
            CRAFTED<br>
            IN<br>
            SILENCE.
          </h2>
        </div>
      </section>


      <!-- EDITORIAL -->
      <section class="panel editorial">
        <span class="section-number">06 / 10</span>

        <div class="editorial-title">
          <h2>EDITORIAL</h2>
        </div>

        <div class="editorial-images">

          <div class="editorial-image image-placeholder">
            01
          </div>

          <div class="editorial-image image-placeholder">
            02
          </div>

          <div class="editorial-image image-placeholder">
            03
          </div>

        </div>
      </section>


      <!-- STORY -->
      <section class="panel story">
        <span class="section-number">07 / 10</span>

        <div class="story-content">
          <p class="eyebrow">OUR STORY</p>

          <h2>
            LUXURY IS<br>
            NOT WHAT<br>
            YOU SEE.
          </h2>

          <p class="story-description">
            It is what remains when everything unnecessary disappears.
          </p>
        </div>
      </section>


      <!-- FINAL COLLECTION -->
      <section class="panel final-collection">
        <span class="section-number">08 / 10</span>

        <div class="final-title">
          <p class="eyebrow">NEW EDITION</p>

          <h2>
            NOIRÉ<br>
            2026
          </h2>
        </div>

        <div class="final-image image-placeholder">
          NEW EDITION
        </div>
      </section>


      <!-- CTA -->
      <section class="panel cta">
        <span class="section-number">09 / 10</span>

        <div class="cta-content">
          <p class="eyebrow">ENTER THE WORLD</p>

          <h2>
            WEAR THE<br>
            UNEXPECTED.
          </h2>

          <a href="#" class="cta-button">
            EXPLORE COLLECTION
          </a>
        </div>
      </section>


      <!-- FOOTER -->
      <footer class="panel footer">
        <span class="section-number">10 / 10</span>

        <div class="footer-top">

          <div class="footer-logo">
            NOIRÉ
          </div>

          <div class="footer-links">
            <a href="#">INSTAGRAM</a>
            <a href="#">CONTACT</a>
            <a href="#">LEGAL</a>
          </div>

        </div>

        <div class="footer-bottom">
          <span>PARIS — 2026</span>
          <span>© NOIRÉ</span>
        </div>
      </footer>

    </div>
  </main>
`;

// ========================================
// HORIZONTAL SCROLL
// ========================================

const wrapper = document.querySelector(".horizontal-wrapper");


// ========================================
// IMAGE SYSTEM
// ========================================

const imageSources = {
  ".hero-image":
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=90",

  ".fashion-card:nth-child(1) .image-placeholder":
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=90",

  ".fashion-card:nth-child(2) .image-placeholder":
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=90",

  ".fashion-card:nth-child(3) .image-placeholder":
    "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=90",

  ".featured-product":
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=90",

  ".atelier-image":
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1400&q=90",

  ".editorial-image:nth-child(1)":
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=90",

  ".editorial-image:nth-child(2)":
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=90",

  ".editorial-image:nth-child(3)":
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=90",

  ".final-image":
    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1400&q=90",
};

Object.entries(imageSources).forEach(([selector, source]) => {
  const element = document.querySelector(selector);

  if (!element) return;

  element.classList.add("real-image");

  element.style.backgroundImage = `url("${source}")`;
  element.style.backgroundSize = "cover";
  element.style.backgroundPosition = "center";
});


const track = document.querySelector(".horizontal-track");

const getScrollDistance = () => {
  return track.scrollWidth - window.innerWidth;
};

gsap.to(track, {
  x: () => -getScrollDistance(),

  ease: "none",

  scrollTrigger: {
    trigger: wrapper,

    start: "top top",

    end: () => `+=${getScrollDistance()}`,

    pin: true,

    scrub: 1,

    invalidateOnRefresh: true,
  },
});

// ========================================
// REFRESH
// ========================================

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

// ========================================
// NOIRÉ — CINEMATIC ANIMATIONS
// ========================================

const sections = gsap.utils.toArray(".panel");

// ----------------------------------------
// HERO
// ----------------------------------------

const heroTitle = document.querySelector(".hero h1");
const heroImage = document.querySelector(".hero-image");
const heroSubtitle = document.querySelector(".hero-subtitle");
const heroEyebrow = document.querySelector(".hero .eyebrow");

gsap.fromTo(
  heroTitle,
  {
    x: 180,
    y: 120,
    rotation: 8,
    opacity: 0,
    scale: 0.85,
  },
  {
    x: 0,
    y: 0,
    rotation: 0,
    opacity: 1,
    scale: 1,
    duration: 1.6,
    ease: "power4.out",
  }
);

gsap.fromTo(
  heroImage,
  {
    x: 220,
    y: -100,
    rotation: -7,
    scale: 0.85,
    opacity: 0,
  },
  {
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    opacity: 1,
    duration: 1.8,
    delay: 0.15,
    ease: "power4.out",
  }
);

gsap.fromTo(
  heroEyebrow,
  {
    x: -80,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    delay: 0.4,
    ease: "power3.out",
  }
);

gsap.fromTo(
  heroSubtitle,
  {
    y: 40,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.65,
    ease: "power3.out",
  }
);


// ----------------------------------------
// MANIFESTO
// ----------------------------------------

const manifestoWords = gsap.utils.toArray(
  ".manifesto-text p"
);

gsap.fromTo(
  manifestoWords,
  {
    x: (index) => (index % 2 === 0 ? -180 : 180),
    y: (index) => index * 35,
    opacity: 0,
    rotation: (index) => (index % 2 === 0 ? -5 : 5),
  },
  {
    x: 0,
    y: 0,
    opacity: 1,
    rotation: 0,
    stagger: 0.08,

    scrollTrigger: {
      trigger: ".manifesto",
      containerAnimation: horizontalTween,
      start: "left 80%",
      end: "right 30%",
      scrub: 1,
    },
  }
);


// ----------------------------------------
// COLLECTION
// ----------------------------------------

const fashionCards = gsap.utils.toArray(
  ".fashion-card"
);

gsap.fromTo(
  fashionCards,
  {
    y: 180,
    opacity: 0,
    rotation: (index) => (index - 1) * 5,
  },
  {
    y: 0,
    opacity: 1,
    rotation: 0,
    stagger: 0.15,

    scrollTrigger: {
      trigger: ".collection",
      containerAnimation: horizontalTween,
      start: "left 85%",
      end: "center center",
      scrub: 1,
    },
  }
);


// ----------------------------------------
// FEATURED PIECE
// ----------------------------------------

gsap.fromTo(
  ".featured-copy",
  {
    x: -180,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,

    scrollTrigger: {
      trigger: ".featured",
      containerAnimation: horizontalTween,
      start: "left 90%",
      end: "center center",
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".featured-product",
  {
    x: 220,
    y: 120,
    rotation: 8,
    scale: 0.8,
    opacity: 0,
  },
  {
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    opacity: 1,

    scrollTrigger: {
      trigger: ".featured",
      containerAnimation: horizontalTween,
      start: "left 90%",
      end: "center center",
      scrub: 1,
    },
  }
);


// ----------------------------------------
// ATELIER — CORNER MOTION
// ----------------------------------------

gsap.fromTo(
  ".atelier-image",
  {
    x: -180,
    y: 160,
    rotation: -7,
    scale: 0.82,
    opacity: 0,
  },
  {
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    opacity: 1,

    scrollTrigger: {
      trigger: ".atelier",
      containerAnimation: horizontalTween,
      start: "left 85%",
      end: "center center",
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".atelier-copy",
  {
    x: 160,
    y: -120,
    rotation: 5,
    opacity: 0,
  },
  {
    x: 0,
    y: 0,
    rotation: 0,
    opacity: 1,

    scrollTrigger: {
      trigger: ".atelier",
      containerAnimation: horizontalTween,
      start: "left 85%",
      end: "center center",
      scrub: 1,
    },
  }
);


// ----------------------------------------
// EDITORIAL PARALLAX
// ----------------------------------------

const editorialImages = gsap.utils.toArray(
  ".editorial-image"
);

editorialImages.forEach((image, index) => {
  gsap.fromTo(
    image,
    {
      y: index % 2 === 0 ? 120 : -100,
      rotation: index % 2 === 0 ? -4 : 4,
    },
    {
      y: index % 2 === 0 ? -120 : 100,
      rotation: 0,

      scrollTrigger: {
        trigger: ".editorial",
        containerAnimation: horizontalTween,
        start: "left 100%",
        end: "right 0%",
        scrub: 1,
      },
    }
  );
});


// ----------------------------------------
// STORY
// ----------------------------------------

gsap.fromTo(
  ".story-content h2",
  {
    x: 220,
    opacity: 0,
    scale: 0.85,
  },
  {
    x: 0,
    opacity: 1,
    scale: 1,

    scrollTrigger: {
      trigger: ".story",
      containerAnimation: horizontalTween,
      start: "left 90%",
      end: "center center",
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".story-description",
  {
    x: -120,
    y: 80,
    opacity: 0,
  },
  {
    x: 0,
    y: 0,
    opacity: 1,

    scrollTrigger: {
      trigger: ".story",
      containerAnimation: horizontalTween,
      start: "left 70%",
      end: "center center",
      scrub: 1,
    },
  }
);


// ----------------------------------------
// FINAL COLLECTION
// ----------------------------------------

gsap.fromTo(
  ".final-title",
  {
    x: -200,
    y: 120,
    opacity: 0,
    rotation: -4,
  },
  {
    x: 0,
    y: 0,
    opacity: 1,
    rotation: 0,

    scrollTrigger: {
      trigger: ".final-collection",
      containerAnimation: horizontalTween,
      start: "left 90%",
      end: "center center",
      scrub: 1,
    },
  }
);

gsap.fromTo(
  ".final-image",
  {
    x: 200,
    y: -120,
    scale: 0.8,
    rotation: 6,
    opacity: 0,
  },
  {
    x: 0,
    y: 0,
    scale: 1,
    rotation: 0,
    opacity: 1,

    scrollTrigger: {
      trigger: ".final-collection",
      containerAnimation: horizontalTween,
      start: "left 90%",
      end: "center center",
      scrub: 1,
    },
  }
);


// ----------------------------------------
// FINAL CTA
// ----------------------------------------

gsap.fromTo(
  ".cta-content",
  {
    scale: 0.65,
    opacity: 0,
    y: 100,
  },
  {
    scale: 1,
    opacity: 1,
    y: 0,

    scrollTrigger: {
      trigger: ".cta",
      containerAnimation: horizontalTween,
      start: "left 85%",
      end: "center center",
      scrub: 1,
    },
  }
);


// ----------------------------------------
// FOOTER
// ----------------------------------------

gsap.fromTo(
  ".footer-logo",
  {
    x: -250,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,

    scrollTrigger: {
      trigger: ".footer",
      containerAnimation: horizontalTween,
      start: "left 90%",
      end: "center center",
      scrub: 1,
    },
  }
);

// ========================================
// IMAGE REVEAL SYSTEM
// ========================================

const realImages = gsap.utils.toArray(".real-image");

realImages.forEach((image, index) => {
  gsap.set(image, {
    clipPath: "inset(100% 0% 0% 0%)",
  });

  gsap.to(image, {
    clipPath: "inset(0% 0% 0% 0%)",

    scrollTrigger: {
      trigger: image,
      containerAnimation: horizontalTween,
      start: "left 90%",
      end: "left 45%",
      scrub: 1,
    },
  });

  const direction = index % 2 === 0 ? 1 : -1;

  gsap.fromTo(
    image,
    {
      backgroundPosition: `${50 + direction * 18}% ${50 - direction * 12}%`,
      scale: 1.15,
    },
    {
      backgroundPosition: `${50 - direction * 18}% ${50 + direction * 12}%`,
      scale: 1,

      scrollTrigger: {
        trigger: image,
        containerAnimation: horizontalTween,
        start: "left 100%",
        end: "right 0%",
        scrub: 1.2,
      },
    }
  );
});

// ========================================
// CUSTOM CURSOR
// ========================================

const cursor = document.createElement("div");
cursor.className = "custom-cursor";

document.body.appendChild(cursor);

const cursorDot = document.createElement("div");
cursorDot.className = "cursor-dot";

document.body.appendChild(cursorDot);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let cursorX = mouseX;
let cursorY = mouseY;

window.addEventListener("pointermove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

gsap.ticker.add(() => {
  cursorX += (mouseX - cursorX) * 0.14;
  cursorY += (mouseY - cursorY) * 0.14;

  gsap.set(cursor, {
    x: cursorX,
    y: cursorY,
  });

  gsap.set(cursorDot, {
    x: mouseX,
    y: mouseY,
  });
});

const interactiveElements = document.querySelectorAll(
  "a, button, .fashion-card, .real-image"
);

interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-active");

    gsap.to(cursor, {
      scale: 1.8,
      duration: 0.35,
      ease: "power3.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-active");

    gsap.to(cursor, {
      scale: 1,
      duration: 0.35,
      ease: "power3.out",
    });
  });
});

