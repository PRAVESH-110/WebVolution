import { chromium } from 'playwright';

export async function withPage(url, fn) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });

  const page = await context.newPage();

  try {
    await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: 15000
    });

    return await fn(page);
  } finally {
    await browser.close();
  }
}
