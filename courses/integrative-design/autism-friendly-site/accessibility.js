/* ============================================================
   ZenPetals — Accessibility Toolbar
   Dark mode · Font size cycle · Reduce-motion toggle
   All preferences saved to localStorage and restored on load.

   TWO-PHASE INIT:
   Phase 1 (earlyInit) — runs immediately while script is in <head>.
     Only touches <html> element. Prevents flash of wrong theme/size.
   Phase 2 (domInit) — runs on DOMContentLoaded.
     Syncs button labels to actual state, then attaches click events.
   ============================================================ */
(function () {
'use strict';

/* ----------------------------------------------------------
   Constants
---------------------------------------------------------- */
var FONT_SIZES = [18, 22, 26]; // px — cycles on each click
var LS_THEME   = 'zp-theme';
var LS_FONT    = 'zp-font-size';
var LS_MOTION  = 'zp-reduce-motion';

/* ----------------------------------------------------------
   Phase 1 — Immediate (before DOM is ready)
   Only manipulates document.documentElement (<html>).
---------------------------------------------------------- */
function earlyInit() {
  // Theme: saved choice, or OS preference
  var savedTheme = localStorage.getItem(LS_THEME);
  var theme = savedTheme
    ? savedTheme
    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);

  // Font size: restore saved size, default to 18px
  var savedFont = parseInt(localStorage.getItem(LS_FONT), 10);
  var size = FONT_SIZES.indexOf(savedFont) !== -1 ? savedFont : FONT_SIZES[0];
  document.documentElement.style.fontSize = size + 'px';

  // Motion: saved choice, or OS preference
  var savedMotion = localStorage.getItem(LS_MOTION);
  var systemReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reduce = savedMotion !== null ? savedMotion === 'true' : systemReduced;
  document.documentElement.classList.toggle('reduce-motion-override', reduce);
}

/* ----------------------------------------------------------
   Phase 2 — DOMContentLoaded
   Reads state already applied by earlyInit and syncs button labels.
   Then attaches click events.
---------------------------------------------------------- */
function domInit() {
  syncThemeButton();
  syncFontButton();
  syncMotionButton();
}

function syncThemeButton() {
  var btn = document.getElementById('btn-theme');
  if (!btn) return;
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.textContent = isDark ? '☀ Light mode' : '☾ Dark mode';
  btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  btn.addEventListener('click', toggleTheme);
}

function syncFontButton() {
  var btn = document.getElementById('btn-font');
  if (!btn) return;
  var current = parseInt(document.documentElement.style.fontSize, 10);
  var size = FONT_SIZES.indexOf(current) !== -1 ? current : FONT_SIZES[0];
  var idx  = FONT_SIZES.indexOf(size);
  var next = FONT_SIZES[(idx + 1) % FONT_SIZES.length];
  btn.textContent = 'Aa ' + size + 'px';
  btn.dataset.nextSize = next;
  btn.addEventListener('click', cycleFontSize);
}

function syncMotionButton() {
  var btn = document.getElementById('btn-motion');
  if (!btn) return;
  var reduce = document.documentElement.classList.contains('reduce-motion-override');
  btn.textContent = reduce ?   '▶ Motion: on' :'⏸ Motion: off';
  btn.setAttribute('aria-pressed', reduce ? 'false':'true'  );
  btn.addEventListener('click', toggleMotion);
}

/* ----------------------------------------------------------
   Toggle handlers — called on button click
   Each directly reads current state and flips it.
---------------------------------------------------------- */
function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme');
  var next    = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem(LS_THEME, next);
  document.documentElement.setAttribute('data-theme', next);
  var btn = document.getElementById('btn-theme');
  if (btn) {
    btn.textContent = next === 'dark' ? '☀ Light mode' : '☾ Dark mode';
    btn.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
  }
}

function cycleFontSize() {
  var btn = document.getElementById('btn-font');
  if (!btn) return;
  var next     = parseInt(btn.dataset.nextSize, 10);
  var idx      = FONT_SIZES.indexOf(next);
  var upcoming = FONT_SIZES[(idx + 1) % FONT_SIZES.length];
  localStorage.setItem(LS_FONT, next);
  document.documentElement.style.fontSize = next + 'px';
  btn.textContent      = 'Aa ' + next + 'px';
  btn.dataset.nextSize = upcoming;
}

function toggleMotion() {
  var reduce = document.documentElement.classList.contains('reduce-motion-override');
  var next   = !reduce;
  localStorage.setItem(LS_MOTION, next);
  document.documentElement.classList.toggle('reduce-motion-override', next);
  var btn = document.getElementById('btn-motion');
  if (btn) {
    btn.textContent = next ? '▶ Motion: on' :'⏸ Motion: off';
    btn.setAttribute('aria-pressed', next ? 'false':'true'  );
  }
}

/* ----------------------------------------------------------
   Run
---------------------------------------------------------- */
earlyInit();
document.addEventListener('DOMContentLoaded', domInit);
})();