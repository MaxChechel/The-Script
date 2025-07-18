import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createHeroRevealAnimation } from "./homeHeroReveal.js";
import { initHeroScrollAnimations } from "./homeHeroOnScroll.js";
import { initHeadingsAnimation } from "./headingsAnimation.js";
import { initSectionsAnimations } from "./homeSectionsAnimations.js";

gsap.registerPlugin(ScrollTrigger);

//Load page always from top
window.history.scrollRestoration = "manual";

window.onload = () => {
  window.scrollTo(0, 0);

  setTimeout(() => {
    lenis.scrollTo(0, { immediate: true });
  }, 10);

  // Force ScrollTrigger to recalculate everything
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);

  const masterHeroTl = createHeroRevealAnimation();
  setTimeout(() => {
    masterHeroTl.play();
  }, 200);

  setTimeout(() => {
    initHeroScrollAnimations();
  }, 300);

  setTimeout(() => {
    initHeadingsAnimation();
  }, 400);

  setTimeout(() => {
    initSectionsAnimations();
  }, 500);
};
