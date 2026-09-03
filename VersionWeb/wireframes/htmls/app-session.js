/* Estado de sesión del prototipo.
 * No sustituye la autenticación del backend: sólo protege la navegación entre
 * wireframes hasta que exista una sesión real del servidor. */
(function () {
  'use strict';

  const SESSION_KEY = 'dineroAtucuenta.authenticated';
  const HOME_PAGE = 'homepage-preview.html';
  const LOGIN_PAGE = 'autenticacion.html?view=login';

  function isAuthenticated() {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  }

  function signIn() {
    sessionStorage.setItem(SESSION_KEY, 'true');
  }

  function signOut() {
    sessionStorage.removeItem(SESSION_KEY);
    window.location.replace(HOME_PAGE);
  }

  // Este archivo sólo se incluye en vistas privadas. La comprobación temprana
  // evita que se pueda volver a entrar con el historial del navegador.
  if (!isAuthenticated()) {
    window.location.replace(LOGIN_PAGE);
    return;
  }

  window.dATCSession = { isAuthenticated, signIn, signOut };

  // Los HTML tienen variantes históricas de los modales. Un único listener en
  // captura garantiza el mismo cierre desde perfil y desde Ajustes.
  document.addEventListener('click', function (event) {
    const confirm = event.target.closest('#logoutConfirm, #logout-confirm, #confirm-logout');
    if (!confirm) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    signOut();
  }, true);
}());
