/* Preferencias compartidas y tolerantes a HTML abierto directamente (file://). */
(function () {
  'use strict';

  const themeKey = 'datc-theme';
  const langKey = 'datc-lang';
  const validThemes = new Set(['dark', 'light']);
  const validLangs = new Set(['es', 'en']);
  function read(key) {
    try { return localStorage.getItem(key); } catch (_) { return null; }
  }

  const savedTheme = read(themeKey);
  const savedLang = read(langKey);
  const theme = validThemes.has(savedTheme) ? savedTheme : 'dark';
  const lang = validLangs.has(savedLang) ? savedLang : 'es';
  const root = document.documentElement;
  const referralThemeButton = document.getElementById('themeBtn');
  const standardThemeButtons = Array.from(document.querySelectorAll('[data-theme-btn]'));
  const langToggle = document.getElementById('lang-toggle');

  function saveTheme(value) {
    if (!validThemes.has(value)) return;
    try { localStorage.setItem(themeKey, value); } catch (_) {}
  }

  function saveLang(value) {
    if (!validLangs.has(value)) return;
    try { localStorage.setItem(langKey, value); } catch (_) {}
  }

  standardThemeButtons.forEach((button) => {
    button.addEventListener('click', () => saveTheme(button.dataset.themeBtn));
  });

  if (referralThemeButton) {
    referralThemeButton.addEventListener('click', () => {
      saveTheme(root.getAttribute('data-theme'));
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => saveLang(root.lang));
  }

  document.querySelectorAll('.lang-option[data-lang]').forEach((option) => {
    option.addEventListener('click', () => saveLang(option.dataset.lang));
  });

  if (standardThemeButtons.length) {
    root.setAttribute('data-theme', theme);
    standardThemeButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.themeBtn === theme);
    });
  } else if (referralThemeButton && theme === 'light') {
    // El listener propio actualiza también el icono y el estado interno de Referidos.
    referralThemeButton.click();
  }

  if (langToggle && lang === 'en') {
    // Cada wireframe estándar inicia en español; su listener aplica las traducciones.
    langToggle.click();
  } else if (!langToggle && lang === 'en' && typeof applyLang === 'function') {
    applyLang(lang);
  }
}());
