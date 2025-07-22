import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export function createCard1Animation(card) {
  const eye = card.querySelector('[feature-icon-1="eye"]');
  const smile = card.querySelector('[feature-icon-1="smile"]');

  if (!eye || !smile) return { timeline: null, forwardOnly: true };

  const timeline = gsap
    .timeline({ paused: true })
    // Моргание глаза
    .to(eye, {
      duration: 0.15,
      scaleY: 0.1,
      transformOrigin: "center",
      ease: "power2.inOut",
    })
    .to(eye, {
      duration: 0.15,
      scaleY: 1,
      ease: "power2.inOut",
    })
    // Изменение улыбки
    .to(
      smile,
      {
        duration: 0.3,
        drawSVG: "20% 100%",
        ease: "power2.out",
      },
      0
    )
    // Пауза
    .to({}, { duration: 0.2 })
    // Возврат улыбки обратно
    .to(smile, {
      duration: 0.3,
      drawSVG: "0% 100%",
      ease: "power2.out",
    });

  return { timeline, forwardOnly: true };
}
