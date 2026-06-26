/* ============================================================
   MEYRA — Hero: altura exacta del viewport + estado dinámico
   Depende de: i18n.js
   ============================================================ */

function updateNavHeight() {
  var nav = document.querySelector('.site-nav');
  if (!nav) return;
  document.documentElement.style.setProperty('--nav-height', nav.offsetHeight + 'px');
}

function setupHeroStatus() {
  var statusEl = document.getElementById('heroStatus');
  if (!statusEl) return;

  var openTime  = 7.5;   // 7:30
  var closeTime = 14.0;  // 14:00

  var DAY_NAMES = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };

  function getLaPazTime() {
    var now = new Date();
    try {
      var parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Mazatlan',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
        hourCycle: 'h23'
      }).formatToParts(now);
      return {
        day:  DAY_NAMES[parts.find(function(p) { return p.type === 'weekday'; }).value],
        time: parseInt(parts.find(function(p) { return p.type === 'hour'; }).value, 10) +
              parseInt(parts.find(function(p) { return p.type === 'minute'; }).value, 10) / 60
      };
    } catch (e) {
      return { day: now.getDay(), time: now.getHours() + now.getMinutes() / 60 };
    }
  }

  function render() {
    var lp     = getLaPazTime();
    var lang   = storage.get('meyra-lang') || detectInitialLang();
    var isOpen = lp.day >= 1 && lp.day <= 6 && lp.time >= openTime && lp.time <= closeTime;

    if (isOpen) {
      statusEl.textContent = I18N[lang]['hero.statusOpen'];
      statusEl.className   = 'hero__status hero__status--open';
    } else if (lp.day === 6) {
      statusEl.textContent = I18N[lang]['hero.statusClosedSat'];
      statusEl.className   = 'hero__status hero__status--closed';
    } else {
      statusEl.textContent = I18N[lang]['hero.statusClosed'];
      statusEl.className   = 'hero__status hero__status--closed';
    }
  }

  render();
  document.addEventListener('meyra:langchange', render);
}
