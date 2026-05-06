document.querySelector('footer').innerHTML = `

  <!-- ── CTA Banner ────────────────────────────────────────────── -->
  <section class="relative overflow-hidden bg-[#7c3612]">

    <!-- Decorative ellipses -->
    <div class="absolute pointer-events-none top-[-39px] right-[-200px] w-[516px] h-[516px]" aria-hidden="true">
      <img src="assets/icons/cta-ellipse-1.svg" alt="" class="w-full h-full">
    </div>
    <div class="absolute pointer-events-none -left-80 -top-56 w-[449px] h-[449px] rotate-[39.44deg]" aria-hidden="true">
      <img src="assets/icons/cta-ellipse-2.svg" alt="" class="w-full h-full">
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-6 md:py-8 lg:py-10 xl:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">

      <h2 class="text-white text-2xl md:text-[28px] lg:text-[32px] font-bold lg:font-medium leading-tight lg:leading-[42.24px] w-full min-w-0 wrap-break-word">
        Ready to Start? Let&rsquo;s Print Your First Batch.
      </h2>

      <a href="contact.html"
         class="group inline-flex items-center gap-2.5 bg-[#ea580c] rounded-full pl-4 pr-1 py-1 text-white text-sm font-medium shrink-0 self-start md:self-auto hover:bg-[#c2410c] transition-colors duration-200">
        Contact Us
        <span class="relative flex items-center justify-center w-[42px] h-[42px] rounded-full bg-white/20 overflow-hidden shrink-0">
          <img src="assets/icons/arrow-up-right.svg" alt=""
               class="absolute w-[35.18px] h-[33.53px] max-w-none top-[14.82px] -left-2 transition-transform duration-500 ease-in-out group-hover:translate-x-12 group-hover:-translate-y-12"
               aria-hidden="true">
          <img src="assets/icons/arrow-up-right.svg" alt=""
               class="absolute w-[35.18px] h-[33.53px] max-w-none top-[14.82px] -left-2 -translate-x-12 translate-y-12 transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"
               aria-hidden="true">
        </span>
      </a>

    </div>
  </section>


  <!-- ── Footer Main ───────────────────────────────────────────── -->
  <div class="bg-white overflow-hidden">
    <div class="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pt-[70px] flex flex-col gap-8 lg:gap-[69px]">

      <!-- Row 1 · Logo + Social -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

        <a href="index.html" class="shrink-0 self-center mx-auto sm:mx-0">
          <img src="assets/images/cups-galore-logo.png" alt="Cups Galore"
               class="h-[65px] w-[162px] object-contain">
        </a>

        <div class="flex items-center justify-center sm:justify-end gap-3">

          <a href="#" aria-label="Facebook"
             class="flex items-center justify-center relative w-6 h-6 shrink-0 hover:opacity-75 transition-opacity duration-150">
            <span class="absolute inset-0 bg-[#e2e8f0] rounded-[4px]"></span>
            <img src="assets/icons/social-facebook.svg" alt=""
                 class="relative z-10 w-[7px] h-3 object-contain" aria-hidden="true">
          </a>

          <a href="#" aria-label="Twitter / X"
             class="flex items-center justify-center relative w-6 h-6 shrink-0 hover:opacity-75 transition-opacity duration-150">
            <span class="absolute inset-0 bg-[#e2e8f0] rounded-[4px]"></span>
            <img src="assets/icons/social-twitter.svg" alt=""
                 class="relative z-10 w-[12px] h-[10px] object-contain" aria-hidden="true">
          </a>

          <a href="#" aria-label="Instagram"
             class="flex items-center justify-center relative w-6 h-6 shrink-0 hover:opacity-75 transition-opacity duration-150">
            <span class="absolute inset-0 bg-[#e2e8f0] rounded-[4px]"></span>
            <img src="assets/icons/social-instagram.svg" alt=""
                 class="relative z-10 w-3 h-3 object-contain" aria-hidden="true">
          </a>

          <a href="#" aria-label="LinkedIn"
             class="flex items-center justify-center w-6 h-6 shrink-0 hover:opacity-75 transition-opacity duration-150">
            <img src="assets/icons/social-linkedin.svg" alt="" class="w-full h-full" aria-hidden="true">
          </a>

          <a href="#" aria-label="YouTube"
             class="flex items-center justify-center w-6 h-6 shrink-0 hover:opacity-75 transition-opacity duration-150">
            <img src="assets/icons/social-youtube.svg" alt="" class="w-full h-full" aria-hidden="true">
          </a>

        </div>
      </div>


      <!-- Row 2 · Navigation + Newsletter -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-6">

        <!-- Navigation columns -->
        <div class="flex flex-col md:flex-row gap-8">

          <!-- Quick Links -->
          <div class="flex flex-col gap-3">
            <div class="px-3">
              <p class="font-semibold text-[18px] text-black leading-normal whitespace-nowrap">Quick Links</p>
            </div>
            <nav class="flex flex-col gap-1">
              <a href="index.html"   class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Home</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Home</span></span></a>
              <a href="about.html"   class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">About Us</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">About Us</span></span></a>
              <a href="shop.html"            class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Shops</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Shops</span></span></a>
              <a href="blogs.html"            class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Blogs</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Blogs</span></span></a>
              <a href="faq.html"            class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">FAQ</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">FAQ</span></span></a>
              <a href="contact.html" class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Contact Us</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Contact Us</span></span></a>
            </nav>
          </div>

          <!-- Product Category -->
          <div class="flex flex-col gap-3">
            <div class="px-3">
              <p class="font-semibold text-[18px] text-black leading-normal whitespace-nowrap">Product Category</p>
            </div>
            <nav class="flex flex-col gap-1">
              <a href="shop.html" class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Branded &amp; Custom Cups</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Branded &amp; Custom Cups</span></span></a>
              <a href="shop.html" class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Ready Designs</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Ready Designs</span></span></a>
              <a href="shop.html" class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Reusable Cups</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Reusable Cups</span></span></a>
              <a href="shop.html" class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Plain Cups</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Plain Cups</span></span></a>
              <a href="shop.html" class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Packaging</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Packaging</span></span></a>
            </nav>
          </div>

          <!-- Downloads -->
          <div class="flex flex-col gap-3">
            <div class="px-3">
              <p class="font-semibold text-[18px] text-black leading-normal whitespace-nowrap">Downloads</p>
            </div>
            <nav class="flex flex-col gap-1">
              <a href="#" class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Design Template 8Oz Single Wall Custom Cup</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Design Template 8Oz Single Wall Custom Cup</span></span></a>
              <a href="#" class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Design Template 8Oz Double Wall Custom Cup</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Design Template 8Oz Double Wall Custom Cup</span></span></a>
              <a href="#" class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Design Template 12Oz Single Wall Custom Cup</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Design Template 12Oz Single Wall Custom Cup</span></span></a>
              <a href="#" class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Design Template 12Oz Double Wall Custom Cup</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Design Template 12Oz Double Wall Custom Cup</span></span></a>
              <a href="#" class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Design Template 16Oz Single Wall Custom Cup</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Design Template 16Oz Single Wall Custom Cup</span></span></a>
              <a href="#" class="px-3 py-2 text-[16px] text-[#334155] leading-[22.72px] group block"><span class="block relative overflow-hidden h-[22.72px]"><span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Design Template 16Oz Double Wall Custom Cup</span><span class="block absolute inset-x-0 top-full transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-[#ea580c]">Design Template 16Oz Double Wall Custom Cup</span></span></a>
            </nav>
          </div>

        </div>


        <!-- Newsletter · Stay in Touch -->
        <div class="w-full lg:w-[320px] shrink-0 flex flex-col gap-[18px]">

          <div class="flex flex-col gap-[10px]">
            <p class="text-[20px] font-medium text-[#0f172a] leading-[26.4px]">Stay in Touch</p>
            <p class="text-[14px] text-[#475569] leading-[19.88px]">
              Subscribe to get special offers, free giveaways and one-in-a life time deals.
            </p>
          </div>

          <div class="flex flex-col gap-[11px]">
            <label for="footer-email" class="text-[14px] text-[#334155] leading-[19.88px]">Email Address</label>
            <div class="border-b border-[#e2e8f0] flex items-center h-9 px-2">
              <input id="footer-email" type="email" placeholder="Enter your email"
                     class="flex-1 min-w-0 text-[14px] leading-[19.88px] bg-transparent outline-none text-[#94a3b8] placeholder:text-[#94a3b8]">
            </div>
          </div>

          <a href="shop.html"
             class="group inline-flex items-center gap-2.5 bg-[#065386] rounded-full pl-4 pr-1 py-1 text-white text-[16px] font-medium leading-[22.72px] w-fit hover:bg-[#054370] transition-colors duration-200">
            Explore &amp; Shop Now
            <span class="relative flex items-center justify-center w-[42px] h-[42px] rounded-full bg-white/20 overflow-hidden shrink-0">
              <img src="assets/icons/arrow-up-right.svg" alt=""
                   class="absolute w-[35.18px] h-[33.53px] max-w-none top-[14.82px] -left-2 transition-transform duration-500 ease-in-out group-hover:translate-x-12 group-hover:-translate-y-12"
                   aria-hidden="true">
              <img src="assets/icons/arrow-up-right.svg" alt=""
                   class="absolute w-[35.18px] h-[33.53px] max-w-none top-[14.82px] -left-2 -translate-x-12 translate-y-12 transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"
                   aria-hidden="true">
            </span>
          </a>

        </div>
      </div>

    </div>


    <!-- Bottom bar -->
    <div class="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 mt-8 lg:mt-[68px] border-t border-[#f1f5f9] py-[34px] flex flex-col md:flex-row md:items-center md:justify-between gap-5">

      <p class="text-[14px] text-[#334155] leading-normal whitespace-nowrap text-center md:text-left">
        All Right Reserved | @2026 - Cups Galore
      </p>

      <div class="flex items-center justify-center flex-wrap">
        <a href="#" class="px-3 py-2 text-[16px] text-[#334155] hover:text-[#ea580c] transition-colors duration-150">Terms</a>
        <a href="#" class="px-3 py-2 text-[16px] text-[#334155] hover:text-[#ea580c] transition-colors duration-150">Privacy</a>
        <a href="#" class="px-3 py-2 text-[16px] text-[#334155] hover:text-[#ea580c] transition-colors duration-150">Cookies</a>
        <a href="#" class="px-3 py-2 text-[16px] text-[#334155] hover:text-[#ea580c] transition-colors duration-150">Sitemap</a>
      </div>

      <button type="button"
              class="inline-flex items-center gap-2.5 border border-[#e2e8f0] rounded-full px-4 py-3 hover:border-[#94a3b8] transition-colors duration-200 mx-auto md:mx-0">
        <span class="flex items-center gap-1">
          <span class="w-6 h-6 shrink-0 overflow-hidden">
            <img src="assets/icons/globe.svg" alt="" class="w-full h-full" aria-hidden="true">
          </span>
          <span class="text-[14px] text-[#334155] leading-normal whitespace-nowrap">English</span>
        </span>
        <span class="w-4 h-4 shrink-0 overflow-hidden">
          <svg class="shop-filter-chevron size-4 transition-transform text-[#334155]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
      </button>

    </div>
  </div>

`;
