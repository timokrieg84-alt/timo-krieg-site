export async function initGSAPReveals({ reduce = false } = {}) {
  if (reduce) {
    document.querySelectorAll('.reveal-up,.reveal-fade').forEach(el => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'none';
    });
    return;
  }
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import('gsap/dist/gsap'),
    import('gsap/dist/ScrollTrigger'),
  ]);
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((el, i) => {
    gsap.fromTo(el, { opacity: 0, y: 24 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: (i % 4) * 0.05,
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
    });
  });

  gsap.utils.toArray<HTMLElement>('.parallax-y').forEach((el) => {
    gsap.to(el, {
      yPercent: -10, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });
}
