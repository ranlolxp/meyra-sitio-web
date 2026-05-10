/* ============================================================
   MEYRA — Patio: scroll reveal + modal de imagen
   ============================================================ */

function setupPatioReveal() {

  /* ── Scroll reveal ── */
  var revealItems = document.querySelectorAll('.patio-reveal');
  if (revealItems.length) {
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach(function(el) { el.classList.add('is-visible'); });
    } else {
      var revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealItems.forEach(function(el) { revealObserver.observe(el); });
    }
  }

  /* ── Modal ── */
  var figures = document.querySelectorAll('.patio-grid figure');
  if (!figures.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'patio-modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Vista del jardín');
  overlay.innerHTML =
    '<button type="button" class="patio-modal__close" aria-label="Cerrar">&times;</button>' +
    '<img class="patio-modal__img" alt="" />';
  document.body.appendChild(overlay);

  var modalImg = overlay.querySelector('.patio-modal__img');
  var closeBtn = overlay.querySelector('.patio-modal__close');
  var isOpen   = false;

  function openModal(fig) {
    var img = fig.querySelector('img');
    if (!img) return;
    /* currentSrc devuelve la URL real que eligió el browser (webp si lo soporta) */
    modalImg.src = img.currentSrc || img.src;
    modalImg.alt = img.alt || '';
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    isOpen = true;
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    isOpen = false;
    setTimeout(function() { modalImg.src = ''; }, 240);
  }

  figures.forEach(function(fig) {
    fig.addEventListener('click', function() { openModal(fig); });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOpen) closeModal();
  });
}
