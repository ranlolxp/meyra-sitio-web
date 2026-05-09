/* ============================================================
   MEYRA — i18n: datos de contacto, traducciones, localStorage
   ============================================================ */

// Datos de contacto (un solo lugar para editar)
var CONTACT = {
  phone: '+526128684404',
  phoneDisplay: '+52 612 868 4404',
  whatsapp: '526128684404',
  instagram: 'meyra.cafe.restaurante.lpz',
  instagramUrl: 'https://www.instagram.com/meyra.cafe.restaurante.lpz/',
  mapsUrl: 'https://www.google.com/maps/search/MEYRA+Caf%C3%A9+y+Restaurante/@24.1475197,-110.3343323,17z',
  menuPdfEs: 'assets/menu/menu-meyra-es.pdf',
  menuPdfEn: 'assets/menu/menu-meyra-en.pdf',
};

// Traducciones (claves usadas en data-i18n)
var I18N = {
  es: {
    'nav.home': 'Inicio', 'nav.visit': 'Reserva', 'nav.menu': 'Menú', 'nav.about': 'Nosotros', 'nav.gallery': 'Galería', 'nav.reviews': 'Reseñas', 'nav.social': 'Nuestras redes', 'nav.contact': 'Contacto',
    'hero.welcome': 'Bienvenidos a',
    'hero.tagline': 'Café y Restaurante',
    'hero.intro': 'En el corazón de La Paz, un espacio cálido donde los aromas del café recién molido y la comida casera se mezclan con el encanto de una cabaña rústica.',
    'hero.reserveTitle': 'Reserva tu mesa',
    'hero.reserveSub': 'Elige cómo contactarnos',
    'hero.btnWa': 'WhatsApp',
    'hero.call': 'Llamar',
    'hero.btnMaps': 'Cómo llegar',
    'hero.btnReserve': 'Reservar',
    'hero.statusOpen': 'Abierto ahora',
    'hero.statusClosed': 'Cerrado · Abre mañana 7:30 AM',
    'hero.statusClosedSat': 'Cerrado · Abre lunes 7:30 AM',
    'hero.hours': 'Lun – Sáb · 7:30 AM – 2:30 PM',
    'schedule.label': 'Horario de atención',
    'location.eyebrow': 'Visítanos',
    'location.title': 'Encuéntranos en La Paz',
    'location.subtitle': 'Un rincón acogedor esperando por ti.',
    'location.openInMaps': 'Abrir en Google Maps',
    'reserve.eyebrow': 'Reservaciones',
    'reserve.title': '¿Cómo te gustaría reservar?',
    'reserve.subtitle': 'Aseguramos tu mesa en el momento. Elige el canal que prefieras.',
    'reserve.whatsappLabel': 'Por WhatsApp',
    'reserve.whatsappDesc': 'Respuesta inmediata, confirmamos al momento.',
    'reserve.callLabel': 'Por teléfono',
    'about.eyebrow': 'Nosotros',
    'about.title': 'Nuestra esencia',
    'about.intro': 'MEYRA es mucho más que un café. Es un espacio acogedor donde cada visita se vuelve una pausa para reconectar con lo esencial: el gusto por lo casero, lo saludable y lo auténtico.',
    'about.quote': '"Una rica comida se disfruta más con agradable compañía."',
    'about.diffTitle': '¿Qué nos hace diferentes?',
    'about.diffLead': 'Ingredientes reales, sin compromisos.',
    'about.storyTitle': 'Nuestra historia',
    'about.storyBody': 'MEYRA nació de un ideal sencillo: crear un lugar que se sienta como casa. Usamos carnes locales orgánicas y preparamos todo de forma natural — mermeladas, chiles curtidos y pepinillos. Cada platillo está pensado en tu bienestar, con recetas que combinan tradición y frescura.',
    'about.closing': 'MEYRA será ese lugar al que siempre quieras volver.',
    'about.pillar1k': 'Sin artificiales',       'about.pillar1v': 'Sin aceites dañinos, azúcares refinados ni conservantes.',
    'about.pillar2k': 'Hecho en casa',          'about.pillar2v': 'Mermeladas, chiles curtidos y pepinillos — todo de nuestra cocina.',
    'about.pillar3k': 'Café de origen',         'about.pillar3v': 'Seleccionado con cuidado, recién molido cada mañana.',
    'about.pillar4k': 'Sin gluten',             'about.pillar4v': 'Postres endulzados con azúcares naturales.',
    'menu.eyebrow': 'Nuestro menú',
    'menu.title': 'Consulta nuestra carta completa',
    'menu.subtitle': 'Desayunos, almuerzos, bebidas y postres — todo preparado con ingredientes naturales.',
    'menu.view': 'Ver menú en PDF',
    'menu.hint': 'Se abrirá el menú en español',
    'gallery.eyebrow': 'Galería',
    'gallery.title': 'Platillos con un toque especial',
    'gallery.subtitle': 'Recetas tradicionales con un toque contemporáneo.',
    'gallery.more': 'Ver más fotos',
    'gallery.less': 'Ver menos fotos',
    'dish.p01': 'Jugo de naranja natural',   'dish.p02': 'Latte de la casa',
    'dish.p03': 'Brunch del jardín',         'dish.p06': 'French Toast con fruta',
    'dish.p07': 'Sándwich con chips de raíz','dish.p12': 'Desayuno Meyra',
    'dish.p13': 'Chilaquiles rojos y verdes',
    'dish.p12': 'Pan Francés',
    'dish.g01': 'Avocado Toast',             'dish.g02': 'Omelette de Espinacas y Queso',
    'dish.g03': 'Postre de frutos rojos',    'dish.g05': 'Avocado Toast',
    'dish.g06': 'Chilaquiles con carne',     'dish.g08': 'Avocado Toast del patio',
    'dish.g09': 'Omelette con ensalada',     'dish.g10': 'Smoothie de frutos rojos',
    'dish.g11': 'Jugo verde',                'dish.g12': 'Pastel de chocolate',
    'dish.g13': 'Pastel de chocolate entero',
    'dish.new.affogato': 'Affogato',         'dish.new.jugo-naranja': 'Jugo de naranja',
    'dish.new.chilaquiles-rojos': 'Chilaquiles rojos con carne',
    'dish.new.sandwish-queso': 'Sándwich de queso',
    'dish.new.limonada-cafe': 'Limonada café','dish.new.jugo-naranja-cafe': 'Café y Jugo de Naranja',
    'dish.new.hot-cakes': 'Hot cakes',       'dish.new.rol-canela': 'Rol de canela',
    'dish.new.golden-milk': 'Leche Dorada',
    'ig.rol-canela': 'Rol de canela',        'ig.omelette': 'Omelette de Espinacas y Queso',
    'ig.affogato': 'Affogato',               'ig.jugo-naranja': 'Jugo de naranja',
    'ig.chilaquiles': 'Chilaquiles Rojos con Huevo', 'ig.smoothie': 'Smoothie de Fresa',
    'testimonials.eyebrow': 'Lo que dicen',
    'testimonials.title': 'Historias de quienes nos visitan',
    'testimonials.subtitle': 'Reseñas reales de nuestros comensales en Google.',
    'reviews.placeholder': 'Conectaremos tus reseñas reales',
    'reviews.note': 'Aquí se mostrarán tus reseñas reales de Google. Necesitas crear/verificar tu ficha de Google Business primero — te guiaré en el siguiente paso.',
    'social.title': 'Síguenos en redes',
    'social.subtitle': 'Los nuevos platillos, eventos y momentos del día a día.',
    'instagram.eyebrow': 'En Instagram',
    'instagram.title': 'Síguenos @meyra.cafe.restaurante.lpz',
    'instagram.subtitle': 'Los nuevos platillos, eventos y momentos del día a día.',
    'instagram.follow': 'Seguir en Instagram',
    'facebook.title': 'MEYRA Café y Restaurante',
    'facebook.subtitle': 'Fotos, historias y actualizaciones de nuestra cocina.',
    'facebook.follow': 'Ver en Facebook',
    'hours.title': 'Horarios',
    'hours.weekdays': 'Lunes a Sábado',
    'hours.time': '7:30 AM – 2:30 PM',
    'hours.sunday': 'Domingo · Cerrado',
    'footer.tag': 'Café y Restaurante · La Paz, BCS',
    'footer.address': 'La Paz, Baja California Sur',
    'footer.rights': '© 2026 MEYRA · Todos los derechos reservados',
    'footer.madeWith': 'Hecho con',
    'footer.inLaPaz': 'en La Paz',
  },
  en: {
    'nav.home': 'Home', 'nav.visit': 'Reserve', 'nav.menu': 'Menu', 'nav.about': 'About', 'nav.gallery': 'Gallery', 'nav.reviews': 'Reviews', 'nav.social': 'Our socials', 'nav.contact': 'Contact',
    'hero.welcome': 'Welcome to',
    'hero.tagline': 'Café & Restaurant',
    'hero.intro': 'In the heart of La Paz, a warm space where the aromas of freshly ground coffee and home-cooked food blend with the charm of a rustic cabin.',
    'hero.reserveTitle': 'Reserve your table',
    'hero.reserveSub': 'Choose how to reach us',
    'hero.btnWa': 'WhatsApp',
    'hero.call': 'Call',
    'hero.btnMaps': 'Get directions',
    'hero.btnReserve': 'Reserve',
    'hero.statusOpen': 'Open now',
    'hero.statusClosed': 'Closed · Opens tomorrow at 7:30 AM',
    'hero.statusClosedSat': 'Closed · Opens Monday at 7:30 AM',
    'hero.hours': 'Mon – Sat · 7:30 AM – 2:30 PM',
    'schedule.label': 'Opening hours',
    'location.eyebrow': 'Visit us',
    'location.title': 'Find us in La Paz',
    'location.subtitle': 'A cozy corner waiting for you.',
    'location.openInMaps': 'Open in Google Maps',
    'reserve.eyebrow': 'Reservations',
    'reserve.title': 'How would you like to reserve?',
    'reserve.subtitle': 'We secure your table in the moment. Pick the channel you prefer.',
    'reserve.whatsappLabel': 'On WhatsApp',
    'reserve.whatsappDesc': 'Instant reply — we confirm right away.',
    'reserve.callLabel': 'By phone',
    'about.eyebrow': 'About us',
    'about.title': 'Our essence',
    'about.intro': 'MEYRA is much more than a café. It is a welcoming space where every visit becomes a pause to reconnect with what is essential: the love for home-made, healthy and authentic food.',
    'about.quote': '"A good meal is best enjoyed in good company."',
    'about.diffTitle': 'What makes us different?',
    'about.diffLead': 'Real ingredients, no compromises.',
    'about.storyTitle': 'Our story',
    'about.storyBody': 'MEYRA was born from a simple idea: a place that feels like home. We use local organic meats and prepare everything naturally — jams, cured chilies and pickles. Every dish is crafted with your wellbeing in mind, blending tradition and freshness.',
    'about.closing': 'MEYRA will be that place you always want to come back to.',
    'about.pillar1k': 'No additives',          'about.pillar1v': 'No harmful oils, refined sugars or preservatives.',
    'about.pillar2k': 'House-made',            'about.pillar2v': 'Jams, cured chilies and pickles — all from our kitchen.',
    'about.pillar3k': 'Single-origin coffee',  'about.pillar3v': 'Carefully selected, freshly ground every morning.',
    'about.pillar4k': 'Gluten-free',           'about.pillar4v': 'Desserts sweetened with natural sugars.',
    'menu.eyebrow': 'Our menu',
    'menu.title': 'Browse our full menu',
    'menu.subtitle': 'Breakfast, lunch, drinks and desserts — all prepared with natural ingredients.',
    'menu.view': 'View PDF menu',
    'menu.hint': 'The English menu will open',
    'gallery.eyebrow': 'Gallery',
    'gallery.title': 'Dishes with a special touch',
    'gallery.subtitle': 'Traditional recipes with a contemporary twist.',
    'gallery.more': 'See more photos',
    'gallery.less': 'See fewer photos',
    'dish.p01': 'Fresh orange juice',        'dish.p02': 'House latte',
    'dish.p03': 'Garden brunch',             'dish.p06': 'French Toast with fruit',
    'dish.p07': 'Sandwich with root chips',  'dish.p12': 'Meyra breakfast',
    'dish.p13': 'Red & green chilaquiles',
    'dish.p12': 'French Toast',
    'dish.g01': 'Avocado Toast',             'dish.g02': 'Spinach & Cheese Omelette',
    'dish.g03': 'Berry dessert',             'dish.g05': 'Avocado toast',
    'dish.g06': 'Chilaquiles with beef',     'dish.g08': 'Patio avocado toast',
    'dish.g09': 'Omelette with salad',       'dish.g10': 'Berry smoothie',
    'dish.g11': 'Green juice',               'dish.g12': 'Chocolate cake',
    'dish.g13': 'Whole chocolate cake',
    'dish.new.affogato': 'Affogato',         'dish.new.jugo-naranja': 'Orange juice',
    'dish.new.chilaquiles-rojos': 'Red chilaquiles with beef',
    'dish.new.sandwish-queso': 'Cheese sandwich',
    'dish.new.limonada-cafe': 'Café lemonade','dish.new.jugo-naranja-cafe': 'Coffee & Orange Juice',
    'dish.new.hot-cakes': 'Hot cakes',       'dish.new.rol-canela': 'Cinnamon roll',
    'dish.new.golden-milk': 'Golden Milk',
    'ig.rol-canela': 'Cinnamon roll',        'ig.omelette': 'Spinach & Cheese Omelette',
    'ig.affogato': 'Affogato',               'ig.jugo-naranja': 'Orange juice',
    'ig.chilaquiles': 'Red chilaquiles with egg', 'ig.smoothie': 'Strawberry smoothie',
    'testimonials.eyebrow': 'What guests say',
    'testimonials.title': 'Stories from those who visit us',
    'testimonials.subtitle': 'Real reviews from our guests on Google.',
    'reviews.placeholder': 'We will connect your real reviews',
    'reviews.note': 'Your real Google reviews will appear here. You need to create/verify your Google Business profile first — I will guide you in the next step.',
    'social.title': 'Follow us on social media',
    'social.subtitle': 'New dishes, events and everyday moments.',
    'instagram.eyebrow': 'On Instagram',
    'instagram.title': 'Follow us @meyra.cafe.restaurante.lpz',
    'instagram.subtitle': 'New dishes, events and everyday moments.',
    'instagram.follow': 'Follow on Instagram',
    'facebook.title': 'MEYRA Café y Restaurante',
    'facebook.subtitle': 'Photos, stories and updates from our kitchen.',
    'facebook.follow': 'Visit on Facebook',
    'hours.title': 'Hours',
    'hours.weekdays': 'Monday to Saturday',
    'hours.time': '7:30 AM – 2:30 PM',
    'hours.sunday': 'Sunday · Closed',
    'footer.tag': 'Café & Restaurant · La Paz, BCS',
    'footer.address': 'La Paz, Baja California Sur',
    'footer.rights': '© 2026 MEYRA · All rights reserved',
    'footer.madeWith': 'Made with',
    'footer.inLaPaz': 'in La Paz',
  },
};

var WHATSAPP_MSG = {
  es: 'Hola MEYRA, me gustaría reservar una mesa.',
  en: "Hi MEYRA, I'd like to reserve a table.",
};

// Helpers de almacenamiento (con fallback si localStorage no existe)
var ALLOWED_KEYS = ['meyra-lang', 'meyra-lang-chosen'];
var ALLOWED_VALUES = { 'meyra-lang': ['es', 'en'], 'meyra-lang-chosen': ['1'] };
var storage = {
  get: function(k) {
    if (!ALLOWED_KEYS.includes(k)) return null;
    try { return localStorage.getItem(k); } catch(e) { return null; }
  },
  set: function(k, v) {
    if (!ALLOWED_KEYS.includes(k)) return;
    if (ALLOWED_VALUES[k] && !ALLOWED_VALUES[k].includes(String(v))) return;
    try { localStorage.setItem(k, String(v)); } catch(e) {}
  },
};

// Aplicar idioma a todo el documento
function applyLang(lang) {
  if (!I18N[lang]) lang = 'es';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var val = I18N[lang][key];
    if (val !== undefined) el.textContent = val;
  });

  var waUrl = 'https://wa.me/' + CONTACT.whatsapp + '?text=' + encodeURIComponent(WHATSAPP_MSG[lang]);
  document.querySelectorAll('[data-href-lang="wa"]').forEach(function(el) { el.setAttribute('href', waUrl); });
  document.querySelectorAll('[data-href-lang="reserveWa"]').forEach(function(el) { el.setAttribute('href', waUrl); });

  var menuLink = document.getElementById('menuLink');
  if (menuLink) menuLink.setAttribute('href', lang === 'es' ? CONTACT.menuPdfEs : CONTACT.menuPdfEn);

  document.querySelectorAll('[data-set-lang]').forEach(function(btn) {
    btn.classList.toggle('is-active', btn.getAttribute('data-set-lang') === lang);
  });

  storage.set('meyra-lang', lang);
  document.dispatchEvent(new CustomEvent('meyra:langchange', { detail: { lang: lang } }));
}

// Detectar idioma inicial: localStorage > navegador > 'es'
function detectInitialLang() {
  var saved = storage.get('meyra-lang');
  if (saved && I18N[saved]) return saved;
  var nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
  return I18N[nav] ? nav : 'es';
}

// Modal de idioma — solo en primera visita
function setupLanguageModal() {
  var modal = document.getElementById('langModal');
  if (!modal) return;
  var alreadyChosen = storage.get('meyra-lang-chosen');
  if (!alreadyChosen) modal.hidden = false;

  modal.querySelectorAll('[data-pick-lang]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var lang = btn.getAttribute('data-pick-lang');
      storage.set('meyra-lang-chosen', '1');
      applyLang(lang);
      modal.hidden = true;
    });
  });
}

// Pill de idioma en el nav (cambio en caliente)
function setupLanguagePill() {
  document.querySelectorAll('[data-set-lang]').forEach(function(btn) {
    btn.addEventListener('click', function() { applyLang(btn.getAttribute('data-set-lang')); });
  });
}
