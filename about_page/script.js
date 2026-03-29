const testimonialItems = document.querySelectorAll('.list-item');
const quoteEl = document.querySelector('.quote');

const testimonialsData = [
  {
    quote: "REFEED+ provides consistent and reliable access to healthy food with dignity. By using an in-store kiosk rather than a mobile app, individuals can check available surplus food and redeem items anonymously in familiar local settings. This transactional approach ensures that even those without a permanent residence or technology can secure a steady food supply without the friction of traditional aid models.",
  },
  {
    quote: "Food businesses in Ireland face waste disposal costs of up to €500 monthly. REFEED+ offers a high-value, low-cost subscription that reduces these levies by redirecting surplus food away from bins and toward the local community. The system integrates directly into existing POS workflows, making the donation process a frictionless part of the staff routine while enhancing the business’s reputation through monthly impact reports.",
  },
  {
    quote: "We provide these organizations with Data-as-a-Service (DaaS) subscriptions, offering real-time, anonymous data on food waste and the needs of underprivileged populations. Unlike static reports, our live dashboard and API integration allow NGOs and government bodies to monitor live data with neighborhood-level granularity. This empirical data is essential for academic research and strategic planning to address the root causes of food insecurity.",
  }
];

if (testimonialItems.length > 0) {
  testimonialItems[0].classList.add('active');

  const first = testimonialsData[0];

  quoteEl.textContent = first.quote;
}

testimonialItems.forEach((item, index) => {
  item.addEventListener('click', () => {

    testimonialItems.forEach(i => i.classList.remove('active'));

    item.classList.add('active');

    const data = testimonialsData[index];

    quoteEl.textContent = data.quote;
  });
});