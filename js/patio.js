/* ============================================================
   MEYRA — Patio: scroll reveal + modal con swipe
   ============================================================ */

function setupPatioReveal() {
  var TRANSITION = 'transform 0.38s cubic-bezier(0.22, 1, 0.36, 1)';
  var THRESHOLD  = 0.28; /* 28% del ancho para confirmar swipe */

  /* ── Scroll reveal ── */
  var revealEls = document.querySelectorAll('.patio-reveal');
  if (revealEls.length) {
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach(function(el) { el.classList.add('is-visible'); });
    } else {
      var io = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(function(el) { io.observe(el); });
    }
  }

  /* ── Modal ── */
  var patioFigs = Array.from(document.querySelectorAll('.patio-grid figure'));
  if (!patioFigs.length) return;

  var N          = patioFigs.length;
  var currentIdx = 0;
  var currSlot   = 1; /* cuál de los 3 divs está centrado (0-2) */
  var isOpen     = false;
  var isDragging = false;
  var touchStartX = 0;
  var touchStartY = 0;
  var hintTimer  = null;

  /* Construir overlay */
  var overlay = document.createElement('div');
  overlay.className = 'patio-modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Vista del jardín');

  /* 3 slots (prev / curr / next) */
  var slotEls = [0, 1, 2].map(function() {
    var div = document.createElement('div');
    div.className = 'patio-modal__slide';
    var img = document.createElement('img');
    img.className = 'patio-modal__img';
    img.alt = '';
    div.appendChild(img);
    return div;
  });

  var slider = document.createElement('div');
  slider.className = 'patio-modal__slider';
  slotEls.forEach(function(s) { slider.appendChild(s); });

  var closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'patio-modal__close';
  closeBtn.setAttribute('aria-label', 'Cerrar');
  closeBtn.innerHTML = '&times;';

  var dotsWrap = document.createElement('div');
  dotsWrap.className = 'patio-modal__dots';

  var hint = document.createElement('div');
  hint.className = 'patio-modal__hint';
  hint.innerHTML = '&#8592;&ensp;Deslizar&ensp;&#8594;';

  var prevNavBtn = document.createElement('button');
  prevNavBtn.type = 'button';
  prevNavBtn.className = 'patio-modal__nav patio-modal__nav--prev';
  prevNavBtn.setAttribute('aria-label', 'Anterior');
  prevNavBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>';

  var nextNavBtn = document.createElement('button');
  nextNavBtn.type = 'button';
  nextNavBtn.className = 'patio-modal__nav patio-modal__nav--next';
  nextNavBtn.setAttribute('aria-label', 'Siguiente');
  nextNavBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>';

  overlay.appendChild(slider);
  overlay.appendChild(closeBtn);
  overlay.appendChild(dotsWrap);
  overlay.appendChild(hint);
  overlay.appendChild(prevNavBtn);
  overlay.appendChild(nextNavBtn);
  document.body.appendChild(overlay);

  /* Dots */
  var dots = [];
  for (var i = 0; i < N; i++) {
    (function(idx) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'patio-modal__dot';
      dot.setAttribute('aria-label', 'Imagen ' + (idx + 1));
      dot.addEventListener('click', function() {
        if (idx === currentIdx) return;
        currentIdx = idx;
        loadImages(currentIdx);
        resetPositions();
        updateDots();
      });
      dotsWrap.appendChild(dot);
      dots.push(dot);
    })(i);
  }

  function updateDots() {
    dots.forEach(function(d, i) { d.classList.toggle('is-active', i === currentIdx); });
  }

  /* slot(d): devuelve el slotEl que está d posiciones del centro */
  function slot(d) {
    return slotEls[(currSlot + d + 3) % 3];
  }

  /* Cargar imágenes en los 3 slots según idx actual */
  function loadImages(idx) {
    var prev = (idx - 1 + N) % N;
    var next = (idx + 1) % N;
    var figs = [
      { fig: patioFigs[prev], sl: slot(-1) },
      { fig: patioFigs[idx],  sl: slot(0)  },
      { fig: patioFigs[next], sl: slot(1)  }
    ];
    figs.forEach(function(item) {
      var srcImg = item.fig.querySelector('img');
      var destImg = item.sl.querySelector('img');
      destImg.src = srcImg ? (srcImg.currentSrc || srcImg.src) : '';
      destImg.alt = srcImg ? srcImg.alt : '';
    });
  }

  /* Resetear posiciones sin animación */
  function resetPositions() {
    slotEls.forEach(function(el) { el.style.transition = 'none'; });
    for (var d = -1; d <= 1; d++) {
      slot(d).style.transform = 'translateX(' + (d * 100) + '%)';
    }
  }

  /* Navegar con animación */
  function navigateTo(dir) {
    slot(0).style.transition   = TRANSITION;
    slot(dir).style.transition = TRANSITION;
    slot(0).style.transform    = 'translateX(' + (-dir * 100) + '%)';
    slot(dir).style.transform  = 'translateX(0)';
    currSlot   = (currSlot + dir + 3) % 3;
    currentIdx = (currentIdx + dir + N) % N;
    updateDots();
    setTimeout(function() {
      loadImages(currentIdx);
      resetPositions();
    }, 420);
  }

  /* Snap de vuelta sin cambiar de imagen */
  function snapBack() {
    slotEls.forEach(function(el) { el.style.transition = TRANSITION; });
    for (var d = -1; d <= 1; d++) {
      slot(d).style.transform = 'translateX(' + (d * 100) + '%)';
    }
  }

  function openModal(figIdx) {
    currentIdx = figIdx;
    currSlot   = 1;
    loadImages(currentIdx);
    resetPositions();
    updateDots();
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    isOpen = true;
    /* Swipe hint */
    hint.classList.add('is-visible');
    clearTimeout(hintTimer);
    hintTimer = setTimeout(function() { hint.classList.remove('is-visible'); }, 2500);
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    isOpen = false;
  }

  /* Clicks en las figuras del grid */
  patioFigs.forEach(function(fig, i) {
    fig.addEventListener('click', function() { openModal(i); });
  });

  /* Cerrar */
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e) {
    /* Cerrar al hacer clic en fondo oscuro, no en imagen/boton/dots */
    if (!e.target.closest('.patio-modal__img') &&
        !e.target.closest('.patio-modal__close') &&
        !e.target.closest('.patio-modal__dots') &&
        !e.target.closest('.patio-modal__hint') &&
        !e.target.closest('.patio-modal__nav')) {
      closeModal();
    }
  });
  document.addEventListener('keydown', function(e) {
    if (!isOpen) return;
    if (e.key === 'Escape')     closeModal();
    if (e.key === 'ArrowRight') navigateTo(1);
    if (e.key === 'ArrowLeft')  navigateTo(-1);
  });
  prevNavBtn.addEventListener('click', function(e) { e.stopPropagation(); navigateTo(-1); });
  nextNavBtn.addEventListener('click', function(e) { e.stopPropagation(); navigateTo(1); });

  /* ── Touch / Swipe ── */
  slider.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isDragging  = false;
    slotEls.forEach(function(el) { el.style.transition = 'none'; });
  }, { passive: true });

  slider.addEventListener('touchmove', function(e) {
    var dx = e.touches[0].clientX - touchStartX;
    var dy = Math.abs(e.touches[0].clientY - touchStartY);
    if (!isDragging) {
      if (Math.abs(dx) > dy && Math.abs(dx) > 8) isDragging = true;
      else if (dy > 12) return;
    }
    if (!isDragging) return;
    e.preventDefault();
    for (var d = -1; d <= 1; d++) {
      slot(d).style.transform = 'translateX(calc(' + (d * 100) + '% + ' + dx + 'px))';
    }
  }, { passive: false });

  slider.addEventListener('touchend', function(e) {
    if (!isDragging) return;
    isDragging  = false;
    var dx      = e.changedTouches[0].clientX - touchStartX;
    var threshold = window.innerWidth * THRESHOLD;
    if (Math.abs(dx) > threshold) {
      navigateTo(dx < 0 ? 1 : -1);
    } else {
      snapBack();
    }
  }, { passive: true });
}
