import { gsap } from "gsap";

export function createCard3Animation(card) {
  const sun = card.querySelector('[feature-icon-3="sun"]');

  if (!sun) return { timeline: null };

  const timeline = gsap.timeline({ paused: true, repeat: -1 }).to(sun, {
    duration: 3.5,
    rotation: 360,
    transformOrigin: "center",
    ease: "none",
  });

  return { timeline, forwardOnly: true };
}
