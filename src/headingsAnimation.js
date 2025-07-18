import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

function animateGradientHeading(selector) {
  const elements = document.querySelectorAll(selector);
  const gradient =
    "linear-gradient(90deg, #3179F7 0%, #C79FEE 60%, #F6BDD9 100%)";

  elements.forEach((el) => {
    const split = new SplitText(el, {
      type: "lines, chars",
      linesClass: "line",
      charsClass: "char",
    });

    const elRect = el.getBoundingClientRect();
    const elLeft = elRect.left + window.scrollX;
    const elWidth = elRect.width;

    gsap.set(split.lines, {
      opacity: 0,
      y: "2rem",
    });

    const tl = gsap.timeline({ paused: true });

    tl.to(split.lines, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: { each: 0.075 },
    });

    tl.to(
      split.chars,
      {
        onStart: () => {
          split.chars.forEach((char) => {
            const charLeft = char.getBoundingClientRect().left + window.scrollX;
            const offsetX = charLeft - elLeft;

            Object.assign(char.style, {
              display: "inline-block",
              background: gradient,
              backgroundSize: `${elWidth}px 100%`,
              backgroundPosition: `-${offsetX}px 0%`,
              backgroundRepeat: "no-repeat",
              WebkitBackgroundClip: "text",
            });
          });
        },
        WebkitTextFillColor: "transparent",
        duration: 1,
        ease: "power2.out",
      },
      "<30%"
    );

    ScrollTrigger.create({
      trigger: el,
      start: "top 70%",
      once: true,
      animation: tl,
    });
  });
}

export function initHeadingsAnimation() {
  document.fonts.ready.then(() => {
    animateGradientHeading("[data-animate-heading]");
    console.log("Headings animations initialized");
  });
}
