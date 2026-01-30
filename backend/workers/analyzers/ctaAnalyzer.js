import { Page } from 'playwright';

export async function analyzeCTA(page) {
  const buttons = await page.$$eval('a, button', els =>
    els.map(el => {
      const rect = el.getBoundingClientRect();
      return {
        text: el.textContent?.trim() || '',
        top: rect.top
      };
    })
  );

  return {
    total: buttons.length,
    aboveFold: buttons.some(b => b.top < window.innerHeight),
    texts: buttons.map(b => b.text).filter(Boolean)
  };
}
