function setLang(lang) {
  document.querySelectorAll('[data-lv]').forEach(el => {
    el.innerText = el.getAttribute('data-' + lang);
  });
}
