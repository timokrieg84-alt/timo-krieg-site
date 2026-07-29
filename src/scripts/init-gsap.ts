import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function initReveals() {
  if (prefersReduced) {
    document.querySelectorAll<HTMLElement>(".reveal").forEach(el => { el.style.opacity = "1"; el.style.transform = "none"; });
    return;
  }

  const els = gsap.utils.toArray<HTMLElement>(".reveal");
  els.forEach((el) => {
    const type = el.dataset.reveal || "up";
    const from = { opacity: 0, y: type === "up" ? 16 : 0 } as gsap.TweenVars;
    const to = { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", overwrite: "auto" as const };

    gsap.fromTo(el, from, {
      ...to,
      scrollTrigger: { trigger: el, start: "top 85%", once: true }
    });
  });

  document.querySelectorAll<HTMLElement>('[data-reveal="stagger"]').forEach((parent) => {
    const items = parent.querySelectorAll<HTMLElement>(".reveal-child");
    gsap.from(items, {
      opacity: 0,
      y: 14,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: { trigger: parent, start: "top 85%", once: true }
    });
  });
}

if (import.meta.env?.SSR === false) {
  window.addEventListener("load", initReveals, { once: true });
}
