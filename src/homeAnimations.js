import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createHeroRevealAnimation } from "./homeHeroReveal.js";
import { initHeroScrollAnimations } from "./homeHeroOnScroll.js";
import { initHeadingsAnimation } from "./headingsAnimation.js";
import { initSectionsAnimations } from "./homeSectionsAnimations.js";
import { initLinesAnimation } from "./linesAnimation.js";
import { initFooterAnimation } from "./footerAnimation.js";
import { featureIcons } from "./featuresIconsAnimations.js";
gsap.registerPlugin(ScrollTrigger);

//Load page always from top
window.history.scrollRestoration = "manual";

function initAllAnimations() {
  const masterHeroTl = createHeroRevealAnimation();

  setTimeout(() => {
    masterHeroTl.play();
    initHeroScrollAnimations();
    initHeadingsAnimation();
    initSectionsAnimations();
    initLinesAnimation();
    initFooterAnimation();
    featureIcons();
  }, 200);

  // Safari-specific ScrollTrigger refresh
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);

  setTimeout(() => {
    if (typeof lenis !== "undefined") {
      lenis.scrollTo(0, { immediate: true });
    }
  }, 100);

  setTimeout(() => {
    initAllAnimations();
  }, 200);
});

window.addEventListener("load", () => {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
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
