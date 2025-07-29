function bgLoop() {
  const loopSvg = document.querySelector(".bg_loop_svg");
  const largeLoop = document.querySelector("#large-loop");
  if (loopSvg && largeLoop) {
    gsap.set(loopSvg, { opacity: 0.2 });
    gsap.set(largeLoop, { drawSVG: "0%" });
    ScrollTrigger.create({
      trigger: loopSvg,
      start: "top 40%",
      once: true,
      onEnter: () => {
        gsap.to("#large-loop", {
          drawSVG: "100%",
          duration: 2,
          ease: "power2.out",
        });
      },
    });
  }
}

export { bgLoop };
