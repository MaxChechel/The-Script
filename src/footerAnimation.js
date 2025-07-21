import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function initFooterAnimation() {
  const footer = document.querySelector(".footer_wrap");

  if (!footer) return;

  const h2 = footer.querySelector("h3");
  let h2Split;

  h2Split = new SplitText(h2, { type: "lines" });
  gsap.set(h2Split.lines, { y: 50, opacity: 0 });

  // Настройка начальных состояний
  gsap.set(".footer_wrap .button_main_wrap", { y: 30, opacity: 0 });
  gsap.set(".footer_wrap .footer_column", { y: 40, opacity: 0 });
  gsap.set(".footer_wrap .footer_item", { y: 20, opacity: 0 });
  gsap.set(".footer_wrap .footer_social_wrapper", { y: 30, opacity: 0 });
  gsap.set(".footer_wrap .g-horizontal-divider", {
    clipPath: "inset(0 100% 0 0)",
  });
  gsap.set(".footer_wrap .footer_horizontal_list", { y: 20, opacity: 0 });
  gsap.set(".footer_wrap .footer_credit_text", { y: 20, opacity: 0 });

  // Создаем timeline для анимации
  const footerTl = gsap.timeline();

  footerTl
    .to(h2Split.lines, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: { each: 0.05 },
    })
    .to(
      ".footer_wrap .button_main_wrap",
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
      },
      "<30%"
    )

    .to(
      ".footer_wrap .footer_column",
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.075,
      },
      "<10%"
    )

    .to(
      ".footer_wrap .footer_item",
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.075,
      },
      "<10%"
    )

    .to(
      ".footer_wrap .footer_social_wrapper",
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
      },
      "<10%"
    )

    .to(
      ".footer_wrap .g-horizontal-divider",
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1,
        ease: "power2.inOut",
      },
      "<10%"
    )

    .to(
      ".footer_wrap .footer_horizontal_list",
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
      },
      "<10%"
    )

    .to(
      ".footer_wrap .footer_credit_text",
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
      },
      "<10%"
    );

  ScrollTrigger.create({
    trigger: ".footer_wrap",
    start: "top 60%",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
    animation: footerTl,
    overwrite: true,
  });
}

document.addEventListener("DOMContentLoaded", initFooterAnimation);

export { initFooterAnimation };
