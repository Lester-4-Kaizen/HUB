// ============================
// STUDY HUB — NAVBAR & FOOTER
// ============================

function buildNavbar(activePage) {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.innerHTML = `
    <a class="navbar-brand" href="index.html" title="Study Hub Home">
      <div class="navbar-brand-icon">📚</div>
      <span class="navbar-brand-name">STUDY HUB</span>
    </a>
    <div class="navbar-spacer"></div>
    <nav class="navbar-links">
      <a class="navbar-link ${activePage === 'home' || activePage === 'landing' ? 'active' : ''}" href="home.html">Home</a>
    </nav>
  `;
}

function buildFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  footer.innerHTML = `<span>© 2025 Study Hub · Built for CS Students · 7 subjects · Topics, Flashcards &amp; Quizzes</span>`;
}