// Drives the signature preloader: counts 0→100% while the bar fills, then fades
// the overlay out and runs `onDone` to boot the rest of the page. Under reduced
// motion it skips straight to done. Always self-heals (fails open) so content is
// never trapped behind the overlay.

import { prefersReducedMotion } from '../lib/capabilities';

export function initPreloader(onDone: () => void): void {
  const el = document.getElementById('preloader');
  const countEl = document.getElementById('preloader-count');
  const barEl = document.getElementById('preloader-bar');
  const statusEl = document.getElementById('preloader-status');

  document.body.classList.add('is-loading');

  let finished = false;
  function finish() {
    if (finished) return;
    finished = true;
    document.body.classList.remove('is-loading');
    el?.classList.add('is-done');
    onDone();
  }

  // No overlay in DOM, or reduced motion: don't make people wait.
  if (!el || !countEl || !barEl) {
    finish();
    return;
  }
  if (prefersReducedMotion()) {
    countEl.textContent = '100';
    barEl.style.width = '100%';
    finish();
    return;
  }

  const duration = 1800;
  let start: number | null = null;
  const ease = (t: number) => 1 - Math.pow(1 - t, 2); // easeOutQuad

  function frame(now: number) {
    if (start === null) start = now;
    const p = Math.min(1, (now - start) / duration);
    const value = Math.round(ease(p) * 100);
    countEl!.textContent = String(value);
    barEl!.style.width = `${value}%`;
    if (p < 1) {
      requestAnimationFrame(frame);
    } else {
      if (statusEl) statusEl.textContent = 'Ready';
      setTimeout(finish, 360);
    }
  }
  requestAnimationFrame(frame);

  // Safety net: never trap the page if rAF stalls (e.g. backgrounded tab).
  setTimeout(finish, duration + 2500);
}
