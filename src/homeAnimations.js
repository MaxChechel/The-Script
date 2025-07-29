import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createHeroRevealAnimation } from "./home-animations/homeHeroReveal.js";
import { initHeroScrollAnimations } from "./home-animations/homeHeroOnScroll.js";
import { initHeadingsAnimation } from "./headingsAnimation.js";
import { initSectionsAnimations } from "./home-animations/homeSectionsAnimations.js";
import { initLinesAnimation } from "./linesAnimation.js";
import { initFooterAnimation } from "./footerAnimation.js";
import { featureIcons } from "./featuresIconsAnimations.js";
import { bgLoop } from "./home-animations/bgLoop.js";
import { initFloatingCards } from "./home-animations/floatingCards.js";
gsap.registerPlugin(ScrollTrigger);

// Load page always from top
window.addEventListener("beforeunload", () => {
  history.scrollRestoration = "manual";
});

function initAllAnimations() {
  const masterHeroTl = createHeroRevealAnimation();

  masterHeroTl.play();
  initHeroScrollAnimations();
  initHeadingsAnimation();
  initSectionsAnimations();
  initLinesAnimation();
  initFooterAnimation();
  featureIcons();
  bgLoop();
  initFloatingCards();

  // Values cards click
  document.querySelectorAll(".values_card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-active");
    });
  });

  // Final ScrollTrigger refresh after all animations are initialized
  ScrollTrigger.refresh();
}

// Scroll to top ASAP on DOM ready
window.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
  if (typeof lenis !== "undefined") {
    lenis.scrollTo(0, { immediate: true });
  }
});

// Wait until everything is fully loaded: images, fonts, layout
window.addEventListener("load", () => {
  const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

  fontsReady.then(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initAllAnimations();
      });
    });
  });
});

// Safari-specific fix for scroll restoration
if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      window.scrollTo(0, 0);
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  });
}
