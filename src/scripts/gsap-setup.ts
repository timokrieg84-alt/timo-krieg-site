import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
gsap.registerPlugin(ScrollTrigger);
if (!reduceMotion) {
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
  tl.from("[data-animate='hero-kicker']", { y: 20, opacity: 0 }, 0)
    .from("[data-animate='hero-title'] span", { yPercent: 120, opacity: 0, stagger: 0.06 }, 0.1)
    .from("[data-animate='hero-copy']", { y: 14, opacity: 0 }, 0.2)
    .from("[data-animate='hero-cta']", { y: 12, opacity: 0 }, 0.25);
  document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    const speed = parseFloat(el.dataset.speed || "0.18");
    gsap.to(el, { y: () => el.offsetHeight * speed, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", scrub: true } });
  });
  document.querySelectorAll(".service-grid").forEach((grid) => {
    gsap.from(grid.querySelectorAll(".card-service"), {
      y: 24, opacity: 0, stagger: 0.12, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: grid as Element, start: "top 80%", once: true }
    });
  });
  document.querySelectorAll<HTMLElement>("[data-kpi]").forEach((el) => {
    const end = parseInt(el.getAttribute("data-kpi") || "0", 10);
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el, start: "top 85%", once: true,
      onEnter: () => gsap.to(obj, { val: end, duration: 1.2, ease: "power1.out", onUpdate: () => { el.textContent = Math.round(obj.val).toLocaleString("de-CH"); } })
    });
  });
} else {
  document.querySelectorAll<HTMLElement>("[data-kpi]").forEach((el) => {
    el.textContent = parseInt(el.getAttribute("data-kpi") || "0", 10).toLocaleString("de-CH");
  });
}
