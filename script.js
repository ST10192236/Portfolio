const burger = document.querySelector('.burger');
const navLinks = document.querySelector('nav ul');

burger.addEventListener('click', () => {
  burger.classList.toggle('toggle');
  navLinks.classList.toggle('active');
});

// Optional: Close nav when link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('toggle');
    navLinks.classList.remove('active');
  });
});

const cards = document.querySelectorAll('.knowledge-card');
window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < window.innerHeight - 100) {
      card.classList.add('reveal');
    }
  });
});