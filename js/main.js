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
  setupHeroStatus();
});

window.addEventListener('resize', updateNavHeight);
