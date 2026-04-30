const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const BASE_URL = process.env.SITE_URL || 'http://127.0.0.1:4321';
const screenshotsDir = path.join(__dirname, 'screenshots');

const shots = [
  { name: 'shop-1920.png', url: `${BASE_URL}/shop.html`, width: 1920, height: 1400 },
  { name: 'shop-1440.png', url: `${BASE_URL}/shop.html`, width: 1440, height: 1200 },
  { name: 'shop-390.png', url: `${BASE_URL}/shop.html`, width: 390, height: 1200 },
  { name: 'product-detail-1920.png', url: `${BASE_URL}/product-detail.html`, width: 1920, height: 1400 },
  { name: 'product-detail-1440.png', url: `${BASE_URL}/product-detail.html`, width: 1440, height: 1200 },
  { name: 'product-detail-1280.png', url: `${BASE_URL}/product-detail.html`, width: 1280, height: 1200 },
  { name: 'product-detail-768.png', url: `${BASE_URL}/product-detail.html`, width: 768, height: 1200 },
  { name: 'product-detail-414.png', url: `${BASE_URL}/product-detail.html`, width: 414, height: 1200 },
  { name: 'product-detail-390.png', url: `${BASE_URL}/product-detail.html`, width: 390, height: 1200 },
  { name: 'product-detail-375.png', url: `${BASE_URL}/product-detail.html`, width: 375, height: 1200 },
  { name: 'product-detail-320.png', url: `${BASE_URL}/product-detail.html`, width: 320, height: 1200 },
];

(async () => {
  if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir);

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();

  for (const shot of shots) {
    await page.setViewport({ width: shot.width, height: shot.height, deviceScaleFactor: 1 });
    await page.goto(shot.url, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(screenshotsDir, shot.name), fullPage: true });
    console.log(`Saved screenshots/${shot.name}`);
  }

  await browser.close();
})();
