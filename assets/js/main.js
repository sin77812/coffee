// Intersection reveal
(() => {
  const els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || els.length === 0) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

// Simple lightbox
(() => {
  const links = document.querySelectorAll('.js-lightbox');
  if (!links.length) return;

  const backdrop = document.createElement('div');
  backdrop.className = 'lightbox-backdrop';
  backdrop.setAttribute('role', 'dialog');
  backdrop.setAttribute('aria-modal', 'true');
  backdrop.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close">×</button>
      <img alt="" />
    </div>`;
  document.body.appendChild(backdrop);

  const imgEl = backdrop.querySelector('img');
  const closeBtn = backdrop.querySelector('.lightbox-close');
  const focusables = () => [closeBtn];

  const close = () => {
    backdrop.classList.remove('is-open');
    imgEl.src = '';
  };
  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
  document.addEventListener('keydown', (e) => {
    if (!backdrop.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') {
      const f = focusables();
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const alt = link.getAttribute('data-alt') || '';
      imgEl.src = href;
      imgEl.alt = alt;
      backdrop.classList.add('is-open');
      closeBtn.focus();
    });
  });
})();

// Lazy-load videos (hero and others)
(() => {
  const vids = document.querySelectorAll('video[data-src]');
  if (!vids.length) return;

  const loadVideo = (v) => {
    if (v.dataset.loaded) return;
    v.src = v.dataset.src;
    v.removeAttribute('data-src');
    v.dataset.loaded = 'true';
    // prefer auto preload after reveal
    v.preload = 'auto';
    // ensure muted/inline for autoplay on mobile
    v.muted = true;
    v.playsInline = true;
    v.addEventListener('loadeddata', () => { v.play().catch(() => {}); }, { once: true });
  };

  if (!('IntersectionObserver' in window)) {
    vids.forEach(loadVideo);
    return;
  }
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        loadVideo(entry.target);
        io.unobserve(entry.target);
      }
    }
  }, { threshold: 0.1 });
  vids.forEach(v => io.observe(v));
})();
