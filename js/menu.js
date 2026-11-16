/* Menú hamburguesa */
(function () {
  var nav = document.querySelector('.nav-tienda');
  if (!nav) return;
  var boton = nav.querySelector('.nav-toggle');
  var menu = nav.querySelector('ul');
  if (!boton || !menu) return;

  var escritorio = window.matchMedia('(min-width: 1101px)');

  function abrir(estado) {
    nav.classList.toggle('abierto', estado);
    boton.setAttribute('aria-expanded', String(estado));
    boton.setAttribute('aria-label', estado ? 'Cerrar menú' : 'Abrir menú');
  }

  boton.addEventListener('click', function () {
    abrir(!nav.classList.contains('abierto'));
  });

  // Cerrar al tocar un link
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) abrir(false);
  });

  // Cerrar con Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('abierto')) {
      abrir(false);
      boton.focus();
    }
  });

  // Cerrar al tocar fuera del menú
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('abierto') && !nav.contains(e.target)) abrir(false);
  });

  // Si se agranda la pantalla, volver al estado normal
  function alCambiar(e) { if (e.matches) abrir(false); }
  if (escritorio.addEventListener) escritorio.addEventListener('change', alCambiar);
  else escritorio.addListener(alCambiar);
})();
