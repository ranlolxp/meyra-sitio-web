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
  menuPdfEs: 'assets/menu/menu-meyra-es.pdf?v=20260819',
  menuPdfEn: 'assets/menu/menu-meyra-en.pdf?v=20260822',
};

var SHAMRAM_CONTACT = {
  whatsapp: '526121478433',
};

// Traducciones (claves usadas en data-i18n)
var I18N = {
  es: {
    'nav.home': 'Inicio', 'nav.visit': 'Reserva', 'nav.menu': 'Menú', 'nav.about': 'Nosotros', 'nav.gallery': 'Galería', 'nav.reviews': 'Reseñas', 'nav.social': 'Nuestras redes', 'nav.contact': 'Contacto',
    'hero.welcome': 'Bienvenidos a',
    'hero.tagline': 'Café y Restaurante',
    'hero.intro': 'En el corazón de La Paz, un espacio cálido donde los aromas del café recién molido y la comida casera se mezclan con el encanto de una cabaña rústica y un bello jardín acogedor.',
    'hero.reserveTitle': 'Reserva tu mesa',
    'hero.reserveSub': 'Elige cómo contactarnos',
    'hero.btnWa': 'WhatsApp',
    'hero.call': 'Llamar',
    'hero.btnMaps': 'Cómo llegar',
    'hero.btnReserve': 'Reservar',
    'hero.statusOpen': 'Abierto ahora',
    'hero.statusClosed': 'Cerrado · Abre mañana 7:30 AM',
    'hero.statusClosedSat': 'Cerrado · Abre lunes 7:30 AM',
    'hero.hours': 'Lun – Sáb · 7:30 AM – 2:00 PM',
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
    'about.diffLead': 'Usamos Ingredientes Reales',
    'about.storyTitle': 'Nuestra historia',
    'about.storyBody': 'MEYRA nació de un ideal sencillo: crear un lugar que se sienta como casa. Usamos carnes regionales y preparamos todo con ingredientes de calidad. Cada platillo está pensado en tu bienestar, con recetas que combinan tradición y frescura.',
    'about.closing': 'MEYRA será ese lugar al que siempre quieras volver.',
    'about.pillar1k': 'Sin artificiales',       'about.pillar1v': 'Sin aceites dañinos, sin azúcares refinados, y sin conservantes o saborizantes artificiales.',
    'about.pillar2k': 'Hecho en casa',          'about.pillar2v': 'Salsas, aderezos, pesto, chile curtido y mermeladas, todo casero y de nuestra cocina.',
    'about.pillar3k': 'Café de especialidad',   'about.pillar3v': 'Mezcla de café Mexicano exclusiva de la casa, con un delicioso aroma y sabor.',
    'about.pillar4k': 'Postres Saludables',     'about.pillar4v': 'Contamos con opciones sin gluten y con azúcares naturales, sin refinados.',
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
    'dish.p01': 'Jugo de naranja natural',   'dish.p02': 'Cappuccino',
    'dish.p03': 'Brunch del jardín',         'dish.p06': 'French Toast con fruta',
    'dish.p07': 'Sándwich con chips de raíz','dish.p12': 'Desayuno Meyra',
    'dish.p13': 'Chilaquiles rojos y verdes',
    'dish.p12': 'Pan Francés',
    'dish.g01': 'Avocado Toast',             'dish.g02': 'Omelette de Espinacas y Queso',
    'dish.g03': 'Postre de frutos rojos',    'dish.g05': 'Avocado Toast',
    'dish.g06': 'Chilaquiles con carne',     'dish.g08': 'Avocado Toast del patio',
    'dish.g09': 'Omelette con ensalada',     'dish.g10': 'Smoothie de frutos rojos',
    'dish.g11': 'Jugo Verde',                'dish.g12': 'Pastel de chocolate',
    'dish.g13': 'Pastel de chocolate entero',
    'dish.new.affogato': 'Affogato',         'dish.new.jugo-naranja': 'Jugo de Naranja',
    'dish.new.chilaquiles-rojos': 'Chilaquiles Rojos con Carne',
    'dish.new.sandwish-queso': 'Sándwich de Queso',
    'dish.new.limonada-cafe': 'Limonada Café','dish.new.jugo-naranja-cafe': 'Café y Jugo de Naranja',
    'dish.new.hot-cakes': 'Hot Cakes',       'dish.new.rol-canela': 'Rol de Canela',
    'dish.new.golden-milk': 'Leche Dorada',
    'dish.new.chilaquiles-rojos-huevo': 'Chilaquiles Rojos con Huevo',
    'dish.new.pastel-aleman': 'Pastel Alemán',
    'dish.new.cheesecake': 'Cheesecake',
    'dish.new.quesadillas-harina': 'Quesadillas de Harina',
    'dish.new.tisana': 'Tisana',
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
    'instagram.subtitle': 'Conoce nuestros platillos, eventos y momentos del día a día.',
    'instagram.follow': 'Seguir en Instagram',
    'facebook.title': 'MEYRA Café y Restaurante',
    'facebook.subtitle': 'Fotos, historias y actualizaciones de nuestro espacio.',
    'facebook.follow': 'Ver en Facebook',
    'hours.title': 'Horarios',
    'hours.weekdays': 'Lunes a Sábado',
    'hours.time': '7:30 AM – 2:00 PM',
    'hours.sunday': 'Domingo · Cerrado',
    'footer.tag': 'Café y Restaurante · La Paz, BCS',
    'footer.address': 'La Paz, Baja California Sur',
    'footer.rights': '© 2026 MEYRA · Todos los derechos reservados',
    'footer.madeWith': 'Hecho con',
    'footer.inLaPaz': 'en La Paz',
    'shamram.title': '¿Quieres una página como esta?',
    'shamram.createdBy': 'Sitio web creado por ShamRam',
    'shamram.subtitle': 'Sitios prácticos para tu negocio',
    'shamram.button': 'Cotizar por WhatsApp',
    'shamram.aria': 'Sitio web creado por ShamRam',
  },
  en: {
    'nav.home': 'Home', 'nav.visit': 'Reserve', 'nav.menu': 'Menu', 'nav.about': 'About', 'nav.gallery': 'Gallery', 'nav.reviews': 'Reviews', 'nav.social': 'Our socials', 'nav.contact': 'Contact',
    'hero.welcome': 'Welcome to',
    'hero.tagline': 'Café & Restaurant',
    'hero.intro': 'In the heart of La Paz, a warm space where the aromas of freshly ground coffee and home-cooked food blend with the charm of a rustic cabin and a beautiful welcoming garden.',
    'hero.reserveTitle': 'Reserve your table',
    'hero.reserveSub': 'Choose how to reach us',
    'hero.btnWa': 'WhatsApp',
    'hero.call': 'Call',
    'hero.btnMaps': 'Get directions',
    'hero.btnReserve': 'Reserve',
    'hero.statusOpen': 'Open now',
    'hero.statusClosed': 'Closed · Opens tomorrow at 7:30 AM',
    'hero.statusClosedSat': 'Closed · Opens Monday at 7:30 AM',
    'hero.hours': 'Mon – Sat · 7:30 AM – 2:00 PM',
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
    'about.diffLead': 'We Use Real Ingredients',
    'about.storyTitle': 'Our story',
    'about.storyBody': 'MEYRA was born from a simple idea: a place that feels like home. We use regional meats and prepare everything with quality ingredients. Every dish is crafted with your wellbeing in mind, blending tradition and freshness.',
    'about.closing': 'MEYRA will be that place you always want to come back to.',
    'about.pillar1k': 'No additives',          'about.pillar1v': 'No harmful oils, no refined sugars, and no preservatives or artificial flavorings.',
    'about.pillar2k': 'House-made',            'about.pillar2v': 'Sauces, dressings, pesto, cured chili and jams — all homemade from our kitchen.',
    'about.pillar3k': 'Specialty coffee',      'about.pillar3v': 'Our exclusive house blend of Mexican coffee, with a delicious aroma and flavor.',
    'about.pillar4k': 'Healthy Desserts',      'about.pillar4v': 'We offer gluten-free options with natural sugars, no refined sweeteners.',
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
    'dish.p01': 'Fresh orange juice',        'dish.p02': 'Cappuccino',
    'dish.p03': 'Garden brunch',             'dish.p06': 'French Toast with fruit',
    'dish.p07': 'Sandwich with root chips',  'dish.p12': 'Meyra breakfast',
    'dish.p13': 'Red & green chilaquiles',
    'dish.p12': 'French Toast',
    'dish.g01': 'Avocado Toast',             'dish.g02': 'Spinach & Cheese Omelette',
    'dish.g03': 'Berry dessert',             'dish.g05': 'Avocado toast',
    'dish.g06': 'Chilaquiles with beef',     'dish.g08': 'Patio avocado toast',
    'dish.g09': 'Omelette with salad',       'dish.g10': 'Berry smoothie',
    'dish.g11': 'Green Juice',               'dish.g12': 'Chocolate cake',
    'dish.g13': 'Whole chocolate cake',
    'dish.new.affogato': 'Affogato',         'dish.new.jugo-naranja': 'Orange Juice',
    'dish.new.chilaquiles-rojos': 'Red Chilaquiles with Beef',
    'dish.new.sandwish-queso': 'Cheese Sandwich',
    'dish.new.limonada-cafe': 'Café Lemonade','dish.new.jugo-naranja-cafe': 'Coffee & Orange Juice',
    'dish.new.hot-cakes': 'Hot Cakes',       'dish.new.rol-canela': 'Cinnamon Roll',
    'dish.new.golden-milk': 'Golden Milk',
    'dish.new.chilaquiles-rojos-huevo': 'Red Chilaquiles with Egg',
    'dish.new.pastel-aleman': 'German Cake',
    'dish.new.cheesecake': 'Cheesecake',
    'dish.new.quesadillas-harina': 'Flour Quesadillas',
    'dish.new.tisana': 'Herbal Tea',
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
    'instagram.subtitle': 'Discover our dishes, events and everyday moments.',
    'instagram.follow': 'Follow on Instagram',
    'facebook.title': 'MEYRA Café y Restaurante',
    'facebook.subtitle': 'Photos, stories and updates from our space.',
    'facebook.follow': 'Visit on Facebook',
    'hours.title': 'Hours',
    'hours.weekdays': 'Monday to Saturday',
    'hours.time': '7:30 AM – 2:00 PM',
    'hours.sunday': 'Sunday · Closed',
    'footer.tag': 'Café & Restaurant · La Paz, BCS',
    'footer.address': 'La Paz, Baja California Sur',
    'footer.rights': '© 2026 MEYRA · All rights reserved',
    'footer.madeWith': 'Made with',
    'footer.inLaPaz': 'in La Paz',
    'shamram.title': 'Want a website like this?',
    'shamram.createdBy': 'Website created by ShamRam',
    'shamram.subtitle': 'Practical websites for your business',
    'shamram.button': 'Request a WhatsApp quote',
    'shamram.aria': 'Website created by ShamRam',
  },
};

var WHATSAPP_MSG = {
  es: 'Hola MEYRA, me gustaría reservar una mesa.',
  en: "Hi MEYRA, I'd like to reserve a table.",
};

var SHAMRAM_WHATSAPP_MSG = {
  es: 'Hola ShamRam, me gustaría cotizar una página web para mi negocio.',
  en: "Hi ShamRam, I'd like to request a website quote for my business.",
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

  document.querySelectorAll('[data-i18n-aria-label]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-aria-label');
    var val = I18N[lang][key];
    if (val !== undefined) el.setAttribute('aria-label', val);
  });

  var waUrl = 'https://wa.me/' + CONTACT.whatsapp + '?text=' + encodeURIComponent(WHATSAPP_MSG[lang]);
  document.querySelectorAll('[data-href-lang="wa"]').forEach(function(el) { el.setAttribute('href', waUrl); });
  document.querySelectorAll('[data-href-lang="reserveWa"]').forEach(function(el) { el.setAttribute('href', waUrl); });

  var shamramWaUrl = 'https://wa.me/' + SHAMRAM_CONTACT.whatsapp + '?text=' + encodeURIComponent(SHAMRAM_WHATSAPP_MSG[lang]);
  document.querySelectorAll('[data-href-lang="shamramWa"]').forEach(function(el) { el.setAttribute('href', shamramWaUrl); });

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
