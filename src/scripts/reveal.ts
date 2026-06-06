// Scroll reveal — adds `is-in` to [data-reveal] elements as they enter the
// viewport. CSS owns the actual transition; this only toggles the class.
// Under reduced-motion we reveal everything immediately (no observer).

import { prefersReducedMotion } from '../lib/capabilities';

export function initReveal(): void {
  const targets = Array.from(
    document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-stagger]'),
  );
  if (targets.length === 0) return;

  // Index staggered children so CSS can cascade them via --i.
  document
    .querySelectorAll<HTMLElement>('[data-reveal-stagger]')
    .forEach((parent) => {
      Array.from(parent.children).forEach((child, i) => {
        (child as HTMLElement).style.setProperty('--i', String(i));
      });
    });

  // Reduced motion (or no IO support): show all at once, skip animation.
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          obs.unobserve(entry.target); // reveal once, then forget
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
  );

  targets.forEach((el) => observer.observe(el));
}
