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

  var overlay = document.createElement('div');
  overlay.className = 'gallery-modal-overlay';
  overlay.innerHTML =
    '<div class="gallery-modal" role="dialog" aria-modal="true" aria-label="Vista de imagen">' +
      '<button type="button" class="gallery-modal__close" aria-label="Cerrar">&times;</button>' +
      '<img class="gallery-modal__image" alt="" />' +
      '<p class="gallery-modal__caption"></p>' +
    '</div>';
  document.body.appendChild(overlay);

  var image = overlay.querySelector('.gallery-modal__image');
  var caption = overlay.querySelector('.gallery-modal__caption');
  var closeBtn = overlay.querySelector('.gallery-modal__close');

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(function() {
      image.removeAttribute('src');
      image.alt = '';
      caption.textContent = '';
    }, 180);
  }

  function openModal(item) {
    var img = item.querySelector('img');
    var text = item.querySelector('.gallery__caption');
    if (!img) return;
    image.src = img.getAttribute('src') || '';
    image.alt = img.alt || '';
    caption.textContent = text ? text.textContent.trim() : img.alt || '';
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  items.forEach(function(item) {
    item.addEventListener('click', function() { openModal(item); });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
  });
}
