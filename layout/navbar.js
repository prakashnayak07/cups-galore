/* navbar.js — sticky header with desktop top-bar, search, nav links, and all interactive panels */

document.querySelector('header').innerHTML = `

  <!-- ── Sticky Navbar Wrapper ─────────────────────────────────────── -->
  <div id="navbar-wrapper" class="sticky top-0 z-40 w-full">

    <!-- DESKTOP ONLY · Top Bar ───────────────────────────────────── -->
    <div class="hidden lg:flex items-center bg-[#f1f5f9] py-2">
      <div class="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 flex items-center justify-between gap-4">

        <!-- Left: Need Help + Phone + Divider + Contact -->
        <div class="flex items-center gap-3 shrink-0">
          <div class="flex items-center gap-2">
            <span class="text-[12px] text-[#475569] leading-[17.04px] whitespace-nowrap">Need Help?</span>
            <div class="flex items-center gap-1">
              <div class="overflow-hidden relative shrink-0 size-[14px]">
                <div class="absolute inset-[12.5%_12.5%_9.37%_9.37%]">
                  <img src="assets/icons/icon-phone.svg" alt="" class="absolute inset-0 max-w-none size-full" aria-hidden="true">
                </div>
              </div>
              <span class="text-[12px] font-semibold text-[#0f172a] leading-[17.04px] whitespace-nowrap">+61 412 345 678</span>
            </div>
          </div>
          <div class="w-px h-[11px] bg-[#475569] shrink-0"></div>
          <span class="text-[12px] text-[#475569] leading-[17.04px] whitespace-nowrap">Contact Us</span>
        </div>

        <!-- Center: Sale Banner -->
        <div class="flex items-center gap-2 justify-center flex-1">
          <div class="overflow-hidden relative shrink-0 size-4">
            <div class="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
              <img src="assets/icons/icon-arrow-left-nav.svg" alt="" class="absolute inset-[-7.5%_-15%] max-w-none size-full" aria-hidden="true">
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div class="overflow-hidden relative shrink-0 size-4">
              <img src="assets/icons/icon-thunder.svg" alt="" class="absolute inset-0 size-full" aria-hidden="true">
            </div>
            <span class="text-[14px] text-[#475569] leading-[19.88px] whitespace-nowrap">Place your First Order now and get</span>
            <div class="border border-[#334155] bg-[#f8fafc] rounded-[16px] px-2 py-1 flex items-center justify-center shrink-0">
              <span class="text-[14px] font-medium text-[#334155] leading-[19.88px] whitespace-nowrap">40% Off</span>
            </div>
            <span class="text-[14px] text-[#475569] leading-[19.88px] whitespace-nowrap">Use code</span>
            <span class="text-[14px] font-medium text-[#334155] leading-[19.88px] whitespace-nowrap">CUPLOVE10</span>
          </div>
          <div class="overflow-hidden relative shrink-0 size-4">
            <div class="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
              <img src="assets/icons/icon-arrow-right-nav.svg" alt="" class="absolute inset-[-7.5%_-15%] max-w-none size-full" aria-hidden="true">
            </div>
          </div>
        </div>

        <!-- Right: Social Icons (20px) -->
        <div class="flex items-center gap-2 shrink-0">
          <div class="overflow-hidden relative shrink-0 size-5 hover:opacity-75 transition-opacity duration-150">
            <span class="absolute inset-0 bg-[#e2e8f0] rounded-[4px]"></span>
            <div class="absolute inset-[25%_36.36%]">
              <img src="assets/icons/social-facebook.svg" alt="Facebook" class="w-full h-full">
            </div>
          </div>
          <div class="overflow-hidden relative shrink-0 size-5 hover:opacity-75 transition-opacity duration-150">
            <span class="absolute inset-0 bg-[#e2e8f0] rounded-[4px]"></span>
            <div class="absolute inset-[29.72%]">
              <img src="assets/icons/social-twitter.svg" alt="Twitter" class="w-full h-full">
            </div>
          </div>
          <div class="overflow-hidden relative shrink-0 size-5 hover:opacity-75 transition-opacity duration-150">
            <span class="absolute inset-0 bg-[#e2e8f0] rounded-[4px]"></span>
            <div class="absolute inset-1/4">
              <img src="assets/icons/social-instagram.svg" alt="Instagram" class="w-full h-full">
            </div>
          </div>
          <div class="relative shrink-0 size-5 hover:opacity-75 transition-opacity duration-150">
            <img src="assets/icons/social-linkedin.svg" alt="LinkedIn" class="w-full h-full">
          </div>
          <div class="relative shrink-0 size-5 hover:opacity-75 transition-opacity duration-150">
            <img src="assets/icons/social-youtube.svg" alt="YouTube" class="w-full h-full">
          </div>
        </div>

      </div>
    </div>

    <!-- ── Main Nav: Logo + Search + User Actions ────────────────── -->
    <div class="bg-[rgba(255,255,255,0.94)] backdrop-blur-[4.6px] border-b border-[rgba(226,232,240,0.1)]">
      <div class="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pb-4 pt-4 lg:pt-6 flex items-center gap-4 lg:gap-6">

        <!-- Logo -->
        <a href="index.html" class="shrink-0">
          <img src="assets/images/cups-galore-logo.png" alt="Cups Galore" class="h-[52px] lg:h-[65px] w-auto object-contain">
        </a>

        <!-- Search bar (desktop only) -->
        <div class="hidden lg:flex flex-1 min-w-0 items-center justify-between max-w-[720px] mx-auto bg-[rgba(248,250,252,0.5)] border border-[#e2e8f0] rounded-[999px] px-4 py-3 cursor-text">
          <span class="text-[14px] text-[#475569] leading-[19.6px] tracking-[-0.154px] select-none">Search</span>
          <div class="overflow-hidden relative shrink-0 size-5">
            <div class="absolute inset-[12.5%]">
              <img src="assets/icons/icon-search.svg" alt="" class="absolute inset-[-4%] max-w-none size-[108%]" aria-hidden="true">
            </div>
          </div>
        </div>

        <!-- Spacer (mobile only) -->
        <div class="flex-1 lg:hidden"></div>

        <!-- User Actions -->
        <div class="flex items-center gap-4">

          <!-- User icon -->
          <div class="overflow-hidden relative shrink-0 size-5">
            <img src="assets/icons/icon-user.svg" alt="Account" class="absolute inset-0 size-full">
          </div>

          <!-- Search icon (mobile only) -->
          <div class="lg:hidden overflow-hidden relative shrink-0 size-5 cursor-pointer">
            <div class="absolute inset-[12.5%]">
              <img src="assets/icons/icon-search.svg" alt="Search" class="absolute inset-[-4%] max-w-none size-[108%]">
            </div>
          </div>

          <!-- Wishlist heart (desktop only) -->
          <div class="hidden lg:block overflow-hidden relative shrink-0 size-5 cursor-pointer">
            <div class="absolute inset-[15.63%_6.25%_9.39%_6.25%]">
              <img src="assets/icons/icon-heart.svg" alt="Wishlist" class="absolute inset-0 max-w-none size-full">
            </div>
          </div>

          <!-- Cart icon with badge -->
          <button id="cart-btn" class="relative shrink-0 size-6 overflow-hidden cursor-pointer" aria-label="Open cart">
            <img src="assets/icons/icon-cart.svg" alt="" class="absolute inset-0 size-full" aria-hidden="true">
            <div class="absolute inset-[78.91%_63.28%_10.16%_25.78%]">
              <img src="assets/icons/icon-cart-wheel.svg" alt="" class="absolute inset-0 size-full" aria-hidden="true">
            </div>
            <div class="absolute inset-[78.91%_22.66%_10.16%_66.41%]">
              <img src="assets/icons/icon-cart-wheel.svg" alt="" class="absolute inset-0 size-full" aria-hidden="true">
            </div>
            <div class="absolute inset-[10.16%_11.05%_28.91%_0.78%]">
              <img src="assets/icons/icon-cart-stroke.svg" alt="" class="absolute inset-0 size-full" aria-hidden="true">
            </div>
            <div class="absolute bg-[#ef1923] bottom-1/2 left-1/2 right-0 top-0 flex items-center justify-center rounded-[32px] px-[3px] py-[1.5px]">
              <span class="text-[9px] text-white leading-none" id="cart-count">3</span>
            </div>
          </button>

          <!-- Hamburger / X (mobile only) -->
          <button id="hamburger-btn" class="lg:hidden relative shrink-0 size-5 overflow-hidden cursor-pointer" aria-label="Toggle menu" aria-expanded="false">
            <div id="hamburger-icon" class="absolute inset-[29.17%_12.5%]">
              <img src="assets/icons/icon-hamburger.svg" alt="" class="absolute inset-[-6%_-3.33%] max-w-none size-full" aria-hidden="true">
            </div>
            <div id="hamburger-close-icon" class="hidden absolute inset-0 flex items-center justify-center">
              <img src="assets/icons/icon-close-nav.svg" alt="" class="size-full" aria-hidden="true">
            </div>
          </button>

        </div>
      </div>
    </div>

    <!-- ── Desktop Sub Nav: Category + Links + Brand ─────────────── -->
    <div class="hidden lg:block bg-[rgba(255,255,255,0.94)] backdrop-blur-[4.6px]">
      <div class="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 pb-2 flex items-center">

        <!-- Category trigger -->
        <button id="cat-btn" class="flex items-center shrink-0 cursor-pointer" aria-expanded="false" aria-controls="cat-dropdown">
          <div class="flex items-center gap-1">
            <span class="text-[14px] font-medium text-[#334155] leading-[19.88px] whitespace-nowrap">Category</span>
            <div class="overflow-hidden relative shrink-0 size-5">
              <div class="absolute inset-[29.17%_12.5%]">
                <img src="assets/icons/icon-hamburger.svg" alt="" class="absolute inset-[-6%_-3.33%] max-w-none size-full" aria-hidden="true">
              </div>
            </div>
          </div>
        </button>

        <!-- Nav links centered -->
        <div class="flex flex-1 items-center justify-center gap-8">
          <div class="flex flex-col h-[52px] justify-center border-t-2 border-[#065386]">
            <a href="index.html" class="text-[14px] font-medium text-[#0f172a] leading-[19.88px] whitespace-nowrap">Home</a>
          </div>
          <div class="flex flex-col h-[52px] justify-center">
            <a href="about.html" class="text-[14px] font-medium text-[#334155] hover:text-[#065386] leading-[19.88px] whitespace-nowrap transition-colors duration-150">About Us</a>
          </div>
          <div class="flex flex-col h-[52px] justify-center">
            <a href="#" class="text-[14px] font-medium text-[#334155] hover:text-[#065386] leading-[19.88px] whitespace-nowrap transition-colors duration-150">Shops</a>
          </div>
          <div class="flex flex-col h-[52px] justify-center">
            <a href="#" class="text-[14px] font-medium text-[#334155] hover:text-[#065386] leading-[19.88px] whitespace-nowrap transition-colors duration-150">Blogs</a>
          </div>
          <div class="flex flex-col h-[52px] justify-center">
            <a href="#" class="text-[14px] font-medium text-[#334155] hover:text-[#065386] leading-[19.88px] whitespace-nowrap transition-colors duration-150">FAQ</a>
          </div>
          <div class="flex flex-col h-[52px] justify-center">
            <a href="contact.html" class="text-[14px] font-medium text-[#334155] hover:text-[#065386] leading-[19.88px] whitespace-nowrap transition-colors duration-150">Contact Us</a>
          </div>
        </div>

        <!-- Australia brand badge -->
        <div class="flex items-center gap-[10px] shrink-0">
          <img src="assets/images/nav-avatar.png" alt="" class="shrink-0 size-5 object-cover rounded-full" aria-hidden="true">
          <span class="text-[14px] text-[#1e293b] leading-[19.6px] tracking-[-0.154px] whitespace-nowrap">Australia's Top brand for Print</span>
        </div>

      </div>
    </div>

    <!-- ── Mobile Sub Nav: Category row ──────────────────────────── -->
    <div class="lg:hidden bg-white border-b border-[rgba(226,232,240,0.1)]">
      <div class="px-4 py-4 flex items-center gap-6">
        <button id="mobile-cat-btn" class="flex items-center gap-1 cursor-pointer" aria-label="Browse categories">
          <span class="text-[14px] font-medium text-[#334155] leading-[19.88px] whitespace-nowrap">Category</span>
          <div class="overflow-hidden relative shrink-0 size-5">
            <div class="absolute inset-[29.17%_12.5%]">
              <img src="assets/icons/icon-hamburger.svg" alt="" class="absolute inset-[-6%_-3.33%] max-w-none size-full" aria-hidden="true">
            </div>
          </div>
        </button>
      </div>
    </div>

    <!-- ── Mobile Hamburger Slide-Down Menu ────────────────────────── -->
    <div id="mobile-menu"
         class="lg:hidden overflow-hidden bg-white border-b border-[rgba(226,232,240,0.1)]"
         style="max-height: 0; transition: max-height 0.35s ease-in-out;">
      <div class="px-4 pb-4">
        <div class="flex flex-col">
          <a href="index.html"  class="flex items-center h-[52px] border-t-2 border-[#065386] text-[14px] font-medium text-[#0f172a] leading-[19.88px]">Home</a>
          <a href="about.html" class="flex items-center h-[52px] text-[14px] font-medium text-[#334155] leading-[19.88px] hover:text-[#065386] transition-colors duration-150">About Us</a>
          <a href="#"           class="flex items-center h-[52px] text-[14px] font-medium text-[#334155] leading-[19.88px] hover:text-[#065386] transition-colors duration-150">Shops</a>
          <a href="#"           class="flex items-center h-[52px] text-[14px] font-medium text-[#334155] leading-[19.88px] hover:text-[#065386] transition-colors duration-150">Blogs</a>
          <a href="#"           class="flex items-center h-[52px] text-[14px] font-medium text-[#334155] leading-[19.88px] hover:text-[#065386] transition-colors duration-150">FAQ</a>
          <a href="contact.html" class="flex items-center h-[52px] text-[14px] font-medium text-[#334155] leading-[19.88px] hover:text-[#065386] transition-colors duration-150">Contact Us</a>
        </div>
        <div class="flex items-center gap-[10px] py-2 pb-4">
          <img src="assets/images/nav-avatar.png" alt="" class="shrink-0 size-5 object-cover rounded-full" aria-hidden="true">
          <span class="text-[14px] text-[#1e293b] leading-[19.6px] tracking-[-0.154px] whitespace-nowrap">Australia's Top brand for Print</span>
        </div>
      </div>
    </div>

  </div><!-- /#navbar-wrapper -->

`;

/* Category items shared HTML helper */
const catItems = [
  { img: 'cat-branded-cups',  label: 'Branded and Custom Cups', desktopSize: 240, mobileSize: 152 },
  { img: 'cat-ready-designs', label: 'Ready Designs',           desktopSize: 240, mobileSize: 152 },
  { img: 'cat-plain-cups',    label: 'Plain Cups',              desktopSize: 240, mobileSize: 152 },
  { img: 'cat-reusable-cups', label: 'Reusable Cups',           desktopSize: 240, mobileSize: 152 },
  { img: 'cat-packaging',     label: 'Packaging',               desktopSize: 240, mobileSize: 152 },
];

function buildDesktopCatItems() {
  return catItems.map(c => `
    <a href="#" class="flex flex-col items-center gap-3 hover:opacity-90 transition-opacity duration-150">
      <div class="size-[240px] overflow-hidden shrink-0">
        <img src="assets/images/${c.img}.png" alt="${c.label}" class="size-full object-cover">
      </div>
      <div class="flex flex-col gap-1 items-center text-center">
        <p class="font-medium text-[20px] text-[#383b43] leading-[1.42] whitespace-nowrap">${c.label}</p>
        <p class="font-medium text-[14px] text-[#383b43]">Sizes: 8OZ&nbsp;&nbsp;|&nbsp;12OZ&nbsp;|&nbsp;16OZ</p>
      </div>
    </a>`).join('');
}

function buildMobileCatItems() {
  return catItems.map(c => `
    <a href="#" class="flex flex-col items-center gap-2">
      <div class="size-[152px] overflow-hidden shrink-0">
        <img src="assets/images/${c.img}.png" alt="${c.label}" class="size-full object-cover">
      </div>
      <div class="flex flex-col items-center gap-1 text-center">
        <p class="font-medium text-[12.64px] text-[#383b43] leading-[1.42] whitespace-nowrap">${c.label}</p>
        <p class="font-medium text-[8.85px] text-[#383b43]">Sizes: 8OZ&nbsp;&nbsp;|&nbsp;12OZ&nbsp;|&nbsp;16OZ</p>
      </div>
    </a>`).join('');
}

/* Cart item HTML helper */
function buildCartItem(title, delivery, lids) {
  return `
    <div class="border-b border-[#e2e8f0] pb-3 shrink-0">
      <div class="flex items-start justify-between mb-2">
        <div class="flex gap-3 items-start flex-1 min-w-0">
          <div class="border border-[#f1f5f9] shrink-0 size-[84px] bg-white relative overflow-hidden">
            <img src="assets/images/cart-product.png" alt="" class="absolute inset-0 size-full object-cover" aria-hidden="true">
          </div>
          <div class="flex flex-col gap-2 min-w-0">
            <p class="text-[16px] font-semibold text-[#334155] leading-[22.72px]">${title}</p>
            <div class="flex gap-1 items-center text-[14px] leading-[19.88px] flex-wrap">
              <span class="text-[#475569]">Delivery Options:</span>
              <span class="font-medium text-[#334155]">${delivery}</span>
            </div>
            <div class="flex gap-1 items-center text-[14px] leading-[19.88px]">
              <span class="text-[#475569]">Lids:</span>
              <span class="font-medium text-[#334155]">${lids}</span>
            </div>
          </div>
        </div>
        <button class="relative shrink-0 size-5 overflow-hidden cursor-pointer ml-2" aria-label="Remove item">
          <div class="absolute inset-[12.5%_16.67%]">
            <img src="assets/icons/icon-trash.svg" alt="" class="absolute inset-0 size-full" aria-hidden="true">
          </div>
        </button>
      </div>
      <div class="flex items-center justify-between gap-2">
        <div class="flex gap-3 items-center flex-wrap">
          <span class="text-[16px] font-semibold text-[#475569] leading-[22.72px] whitespace-nowrap">$493.00</span>
          <span class="text-[12px] font-medium text-[#71941c] leading-[17.04px] whitespace-nowrap">Buy 1 more to get 5% discount</span>
        </div>
        <div class="flex items-center gap-[6px] p-1 rounded-[64px] bg-[#f9fafb] border border-[#e5e7eb] shrink-0">
          <button class="bg-[#f3f4f6] size-6 rounded-[41px] flex items-center justify-center shrink-0 cursor-pointer" aria-label="Decrease quantity">
            <img src="assets/icons/icon-minus.svg" alt="" class="size-4" aria-hidden="true">
          </button>
          <span class="text-[16px] text-[#030712] leading-[22.72px] text-center w-[22px]">1</span>
          <button class="bg-[#065386] size-6 rounded-[41px] flex items-center justify-center shrink-0 cursor-pointer" aria-label="Increase quantity">
            <img src="assets/icons/icon-plus.svg" alt="" class="size-4" aria-hidden="true">
          </button>
        </div>
      </div>
    </div>`;
}

/* Close icon button helper */
function closeBtn(id, extraClasses) {
  return `
    <button ${id ? `id="${id}"` : ''} class="bg-white rounded-full flex items-center justify-center size-[42px] shadow-sm cursor-pointer ${extraClasses || ''}" aria-label="Close">
      <div class="overflow-hidden relative shrink-0 size-[21px]">
        <div class="absolute inset-[26.19%]">
          <img src="assets/icons/icon-close-sm.svg" alt="" class="absolute inset-[-5%] max-w-none size-[110%]" aria-hidden="true">
        </div>
      </div>
    </button>`;
}

/* Inject overlays into body (outside header to avoid backdrop-filter containing-block issues) */
document.body.insertAdjacentHTML('beforeend', `

  <!-- ── Desktop Category Dropdown (z-30, slides down from navbar) ── -->
  <div id="cat-dropdown"
       class="fixed z-30 left-0 right-0 hidden"
       style="top: 0; transform: translateY(-110%); transition: transform 0.35s ease-in-out;"
       aria-hidden="true">
    <div class="bg-white border border-[#f1f5f9] shadow-[0px_45px_22.5px_rgba(0,0,0,0.11),0px_11px_12.5px_rgba(0,0,0,0.13)]">
      <div class="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 pt-6 pb-[42px] flex items-start justify-between gap-4">
        ${buildDesktopCatItems()}
      </div>
    </div>
    <!-- Close X below panel -->
    <div class="flex justify-center pt-3 pb-2">
      ${closeBtn('cat-close-btn', '')}
    </div>
  </div>

  <!-- ── Cart Overlay (desktop + mobile, slides from right) ──────── -->
  <div id="cart-overlay"
       class="fixed inset-0 z-50 flex justify-end pointer-events-none"
       aria-hidden="true">
    <!-- Backdrop blur -->
    <div id="cart-backdrop"
         class="absolute inset-0 bg-[rgba(0,0,0,0.1)] backdrop-blur-[2px] opacity-0 transition-opacity duration-300"></div>
    <!-- Panel -->
    <div id="cart-panel"
         class="relative h-full w-full lg:max-w-[720px] bg-white rounded-bl-[24px] rounded-tl-[24px] p-8 flex flex-col gap-3 translate-x-full transition-transform duration-300 ease-in-out overflow-hidden">

      <!-- Cart header -->
      <div class="border-b border-[#e2e8f0] pb-5 flex items-center justify-between shrink-0">
        <div class="flex items-start gap-1 text-[#475569]">
          <span class="text-[20px] font-medium leading-[26.4px]">Cart</span>
          <span class="text-[12px] leading-[17.04px] mt-1">4</span>
        </div>
        <button id="cart-close-btn" class="relative size-6 overflow-hidden cursor-pointer shrink-0" aria-label="Close cart">
          <div class="absolute inset-[26.19%]">
            <img src="assets/icons/icon-close.svg" alt="" class="absolute inset-[-4.37%] max-w-none size-[108.74%]" aria-hidden="true">
          </div>
        </button>
      </div>

      <!-- Cart items (scrollable) -->
      <div class="flex flex-col gap-3 flex-1 overflow-y-auto">
        ${buildCartItem('8 oz Single Wall Cups with Lids optional (Box of 1000)', 'Standard (10 Working Days)', 'White Lids')}
        ${buildCartItem('16 oz Double Wall Cups with Lids optional (Box of 500)', 'Express (3 Working Days)', 'Black Lids')}
        ${buildCartItem('12 oz Hot Paper Cups with Lids optional (Box of 1000)', 'Standard (7 Working Days)', 'Kraft Lids')}
      </div>

      <!-- Cart footer: totals + checkout -->
      <div class="flex flex-col gap-3 shrink-0">
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-center gap-4">
            <div class="flex-1 min-w-0 flex flex-col gap-1 text-[#334155]">
              <p class="text-[16px] font-medium leading-[22.72px]">Sub Total</p>
              <p class="text-[14px] leading-[19.88px]">Taxes &amp; Shipping calculated at check out</p>
            </div>
            <p class="text-[20px] font-semibold text-[#0f172a] leading-[26.4px] whitespace-nowrap shrink-0">$3,396.00 AUD</p>
          </div>
          <a href="#" class="text-[14px] text-[#0161a3] underline leading-[19.88px]">Add Order Note</a>
        </div>
        <a href="#" class="bg-[#0161a3] flex items-center justify-between px-4 py-[14px] rounded-[999px] w-full hover:bg-[#024e88] transition-colors duration-200">
          <span class="text-[16px] font-medium text-white leading-[22.72px] whitespace-nowrap">Check out</span>
        </a>
      </div>

    </div>
  </div>

  <!-- ── Mobile Categories Panel (slides up from bottom) ───────── -->
  <div id="mobile-cat-overlay"
       class="fixed inset-0 z-50 flex flex-col items-center justify-end pointer-events-none"
       aria-hidden="true">
    <!-- Backdrop -->
    <div id="mobile-cat-backdrop"
         class="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300"></div>
    <!-- Sliding panel + close button -->
    <div id="mobile-cat-panel"
         class="relative z-10 w-full flex flex-col items-center gap-3 translate-y-full"
         style="transition: transform 0.35s ease-in-out, translate 0.35s ease-in-out;">
      ${closeBtn('mobile-cat-close', '')}
      <div class="bg-white border border-[#f1f5f9] rounded-tl-[24px] rounded-tr-[24px] w-full pt-6 pb-[42px] px-4 shadow-[0px_45px_22.5px_rgba(0,0,0,0.11),0px_11px_12.5px_rgba(0,0,0,0.13)]">
        <div class="flex flex-wrap gap-4 items-start justify-center">
          ${buildMobileCatItems()}
        </div>
      </div>
    </div>
  </div>

`);
