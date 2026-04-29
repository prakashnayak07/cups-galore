/* main.js — site-wide interactivity: cart drawer, category dropdown, mobile menu, mobile panels */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Element refs ─────────────────────────────────────────────── */
  const navbar        = document.getElementById('navbar-wrapper');
  const catDropdown   = document.getElementById('cat-dropdown');
  const catBtn        = document.getElementById('cat-btn');
  const catCloseBtn   = document.getElementById('cat-close-btn');

  const cartOverlay   = document.getElementById('cart-overlay');
  const cartBackdrop  = document.getElementById('cart-backdrop');
  const cartPanel     = document.getElementById('cart-panel');
  const cartBtn       = document.getElementById('cart-btn');
  const cartCloseBtn  = document.getElementById('cart-close-btn');

  const hamburgerBtn        = document.getElementById('hamburger-btn');
  const hamburgerIcon       = document.getElementById('hamburger-icon');
  const hamburgerCloseIcon  = document.getElementById('hamburger-close-icon');
  const mobileMenu          = document.getElementById('mobile-menu');

  const mobileCatBtn      = document.getElementById('mobile-cat-btn');
  const mobileCatOverlay  = document.getElementById('mobile-cat-overlay');
  const mobileCatBackdrop = document.getElementById('mobile-cat-backdrop');
  const mobileCatPanel    = document.getElementById('mobile-cat-panel');
  const mobileCatClose    = document.getElementById('mobile-cat-close');

  /* ── State flags ──────────────────────────────────────────────── */
  let catOpen       = false;
  let cartOpen      = false;
  let menuOpen      = false;
  let mobileCatOpen = false;

  /* ── Helpers ──────────────────────────────────────────────────── */

  /* Lock/unlock body scroll when any overlay is active */
  function updateBodyScroll() {
    document.body.style.overflow = (cartOpen || mobileCatOpen) ? 'hidden' : '';
  }

  /* Return the current navbar bottom offset (for category dropdown top) */
  function getNavbarBottom() {
    return navbar ? navbar.getBoundingClientRect().bottom : 0;
  }

  /* Position the category dropdown just below the sticky navbar */
  function positionCatDropdown() {
    if (catDropdown) {
      catDropdown.style.top = `${getNavbarBottom()}px`;
    }
  }

  /* ── Category Dropdown (desktop, slide down) ─────────────────── */

  function openCat() {
    if (!catDropdown || catOpen) return;
    catOpen = true;
    positionCatDropdown();
    catDropdown.classList.remove('hidden');
    /* Force reflow so the initial translateY(-110%) is applied before transitioning */
    catDropdown.getBoundingClientRect();
    catDropdown.style.transform = 'translateY(0)';
    catDropdown.setAttribute('aria-hidden', 'false');
    if (catBtn) catBtn.setAttribute('aria-expanded', 'true');
  }

  function closeCat() {
    if (!catDropdown || !catOpen) return;
    catOpen = false;
    catDropdown.style.transform = 'translateY(-110%)';
    catDropdown.setAttribute('aria-hidden', 'true');
    if (catBtn) catBtn.setAttribute('aria-expanded', 'false');
    /* Hide element after transition so it doesn't intercept pointer events */
    catDropdown.addEventListener('transitionend', () => {
      if (!catOpen) catDropdown.classList.add('hidden');
    }, { once: true });
  }

  function toggleCat() {
    catOpen ? closeCat() : openCat();
  }

  if (catBtn)      catBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleCat(); });
  if (catCloseBtn) catCloseBtn.addEventListener('click', closeCat);

  /* Close category dropdown when clicking outside */
  document.addEventListener('click', (e) => {
    if (catOpen && !catDropdown.contains(e.target) && e.target !== catBtn && !catBtn.contains(e.target)) {
      closeCat();
    }
  });

  /* Re-position on resize (e.g. if top bar collapses) */
  window.addEventListener('resize', () => {
    if (catOpen) positionCatDropdown();
  });

  /* ── Cart Drawer (desktop + mobile, slides from right) ───────── */

  function openCart() {
    if (!cartOverlay || cartOpen) return;
    /* Close other panels first */
    closeMobileMenu();
    cartOpen = true;
    cartOverlay.classList.remove('pointer-events-none');
    cartOverlay.setAttribute('aria-hidden', 'false');
    /* Animate */
    requestAnimationFrame(() => {
      cartBackdrop.style.opacity = '1';
      cartPanel.style.transform  = 'translateX(0)';
    });
    updateBodyScroll();
  }

  function closeCart() {
    if (!cartOverlay || !cartOpen) return;
    cartOpen = false;
    cartBackdrop.style.opacity = '0';
    cartPanel.style.transform  = 'translateX(100%)';
    cartOverlay.setAttribute('aria-hidden', 'true');
    /* Re-enable pointer-events after transition */
    cartPanel.addEventListener('transitionend', () => {
      if (!cartOpen) cartOverlay.classList.add('pointer-events-none');
    }, { once: true });
    updateBodyScroll();
  }

  if (cartBtn)      cartBtn.addEventListener('click',      (e) => { e.stopPropagation(); openCart(); });
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);

  /* Backdrop click closes cart */
  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', (e) => {
      if (e.target === cartBackdrop) closeCart();
    });
  }

  /* ── Mobile Hamburger Menu (slide down) ──────────────────────── */

  function openMobileMenu() {
    if (!mobileMenu || menuOpen) return;
    menuOpen = true;
    hamburgerIcon.classList.add('hidden');
    hamburgerCloseIcon.classList.remove('hidden');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    /* Expand to scrollHeight for smooth animation */
    mobileMenu.style.maxHeight = `${mobileMenu.scrollHeight}px`;
  }

  function closeMobileMenu() {
    if (!mobileMenu || !menuOpen) return;
    menuOpen = false;
    hamburgerIcon.classList.remove('hidden');
    hamburgerCloseIcon.classList.add('hidden');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.style.maxHeight = '0';
  }

  function toggleMobileMenu() {
    menuOpen ? closeMobileMenu() : openMobileMenu();
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleMobileMenu(); });

  /* ── Mobile Categories Panel (slide up from bottom) ──────────── */

  function openMobileCat() {
    if (!mobileCatOverlay || mobileCatOpen) return;
    /* Close hamburger menu first if open */
    closeMobileMenu();
    mobileCatOpen = true;
    mobileCatOverlay.classList.remove('pointer-events-none');
    mobileCatOverlay.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => {
      mobileCatBackdrop.style.opacity = '1';
      mobileCatPanel.style.transform  = 'translateY(0)';
    });
    updateBodyScroll();
  }

  function closeMobileCat() {
    if (!mobileCatOverlay || !mobileCatOpen) return;
    mobileCatOpen = false;
    mobileCatBackdrop.style.opacity = '0';
    mobileCatPanel.style.transform  = 'translateY(100%)';
    mobileCatOverlay.setAttribute('aria-hidden', 'true');
    mobileCatPanel.addEventListener('transitionend', () => {
      if (!mobileCatOpen) mobileCatOverlay.classList.add('pointer-events-none');
    }, { once: true });
    updateBodyScroll();
  }

  if (mobileCatBtn)   mobileCatBtn.addEventListener('click',   (e) => { e.stopPropagation(); openMobileCat(); });
  if (mobileCatClose) mobileCatClose.addEventListener('click', closeMobileCat);

  /* Backdrop click closes mobile cat */
  if (mobileCatBackdrop) {
    mobileCatBackdrop.addEventListener('click', (e) => {
      if (e.target === mobileCatBackdrop) closeMobileCat();
    });
  }

  /* ── Escape key closes all open panels ───────────────────────── */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCat();
      closeCart();
      closeMobileMenu();
      closeMobileCat();
    }
  });

});
