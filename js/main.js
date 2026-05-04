/* ============================================================
   MEYRA — Init: arranca todos los módulos al cargar el DOM
   Depende de: i18n.js, nav.js, carousel.js, gallery.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
  applyLang(detectInitialLang());
  setupLanguageModal();
  setupLanguagePill();
  setupBurger();
  setupCarousel();
  setupGallery();
});
