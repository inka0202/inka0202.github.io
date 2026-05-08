/* ZenPetals — chaos.js — Educational Anti-Pattern JS Engine */
'use strict';

// ── Web Audio context (lazy) ──────────────────────────────
let _ctx = null;
function getCtx() { if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)(); return _ctx; }

function playChime() {
  try {
    const ctx = getCtx(), o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = 880; o.type = 'sine';
    g.gain.setValueAtTime(0.8, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    o.start(); o.stop(ctx.currentTime + 0.8);
  } catch(e) {}
}

function playWhoosh() {
  try {
    const ctx = getCtx(), buf = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const s = ctx.createBufferSource(), g = ctx.createGain();
    s.buffer = buf; g.gain.value = 0.4;
    s.connect(g); g.connect(ctx.destination); s.start();
  } catch(e) {}
}

function playLoudBuzz() {
  try {
    const ctx = getCtx(), o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = 60; o.type = 'sawtooth';
    g.gain.value = 1.0;
    o.start(); o.stop(ctx.currentTime + 0.4);
  } catch(e) {}
}

// ── M3: Auto-scroll after 3s inactivity ───────────────────
let idleTimer = null, scrollInterval = null;
function resetIdle() {
  clearTimeout(idleTimer); clearInterval(scrollInterval);
  idleTimer = setTimeout(() => {
    scrollInterval = setInterval(() => window.scrollBy(0, 1), 50);
  }, 3000);
}
['mousemove','keydown','click','scroll','touchstart'].forEach(e => document.addEventListener(e, resetIdle));
resetIdle();

// ── N6: Back button hijack ─────────────────────────────────
const pages = ['index.html','services.html','book.html','contact.html'];
history.pushState({ zen: true }, '', location.href);
window.addEventListener('popstate', () => {
  const rnd = pages[Math.floor(Math.random() * pages.length)];
  location.href = rnd;
});

// ── A5: Cookie banner with whoosh ─────────────────────────
function showCookieBanner() {
  if (document.getElementById('cookie-banner')) return;
  playWhoosh();
  const b = document.createElement('div');
  b.id = 'cookie-banner'; b.className = 'cookie-banner';
  b.innerHTML = 'This website uses cookies, pixels, vibes, auras, and holistic data trackers. By existing on this page you consent to everything. <button onclick="this.parentElement.remove()" style="font-size:8px;cursor:pointer">Sure, whatever</button>';
  document.body.appendChild(b);
}

// ── A3: Notification permission modal at 2s ────────────────
function showNotifModal() {
  const m = document.createElement('div');
  m.className = 'notif-modal'; m.id = 'notif-modal';
  m.innerHTML = `<div class="notif-modal-box">
    <p>🌸 ZenPetals would like to send you <span class="scream">URGENT</span> wellness notifications, ASMR alerts, and chakra updates at ALL hours.</p>
    <div style="margin-top:4px">
      <button onclick="Notification.requestPermission();document.getElementById('notif-modal').remove()" style="font-size:8px;cursor:pointer;color:#00FF00">Allow Everything</button>
      <button onclick="document.getElementById('notif-modal').remove()" style="font-size:8px;cursor:pointer;color:#FF0000;margin-left:4px">Maybe Later (not really)</button>
    </div>
  </div>`;
  document.body.appendChild(m);
}

// ── A4: Toast every 45s with chime ────────────────────────
const toastMessages = [
  '🔥 Someone just booked a Hot Stone Massage!',
  '💆 3 people are viewing Chakra Vortex Hydrotherapy RIGHT NOW',
  '✨ Last spot available for Bio-Luminescent Facial Harmony!',
  '🌿 ALERT: Your inner peace is depreciating rapidly',
  '🔔 Transcendental Aromatherapy selling out FAST!'
];
let toastIdx = 0;
function showToast() {
  playChime();
  const old = document.getElementById('chaos-toast');
  if (old) old.remove();
  const t = document.createElement('div');
  t.id = 'chaos-toast'; t.className = 'chaos-toast';
  t.textContent = toastMessages[toastIdx++ % toastMessages.length];
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 5000);
}

// ── N4: Nav hide/show based on scroll speed ────────────────
let lastY = 0, lastT = Date.now();
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (!nav) return;
  const now = Date.now(), y = window.scrollY;
  const speed = Math.abs(y - lastY) / (now - lastT + 1);
  // Only hide sometimes — inconsistent behavior
  if (y > lastY && speed > 0.3) nav.style.opacity = '0';
  else if (y < lastY && speed < 0.8) nav.style.opacity = '1';
  lastY = y; lastT = now;
});

// ── N3: Mega-menu 2px hover tolerance ─────────────────────
function initMegaMenu() {
  const trigger = document.getElementById('mega-trigger');
  const menu = document.getElementById('mega-menu');
  if (!trigger || !menu) return;
  let hideTimer;
  trigger.addEventListener('mouseenter', () => { clearTimeout(hideTimer); menu.classList.add('visible'); });
  trigger.addEventListener('mouseleave', e => {
    hideTimer = setTimeout(() => { if (!menu.matches(':hover')) menu.classList.remove('visible'); }, 80);
  });
  menu.addEventListener('mouseleave', () => { hideTimer = setTimeout(() => menu.classList.remove('visible'), 80); });
  menu.addEventListener('mouseenter', () => clearTimeout(hideTimer));
}

// ── M2: Floating petals ────────────────────────────────────
function spawnPetals() {
  const petals = ['🌸','🌺','🍃','✿','❀','🌼'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.textContent = petals[i % petals.length];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = Math.random() * 100 + 'vh';
    p.style.animationDelay = (Math.random() * 3) + 's';
    p.style.animationDuration = (1.5 + Math.random() * 2) + 's';
    document.body.appendChild(p);
  }
}

// ── C5: Fake dark mode toggle ──────────────────────────────
function initFakeDarkMode() {
  const btn = document.getElementById('fake-dark');
  if (!btn) return;
  btn.addEventListener('click', () => { playLoudBuzz(); /* does absolutely nothing else */ });
}

// ── H4: Triple-click logo → hidden about page ──────────────
function initTripleClickLogo() {
  const logo = document.getElementById('site-logo');
  if (!logo) return;
  let clicks = 0, clickTimer;
  logo.addEventListener('click', () => {
    clicks++;
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => { clicks = 0; }, 500);
    if (clicks >= 3) { clicks = 0; window.location.href = 'about.html'; }
  });
}

// ── H2: Book Now swipe-left only (Home page) ──────────────
function initSwipeBook() {
  const el = document.getElementById('swipe-zone');
  if (!el) return;
  let startX = 0;
  el.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
  el.addEventListener('touchend', e => {
    if (startX - e.changedTouches[0].clientX > 60) window.location.href = 'book.html';
  });
  // Mouse drag simulation for desktop
  let mStart = 0, dragging = false;
  el.addEventListener('mousedown', e => { mStart = e.clientX; dragging = true; });
  el.addEventListener('mouseup', e => {
    if (dragging && mStart - e.clientX > 80) window.location.href = 'book.html';
    dragging = false;
  });
}

// ── H3: Secret B-key form submit ──────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'b' || e.key === 'B') {
    const form = document.querySelector('form');
    if (form) { e.preventDefault(); submitFormChaos(form); }
  }
});

// ── F5: 5-minute (3-minute) countdown → wipe form ────────────────────
function initCountdown(seconds) {
  const el = document.getElementById('countdown');
  if (!el) return;
  let remaining = seconds;
  const iv = setInterval(() => {
    remaining--;
    const m = Math.floor(remaining / 60), s = remaining % 60;
    el.textContent = `⏱ ${m}:${s.toString().padStart(2,'0')} — HURRY UP!!!`;
    if (remaining <= 0) {
      clearInterval(iv);
      const forms = document.querySelectorAll('form');
      forms.forEach(f => f.reset());
      el.textContent = '💀 SESSION EXPIRED. Everything deleted. Start over.';
      playLoudBuzz();
    }
  }, 1000);
}

// ── F6: Keystroke validation ───────────────────────────────
function initKeystrokeValidation() {
  document.querySelectorAll('input, textarea').forEach(input => {

    input.addEventListener('input', () => {

      const err = input.nextElementSibling;
      if (!err || !err.classList.contains('field-error')) return;

      let valid = true;
      let msg = '';

      // EMAIL
      if (input.id.includes('email')) {
        valid = input.value.includes('@') && input.value.length > 5;
        msg = valid
          ? '✔ Suspiciously valid.'
          : '❌ That email looks fake.';
      }

      // PHONE
      else if (input.id.includes('phone')) {
        const digits = input.value.replace(/\D/g, '');
        valid = digits.length >= 10;
        msg = valid
          ? '✔ Number accepted... probably.'
          : '❌ More digits. MORE.';
      }
      else if (input.id.includes('duration')) {
        
      const num = parseInt(input.value);

      valid = !isNaN(num) && num > 0 && num < 500;

      msg = valid
        ? '✔ Time acknowledged.'
        : '❌ Temporal value rejected.';
      }
      // CARD
      else if (input.id.includes('card-number')) {
      const digits = input.value.replace(/\D/g, '');

      valid = digits.length >= 16;

      msg = valid
        ? '✔ Financial risk detected.'
        : '❌ Card insufficiently card-like.';
      }

      // EXPIRY
      else if (input.id.includes('card-expiry')) {

        valid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(input.value);

        msg = valid
          ? '✔ Expiration accepted.'
          : '❌ Temporal formatting failure.';
      }

      // CVV
      else if (input.id.includes('card-cvv')) {

        valid = /^\d{3,4}$/.test(input.value);

        msg = valid
          ? '✔ Security ritual complete.'
          : '❌ Secret number inadequate.';
      }

        // TEXTAREA
        else if (input.tagName === 'TEXTAREA') {
          valid = input.value.length >= 30;
          msg = valid
            ? '✔ Message tolerated.'
            : '❌ Elaborate further.';
        }

        // DEFAULT
        else {
          valid = input.value.trim().length >= 3;
          msg = valid
            ? '✔ Acceptable.'
            : '❌ Too short.';
        }

      err.textContent = msg;
      err.style.display = 'block';

      // anti-accessible flashing
     err.classList.remove('error-flash', 'valid-flash');

    if (valid) {
      err.classList.add('valid-flash');
    } else {
      err.classList.add('error-flash');
    }
      
    });

  });
}

function initPaymentLogic() {

  const payment = document.getElementById('payment-type');
  const cardFields = document.getElementById('card-fields');

  if (!payment || !cardFields) return;

  const cardInputs = cardFields.querySelectorAll('input');

  payment.addEventListener('change', () => {

    const method = payment.value;

    // CARD PAYMENTS
    if (
      method === 'Credit Card' ||
      method === 'Debit Card'
    ) {

      cardFields.style.display = 'grid';

      // flashing anti-accessible chaos 😄
      cardFields.classList.add('flash');

      cardInputs.forEach(input => {
        input.required = true;
      });

    }

    // CASH / BARTER / CRYPTO
    else {

      cardFields.style.display = 'none';

      cardInputs.forEach(input => {
        input.required = false;
        input.value = '';
      });

    }

  });

}


// ── F7: Auto-format credit card + cursor jump ──────────────
function initCardFormat() {
  const card = document.getElementById('card-number');
  if (!card) return;
  card.addEventListener('input', function() {
    const pos = this.selectionStart;
    let v = this.value.replace(/\D/g,'').substring(0,16);
    let fmt = v.replace(/(.{4})/g,'$1-').replace(/-$/,'');
    this.value = fmt;
    // Cursor jump — move to wrong position
    const newPos = Math.min(pos + 1, fmt.length);
    this.setSelectionRange(newPos, newPos);
  });
}

// ── F7: Expiry auto-format ────────────────────────────────
function initExpiryFormat() {
  const exp = document.getElementById('card-expiry');
  if (!exp) return;
  exp.addEventListener('input', function() {
    let v = this.value.replace(/\D/g,'').substring(0,4);
    if (v.length >= 2) v = v.substring(0,2) + '/' + v.substring(2);
    this.value = v;
  });
}

// ── E1–E4: Vague, blaming, disappearing errors ─────────────
const vagueErrors = [
  'Something went wrong 😅',
  'Invalid input. Try harder.',
  'You missed a field. Again.',
  'Error 0x8024A105',
  'Nope.',
  'Our servers are meditating. Please panic.'
];
function showVagueError() {
  const old = document.getElementById('vague-error');
  if (old) old.remove();
  const e = document.createElement('div');
  e.id = 'vague-error';
  e.style.cssText = 'position:fixed;top:10px;left:50%;transform:translateX(-50%);background:#FF0000;color:#fff;font-family:Comic Sans MS,cursive;font-size:10px;padding:6px;z-index:9999;';
  e.textContent = vagueErrors[Math.floor(Math.random() * vagueErrors.length)];
  document.body.appendChild(e);
  setTimeout(() => e.remove(), 1500); // E4: vanishes after 1.5s
}

// ── F8 + E5: Form submit handler with CAPTCHA ──────────────
const captchaEmojis = ['🚦','🌲','🏠','🚗','🚲','🌊','⛽','🌸'];
function submitFormChaos(form) {
  form && form.preventDefault && form.preventDefault();
  showCaptcha();
}

function showCaptcha() {
  const old = document.getElementById('captcha-box');
  if (old) old.remove();
  const box = document.createElement('div');
  box.id = 'captcha-box'; box.className = 'captcha-box';
  let refreshTime = 8;
  function renderCaptcha() {
    const shuffled = [...captchaEmojis].sort(() => Math.random() - 0.5);
    box.innerHTML = `
      <p style="font-size:8px;color:#cccccc">Select all images containing traffic lights.<br>You have <span id="cap-timer" class="captcha-timer">${refreshTime}s</span></p>
      <div class="captcha-grid">
        ${shuffled.map((e,i) => `<div class="captcha-cell" onclick="this.style.outline='3px solid #00FF00'">${e}</div>`).join('')}
      </div>
      <div style="margin-top:4px">
        <button onclick="verifyCaptcha()" style="font-size:8px;cursor:pointer">Verify</button>
        <button onclick="document.getElementById('captcha-box').remove()" style="font-size:8px;cursor:pointer">Cancel</button>
      </div>`;
    document.body.appendChild(box);
    let t = refreshTime;
    const iv = setInterval(() => {
      t--;
      const el = document.getElementById('cap-timer');
      if (el) el.textContent = t + 's';
      if (t <= 0) { clearInterval(iv); renderCaptcha(); }
    }, 1000);
  }
  renderCaptcha();
}

window.verifyCaptcha = function() {
  document.getElementById('captcha-box')?.remove();
  showVagueError();
};

// ── A2: Carousel auto-rotate 1.5s ─────────────────────────
function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  if (!slides.length) return;
  let idx = 0;
  slides[0].classList.add('active');
  setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 1500);
}

// ── A1: Canvas waterfall hero + audio drone ────────────────
function initWaterfall() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth || window.innerWidth;
  canvas.height = 200;
  const drops = Array.from({length: 80}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: 2 + Math.random() * 4,
    len: 10 + Math.random() * 20
  }));
  function draw() {
    ctx.fillStyle = 'rgba(0,100,200,0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(150,220,255,0.8)';
    ctx.lineWidth = 1;
    drops.forEach(d => {
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x, d.y + d.len);
      ctx.stroke();
      d.y += d.speed;
      if (d.y > canvas.height) { d.y = -d.len; d.x = Math.random() * canvas.width; }
    });
    requestAnimationFrame(draw);
  }
  draw();
  // Audio drone
  /*try {
    const ac = getCtx(), o = ac.createOscillator(), g = ac.createGain();
    o.type = 'sine'; o.frequency.value = 55;
    g.gain.value = 0.15;
    o.connect(g); g.connect(ac.destination); o.start();
  } catch(e) {}*/
  let audioStarted = false;
let ac;

function startAudio() {
  const ac = new (window.AudioContext || window.webkitAudioContext)();

  // white noise source (water-like)
  const bufferSize = 2 * ac.sampleRate;
  const noiseBuffer = ac.createBuffer(1, bufferSize, ac.sampleRate);
  const output = noiseBuffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  const noise = ac.createBufferSource();
  noise.buffer = noiseBuffer;
  noise.loop = true;

  // filter = "water feel"
  const filter = ac.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 1200;

  const gain = ac.createGain();
  gain.gain.value = 0.2;

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ac.destination);

  noise.start();

}
canvas.addEventListener('click', ()=>{ startAudio();})
}
// ── Contact page: floating nav randomiser ──────────────────
function randomizeNavPosition() {
  const nav = document.querySelector('nav.nav-float');
  if (!nav) return;
  const positions = [
    {top:'10px', left:'10px', right:'auto', bottom:'auto'},
    {top:'10px', right:'10px', left:'auto', bottom:'auto'},
    {bottom:'10px', left:'10px', top:'auto', right:'auto'},
    {bottom:'10px', right:'10px', top:'auto', left:'auto'}
  ];
  const pos = positions[Math.floor(Math.random() * positions.length)];
  Object.assign(nav.style, pos);
}

// ── F2: Special Requests hidden char count ─────────────────
function initCharLimit() {
  const ta = document.getElementById('special-requests');
  if (!ta) return;
  ta.addEventListener('input', function() {
    let info = document.getElementById('char-info');
    if (this.value.length > 2000) {
      if (!info) {
        info = document.createElement('span');
        info.id = 'char-info';
        info.style.cssText = 'color:#FF0000;font-size:8px;';
        this.after(info);
      }
      info.textContent = `${this.value.length}/2000 — LIMIT EXCEEDED`;
    }
  });
}



// ── DOMContentLoaded: wire everything up ──────────────────
document.addEventListener('DOMContentLoaded', () => {
  spawnPetals();
  initMegaMenu();
  initFakeDarkMode();
  initTripleClickLogo();
  initSwipeBook();
  initCarousel();
  initWaterfall();
  initCharLimit();
  initCardFormat();
  initExpiryFormat();
  initKeystrokeValidation();
  randomizeNavPosition();
  initPaymentLogic();

  setTimeout(showNotifModal, 2000);         // A3
  setTimeout(showCookieBanner, 500);        // A5
  setInterval(showToast, 45000);            // A4
  setTimeout(showToast, 5000);              // First toast at 5s for demo

  // F5: countdown on form pages
  if (document.getElementById('countdown')) initCountdown(240);

  // Form submit intercept
  document.querySelectorAll('form').forEach(f => {
    f.addEventListener('submit', e => { e.preventDefault(); submitFormChaos(f); });
  });
});
