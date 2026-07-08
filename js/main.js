/* ============================================================
   MEYRA — Init: arranca todos los módulos al cargar el DOM
   Depende de: i18n.js, nav.js, carousel.js, gallery.js, hero.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
  updateNavHeight();
  applyLang(detectInitialLang());
  setupLanguageModal();
  setupLanguagePill();
  setupBurger();
  setupCarousel();
  setupGallery();
  setupPatioReveal();
  setupHeroStatus();
  setupShamRamSignature();
});

window.addEventListener('resize', updateNavHeight);

function setupShamRamSignature() {
  var signature = document.querySelector('[data-shamram-signature]');
  if (!signature) return;

  var trigger = signature.querySelector('[data-shamram-hover-zone]') || signature;
  var quoteLinkSelector = '[data-shamram-quote]';
  var activeTimer = null;
  var animationTimer = null;
  var lastTouchPlay = 0;
  var touchQuery = window.matchMedia ? window.matchMedia('(hover: none), (pointer: coarse)') : null;

  function isTouchLike() {
    return !touchQuery || touchQuery.matches;
  }

  function playLogoMotion() {
    window.clearTimeout(animationTimer);
    signature.classList.remove('is-animating');
    void signature.offsetWidth;
    signature.classList.add('is-animating');
    animationTimer = window.setTimeout(function() {
      signature.classList.remove('is-animating');
    }, 800);
  }

  function playSignature(event) {
    if (event) event.preventDefault();
    window.clearTimeout(activeTimer);
    lastTouchPlay = Date.now();
    signature.classList.remove('is-active');
    void signature.offsetWidth;
    playLogoMotion();
    signature.classList.add('is-active');
    activeTimer = window.setTimeout(function() {
      signature.classList.remove('is-active');
    }, 900);
  }

  function isQuoteLinkEvent(event) {
    return event && event.target && event.target.closest && event.target.closest(quoteLinkSelector);
  }

  trigger.addEventListener('pointerdown', function(event) {
    if (isQuoteLinkEvent(event)) return;
    if (!isTouchLike()) return;
    playSignature(event);
  });

  trigger.addEventListener('mouseenter', function() {
    if (isTouchLike()) return;
    playLogoMotion();
  });

  trigger.addEventListener('click', function(event) {
    if (isQuoteLinkEvent(event)) return;
    if (!isTouchLike() || Date.now() - lastTouchPlay < 700) {
      event.preventDefault();
      return;
    }
    playSignature(event);
  });

  signature.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      playSignature(event);
    }
  });
}
