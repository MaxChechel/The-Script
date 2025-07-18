import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initHeroScrollAnimations() {
  // Nav to top 0
  const navScrollShift = gsap.timeline({});
  navScrollShift.to(".nav_1_component", {
    top: "0px",
  });

  ScrollTrigger.create({
    trigger: ".home-hero_component",
    start: "top+=1.5rem top",
    end: "top top",
    scrub: 1,
    animation: navScrollShift,
  });

  // Nav logo reveal animation
  const heroLogoTl = gsap.timeline({ paused: true });
  heroLogoTl
    .from(".home_hero_top_logo_wrap", {
      width: 0,
      ease: "power2.out",
      duration: 0.6,
    })
    .to(
      ".home_hero_top_logo_wrap",
      {
        opacity: 1,
        duration: 0,
        ease: "power2.out",
      },
      "<0%"
    )
    .to(
      ".home_hero_logo_bottom_corner, .home_hero_logo_top_corner",
      {
        opacity: 1,
      },
      "<50%"
    )
    .to(".nav_1_logo", {
      opacity: 1,
    });

  ScrollTrigger.create({
    trigger: ".u-section.is-home-hero",
    start: "top top",
    end: "top+=20.5rem",
    animation: heroLogoTl,
    toggleActions: "play none reverse reverse",
  });

  // Nav button shift to full width
  const navCtaShift = gsap.timeline({ paused: true });
  navCtaShift.to(".nav_1_buttons_item", {
    paddingRight: 0,
  });

  ScrollTrigger.create({
    trigger: ".home-hero_component",
    start: "bottom 5%",
    end: "bottom top",
    scrub: 1,
    animation: navCtaShift,
  });

  // Hero hide bottom section + content swap animation
  const heroScrollTl = gsap.timeline({ paused: true });
  heroScrollTl
    .to(".home_hero_bottom-wrap", {
      y: "100%",
      duration: 1,
      ease: "power2.inOut",
    })
    .to(
      ".home_hero_loader_wrap",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power2.inOut",
      },
      "<0%"
    )
    .to(
      ".home_hero_heading_wrap",
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.inOut",
      },
      "<25%"
    );

  ScrollTrigger.create({
    trigger: ".home-hero_component",
    start: "bottom 98%",
    end: "bottom 50%",
    animation: heroScrollTl,
    toggleActions: "play none reverse reverse",
  });

  // Hero background scroll scrub animation
  const heroBgScrollTl = gsap.timeline({ paused: true });
  heroBgScrollTl.to(".home-hero_component", {
    height: "85%",
  });

  ScrollTrigger.create({
    trigger: ".home-hero_component",
    start: "bottom 90%",
    end: "bottom 20%",
    animation: heroBgScrollTl,
    scrub: 1.5,
  });

  console.log("Hero scroll animations initialized");
}
