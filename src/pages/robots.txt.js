/**
 * robots.txt sinh luc build, tro toi sitemap bang URL tuyet doi.
 * Viet duoi dang endpoint thay vi file tinh trong public/ de domain luon
 * dong bo voi SITE_URL, khong bao gio lech nhau.
 */
import { SITE_URL } from '../config/site.js';

export function GET() {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('/sitemap-index.xml', SITE_URL).href}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
