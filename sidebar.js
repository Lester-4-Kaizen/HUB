// ============================
// STUDY HUB — SIDEBAR LOGIC
// ============================

var SIDEBAR_W = 272; // px — must match CSS --sidebar-w
var _sidebarOpen = true; // desktop default: open

function _isMobile() {
  return window.innerWidth <= 768;
}

// Central function: apply sidebar open/closed state
function _applyState(open) {
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('sidebarOverlay');
  var layout  = document.querySelector('.layout');
  var btn     = document.getElementById('sidebarToggleBtn');

  if (!sidebar) return;
  _sidebarOpen = open;

  if (_isMobile()) {
    // On mobile: sidebar slides over content (overlay style), no content shift
    if (open) {
      sidebar.style.transform = 'translateX(0)';
      if (overlay) overlay.style.display = 'block';
    } else {
      sidebar.style.transform = 'translateX(-' + SIDEBAR_W + 'px)';
      if (overlay) overlay.style.display = 'none';
    }
    // Main never shifts on mobile
    var main = document.querySelector('.main');
    if (main) main.style.marginLeft = '0';
    if (btn) {
      btn.style.left = '10px';
      _updateBtnIcon(btn, open);
    }
  } else {
    // On desktop: sidebar slides in/out, main content shifts
    if (open) {
      sidebar.style.transform = 'translateX(0)';
    } else {
      sidebar.style.transform = 'translateX(-' + SIDEBAR_W + 'px)';
    }
    if (overlay) overlay.style.display = 'none';
    var main = document.querySelector('.main');
    if (main) main.style.marginLeft = open ? SIDEBAR_W + 'px' : '0';
    if (btn) {
      // Button sits at the edge of the sidebar — moves with it
      btn.style.left = open ? (SIDEBAR_W - 16) + 'px' : '10px';
      _updateBtnIcon(btn, open);
    }
  }
}

function _updateBtnIcon(btn, open) {
  btn.title = open ? 'Collapse sidebar' : 'Expand sidebar';
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  // Rotate the middle bar to indicate direction
  var bars = btn.querySelectorAll('.stb-bar');
  if (bars.length >= 2) {
    bars[1].style.opacity = open ? '1' : '0.4';
  }
}

function toggleSidebar() {
  _applyState(!_sidebarOpen);
}

function closeSidebar() {
  _applyState(false);
}

function openSidebar() {
  _applyState(true);
}

// Create and inject the persistent sidebar toggle button
function buildSidebarToggleBtn() {
  // Remove any stale instance
  var old = document.getElementById('sidebarToggleBtn');
  if (old) old.remove();

  var btn = document.createElement('button');
  btn.id = 'sidebarToggleBtn';
  btn.setAttribute('aria-label', 'Toggle sidebar');
  btn.innerHTML =
    '<span class="stb-bar"></span>' +
    '<span class="stb-bar"></span>' +
    '<span class="stb-bar"></span>';
  btn.addEventListener('click', toggleSidebar);
  document.body.appendChild(btn);

  // Apply initial state immediately (no transition flash)
  var sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.style.transition = 'none'; // disable transition for initial paint
    var main = document.querySelector('.main');
    if (main) main.style.transition = 'none';
  }

  // Set initial state
  if (_isMobile()) {
    _applyState(false);
  } else {
    _applyState(true);
  }

  // Re-enable transitions after paint
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      var sidebar = document.getElementById('sidebar');
      var main = document.querySelector('.main');
      if (sidebar) sidebar.style.transition = 'transform 0.28s cubic-bezier(0.4,0,0.2,1)';
      if (main) main.style.transition = 'margin-left 0.28s cubic-bezier(0.4,0,0.2,1)';
    });
  });

  // Handle window resize
  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (_isMobile()) {
        _applyState(false);
      } else {
        _applyState(_sidebarOpen);
      }
    }, 100);
  });
}

// ---- Global Sidebar (subjects list) for home.html ----
function buildGlobalSidebar(activeSubjectId) {
  var c = document.getElementById('sidebarNav');
  if (!c || typeof subjects === 'undefined') return;
  c.innerHTML = '';

  var section = document.createElement('div');
  section.className = 'nav-section';
  section.innerHTML = '<div class="nav-section-label">Subjects</div>';

  subjects.forEach(function(s) {
    var a = document.createElement('a');
    a.className = 'nav-item' + (s.id === activeSubjectId ? ' active' : '');
    a.href = s.url || '#';
    a.innerHTML =
      '<span class="nav-item-icon">' + s.icon + '</span>' +
      '<span class="nav-item-name">' + s.name + '</span>' +
      (s.available ? '<span class="nav-item-count">✓</span>' : '');
    section.appendChild(a);
  });
  c.appendChild(section);
}

// ---- Subject Sidebar (AI page) ----
function buildSubjectSidebar(activeTopicId) {
  var c = document.getElementById('sidebarNav');
  if (!c || typeof topics === 'undefined') return;
  c.innerHTML = '';

  // — OVERVIEW section —
  var overviewSec = document.createElement('div');
  overviewSec.className = 'nav-section';
  overviewSec.innerHTML = '<div class="nav-section-label">Overview</div>';

  var allTopicsBtn = document.createElement('button');
  allTopicsBtn.className = 'nav-item' + (!activeTopicId ? ' active' : '');
  allTopicsBtn.id = 'allTopicsNavBtn';
  allTopicsBtn.innerHTML =
    '<span class="nav-item-icon">📋</span>' +
    '<span class="nav-item-name">All Topics</span>';
  allTopicsBtn.onclick = function() {
    if (typeof showAIHome === 'function') showAIHome();
    if (_isMobile()) closeSidebar();
  };
  overviewSec.appendChild(allTopicsBtn);

  var quizQuickBtn = document.createElement('button');
  quizQuickBtn.className = 'sidebar-quiz-btn';
  quizQuickBtn.innerHTML = '🧪 Take AI Quiz';
  quizQuickBtn.onclick = function() {
    if (typeof openGlobalQuiz === 'function') openGlobalQuiz();
  };
  overviewSec.appendChild(quizQuickBtn);
  c.appendChild(overviewSec);

  // — NAVIGATION: back to subjects —
  var backSec = document.createElement('div');
  backSec.className = 'nav-section';
  var backA = document.createElement('a');
  backA.className = 'nav-item';
  backA.href = 'home.html';
  backA.innerHTML =
    '<span class="nav-item-icon">←</span>' +
    '<span class="nav-item-name">All Subjects</span>';
  backSec.appendChild(backA);
  c.appendChild(backSec);

  // — AI TOPICS list —
  var topicsSec = document.createElement('div');
  topicsSec.className = 'nav-section';
  topicsSec.innerHTML = '<div class="nav-section-label">AI Topics</div><div id="navTopics"></div>';
  c.appendChild(topicsSec);

  buildAINav(activeTopicId);
  updateSidebarProgress();
}

function buildAINav(activeTopicId) {
  var c = document.getElementById('navTopics');
  if (!c || typeof topics === 'undefined') return;
  c.innerHTML = '';
  topics.forEach(function(t) {
    var btn = document.createElement('button');
    btn.className = 'nav-item' + (t.id === activeTopicId ? ' active' : '');
    btn.dataset.topic = t.id;
    var isRead = typeof readTopics !== 'undefined' && readTopics.has(t.id);
    btn.innerHTML =
      '<span class="nav-item-icon">' + t.icon + '</span>' +
      '<span class="nav-item-name">' + t.shortName + '</span>' +
      (isRead ? '<span class="nav-item-count">✓</span>' : '');
    btn.onclick = function() { openTopic(t.id); };
    c.appendChild(btn);
  });
}

function updateSidebarProgress() {
  var bar = document.getElementById('sidebarProgressBar');
  var txt = document.getElementById('sidebarProgressText');
  if (!bar || !txt || typeof topics === 'undefined' || typeof readTopics === 'undefined') return;
  var pct = Math.round((readTopics.size / topics.length) * 100);
  bar.style.width = pct + '%';
  txt.textContent = readTopics.size + ' / ' + topics.length + ' topics read';
}

function updateSidebarActiveNav(topicId) {
  document.querySelectorAll('.nav-item[data-topic]').forEach(function(n) {
    n.classList.remove('active');
  });
  var allBtn = document.getElementById('allTopicsNavBtn');
  if (topicId) {
    if (allBtn) allBtn.classList.remove('active');
    var btn = document.querySelector('[data-topic="' + topicId + '"]');
    if (btn) btn.classList.add('active');
  } else {
    if (allBtn) allBtn.classList.add('active');
  }
}

function initSidebarSearch() {
  var input = document.getElementById('sidebarSearch');
  if (!input) return;
  input.addEventListener('input', function() {
    var q = this.value.toLowerCase();
    document.querySelectorAll('#navTopics .nav-item').forEach(function(btn) {
      var name = btn.querySelector('.nav-item-name');
      btn.style.display = name && name.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

// ---- Topic Page Sidebar (for individual topic-*.html pages) ----
function buildTopicPageSidebar(activeTopicId) {
  var c = document.getElementById('sidebarNav');
  if (!c || typeof topics === 'undefined') return;
  c.innerHTML = '';

  // Back link
  var backSec = document.createElement('div');
  backSec.className = 'nav-section';
  var backA = document.createElement('a');
  backA.className = 'nav-item';
  backA.href = 'ai.html';
  backA.innerHTML = '<span class="nav-item-icon">←</span><span class="nav-item-name">AI Subject Home</span>';
  backSec.appendChild(backA);
  c.appendChild(backSec);

  // Overview with link to ai.html
  var overviewSec = document.createElement('div');
  overviewSec.className = 'nav-section';
  overviewSec.innerHTML = '<div class="nav-section-label">Overview</div>';
  var allA = document.createElement('a');
  allA.className = 'nav-item';
  allA.href = 'ai.html';
  allA.innerHTML = '<span class="nav-item-icon">📋</span><span class="nav-item-name">All Topics</span>';
  overviewSec.appendChild(allA);

  // Take AI Quiz button
  var quizBtn = document.createElement('a');
  quizBtn.className = 'sidebar-quiz-btn';
  quizBtn.href = 'ai.html';
  quizBtn.innerHTML = '🧪 Take AI Quiz';
  overviewSec.appendChild(quizBtn);
  c.appendChild(overviewSec);

  // GfG12 Topics
  var topicsSec = document.createElement('div');
  topicsSec.className = 'nav-section';
  topicsSec.innerHTML = '<div class="nav-section-label">GfG12 Topics</div>';
  topics.filter(function(t){ return t.id !== 'finals-reference'; }).forEach(function(t) {
    var a = document.createElement('a');
    a.className = 'nav-item' + (t.id === activeTopicId ? ' active' : '');
    a.href = t.url || ('topic-' + t.id + '.html');
    a.innerHTML = '<span class="nav-item-icon">' + t.icon + '</span><span class="nav-item-name">' + t.shortName + '</span>';
    topicsSec.appendChild(a);
  });
  c.appendChild(topicsSec);

  // Finals Reference
  var finalsSec = document.createElement('div');
  finalsSec.className = 'nav-section';
  finalsSec.innerHTML = '<div class="nav-section-label">Reference</div>';
  var finalsA = document.createElement('a');
  finalsA.className = 'nav-item' + ('finals-reference' === activeTopicId ? ' active' : '');
  finalsA.href = 'topic-finals-reference.html';
  finalsA.innerHTML = '<span class="nav-item-icon">📄</span><span class="nav-item-name">Finals Reference</span>';
  finalsSec.appendChild(finalsA);
  c.appendChild(finalsSec);
}