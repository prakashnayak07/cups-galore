/* main.js — site-wide interactivity: cart drawer, category dropdown, mobile menu, mobile panels, blog pagination */

/* ── Blog Data ────────────────────────────────────────────────────── */
const blogPostsData = [
  {
    title: 'How Paper Cups Are Transforming Modern Beverage Business Operations Today',
    excerpt: 'Learn how to use color, hierarchy, and print finishes to create brand recall with every sip.',
    date: '19 Oct 2025',
    image: 'assets/images/blog-post-1.png'
  },
  {
    title: 'Why Sustainable Packaging Matters More Than Ever For Growing Brands',
    excerpt: 'Learn how to use color, hierarchy, and print finishes to create brand recall with every sip.',
    date: '19 Oct 2025',
    image: 'assets/images/blog-post-2.png'
  },
  {
    title: 'Custom Printed Cups That Build Stronger Brands And Customer Loyalty',
    excerpt: 'Learn how to use color, hierarchy, and print finishes to create brand recall with every sip.',
    date: '19 Oct 2025',
    image: 'assets/images/blog-post-3.png'
  },
  {
    title: 'Understanding Paper Cup Materials For Better Business Packaging Decisions',
    excerpt: 'Learn how to use color, hierarchy, and print finishes to create brand recall with every sip.',
    date: '19 Oct 2025',
    image: 'assets/images/blog-post-4.png'
  },
  {
    title: 'How Smart Packaging Improves Customer Experience In Food Businesses',
    excerpt: 'Learn how to use color, hierarchy, and print finishes to create brand recall with every sip.',
    date: '19 Oct 2025',
    image: 'assets/images/blog-post-5.png'
  },
  {
    title: 'Future Of Paper Cups Innovation Sustainability And Global Market Trends',
    excerpt: 'Learn how to use color, hierarchy, and print finishes to create brand recall with every sip.',
    date: '19 Oct 2025',
    image: 'assets/images/blog-post-6.png'
  },
  {
    title: 'Eco Friendly Packaging Solutions Every Café Owner Should Consider',
    excerpt: 'Learn how to use color, hierarchy, and print finishes to create brand recall with every sip.',
    date: '19 Oct 2025',
    image: 'assets/images/blog-post-7.png'
  },
  {
    title: 'How Beverage Brands Use Packaging To Increase Customer Retention',
    excerpt: 'Learn how to use color, hierarchy, and print finishes to create brand recall with every sip.',
    date: '19 Oct 2025',
    image: 'assets/images/blog-post-8.png'
  },
  {
    title: 'Essential Packaging Strategies For Scaling Your Food And Beverage Brand',
    excerpt: 'Learn how to use color, hierarchy, and print finishes to create brand recall with every sip.',
    date: '19 Oct 2025',
    image: 'assets/images/blog-post-9.png'
  }
];

const BLOG_POSTS_PER_PAGE = 9;
const BLOG_TOTAL_PAGES    = 4;
let   blogCurrentPage     = 1;

function createBlogCard(post) {
  return `<a href="#" class="blog-card">
    <div class="blog-card-img-wrap">
      <img src="${post.image}" alt="${post.title}" class="blog-card-img" loading="lazy" />
    </div>
    <div class="blog-card-body">
      <div class="blog-card-meta">
        <p class="blog-card-date">${post.date}</p>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
      </div>
      <div class="blog-read-more">
        Read More
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </a>`;
}

function renderBlogGrid(page) {
  const grid = document.getElementById('blog-posts-grid');
  if (!grid) return;
  const start = (page - 1) * BLOG_POSTS_PER_PAGE;
  const cards = [];
  for (let i = 0; i < BLOG_POSTS_PER_PAGE; i++) {
    cards.push(createBlogCard(blogPostsData[(start + i) % blogPostsData.length]));
  }
  grid.innerHTML = cards.join('');
}

const ARROW_LEFT_SVG  = `<svg width="16" height="16" viewBox="0 0 5.2 9.2" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4.6 8.6L0.6 4.6L4.6 0.6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ARROW_RIGHT_SVG = `<svg width="16" height="16" viewBox="0 0 5.2 9.2" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0.6 8.6L4.6 4.6L0.6 0.6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function renderBlogPagination(currentPage) {
  const container = document.getElementById('blog-pagination');
  if (!container) return;

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === BLOG_TOTAL_PAGES;

  let numButtons = '';
  for (let i = 1; i <= BLOG_TOTAL_PAGES; i++) {
    const active = i === currentPage;
    numButtons += `<button data-blog-page="${i}" class="blog-page-num${active ? ' active' : ''}" aria-label="Page ${i}" aria-current="${active ? 'page' : 'false'}">${i}</button>`;
  }

  container.innerHTML = `<div class="blog-pagination-wrap">
    <button id="blog-prev" class="blog-pagination-nav" ${prevDisabled ? 'disabled' : ''} aria-label="Previous page">
      ${ARROW_LEFT_SVG} Previous
    </button>
    <div class="blog-page-nums">${numButtons}</div>
    <button id="blog-next" class="blog-pagination-nav" ${nextDisabled ? 'disabled' : ''} aria-label="Next page">
      Next ${ARROW_RIGHT_SVG}
    </button>
  </div>`;

  function goToPage(page) {
    blogCurrentPage = page;
    renderBlogGrid(blogCurrentPage);
    renderBlogPagination(blogCurrentPage);
    document.getElementById('blog-posts-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  document.querySelectorAll('[data-blog-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = parseInt(btn.dataset.blogPage, 10);
      if (page !== blogCurrentPage) goToPage(page);
    });
  });

  const prevBtn = document.getElementById('blog-prev');
  const nextBtn = document.getElementById('blog-next');
  if (prevBtn && !prevDisabled) prevBtn.addEventListener('click', () => goToPage(blogCurrentPage - 1));
  if (nextBtn && !nextDisabled) nextBtn.addEventListener('click', () => goToPage(blogCurrentPage + 1));
}

/* Init blog grid on blogs page */
if (document.getElementById('blog-posts-grid')) {
  renderBlogGrid(blogCurrentPage);
  renderBlogPagination(blogCurrentPage);
}

/* ── Testimonial Marquee ──────────────────────────────────────────── */
function initTestimonialMarquee() {
  const row1 = document.getElementById('testimonials-row-1');
  const row2 = document.getElementById('testimonials-row-2');
  if (!row1 && !row2) return;

  /* Clone cards in each row for seamless infinite loop */
  [row1, row2].forEach(track => {
    if (!track) return;
    Array.from(track.children).forEach(card => {
      track.appendChild(card.cloneNode(true));
    });
  });

  /* Apply animation classes */
  if (row1) row1.classList.add('testimonials-animate');
  if (row2) row2.classList.add('testimonials-animate-reverse');
}

if (document.getElementById('testimonials-row-1')) {
  initTestimonialMarquee();
}

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
      cartPanel.style.translate  = '0 0';
    });
    updateBodyScroll();
  }

  function closeCart() {
    if (!cartOverlay || !cartOpen) return;
    cartOpen = false;
    cartBackdrop.style.opacity = '0';
    cartPanel.style.translate  = '100% 0';
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
      mobileCatPanel.style.translate  = '0 0';
    });
    updateBodyScroll();
  }

  function closeMobileCat() {
    if (!mobileCatOverlay || !mobileCatOpen) return;
    mobileCatOpen = false;
    mobileCatBackdrop.style.opacity = '0';
    mobileCatPanel.style.translate  = '0 100%';
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

  /* ── FAQ Tabs ─────────────────────────────────────────────────── */
  document.querySelectorAll('.faq-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.faq-tab').forEach(t => {
        t.dataset.active = (t === tab) ? 'true' : 'false';
      });
      document.querySelectorAll('.faq-panel').forEach(panel => {
        panel.hidden = (panel.id !== `faq-${target}`);
      });
    });
  });

  /* ── FAQ Accordion ────────────────────────────────────────────── */
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item    = trigger.closest('.faq-item');
      const body    = item.querySelector('.faq-body');
      const isOpen  = trigger.getAttribute('aria-expanded') === 'true';

      /* Close all items */
      document.querySelectorAll('.faq-trigger').forEach(t => {
        t.setAttribute('aria-expanded', 'false');
        t.querySelector('.faq-chevron').style.transform = '';
        t.closest('.faq-item').querySelector('.faq-body').style.maxHeight = '0';
      });

      /* Open clicked item if it was closed */
      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        trigger.querySelector('.faq-chevron').style.transform = 'rotate(180deg)';
        body.style.maxHeight = `${body.scrollHeight}px`;
      }
    });
  });

});
