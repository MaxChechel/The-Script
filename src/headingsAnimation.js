import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

function createGradientText(element) {
  const gradient =
    "linear-gradient(90deg, #3179F7 0%, #C79FEE 60%, #F6BDD9 100%)";

  // Add text wrapping styles for Safari compatibility
  Object.assign(element.style, {
    textWrap: "wrap",
    overflowWrap: "break-word",
  });

  const split = new SplitText(element, {
    type: "lines, chars",
    linesClass: "line",
    charsClass: "char",
  });

  const elRect = element.getBoundingClientRect();
  const elLeft = elRect.left + window.scrollX;
  const elWidth = elRect.width;

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
      WebkitTextFillColor: "transparent",
    });
  });

  return split;
}

function animateSection(container) {
  // Check if container is the heading itself
  const isDirectHeading = container.hasAttribute("data-heading");

  // Find elements within container or use container as heading
  const heading = isDirectHeading
    ? container
    : container.querySelector("[data-heading]");
  const subtext = isDirectHeading
    ? null
    : container.querySelector("[data-subtext]");
  const buttonsContainer = isDirectHeading
    ? null
    : container.querySelector("[data-buttons]");

  if (!heading) {
    console.warn(
      "No heading found with [data-heading] attribute in container",
      container
    );
    return;
  }

  const timeline = gsap.timeline({ paused: true });

  // Check if heading should use gradient (default is gradient)
  const headingGradientType = heading.getAttribute("data-heading");
  const useHeadingGradient = headingGradientType !== "no-gradient";

  // Add text wrapping styles for all headings (including non-gradient ones)
  Object.assign(heading.style, {
    textWrap: "wrap",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  });

  // Prepare heading
  let headingSplit;
  if (useHeadingGradient) {
    headingSplit = createGradientText(heading);
  } else {
    headingSplit = new SplitText(heading, {
      type: "lines",
      linesClass: "line",
    });
  }

  // Prepare subtext (never has gradient)
  let subtextSplit;
  if (subtext) {
    subtextSplit = new SplitText(subtext, {
      type: "lines",
      linesClass: "line",
    });
  }

  // Prepare buttons
  let buttons = [];
  if (buttonsContainer) {
    buttons = buttonsContainer.querySelectorAll(".button_main_wrap");
  }

  // Set initial states
  gsap.set(headingSplit.lines, {
    opacity: 0,
    y: "2rem",
  });

  if (subtextSplit) {
    gsap.set(subtextSplit.lines, {
      opacity: 0,
      y: "2rem",
    });
  }

  if (buttons.length > 0) {
    gsap.set(buttons, {
      opacity: 0,
      y: "1.5rem",
    });
  }

  // Animate heading lines
  timeline.to(headingSplit.lines, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: { each: 0.075 },
  });

  // If gradient is used on heading, animate from gradient to solid color
  if (useHeadingGradient) {
    headingSplit.lines.forEach((line, lineIndex) => {
      const charsInLine = line.querySelectorAll(".char");
      timeline.to(
        charsInLine,
        {
          WebkitTextFillColor: "#000000",
          duration: 0.8,
          ease: "power2.out",
        },
        `<${10 + lineIndex * 10}%`
      );
    });
  }

  // Animate subtext lines if exist
  if (subtextSplit) {
    timeline.to(
      subtextSplit.lines,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: { each: 0.075 },
      },
      "<20%"
    );
  }

  // Animate buttons if exist
  if (buttons.length > 0) {
    timeline.to(
      buttons,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: buttons.length > 1 ? { each: 0.075 } : 0,
      },
      "<30%"
    );
  }

  // Create ScrollTrigger
  ScrollTrigger.create({
    trigger: container,
    start: "top 70%",
    once: true,
    animation: timeline,
  });
}

export function initHeadingsAnimation() {
  document.fonts.ready.then(() => {
    // Find all containers with animation attributes
    const containers = document.querySelectorAll("[data-animate-header]");

    containers.forEach((container) => {
      animateSection(container);
    });

    console.log(`Initialized ${containers.length} header animations`);
  });
}
