const menuToggleButton = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open')
})
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  const question = faq.querySelector('.faq-question');
  const answer = faq.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});
