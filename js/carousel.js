/* ============================================================
   MEYRA — Carousel: carrusel de reseñas Google
   Flechas prev/next, dots, autoplay 8s, modal al click, responsive
   ============================================================ */

function setupCarousel() {
  var track    = document.getElementById('reviewsTrack');
  var dotsWrap = document.getElementById('reviewsDots');
  if (!track || !dotsWrap) return;

  var slides    = Array.from(track.querySelectorAll('.reviews__slide'));
  var total     = slides.length;
  var INTERVAL  = 8000;
  var perView   = window.innerWidth < 768 ? 1 : 2;
  var current   = 0;
  var timer     = null;
  var dots      = [];
  var modalOpen = false;
  var modalIndex    = 0;
  var MODAL_THRESHOLD = 0.20;

  function getStepPx() {
    return slides[0].offsetWidth + 20; /* ancho real + gap CSS */
  }

  function goTo(idx) {
    var max = total - perView;
    idx = Math.max(0, Math.min(idx, max));
    current = idx;
    track.style.transform = 'translateX(-' + (idx * getStepPx()) + 'px)';
    dots.forEach(function(d, i) { d.classList.toggle('is-active', i === idx); });
  }

  function next() { goTo(current + 1 > total - perView ? 0 : current + 1); }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, INTERVAL);
  }
  function stopTimer() { clearInterval(timer); timer = null; }

  function buildDots() {
    dotsWrap.innerHTML = '';
    dots = [];
    var count = total - perView + 1;
    for (var i = 0; i < count; i++) {
      (function(idx) {
        var btn = document.createElement('button');
        btn.className = 'reviews__dot';
        btn.setAttribute('aria-label', 'Reseña ' + (idx + 1));
        btn.addEventListener('click', function() { goTo(idx); startTimer(); });
        dotsWrap.appendChild(btn);
        dots.push(btn);
      })(i);
    }
  }

  /* Badge "+N" en tarjetas con más de 3 fotos */
  slides.forEach(function(slide) {
    var imgs = slide.querySelectorAll('.review-card__photos img');
    if (imgs.length <= 3) return;
    var extra = imgs.length - 3;
    for (var i = 3; i < imgs.length; i++) imgs[i].style.display = 'none';
    var wrap = document.createElement('div');
    wrap.className = 'photo-wrap';
    var last = imgs[2];
    last.parentNode.insertBefore(wrap, last);
    wrap.appendChild(last);
    var badge = document.createElement('div');
    badge.className = 'photos-more-badge';
    badge.textContent = '+' + extra;
    wrap.appendChild(badge);
  });

  /* ── Modal ── */
  var overlay = document.createElement('div');
  overlay.className = 'review-modal-overlay';
  overlay.innerHTML =
    '<div class="review-modal-shell">' +
      '<button class="review-modal__nav review-modal__nav--prev" aria-label="Anterior">' +
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>' +
      '</button>' +
      '<div class="review-modal" role="dialog" aria-modal="true">' +
        '<button class="review-modal__close" aria-label="Cerrar">&times;</button>' +
        '<div class="review-modal__content"></div>' +
      '</div>' +
      '<button class="review-modal__nav review-modal__nav--next" aria-label="Siguiente">' +
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>' +
      '</button>' +
    '</div>';
  document.body.appendChild(overlay);

  var modalContent = overlay.querySelector('.review-modal__content');
  var closeBtn     = overlay.querySelector('.review-modal__close');
  var prevModalBtn = overlay.querySelector('.review-modal__nav--prev');
  var nextModalBtn = overlay.querySelector('.review-modal__nav--next');

  function cloneCard(index) {
    var card  = slides[index].querySelector('.review-card');
    var clone = card.cloneNode(true);
    clone.querySelectorAll('.review-card__photos img').forEach(function(img) {
      img.style.display = '';
    });
    var badge = clone.querySelector('.photos-more-badge');
    if (badge) badge.remove();
    clone.querySelectorAll('.photo-wrap').forEach(function(w) {
      var img = w.querySelector('img');
      w.parentNode.insertBefore(img, w);
      w.remove();
    });
    return clone;
  }

  function navigateModal(direction) {
    var nextIdx  = (modalIndex + direction + total) % total;
    var outX     = direction > 0 ? '-100%' : '100%';
    var inX      = direction > 0 ?  '100%' : '-100%';
    var DURATION = 280;
    var ease     = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';

    var incoming    = cloneCard(nextIdx);
    var currentCard = modalContent.firstChild;
    var lockedH     = modalContent.offsetHeight;

    /* Bloquear contenedor para que el modal no salte de alto */
    modalContent.style.cssText =
      'position:relative;overflow:hidden;height:' + lockedH + 'px;';

    /* Card saliente: absoluto en su posición actual */
    currentCard.style.cssText =
      'position:absolute;top:0;left:0;width:100%;' +
      'transition:transform ' + DURATION + 'ms ' + ease + ';';

    /* Card entrante: absoluto, fuera de pantalla */
    incoming.style.cssText =
      'position:absolute;top:0;left:0;width:100%;' +
      'transform:translateX(' + inX + ');' +
      'transition:transform ' + DURATION + 'ms ' + ease + ';';

    modalContent.appendChild(incoming);
    void incoming.offsetWidth; /* fuerza reflow */

    /* Arrancar desliz simultáneo */
    currentCard.style.transform = 'translateX(' + outX + ')';
    incoming.style.transform    = 'translateX(0)';

    setTimeout(function() {
      modalIndex = nextIdx;
      modalContent.style.cssText = '';
      modalContent.innerHTML     = '';
      modalContent.appendChild(cloneCard(nextIdx)); /* clone fresco sin estilos inline */
    }, DURATION + 20);
  }

  function openModal(index) {
    stopTimer();
    modalOpen  = true;
    modalIndex = index;
    /* Resetea estilos de animaciones anteriores */
    modalContent.style.opacity    = '1';
    modalContent.style.transform  = 'translateX(0)';
    modalContent.style.transition = '';
    modalContent.innerHTML = '';
    modalContent.appendChild(cloneCard(index));
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    modalOpen = false;
    setTimeout(function() { modalContent.innerHTML = ''; startTimer(); }, 260);
  }

  /* Controles del modal */
  closeBtn.addEventListener('click', closeModal);
  prevModalBtn.addEventListener('click', function(e) { e.stopPropagation(); navigateModal(-1); });
  nextModalBtn.addEventListener('click', function(e) { e.stopPropagation(); navigateModal(1); });
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', function(e) {
    if (!modalOpen) return;
    if (e.key === 'Escape')     closeModal();
    if (e.key === 'ArrowLeft')  navigateModal(-1);
    if (e.key === 'ArrowRight') navigateModal(1);
  });

  /* ── Swipe táctil en el modal ── */
  var mTouchStartX = 0;
  var mTouchStartY = 0;
  var mIsDragging  = false;

  overlay.addEventListener('touchstart', function(e) {
    mTouchStartX = e.touches[0].clientX;
    mTouchStartY = e.touches[0].clientY;
    mIsDragging  = false;
  }, { passive: true });

  overlay.addEventListener('touchmove', function(e) {
    var dx = Math.abs(e.touches[0].clientX - mTouchStartX);
    var dy = Math.abs(e.touches[0].clientY - mTouchStartY);
    if (!mIsDragging) {
      if (dx > dy && dx > 8) mIsDragging = true;
      else if (dy > 12)      return;
    }
    if (mIsDragging) e.preventDefault();
  }, { passive: false });

  overlay.addEventListener('touchend', function(e) {
    if (!mIsDragging) return;
    mIsDragging   = false;
    var dx        = e.changedTouches[0].clientX - mTouchStartX;
    var threshold = overlay.offsetWidth * MODAL_THRESHOLD;
    if (Math.abs(dx) > threshold) navigateModal(dx < 0 ? 1 : -1);
  }, { passive: true });

  /* Flechas prev / next del carrusel */
  var prevBtn = document.getElementById('reviewsPrev');
  var nextBtn = document.getElementById('reviewsNext');
  if (prevBtn) prevBtn.addEventListener('click', function() { goTo(current - 1 < 0 ? total - perView : current - 1); startTimer(); });
  if (nextBtn) nextBtn.addEventListener('click', function() { next(); startTimer(); });

  /* Hover pausa / mouseleave reanuda — click abre modal */
  slides.forEach(function(slide, i) {
    slide.addEventListener('mouseenter', function() { if (!modalOpen) stopTimer(); });
    slide.addEventListener('mouseleave', function() { if (!modalOpen) startTimer(); });
    var card = slide.querySelector('.review-card');
    if (card) card.addEventListener('click', function() { openModal(i); });
  });

  /* Swipe táctil en el carrusel — compatible con Safari iOS */
  var touchStartX = 0;
  var touchStartY = 0;
  var swipeTarget = track.parentElement || track;
  swipeTarget.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  swipeTarget.addEventListener('touchmove', function(e) {
    var dx = Math.abs(e.touches[0].clientX - touchStartX);
    var dy = Math.abs(e.touches[0].clientY - touchStartY);
    if (dx > dy && dx > 8) e.preventDefault();
  }, { passive: false });
  swipeTarget.addEventListener('touchend', function(e) {
    var diff = touchStartX - e.changedTouches[0].clientX;
    var dy   = Math.abs(e.changedTouches[0].clientY - touchStartY);
    if (Math.abs(diff) > 40 && Math.abs(diff) > dy) {
      if (diff > 0) { next(); } else { goTo(current - 1 < 0 ? total - perView : current - 1); }
      startTimer();
    }
  }, { passive: true });

  /* Responsive con debounce */
  var resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      var newPer = window.innerWidth < 768 ? 1 : 2;
      if (newPer !== perView) { perView = newPer; buildDots(); }
      goTo(Math.min(current, total - perView));
    }, 120);
  });

  buildDots();
  goTo(0);
  startTimer();
}
