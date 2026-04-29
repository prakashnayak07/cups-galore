const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const file = 'file:///' + path.join(__dirname, 'index.html').replace(/\\/g, '/');

  // Desktop 1440
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(file, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'nav-1440.png' });
  console.log('1440 done');

  // Mobile 390
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(file, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'nav-390.png' });
  console.log('390 done');

  // Desktop 1920
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(file, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'nav-1920.png' });
  console.log('1920 done');

  await browser.close();
})();
