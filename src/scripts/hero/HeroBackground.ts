type Options = { density?: number; maxRadius?: number; speed?: number; colors?: [string, string]; };
export class HeroBackground {
  private canvas: HTMLCanvasElement; private ctx: CanvasRenderingContext2D; private dpr = Math.min(window.devicePixelRatio || 1, 2);
  private particles: any[] = []; private raf = 0; private running = false; private observer?: IntersectionObserver;
  private opts: Required<Options>; private prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  constructor(canvas: HTMLCanvasElement, opts: Options = {}) {
    this.canvas = canvas; const ctx = canvas.getContext('2d', { alpha: true }); if (!ctx) throw new Error('No 2D ctx'); this.ctx = ctx as CanvasRenderingContext2D;
    this.opts = { density: opts.density ?? 0.008, maxRadius: opts.maxRadius ?? 28, speed: opts.speed ?? 0.25,
      colors: opts.colors ?? [
        `${getComputedStyle(document.documentElement).getPropertyValue('--particle-accent').trim()}`,
        `${getComputedStyle(document.documentElement).getPropertyValue('--particle-accent-2').trim()}`
      ] as [string,string] } as Required<Options>;
    this.handleResize = this.handleResize.bind(this); window.addEventListener('resize', this.handleResize, { passive: true });
    this.init(); this.setupIO();
  }
  private init() {
    const { canvas, ctx, dpr } = this; const rect = canvas.getBoundingClientRect();
    canvas.width = Math.floor(rect.width * dpr); canvas.height = Math.floor(rect.height * dpr); (ctx as any).setTransform(dpr, 0, 0, dpr, 0, 0);
    this.particles = []; const area = rect.width * rect.height; const isMobile = rect.width < 768; let density = this.opts.density;
    if (isMobile) density *= 0.55; if (this.prefersReduced) density = 0.002;
    const count = Math.max(12, Math.floor(area * density / 10000)); for (let i=0;i<count;i++) this.particles.push(this.spawn(rect)); this.clear();
  }
  private spawn(rect: DOMRect) {
    const r = Math.random(); const color = r < 0.6 ? this.opts.colors[0] : this.opts.colors[1];
    const radius = (Math.random() * 0.6 + 0.4) * this.opts.maxRadius; const speed = (Math.random() * 0.5 + 0.75) * this.opts.speed;
    const angle = Math.random() * Math.PI * 2; return { x: Math.random()*rect.width, y: Math.random()*rect.height,
      vx: Math.cos(angle)*speed, vy: Math.sin(angle)*speed, r: radius, color, alpha: Math.random()*0.35+0.25, pulse: Math.random()*Math.PI*2 };
  }
  private step() {
    const { ctx, canvas } = this; const w = canvas.width / this.dpr; const h = canvas.height / this.dpr;
    (ctx as any).save(); (ctx as any).globalCompositeOperation = 'source-over'; (ctx as any).globalAlpha = 0.08; (ctx as any).fillStyle = 'rgba(247,248,250,0.9)'; (ctx as any).fillRect(0,0,w,h); (ctx as any).restore();
    (ctx as any).globalCompositeOperation = 'lighter';
    for (const p of this.particles) {
      p.x += p.vx; p.y += p.vy; p.pulse += 0.005; const pr = p.r * (1 + Math.sin(p.pulse) * 0.06);
      if (p.x < -pr) p.x = w + pr; if (p.x > w + pr) p.x = -pr; if (p.y < -pr) p.y = h + pr; if (p.y > h + pr) p.y = -pr;
      const g = (ctx as any).createRadialGradient(p.x, p.y, 0, p.x, p.y, pr);
      (g as any).addColorStop(0, `rgba(${p.color}, ${Math.min(0.35, p.alpha)})`);
      (g as any).addColorStop(0.6, `rgba(${p.color}, ${Math.min(0.18, p.alpha*0.6)})`);
      (g as any).addColorStop(1, 'rgba(255,255,255,0)'); (ctx as any).fillStyle = g; (ctx as any).beginPath(); (ctx as any).arc(p.x, p.y, pr, 0, Math.PI*2); (ctx as any).fill();
    }
  }
  private loop = () => { this.raf = requestAnimationFrame(this.loop); this.step(); };
  start() { if (this.running || this.prefersReduced) return; this.running = true; this.loop(); }
  stop() { this.running = false; if (this.raf) cancelAnimationFrame(this.raf); this.raf = 0; }
  destroy() { this.stop(); this.particles = []; window.removeEventListener('resize', this.handleResize); this.observer?.disconnect(); this.clear(); }
  private clear() { const { ctx, canvas } = this; const w = canvas.width / this.dpr, h = canvas.height / this.dpr; (ctx as any).clearRect(0,0,w,h); }
  private handleResize() { this.init(); }
  private setupIO() {
    this.observer = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) this.start(); else this.stop(); }); }, { threshold: 0.05 });
    this.observer.observe(this.canvas);
  }
}
