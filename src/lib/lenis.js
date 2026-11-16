import { useEffect } from 'react';
import Lenis from 'lenis';

let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

/** Khởi tạo smooth-scroll (Lenis) cho toàn trang */
export function useLenis() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisInstance = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}

export function scrollToTarget(target, opts = {}) {
  const offset = opts.offset ?? -20;
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset, duration: 1.4, ...opts });
    return;
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (typeof target === 'number') window.scrollTo({ top: target, behavior: 'smooth' });
  else if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export function stopScroll() {
  lenisInstance?.stop();
  document.documentElement.style.overflow = 'hidden';
}

export function startScroll() {
  lenisInstance?.start();
  document.documentElement.style.overflow = '';
}

