import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export function createCard4Animation(card) {
  const icon = card.querySelector("[feature-icon-4]");

  if (!icon) return { timeline: null };

  const thumbPath = icon.querySelector("[feature-icon-4='thumb']");
  const handPath = icon.querySelector("[feature-icon-4='hand']");

  if (!thumbPath || !handPath) return { timeline: null };

  // Конечные пути для морфинга
  const finalThumbPath =
    "M33.2425 13.8323C34.9148 13.7614 36.3279 15.0596 36.3989 16.7318C36.4698 18.4041 35.1716 19.8173 33.4993 19.8882L30.6808 19.8882C29.9056 19.9211 29.3038 20.5762 29.3366 21.3515C29.3695 22.1268 30.0246 22.7286 30.7999 22.6957L34.6499 22.5324C36.3222 22.4615 37.7355 23.7597 37.8064 25.432C37.8773 27.1043 36.5791 28.5174 34.9068 28.5884L28.7046 28.8514C27.9033 28.8854 27.2813 29.5625 27.3153 30.3638C27.3493 31.1651 28.0264 31.7871 28.8277 31.7531L32.5024 31.753C34.1747 31.6821 35.588 32.9804 35.6589 34.6526C35.7298 36.3249 34.4316 37.7381 32.7593 37.8091L23.5147 38.0452C17.8391 38.286 13.043 33.8802 12.8024 28.2046L12.6613 24.8807C12.4206 19.2051 16.8264 14.409 22.502 14.1683L33.2425 13.8323Z";

  const finalHandPath =
    "M23.101 6.72291L23.408 12.5163L15.9061 13.0183L15.9023 7.00781C15.8236 5.01997 17.3714 3.34472 19.3592 3.26604C21.347 3.18737 23.0223 4.73506 23.101 6.72291Z";

  const timeline = gsap
    .timeline({ paused: true })
    .to(
      thumbPath,
      {
        duration: 0.5,
        morphSVG: finalThumbPath,
        ease: "power2.out",
      },
      0
    )
    .to(
      handPath,
      {
        duration: 0.5,
        morphSVG: finalHandPath,
        ease: "power2.out",
      },
      0
    )
    .to(
      icon,
      {
        duration: 0.5,
        scale: 1.4,
        attr: { viewBox: "0 0 47 46" },
        ease: "power2.out",
      },
      0
    );

  return { timeline };
}
