// Capability detection — decides which enhancements are safe to mount.
// Pure, side-effect-free queries. All guards must pass for heavy effects.

/** True when the user has asked the OS to minimise motion. */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** True for devices with a precise hovering pointer (mouse/trackpad), not touch. */
export function hasFinePointer(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

/** Smooth scroll (Lenis) is fine on any pointer, but not under reduced-motion. */
export function enableSmoothScroll(): boolean {
  return typeof window !== 'undefined' && !prefersReducedMotion();
}
