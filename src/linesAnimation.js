import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initLinesAnimation() {
  // Find all containers with lines
  const linesContainers = document.querySelectorAll("[data-lines-container]");

  if (linesContainers.length === 0) {
    return;
  }

  // Process each container separately
  linesContainers.forEach((linesContainer) => {
    // Find horizontal and vertical lines only in the current container
    const horizontalLines = linesContainer.querySelectorAll(
      ".g-horizontal-divider"
    );
    const verticalLines = linesContainer.querySelectorAll(
      ".g_vertical_divider"
    );

    if (horizontalLines.length === 0 && verticalLines.length === 0) {
      return;
    }

    // Create timeline for current container animation
    const tl = gsap.timeline();

    // Animate horizontal lines in current container
    horizontalLines.forEach((line, index) => {
      // Set initial state
      gsap.set(line, {
        clipPath: "inset(0 100% 0 0)",
      });

      // Animate from left to right
      tl.to(
        line,
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power2.out",
        },
        index * 0.2
      );
    });

    // Animate vertical lines in current container
    verticalLines.forEach((line, index) => {
      // Set initial state
      gsap.set(line, {
        clipPath: "inset(0 0 100% 0)",
      });

      // Animate from top to bottom
      tl.to(
        line,
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.0,
          ease: "power2.out",
        },
        (horizontalLines.length + index) * 0.2
      );
    });

    // Create ScrollTrigger for each container
    ScrollTrigger.create({
      trigger: linesContainer,
      start: "top 60%",
      end: "bottom 20%",
      animation: tl,
      toggleActions: "play none none reverse",
    });
  });
}

document.addEventListener("DOMContentLoaded", initLinesAnimation);
