# MEYRA Café y Restaurante — Sitio Web

Sitio vitrina estático (HTML + CSS + JS puro, sin frameworks).
Dueño: Randy. Nivel: principiante. Idioma de trabajo: español.
**Explica cada cambio antes de hacerlo. Pasos cortos y claros.**

## Estructura
- `index.html` — página única completa
- `css/styles.css` — todos los estilos
- `js/main.js` — lógica (i18n, burger, modal de idioma)
- `assets/img/` — fotos de platillos y reseñas
- `assets/logos/` — logo PNG + favicon SVG
- `assets/menu/` — menús PDF (ES + EN)

## Diseño
- Paleta: café/crema (`--c-coffee-*`, `--c-cream-*`)
- Tipografía: Cormorant Garamond (serif) + Work Sans (sans)
- Secciones: Hero → Visítanos (mapa) → Menú → Nosotros → Galería → Reseñas → Redes → Footer

## Responsive (breakpoints)
- `≤1024px` — tablet: imagen arriba, panel abajo, nav compacto
- `≤900px` — hamburguesa activa, logo nav 52px
- `≤768px` — móvil: hero con `calc(100dvh - 76px)`, logo nav 44px
- `≤420px` — móvil pequeño: botones full-width

## Funcionalidades clave
- Bilingüe ES/EN con `data-i18n` y `localStorage`
- Modal de bienvenida (elige idioma, solo primera visita)
- Carrusel de reseñas Google: flechas prev/next, dots, autoplay 8s, modal al click
- Galería con modal de imagen
- Links WhatsApp y teléfono dinámicos según idioma

## Seguridad aplicada
- CSP via meta tag y archivo `_headers` (para Hostinger)
- iframe Google Maps con `sandbox="allow-scripts allow-same-origin"`
- localStorage con lista blanca de claves/valores
- Todos los `target="_blank"` tienen `rel="noreferrer"`

## Pendiente
- Subir a Hostinger con dominio `meyra.mx`
- GitHub: github.com/ranlolxp/meyra-sitio-web

## Reglas importantes
- No romper diseño visual al hacer cambios de código
- No agregar features que no se pidan
- Si algo puede verse diferente en móvil vs escritorio, preguntar antes
- Preferir `textContent` sobre `innerHTML` en JS
