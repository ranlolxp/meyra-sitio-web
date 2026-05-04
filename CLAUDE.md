# MEYRA Café y Restaurante — Sitio Web

Sitio vitrina estático (HTML + CSS + JS puro). Dueño: Randy. Nivel: principiante.
Idioma de trabajo: español. **Explica cada cambio antes de hacerlo. Pasos cortos y claros.**

## Estructura
- `index.html` — página única completa
- `css/` — un archivo por sección: `base.css`, `nav.css`, `hero.css`, `visitanos.css`, `menu.css`, `nosotros.css`, `galeria.css`, `resenas.css`, `footer.css`, `responsive.css`
- `js/` — un archivo por funcionalidad: `i18n.js`, `nav.js`, `carousel.js`, `gallery.js`, `main.js` (solo init)
- `assets/img/` — fotos; `assets/logos/` — logo + favicon; `assets/menu/` — PDFs ES/EN

## Diseño y Responsive
- Paleta: café/crema (`--c-coffee-*`, `--c-cream-*`). Tipografía: Cormorant Garamond + Work Sans.
- Secciones: Hero → Visítanos → Menú → Nosotros → Galería → Reseñas → Redes → Footer
- Breakpoints: ≤1024px tablet · ≤900px hamburguesa · ≤768px móvil · ≤420px móvil pequeño

## Funcionalidades clave
- Bilingüe ES/EN con `data-i18n` y `localStorage`; modal de bienvenida (primera visita)
- Carrusel de reseñas (flechas, dots, autoplay 8s, modal al click) y galería con modal
- Links WhatsApp y teléfono dinámicos según idioma

## Seguridad
- CSP (meta tag + `_headers` Hostinger), iframe Maps con sandbox, `rel="noreferrer"` en externos, localStorage con lista blanca.

## Modo de trabajo con prompts externos
- Si el prompt llega detallado con archivos y líneas específicas (estilo ChatGPT), ejecutarlo directo sin re-explorar el repo, salvo que el cambio tenga repercusiones no obvias o no quede claro qué se va a modificar.
- Si la instrucción es casual o ambigua, comportarse como siempre.

## Estructura y eficiencia

**Fragmentación por sección (regla permanente):**
- Cada sección del sitio tiene su propio archivo CSS y JS.
- Al agregar una sección nueva, crear automáticamente su archivo CSS y su archivo JS si tiene lógica propia. Nunca escribir estilos o funciones de una sección nueva dentro de un archivo existente.
- Al modificar algo existente, abrir solo el archivo de esa sección.

**Apertura de archivos:**
- Antes de ejecutar cualquier tarea, identificar qué archivos son necesarios y abrir solo esos.
- Si la tarea implica un volumen de lectura que va a generar un gasto de tokens significativo (criterio tuyo como agente), avisarme antes de proceder con la lista de archivos y el motivo. Si el gasto es rutinario, proceder directo.

**Prompts externos:**
- Si un prompt llega con archivo y línea específica, ejecutar directo sin re-explorar el proyecto.

## Reglas importantes
- No romper diseño visual al hacer cambios de código.
- No agregar features que no se pidan.
- Si algo puede verse diferente en móvil vs escritorio, preguntar antes.
- Preferir `textContent` sobre `innerHTML` en JS.
- Antes de abrir muchos archivos, avisar cuántos y por qué, para que Randy decida si vale la pena.
