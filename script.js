const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const anchorLinks = document.querySelectorAll('a[href^="#"]');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = event.currentTarget.getAttribute('href');

    if (target && target.startsWith('#')) {
      event.preventDefault();
      const section = document.querySelector(target);
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks.classList.remove('open');
    }
  });
});

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-2px)';
    card.style.boxShadow = '0 12px 32px rgba(41, 128, 185, 0.18)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 8px 24px rgba(1, 5, 18, 0.16)';
  });
});
