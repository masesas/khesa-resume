// Count-up for [data-count] elements when they scroll into view. Each element
// carries data-count (target int) and optional data-suffix. Under reduced
// motion the final value is written immediately.

import { prefersReducedMotion } from '../lib/capabilities';

function animateOne(el: HTMLElement): void {
  const target = Number(el.dataset.count ?? '0');
  const suffix = el.dataset.suffix ?? '';
  const duration = 1400;

  if (prefersReducedMotion()) {
    el.textContent = `${target}${suffix}`;
    return;
  }

  let start: number | null = null;
  const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic

  function frame(now: number) {
    if (start === null) start = now;
    const p = Math.min(1, (now - start) / duration);
    const value = Math.round(target * ease(p));
    el.textContent = `${value}${suffix}`;
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

export function initCounters(): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
  if (els.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(animateOne);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateOne(entry.target as HTMLElement);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 },
  );
  els.forEach((el) => observer.observe(el));
}
