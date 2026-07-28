(function () {
  var root = document.documentElement;
  var KEY = 'theme';
  var toggle = document.querySelector('.theme-toggle');

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    if (toggle) toggle.textContent = theme === 'dark' ? '○' : '●';
  }

  var saved = localStorage.getItem(KEY);
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(saved || (prefersDark ? 'dark' : 'light'));

  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      apply(next);
      localStorage.setItem(KEY, next);
    });
  }

  // Highlight active nav link
  var path = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('nav.site-nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === '/' && path === '/') { a.classList.add('active'); return; }
    if (href !== '/' && path.indexOf(href) === 0) a.classList.add('active');
  });
})();
