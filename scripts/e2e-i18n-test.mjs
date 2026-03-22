/**
 * E2E i18n language-switching test.
 * Takes screenshots of every major page in English and French.
 *
 * Run:  npx playwright test scripts/e2e-i18n-test.mjs  (or just node)
 */
import { chromium } from '@playwright/test';

const BASE = 'http://localhost:3006';
const DIR  = 'screenshots/e2e';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // ---------- 1. Homepage ENGLISH ----------
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${DIR}/01-home-en.png`, fullPage: true });
  console.log('1. Homepage EN  -- captured');

  // ---------- 2. Switch to FRENCH via LanguageSelector ----------
  // The selector shows "EN" as the button text. Click it to open dropdown.
  const langBtn = page.locator('.dropdown button.dropdown-toggle').filter({ hasText: 'EN' }).first();
  if (await langBtn.isVisible({ timeout: 3000 })) {
    await langBtn.click();
    await page.waitForTimeout(500);

    // Click "FR" option inside the dropdown
    const frOption = page.locator('.dropdown .dropdown-item').filter({ hasText: 'FR' }).first();
    if (await frOption.isVisible({ timeout: 2000 })) {
      await frOption.click();
      console.log('   Clicked FR option');
    }
  } else {
    console.log('   WARN: EN button not found, trying alternate selector');
    // Fallback: set locale via JS
    await page.evaluate(() => {
      localStorage.setItem('locale', 'fr');
    });
    await page.reload({ waitUntil: 'networkidle' });
  }

  await page.waitForTimeout(4000); // Wait for re-fetch + reactivity
  await page.screenshot({ path: `${DIR}/02-home-fr.png`, fullPage: true });
  console.log('2. Homepage FR  -- captured');

  // ---------- 3. Services page (French) ----------
  await page.goto(`${BASE}/services`, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${DIR}/03-services-fr.png`, fullPage: true });
  console.log('3. Services FR  -- captured');

  // ---------- 4. About page (French) ----------
  await page.goto(`${BASE}/about`, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${DIR}/04-about-fr.png`, fullPage: true });
  console.log('4. About FR     -- captured');

  // ---------- 5. Contact page (French) ----------
  await page.goto(`${BASE}/contact`, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${DIR}/05-contact-fr.png`, fullPage: true });
  console.log('5. Contact FR   -- captured');

  // ---------- 6. Switch back to ENGLISH ----------
  const langBtn2 = page.locator('.dropdown button.dropdown-toggle').filter({ hasText: 'FR' }).first();
  if (await langBtn2.isVisible({ timeout: 3000 })) {
    await langBtn2.click();
    await page.waitForTimeout(500);

    const enOption = page.locator('.dropdown .dropdown-item').filter({ hasText: 'EN' }).first();
    if (await enOption.isVisible({ timeout: 2000 })) {
      await enOption.click();
      console.log('   Clicked EN option');
    }
  } else {
    // Fallback
    await page.evaluate(() => {
      localStorage.setItem('locale', 'en');
    });
    await page.reload({ waitUntil: 'networkidle' });
  }

  await page.waitForTimeout(4000);

  // Navigate back to homepage
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${DIR}/06-home-en-back.png`, fullPage: true });
  console.log('6. Homepage EN (back) -- captured');

  await browser.close();
  console.log('\nAll 6 screenshots saved to screenshots/e2e/');
})();
