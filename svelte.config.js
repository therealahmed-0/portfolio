import adapter from '@sveltejs/adapter-static';
import path from 'path';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
    }),
    alias: {
      $lib: path.resolve('src/lib'),
      $app: path.resolve('.svelte-kit/app'),
    },
  },
};

export default config;
