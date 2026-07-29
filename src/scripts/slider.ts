import Swiper, { Navigation, Pagination, A11y, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
Swiper.use([Navigation, Pagination, A11y, Keyboard]);
new Swiper(".swiper--testimonials", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: false,
  a11y: { enabled: true },
  keyboard: { enabled: true },
  pagination: { el: ".swiper--testimonials .swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper--testimonials .swiper-button-next", prevEl: ".swiper--testimonials .swiper-button-prev" },
  breakpoints: { 768: { slidesPerView: 2, spaceBetween: 24 }, 1024: { slidesPerView: 3, spaceBetween: 32 } }
});
