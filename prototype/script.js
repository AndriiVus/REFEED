
document.addEventListener('DOMContentLoaded', function () {
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.nav-links a[data-page]');

  links.forEach(function (link) {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
