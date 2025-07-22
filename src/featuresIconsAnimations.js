import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { createCard1Animation } from "./featureIcons/featureIcon1.js";
import { createCard2Animation } from "./featureIcons/featureIcon2.js";
import { createCard3Animation } from "./featureIcons/featureIcon3.js";
import { createCard4Animation } from "./featureIcons/featureIcon4.js";
import { createCard5Animation } from "./featureIcons/featureIcon5.js";

gsap.registerPlugin(DrawSVGPlugin);

export function featureIcons() {
  const featureCards = document.querySelectorAll("[data-feature-card]");

  featureCards.forEach((card) => {
    const cardNumber = card.getAttribute("data-feature-card");
    let timeline = null;
    let isForwardOnly = false;

    // Создаем timeline для каждой карточки при инициализации
    if (cardNumber === "1") {
      const animation = createCard1Animation(card);
      timeline = animation.timeline;
      isForwardOnly = animation.forwardOnly;
    } else if (cardNumber === "2") {
      const animation = createCard2Animation(card);
      timeline = animation.timeline;
    } else if (cardNumber === "3") {
      const animation = createCard3Animation(card);
      timeline = animation.timeline;
    } else if (cardNumber === "4") {
      const animation = createCard4Animation(card);
      timeline = animation.timeline;
    } else if (cardNumber === "5") {
      const animation = createCard5Animation(card);
      timeline = animation.timeline;
      isForwardOnly = animation.forwardOnly;
    }

    card.addEventListener("mouseenter", () => {
      if (timeline && !timeline.isActive()) {
        if (isForwardOnly) {
          timeline.restart(); // Всегда начинаем с начала
        } else {
          timeline.play();
        }
      }
    });

    card.addEventListener("mouseleave", () => {
      if (timeline && !isForwardOnly) {
        timeline.reverse();
      }
      // Для forwardOnly анимации ничего не делаем при mouseleave
    });
  });
}
