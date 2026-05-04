/* ============================================================
   MEYRA — Nav: hamburguesa móvil
   ============================================================ */

function setupBurger() {
  var burger = document.getElementById('navBurger');
  var menu = document.querySelector('.site-nav__menu');
  if (!burger || !menu) return;

  burger.addEventListener('click', function() {
    var isOpen = menu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      menu.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}
