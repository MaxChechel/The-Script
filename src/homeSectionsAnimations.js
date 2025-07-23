import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSectionsAnimations() {
  //Floating tags animation
  const floatingTagsTl = gsap.timeline({ paused: true });
  floatingTagsTl.to(".floating_tag .g-tag", {
    y: 0,
    opacity: 1,
    stagger: { each: 0.05, from: "random" },
    ease: "back.out(1.5)",
    duration: 0.7,
  });
  ScrollTrigger.create({
    trigger: ".cta_banner_component",
    start: "top 50%",
    animation: floatingTagsTl,
  });

  //Footer parallax effect
  const footerParallaxTl = gsap.timeline({ paused: true });
  footerParallaxTl.to(".footer_bg_img", {
    bottom: "0%",
  });
  ScrollTrigger.create({
    trigger: ".footer_bottom_wrap",
    start: "top 60%",
    end: "top 30%",
    scrub: 1.4,
    animation: footerParallaxTl,
  });

  //Vertical pointer
  const verticalPointers = document.querySelectorAll(".g-vertical-pointer");
  verticalPointers.forEach((pointer) => {
    const circles = pointer.querySelectorAll(".g-vertical-pointer-circle");
    const pointerTl = gsap.timeline({ paused: true });
    pointerTl.from(circles, {
      opacity: 0,
      y: "1rem",
      stagger: { each: 0.025, from: "start" },
      ease: "power2.out",
      duration: 0.4,
    });
    ScrollTrigger.create({
      trigger: pointer,
      start: "top 70%",
      end: "top 50%",
      once: true,
      animation: pointerTl,
    });
  });

  //Section badges
  const sectionBadges = document.querySelectorAll(".g-section-badge");
  sectionBadges.forEach((badge) => {
    const badgeTl = gsap.timeline({ paused: true });
    badgeTl.from(badge, {
      opacity: 0,
      y: "2rem",
      ease: "power2.out",
      duration: 0.6,
    });
    ScrollTrigger.create({
      trigger: badge,
      start: "top 70%",
      end: "top 60%",
      once: true,
      animation: badgeTl,
    });
  });
}
