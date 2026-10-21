import { test, expect } from '@playwright/test'

test('legacy music URLs redirect permanently to Studios', async ({
  request,
}) => {
  for (const path of ['/music', '/music/']) {
    const response = await request.get(path, { maxRedirects: 0 })
    expect(response.status()).toBe(301)
    expect(response.headers().location).toBe('/studios/')
  }
})

test('Studios has canonical metadata and keeps the software site accessible', async ({
  page,
}) => {
  await page.goto('/studios/')
  await expect(page).toHaveTitle('Omereshone Studios | Film & Original Music')
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://omereshone.com/studios/',
  )
  await expect(page.locator('[data-rate-option]')).toHaveCount(5)
  await expect(page.locator('audio[autoplay], video[autoplay]')).toHaveCount(0)
  await page.getByRole('link', { name: 'Kelvin’s personal site' }).click()
  await expect(page.locator('header')).toContainText(
    'Developer. Teacher. Speaker.',
  )
  await expect(
    page.getByRole('link', { name: 'Studios', exact: true }),
  ).toHaveAttribute('href', '/studios/')
})

test('booking deep links, currencies and quantities produce the correct brief', async ({
  page,
}) => {
  await page.goto('/studios/?service=film-score&qty=2&currency=usd#rates')
  await expect(page.locator('[data-estimate-service]')).toHaveText('Film score')
  await expect(page.locator('[data-estimate-total]')).toHaveText('$2,000')
  await page.getByRole('button', { name: 'Show naira prices' }).click()
  await expect(page.locator('[data-estimate-total]')).toHaveText('₦600,000')
  await page.getByRole('button', { name: 'Increase quantity' }).click()
  await expect(page.locator('[data-estimate-total]')).toHaveText('₦900,000')
  const brief = decodeURIComponent(
    (await page.locator('[data-estimate-mailto]').getAttribute('href')) || '',
  )
  expect(brief).toContain('mailto:music@omereshone.com')
  expect(brief).toContain('Quantity: 3 cue packages')
  await page.locator('[data-estimate-quantity]').fill('100')
  await page.locator('[data-estimate-quantity]').dispatchEvent('change')
  await expect(page.locator('[data-estimate-quantity]')).toHaveValue('20')
})

test('Studios fits narrow and wide screens and respects reduced motion', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/studios/')
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true)
    expect(
      await page
        .locator('.studios-portrait')
        .evaluate(
          (image: HTMLImageElement) => image.complete && image.naturalWidth > 0,
        ),
    ).toBe(true)
  }
  expect(
    await page
      .locator('#studio-title')
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe('none')
})
