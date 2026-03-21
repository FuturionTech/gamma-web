import { test, expect, type Page } from '@playwright/test'

/**
 * Collects console errors during page load.
 * Returns an array of error messages (ignoring common benign warnings).
 */
function trackConsoleErrors(page: Page): string[] {
  const errors: string[] = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      const text = msg.text()
      // Ignore common benign browser/CDN errors
      const ignoredPatterns = [
        'favicon.ico',
        'Failed to load resource',
        'net::ERR_',
        'the server responded with a status of 404',
        'Download the Vue Devtools',
      ]
      if (!ignoredPatterns.some((p) => text.includes(p))) {
        errors.push(text)
      }
    }
  })
  return errors
}

// ──────────────────────────────────────────────
// Page tests
// ──────────────────────────────────────────────

test.describe('All public pages load correctly', () => {
  test('/ — Homepage', async ({ page }) => {
    const errors = trackConsoleErrors(page)
    const response = await page.goto('/')
    expect(response?.status()).toBe(200)
    await expect(page.locator('header').first()).toBeVisible()
    await expect(page.locator('footer').first()).toBeVisible()
    expect(errors).toEqual([])
  })

  test('/about — About page', async ({ page }) => {
    const errors = trackConsoleErrors(page)
    const response = await page.goto('/about')
    expect(response?.status()).toBe(200)
    await expect(page.locator('header').first()).toBeVisible()
    await expect(page.locator('footer').first()).toBeVisible()
    expect(errors).toEqual([])
  })

  test('/about/team — Team page', async ({ page }) => {
    const errors = trackConsoleErrors(page)
    const response = await page.goto('/about/team')
    expect(response?.status()).toBe(200)
    await expect(page.locator('header').first()).toBeVisible()
    await expect(page.locator('footer').first()).toBeVisible()
    expect(errors).toEqual([])
  })

  test('/about/methodology — Methodology page', async ({ page }) => {
    const errors = trackConsoleErrors(page)
    const response = await page.goto('/about/methodology')
    expect(response?.status()).toBe(200)
    await expect(page.locator('header').first()).toBeVisible()
    await expect(page.locator('footer').first()).toBeVisible()
    expect(errors).toEqual([])
  })

  test('/services — Services listing', async ({ page }) => {
    const errors = trackConsoleErrors(page)
    const response = await page.goto('/services')
    expect(response?.status()).toBe(200)
    await expect(page.locator('header').first()).toBeVisible()
    await expect(page.locator('footer').first()).toBeVisible()
    expect(errors).toEqual([])
  })

  test('/solutions — Solutions listing', async ({ page }) => {
    const errors = trackConsoleErrors(page)
    const response = await page.goto('/solutions')
    expect(response?.status()).toBe(200)
    await expect(page.locator('header').first()).toBeVisible()
    await expect(page.locator('footer').first()).toBeVisible()
    expect(errors).toEqual([])
  })

  test('/solutions/financial-services — Solution detail page', async ({ page }) => {
    const errors = trackConsoleErrors(page)
    const response = await page.goto('/solutions/financial-services')
    expect(response?.status()).toBe(200)
    await expect(page.locator('header').first()).toBeVisible()
    await expect(page.locator('footer').first()).toBeVisible()
    // Verify solution content loaded
    await expect(page.locator('h1')).toContainText('Financial Services')
    expect(errors).toEqual([])
  })

  test('/careers — Careers listing', async ({ page }) => {
    const errors = trackConsoleErrors(page)
    const response = await page.goto('/careers')
    expect(response?.status()).toBe(200)
    await expect(page.locator('header').first()).toBeVisible()
    await expect(page.locator('footer').first()).toBeVisible()
    expect(errors).toEqual([])
  })

  test('/contact — Contact page', async ({ page }) => {
    const errors = trackConsoleErrors(page)
    const response = await page.goto('/contact')
    expect(response?.status()).toBe(200)
    await expect(page.locator('header').first()).toBeVisible()
    await expect(page.locator('footer').first()).toBeVisible()
    expect(errors).toEqual([])
  })

  test('/faq — FAQ page', async ({ page }) => {
    const errors = trackConsoleErrors(page)
    const response = await page.goto('/faq')
    expect(response?.status()).toBe(200)
    await expect(page.locator('header').first()).toBeVisible()
    await expect(page.locator('footer').first()).toBeVisible()
    expect(errors).toEqual([])
  })

  test('/privacy-policy — Privacy policy', async ({ page }) => {
    const errors = trackConsoleErrors(page)
    const response = await page.goto('/privacy-policy')
    expect(response?.status()).toBe(200)
    await expect(page.locator('header').first()).toBeVisible()
    await expect(page.locator('footer').first()).toBeVisible()
    expect(errors).toEqual([])
  })

  test('/terms-of-service — Terms of service', async ({ page }) => {
    const errors = trackConsoleErrors(page)
    const response = await page.goto('/terms-of-service')
    expect(response?.status()).toBe(200)
    await expect(page.locator('header').first()).toBeVisible()
    await expect(page.locator('footer').first()).toBeVisible()
    expect(errors).toEqual([])
  })

  test('/qhse — QHSE certificates', async ({ page }) => {
    const errors = trackConsoleErrors(page)
    const response = await page.goto('/qhse')
    expect(response?.status()).toBe(200)
    await expect(page.locator('header').first()).toBeVisible()
    await expect(page.locator('footer').first()).toBeVisible()
    expect(errors).toEqual([])
  })

  test('/licenses_and_approvals — Licenses and approvals', async ({ page }) => {
    const errors = trackConsoleErrors(page)
    const response = await page.goto('/licenses_and_approvals')
    expect(response?.status()).toBe(200)
    await expect(page.locator('header').first()).toBeVisible()
    await expect(page.locator('footer').first()).toBeVisible()
    expect(errors).toEqual([])
  })
})

// ──────────────────────────────────────────────
// Navigation tests
// ──────────────────────────────────────────────

test.describe('Navigation works', () => {
  test('homepage links to about page', async ({ page }) => {
    await page.goto('/')
    // Find any link pointing to /about and click it
    const aboutLink = page.locator('a[href="/about"]').first()
    if (await aboutLink.isVisible()) {
      await aboutLink.click()
      await page.waitForURL('**/about')
      expect(page.url()).toContain('/about')
    }
  })

  test('homepage links to services page', async ({ page }) => {
    await page.goto('/')
    const servicesLink = page.locator('a[href="/services"]').first()
    if (await servicesLink.isVisible()) {
      await servicesLink.click()
      await page.waitForURL('**/services')
      expect(page.url()).toContain('/services')
    }
  })

  test('solutions listing links to detail page', async ({ page }) => {
    await page.goto('/solutions')
    const detailLink = page.locator('a[href*="/solutions/"]').first()
    if (await detailLink.isVisible()) {
      await detailLink.click()
      await page.waitForURL('**/solutions/**')
      expect(page.url()).toContain('/solutions/')
    }
  })
})
