// Magnetic pull for [data-magnetic] elements: the element eases toward the
// cursor while hovered, then springs back. Pointer-fine + motion-OK only.

import { hasFinePointer, prefersReducedMotion } from '../lib/capabilities';

export function initMagnetic(): void {
  if (!hasFinePointer() || prefersReducedMotion()) return;

  const els = Array.from(
    document.querySelectorAll<HTMLElement>('[data-magnetic]'),
  );

  els.forEach((el) => {
    const strength = Number(el.dataset.magnetic || '0.3');

    function onMove(e: PointerEvent) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    }
    function onLeave() {
      el.style.transform = '';
    }

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
  });
}
