import Swiper, { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function initSliders() {
  document.querySelectorAll<HTMLElement>(".js-testimonials").forEach((el) => {
    new Swiper(el as HTMLElement, {
      modules: [A11y, Autoplay, Keyboard, Navigation, Pagination],
      slidesPerView: 1.05,
      spaceBetween: 16,
      loop: true,
      a11y: { enabled: true },
      keyboard: { enabled: true, onlyInViewport: true },
      autoplay: prefersReduced ? false : { delay: 6000, disableOnInteraction: true, pauseOnMouseEnter: true },
      pagination: { el: el.querySelector(".swiper-pagination") as HTMLElement, clickable: true },
      navigation: { nextEl: el.querySelector(".swiper-button-next") as HTMLElement, prevEl: el.querySelector(".swiper-button-prev") as HTMLElement },
      breakpoints: { 768: { slidesPerView: 1.6, spaceBetween: 24 }, 1024: { slidesPerView: 2.2, spaceBetween: 28 } }
    });
  });

  document.querySelectorAll<HTMLElement>(".js-logos").forEach((el) => {
    new Swiper(el as HTMLElement, {
      modules: [A11y, Autoplay],
      slidesPerView: 2.2,
      spaceBetween: 16,
      loop: true,
      allowTouchMove: true,
      autoplay: prefersReduced ? false : { delay: 0, disableOnInteraction: false },
      speed: 3500,
      grabCursor: false,
      freeMode: { enabled: true, momentum: false },
      breakpoints: { 640: { slidesPerView: 3.5, spaceBetween: 20 }, 1024: { slidesPerView: 5.5, spaceBetween: 28 } }
    });
  });
}

if (import.meta.env?.SSR === false) {
  window.addEventListener("load", initSliders, { once: true });
}
