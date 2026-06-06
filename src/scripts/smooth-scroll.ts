// Smooth scroll via Lenis. Returns the instance (or null when disabled) so the
// WebGL gallery can read scroll state if needed. Skipped under reduced-motion.

import Lenis from 'lenis';
import { enableSmoothScroll } from '../lib/capabilities';

export function initSmoothScroll(): Lenis | null {
  if (!enableSmoothScroll()) return null;

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenis;
}
