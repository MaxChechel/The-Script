import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);
export function createHeroRevealAnimation() {
  const heroRSvg = document.querySelector(".home_hero_logo_r");
  const rPath = heroRSvg.querySelector("#r-path");

  const logoRevealTl = gsap.timeline({});
  const heroRevealTl = gsap.timeline({});
  const masterHeroTl = gsap.timeline({});

  // R logo reveal animation
  gsap.set(rPath, {
    drawSVG: "0%",
    strokeWidth: 0,
  });
  gsap.set(heroRSvg, {
    bottom: "10%",
    rotateZ: "55deg",
  });

  logoRevealTl
    .to(rPath, {
      duration: 0.7,
      drawSVG: "5%",
      strokeWidth: 40,
      ease: "power2.out",
    })
    .to(
      heroRSvg,
      {
        duration: 0.7,
        bottom: "27%",
        rotateZ: "0deg",
        ease: "circ.out",
      },
      0
    )
    .to(
      rPath,
      {
        duration: 1.1,
        drawSVG: "100%",
        ease: "power4.inOut",
      },
      0.5
    )
    .to(
      rPath,
      {
        duration: 0.2,
        strokeWidth: 20,
        ease: "power3.out",
      },
      1
    )
    .to(
      rPath,
      {
        duration: 0.5,
        strokeWidth: 40,
        ease: "power4.out",
      },
      1.2
    );

  // Hero reveal animation
  heroRevealTl
    .to(".home_hero_bg_img", {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "circ.out",
    })
    .to(
      ".home_hero_logo_wrap",
      {
        opacity: 1,
        y: "0%",
        duration: 1,
        ease: "circ.out",
      },
      ".3"
    )
    .to(
      ".home_hero_logo_bottom",
      {
        opacity: 1,
        y: "0%",
        duration: 1,
        ease: "circ.out",
      },
      ".5"
    )
    .from(
      ".home_hero_content_wrap [data-wf--button-main--style='primary-icon']",
      {
        gap: "2rem",
      },
      ".7"
    )
    .from(
      ".home_hero_content_wrap [data-wf--button-main--style='primary-icon'] .button_icon_wrap",
      {
        rotate: "-45deg",
      },
      "<0%"
    )
    .to(
      ".home_hero_content_wrap [data-wf--button-main--style='primary-icon']",
      {
        opacity: 1,
        y: "0%",
        duration: 0.6,
        ease: "power2.out",
      },
      "<0%"
    )
    .to(
      ".home_hero_content_wrap [data-wf--button-main--style='secondary-icon']",
      {
        opacity: 1,
        y: "0%",
        duration: 0.6,
        ease: "power2.out",
      },
      "<20%"
    );

  // Hero master timeline
  masterHeroTl.add(heroRevealTl, 0).add(logoRevealTl, 0.3);

  return masterHeroTl;
}
