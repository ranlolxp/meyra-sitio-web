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

  /* Modal */
  var overlay = document.createElement('div');
  overlay.className = 'review-modal-overlay';
  overlay.innerHTML =
    '<div class="review-modal" role="dialog" aria-modal="true">' +
      '<button class="review-modal__close" aria-label="Cerrar">&times;</button>' +
      '<div class="review-modal__content"></div>' +
    '</div>';
  document.body.appendChild(overlay);

  var modalContent = overlay.querySelector('.review-modal__content');
  var closeBtn     = overlay.querySelector('.review-modal__close');

  function openModal(card) {
    stopTimer();
    modalOpen = true;
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
    modalContent.innerHTML = '';
    modalContent.appendChild(clone);
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    modalOpen = false;
    setTimeout(function() { modalContent.innerHTML = ''; startTimer(); }, 260);
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && modalOpen) closeModal(); });

  /* Flechas prev / next */
  var prevBtn = document.getElementById('reviewsPrev');
  var nextBtn = document.getElementById('reviewsNext');
  if (prevBtn) prevBtn.addEventListener('click', function() { goTo(current - 1 < 0 ? total - perView : current - 1); startTimer(); });
  if (nextBtn) nextBtn.addEventListener('click', function() { next(); startTimer(); });

  /* Hover pausa / mouseleave reanuda */
  slides.forEach(function(slide) {
    slide.addEventListener('mouseenter', function() { if (!modalOpen) stopTimer(); });
    slide.addEventListener('mouseleave', function() { if (!modalOpen) startTimer(); });
    var card = slide.querySelector('.review-card');
    if (card) card.addEventListener('click', function() { openModal(card); });
  });

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
