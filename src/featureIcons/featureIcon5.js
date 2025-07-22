import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export function createCard5Animation(card) {
  const line = card.querySelector('[feature-icon-5="line"]');

  if (!line) return { timeline: null };

  // Изначально устанавливаем линию как невидимую
  gsap.set(line, { drawSVG: "0%" });

  const timeline = gsap
    .timeline({ paused: true })
    .to(line, {
      duration: 0.8,
      drawSVG: "0% 100%",
      ease: "power2.out",
    })
    .to(line, {
      duration: 0.8,
      drawSVG: "100% 100%", // Стирается с начала (от 0% к 100%)
      ease: "power2.out",
    });

  return { timeline, forwardOnly: true };
}
