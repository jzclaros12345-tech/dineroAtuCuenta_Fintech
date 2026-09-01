/* Navegación común para los wireframes de la app autenticada.
 * Funciona también al abrir los HTML directamente desde el sistema de archivos. */
(function () {
  'use strict';

  const routes = {
    'Resumen': 'resumen.html',
    'Cuentas': 'cuentas-billeteras.html',
    'Cuentas y Billeteras': 'cuentas-billeteras.html',
    'Transacciones': 'enviar-dinero.html',
    'Transferencias': 'enviar-dinero.html',
    'Compra USDT': 'comprar-dolares.html',
    'Apuestas y Predicciones': 'apuestas-predicciones.html',
    'Refiere y Gana': 'refiere-y-gana.html',
    'Analíticas': 'analiticas.html',
    'Notificaciones': 'notifications.html',
    'Ajustes': 'ajustes.html',
    'Ayuda y Soporte': 'ayuda-y-soporte.html'
  };

  function labelFor(item) {
    return (item.getAttribute('title') || item.dataset.tip || '')
      .replace(/\s+—\s+Próximamente$/i, '');
  }

  function disable(item) {
    item.classList.add('disabled');
    item.setAttribute('aria-disabled', 'true');
    if (item.tagName === 'BUTTON') item.disabled = true;
    else item.removeAttribute('tabindex');
  }

  document.querySelectorAll('.sidebar .nav-item').forEach((item) => {
    const route = routes[labelFor(item)];

    if (!route) {
      // El ítem no tiene una pantalla disponible todavía.
      disable(item);
      return;
    }

    // Una ruta ya disponible deja de ser un placeholder aunque el HTML
    // anterior hubiera marcado el ítem como «Próx.».
    item.classList.remove('disabled');
    item.removeAttribute('aria-disabled');
    item.removeAttribute('disabled');
    item.removeAttribute('title');
    const soon = item.querySelector('.soon, .soon-badge, .badge-soon');
    if (soon) soon.remove();

    item.dataset.href = route;
    const isCurrent = window.location.pathname.endsWith('/' + route);
    if (isCurrent) {
      document.querySelectorAll('.sidebar .nav-item.active').forEach((active) => {
        active.classList.remove('active');
        active.removeAttribute('aria-current');
      });
      item.classList.add('active');
      item.setAttribute('aria-current', 'page');
    } else if (item.classList.contains('active')) {
      item.setAttribute('aria-current', 'page');
    }
    if (item.tagName !== 'BUTTON') {
      item.setAttribute('role', 'link');
      item.setAttribute('tabindex', '0');
    }
  });

  document.addEventListener('click', (event) => {
    const item = event.target.closest('.sidebar .nav-item[data-href]');
    if (!item || item.getAttribute('aria-disabled') === 'true') return;

    // Captura el evento antes de handlers heredados que sólo mostraban alerts demo.
    event.preventDefault();
    event.stopPropagation();
    window.location.href = item.dataset.href;
  }, true);

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const item = event.target.closest('.sidebar .nav-item[data-href]');
    if (!item || item.getAttribute('aria-disabled') === 'true') return;

    event.preventDefault();
    window.location.href = item.dataset.href;
  });
}());
