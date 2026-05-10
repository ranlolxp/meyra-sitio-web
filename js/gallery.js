/* ============================================================
   MEYRA — Gallery: galería con toggle "ver más" y modal de imagen
   ============================================================ */

function setupGallery() {
  var gallery = document.getElementById('menuGallery');
  if (!gallery) return;

  var toggle = document.getElementById('galleryToggle');
  var items = Array.from(gallery.querySelectorAll('[data-gallery-item]'));
  var extraItems = items.filter(function(item) { return item.classList.contains('gallery__item--extra'); });
  var expanded = false;

  function currentLang() {
    var saved = storage.get('meyra-lang');
    return saved && I18N[saved] ? saved : detectInitialLang();
  }

  function syncExtraItems() {
    var compactMode = window.innerWidth <= 1024;
    if (compactMode) {
      if (expanded) {
        gallery.classList.add('is-expanded');
      } else {
        gallery.classList.remove('is-expanded');
      }
    } else {
      gallery.classList.remove('is-expanded');
    }
  }

  function syncToggleLabel() {
    if (!toggle) return;
    var lang = currentLang();
    toggle.textContent = expanded ? I18N[lang]['gallery.less'] : I18N[lang]['gallery.more'];
    var compactMode = window.innerWidth <= 1024;
    toggle.hidden = extraItems.length === 0 || !compactMode;
    if (!compactMode) {
      expanded = false;
    }
    syncExtraItems();
  }

  var scrollYBeforeExpand = 0;

  if (toggle) {
    toggle.addEventListener('click', function() {
      if (expanded) {
        // 1. Fade-out suave — layout no se mueve
        extraItems.forEach(function(item) { item.classList.add('is-fading'); });
        setTimeout(function() {
          // 2. Colapsar y saltar instantáneo — nadie ve el salto porque las fotos son transparentes
          extraItems.forEach(function(item) { item.classList.remove('is-fading'); });
          expanded = false;
          syncToggleLabel();
          window.scrollTo(0, scrollYBeforeExpand);
        }, 500);
      } else {
        scrollYBeforeExpand = window.scrollY;
        expanded = true;
        syncToggleLabel();
      }
    });
    window.addEventListener('resize', syncToggleLabel);
    document.addEventListener('meyra:langchange', syncToggleLabel);
    syncToggleLabel();
  }

  /* ── Modal con swipe 3-slot ── */
  var galleryImages = items.map(function(item) {
    var imgEl     = item.querySelector('img');
    var captionEl = item.querySelector('.gallery__caption');
    return {
      imgEl:       imgEl,
      captionText: captionEl ? captionEl.textContent.trim() : (imgEl ? imgEl.alt : '')
    };
  });

  var N           = galleryImages.length;
  var currentIdx  = 0;
  var currSlot    = 1;
  var isOpen      = false;
  var isDragging  = false;
  var touchStartX = 0;
  var touchStartY = 0;
  var hintTimer   = null;
  var TRANSITION  = 'transform 0.38s cubic-bezier(0.22, 1, 0.36, 1)';
  var THRESHOLD   = 0.28;

  /* Overlay full-screen (sin marco fijo — cada tarjeta usa sus propias dimensiones) */
  var overlay = document.createElement('div');
  overlay.className = 'gallery-modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Vista de imagen');

  /* 3 slots — cada uno contiene su propia tarjeta blanca */
  var slotEls = [0, 1, 2].map(function() {
    var slide = document.createElement('div');
    slide.className = 'gallery-modal__slide';
    var card = document.createElement('div');
    card.className = 'gallery-modal__card';
    var img = document.createElement('img');
    img.className = 'gallery-modal__image';
    img.alt = '';
    var cap = document.createElement('p');
    cap.className = 'gallery-modal__caption';
    card.appendChild(img);
    card.appendChild(cap);
    slide.appendChild(card);
    return slide;
  });

  var slider = document.createElement('div');
  slider.className = 'gallery-modal__slider';
  slotEls.forEach(function(s) { slider.appendChild(s); });

  var closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'gallery-modal__close';
  closeBtn.setAttribute('aria-label', 'Cerrar');
  closeBtn.innerHTML = '&times;';

  var counter = document.createElement('div');
  counter.className = 'gallery-modal__counter';

  var hint = document.createElement('div');
  hint.className = 'gallery-modal__hint';
  hint.innerHTML = '&#8592;&ensp;Deslizar&ensp;&#8594;';

  overlay.appendChild(slider);
  overlay.appendChild(closeBtn);
  overlay.appendChild(counter);
  overlay.appendChild(hint);
  document.body.appendChild(overlay);

  function slot(d) { return slotEls[(currSlot + d + 3) % 3]; }

  function updateCounter() {
    counter.textContent = (currentIdx + 1) + ' / ' + N;
  }

  /* Carga imagen Y caption en cada slot — la tarjeta se dimensiona sola */
  function loadImages(idx) {
    var prev = (idx - 1 + N) % N;
    var next = (idx + 1) % N;
    [
      { entry: galleryImages[prev], sl: slot(-1) },
      { entry: galleryImages[idx],  sl: slot(0)  },
      { entry: galleryImages[next], sl: slot(1)  }
    ].forEach(function(item) {
      var srcImg  = item.entry.imgEl;
      var destImg = item.sl.querySelector('.gallery-modal__image');
      var destCap = item.sl.querySelector('.gallery-modal__caption');
      destImg.src = srcImg ? (srcImg.currentSrc || srcImg.src) : '';
      destImg.alt = srcImg ? srcImg.alt : '';
      destCap.textContent = item.entry.captionText;
    });
  }

  function resetPositions() {
    slotEls.forEach(function(el) { el.style.transition = 'none'; });
    for (var d = -1; d <= 1; d++) {
      slot(d).style.transform = 'translateX(' + (d * 100) + '%)';
    }
  }

  function navigateTo(dir) {
    slot(0).style.transition   = TRANSITION;
    slot(dir).style.transition = TRANSITION;
    slot(0).style.transform    = 'translateX(' + (-dir * 100) + '%)';
    slot(dir).style.transform  = 'translateX(0)';
    currSlot   = (currSlot + dir + 3) % 3;
    currentIdx = (currentIdx + dir + N) % N;
    updateCounter();
    setTimeout(function() {
      loadImages(currentIdx);
      resetPositions();
    }, 420);
  }

  function snapBack() {
    slotEls.forEach(function(el) { el.style.transition = TRANSITION; });
    for (var d = -1; d <= 1; d++) {
      slot(d).style.transform = 'translateX(' + (d * 100) + '%)';
    }
  }

  function openModal(idx) {
    currentIdx = idx;
    currSlot   = 1;
    loadImages(currentIdx);
    resetPositions();
    updateCounter();
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    isOpen = true;
    hint.classList.add('is-visible');
    clearTimeout(hintTimer);
    hintTimer = setTimeout(function() { hint.classList.remove('is-visible'); }, 2500);
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    isOpen = false;
  }

  items.forEach(function(item, i) {
    item.addEventListener('click', function() { openModal(i); });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e) {
    if (!e.target.closest('.gallery-modal__card') &&
        !e.target.closest('.gallery-modal__close') &&
        !e.target.closest('.gallery-modal__counter') &&
        !e.target.closest('.gallery-modal__hint')) {
      closeModal();
    }
  });
  document.addEventListener('keydown', function(e) {
    if (!isOpen) return;
    if (e.key === 'Escape')     closeModal();
    if (e.key === 'ArrowRight') navigateTo(1);
    if (e.key === 'ArrowLeft')  navigateTo(-1);
  });

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
    var threshold = slider.offsetWidth * THRESHOLD;
    if (Math.abs(dx) > threshold) {
      navigateTo(dx < 0 ? 1 : -1);
    } else {
      snapBack();
    }
  }, { passive: true });
}
