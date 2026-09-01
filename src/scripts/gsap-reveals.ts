const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
async function setupGSAP() {
  const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ]);
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const type = el.dataset.reveal || 'up';
    const stagger = Number(el.dataset.stagger || 0.08);
    const children = el.querySelectorAll<HTMLElement>('[data-reveal-child]');
    if (prefersReduced) {
      el.classList.add('revealed'); children.forEach(c => c.classList.add('revealed')); return;
    }
    const to = { opacity: 1, y: 0, ease: 'power2.out', duration: 0.8, stagger } as any;
    ScrollTrigger.batch(children.length ? children : [el], {
      start: 'top 85%', onEnter: (batch: Element[]) => (gsap as any).to(batch, to, 0), once: true, batchMax: 8,
    });
  });
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach(async (el) => {
    if (prefersReduced) return;
    const speed = Number(el.dataset.speed || 0.2);
    (await import('gsap')).default.to(el, {
      yPercent: speed * -30, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } as any,
    } as any);
  });
  const counters = document.querySelectorAll<HTMLElement>('.js-counter[data-count-to]');
  const animateCounter = async (el: HTMLElement) => {
    const target = Number(el.dataset.countTo);
    const duration = Number(el.dataset.duration || 1.6);
    const prefix = el.dataset.prefix || ''; const suffix = el.dataset.suffix || '';
    if (prefersReduced) { el.textContent = `${prefix}${Math.round(target).toLocaleString()}${suffix}`; return; }
    const obj = { val: 0 } as any; const gsap = (await import('gsap')).default as any;
    (gsap as any).to(obj, { val: target, duration, ease: 'power2.out',
      onUpdate: () => { el.textContent = `${prefix}${Math.round(obj.val).toLocaleString()}${suffix}`; } });
  };
  if (counters.length) {
    ScrollTrigger.batch(counters as any, { start: 'top 85%', once: true, onEnter: (els: Element[]) => els.forEach((el) => animateCounter(el as HTMLElement)) });
  }
}
if (document.readyState !== 'loading') setupGSAP(); else document.addEventListener('DOMContentLoaded', setupGSAP);
