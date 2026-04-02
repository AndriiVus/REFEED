
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

const solutionItems = document.querySelectorAll('.list-item');
const solutionTextEl = document.querySelector('.solution-text');

const solutionsData = [
  {
    solutionText: "REFEED+ provides consistent and reliable access to healthy food with dignity. By using an in-store kiosk rather than a mobile app, individuals can check available surplus food and redeem items anonymously in familiar local settings. This transactional approach ensures that even those without a permanent residence or technology can secure a steady food supply without the friction of traditional aid models.",
  },
  {
    solutionText: "Food businesses in Ireland face waste disposal costs of up to €500 monthly. REFEED+ offers a high-value, low-cost subscription that reduces these levies by redirecting surplus food away from bins and toward the local community. The system integrates directly into existing POS workflows, making the donation process a frictionless part of the staff routine while enhancing the business’s reputation through monthly impact reports.",
  },
  {
    solutionText: "We provide these organizations with Data-as-a-Service (DaaS) subscriptions, offering real-time, anonymous data on food waste and the needs of underprivileged populations. Unlike static reports, our live dashboard and API integration allow NGOs and government bodies to monitor live data with neighborhood-level granularity. This empirical data is essential for academic research and strategic planning to address the root causes of food insecurity.",
  }
];

if (solutionItems.length > 0) {
  solutionItems[0].classList.add('active');

  const first = solutionsData[0];

  solutionTextEl.textContent = first.solutionText;
}

solutionItems.forEach((item, index) => {
  item.addEventListener('click', () => {

    solutionItems.forEach(i => i.classList.remove('active'));

    item.classList.add('active');

    const data = solutionsData[index];

    solutionTextEl.textContent = data.solutionText;
  });
});
