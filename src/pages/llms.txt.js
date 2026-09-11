/**
 * llms.txt sinh luc build, theo quy uoc llmstxt.org: chi muc markdown gon
 * gang giup cac bo may tra loi AI (LLM) nam nhanh noi dung trang ma khong
 * phai tu suy dien tu HTML day du. Viet duoi dang endpoint (giong
 * robots.txt.js) de link va mo ta luon dong bo voi du lieu that.
 */
import { SITE_NAME, SITE_DESCRIPTION } from '../config/site.js';
import { NAV_ITEMS } from '../config/site.js';
import { getOrderedStatues } from '../lib/statues.js';
import { statuePath, getProvince } from '../lib/statues.js';
import { truncateDescription, absoluteUrl } from '../lib/seo.js';

export function GET() {
  const statueLines = getOrderedStatues().map((statue) => {
    const province = getProvince(statue.location);
    const summary = truncateDescription(statue.historicalFact, 140);
    return `- [${statue.name}, ${province} (${statue.year})](${absoluteUrl(statuePath(statue.id))}): ${summary}`;
  });

  const navLines = NAV_ITEMS.map((item) => `- [${item.label}](${absoluteUrl(item.href)})`);

  const body = [
    `# ${SITE_NAME}`,
    '',
    `> ${SITE_DESCRIPTION}`,
    '',
    'Tra cuu chi tiet tung linh dia: lich su, kien truc, toa do va nguon tham',
    'khao da kiem chung (Wikipedia, Wikimedia Commons, cac giao phan).',
    '',
    '## Linh dia',
    ...statueLines,
    '',
    '## Trang khac',
    ...navLines,
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
