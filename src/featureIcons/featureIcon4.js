import { gsap } from "gsap";

export function createCard4Animation(card) {
  const icon = card.querySelector("[feature-icon-4]");

  if (!icon) return { timeline: null };

  const timeline = gsap.timeline({ paused: true }).to(icon, {
    duration: 0.5,
    rotation: 45,
    transformOrigin: "center",
    ease: "power2.out",
  });

  return { timeline };
}
