import { gsap } from "gsap";

export function createCard2Animation(card) {
  const blocks = card.querySelectorAll("[feature-icon-2] path");

  if (blocks.length !== 4) return { timeline: null };

  const [topBlock, rightBlock, bottomBlock, leftBlock] = blocks;

  const timeline = gsap
    .timeline({
      paused: true,
      defaults: { duration: 0.45, ease: "power2.inOut" },
    })
    .to(topBlock, { y: 1.75, x: 1.75 }, 0)
    .to(rightBlock, { x: -1.75, y: 1.75 }, 0)
    .to(bottomBlock, { y: -1.75, x: -1.75 }, 0)
    .to(leftBlock, { x: 1.75, y: -1.75 }, 0);

  return { timeline };
}
