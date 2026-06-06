// @ts-check
import { defineConfig } from 'astro/config';

import vercelStatic from '@astrojs/vercel';
 
export default defineConfig({
  output: 'server',
  adapter: vercelStatic(),
});