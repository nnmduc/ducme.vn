// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { SITE_URL } from './src/config/site.js';

export default defineConfig({
  // Bat buoc cho canonical, og:url va sitemap tuyet doi.
  site: SITE_URL,

  // Moi URL noi bo ket thuc bang dau "/" de canonical khong bi nhan doi.
  trailingSlash: 'always',

  integrations: [sitemap()],

  build: {
    // Thu muc long nhau: /linh-dai/tapao/index.html
    format: 'directory',
    inlineStylesheets: 'auto',
  },

  image: {
    // Giu mac dinh sharp; chi cho phep anh cuc bo, khong cho domain ngoai.
    responsiveStyles: true,
  },

  vite: {
    build: {
      // Anh tu lieu deu > 4kb, khong can inline thanh base64.
      assetsInlineLimit: 2048,
    },
  },
});
