(function() {

const NAV = `<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-logo"><img src="assets/logo.svg" alt="Chingolandia - Restaurante Mexicano Barcelona" width="42" height="42"></a>
    <ul class="nav-links">
      <li><a href="index.html">Inicio</a></li>
      <li><a href="menu.html">Menú</a></li>
      <li><a href="pedidos.html">Pedidos</a></li>
      <li><a href="reservas.html">Reservas</a></li>
      <li><a href="eventos.html">Grupos & Eventos</a></li>
      <li><a href="opiniones.html">Opiniones</a></li>
      <li><a href="contacto.html">Contacto</a></li>
      <li><a href="reservas.html" class="nav-cta">Reservar</a></li>
    </ul>
    <button class="nav-hamburger" aria-label="Menú"><span></span><span></span><span></span></button>
  </div>
</nav>`;

const TICKER = `<div class="ticker"><div class="ticker-inner">
  <span class="ticker-item">Tacos Auténticos</span><span class="ticker-item">Birria de Res</span>
  <span class="ticker-item">Margaritas Artesanales</span><span class="ticker-item">Cochinita Pibil</span>
  <span class="ticker-item">Happy Hour</span><span class="ticker-item">Eventos Privados</span>
  <span class="ticker-item">Mex Crazy Delights</span><span class="ticker-item">Delivery Disponible</span>
  <span class="ticker-item">Tacos Auténticos</span><span class="ticker-item">Birria de Res</span>
  <span class="ticker-item">Margaritas Artesanales</span><span class="ticker-item">Cochinita Pibil</span>
  <span class="ticker-item">Happy Hour</span><span class="ticker-item">Eventos Privados</span>
  <span class="ticker-item">Mex Crazy Delights</span><span class="ticker-item">Delivery Disponible</span>
</div></div>`;

const FOOTER = `<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo"><img src="assets/logo.svg" alt="Chingolandia - Restaurante Mexicano Barcelona" width="42" height="42"></div>
        <p class="footer-tagline">Auténtica comida mexicana en el corazón de L'Eixample, Barcelona. Mex Crazy Delights.</p>
      </div>
      <div class="footer-col"><h4>Navegar</h4><ul>
        <li><a href="index.html">Inicio</a></li><li><a href="menu.html">Menú</a></li>
        <li><a href="pedidos.html">Pedidos</a></li><li><a href="reservas.html">Reservas</a></li>
      </ul></div>
      <div class="footer-col"><h4>Más</h4><ul>
        <li><a href="eventos.html">Grupos & Eventos</a></li>
        <li><a href="opiniones.html">Opiniones</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul></div>
      <div class="footer-col"><h4>Contacto</h4><ul>
        <li><a href="tel:+34611831570">+34 611 83 15 70</a></li>
        <li style="color:var(--gris);font-size:.88rem">Carrer de Floridablanca, 108</li>
        <li style="color:var(--gris);font-size:.88rem">L'Eixample · Barcelona</li>
        <li style="color:var(--gris);font-size:.88rem;margin-top:.4rem">Lun–Vie 13h–23:30h</li>
        <li style="color:var(--gris);font-size:.88rem">Sáb–Dom 12:30h–00h</li>
      </ul></div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Chingolandia · L'Eixample, Barcelona</p>
      <div class="footer-socials">
        <a href="#" title="TikTok">TK</a><a href="#" title="Instagram">IG</a><a href="#" title="Facebook">FB</a>
      </div>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV);
  const hero = document.querySelector('.hero-section');
  if (hero) hero.insertAdjacentHTML('afterend', TICKER);
  document.body.insertAdjacentHTML('beforeend', FOOTER);

  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  const hb = document.querySelector('.nav-hamburger');
  const nl = document.querySelector('.nav-links');
  if (hb && nl) {
    hb.addEventListener('click', () => nl.classList.toggle('open'));
    nl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nl.classList.remove('open')));
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.07, rootMargin: '0px 0px -20px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) nav.style.borderBottomColor = scrollY > 40 ? 'rgba(255,45,120,0.5)' : 'rgba(255,45,120,0.25)';
  }, { passive: true });
});

})();
