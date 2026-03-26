// ===== CHINGOLANDIA — SHARED JS =====

document.addEventListener('DOMContentLoaded', () => {

  // --- Hamburger menu ---
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // --- Mark active nav link ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // --- Scroll animations ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el));

  // --- Nav scroll effect ---
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
      nav.style.borderBottomColor = window.scrollY > 50
        ? 'rgba(232,83,42,0.35)'
        : 'rgba(232,83,42,0.15)';
    }
  }, { passive: true });

});

// Scroll animation styles injected
const style = document.createElement('style');
style.textContent = `
  .fade-up { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
  .fade-in { opacity: 0; transition: opacity 0.6s ease; }
  .fade-in.visible { opacity: 1; }
  .fade-up:nth-child(2) { transition-delay: 0.1s; }
  .fade-up:nth-child(3) { transition-delay: 0.2s; }
  .fade-up:nth-child(4) { transition-delay: 0.3s; }
  .fade-up:nth-child(5) { transition-delay: 0.4s; }
  .fade-up:nth-child(6) { transition-delay: 0.5s; }
`;
document.head.appendChild(style);
