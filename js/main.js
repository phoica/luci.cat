(function () {
  var current = "EN";

  function apply(lang) {
    var dict = window.I18N[lang];
    if (!dict) return;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.documentElement.setAttribute("lang", lang.toLowerCase());
    var btn = document.getElementById("langBtn");
    if (btn) btn.textContent = lang;
    current = lang;
  }

  function cycle() {
    var order = window.LANG_ORDER;
    var i = order.indexOf(current);
    var next = order[(i + 1) % order.length];
    apply(next);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("langBtn");
    if (btn) btn.addEventListener("click", cycle);
    apply("EN");
  });
})();
