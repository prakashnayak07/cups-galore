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
  return `<div class="blog-card">
    <div class="blog-card-img-wrap">
      <img src="${post.image}" alt="${post.title}" class="blog-card-img" loading="lazy" />
    </div>
    <div class="blog-card-body">
      <div class="blog-card-meta">
        <p class="blog-card-date">${post.date}</p>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
      </div>
      <a href="#" class="inline-flex items-center gap-1 text-[#0f172a] text-sm font-medium leading-[19.88px] self-end hover:text-[#065386] transition-colors">
        Read More
        <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </div>`;
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

const ARROW_LEFT_SVG  = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9.21978 12.6667C9.12019 12.667 9.02178 12.645 8.93179 12.6024C8.84181 12.5597 8.76253 12.4974 8.69978 12.42L5.47978 8.42002C5.38173 8.30073 5.32812 8.1511 5.32812 7.99669C5.32812 7.84227 5.38173 7.69264 5.47978 7.57335L8.81312 3.57335C8.92628 3.43721 9.08888 3.35159 9.26517 3.33534C9.44145 3.31909 9.61697 3.37353 9.75312 3.48669C9.88926 3.59985 9.97488 3.76245 9.99113 3.93874C10.0074 4.11502 9.95294 4.29054 9.83978 4.42669L6.85978 8.00002L9.73978 11.5734C9.82131 11.6712 9.87309 11.7904 9.88901 11.9167C9.90493 12.0431 9.88432 12.1714 9.82961 12.2864C9.77491 12.4014 9.6884 12.4984 9.58033 12.5658C9.47226 12.6332 9.34714 12.6682 9.21978 12.6667Z" fill="#94A3B8"/></svg>`;
const ARROW_RIGHT_SVG = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6.78022 12.6667C6.87981 12.667 6.97822 12.645 7.06821 12.6024C7.15819 12.5597 7.23747 12.4974 7.30022 12.42L10.5202 8.42002C10.6183 8.30073 10.6719 8.1511 10.6719 7.99669C10.6719 7.84227 10.6183 7.69264 10.5202 7.57335L7.18688 3.57335C7.07372 3.43721 6.91112 3.35159 6.73483 3.33534C6.55855 3.31909 6.38303 3.37353 6.24688 3.48669C6.11074 3.59985 6.02512 3.76245 6.00887 3.93874C5.99262 4.11502 6.04706 4.29054 6.16022 4.42669L9.14022 8.00002L6.26022 11.5734C6.17869 11.6712 6.12691 11.7904 6.11099 11.9167C6.09507 12.0431 6.11568 12.1714 6.17039 12.2864C6.22509 12.4014 6.3116 12.4984 6.41967 12.5658C6.52774 12.6332 6.65286 12.6682 6.78022 12.6667Z" fill="#475569"/></svg>`;

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

/* ── Logo Marquee ────────────────────────────────────────────────── */
function initLogoMarquee() {
  const track = document.getElementById('logo-marquee-track');
  if (!track) return;
  /* CSS animation handles the infinite scroll — JS just ensures it starts */
  track.style.animationPlayState = 'running';
}

if (document.getElementById('logo-marquee-track')) {
  initLogoMarquee();
}

/* ── Insights & Inspiration Swiper ──────────────────────────────── */
function initInsightsSwiper() {
  const slider = document.querySelector('.insights-swiper');
  if (!slider || typeof Swiper === 'undefined') return;

  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 12,
    grabCursor: true,
    watchOverflow: true,
    breakpoints: {
      768:  { slidesPerView: 2, spaceBetween: 24 },
      1024: { slidesPerView: 3.25, spaceBetween: 32 },
      1280: { slidesPerView: 3.25, spaceBetween: 42 },
    },
  });

  const prevBtn = document.getElementById('insights-prev');
  const nextBtn = document.getElementById('insights-next');
  const mobilePrevBtn = document.getElementById('insights-mobile-prev');
  const mobileNextBtn = document.getElementById('insights-mobile-next');
  if (prevBtn) prevBtn.addEventListener('click', () => swiper.slidePrev());
  if (nextBtn) nextBtn.addEventListener('click', () => swiper.slideNext());
  if (mobilePrevBtn) mobilePrevBtn.addEventListener('click', () => swiper.slidePrev());
  if (mobileNextBtn) mobileNextBtn.addEventListener('click', () => swiper.slideNext());
}

if (document.querySelector('.insights-swiper')) {
  initInsightsSwiper();
}

/* ── Home Photo Strip Swiper ─────────────────────────────────────── */
function initHomePhotoSwiper() {
  const slider = document.querySelector('.home-photo-swiper');
  if (!slider || typeof Swiper === 'undefined') return;

  new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 12,
    grabCursor: true,
    watchOverflow: true,
    freeMode: {
      enabled: true,
      momentum: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3.10,
        spaceBetween: 12,
        allowTouchMove: true,
      },
    },
  });
}

if (document.querySelector('.home-photo-swiper')) {
  initHomePhotoSwiper();
}

/* ── Shop Filters ────────────────────────────────────────────────── */
const shopFilterGroups = [
  {
    key: 'category',
    label: 'Category',
    open: true,
    options: [
      { label: 'All', value: 'all' },
      { label: 'Branded & Custom Cups', value: 'branded' },
      { label: 'Ready Design', value: 'ready-design' },
      { label: 'Reusable Cups', value: 'reusable' },
      { label: 'Plains Cup', value: 'plain' },
      { label: 'Packaging', value: 'packaging' },
    ],
  },
  {
    key: 'availability',
    label: 'Availability',
    options: [
      { label: 'In stock', value: 'in-stock' },
      { label: 'Out of stock', value: 'out-of-stock' },
    ],
  },
  {
    key: 'sort',
    label: 'Sort By',
    options: [
      { label: 'Featured', value: 'featured' },
      { label: 'Best Selling', value: 'best-selling' },
      { label: 'Alphabetically, A-Z', value: 'alpha-asc' },
      { label: 'Alphabetically, Z-A', value: 'alpha-desc' },
      { label: 'Price, Low to High', value: 'price-asc' },
      { label: 'Price, High to Low', value: 'price-desc' },
      { label: 'Date, Old to New', value: 'date-asc' },
      { label: 'Date, New to old', value: 'date-desc' },
    ],
  },
  {
    key: 'price',
    label: 'Price',
    options: [
      { label: 'Under $1', value: 'under-1' },
      { label: '$1 - $10', value: '1-10' },
      { label: '$10+', value: '10-plus' },
    ],
  },
  {
    key: 'wall',
    label: 'Cup Wall',
    options: [
      { label: 'Single Wall', value: 'single' },
      { label: 'Double Wall', value: 'double' },
    ],
  },
  {
    key: 'lid',
    label: 'Cup Lid',
    options: [
      { label: 'Without LIDS', value: 'none' },
      { label: 'White LIDS', value: 'white' },
      { label: 'Black LIDS', value: 'black' },
    ],
  },
  {
    key: 'design',
    label: 'Design',
    options: [
      { label: 'Undecorated', value: 'undecorated' },
      { label: 'Laser Engraved', value: 'laser-engraved' },
      { label: 'Digital Print', value: 'digital-print' },
    ],
  },
  {
    key: 'color',
    label: 'Color',
    options: [
      { label: 'Black', value: 'black' },
      { label: 'White', value: 'white' },
      { label: 'Red', value: 'red' },
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
    ],
  },
  {
    key: 'size',
    label: 'Size',
    options: [
      { label: 'Small', value: 'small' },
      { label: 'Large', value: 'large' },
      { label: 'Medium', value: 'medium' },
      { label: 'Large', value: 'large-alt' },
    ],
  },
];

function initShopFilters() {
  const panels = document.querySelectorAll('[data-shop-filter-panel]');
  const grid = document.getElementById('shop-grid');
  if (!panels.length || !grid) return;

  const cards = Array.from(grid.querySelectorAll('.shop-product-card'));
  const productPrices = cards.map(card => Number(card.dataset.price)).filter(Number.isFinite);
  const priceRangeMin = 0;
  const priceRangeMax = Math.ceil(Math.max(...productPrices, 120));
  const priceStep = priceRangeMax <= 20 ? 0.01 : 1;

  function priceRangeMarkup() {
    return `<div class="shop-price-range" data-price-range>
      <div class="shop-price-fields">
        <label class="shop-price-field">
          <span>$</span>
          <input type="number" name="price-min" value="${priceRangeMin}" min="${priceRangeMin}" max="${priceRangeMax}" step="${priceStep}" data-price-min aria-label="Minimum price">
        </label>
        <span class="shop-price-separator">-</span>
        <label class="shop-price-field">
          <span>$</span>
          <input type="number" name="price-max" value="${priceRangeMax}" min="${priceRangeMin}" max="${priceRangeMax}" step="${priceStep}" data-price-max aria-label="Maximum price">
        </label>
      </div>
      <div class="shop-price-slider">
        <div class="shop-price-slider-track" data-price-track></div>
        <input type="range" name="price-min-range" value="${priceRangeMin}" min="${priceRangeMin}" max="${priceRangeMax}" step="${priceStep}" data-price-min-range aria-label="Minimum price">
        <input type="range" name="price-max-range" value="${priceRangeMax}" min="${priceRangeMin}" max="${priceRangeMax}" step="${priceStep}" data-price-max-range aria-label="Maximum price">
      </div>
    </div>`;
  }

  function panelMarkup() {
    return shopFilterGroups.map((group) => {
      const expanded = group.open ? 'true' : 'false';
      let options = group.key === 'price' ? priceRangeMarkup() : group.options.map((option) => {
        const checked = option.value === 'all' ? 'checked' : '';
        const inputType = group.key === 'sort' ? 'radio' : 'checkbox';
        const optionClass = group.key === 'sort' ? ' shop-filter-option-radio' : '';
        return `<label class="shop-filter-option${optionClass} flex items-center gap-3 text-sm font-medium leading-[19.88px] text-[#1e293b] cursor-pointer">
          <input class="sr-only" type="${inputType}" name="${group.key}" value="${option.value}" ${checked}>
          <span class="shop-filter-check"><img src="assets/icons/shop/icon-check.svg" alt="" aria-hidden="true"></span>
          <span>${option.label}</span>
        </label>`;
      }).join('');

      if (group.key === 'color') {
        options += '<button type="button" class="shop-filter-view-more">View More</button>';
      }

      return `<div class="border-b border-[#e2e8f0]">
        <button type="button" class="shop-filter-trigger flex w-full items-center justify-between gap-4 px-2 py-4 text-left"
          aria-expanded="${expanded}" data-filter-trigger="${group.key}">
          <span class="text-sm leading-[19.88px] text-[#334155]">${group.label}</span>
          <svg class="shop-filter-chevron size-4 transition-transform text-[#334155]" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
        <div class="shop-filter-content bg-[#f8fafc] flex flex-col gap-4 px-2 py-4" data-filter-content="${group.key}" ${group.open ? '' : 'hidden'}>
          ${options}
        </div>
      </div>`;
    }).join('');
  }

  panels.forEach(panel => {
    panel.innerHTML = panelMarkup();
  });

  const originalIndex = new Map(cards.map((card, index) => [card, index]));
  const resultCount = document.getElementById('shop-result-count');
  const filterCounts = document.querySelectorAll('.shop-filter-count');

  function getSelected() {
    const selected = {};
    shopFilterGroups.forEach(group => {
      selected[group.key] = [...new Set(Array.from(document.querySelectorAll(`input[name="${group.key}"]:checked`)).map(input => input.value))];
    });
    return selected;
  }

  function getPriceRange() {
    const minInput = document.querySelector('[data-price-min]');
    const maxInput = document.querySelector('[data-price-max]');
    const min = Number(minInput?.value ?? priceRangeMin);
    const max = Number(maxInput?.value ?? priceRangeMax);
    return {
      min: Number.isFinite(min) ? min : priceRangeMin,
      max: Number.isFinite(max) ? max : priceRangeMax,
    };
  }

  function priceMatches(price) {
    const range = getPriceRange();
    return price >= range.min && price <= range.max;
  }

  function cardMatches(card, selected) {
    return shopFilterGroups.every(group => {
      const values = selected[group.key].filter(value => value !== 'all');
      if (group.key === 'price') return priceMatches(Number(card.dataset.price));
      if (!values.length || group.key === 'sort') return true;
      return values.includes(card.dataset[group.key]);
    });
  }

  function activeFilterCount(selected) {
    const priceRange = getPriceRange();
    const priceActive = priceRange.min !== priceRangeMin || priceRange.max !== priceRangeMax;
    return Object.entries(selected).reduce((total, [key, values]) => {
      if (key === 'sort') return total;
      if (key === 'price') return total + (priceActive ? 1 : 0);
      return total + values.filter(value => value !== 'all').length;
    }, 0);
  }

  function sortCards(selected) {
    const sortValue = selected.sort[0];
    if (!sortValue) return;

    const titleFor = card => card.querySelector('.shop-product-body h2')?.textContent.trim() || '';
    const dateFor = card => {
      const rawDate = card.dataset.date || card.dataset.createdAt || '';
      const parsed = Date.parse(rawDate);
      return Number.isNaN(parsed) ? originalIndex.get(card) : parsed;
    };
    const bestSellingFor = card => Number(card.dataset.bestSelling || card.dataset.sales || originalIndex.get(card));

    const sorted = [...cards].sort((a, b) => {
      const fallback = originalIndex.get(a) - originalIndex.get(b);

      if (sortValue === 'featured') return fallback;
      if (sortValue === 'best-selling') return bestSellingFor(b) - bestSellingFor(a) || fallback;
      if (sortValue === 'alpha-asc') return titleFor(a).localeCompare(titleFor(b)) || fallback;
      if (sortValue === 'alpha-desc') return titleFor(b).localeCompare(titleFor(a)) || fallback;
      if (sortValue === 'date-asc') return dateFor(a) - dateFor(b) || fallback;
      if (sortValue === 'date-desc') return dateFor(b) - dateFor(a) || fallback;

      const diff = Number(a.dataset.price) - Number(b.dataset.price);
      return sortValue === 'price-desc' ? -diff || fallback : diff || fallback;
    });
    sorted.forEach(card => grid.appendChild(card));
  }

  function syncMirroredInputs(source) {
    document.querySelectorAll(`input[name="${source.name}"][value="${source.value}"]`).forEach(input => {
      if (input !== source) input.checked = source.checked;
    });
  }

  function syncPriceControls(source) {
    let minValue = Number(document.querySelector('[data-price-min]')?.value ?? priceRangeMin);
    let maxValue = Number(document.querySelector('[data-price-max]')?.value ?? priceRangeMax);

    if (source?.matches('[data-price-min-range], [data-price-min]')) minValue = Number(source.value);
    if (source?.matches('[data-price-max-range], [data-price-max]')) maxValue = Number(source.value);

    minValue = Math.max(priceRangeMin, Math.min(minValue, priceRangeMax));
    maxValue = Math.max(priceRangeMin, Math.min(maxValue, priceRangeMax));
    if (minValue > maxValue) {
      if (source?.matches('[data-price-min-range], [data-price-min]')) maxValue = minValue;
      else minValue = maxValue;
    }

    const minPercent = ((minValue - priceRangeMin) / (priceRangeMax - priceRangeMin)) * 100;
    const maxPercent = ((maxValue - priceRangeMin) / (priceRangeMax - priceRangeMin)) * 100;

    document.querySelectorAll('[data-price-min], [data-price-min-range]').forEach(input => {
      input.value = minValue;
    });
    document.querySelectorAll('[data-price-max], [data-price-max-range]').forEach(input => {
      input.value = maxValue;
    });
    document.querySelectorAll('[data-price-track]').forEach(track => {
      track.style.setProperty('--price-min', `${minPercent}%`);
      track.style.setProperty('--price-max', `${maxPercent}%`);
    });
  }

  function applyFilters() {
    const selected = getSelected();
    sortCards(selected);
    let visible = 0;
    cards.forEach(card => {
      const show = cardMatches(card, selected);
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (resultCount) resultCount.textContent = `${visible} product${visible === 1 ? '' : 's'}`;
    filterCounts.forEach(count => {
      count.textContent = activeFilterCount(selected);
    });
  }

  document.querySelectorAll('.shop-filter-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.parentElement.querySelector('.shop-filter-content');
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!expanded));
      content.hidden = expanded;
    });
  });

  document.querySelectorAll('[data-shop-filter-panel] input').forEach(input => {
    input.addEventListener('change', () => {
      if (input.matches('[data-price-min], [data-price-max], [data-price-min-range], [data-price-max-range]')) {
        syncPriceControls(input);
        applyFilters();
        return;
      }
      if (input.name === 'category' && input.value === 'all' && input.checked) {
        document.querySelectorAll('input[name="category"]').forEach(categoryInput => {
          if (categoryInput.value !== 'all') categoryInput.checked = false;
        });
      }
      if (input.name === 'category' && input.value !== 'all' && input.checked) {
        document.querySelectorAll('input[name="category"][value="all"]').forEach(allInput => {
          allInput.checked = false;
        });
      }
      if (input.name === 'sort' && input.checked) {
        document.querySelectorAll(`input[name="sort"]`).forEach(sortInput => {
          if (sortInput.value !== input.value) sortInput.checked = false;
        });
      }
      syncMirroredInputs(input);
      applyFilters();
    });
  });

  document.querySelectorAll('[data-price-min], [data-price-max], [data-price-min-range], [data-price-max-range]').forEach(input => {
    input.addEventListener('input', () => {
      syncPriceControls(input);
      applyFilters();
    });
  });

  const openButton = document.getElementById('shop-filter-open');
  const closeButton = document.getElementById('shop-filter-close');
  const backdrop = document.getElementById('shop-filter-backdrop');

  function openDrawer() {
    document.body.classList.add('shop-filter-open');
    document.getElementById('shop-filter-overlay')?.setAttribute('aria-hidden', 'false');
  }

  function closeDrawer() {
    document.body.classList.remove('shop-filter-open');
    document.getElementById('shop-filter-overlay')?.setAttribute('aria-hidden', 'true');
  }

  if (openButton) openButton.addEventListener('click', openDrawer);
  if (closeButton) closeButton.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  const desktopToggle = document.getElementById('shop-filter-toggle');
  const desktopDropdown = document.getElementById('shop-filter-dropdown');
  const desktopChevron = document.getElementById('shop-filter-toggle-chevron');
  if (desktopToggle && desktopDropdown) {
    desktopToggle.addEventListener('click', () => {
      const isOpen = desktopDropdown.dataset.open === 'true';
      if (isOpen) {
        desktopDropdown.style.maxHeight = desktopDropdown.scrollHeight + 'px';
        requestAnimationFrame(() => { desktopDropdown.style.maxHeight = '0px'; });
        desktopDropdown.dataset.open = 'false';
      } else {
        desktopDropdown.style.maxHeight = desktopDropdown.scrollHeight + 'px';
        desktopDropdown.dataset.open = 'true';
        desktopDropdown.addEventListener('transitionend', function handler() {
          if (desktopDropdown.dataset.open === 'true') desktopDropdown.style.maxHeight = 'none';
          desktopDropdown.removeEventListener('transitionend', handler);
        });
      }
      desktopToggle.setAttribute('aria-expanded', String(!isOpen));
      if (desktopChevron) desktopChevron.style.transform = isOpen ? '' : 'rotate(180deg)';
    });
  }

  syncPriceControls();
  applyFilters();
}

if (document.getElementById('shop-grid')) {
  initShopFilters();
}

function initShopCardFlips() {
  const cards = document.querySelectorAll('.shop-product-card');
  if (!cards.length) return;

  function arrowSvg() {
    return `<svg class="size-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  function deliveryIcon(src, label) {
    return `<span class="shop-detail-delivery-icon" aria-hidden="true">
      <img src="${src}" alt="${label}" />
    </span>`;
  }

  function closeSvg() {
    return `<svg class="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`;
  }

  function qtyControl() {
    return `<div class="flex items-center gap-[6px] rounded-[64px] border border-[#e5e7eb] bg-[#f9fafb] p-1">
      <button type="button" class="flex size-6 items-center justify-center rounded-full bg-[#f3f4f6]" aria-label="Decrease quantity">
        <span class="h-[2px] w-3 rounded bg-[#334155]"></span>
      </button>
      <span class="w-[22px] text-center text-base leading-[22.72px] text-[#030712]">3</span>
      <button type="button" class="relative flex size-6 items-center justify-center rounded-full bg-[#065386]" aria-label="Increase quantity">
        <span class="absolute h-[2px] w-3 rounded bg-white"></span>
        <span class="absolute h-3 w-[2px] rounded bg-white"></span>
      </button>
    </div>`;
  }

  function detailBack(card, title, price) {
    return `<div class="shop-card-face shop-card-back" aria-hidden="true">
      <div class="shop-card-back-scroll">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between gap-4">
            <p class="text-sm leading-[19.88px] text-[#1e293b]">Branded Cups</p>
            <button type="button" class="shop-card-close flex size-6 items-center justify-center text-[#1e293b]" aria-label="Close product details">
              ${closeSvg()}
            </button>
          </div>
          <div class="flex flex-col gap-1">
            <h3 class="text-2xl font-bold leading-[31.68px] text-[#0f172a]">${title}</h3>
            <p class="text-base leading-[22.72px] text-[#334155]">Simple, eco-friendly 8 oz single wall coffee cups with lids, perfect for takeaway drinks. Available in bulk with custom branding options.</p>
          </div>
          <div class="shop-detail-divider"></div>
          <p class="text-xl font-semibold leading-[26.4px] text-[#1e293b]">${price}</p>
          <div class="shop-detail-divider"></div>
          <div class="flex flex-col gap-3">
            <p class="text-sm leading-[19.88px] text-[#1e293b]">Lids</p>
            <div class="flex flex-wrap gap-3">
              <button type="button" class="shop-detail-pill is-active">No Lids</button>
              <button type="button" class="shop-detail-pill">White Lids</button>
              <button type="button" class="shop-detail-pill">Black Lids</button>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-sm font-medium leading-[19.88px] text-[#4b5563]">Quantity:</p>
            ${qtyControl()}
          </div>
          <div class="shop-detail-divider"></div>
          <div class="flex flex-col gap-3">
            <p class="text-sm font-medium leading-[19.88px] text-[#1e293b]">Delivery Options</p>
            <button type="button" class="shop-detail-delivery is-active">
              ${deliveryIcon('assets/icons/iconamoon_delivery-light.svg', 'Standard delivery')}
              <span class="flex flex-1 items-end justify-between gap-3">
                <span class="flex flex-col text-left">
                  <span class="text-sm font-medium leading-[19.88px] text-[#0161a3]">Standard Delivery</span>
                  <span class="text-xs leading-[17.04px] text-[#475569]">(10 Working Days)</span>
                </span>
                <span class="text-xs font-medium leading-[17.04px] text-[#475569]">Free</span>
              </span>
            </button>
            <button type="button" class="shop-detail-delivery">
              ${deliveryIcon('assets/icons/iconamoon_delivery-light.svg', 'Rush delivery')}
              <span class="flex flex-1 items-end justify-between gap-3">
                <span class="flex flex-col text-left text-[#475569]">
                  <span class="text-sm font-medium leading-[19.88px]">Rush Delivery</span>
                  <span class="text-xs leading-[17.04px]">(6 Working Days)</span>
                </span>
                <span class="text-xs font-medium leading-[17.04px] text-[#334155]">+$120</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="flex gap-2">
        <a href="product-detail.html" class="shop-detail-button shop-detail-button-secondary">More Info ${arrowSvg()}</a>
        <button type="button" class="shop-detail-button shop-detail-button-primary">Add to Cart ${arrowSvg()}</button>
      </div>
    </div>`;
  }

  cards.forEach(card => {
    if (card.querySelector('.shop-card-inner')) return;
    const title = card.querySelector('.shop-product-body h2')?.textContent.trim() || 'Product details';
    const price = card.querySelector('.shop-product-body p')?.textContent.trim() || '$0.00';
    const front = card.innerHTML;
    card.innerHTML = `<div class="shop-card-inner">
      <div class="shop-card-face shop-card-front">${front}</div>
      ${detailBack(card, title, price)}
    </div>`;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${title}`);
  });

  function flipCard(card, flipped) {
    card.classList.toggle('is-flipped', flipped);
    card.setAttribute('aria-pressed', String(flipped));
  }

  cards.forEach(card => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('.shop-card-back button, .shop-card-back a')) return;
      flipCard(card, true);
    });
    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      flipCard(card, true);
    });
    card.querySelectorAll('.shop-card-back button').forEach(button => {
      button.addEventListener('click', event => event.stopPropagation());
    });
    card.querySelectorAll('.shop-card-back a').forEach(link => {
      link.addEventListener('click', event => event.stopPropagation());
    });
    card.querySelector('.shop-card-close')?.addEventListener('click', (event) => {
      event.stopPropagation();
      flipCard(card, false);
    });
  });
}

if (document.getElementById('shop-grid')) {
  initShopCardFlips();
}

function initProductDetailPage() {
  const detail = document.querySelector('[data-product-detail]');
  if (!detail) return;

  document.querySelectorAll('[data-product-thumb]').forEach(button => {
    button.addEventListener('click', () => {
      const image = document.getElementById('product-main-image');
      if (!image) return;
      image.src = button.dataset.productThumb;
      document.querySelectorAll('[data-product-thumb]').forEach(item => {
        item.classList.toggle('is-active', item === button);
      });
    });
  });

  document.querySelectorAll('[data-option-group]').forEach(group => {
    group.querySelectorAll('[data-option-button]').forEach(button => {
      button.addEventListener('click', () => {
        group.querySelectorAll('[data-option-button]').forEach(item => item.classList.remove('is-active'));
        button.classList.add('is-active');
      });
    });
  });

  document.querySelectorAll('[data-product-tab]').forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.productTab;
      document.querySelectorAll('[data-product-tab]').forEach(item => item.classList.toggle('is-active', item === button));
      document.querySelectorAll('[data-product-panel]').forEach(panel => {
        panel.classList.toggle('is-active', panel.dataset.productPanel === target);
      });
    });
  });

  const relatedSlider = document.querySelector('.product-related-swiper');
  if (relatedSlider && typeof Swiper !== 'undefined') {
    new Swiper(relatedSlider, {
      slidesPerView: 1.25,
      spaceBetween: 16,
      grabCursor: true,
      watchOverflow: true,
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 16 },
        1024: { slidesPerView: 3.25, spaceBetween: 0 },
        1280: { slidesPerView: 3.25, spaceBetween: 0 },
        1440: { slidesPerView: 4.25, spaceBetween: 0 },
        1920: { slidesPerView: 4.25, spaceBetween: 0 },
      },
    });
  }

  document.querySelectorAll('[data-quantity-control]').forEach(control => {
    const value = control.querySelector('[data-qty-value]');
    control.querySelector('[data-qty-minus]')?.addEventListener('click', () => {
      value.textContent = String(Math.max(1, Number(value.textContent) - 1));
    });
    control.querySelector('[data-qty-plus]')?.addEventListener('click', () => {
      value.textContent = String(Number(value.textContent) + 1);
    });
  });
}

initProductDetailPage();

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

  /* ── Category Dropdown (desktop, slide down) ─────────────────── */

  function openCat() {
    if (!catDropdown || catOpen) return;
    catOpen = true;
    catDropdown.style.opacity = '1';
    catDropdown.style.pointerEvents = 'auto';
    catDropdown.setAttribute('aria-hidden', 'false');
    if (catBtn) catBtn.setAttribute('aria-expanded', 'true');
  }

  function closeCat() {
    if (!catDropdown || !catOpen) return;
    catOpen = false;
    catDropdown.style.opacity = '0';
    catDropdown.style.pointerEvents = 'none';
    catDropdown.setAttribute('aria-hidden', 'true');
    if (catBtn) catBtn.setAttribute('aria-expanded', 'false');
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
      const item   = trigger.closest('.faq-item');
      const body   = item.querySelector('.faq-body');
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      /* Toggle clicked item independently */
      if (isOpen) {
        trigger.setAttribute('aria-expanded', 'false');
        trigger.querySelector('.faq-chevron').style.transform = '';
        body.style.maxHeight = '0';
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        trigger.querySelector('.faq-chevron').style.transform = 'rotate(180deg)';
        body.style.maxHeight = `${body.scrollHeight}px`;
      }
    });
  });

});
