import { withPage } from '../services/withPage';
import { analyzeCTA } from '../analyzers/ctaAnalyzer';

let ctaMetrics = null;

try {
  ctaMetrics = await withPage(scan.url, async page => {
    return analyzeCTA(page);
  });
} catch (err) {
  console.warn('CTA analysis failed', err);
}
