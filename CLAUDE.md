# MEYRA Café y Restaurante — Sitio Web

Sitio vitrina estático (HTML + CSS + JS puro). Dueño: Randy. Nivel: principiante.
Idioma de trabajo: español. **Explica cada cambio antes de hacerlo. Pasos cortos y claros.**

## Estructura
- `index.html` — página única completa
- `css/` — un archivo por sección: `base.css`, `nav.css`, `hero.css`, `visitanos.css`, `menu.css`, `nosotros.css`, `galeria.css`, `resenas.css`, `footer.css`, `responsive.css`
- `js/` — un archivo por funcionalidad: `i18n.js`, `nav.js`, `carousel.js`, `gallery.js`, `main.js` (solo init)
- `assets/img/` — fotos; `assets/logos/` — logo + favicon; `assets/menu/` — PDFs ES/EN

## Diseño y Responsive
- Paleta: café/crema (`--c-coffee-*`, `--c-cream-*`) + `--c-sage` (verde oliva, sin uso activo) + `--c-cream-300` (#e0cea4). Tipografía: Cormorant Garamond + Work Sans.
- Orden actual de secciones: Hero → Menú → Reserva/Visítanos → Galería → Nosotros → Reseñas → Redes → Footer
- Navbar: Inicio · Menú · Reserva · Galería · Nosotros · Reseñas
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

## Respuestas compactas (permanente)
- Sin párrafo de introducción antes de actuar — ir directo al grano.
- Sin resumen al final de lo que se hizo — el usuario ve el resultado.
- Actualizaciones de estado en 1 oración, no en listas.
- Si el cambio es pequeño y claro, ejecutar sin explicar el proceso paso a paso.
- Propuestas y diagnósticos en 2-3 líneas máximo antes de pedir aprobación.
- Estas reglas no afectan: razonar antes de ejecutar, pedir confirmación en cambios riesgosos, ni explicar el WHY cuando no es obvio.

## Fondos de sección actuales (orden real)
| Sección | id | clase de fondo |
|---|---|---|
| Hero | — | propio |
| Menú | `#menu` | `section--cream-100` |
| Reserva+Visítanos | `#contact` | `section--contact-split` (ver nota) |
| Galería | `#gallery` | `section--cream` |
| Nosotros | `#about` | `section--cream-100` |
| Reseñas | `#reviews` | `section--cream` |
| Redes | `#instagram` | `section--cream` |

**Nota `section--contact-split`:** en desktop fondo único `#e8ddc8` (crema cálido). En ≤1024px el grid colapsa a una columna — la sección toma fondo `#5C3A1E` (café del horario del Hero) y la columna del mapa (`div:first-child`) recibe fondo `#e8ddc8` extendido a `100vw`. El `aside.reserve-card` mantiene su propio fondo `--c-coffee-900` con `border-radius` original. En móvil el `aside` tiene `order: -1` (aparece arriba). Estilos en `css/visitanos.css` y `css/base.css`.

## Regla crítica — integridad del HTML
Antes de ejecutar cualquier tarea que mueva, reordene o modifique bloques de `index.html`:
1. Listar todos los `<section>` dentro de `<main>` antes de tocar nada.
2. Al terminar, confirmar que el número de secciones es exactamente el mismo.
3. Si falta alguna, restaurarla antes de marcar la tarea como completa.
**Nunca eliminar contenido que no se haya pedido explícitamente.**

## Reglas importantes
- No romper diseño visual al hacer cambios de código.
- No agregar features que no se pidan.
- Si algo puede verse diferente en móvil vs escritorio, preguntar antes.
- Preferir `textContent` sobre `innerHTML` en JS.
- Antes de abrir muchos archivos, avisar cuántos y por qué, para que Randy decida si vale la pena.
